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
    console.log(this.formItems, '@@@@@@@@@@')
  },
  render() {
    return (<div>{
      this.formItems.map(item => {
        return ((<el-button type='primary'
          size = 'small' > {item.name} </el-button>))
      })} </div>
    )
  }
}
