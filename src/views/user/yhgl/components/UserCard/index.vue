<template>
    <el-card shadow="hover" id="usercardbox">
        <div slot="header" class="clearfix header">
            <img class="user-avatar" :src="image">
            <div class="info-box">
                <p :uid="uid">100001</p>
                <p><span :nickname="nickname">哈哈哈哈</span><svg-icon icon-class="userlevel" class-name='userlevel'/><span :userlevel="userlevel">10</span></p>
                <p>注册时间:<span :registertime="registertime">2018-01-01 10:10:10</span></p>       
            </div>     
        </div>
        <div class="content">
            <el-row class="moneyrow">
                <el-col :span="8"><div class="moneycol"><svg-icon icon-class="diamond" class-name='icon-class'/><span :diamond="diamond">1,000</span></div></el-col>
                <el-col :span="8"><div class="moneycol"><svg-icon icon-class="goldcard" class-name='icon-class'/><span :goldcard="goldcard">1,000</span></div></el-col>
                <el-col :span="8"><div class="moneycol"><svg-icon icon-class="coin" class-name='icon-class'/><span :coin="coin">1,000</span></div></el-col>
            </el-row> 
            <el-row>
                <el-col :span="8"><div>绑定代理<span :bindagent="bindagent">111111</span></div></el-col>
                <el-col :span="16"><div>比赛场大师分<span :masterscore="masterscore">10,000</span></div></el-col> 
            </el-row>
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark">最后登录时间:<span :lastlogintime="lastlogintime">2018-01-01 10:10:10</span></div></el-col>
            </el-row>
        </div>
    </el-card>
</template>
<script>
import userpre from '@/assets/preimg/user.png'
export default {
  name: 'UserCard',
  props: {
    image: {
      type: String,
      default: userpre
    },
    uid: {
      type: Number,
      required: true,
      default: 0
    },
    nickname: {
      type: String,
      default: '暂无查询'
    },
    userlevel: {
      type: Number,
      default: 0  
    },
    bindagent: {
      type: Number,
      default: 0    
    },
    lastlogintime: {
      type: String,
      default: '2018-01-01 00:00:00' 
    },
    registertime: {
      type: String,
      default: '2018-01-01 00:00:00'  
    },
    masterscore: {
      type: Number,
      default: 0  
    },
    diamond: {
      type: Number,
      default: 0  
    },
    goldcard: {
      type: Number,
      default: 0  
    },
    coin: {
      type: Number,
      default: 0  
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
