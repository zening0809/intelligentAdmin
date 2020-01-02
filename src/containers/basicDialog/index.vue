<script>
import EntityDialog from "./mixins/entityDialog";
import FormMixins from "./mixins/formGnerate";
import FormGenerate from "@component/FormGenerate";
import { mapState } from "vuex";
export default {
  mixins: [FormMixins, EntityDialog],
  props: {
    dispatch: Function,
    commit: Function,
    updateState: Function,
    storeKey: String
  },
  components: { FormGenerate },
  computed: {},
  data() {
    return {
    };
  },
  methods: {
    switchDispatch(){
      switch (this.action) {
        case 'add':
          this.formSubmit(this.formDataInstance)
          // this.dispatch('addEntity', this.formDataInstance)
          break;
        case 'edit':
          this.formSubmit(this.formDataInstance)
          // this.dispatch('addEntity', this.formDataInstance)
          break;
      
        default:
          break;
      }
    },
    dispatchSubmit(){
      this.$refs[this.formName].$refs.generateFormuuid.validate((valid) => {
        if (valid) {
          this.switchDispatch()
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      return

      // console.log(this.formDataInstance)
    }
  },
  render() {
    return (
      <div class="dlg">
        <basic-dialog
          visible={this.visible}
          width={this.dialogWidth}
          title={this.title}
          show-ft={false}
          handle-close={this.handleClose}
          handle-closed={this.handleClosed}
          handle-ok={this.handleOk}
          module-name={this.moduleName}
        >
          <FormGenerate 
            ruleForm={this.formDataInstance}
            rulesList={this.rules}
            ref={this.formName}
          >
            <template slot="unpack">{this.unpackItems()}</template>
            <template slot="submit">
                <el-form-item>
                  <el-button type="primary" onClick={()=>{
                    this.dispatchSubmit()
                  }}>立即创建</el-button>
                </el-form-item>
            </template>
            
          </FormGenerate>
        </basic-dialog>
      </div>
    );
  }
};
</script>

