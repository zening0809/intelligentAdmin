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
          <slot name="unpack" />
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
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.basic-list__sel-field-wrap {
  span {
    width: 16px;
    height: 16px;
    display: inline-block;
  }
  .icon-up {
    background: url("../../icons/imgs/icon-up.png") no-repeat;
  }
  .icon-down {
    background: url("../../icons/imgs/icon-up.png") no-repeat;
    transform: rotate(180deg);
    margin-right: 5px;
  }
  .icon-top {
    background: url("../../icons/imgs/icon-top.png") no-repeat;
    margin: 0 5px;
  }
  .icon-bottom {
    background: url("../../icons/imgs/icon-top.png") no-repeat;
    transform: rotate(180deg);
  }
  .handle-btns {
    margin-top: 15px;
    text-align: center;
  }
  .transfer-block__col-m {
    text-align: center;
    /deep/ .el-button {
      margin-left: 0;
      margin-top: 20px;
      border-radius: 50%;
    }
    .transfer-block__col-m__btns {
      margin-top: 80px;
    }
  }
  .cross-tab {
    width: 380px;
    overflow: hidden;
  }
  .title-tip {
    margin-bottom: 5px;
  }
}
.basic-search__hd {
  margin-top: 24px;
  .search-items {
    float: right;
    padding-right: 26px;
  }
}
.basic-search__hd-line {
  display: inline-block;
  margin-right: 10px;
  width: 4px;
  height: 16px;
  border-radius: 4px;
  vertical-align: middle;
  background: #4186f6;
}
.basic-search__hd-title {
  color: #3f4656;
  font-size: 14px;
}
.basic-search {
  display: flex;
  padding: 20px 0 0;
  border-bottom: 1px solid #e2e2e5;
  position: relative;
  &.basic-search--close {
    .basic-search__col-l {
      position: relative;
      //height: 48px;
      overflow: hidden;
      .formModalLayer {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 100;
        cursor: pointer;
      }
    }
    .toggle-more-btn {
      background-image: url("../../icons/imgs/icon-open.png");
    }
  }
  &.basic-search--open {
    .basic-search__col-l {
      height: auto;
    }
    .toggle-more-btn {
      background-image: url("../../icons/imgs/icon-close.png");
    }
  }
}
.basic-search__col-l {
  flex: 1;
  .el-form {
    display: flex;
    flex-wrap: wrap;
  }
  /deep/ .el-form-item {
    padding-right: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
}
.basic-search__col-r {
  position: relative;
  width: 100px;
  margin-top: -10px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .el-button {
    width: 75px;
  }
  .toggle-more-btn {
    position: absolute;
    display: inline-block;
    top: 12px;
    right: 10px;
    width: 12px;
    height: 12px;
    background: no-repeat center center;
    background-size: contain;
  }
}
.basic-search__col-l {
  /deep/ .el-form-item {
    width: 16.5%;
    margin-bottom: 15px;
    display: inline-block;
  }
  /deep/ .span-2 {
    width: 33%;
    margin-bottom: 15px;
  }
  /deep/ .el-form-item-8 {
    width: 33.3%;
  }
  /deep/ .el-form-item-18 {
    width: 75%;
  }
}
.basic-search {
  padding: 20px 0 0;
  border-bottom: 1px solid #e2e2e5;
}
.basic-search__hd {
  margin-bottom: 24px;
}
.basic-search__hd-line {
  display: inline-block;
  margin-right: 10px;
  width: 4px;
  height: 16px;
  border-radius: 4px;
  vertical-align: middle;
  background: #4186f6;
}
.basic-search__hd-title {
  color: #3f4656;
  font-size: 14px;
}
.basic-search__bd {
  padding: 0 20px 0 15px;
}
.basic-search__col-l {
  padding-right: 16px;
}
.basic-search__col-r {
  position: relative;
  /deep/ .el-row:first-child {
    margin-bottom: 22px;
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
    background: url("../../icons/imgs/icon-attention.png") no-repeat;
  }
  .icon-bg-gray {
    background: url("../../icons/imgs/attention.png") no-repeat;
  }
  .icon-up {
    background: url("../../icons/imgs/icon-up.png") no-repeat;
  }
  .icon-down {
    background: url("../../icons/imgs/icon-up.png") no-repeat;
    transform: rotate(180deg);
    margin-right: 5px;
  }
  .icon-top {
    background: url("../../icons/imgs/icon-top.png") no-repeat;
    margin: 0 5px;
  }
  .icon-bottom {
    background: url("../../icons/imgs/icon-top.png") no-repeat;
    transform: rotate(180deg);
  }
  .handle-btns {
    margin-top: 15px;
    text-align: center;
  }
}
.search-extend_container {
  width: 80px;
  margin-top: -10px;
  .basic-search__sel-field-btn {
    width: 100%;
    height: 40px;
    color: #4186f6;
    font-size: 14px;
    border: none;
    line-height: 40px;
    cursor: pointer;
    // &:hover {
    //     background: url('../../icons/imgs/set.png') no-repeat;
    // }
  }
  .basic-search__sel-field-btn-icon {
    color: #909399;
    &:hover {
      color: #409eff;
    }
  }
}
.toggle-more-btn {
  position: absolute;
  display: inline-block;
  bottom: 0;
  width: 12px;
  height: 12px;
  background: no-repeat center center;
  background-size: contain;
  right: 48px;
}
</style>
