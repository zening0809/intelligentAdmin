<template>
  <div>
    <search-bar />
  </div>
</template>
<script>
import SearchBar from './components/exactSearch'
import store from './store'
import mixinStores from '@/minxs/store'
// import { mapState } from 'vuex'
export default {
  components: {
    SearchBar
  },
  mixins: [mixinStores],
  data() {
    return {
      storeKey: 'testList'
    }
  },
  created() {
    this.registStore(store)
  },
  mounted() {
  },
  methods: {
  }
}
</script>

