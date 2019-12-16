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
    searchResetTemporary() {
      this.query = _.cloneDeep(this.searchQuery)
      this.searchReset()
    }
  },
  render() {
    return (
      <exact-search
        query={this.query}
        handle-search={this.searchHandle}
        handle-reset={this.searchResetTemporary}
      >
        <template slot='unpack'>{this.unpackItems()}</template>
      </exact-search>
    )
  }

}
</script>
