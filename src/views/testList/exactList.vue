<template>
  <div>
    <Table-bar
      :fields="fields"
      :list="state.tableData"
      :total="state.total"
      :page-size="state.pageSize"
      :page-index="state.pageIndex"
      :is-single="isSingle"
      :show-index-col="showIndexCol"
      :show-action-col="showActionCol"
      :action-col-label="actionColLabel"
      :action-btn="actionBtn"
      :action-col-width="actioWidth"
    />
  </div>
</template>
<script>
import tableMap from './tableMap'
import TableBar from '@container/basicList'
import ExactList from '@/minxs/exactList'
export default {
  components: {
    TableBar
  },
  mixins: [ExactList],
  props: {
    state: {
      type: Object,
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
      isSingle: tableMap.selectType,
      showActionCol: tableMap.showActionCol,
      query: {},
      showIndexCol: tableMap.showIndexCol,
      actionColLabel: tableMap.actionColLabel,
      actionBtn: tableMap.actionBtn,
      actioWidth: tableMap.actionBtnWidth
    }
  },
  watch: {},
  beforeCreate() {},
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>
