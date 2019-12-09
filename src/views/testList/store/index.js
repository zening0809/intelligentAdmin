import {
  testList
} from '@/api/testList'
const state = {
  tableData: [],
  total: 0
}

const mutations = {
  QUERYLIST: (state, content) => {
    state.tableData = content.rows
    state.total = content.total
  }
}

const actions = {
  async queryList({
    commit
  }, paylod) {
    console.log(123)
    await testList({
      ...paylod
    }).then(
      ({
        code,
        content
      }) => {
        if (code === 1) {
          // this.tableData = content.rows
          // this.total = content.total
          commit('QUERYLIST', content)
        } else {
          this.$message.error(content.message)
        }
      }
    )
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
