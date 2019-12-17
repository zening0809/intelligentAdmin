<template>
  <div class="map-container">
    <map-chart :chart-data="state.mapChartData" />
  </div>
</template>

<script>
import PageBase from '@/minxs/pageBase'
import store from './store'
import MapChart from './components/MapChart'

export default {
  // name: 'mapshow',
  components: {
    MapChart
  },
  mixins: [PageBase],
  data() {
    return {
      // store唯一标识
      storeKey: 'map',
      // 模块名称
      moduleName: '地图'
    }
  },
  created() {
    this.registStore(store)
  },
  mounted() {
  },
  methods: {
    getMapZone() {
      this.dispatch('getNowAll')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .map-container{
    width: 100%;
    padding: 20px;
  }
</style>
