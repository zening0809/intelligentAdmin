<template>
  <div>
    <!-- <el-form :inline="true" :model="query" class="demo-form-inline">
      <el-form-item label="用户">
        <el-input v-model="query.author" placeholder="请输入用户" />
      </el-form-item>
      <el-form-item label="审核人">
        <el-input v-model="query.reviewer" placeholder="请输入审核人" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form> -->
    <search-bar />
    <!-- 列表 -->
    <div class="control">
      <el-table
        ref="handSelectTest_multipleTable"
        :data="tableData"
        style="width: 100%"
        @current-change="handleRowClick"
        @selection-change="handleSelectionChange"
      >
        <el-table-column>
          <template slot="header">
            <div class="btns">
              <el-button
                type="primary"
                @click="()=>{handleFunction1(multipleSelection)}"
              >{{ $t('testList.function1') }}</el-button>
              <el-button type="primary">{{ $t('testList.function2') }}</el-button>
              <el-button type="primary">{{ $t('testList.function3') }}</el-button>
            </div>
          </template>
          <el-table-column type="selection" width="55" />
          <el-table-column
            v-for="(item, index) in fields"
            :key="index"
            :prop="item.key"
            :label="item.name"
            :width="item.width"
          />
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        :current-page.sync="currentPage2"
        :page-sizes="[10, 20]"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
import SearchBar from './exactSearch'
import store from './store'
import mixinStores from '@/minxs/store'
import { mapState } from 'vuex'
export default {
  components: {
    SearchBar
  },
  mixins: [mixinStores],
  data() {
    return {
      storeKey: 'testList',
      formInline: {
        user: '',
        region: ''
      },
      currentPage2: 1,
      fields: [
        { key: 'author', name: '用户' },
        { key: 'display_time', name: '创建时间' },
        { key: 'timestamp', name: '运单号' },
        { key: 'reviewer', name: '审核人' },
        { key: 'forecast', name: '预收金额' }
      ],
      query: {
        author: undefined,
        reviewer: undefined
      },
      listQuery: {
        page: 1,
        limit: 10
      },
      multipleSelection: []
    }
  },
  created() {
    this.registStore(store)
  },
  mounted() {
    this.queryList()
    api.testList.bbbbbb()
  },
  computed: {
    ...mapState('testList', ['tableData', 'total'])
  },
  methods: {
    queryList(query = {}) {
      this.dispatch('queryList')
    },
    onSubmit() {
      this.queryList(this.query)
    },
    handleReset() {
      this.listQuery.page = 1
      this.currentPage2 = 1
      this.queryList()
    },
    handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`)
      this.listQuery.limit = val
      this.listQuery.page = 1
      this.currentPage2 = 1
      this.queryList()
    },
    handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`)
      this.listQuery.page = val
      this.queryList()
    },
    handleRowClick(row, column, event) {
      this.$refs.handSelectTest_multipleTable.toggleRowSelection(row)
      // console.log('this.selecTestContent', this.selectTestContent)
    },
    handleSelectionChange(val) {
      console.log(val)
      this.multipleSelection = val
    },
    handleFunction1(data) {
      console.log(data, 'data')
    }
  }
}
</script>
<style  scoped>
.demo-form-inline {
  margin: 20px 40px;
  display: flex;
  justify-content: space-around;
}
tr {
  background-color: rgb(245, 247, 250);
}
.control {
  background-color: rgb(245, 247, 250);
}
.btns {
  margin-left: 10px;
}
.block {
  display: flex;
  text-align: right;
  justify-content: flex-end;
}
</style>
