export default {
  data() {
    return {
      msg: 'Hello World'
    }
  },
  props: {
    onExport: {
      type: Function,
      default: () => {}
    }
  },
  inject: ['formItems'],
  methods: {
    export() {
      this.onExport()
    }
  },
  render() {
    return (<div>{
      this.formItems.map(item => {
        return ((<el-button type={item.btype}
          size = 'small'
          icon={item.icon}
        > {item.name}</el-button>))
      })} </div>
    )
  }
}
