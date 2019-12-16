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
    :show-index-col="showIndexCol"
    :action-col-label="actionColLabel"
    :select-type="isSingle"
    :show-action-col="showActionCol"
    :action-render="actionRender"
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
    },
    showIndexCol: {
      type: Boolean,
      default: false
    },
    isSingle: {
      type: String,
      default: 'multiple'
    },
    showActionCol: {
      type: Boolean,
      default: false
    },
    actionColLabel: {
      type: String,
      default: '操作'
    },
    actionBtn: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
    actionRender() {
      return (
        <div>
          {this.actionBtn.map(item => {
            switch (item.type) {
              case 'btn':
                return (
                  <el-button type={item.btype} size='small'>
                    {item.name}
                  </el-button>
                )
              case 'a':
                return <a>{item.name}</a>
            }
          })}
        </div>
      )
    }
  }
}
</script>

