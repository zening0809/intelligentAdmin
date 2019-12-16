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
    'btype': 'success'
  },
  {
    'type': 'button',
    'name': '功能2',
    'btype': 'primary'
  },
  {
    'type': 'button',
    'name': '功能3',
    'btype': 'danger'
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
      'type': 'btn',
      'name': '点击大按钮',
      'btype': 'danger'
    },
    // 操作的组件，可以是btn 可以是a
    {
      'type': 'a',
      'name': '大链接'
    }
    // 操作的组件可以是btn可以是a
  ],
  'actionBtnWidth': 250// 操作宽度
}
export default tableMap
