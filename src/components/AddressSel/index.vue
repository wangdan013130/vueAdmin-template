<template>
  <div id="app">
    <el-cascader
      size="large"
      :options="options"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>
  </div>
</template>
 
<script>
  import { regionDataPlus, CodeToText } from 'element-china-area-data'
  export default {
    name: 'AddressSel',
    data() {
      return {
        options: regionDataPlus,
        selectedOptions: []
      }
    },
    methods: {
      handleChange(value) {
        // console.log(value)
        let area = ''
        area += value.map((val, index, arr) => {
          return CodeToText[val]
        })
        // console.log(area)
        this.$emit('setBaseAddr', area)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-cascader{
  width: 100%
}
</style>
