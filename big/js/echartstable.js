var Myecharts=echarts.init(document.getElementById("main"));
var option={
    title:{},
    legend:{
        data:['资源总量']
    },
    series:[{
        type:'pie',
        data:[{
            value:435,
            name:'公安局435(8.39%)'
        },{
            value:679,
            name:"民政局:679(13.1%)"
        },{
            value:848,
            name:"气象局:848(16.35%)"
        },{
            value:348,
            name:"统计局:348(6.71%)"
        },{
            value:679,
            name:"交通局:679(13.1%)"
        },{
            value:848,
            name:"人社局:848(16.35%)"
        },{
            value:1348,
            name:"其他:1348 (26%)"
        }]
    }]
}
Myecharts.setOption(option);

var Myecharts1=echarts.init(document.getElementById("main1"));
var option1={
    title:{},
    legend:{
        data:['数据总量','共亨次数','更新量']
    },
    xAxis:{
        data:['1月','2月','3月','4月','5月','6月','7月','8月','9月']
    },
    yAxis:{},
    series:[{
        name:'数据总量',
        type:'line',
        data:[535,535,453,483,546,456,543,543,344],
        smooth:true,
    },{
        name:'共亨次数',
        type:'line',
        data:[1535,5535,4453,4883,5456,4566,5453,5443,3844],
        smooth:true,
    },{
        name:'更新量',
        type:'line',
        data:[1355,1535,2453,3483,4546,4556,1553,5543,3444],
        smooth:true,
    }]
}
Myecharts1.setOption(option1);

var Myecharts2=echarts.init(document.getElementById("main2"));
var option2={
    title:{},
    legend:{
        data:['数据总量','共亨次数','更新量']
    },
    xAxis:{
        data:['1月','2月','3月','4月','5月','6月','7月','8月','9月']
    },
    yAxis:{},
    series:[{
        name:'数据总量',
        type:'line',
        data:[535,535,453,483,546,456,543,543,344],
        smooth:true,
    },{
        name:'共亨次数',
        type:'line',
        data:[1535,5535,4453,4883,5456,4566,5453,5443,3844],
        smooth:true,
    },{
        name:'更新量',
        type:'line',
        data:[1355,1535,2453,3483,4546,4556,1553,5543,3444],
        smooth:true,
    }]
}
Myecharts2.setOption(option2);

var Myecharts3=echarts.init(document.getElementById("main3"));
var option3={
    title:{},
    tooltip:{},
    legend:{
        data:['数据共享次数']
    },
    xAxis:{
        data:['1月','2月','3月','4月','5月','6月','7月','8月','9月']
    },
    yAxis:{},
    series:[{
        name:'资源总量',
        type:'bar',
        data:[1243,2315,1164,3021,3521,4121,2001,1983,1432],
        label:{
            show:true,
            position:'top',
            textStyle:{
                color:'yellow',
            }
        },
        barWidth:'25%',
        itemStyle: {
            borderRadius: [10, 10, 10, 10],
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                        offset: 1, 
                        color: '#005BEA'
                    }, 
                    {
                        offset: 0, 
                        color: '#00C6FB'
                    }
                ]
            ),
        }
    },{
        name:'共亨次数',
        type:'line',
        data:[1243,2315,1164,3021,3521,4121,2001,1983,1432]
    }]
}
Myecharts3.setOption(option3);

var myChart4 = echarts.init(document.getElementById('main4'));
        var options4={
            tooltip:{
                axisPointer: {
			                type: 'line',
			                lineStyle: {
			                    type: 'solid',       
			                    color: 'blue',
			                },
			    },

			},
            //legend:{},
            xAxis:{
                data:['公共服务','健康保障','安全生产','价格监督','能源安全','信用体系','城乡建设','社区治理','生态环保','应急维稳'],
                axisLabel: {
                    color: '#333',
                    interval: 0,
                    formatter: function(value) {
                      return value.split('').join('\n')
                    }
                  }
            },
            yAxis:{},
            series:[{
                name:'数据共享次数',
                type:'bar',
                data:[1243,2315,1164,3021,3521,4121,2001,4463,1983,1432],
                barWidth: '25%',
                label:{
                    show:true,
                    position:'top',
                    textStyle:{
                        color:'yellow'
                    }
                },
            },{
                name:'数据共享次数',
                type:'line',
                data:[1243,2315,1164,3021,3521,4121,2001,4463,1983,1432],
                itemStyle: {
                    normal: {
                        color: 'white', 
                        lineStyle: {
                            color: 'red' 
                        }
                    }
			    }
                
            }]
        }
        myChart4.setOption(options4);

        var myChart5 = echarts.init(document.getElementById('main5'));
        var options5={
            tooltip:{},
            //legend:{},
            xAxis:{
                data:['公共服务','健康保障','安全生产','价格监督','能源安全','信用体系','城乡建设','社区治理','生态环保','应急维稳'],
                axisLabel: {
                    color: '#333',
                    interval: 0,
                    formatter: function(value) {
                      return value.split('').join('\n')
                    }
                  }
            },
            yAxis:{},
            series:[{
                name:'资源总量',
                type:'bar',
                data:[2912,3991,4621,3941,3313,6631,5543,4463,6541,3381],
                barWidth: '25%',
                label:{
                    show:true,
                    position:'top',
                    textStyle:{
                        color:'yellow'
                    }
                },
            },{
                name:'资源总量',
                type:'line',
                data:[2912,3991,4621,3941,3313,6631,5543,4463,6541,3381],
                itemStyle: {
                    normal: {
                        color: 'white', 
                        lineStyle: {
                            color: 'white' 
                        }
                    }
			    }
                
            }]
        }
        myChart5.setOption(options5);
        