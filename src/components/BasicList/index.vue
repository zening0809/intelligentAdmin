<template>
  <div class="basic-list">
    <div v-if="showHead" class="basic-list__hd f-cb">
      <div class="basic-list__hd-col--l f-fl">
        <slot name="action-hd" />
      </div>
    </div>
    <el-table
      ref="table"
      v-loading="loading"
      border
      :data="list"
      :height="tableHeightNo"
      :show-summary="showSummary"
      :summary-method="showSummary === true ? getSummaries : null "
      style="width:100%"
      :row-key="rowKey"
      :row-style="rowStyle"
      :size="tableSize"
      @select="handleSelect"
      @select-all="handleSelectAll"
      @selection-change="selectionChange"
      @row-click="rowClick"
    >
      <el-table-column
        v-if="showIndexCol && !showSelectCol"
        align="center"
        type="index"
        :width="indexColWidth"
        :label="indexColLabel"
        :index="getIndex"
        :selectable="selectInit"
        :fixed="clockSelctCol"
      />
      <el-table-column
        v-if="showIndexCol && showSelectCol"
        align="center"
        type="index"
        :width="indexColWidth"
        :label="indexColLabel"
        :index="getIndex"
        :fixed="clockSelctCol"
      />
      <el-table-column v-if="showSelectCol && selectType === 'single'" align="center" :width="50">
        <template slot-scope="scope">
          <el-radio v-model="radioIndex" :label="scope.$index" />
        </template>
      </el-table-column>
      <el-table-column
        v-if="showSelectCol && selectType === 'multiple'"
        align="center"
        type="selection"
        :width="50"
        :selectable="selectInit"
        :fixed="clockSelctCol"
      />
      <template v-for="(item, index) of cfg">
        <!--这个判断是满足表格项中插入Dom的需求-->
        <el-table-column
          v-if="item.isDom"
          :key="Symbol('id')+index"
          :align="item.align || 'center'"
          :prop="item.key"
          :label="item.name"
          :width="item.width ? item.width + 'px' : undefined"
          :formatter="item.filter"
          :fixed="item.clock"
          :sortable="item.sortable"
        >
          <template slot-scope="scope">
            <slot name="set-dom" :index="scope.$index" :row="scope.row" :col="scope.column" />
          </template>
        </el-table-column>
        <el-table-column
          v-if="!item.render && item.show"
          :key="Symbol('id') + index"
          align="center"
          :prop="item.key"
          :label="item.name"
          :width="item.width ? item.width + 'px' : undefined"
          :formatter="item.filter"
          :fixed="item.clock"
          :sortable="item.sortable"
        >
          <template v-for="(h, index) of (item.columnHeader || [])">
            <el-table-column
              v-if="!h.render"
              :key="Symbol('id') + index"
              align="center"
              :prop="h.key"
              :label="h.name"
              :width="h.width ? h.width + 'px' : undefined"
              :formatter="h.filter"
              :sortable="h.sortable"
            />
            <el-table-column
              v-else-if="item.show"
              :key="Symbol('id') + index"
              align="center"
              :class-name="h.classNames ? h.classNames.join(' ') : null"
              :prop="h.key"
              :label="h.name"
              :width="h.width ? h.width + 'px' : undefined"
              :val="h.val"
              :sortable="h.sortable"
              :fixed="item.clock"
            >
              <template slot-scope="scope">
                <table-column
                  v-if="!h.columnHeader"
                  :index="scope.$index"
                  :row="scope.row"
                  :col="scope.column"
                  :render="h.render"
                />
              </template>
            </el-table-column>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.show"
          :key="Symbol('id') + index"
          align="center"
          :class-name="item.classNames ? item.classNames.join(' ') : null"
          :prop="item.key"
          :label="item.name"
          :width="item.width ? item.width + 'px' : undefined"
          :val="item.val"
          :render-header="renderHeader"
          :fixed="item.clock"
          :sortable="item.sortable"
        >
          <template slot-scope="scope">
            <table-column
              v-if="!item.columnHeader"
              :index="scope.$index"
              :row="scope.row"
              :col="scope.column"
              :render="item.render"
            />
          </template>
        </el-table-column>
      </template>
      <el-table-column
        v-if="showActionCol"
        :key="Symbol('id')"
        align="center"
        class-name="basic-list__action-col"
        :width="actionColWidth"
        :fixed="actionColFixed"
        :label="actionColLabel"
      >
        <template slot-scope="scope">
          <table-column
            :index="scope.$index"
            :row="scope.row"
            :col="scope.column"
            :render="actionRender"
          />
          <!--可替代jsx语法在组件内传入DOM-->
          <slot
            name="set-operation"
            :index="scope.$index"
            :row="scope.row"
            :col="scope.column"
            :render="actionRender"
          />
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="showPage && list.length"
      :current-page="pageIndex + 1"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @current-change="pageIndexChange"
      @size-change="pageSizeChange"
    />
  </div>
</template>

