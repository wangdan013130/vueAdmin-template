<template>
  <div class = "container">
    <split-pane v-on:resize="resize" :min-percent='20' :default-percent='30' split="horizontal">
        <template slot="paneL">
          <split-pane split="vertical">
              <template slot="paneL">
                <div class="left-container">
                <el-input placeholder="请输入玩家ID" v-model="uid">
                  <template slot="prepend">第一步</template>
                  <el-button slot="append" icon="el-icon-search" @click="getUserById">查找</el-button>
                </el-input>
                </div>
              </template>
            <template slot="paneR">
            <div class="right-container">              
            </div>
            </template>
          </split-pane>
        </template>
        <template slot="paneR">
          <div class="bottom-container">
            
          </div>
        </template>
    </split-pane>
  </div>
</template>
<script>
import { searchUser } from '@/api/user'
import splitPane from 'vue-splitpane'
export default{
  name: 'userUi',
  components: { splitPane },
  data() {
    return {
      uid: ''
    }
  },
  methods: {
    getUserById() {
      const para = {}
      para.uid = parseInt(this.uid)
      if (isNaN(para.uid)) {
        this.$message({
          message: '用户ID格式错误',
          type: 'success'
        })
        return
      } 
      searchUser(para).then(response => {
        const rtn = response.data
        console.log(rtn) 
      })
    },
    resize() {
      console.log('resize')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .container{
    position: relative;
    height: 100vh;
  }
  .left-container {
    background-color: #F38181;
    height: 100%;
  }
  .right-container {
    background-color: #FCE38A;
    height: 100%;
  }
  .bottom-container {
    width: 100%;
    background-color: #95E1D3;
    height: 100%;
  }
</style>
