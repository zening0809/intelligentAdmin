<script>
import BasicSearch from './mixins/basicSearch'
export default {
  mixins: [BasicSearch],
  data() {
    return {
    }
  },
  watch: {
  },
  created() {
    this.query = _.cloneDeep(this.searchQuery)
  },
  methods: {
    // 返回回调参数
    selctBackHandle(key, value) {
      console(key, value)
    },
    searchBack(key, value) {
      console(key, value)
    }
  },
  render() {
    return (
      <exact-search
        query={this.query}
        handle-search={this.searchBack}
        handle-reset={this.handleResetOrder}
      >
        <template slot='pack'>{this.getAllItems()}</template>
      </exact-search>
    )
  }
}
</script>
