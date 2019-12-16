import ExactSearch from '@/components/BasicSearch'
// import OrderSearch from 'biz/components/orderSearch'

/**
 * 列表页查询表单公共方法混入
 */
export default {
  components: {
    ExactSearch
  },
  props: {
    fields: {
      type: Array,
      default() {
        return []
      }
    },
    fieldsArr: {
      type: Array,
      default() {
        return []
      }
    },
    searchQuery: {
      type: Object,
      default() {
        return {}
      }
    },
    formItems: {
      type: Array,
      default() {
        return []
      }
    },
    searchHandle: {
      type: Function,
      default() {
        return () => {
        }
      }
    },
    searchReset: {
      type: Function,
      default() {
        return () => {
        }
      }
    }
  },
  data() {
    return {
      query: {},
      defLabelWidth: '100px',
      subFormItems: [],
      carriersL: [],
      carriersR: []
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
    }
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
                class={item.span === 2 ? 'span-2' : null}
                size={item.props.size || 'mini'}
                label-width={item.labelWidth || this.defLabelWidth}
                key={item.key}
                label={item.label}
              >
                <el-input
                  placeholder={item.placeholder || ''}
                  {...{ props: item.props }}
                  v-model={this.query[item.key].value}
                />
              </el-form-item>
            )
            break

          case 'select':
            allItems[item.key] = (
              <el-form-item
                class={`span-${item.span}` || 'span-1'}
                size={item.props.size}
                label-width={item.labelWidth || this.defLabelWidth}
                key={item.key}
                label={item.label}
              >
                <el-select
                  {...{ props: item.props }}
                  v-model={this.query[item.key].value}
                  clearable
                  onChange={() => {
                    if (item.needConnect) {
                      this.selctBackHandle(
                        item.key,
                        this.query[item.key].value
                      )
                    }
                  }}
                >
                  {_.isArray(item.dataList) && item.dataList.length > 0
                    ? item.dataList.map((subItem, key) => {
                      return (
                        <el-option
                          key={key + subItem.value}
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
      return this.allItemsFn(unpackItems, this.fieldsArr)
    },
    allItemsFn(arg, curArr) {
      const allItems = this.getAllItems()
      if (!curArr) {
        curArr = this.fieldsArr
      }
      for (let i = 0, len = curArr.length; i < len; i++) {
        if (allItems[curArr[i].key]) {
          arg.push(allItems[curArr[i].key])
        }
      }
      return arg
    }
  }
}
