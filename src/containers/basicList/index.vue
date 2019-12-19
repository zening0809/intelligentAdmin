<template>
  <Basic-list
    :fields="fields"
    :total="total"
    :list="list"
    :table-h="tableH"
    :page-index="pageIndex"
    :page-size="pageSize"
    :loading="loading"
    :page-index-change="pageindexfun"
    :page-size-change="pagesizefun"
    :show-index-col="showIndexCol"
    :action-col-label="actionColLabel"
    :select-type="isSingle"
    :show-action-col="showActionCol"
    :action-render="actionRender"
  >
    <template slot="hd-col--l">
      <Btns :dispatch-feature="dispatchFeature" />
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
    },
    loading: {
      type: Boolean,
      default: false
    },
    pageindexfun: {
      type: Function,
      default: () => {}
    },
    pagesizefun: {
      type: Function,
      default: () => {}
    },
    onExport: {
      type: Function,
      default: () => {}
    },
    dispatch: {
      type: Function,
      default: () => {}
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
                  <el-button type={item.btype} size='small' icon={item.icon}>
                    {item.name}
                  </el-button>
                )
              case 'a':
                return <a>{item.name}</a>
            }
          })}
        </div>
      )
    },
    dispatchFeature(type) {
      switch (type) {
        case 'export':
          this.dispatch('exportList', {})
          break

        default:
          break
      }
    }
  }
}
</script>

