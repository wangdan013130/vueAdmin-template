<template>
  <el-row class="panel-group" :gutter="20">
    <el-col :xs="24" :sm="12" :lg="8">
      <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><i class="el-icon-view"></i>个人信息</span>
          </div>
          <div class="component-item">
            <pan-thumb pan-thumb width="80px" height="80px" :image="imgurl">
              嘉兴乐玩网络科技有限公司
            </pan-thumb>
            <ul class="userinfolist">
              <li>ID:{{info.mid}}</li>
              <li>钻石余额:{{info.money}}</li>
              <li >金卡余额:{{info.gold}}</li>
            </ul>
          </div>
        </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :lg="8">
      <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><i class="el-icon-bell"></i>代理后台公告</span>
          </div>
          <div class="component-item">
           {{notice}}
          </div>
        </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
import { getnotice } from '@/api/common'

export default {
  components: {
    PanThumb
  },
  data() {
    return {
      notice: ''
    }
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
  },
  created() {
    getnotice().then(response => {
      this.notice = response.data.content
    }).catch(() => {
      this.$message.error('公告未能成功获取')
      return false
    })
  }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.userinfolist {
  margin:0 0 0 10px;
  padding:0;
  list-style: none;
  display:inline-block;
  vertical-align: top;
}
.userinfolist li{
  line-height: 33px;
}
.component-item{
  min-height: 100px;
}
</style>
