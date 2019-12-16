import { pageListMerge, generateActions } from '@/store/helper'

// 默认状态
const DEFAULTS = {
  tableData: [],
  total: 0
}

export default pageListMerge({
  namespaced: true,
  actions: {
    ...generateActions({
      caller: api.testList,
      items: [
        // 列表查询
        { key: 'queryTest', callee: 'bbbbbb', mutation: 'testList' }
      ]
    })
  },
  mutations: {
    testList(state, content) {
      state.tableData = content.rows
      state.total = content.total
    }
  }
}, DEFAULTS)
