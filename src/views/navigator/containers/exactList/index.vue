<template>
  <div>
    <Table-bar
      :fields="fields"
      :list="state.list"
      :total="state.total"
      :page-size="state.pageSize"
      :page-index="state.pageIndex"
    />
  </div>
</template>
<script>
import TableBar from '@container/basicList'
import ExactList from '@/minxs/exactList'
import tableMap from './tableMap.json'
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
    dispatch: {
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
      fieldsArr: [],
      query: {}
    }
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
  methods: {}
}
</script>
