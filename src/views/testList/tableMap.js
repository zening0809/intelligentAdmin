const tableMap = {
  'fieldsArr': [{
    'key': 'author',
    'name': 'test',
    'show': true
  },
  {
    'key': 'author2',
    'name': 'test2',
    'show': true,
    'width': 200
  },
  {
    'key': 'display_time',
    'name': '收货客户',
    'show': true
  }],
  'formItems': [{
    'type': 'button',
    'name': '功能1',
    'btype': 'success',
    'icon': 'el-icon-check'
  },
  {
    'type': 'button',
    'name': '功能2',
    'btype': 'primary',
    'icon': 'el-icon-star-off'
  },
  {
    'type': 'button',
    'name': '功能3',
    'btype': 'danger',
    'icon': 'el-icon-delete'
  }],
  'selectType': 'multiple',
  // multiple 控制单选多选
  'showActionCol': true,
  // 是否显示操作列
  'showIndexCol': true,
  // 是否显示索引
  'actionColLabel': '扩展功能？',
  // 操作后面的字段名字
  'actionBtn': [
    {
      'type': 'a',
      'name': '小链接',
      'icon': 'el-icon-delete'
    },
    {
      'type': 'btn',
      'name': '大按钮',
      'btype': 'danger',
      'icon': 'el-icon-check'
    },
    // 操作的组件，可以是btn 可以是a
    {
      'type': 'a',
      'name': '大链接',
      'icon': 'el-icon-delete'
    }
    // 操作的组件可以是btn可以是a
  ],
  'actionBtnWidth': 250,
  // 操作宽度
  'pagination': true,
  // 控制分页显示隐藏
  'pagePosition': 'up'
  // 控制分页位置
}
export default tableMap
