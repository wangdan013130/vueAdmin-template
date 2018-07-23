<template>
  <div>
    <el-input v-model="phone" name="phone" type="text"  autoComplete="off" placeholder="输入手机号" @blur="selTel">
      <el-select class="el-select" slot="prepend" v-model="areano" filterable placeholder="选择区号">
        <el-option
          v-for="item in areaData"
          :key="item.tel"
          :value="item.tel">
          {{item.en + "(" + item.name + ")" + item.tel}}
        </el-option>
      </el-select>
   </el-input>
  </div>
</template>
<script>
  import { getAreaData } from '@/api/common'
  export default {
    name: 'TelSel',
    data() {
      return {
        areaData: [],
        areano: '86',
        phone: ''
      }
    },
    methods: {
      selTel() {
        // console.log(this.areano, this.phone)
        this.$emit('setMphone', this.areano, this.phone)
      }
    },
    created: function() {
      getAreaData().then(response => {
        this.areaData = response.data.data
      })
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-select{
  width:80px
}
</style>
