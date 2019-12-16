<template>
  <div>
    <exact-search />
    <Tbale-list :state="state" />
  </div>
</template>
<script>
import exactSearch from './containers/exactSearch'
import TbaleList from './containers/exactList'
import store from './store'
import mixinStores from '@/minxs/store'
import pageList from '@/minxs/pageList'
export default {
  components: {
    exactSearch,
    TbaleList
  },
  mixins: [mixinStores, pageList],
  data() {
    return {
      storeKey: 'testList',
      formInline: {
        user: '',
        region: ''
      },
      currentPage2: 1,
      fields: [
        { key: 'author', name: '用户' },
        { key: 'display_time', name: '创建时间' },
        { key: 'timestamp', name: '运单号' },
        { key: 'reviewer', name: '审核人' },
        { key: 'forecast', name: '预收金额' }
      ],
      query: {
        author: undefined,
        reviewer: undefined
      },
      listQuery: {
        page: 1,
        limit: 10
      },
      multipleSelection: []
    }
  },
  computed: {
  },
  created() {
    this.registStore(store)
  },
  mounted() {
    this.queryList()
  },
  methods: {
    queryList(query = {}) {
      this.dispatch('queryTest', {
        data: { page: this.listQuery.page, limit: this.listQuery.limit }
      })
    }
  }
}
</script>
