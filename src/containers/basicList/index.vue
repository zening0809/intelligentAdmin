<template>
  <Basic-list
    :fields="fields"
    :total="total"
    :list="list"
    :table-h="tableH"
    :page-index="pageIndex"
    :page-size="pageSize"
    :page-index-change="pageIndexChange"
    :page-size-change="pageSizeChange"
    :show-index-col="true"
  >
    <template slot="hd-col--l">
      <template>
        <Btns />
      </template>
    </template>
  </Basic-list>
</template>

<script>
import BasicList from '@/components/BasicList'
import ExactList from '@/minxs/exactList'
import Btns from './components/buttons'
export default {
  components: {
    BasicList,
    Btns
  },
  mixins: [ExactList],
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    list: {
      type: Array,
      default: () => []
    },
    pageIndex: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

