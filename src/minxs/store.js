export default {
  methods: {
    registStore(store) {
      if (store && !(this.storeKey in this.$store._modules.root._children)) {
        this.$store.registerModule(this.storeKey, store)
      }
    },
    // 调用store中的action
    dispatch(action, payload) {
      return this.$store.dispatch(this.storeKey + '/' + action, payload)
    },
    // 调用store中的mutation
    commit(mutation, payload) {
      this.$store.commit(this.storeKey + '/' + mutation, payload)
    },
    // 更新state
    updateState(payload) {
      this.commit('update', payload)
    },
    // 重置state
    resetState() {
      this.commit('reset')
    }
  }
}
