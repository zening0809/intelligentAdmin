const searchMap = {
  'query': {
    'customerName': { 'value': 'aaa' },
    'ccc': { 'value': 'aaa' },
    'orderSource': { 'value': [] }
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
    'key': 'ccc',
    'label': 'test2',
    'span': 1,
    'placeholder': '请输入',
    'props': {
      'size': 'mini'
    }
  },
  {
    'type': 'select',
    'key': 'orderSource',
    'label': '渠道',
    'needQuery': false,
    'span': 1,
    'dataList': [{
      'value': '',
      'label': '请选择'
    },
    {
      'value': 0,
      'label': '上游下发'
    },
    {
      'value': 1,
      'label': '手工创建'
    }],
    'props': {
      'size': 'mini',
      'collapse-tags': true,
      'multiple': true,
      'placeholder': '请选择'
    }
  }],
  'fields': ['customerName',
    'ccc',
    'orderSource'],
  'fieldsArr': [{
    'key': 'customerName',
    'name': 'test2',
    'show': true
  },
  {
    'key': 'ccc',
    'name': 'test2',
    'show': true
  },
  {
    'key': 'orderSource',
    'name': '渠道'
  }]
}
export default searchMap
