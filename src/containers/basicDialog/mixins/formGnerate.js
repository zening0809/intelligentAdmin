
/**
 * 列表页查询表单公共方法混入
 */
export default {
  components: {
  },
  props: {
    formName: {
      type: String,
      default: 'ruleForm'
    },
    dialogWidth: {
      type: Number,
      default: 760
    },
    labelPosition: {
      type: String,
      default: 'ruleForm'
    },
    formItems: {
      type: Array,
      default() {
        return []
      }
    },
    rules: {
      type: Object,
      default: null
    },
    formData: {
      type: Object,
      default: null
    },
    formSubmit: {
      type: Function,
      default() {
        return () => {
        }
      }
    },
    formReset: {
      type: Function,
      default() {
        return () => {
        }
      }
    }
  },
  data() {
    return {
      defLabelWidth: '100px',
      subFormItems: [],
      formDataInstance: {}
    }
  },
  watch: {
    formItems: {
      deep: true,
      handler(newVal) {
        if (_.isArray(newVal)) {
          newVal.length > 0 ? (this.subFormItems = _.cloneDeep(newVal)) : null
        }
      },
      immediate: true
    },
    formData: {
      deep: true,
      handler(newVal) {
        this.formDataInstance = _.cloneDeep(this.formData)
      },
      immediate: true
    }
    // resetFormData(){
    //   this.formDataInstance = _.cloneDeep(this.formData)
    // }
  },
  created() {
    this.formDataInstance = _.cloneDeep(this.formData)
  },
  mounted() {
  },
  methods: {
    getAllItems() {
      const allItems = {}
      if (_.isEmpty(this.subFormItems)) {
        return allItems
      }
      this.subFormItems.map(item => {
        switch (item.type) {
          case 'input':
            allItems[item.key] = (
              <el-form-item
                // class={item.span === 2 ? 'span-2' : null}
                size={item.props.size || 'medium'}
                label-width={item.labelWidth || this.defLabelWidth}
                key={item.key}
                label={item.label}
                prop={item.key}
                style={item.style}
              >
                <el-input
                  placeholder={item.placeholder || ''}
                  {...{ props: item.props }}
                  v-model={this.formDataInstance[item.key]}
                />
              </el-form-item>
            )
            break

          case 'select':
            allItems[item.key] = (
              <el-form-item
                // class={`span-${item.span}` || 'span-1'}
                size={item.props.size}
                label-width={item.labelWidth || this.defLabelWidth}
                key={item.key}
                label={item.label}
                prop={item.key}
              >
                <el-select
                  {...{ props: item.props }}
                  v-model={this.formDataInstance[item.key]}
                  clearable
                  onChange={() => {
                    // if (item.needConnect) {
                    //   this.selctBackHandle(
                    //     item.key,
                    //     this.formData[item.key]
                    //   )
                    // }
                  }}
                >
                  {_.isArray(item.dataList) && item.dataList.length > 0
                    ? item.dataList.map((subItem, key) => {
                      return (
                        <el-option
                          key={Symbol(key)}
                          label={subItem.label}
                          value={subItem.value}
                        />
                      )
                    })
                    : null}
                </el-select>
              </el-form-item>
            )
            break

          case 'checkbox':
            allItems[item.key] = (
              <el-form-item
                // class={item.span === 2 ? 'span-2' : null}
                size={item.props.size || 'medium'}
                label-width={item.labelWidth || this.defLabelWidth}
                key={item.key}
                label={item.label}
                prop={item.key}
              >
                <el-checkbox-group v-model={this.formDataInstance[item.key]}>
                    {_.isArray(item.dataList) && item.dataList.length > 0
                        ? item.dataList.map((subItem, key) => {
                          return (
                            // name={subItem.value}
                            <el-checkbox key={subItem.label} label={subItem.label}></el-checkbox>
                          )
                        })
                    : null}
                </el-checkbox-group>
              </el-form-item>
            )
            break

          case 'switch':
            allItems[item.key] = (
              <el-form-item
                // class={item.span === 2 ? 'span-2' : null}
                size={item.props.size || 'medium'}
                label-width={item.labelWidth || this.defLabelWidth}
                key={item.key}
                label={item.label}
                prop={item.key}
              >
                  <el-switch  {...{ props: item.props }} v-model={this.formDataInstance[item.key]}></el-switch>
              </el-form-item>
            )
           break
        //  <el-form-item label="活动形式">
        //    <el-input type="textarea" v-model="form.desc"></el-input>
        //  </el-form-item>
          case 'radio':
            allItems[item.key] = (
              <el-form-item
                // class={item.span === 2 ? 'span-2' : null}
                size={item.props.size || 'medium'}
                label-width={item.labelWidth || this.defLabelWidth}
                key={item.key}
                label={item.label}
                prop={item.key}
              >
                  <el-radio-group v-model={this.formDataInstance[item.key]}>
                  {_.isArray(item.dataList) && item.dataList.length > 0
                        ? item.dataList.map((subItem, key) => {
                          return (
                          <el-radio  key={subItem.label} label={subItem.value} >{subItem.label}</el-radio>
                          )
                        })
                  : null}
                  </el-radio-group>
              </el-form-item>
            )
            break

          // case 'textarea':
          //     allItems[item.key] = (
          //       <el-form-item
          //         // class={item.span === 2 ? 'span-2' : null}
          //         size={item.props.size || 'medium'}
          //         label-width={item.labelWidth || this.defLabelWidth}
          //         key={item.key}
          //         label={item.label}
          //         prop={item.key}
          //       >
          //           <el-input type="textarea" v-model="form.desc"></el-input>
          //         <el-input
          //           type="textarea" 
          //           placeholder={item.placeholder || ''}
          //           {...{ props: item.props }}
          //           v-model={this.formData[item.key]}
          //         />
          //       </el-form-item>
          //     )
          //     break
          case "date-range":
            allItems[item.key] = (
              <el-form-item
                key={item.key}
                label={item.label}
                // class="span-2"
                prop={item.key}
              >
                <el-date-picker
                  style={item.style}
                  {...{ props: item.props }}
                  v-model={this.formData[item.key].value}
                  default-time={['00:00:00', '23:59:59']}
                />
              </el-form-item>
            );
            break;
          default:
            break
        }
      })
      return allItems
    },
    packItems() {
      const items = []
      return this.allItemsFn(items, this.fieldsArr)
    },
    unpackItems() {
      const unpackItems = []
      return this.allItemsFn(unpackItems)
    },
    allItemsFn(arg, curArr) {
      const allItems = this.getAllItems()
      for (const key in allItems) {
        arg.push(allItems[key])
      }
      return arg
    }
  }
}
