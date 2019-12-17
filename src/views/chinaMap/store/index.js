import { pageListMerge } from '@/store/helper'

// 默认状态
const DEFAULTS = {
  mapChartData: []
}

export default pageListMerge({
  namespaced: true,
  actions: {
    async 'getNowAll'({ commit }) {
    }
  }
}, DEFAULTS)

