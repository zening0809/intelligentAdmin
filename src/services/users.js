const config = {
  'prefix': 'api/users',
  'items': [{
    'key': 'queryList',
    'url': '/query'
  },
  {
    'key': 'exportList',
    'url': '/export'
  },
  {
    'key': 'addEntity',
    'url': '/add'
  },
  {
    'key': 'deleteEntity',
    'url': '/delete'
  },
  {
    'key': 'editEntity',
    'url': '/edit'
  },
  {
    'key': 'queryInfo',
    'url': '/queryInfo'
  }
]
}
export default {
  ...req.generate(config)
}