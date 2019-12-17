import { pageListMerge, generateActions } from '@/store/helper'

const DEFAULTS = {
}

export default pageListMerge({
  namespaced: true,
  actions: {
    ...generateActions({
      caller: api.navigator,
      items: [
        { key: 'queryList', callee: 'bbbb' }
      ]
    })
  },
  mutations: {
  }
}, DEFAULTS)
