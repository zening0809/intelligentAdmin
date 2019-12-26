const config = {'prefix':'api/users',
'items':[{'key':'queryList',
'url':'/query'},
{'key':'exportList',
'url':'/export'}]} 
export default {
 ...req.generate(config)
}