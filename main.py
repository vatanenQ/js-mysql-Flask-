# 这是一个示例 Python 脚本。

# 按 Shift+F10 执行或将其替换为您的代码。
# 按 双击 Shift 在所有地方搜索类、文件、工具窗口、操作和设置。
import requests
import json
import pymysql
import time
import traceback

def get_data():
    #APi数据接口用自己的api接口
    url='http://gfapi.mlogcn.com/weather/v001/hour?'
    r = requests.get(url)
    con = json.loads(r.text)["result"]
    return con
def get_details():
    con = get_data()
    details = []
    for i in con["hourly_fcsts"]:
        data_time = i["data_time"]
        text = i["text"]
        code = i["code"]
        temp_fc = i["temp_fc"]
        wind_class = i["wind_class"]
        wind_speed = i["wind_speed"]
        wind_dir = i["wind_dir"]
        wind_angle = i["wind_angle"]
        rh = i["rh"]
        prec = i["prec"]
        pressure = i["pressure"]
        clouds = i["clouds"]
        feels_like = i["feels_like"]
        details.append([data_time,text,code,temp_fc,wind_class,wind_speed,wind_dir,wind_angle,rh,prec,pressure,clouds,feels_like])
    return details

def get_conn():
    """
    :return: 连接，游标
    """
    # 创建连接
    conn = pymysql.connect(host="127.0.0.1",
                           user="root",
                           password="12345678",
                           db="xiangmu",
                           charset="utf8")
    # 创建游标
    cursor = conn.cursor()# 执行完毕返回的结果集默认以元组显示
    return conn, cursor
def close_conn(conn, cursor):
    if cursor:
        cursor.close()
    if conn:
        conn.close()

def update_details():
    """
    更新 details 表
    :return:
    """
    cursor = None
    conn = None
    try:
        li = get_details()  # 0 是历史数据字典,1 最新详细数据列表
        conn, cursor = get_conn()
        sql = "insert into apices (data_time,text,code,temp_fc,wind_class,wind_speed,wind_dir,wind_angle,rh,prec,pressure,clouds,feels_like) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        sql_query = 'select %s=(select data_time from apices order by id desc limit 1)'  # 对比当前最大时间戳
        cursor.execute(sql_query, li[0][3])
        if not cursor.fetchone()[0]:
            print(f"{time.asctime()}开始更新最新数据")
            for item in li:
                cursor.execute(sql, item)
            conn.commit()  # 提交事务 update delete insert操作
            print(f"{time.asctime()}更新最新数据完毕")
        else:
            print(f"{time.asctime()}已是最新数据！")

    except:
        traceback.print_exc()
    finally:
        close_conn(conn, cursor)

# 按间距中的绿色按钮以运行脚本。
if __name__ == '__main__':
    update_details()

# 访问 https://www.jetbrains.com/help/pycharm/ 获取 PyCharm 帮助
