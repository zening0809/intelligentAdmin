<template>
  <el-form
    @submit.native.prevent
    :model="ruleForm"
    :label-position="labelPosition"
    label-width="100px"
    :rules="rulesList"
    ref="generateFormuuid"
    class="demo-ruleForm"
  >
     <slot name="unpack" />
     <slot name="submit" />
    
  </el-form>
</template>
<script>
export default {
  props: {
    ruleForm: {
      type: Object,
      default: null
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    rulesList: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted(){
    console.log(this.ruleForm)
  }
};
</script>