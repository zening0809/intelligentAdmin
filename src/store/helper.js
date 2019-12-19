import { capitalize } from '@/utils/lodash'

/**
 * module对象合并
 * @param {Array|Object} sps 需要合并的父对象
 * @param {Object} overrides 一些新增的属性和方法
 * @param {Object} defaults 默认状态
 */
export function merge(sps, overrides, defaults) {
  if (arguments.length === 0) {
    return {}
  }
  if (arguments.length === 1) {
    overrides = sps
    sps = []
  } else if (arguments.length === 2) {
    defaults = overrides
    overrides = sps
    sps = []
  } else if (arguments.length === 3) {
    if (!_.isArray(sps)) {
      sps = [sps]
    }
  }
  const sb = {}
  if (defaults) {
    // 添加默认state
    sb.state = function() {
      return _.cloneDeep(defaults)
    }
    // 默认添加reset|update函数
    sb.mutations = {
      reset(state, payload) {
        if (_.isEmpty(payload) || _.isObject(payload)) {
          Object.assign(state, {
            ..._.cloneDeep(defaults),
            ...(payload || {})
          })
        } else if (_.isArray(payload)) {
          for (let i = 0; i < payload.length; i++) {
            state[payload[i]] = _.cloneDeep(defaults[payload[i]])
          }
        } else if (_.isString(payload)) {
          state[payload] = _.cloneDeep(defaults[payload])
        }
      },
      update(state, payload) {
        if (_.isArray(payload)) {
          for (let i = 0; i < payload.length; i++) {
            state[payload[i]] = _.cloneDeep(defaults[payload[i]])
          }
        } else if (_.isString(payload)) {
          state[payload] = _.cloneDeep(defaults[payload])
        } else if (_.isObject(payload)) {
          Object.assign(state, payload)
        }
      }
    }
  }
  sps.push(overrides)
  return _.merge(sb, ...sps)
}

/**
 * 列表页module合并
 * @param {Array|Object} sps 需要合并的父对象
 * @param {Object} overrides 一些新增的属性和方法
 * @param {Object} defaults 默认状态
 */
export function pageListMerge(sps, overrides, defaults) {
  if (arguments.length === 2) {
    defaults = overrides
  }
  defaults = {
    // 加载状态
    loading: false,
    // 查询条件
    query: {},
    // 当前页码
    pageIndex: 1,
    // 每页展示条数
    pageSize: 20,
    // 总条数
    total: 0,
    // 列表数据
    list: [],
    ...defaults
  }
  return merge(sps, overrides, defaults)
}

/**
 * 辅助生产增|删|改|查等通用action
 * @param {Object} config
 */
export function generateActions(config) {
  const actions = {}
  const items = config.items
  for (let i = 0, len = items.length; i < len; i++) {
    const item = items[i]
    // 是否显示消息框 赋默认值
    item.showMsg = item.showMsg || true
    console.log(item.key)
    switch (item.key) {
      case 'queryEntity':
        actions.queryEntity = async function({
          commit
        }, {
          entity,
          success,
          error,
          berforeUpdate,
          options
        }) {
          try {
            const {
              head,
              body
            } = await (item.caller || config.caller)[item.callee](entity, options)
            if (head.code === '200') {
              berforeUpdate && berforeUpdate(body)
              commit('update', {
                entity: body || {}
              })
              success && success(body, head)
            } else {
              this._vm.$message.error(head.subMessage)
              error && error(body, head)
            }
          } catch (e) {
            console.error('queryEntity', e)
            error && error(undefined, undefined, e)
          }
        }
        break
      case 'queryList':
        actions.queryList = async function({
          commit,
          state
        }) {
          try {
            commit('update', {
              loading: true
            })
            const {
              code,
              content
            } = await (item.caller || config.caller)[item.callee]({
              ...state.query,
              page: {
                current: state.pageIndex,
                size: state.pageSize
              }
            })
            const payload = {
              loading: false
            }
            if (code === 1) {
              payload.list = _.get(content, 'rows') || []
              payload.total = _.get(content, 'total') || 0
            } else {
              if (item.showMsg) {
                this._vm.$message.error(content.message)
              }
            }
            console.log(payload)
            // payload.list
            commit('update', payload)
          } catch (e) {
            commit('update', {
              loading: false
            })
            console.error('queryList', e)
          }
        }
        break
      case 'exportList':
        actions.exportList = async function({
          commit,
          state
        }) {
          try {
            const exportUrl = await (item.caller || config.caller)[item.callee]({
              ...state.query
            })
            console.log('exportUrl', exportUrl)
          } catch (err) {
            console.log(err)
          }
        }
        break
      default:
        // actions[item.key] = function({ commit }, { entity, success, error, berforeUpdate, options}) {
        //   // console.log(324561234567)
        //   console.log(item,'caller--------------','confuig',config)
        //   console.log(commit,'commit')
        //   // (item.caller || config.caller)[item.callee]()
        // }
        actions[item.key] = async function({
          commit
        }, {
          entity,
          success,
          error,
          berforeUpdate,
          options,
          data
        }) {
          try {
            const {
              code,
              content
            } = await (item.caller || config.caller)[item.callee](data, entity, options)
            if (code === 1) {
              if (item.mutation) {
                berforeUpdate && berforeUpdate(content)
                commit(item.mutation, content)
              }
              success && success(content, code)
            } else {
              if (item.showMsg && (content.subMessage || content.message)) {
                this._vm.$message.error(content.subMessage || content.message)
              }
              error && error(content, code)
            }
          } catch (e) {
            error && error(undefined, undefined, e)
            console.error(`actions[${item.key}]`, e)
          }
        }
    }
  }
  return actions
}
