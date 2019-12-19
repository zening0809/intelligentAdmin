export default {
  data() {
    return {
      msg: 'Hello World'
    }
  },
  props: {
    dispatchFeature: {
      type: Function,
      default: () => { }
    }
  },
  inject: ['tableMap'],
  methods: {
    export() {
    }
  },
  render() {
    return (<div>{
      this.tableMap.formItems.map(item => {
        return ((<el-button type={item.btype}
          size='small'
          icon={item.icon}
          onClick={(e) => {
            e.stopPropagation()
            this.dispatchFeature(item.feature)
          }}
        > {item.name}</el-button>))
      })} </div>
    )
  }
}
