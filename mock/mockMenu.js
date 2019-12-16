import mockMenuList from './mockMenu.json'
export default [
  {
    url: '/getMenuList',
    type: 'get',
    response: config => {
     
      return {
        code: 1,
        "message": "SUCCESS",
        content: mockMenuList
      }
    }
  }
]

