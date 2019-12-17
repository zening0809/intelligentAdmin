<template>
  <div>
    <search-bar :query-list="queryList" :dispatch="dispatch" :update-state="updateState" />
    <!-- 列表 -->
    <Tbale-list :state="state" :dispatch="dispatch" />
  </div>
</template>
<script>
import SearchBar from './containers/exactSearch'
import TbaleList from './containers/exactList'
import store from './store'
import mixinStores from '@/minxs/store'
import pageList from '@/minxs/pageList'
export default {
  components: {
    SearchBar,
    TbaleList
  },
  mixins: [mixinStores, pageList],
  data() {
    return {
      storeKey: 'navigator',
      formInline: {
        user: '',
        region: ''
      },
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  computed: {},
  created() {
    this.registStore(store)
  },
  mounted() {
    // this.queryList();
  },
  methods: {
    queryList(query = {}) {
      this.dispatch('queryTest', {
        data: { page: this.listQuery.page, limit: this.listQuery.limit, ...query }
      })
    }
  }
}
</script>

