<template>
  <div>
    <Table-bar
      :fields="fields"
      :list="state.list"
      :total="state.total"
      :page-size="state.pageSize"
      :page-index="state.pageIndex"
      :loading="state.loading"
      :pageindexfun="pageindexfun"
      :pagesizefun="pagesizefun"
      :on-export="onExport"
    />
  </div>
</template>
<script>
import TableBar from '@container/basicList'
import ExactList from '@/minxs/exactList'
import tableMap from './tableMap.json'
import { mapState } from 'vuex'
export default {
  components: {
    TableBar
  },
  mixins: [ExactList],
  props: {
    state: {
      type: Object,
      default: () => {}
    },
    updateState: {
      type: Function,
      default: () => {}
    },
    dispatch: {
      type: Function,
      default: () => {}
    },
    onExport: {
      type: Function,
      default: () => {}
    }
  },
  provide: {
    formItems: tableMap.formItems
  },
  data() {
    return {
      fields: tableMap.fieldsArr,
      fieldsArr: []
    }
  },
  computed: {
    ...mapState('navigator', ['query'])
  },
  watch: {},
  beforeCreate() {},
  created() {
  },
  mounted() {
    if (tableMap.immediateQuery) {
      this.dispatch('queryList')
    }
  },
  methods: {
    pageindexfun(val) {
      this.updateState({ query: this.query, pageIndex: val, loading: true })
      this.dispatch('queryList', { query: this.query })
    },
    pagesizefun(val) {
      this.updateState({ query: this.query, pageIndex: 0, size: val, loading: true })
      this.dispatch('queryList', { query: this.query })
    }
  }
}
</script>
