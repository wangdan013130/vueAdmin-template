<template>
    <el-card shadow="hover" id="usercardbox">
        <div slot="header" class="clearfix header">
            <img class="user-avatar" :src="userinfo.image">
            <div class="info-box">
                <p>ID:{{userinfo.uid}}</p>
                <p><span>{{userinfo.nickname}}</span><svg-icon icon-class="userlevel" class-name='userlevel'/><span>{{userinfo.userlevel}}</span></p>
                <p>注册时间:<span>{{userinfo.registertime}}</span></p>       
            </div>     
        </div>
        <div class="content">
            <el-row class="moneyrow">
                <el-col :span="8"><div class="moneycol"><svg-icon icon-class="diamond" class-name='icon-class'/><span>{{userinfo.diamond}}</span></div></el-col>
                <el-col :span="8"><div class="moneycol"><svg-icon icon-class="goldcard" class-name='icon-class'/><span>{{userinfo.goldcard}}</span></div></el-col>
                <el-col :span="8"><div class="moneycol"><svg-icon icon-class="coin" class-name='icon-class'/><span>{{userinfo.coin}}</span></div></el-col>
            </el-row> 
            <el-row>
                <el-col :span="8"><div>绑定代理<span>{{userinfo.bindagent}}</span></div></el-col>
                <el-col :span="16"><div>比赛场大师分<span>{{userinfo.masterscore}}</span></div></el-col> 
            </el-row>
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark">最后登录时间:<span>{{userinfo.registertime}}</span></div></el-col>
            </el-row>
        </div>
    </el-card>
</template>
<script>
import userpre from '@/assets/preimg/user.png'
export default {
  name: 'UserCard',
  data() {
    return {
      userinfo: {
        uid: '暂无查询',
        money: 0,
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
    }
  },
  methods: {
    setUerInfor(userinfo) {
      this.userinfo = userinfo
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
#usercardbox{
   height:100%;
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .el-card__header {
    padding:4px 10px!important;  
  }
  .el-card__body{
    padding:10px;
  }
  .user-avatar {
    float:left;   
    width:48px;
    height:48px;
    border-radius:50%; 
  }
  .info-box{
    float:left;
    vertical-align: top;   
    p {
        padding:0;
        margin:0;
        font-size: 12px;
        line-height: 1.2;
        .userlevel{
         margin-left:5px;
        }  
    }
  }
  .content{
    .moneyrow{
        .icon-class{
            width:20px;
        }
    }
    .el-row{
        margin-bottom:8px;
        font-size:14px;
        line-height:1.4;
    }
  }
}
  
</style>
