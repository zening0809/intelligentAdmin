<template>
  <div>
    <search-bar :fields="fields" :fields-arr="fieldsArr" :search-query="query" :form-items="formItems" />
  </div>
</template>
<script>
import searchMap from './searchMap'
import SearchBar from '@container/searchBar'

export default {
  components: {
    SearchBar
  },
  data() {
    return {
      fields: [],
      formItems: [],
      fieldsArr: [],
      query: {}
    }
  },
  watch: {},
  beforeCreate() {
    this.fields = searchMap.fields
  },
  created() {
    this.fieldsArr = searchMap.fieldsArr
    this.query = searchMap.query
    this.formItems = searchMap.formItems
  },
  methods: {}
}
</script>
