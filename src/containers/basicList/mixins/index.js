import BasicList from '@/components/basicList'
/**
 * 列表页数据列表公共方法混入
 */
export default {
  components: {
    BasicList
  },
  props: {
    state: Object,
    confirm: Function,
    updateState: Function,
    pageIndexChange: Function,
    pageSizeChange: Function,
    queryList: Function,
    handleAdd: Function,
    handleView: Function,
    handleEdit: Function,
    handleDelete: Function
  },
  methods: {
  }
}
