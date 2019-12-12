<template>
  <basic-list
    :action-col-width="120"
    :action-render="actionRender"
    :fields="state.configTable.length !== 0 ? state.configTable : fields "
    :cp-fields="fields"
    :field-limit="10"
    :loading="state.loading"
    :total="state.total"
    :list="state.list"
    :page-index="state.pageIndex"
    :page-size="state.pageSize"
    :page-index-change="pageIndexChange"
    :page-size-change="pageSizeChange"
    :show-page="false"
  />
</template>

<script>
import ExactList from './mixins'

export default {
  mixins: [ExactList],
  props: {},
  data() {
    return {
      fields: [
        { key: 'employeeId', name: '员工ID', show: true },
        { key: 'loginAccount', name: '登录账号', show: true },
        { key: 'employeeName', name: '员工姓名', show: true },
        { key: 'billTypeString', name: '单据类型', show: true },
        { key: 'taskQty', name: '拣货任务单数', show: true },
        { key: 'skuQty', name: '拣货总件数', show: true },
        { key: 'skuSortQty', name: '总品项数', show: true },
        { key: 'orderQty', name: '订单总数', show: true },
        { key: 'warehouseName', name: '所属库房', show: true },
        { key: 'taskDetailQty', name: '拣货任务行数', show: true }
      ]
    }
  },
  methods: {
    actionRender(h, { index, row, col }) {
      return (
        <div class='exact-list__action-wrap'>
          <el-tooltip content='查看'>
            <a class='action-btn view-btn'>查看</a>
          </el-tooltip>
        </div>
      )
    }
  }
}
</script>

