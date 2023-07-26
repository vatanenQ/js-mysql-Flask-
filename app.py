import flask
from flask import Flask,render_template,jsonify
import random
import util
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/no')
def no():
    data = util.no()
    return jsonify({"fl":data[0],"fs":data[1],"fx":data[2],"wd":data[3]})

@app.route('/bar2')
def bar2():
    data = util.bar2()
    data_time,pressure=[],[]
    for a,b in data:
        data_time.append(a.strftime("%m-%d %H:%M"))
        pressure.append(b)
    return jsonify({"data_time":data_time,"pressure":pressure})

@app.route('/line')
def line():
    data = util.line()
    data_time,wind_speed=[],[]
    for a,b in data:
        data_time.append(a.strftime("%m-%d %H:%M"))
        wind_speed.append(b)
    return jsonify({"data_time":data_time,"wind_speed":wind_speed})

@app.route('/line2')
def line2():
    data = util.line2()
    data_time,temp_fc=[],[]
    for a,b in data:
        data_time.append(a.strftime("%m-%d %H:%M"))
        temp_fc.append(b)
    return jsonify({"data_time":data_time,"temp_fc":temp_fc})

@app.route('/pie')
def pie():
    data = util.pie()
    #因为前端是仪表盘，此处就直接是数据，不再把括号去掉，不然两位数会分成两个数据
    return jsonify({"value":data})

@app.route('/bar')
def bar():
    data = util.bar()
    data_time,aqi=[],[]
    for a,b in data:
        data_time.append(a.strftime("%m-%d %H:%M"))
        aqi.append(b)
       # d=(data_time,aqi)
    return jsonify({"data_time":data_time,"aqi":aqi})

@app.route('/pie2')
def pie2():
    data = util.pie2()
    d = []
    for i in data:
        pm10 = i[0]
        pm25 = i[1]
        no2 = i[2]
        so2 = i[3]
        co = i[4]
        o3 = i[5]
        d.append({"name":"pm10","value":pm10})
        d.append({"name":"pm25","value":pm25})
        d.append({"name": "no2", "value": no2})
        d.append({"name": "so2", "value":so2})
        d.append({"name": "co", "value": co})
        d.append({"name": "o3", "value": o3})
    #d = {"name":"pm10","value":data[0]},{"name":"pm25","value":data[1]},{"name":"no2","value":data[2]},{"name":"so2","value":data[3]},{"name":"co","value":data[4]},{"name":"o3","value":data[5]}


    return jsonify({"d":d})

if __name__ == "__main__":
    app.run(host='127.0.0.1',port=4400)
    #print(pie2())

