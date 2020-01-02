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
    :show-action-col="tableMap.showActionCol"
    :action-render="actionRender"
  >
    <template slot="hd-col--l">
      <Btns :dispatch-feature="dispatchFeature" />
    </template>
  </Basic-list>
</template>

<script>
import BasicList from '@/components/BasicList'
import ExactList from './mixins'
import Btns from './components/buttons'
export default {
  components: {
    BasicList,
    Btns
  },
  mixins: [ExactList],
  inject: ['tableMap'],
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
    actionColLabel: {
      type: String,
      default: '操作'
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
    },
    deleteCallBack: {
      type: Function,
      default: () => {}
    },
    queryEntity: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  methods: {
    actionRender(h, { index, row }) {
      return (
        <div class="actionContainer">
          {this.tableMap.actionBtn.map(item => {
            switch (item.feature) {
              case 'edit':
                return (
                  <el-tooltip content={item.tooltip || ''} placement={item.position || 'top'}>
                      <i class="el-icon-edit-outline action-icon  actionStyle" 
                        type={item.btype} 
                      onClick={(e)=>{
                        e.stopPropagation()
                        this.dispatchBtnAction(item.feature, row, item.pk)
                      }} size='small' icon={item.icon}></i>
                  </el-tooltip>
                )
                break
              case 'delete':
                return (
                  <el-tooltip content={item.tooltip || ''} placement={item.position || 'top'}>
                      <i class="el-icon-delete action-icon  deleteStyle" 
                        type={item.btype} 
                      onClick={(e)=>{
                        e.stopPropagation()
                        this.dispatchBtnAction(item.feature, row, item.pk)
                      }} size='small' icon={item.icon}></i>
                  </el-tooltip>
                )
              break
            }
          })}
        </div>
      )
    },
   dispatchBtnAction(type, row,  pk) {
      switch (type) {
        case 'edit':
          this.updateState({
              entityDlgVis: true,
              entityDlgActn: 'edit',
          })
          this.queryEntity(row, pk)
        break

        case 'delete':
        this.$alert('确定要删除么', {
          confirmButtonText: '确定',
          callback: action => {
            if(action !== 'confirm'){
              return
            }
            this.deleteCallBack(row, pk)
          }
        });
         
        // case 'view':
        //   this.updateState({
        //       entityDlgVis: true,
        //       // 实体弹窗动作类型
        //       entityDlgActn: 'add',
        //   })
        //   break
        default:
          break
      }
    },
    dispatchFeature(type) {
      switch (type) {
        case 'export':
          this.dispatch('exportList', {})
          break
        case 'add':
          this.updateState({
              entityDlgVis: true,
              // 实体弹窗动作类型
              entityDlgActn: 'add',
          })
          break
        default:
          break
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .actionContainer{
    font-size: 14px;
    i:not(:first-child){
      margin-left: 15px;
    }
    .action-icon{
      cursor: pointer;
    }
    .actionStyle:hover{
      color: rgb(24, 144, 255);
    }
    .deleteStyle:hover{
      color: #fe6c6f;
    }
  }
</style>

