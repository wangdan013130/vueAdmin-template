<template>
  <el-row class="panel-group" :gutter="20">
    <el-col :xs="12" :sm="12" :lg="12">
      <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><i class="el-icon-view"></i>个人信息</span>
          </div>
          <div class="component-item">
            <pan-thumb pan-thumb width="100px" height="100px" :image="imgurl">
              嘉兴乐玩网络科技有限公司
            </pan-thumb>
            <ul>
              <li>ID:{{info.mid}}</li>
              <li>钻石余额:{{info.money}}</li>
              <li>金卡余额:{{info.gold}}</li>
            </ul>
          </div>
        </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="12">
      <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><i class="el-icon-bell"></i>代理后台公告</span>
          </div>
          <div class="component-item">
           
          </div>
        </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'

export default {
  components: {
    PanThumb
  },
  computed: {
    imgurl() {
      // const gameid = window.location.href.split('.')
      let common = 'avatar.png'
      if (this.GAMETYPE['git'] != null && this.GAMETYPE['git']['loginImg']) {
        common = this.GAMETYPE['git']['loginImg']
      }
      const ret = require('@/assets/producticon/' + common)
      return ret
    },
    ...mapGetters([
      'info'
    ])
  }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.component-item{
  min-height: 100px;
}
</style>
