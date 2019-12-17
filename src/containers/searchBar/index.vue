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
    searchFilter(query) {
      const resQyery = {}
      this.formItems.map(item => {
        item.query = query[item.key]
        const curKey = item['type']
        switch (curKey) {
          case 'input':
            resQyery[item.key] = item['query']['value']
            break
          case 'select':
            if (item.props.multiple) {
              resQyery[item.key] = item['query']['value'].join(',')
            } else {
              resQyery[item.key] = item['query']['value']
            }
            break

          default:
            break
        }
      })
      this.searchHandle(resQyery)
    },
    searchResetTemporary() {
      this.query = _.cloneDeep(this.searchQuery)
      this.searchReset()
    }
  },
  render() {
    return (
      <exact-search
        query={this.query}
        handle-search={this.searchFilter}
        handle-reset={this.searchResetTemporary}
      >
        <template slot='unpack'>{this.unpackItems()}</template>
      </exact-search>
    )
  }

}
</script>
