<template>
  <div>
    <div :class="['basic-search']">
      <div class="basic-search__col-l">
        <div class="formModalLayer" />
        <el-form
          :ref="refVal"
          :label-position="labelPosition"
          :label-width="labelWidth + 'px'"
          @submit.native.prevent
        >
          <slot name="pack" />
        </el-form>
      </div>
      <div class="basic-search__col-r">
        <el-button
          size="small"
          type="primary"
          icon="el-icon-search"
          style="background:#4186f6"
          @click="handleSearch()"
        >查询</el-button>
        <el-button size="small" style="margin-left: 0" @click.stop="handleReset">重置</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    refVal: {
      type: String,
      default: 'form'
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    labelWidth: {
      type: Number,
      default: 80
    },
    query: {
      type: Object,
      default() {
        return {}
      }
    },
    handleSearch: {
      type: Function,
      default: () => {}
    },
    handleReset: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      // popoverVis: this.popoverVisSearch,
      // closed: true,
      // showMore: false,
      // // 左侧选中
      // selCarriersL: [],
      // // 右侧选中
      // selCarriersR: [],
      // leftArrCom: [],
      // rightArrCom: []
    }
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

