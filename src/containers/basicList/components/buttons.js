export default {
  data() {
    return {
      msg: 'Hello World'
    }
  },
  props: {},
  inject: ['formItems'],
  methods: {
    onClick() {
    }
  },
  mounted() {
  },
  render() {
    return (<div>{
      this.formItems.map(item => {
        console.log(item)
        return ((<el-button type={item.btype}
          size = 'small' 
          icon={item.icon}
          > {item.name}</el-button>))
      })} </div>
    )
  }
}
