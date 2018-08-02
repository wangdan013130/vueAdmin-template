<template>
  <div class = "container">
    <gift-money :dialogFormVisible="isOpengiftMoney" :isMember="isMember" @refreshUI="getUserById" @closegiftMoney="closegiftMoney" ref="giftmethod"></gift-money>
    <split-pane v-on:resize="resize" :min-percent='20' :default-percent='30' split="horizontal">
        <template slot="paneL">
          <split-pane split="vertical">
              <template slot="paneL">
                <div class="left-container">
                <el-input placeholder="请输入玩家ID" v-model="uid">
                  <template slot="prepend">第一步</template>
                  <el-button slot="append" icon="el-icon-search" @click="getUserById">查找</el-button>
                </el-input>
                <el-row :gutter="10">
                  <el-button :xs="6" :sm="6" :md="4" :lg="3" :xl="1" size="mini" type="primary" round  @click="giftMoney">赠送货币</el-button>
                  <el-button :xs="6" :sm="6" :md="4" :lg="3" :xl="1" size="mini" type="primary" round  @click="forcelogout">强制退出</el-button>
                  <el-button :xs="6" :sm="6" :md="4" :lg="3" :xl="1" size="mini" type="primary" round v-if="clubSwitch" @click="unbindAgent">解绑代理</el-button>
                </el-row>
                <el-row :gutter="10">
                  <el-button :xs="6" :sm="6" :md="4" :lg="3" :xl="1" size="mini" type="primary" round>货币记录</el-button>
                  <el-button :xs="6" :sm="6" :md="4" :lg="3" :xl="1" size="mini" type="primary" round>玩家战绩</el-button>
                  <el-button :xs="6" :sm="6" :md="4" :lg="3" :xl="1" size="mini" type="primary" round>活动记录</el-button>
                </el-row>
                <el-select v-model="selactivity" clearable placeholder="请选择">
                  <el-option
                    v-for="item in quickactivityopts"
                    :key="item.id"
                    :label="item.activity_name"
                    :value="item.id"
                    @click.native="checkactivity">
                  </el-option>
                </el-select>
                </div>
              </template>
            <template slot="paneR">
            <div class="right-container"> 
                <user-card ref="usercard"></user-card>
            </div>
            </template>
          </split-pane>
        </template>
        <template slot="paneR">
          <div class="bottom-container">
            <user-data ref="userdata"></user-data>
          </div>
        </template>
    </split-pane>
  </div>
