const searchMap = {
  'query': {
    'customerName': {
      value: 'intellent'
    },
    'customerName2': {
      value: 'intellent'
    }
  },
  'formItems': [{
    'type': 'input',
    'key': 'customerName',
    'label': 'test2',
    'span': 1,
    'placeholder': '请输入',
    'props': { 'size': 'mini' }
  },
  {
    'type': 'input',
    'key': 'customerName2',
    'label': '收货客户',
    'span': 1,
    'placeholder': '请输入',
    'props': { 'size': 'mini' }
  }],
  'fields': ['customerName',
    'customerName2'],
  'fieldsArr': [{
    'key': 'customerName',
    'name': 'test2',
    'show': true
  },
  {
    'key': 'customerName2',
    'name': '收货客户',
    'show': true
  }]
}
export default searchMap
