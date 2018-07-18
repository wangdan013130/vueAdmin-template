<template>
    <div class="app-searchbar">
        <el-select
            size="mini"
            style="width:120px"
            v-model="searchKey">
                <el-option
                    v-for="item in searchkeys"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key">
                </el-option>
        </el-select>
        <el-input size="mini" style="width:120px;" placeholder="请输入查询值" v-model="searchVal">
        </el-input>
        <el-button  type="primary" size="mini" icon="el-icon-search" @click="handleFilter(searchKey,searchVal)">搜索</el-button>
    </div>
</template>
<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchKey: 'mid',
      searchVal: ''
    }
  },
  props: {
    searchkeys: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleFilter() {
      this.$emit('searchVal', this.searchKey, this.searchVal)
    }
  }
  /* computed: {
    searchKey: function() {
       return this.searchKe
    }
  } */
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .app-searchbar {
    display: inline-block;
  }
</style>