<template>
  <container-dialog
    :commit="commit"
    :dispatch="dispatch"
    :module-name="moduleName"
    :visible="state.entityDlgVis"
    :action="state.entityDlgActn"
    :update-state="updateState"
    :update-vis="updateVis"
    :store-key="storeKey"
    :state="state"
    :formName="formName"
    :dialogWidth="dialogWidth"
    :formItems="formItems"
    :formData="formData"
    :rules="rules"
    :labelPosition="labelPosition"
    :formSubmit="formSubmit"
  />
</template>

<script>
import ContainerDialog from "@container/basicDialog";
import formMap from "./formMap";
import { mapState } from "vuex";
export default {
  props: {
    dispatch: Function,
    commit: Function,
    updateState: Function,
    storeKey: String,
    state: Object,
    updateVis: Function
  },
  computed: {
    ...mapState('users', ['entity']),
  },
  watch: {
    entity: {
      deep: true,
      handler(newVal) {
        console.log(newVal, 'newVal')
        this.formData = _.cloneDeep(newVal)
      },
      immediate: true
    }
  },
  data() {
    return {
      resetFormData: 0,
      moduleName: formMap.moduleName,
      // left right top
      labelPosition: formMap.labelPosition,
      dialogWidth: formMap.dialogWidth,
      formName: formMap.formName,
      formItems: formMap.formItems,
      formData: formMap.formData,
      rules: formMap.rules
    }
  },
  components: {
    ContainerDialog
  },
  
  methods: {
    formSubmit(data){
      const actionType = this.state.entityDlgActn
      switch (actionType) {
        case 'add':
          this.dispatch('addEntity', data).then(()=>{
            this.formData = formMap.formData
            this.dispatch('queryList')
          })
          break;
        case 'edit':
          console.log(data)
          this.dispatch('editEntity', data).then(()=>{
            // this.formData = formMap.formData
            this.dispatch('queryList')
          })
          break;
      
        default:
          break;
      }
    }
  }
};
</script>

