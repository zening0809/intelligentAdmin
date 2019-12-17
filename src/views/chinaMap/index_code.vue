<template>
  <div class="code-container">
    <code>
      <h3 class="f-fwb">系统说明：</h3>
      <ul>
        <li>
          1. <span class="f-fwb">系统管理</span>： 可设置仓源字段枚举字段、 发布模板制定、 评分模板制定</li>
        <li>
          2. <span class="f-fwb">仓源管理</span>： 对制定的发布模板编辑、 提交详评、 审批等
        </li>
        <li>
          3. <span class="f-fwb">仓容管理</span>： 可对货架数量进行维护、设置仓源存储品类、建议导入品类设置
        </li>
      </ul>
    </code>
  </div>
</template>

<script>
export default {
  name: 'Code',
  mixins: [PageBase],
  data() {
    return {
      // store唯一标识
      storeKey: 'code',
      // 模块名称
      moduleName: '提示'
    }
  },
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss">
  .code-container{
    padding: 20px;
    code {
      padding: 15px 10px;
      margin-bottom: 20px;
      display: block;
      line-height: 36px;
      h3{
        font-size: 18px;
        font-weight: bold;
        color: red;
      }
      a {
        color: #337ab7;
        cursor: pointer;
        &:hover {
          color: rgb(32, 160, 255);
        }
      }
      li{
        font-size:16px;
      }
    }
  }
</style>
