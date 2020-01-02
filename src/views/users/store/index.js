import { pageListMerge, generateActions } from '@/store/helper'
import actionMap from './actionMap'

const DEFAULTS = {
  entityProperty: ['id', 'nickname', 'gender', 'phonenum', 'remark'],
  entity: {}
}

export default pageListMerge({
  namespaced: true,
  actions: {
    ...generateActions(actionMap),
    async addEntity({ commit, state }, entity) {
      try {
        const {
          code,
          data,
          message
        } = await actionMap.caller['addEntity']({
          ...entity
        })
        if (code === 1) {
          
          this._vm.$message.success(message || '')
          commit('changeDlgMutation', {
            entityDlgActn: '',
            entityDlgVis: false
          })
        } else {
          this._vm.$message.error(message || '新增失败')
        }

      } catch (e) {
        console.error('queryList', e)
      }
    },
    async editEntity({ commit, state }, entity) {
      try {
        const {
          code,
          data,
          message
        } = await actionMap.caller['editEntity']({
          ...entity
        })
        if (code === 1) {
          console.log(data)
          console.log(message)
          this._vm.$message.success(message || '')
          commit('changeDlgMutation', {
            entityDlgActn: '',
            entityDlgVis: false
          })
        } else {
          this._vm.$message.error(message || '编辑失败')
        }

      } catch (e) {
        console.error('queryList', e)
      }
    },
    async deleteEntity({ commit, state }, entity) {
      try {
        const {
          code,
          data,
          message
        } = await actionMap.caller['deleteEntity'](entity)
        if (code === 1) {
          this._vm.$message.success(message || '')
        } else {
          this._vm.$message.error(message || '删除失败')
        }

      } catch (e) {
        console.error('queryList', e)
      }
    },
    async queryInfo({ commit, state }, entity) {
      try {
        const {
          code,
          data,
          message
        } = await actionMap.caller['queryInfo'](entity)
        if (code === 1) {
          commit('updateEntity', {
            entity: _.pick(data, state.entityProperty || [])
          })
          return _.pick(data, state.entityProperty || [])
          // this._vm.$message.success(message || '')
          
        } else {
          this._vm.$message.error(message || '请求失败')
        }

      } catch (e) {
        console.error('queryList', e)
      }
    }
  },
  mutations: {
    changeDlgMutation(state, payload){
      state.entityDlgActn = payload.entityDlgActn
      state.entityDlgVis = payload.entityDlgVis
    },
    updateEntity(state, payload){
      state.entity = payload.entity
    },
  }
}, DEFAULTS)