<script>
import TableColumn from 'biz/components/tableColumn'
// import Sortable from 'sortablejs'
const DEFAULTS = {
  radioIndex: null
}
export default {
  components: {
    TableColumn
  },
  props: {
    fields: {
      type: Array,
      default() {
        return []
      }
    },
    tableHeightNo: {
      type: Number,
      default() {
        return null
      }
    },
    tableSize: {
      type: String,
      default() {
        return ''
      }
    },
    indexColWidth: {
      type: Number,
      default: 55
    },
    noSelectChange: {
      type: Boolean,
      default: false
    },
    indexColLabel: {
      type: String,
      default: '序号'
    },
    showActionCol: {
      type: Boolean,
      default: true
    },
    clockSelctCol: {
      type: Boolean,
      default: false
    },
    showPaginatorRight: {
      type: Boolean,
      default: false
    },
    showRow: {
      type: Boolean,
      default: true
    },
    showIndexCol: {
      type: Boolean,
      default: true
    },
    showSelectCol: {
      type: Boolean,
      default: false
    },
    selectType: {
      type: String,
      default: 'multiple'
    },
    actionColFixed: {
      type: [Boolean, String],
      default: 'right'
    },
    actionColWidth: {
      type: Number,
      default: 100
    },
    actionColLabel: {
      type: String,
      default: '操作'
    },
    actionRender: {
      type: Function,
      default: () => {
      }
    },
    rowStyle: {
      type: Function,
      default: () => {
        const temp = {}
        return temp
      }
    },
    selectInit: {
      type: Function,
      default: () => {
        return true
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    showHead: {
      type: Boolean,
      default: true
    },
    showPage: {
      type: Boolean,
      default: true
    },
    pageIndex: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 100]
      }
    },
    total: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default() {
        return []
      }
    },
    pageIndexChange: {
      type: Function,
      default: () => {
      }
    },
    pageSizeChange: {
      type: Function,
      default: () => {
      }
    },
    showSummary: {
      type: Boolean,
      default: false
    },
    popoverVis: {
      type: Boolean,
      default: false
    },
    cpFields: {
      type: Array,
      default() {
        return []
      }
    },
    rowKey: {
      type: [String, Function],
      default() {
        return undefined
      }
    },
    selectionChange: {
      type: Function,
      default: () => {
      }
    },
    handleRowClick: {
      type: Function,
      default: () => {
      }
    },
    handleSelect: {
      type: Function,
      default: () => {
      }
    },
    handleSelectAll: {
      type: Function,
      default: () => {
      }
    }
  },
  data() {
    const selFieldKeys = this.getSelFieldKeys(this.fields, this.fieldLimit)
    return {
      ..._.cloneDeep(DEFAULTS),
      selFieldKeys,
      allFieldsSelected: selFieldKeys.length === this.fields.length,
      ble: null,
      newList: [],
      dragList: [],
      switchValue: false,
      popoverVisible: this.popoverVis,
      showArr: [],
      additionalCols: [],
      menu: this.$route.meta.moduleName
    }
  },
  computed: {
    cfg() {
      const cfg = this.fields
      for (let m = 0; m < cfg.length; m++) {
        if (!cfg[m]) {
          continue
        }
        if (!cfg[m].id) {
          cfg[m].id = m + 1
        }
        for (let i = 0; i < this.cpFields.length; i++) {
          if (!this.cpFields[i]) {
            continue
          }
          if (cfg[m].key === this.cpFields[i].key) {
            if (this.cpFields[i].filter) {
              cfg[m].filter = this.cpFields[i].filter
            }
            if (this.cpFields[i].render) {
              cfg[m].render = this.cpFields[i].render
            }
          }
        }
      }
      return cfg
    }
  },
  watch: {
    selFieldKeys(newVal) {
      this.allFieldsSelected = newVal.length === this.fields.length
    },
    radioIndex(newVal) {
      if (newVal !== null || newVal !== undefined) {
        this.selectionChange([this.list[newVal]])
      } else {
        this.selectionChange([])
      }
    }
  },
  beforeCreate() {
  },
  mounted() {
    if (this.isNeed()) {
      // 发请求拿额外列的表头
      this.$store.dispatch('app/queryAddCols').then(data => {
        if (this.menuNeedAddColsDetails.includes(this.menu)) {
          data.map(item => {
            item['show'] = true
            return item
          })
        }
        this.additionalCols = data
        this.$emit('mergeCol', this.additionalCols)
      })
    }
  },
  methods: {
    getIndex(index) {
      return this.pageIndex * this.pageSize + index + 1
    },
    getSelFieldKeys(fields = [], limit) {
      if (!limit) {
        limit = fields.length
      }
      const fKeys = []
      fields.slice(0, limit).forEach(item => {
        fKeys.push(item.key)
      })
      return fKeys
    },
    allFieldsSelChg(checked) {
      let fields = this.fields
      if (!checked) {
        fields = fields.slice(0, this.fieldLimit)
      }
      this.selFieldKeys = this.getSelFieldKeys(fields)
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总计'
          return
        } else if (index === 1) {
          sums[index] = ''
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return Number(prev + value)
            } else {
              return Number(prev)
            }
          }, 0)
          const val = sums[index]
          if (val.toString().includes('.')) {
            sums[index] = Number(val).toFixed(4)
          }
        } else {
          sums[index] = 'N/A'
        }
      })
      return sums
    },
    rowClick(row, col, event) {
      // if (this.noSelectChange) {
      //     this.handleRowClick(row, col, event)
      //     return
      // }
      // if (col && col.className === 'edit-col') {
      //     return
      // }
      // const table = this.$refs.table
      // let selected = false
      // if (this.showSelectCol) {
      //     if (this.selectType === 'multiple') {
      //         table.toggleRowSelection(row)
      //         const selection = table.selection
      //         for (let i = 0, len = selection.length; i < len; i++) {
      //             if (selection[i] === row) {
      //                 selected = true
      //                 break
      //             }
      //         }
      //     } else if (this.selectType === 'single') {
      //         const list = this.list
      //         for (let i = 0, len = this.list.length; i < len; i++) {
      //             if (list[i] === row) {
      //                 if (i === this.radioIndex) {
      //                     this.radioIndex = null
      //                 } else {
      //                     this.radioIndex = i
      //                     selected = true
      //                 }
      //                 break
      //             }
      //         }
      //     }
      // }
      // this.handleRowClick(row, col, selected, event)
    }
  }
}
</script>