</template>
<script>
import userpre from '@/assets/preimg/user.png'
import { searchUser, forceLogout, unbindAgent, getActivityList } from '@/api/user'
import { parseTime } from '@/utils/time'
import splitPane from 'vue-splitpane'
import GiftMoney from '@/components/GiftMoney'
import UserCard from '../components/UserCard'
import UserData from '../components/UserData'
export default{
  name: 'userUi',
  components: { splitPane, UserCard, UserData, GiftMoney },
  data() {
    return {
      uid: '',
      isOpengiftMoney: false,
      isMember: false,
      selactivity:'',
      quickactivityopts:[]
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
        const userinfo = {
          uid: '',
          image: userpre,
          nickname: '暂无查询',
          userlevel: 0,
          bindagent: 0,
          lastlogintime: '2018-01-01 00:00:00', 
          registertime: '2018-01-01 00:00:00',
          masterscore: 0,
          diamond: 0,
          goldcard: 0,
          coin: 0  
        } 
        if (rtn.rows && rtn.rows.length > 0) {
          const tempinfo = rtn.rows[0]
          if (tempinfo.uid) {
            userinfo.uid = tempinfo.uid
          }
          if (tempinfo.headimgurl) {
            userinfo.image = tempinfo.headimgurl
          }
          if (tempinfo.nickname) {
            userinfo.nickname = unescape(tempinfo.nickname)
          }
          if (tempinfo.money !== null) {
            userinfo.diamond = tempinfo.money  
          }
          if (tempinfo.coin !== null) {
            userinfo.coin = tempinfo.coin  
          }
          if (tempinfo.coin !== null) {
            userinfo.coin = tempinfo.coin  
          }
          if (tempinfo.lastlogintime !== null) {
            userinfo.lastlogintime = parseTime(tempinfo.lastlogintime * 1000, '{y}-{m}-{d} {h}:{i}:{s}')  
          }
          if (tempinfo.sendTime !== null) {
            userinfo.registertime = parseTime(tempinfo.sendTime, '{y}-{m}-{d} {h}:{i}:{s}')  
          }
          if (tempinfo.club_agent_id !== null) {
            userinfo.bindagent = tempinfo.club_agent_id 
          }
          if (tempinfo.match_score !== null) {
            userinfo.masterscore = tempinfo.masterscore 
          }
          if (tempinfo.ep !== null) {
            userinfo.userlevel = tempinfo.ep 
          }
          this.$refs['usercard'].setUerInfor(userinfo)
        }
      })
    },
    giftMoney() {
      const uid = parseInt(this.uid)
      if (isNaN(uid)) {
       this.$message({
        message: '先搜索并核对需要操作的用户ID',
        type: 'error'
       })
       return
      }
      this.isOpengiftMoney = true
      this.isMember = false
      this.$nextTick(() => {
        this.$refs['giftmethod'].setMid(this.uid, false)
      })
    },
    closegiftMoney() {
      this.isOpengiftMoney = false
      this.isMember = false
      this.$nextTick(() => {
        this.$refs['giftmethod'].resetForm()
      })
    },
    forcelogout() {
      let para = {}
      para.uid = parseInt(this.uid)
      if (isNaN(para.uid)) {
        this.$message({
          message: rtn,
          type: 'error'
        })
        return
      }
      forceLogout(para).then(response => {
        const rtn = response.data
        this.$message({
          message: rtn,
          type: 'success'
        })
      })
    },
    unbindAgent() {
      let para = {}
      para.uid = parseInt(this.uid)
      if (isNaN(para.uid)) {
        this.$message({
          message: rtn,
          type: 'error'
        })
        return
      }
      unbindAgent(para).then(response => {
        const rtn = response.data
        if(rtn.errno === 10) {
          this.$message({
            message: '此玩家没有绑定关系',
            type: 'error'
          })
          return
        }
        this.$message({
          message: '解绑完成',
          type: 'error'
        })
      })
    },
    getList() {
      getActivityList({start:0, limit:30}).then(response => {
        const rtn = response.data
        if (rtn.total > 0) {
          this.quickactivityopts = rtn.rows.map( (v,idx,item) => {
            if (v.show === '1')
            return item
          })
          this.selactivity = this.quickactivityopts[0]['id']
        }
     })
    },
    quickActivity() {
      let para = {}
      para.start = 0
      para.limit = 30
    },
    checkactivity() {
      
      postJson("/activity/queryUserStatus",{uid:uid,activity_id:activityIdEarly},function(data){
                activeShow(activityIdEarly,data,uid);
            });
    },
    resize() {
      console.log('resize')
    }
  },
  computed: {
    userpre() {
      return require('@/assets/preimg/user.png')
    },
    clubSwitch() {
      return this.$root.$allSwitch.clubModeSwitch
    }  
  },
  created () {
    this.getList()
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .container{
    position: relative;
    height: 100vh;
  }
  .left-container {
    height: 100%;
    border: 1px solid #ebeef5;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    .el-row{
      margin:10px auto;
      padding:0 5px;
    } 
  }
  .right-container {
    height: 100%;
  }
  .bottom-container {
    width: 100%;
    height: 100%;
  }
</style>
<style rel="stylesheet/scss" lang="scss">
  .left-container {
    .el-input-group__prepend{
      background-color: #409EFF;
      color: #fff;
    }
    .el-input-group__append{
      background-color: #409EFF;
      color: #fff;
    }  
  }
</style>
