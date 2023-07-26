import pymysql
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
    cursor.close()
    conn.close()

def query(sql,*args):
    """
    封装通用查询
    :param sql:
    :param args:
    :return: 返回查询到的结果，((),(),)的形式
    """
    conn, cursor = get_conn()
    cursor.execute(sql,args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res

def no():
    sql = "select wind_class,wind_speed,wind_dir,temp_fc from apices where data_time = (select data_time from apices order by data_time desc limit 1)"
    res = query(sql)
    return res[0]

def bar2():
    sql = "select data_time,pressure from apices order by data_time desc limit 24"
    res = query(sql)
    return res

def line():
    sql = "select data_time,wind_speed from apices order by data_time desc limit 24"
    res = query(sql)
    return res

def line2():
    sql = "select data_time,temp_fc from apices order by data_time desc limit 24"
    res = query(sql)
    return res

def pie():
    sql = "select rh from apices where data_time = (select data_time from apices order by data_time desc limit 1)"
    res = query(sql)
    return res[0]

def bar():
    sql = "select data_time,aqi from kqdata order by data_time desc limit 24"
    res = query(sql)
    return res

def pie2():
    sql = "select pm10,pm25,no2,so2,co,o3 from kqdata order by data_time desc limit 1"
    res = query(sql)
    return res

if __name__ == "__main__":
    print(pie2())