<style lang="scss" scoped>
    .basic-list {
        padding: 25px 0 0;
    }

    .basic-list__hd {
        margin-bottom: 25px;
    }

    .basic-list__hd-col--l {
        .hd-btn {
            display: inline-block;
            height: 36px;
            line-height: 36px;
            margin-right: 10px;
            padding: 0 24px;
            color: #fff;
            font-size: 14px;
            border-radius: 3px;
            background-color: #4186f6;

            &:last-child {
                margin-right: 0;
            }

            .icon,
            .line,
            .text {
                display: inline-block;
                vertical-align: middle;
            }

            .line {
                margin: 0 10px;
                width: 1px;
                height: 16px;
                background: #2c6bea;
            }
        }
    }

    .basic-list__hd-col--m {
        margin-left: 300px;

        /deep/ .el-pagination {
            position: relative;
            margin-top: 0;
            text-align: center;

            .el-pagination__total,
            .el-pagination__sizes,
            .el-pagination__jump {
                position: absolute;
            }

            .el-pagination__sizes {
                left: 500px;
                /*left: -120px;*/
            }

            .el-pagination__total {
                /*left: 430px;*/
                left: 418px;
            }

            .el-pagination__jump {
                /*left: 300px;*/
                left: 280px;
            }
        }
    }

    .basic-list__hd-col--r {
        padding-right: 20px;

        .basic-list__sel-field-btn {
            background: #ebeef3;
            color: #7b8aa4;
            border: 0;
            width: 16px;
            height: 16px;
            border: none;
            background: url("../../imgs/c_set.png") no-repeat !important;

            &:hover {
                background: url("../../imgs/set.png") no-repeat !important;
            }
        }
    }

    .basic-list__sel-field-wrap {
        padding: 10px 0 5px 20px;

        .sel-all-fields {
            margin-bottom: 10px;
        }

        span {
            width: 16px;
            height: 16px;
            display: inline-block;
        }

        .icon-bg {
            background: url("../../imgs/icon-attention.png") no-repeat;
        }

        .icon-bg-gray {
            background: url("../../imgs/attention.png") no-repeat;
        }

        .icon-up {
            background: url("../../imgs/icon-up.png") no-repeat;
        }

        .icon-down {
            background: url("../../imgs/icon-up.png") no-repeat;
            transform: rotate(180deg);
            margin-right: 5px;
        }

        .icon-top {
            background: url("../../imgs/icon-top.png") no-repeat;
            margin: 0 5px;
        }

        .icon-bottom {
            background: url("../../imgs/icon-top.png") no-repeat;
            transform: rotate(180deg);
        }

        .handle-btns {
            margin-top: 15px;
            text-align: center;
        }
    }

    .el-checkbox-group {
        .el-checkbox {
            margin: 0 25px 0 0;
            height: 36px;
            width: 110px;
            line-height: 36px;
            overflow: hidden;
            word-wrap: normal;
            white-space: nowrap;
            text-overflow: ellipsis;

            &:nth-child(4n) {
                margin-right: 0;
            }
        }
    }

    .basic-list__tip {
        margin-bottom: 10px;
    }

    .el-pagination {
        position: relative;
        margin-top: 25px;
        text-align: center;

        /deep/ .el-pagination__total,
        /deep/ .el-pagination__sizes,
        /deep/ .el-pagination__jump {
            position: absolute;
        }

        /deep/ .el-pagination__total {
            left: 20px;
        }

        /deep/ .el-pagination__sizes {
            left: 130px;
        }

        /deep/ .el-pagination__jump {
            right: 20px;
        }
    }

    .basic-list_bottom {
        margin-top: 10px;
    }
</style>
