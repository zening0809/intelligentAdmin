const serviceMap = {
  'caller': api.users,
  'items': [{
    'key': 'queryList',
    'callee': 'queryList'
  },
  {
    'key': 'exportList',
    'callee': 'exportList'
  },  
  {
    'key': 'addEntity',
    'callee': 'addEntity'
  },
  {
    'key': 'editEntity',
    'callee': 'editEntity'
  },
  {
    'key': 'deleteEntity',
    'callee': 'deleteEntity'
  },
  {
    'key': 'queryInfo',
    'callee': 'queryInfo'
  },
]
}
export default serviceMap