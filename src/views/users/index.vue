<template>
  <div>
    <search-bar :dispatch="dispatch" :update-state="updateState" />
    <Tbale-list :state="state" :dispatch="dispatch" :update-state="updateState" />
    <entity-dialog
      :commit="commit"
      :state="state"
      :dispatch="dispatch"
      :update-vis="updateEntityDlgVis"
      :store-key="storeKey"
      :update-state="updateState"
    />
  </div>
</template>
<script>
import SearchBar from './containers/exactSearch'
import TbaleList from './containers/exactList'
import EntityDialog from './containers/entityDialog'
import store from './store'
import mixinStores from '@/minxs/store'
import pageList from '@/minxs/pageList'
export default {
  components: {
    SearchBar,
    TbaleList,
    EntityDialog
  },
  mixins: [mixinStores, pageList],
  data() {
    return {
     
      storeKey: 'users',
      formInline: {
        user: '',
        region: ''
      },
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  computed: {},
  created() {
    this.registStore(store)
  },
  mounted() {
  },
  methods: {
  }
}
</script>




