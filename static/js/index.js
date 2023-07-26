
// 柱状图模块1
(function () {
  // 1实例化对象
  var myChart = echarts.init(document.getElementById("bar"));
  //2.指定配置项和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line'线 | 'shadow'影子
      }
    },
    //修改图表大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        axisTick: {
          alignWithLabel: true
        },
        //修改刻度表签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: "12"
        },
        //x轴显示不显示
        axisLine: {
          show: false
        },
      }
    ],
    yAxis: [
      {
        type: "value",
        //修改刻度表签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: "12"
        },
        //Y轴的线条改为了2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        //Y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          }
        },
      }
    ],
    series: [
      // {
      //   name: "直接访问",
      //   type: "bar",
      //   //修改柱子宽度
      //   barWidth: "35%",

      //   data: [200, 300, 300, 900, 1500, 1200, 600],
      //   itemStyle:{
      //     //修改柱子圆角
      //     barBorderRadius:5
      //   }
      // }
      {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(158,221,9,1)' },
            { offset: 0.2, color: 'rgba(157,13,228,0.7)' },
            { offset: 1, color: 'rgba(168,221,9,0.8)' }
          ])
        },
        z: -12,
        data: [200, 300, 300, 900, 1500, 1200, 600]
      },
      {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
          color: '#0f3756'
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: [200, 300, 300, 900, 1500, 1200, 600]
      }
    ]
  };
  //3.把配置项给实例对象
  myChart.setOption(option);
  //4.让图表跟随屏幕自动改变
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  function data() {
    $.ajax({
        url:"/bar",
        success:function(data){
            option.xAxis[0].data = data.data_time
            option.series[0].data = data.aqi
            option.series[1].data = data.aqi
            myChart.setOption(option)
    },
    error: function(xhr, type, errorThrown) {
    }
    })
}
//data()
setInterval(data(),10000)

})();
//柱状图2
(function () {
  var myColor = ["#23ee01",];
  //1.实例化对象
  var myChart = echarts.init(document.getElementById("bar2"));
  //   var option = {
  //     grid: {
  //         top:'10%',
  //         left: '22%',
  //         bottom: '10%',
  //         //containLabel: true
  //     },
  //     //不显示X轴的相关信息
  //     xAxis: {
  //         show:false
  //     },
  //     yAxis: [
  //       {
  //         type: 'category',
  //         inverse:true,
  //         data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
  //         axisLine:{
  //           show:false
  //         },
  //         axisTick:{
  //           show:false
  //         },
  //         // 把刻度标签里面的文字颜色设置为白色
  //         axisLabel:{
  //           color:"#fff"
  //         }
  //     },
  //     {
  //       type: 'category',
  //       inverse:true,
  //       data: [702,350,610,793,664,777,11,111,22,222],
  //       axisLine:{
  //         show:false
  //       },
  //       axisTick:{
  //         show:false
  //       },
  //       // 把刻度标签里面的文字颜色设置为白色
  //       axisLabel:{
  //         color:"#fff"
  //       }
  //     }
  //     ],
  //     series: [
  //         {
  //             name: '条',
  //             type: 'bar',
  //             data: [70,34,60,78,69,77,11,22,11,22,44,55],
  //             //修改一柱的圆角
  //             itemStyle:{            
  //               barBorderRadius:20,
  //               // 此时的color可以修改柱子的颜色
  //               color:function(params){
  //               //params  传进来是柱子的对象
  //               //console.log(params);
  //               //dataIndex是当前柱子的索引号
  //               return myColor[params.dataIndex];

  //               }          
  //             },
  //             //柱子间距离
  //             barCategoryGap:50,
  //             //柱子间宽度
  //             barWidth:10,
  //             //图形上的文本标签
  //             label:{
  //               show:true,
  //               position:'inside',
  //               //{C}会自动解析为数据data中的数据
  //               formatter:"{c}%",
  //               yAxisIndex:0,
  //             }
  //         },

  //     ]
  // };
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line'线 | 'shadow'影子
      }
    },
    grid: {
      top: '10%',
      left: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      axisLabel: {
        color: "rgba(255,255,255,.6) ",
        fontSize: "12"
      },
      //x轴显示不显示
      axisLine: {
        show: false
      },
    }],
    yAxis: [
      {
        type: "value",
        //修改刻度表签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: "12"
        },
        //Y轴的线条改为了2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        //Y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          }
        },
      },
    ],
    itemStyle: {
      barBorderRadius: 20,
      // 此时的color可以修改柱子的颜色
      color: function (params) {
        //params  传进来是柱子的对象
        //console.log(params);
        //dataIndex是当前柱子的索引号
        return myColor[params.dataIndex];

      }
    },

    series: [
      {
        data: [70, 34, 60, 78, 69, 77, 11, 22, 11, 22, 44, 55],
        type: 'bar'
      }
    ]
  };

  //3.把配置给实例对象
  myChart.setOption(option);
  //4.让图表跟随屏幕自动改变
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  function data() {
    $.ajax({
        url:"/bar2",
        success:function(data){
            option.xAxis[0].data = data.data_time
            option.series[0].data = data.pressure
            myChart.setOption(option)
    },
    error: function(xhr, type, errorThrown) {
    }
    })
}
//data()
setInterval(data(),10000)

})();
//折线图1模块制作
(function () {
  var yearData = [
    {
      year: '2020',  // 年份
      data: [  // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    // {
    //   year: '2021',  // 年份
    //   data: [  // 两个数组是因为有两条线
    //     [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
    //     [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
    //   ]
    // }
  ];
  //1.实例化对象
  var myChart = echarts.init(document.getElementById("line"));
  //2.指定配置
  var option = {
    //通过color修改颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      //如果series里对象有name，则legend中可以不用写data: ['新增粉丝', '新增游客'],
      //修改图例组件，文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      //10%，加引号
      right: "10%",
    },
    //设置网格样式
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,//显示边框
      borderColor: '#012f4a',//边框颜色
      containLabel: true,   //包含刻度文字
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,//去除轴内间距
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      axisTick: {
        show: false, //去除刻度线

      },
      axisLabel: {
        color: '#4c9bfd'//文本颜色
      },
      axisLine: {
        show: false,//去除轴线
      },
    }],
    yAxis: {
      type: 'value',
      axisTick: {
        show: false, //去除刻度线

      },
      axisLabel: {
        color: '#4c9bfd'//文本颜色
      },
      axisLine: {
        show: false,//去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012fa4" //分割线颜色
        }
      }
    },
    series: [
      
      // {
      //   smooth: true,//折现带弧度
      //   type: 'line',
      //   name: '昨天',
      //   data: yearData[0].data[0],
      //   areaStyle: {
      //     opacity: 0.8,
      //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //       {
      //         offset: 0,
      //         color: 'rgb(0, 221, 255)'
      //       },
      //       {
      //         offset: 1,
      //         color: 'rgb(77, 119, 255)'
      //       }
      //     ])
      //   },
      // },
      {
        smooth: true,
        type: 'line',
        //name: '今天',
        data: yearData[0].data[1],
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 0, 135)'
            },
            {
              offset: 1,
              color: 'rgb(135, 0, 157)'
            }
          ])
        },
      },
    ]
  };
  //3.把配置给实例对象
  myChart.setOption(option);
  //4.让图表跟随屏幕自动改变
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  //5.点击切换效果
  // $('.line h2').on('click', 'a', function () {
  //   //alert(1)
  //   //console.log($(this).index());
  //   //点击a之后 根据当前的a的索引号 找到对应的yearData的相关对象
  //   // console.log(yearData[$(this).index()]);
  //   var obj = yearData[$(this).index()];
  //   option.series[0].data = obj.data[0];
  //   option.series[1].data = obj.data[1];
  //   //需要重新渲染
  //   myChart.setOption(option);
  // });

  function data() {
    $.ajax({
        url:"/line",
        success:function(data){
            option.xAxis[0].data = data.data_time
            option.series[0].data = data.wind_speed
            myChart.setOption(option)
    },
    error: function(xhr, type, errorThrown) {
    }
    })
}
//data()
setInterval(data(),10000)

})();
//折线图2模块制作
(function () {
  var myChart = echarts.init(document.getElementById('line2'));
  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "%0",
      //data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      // {
      //   name: '上午',
      //   type: 'line',
      //   smooth: true,//线圆滑
      //   // 单独修改线条的样式
      //   lineStyle: {
      //     color: "#0184d5",
      //     width: "3",
      //   },
      //   //填充颜色设置区域
      //   areaStyle: {
      //     //填充区域
      //     color: new echarts.graphic.LinearGradient(
      //       0,
      //       0,
      //       0,
      //       1,
      //       [
      //         {
      //           offset: 0,
      //           color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
      //         },
      //         {
      //           offset: 0.8,
      //           color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
      //         }
      //       ],
      //       false
      //     ),
      //     shadowColor: "rgba(0, 0, 0, 0.1)"
      //   },
      //   //设置拐点 小圆点
      //   Symbol: "circle",
      //   //拐点大小
      //   symbolSize: 5,
      //   // 设置拐点颜色以及边框
      //   itemStyle: {
      //     color: "#0184d57",
      //     borderColor: "rgba(221, 220, 107, 0.1)",
      //     borderWidth: 12
      //   },
      //   // 开始不显示拐点， 鼠标经过显示
      //   showSymbol: false,
      //   emphasis: {
      //     focus: 'series'
      //   },
      //   data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
      // },
      {
        //name: '下午',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  },)

  function data() {
    $.ajax({
        url:"/line2",
        success:function(data){
            option.xAxis[0].data = data.data_time
            option.series[0].data = data.temp_fc
            myChart.setOption(option)
    },
    error: function(xhr, type, errorThrown) {
    }
    })
}
//data()
setInterval(data(),10000)

})();
//饼1
(function () {
  //1、实例化对象
  var myChart = echarts.init(document.getElementById("pie"));
  //   color: [
  //     "#065aab",
  //     "#066eab",
  //     "#0682ab",
  //     "#0696ab",
  //     "#06a0ab",
  //   ],
  //   tooltip: {
  //     trigger: 'item',
  //     formatter: '{a} <br/>{b}: {c} ({d}%)'
  //   },
  //   legend: {
  //     //距离底部为10%
  //     bottom: "0%",
  //     //小图标的宽度和高度
  //     itemWidth: 10,
  //     itemHeight: 10,
  //     //data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
  //     // 修改图例组件的文字为 12px
  //     textStyle: {
  //       color: "rgba(255,255,255,.5)",
  //       fontSize: "12"
  //     },
  //   },
  //   series: [
  //     {
  //       name: '年龄分布源',
  //       type: 'pie',
  //       //radius可以修改饼图的大小，1值是内圆，2值是外语
  //       radius: ['40%', '60%'],
  //       center: ["50%", "45%"],
  //       avoidLabelOverlap: false,
  //       //图形文字
  //       label: {
  //         show: false,
  //       },
  //       //链接文字与图形的线
  //       labelLine: {
  //         show: false
  //       },
  //       data: [
  //         { value: 1, name: "0岁以下" },
  //         { value: 4, name: "20-29岁" },
  //         { value: 2, name: "30-39岁" },
  //         { value: 2, name: "40-49岁" },
  //         { value: 1, name: "50岁以上" }
  //       ]
  //     }
  //   ]
  // };
  // var option = {
  //   series: [
  //     {
  //       data: [{value:70}],
  //       type: 'gauge',
  //       axisLine: {
  //         lineStyle: {
  //           width: 8,
  //           color: [
  //             [0.3, '#fd666d'],
  //             [0.7, '#37a2da'],
  //             [1, '#67e0e3']
  //           ]
  //         }
  //       },
  //       pointer: {
  //         itemStyle: {
  //           color: 'auto'
  //         }
  //       },
  //       axisTick: {
  //         distance: -10,
  //         length: 10,
  //         lineStyle: {
  //           color: '#fff',
  //           width: 2
  //         }
  //       },
  //       splitLine: {
  //         distance: -40,
  //         length: 10,
  //         lineStyle: {
  //           color: '#fff',
  //           width: 1
  //         }
  //       },
  //       axisLabel: {
  //         color: 'inherit',
  //         distance: 0,
  //         fontSize: 10
  //       },
  //       detail: {
  //         valueAnimation: true,
  //         formatter: '{value} %',
  //         color: 'inherit'
  //       },
        
  //     }
  //   ]
  // };
  var option={
    tooltip:{
       formatter:'{a}<br/>当前：{c}℃'
    },
    series:[
        //内圈
        {
            type:'gauge',
            center : ['50%', '60%'],    // 默认全局居中
            radius : '30%',
            min:0,
            max:10,
            startAngle: 270,
            endAngle: -89.99999,
            splitNumber:10,
            axisLine: {            // 仪表盘轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[1, '#ff4500']],
                    width: 0,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 刻度标签
                show:false
            },
            axisTick: {            // 刻度
                length :4,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'rgba(176,204,53,.5)'
                }
            },
            splitLine: {           // 分隔线
                show:false
            },
            pointer: {
                width:0,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            detail : {
                show : false
            }
        },
        //中圈
        {
            name:'转速',
            type:'gauge',
            center : ['50%', '60%'],    // 默认全局居中
            radius : '60%',
            min:0,
            max:10,
            splitNumber:10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[1,'#6E6560' ]],
                    width: 8,
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 刻度
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight:'' ,
                    color: 'rgba(30,144,255,0)',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :2,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                    /*shadowColor : '#fff', //默认透明
                     shadowBlur: 10*/
                }
            },
            splitLine: {           // 分隔线
                length :0,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:0,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:0,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            detail : {
                show : false
            }
        },
        //外圈室内
        {
            type:'gauge',
            center : ['50%', '60%'],    // 默认全局居中
            radius:'100%',
            min:0,
            max:100,
            name:'湿度',
            axisLine: {            // 坐标轴线
                lineStyle: {
                    color: [[1, '#C7C5C3']],// 属性lineStyle控制线条样式
                    width: 1
                }
            },
            itemStyle:{
                normal:{
                    color:'#FF0000'
                }
            },
            axisTick:{
                length:3
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize : 10,
                    fontFamily:'numfont'
                }
            },
            splitLine: {           // 分隔线
                length : 5,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:1
                }
            },
            pointer:{
                width:3,
                length:'90%'
            },
            detail : {
                show : false
            },
            data:[{value: 40}]
        },
        //外圈室外
        // {
        //     type:'gauge',
        //     center : ['50%', '60%'],    // 默认全局居中
        //     radius : '100%',
        //     min:0,
        //     max:100,
        //     name:'室外',
        //     axisTick:{
        //         length:3
        //     },
        //     axisLine: {            // 坐标轴线
        //         lineStyle: {
        //             color: [[1, '#C7C5C3']],// 属性lineStyle控制线条样式
        //             width: 1
        //         }
        //     },
        //     pointer:{
        //         width:3,
        //         length:'90%'
        //     },
        //     itemStyle:{
        //         normal:{
        //             color:'#B0CC35'
        //         }

        //     },
        //     axisLabel: {
        //         textStyle: {
        //             fontWeight: 'bolder',
        //             fontSize : 16,
        //             color: 'rgba(30,144,255,0)'
        //         }
        //     },
        //     splitLine: {           // 分隔线
        //         length : 5,         // 属性length控制线长
        //         lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
        //             width:1
        //         }
        //     },
        //     detail : {
        //         show : false
        //     },
        //     data:[{value: 58}],
        //     title:{
        //         show:false
        //     }
        // }
    ]
};
  // setInterval(function () {
  //   myChart.setOption({
  //     series: [
  //       {
  //         data: [
  //           {
  //             value: +(Math.random() * 100).toFixed(2)
  //           }
  //         ]
  //       }
  //     ]
  //   });
  // }, 2000);
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  function data() {
    $.ajax({
        url:"/pie",
        success:function(data){
            // option.xAxis[0].data = data.data_time
            option.series[2].data = data.value
            myChart.setOption(option)
    },
    error: function(xhr, type, errorThrown) {
    }
    })
}
//data()
setInterval(data(),10000)

})();
//饼2
(function () {
  var myChart = echarts.init(document.getElementById("pie2"))
  var option = {
    // color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    // tooltip: {
    //   trigger: 'item',
    //   formatter: '{a} <br/>{b} : {c} ({d}%)'
    // },
    legend: {
      //距离底部为10%
      bottom: "0%",
      //小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      //data: ['pm10','pm25','no2','so2','co','o3'],
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
    },
    series: [
      {
        name: '污染物分布',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
        label: {
          fontSize: 10
        },
        labelLine: {
          length: 6,
          length2: 8
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  function data() {
    $.ajax({
        url:"/pie2",
        success:function(data){
            // option.xAxis[0].data = data.data_time
            option.series[0].data = data.d
            myChart.setOption(option)
    },
    error: function(xhr, type, errorThrown) {
    }
    })
}
//data()
setInterval(data(),10000)
})();


(function () {
  // var myChart = echarts.init(document.getElementById(''));
  var myChart = echarts.init(document.querySelector(".map .chart"))
  // 指定图表的配置项和数据
  myChart.showLoading();
  $.get('https://geo.datav.aliyun.com/areas_v3/bound/659002.json', function (geoJson) {
    myChart.hideLoading();
    echarts.registerMap('ale', geoJson);
    myChart.setOption(
      (option = {
        series: [
          {
            name: '阿拉尔',
            type: 'map',
            map: 'ale',
            emphasis: {
              disabled: false,
              focus: 'none'
            },
            label: {
              show: true
            },  
            itemStyle: {
              areaColor: '#02a6b5'
            }
          }
        ]
      })
    );
  });
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();