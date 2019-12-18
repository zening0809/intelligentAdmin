<template>
  <div class="echarts-box">
    <div class="title-box">
      <!-- <img class="label" src="~assets/imgs/label2.png" alt="">
      <div class="title">校友世界分布</div> -->
    </div>
    <E-charts class="echarts" :options="polar" @dblclick="dblClick" @click="doClick"/>
  </div>
</template>

<script>
  import ECharts from 'vue-echarts'
  import '../../../node_modules/echarts/map/js/world.js'

  export default {
    name: 'DailyActiveChart',
    components: { ECharts },
    data () {
      return {
        polar: {
          dataRange: {
            show: true,
            min: 0,
            max: 1000000,
            text: ['High', 'Low'],
            realtime: true,
            calculable: true,
            color: ['#7CF9D0', '#7CC0FE', '#DEF6FF']
          },
          tooltip: {
            trigger: 'item'
          },
          geo: {
            map: 'world',
            label: {
              emphasis: {
                show: false
              }
            },
            roam: false,
            silent: true,
            itemStyle: {
              normal: {
                areaColor: '#37376e',
                borderColor: '#000'
              },
              emphasis: {
                areaColor: '#3E98FE'
              }
            }
          },
          series: [{
            name: '校友人数',
            type: 'map',
            mapType: 'world',
            itemStyle: {
              normal: {
                borderWidth: 0.5,
                borderColor: '#A9A9A9',
                areaStyle: {
                  color: '#37376e'
                }
              },
              emphasis: {
                areaColor: '#3E98FE',
                borderColor: '#fff',
                borderWidth: 0
              }
            },
            mapLocation: {
              y: 100
            },
            data: [{
              name: 'Afghanistan',
              value: 28397.812
            },
              {
                name: 'Angola',
                value: 19549.124
              },
              {
                name: 'Albania',
                value: 3150.143
              },
              {
                name: 'United Arab Emirates',
                value: 8441.537
              },
              {
                name: 'Yemen',
                value: 22763.008
              },
              {
                name: 'South Africa',
                value: 51452.352
              },
              {
                name: 'Zambia',
                value: 13216.985
              },
              {
                name: 'Zimbabwe',
                value: 13076.978
              }
            ],
            symbolSize: 12,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            }
          }]
        }
      }
    },
    methods: {
      // 双击事件
      dblClick (v) {
        console.log(v)
      },
      // 单击事件
      doClick (v) {
        console.log(v)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .echarts-box {
    margin: 20px 0;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
    .title-box {
      display: flex;
      .label {
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }
      .title {
        color: #4C4C4C;
        font-size: 18px;
      }
    }
    .echarts {
      width: 100%;
      height: 600px;
    }
  }
</style>