<template>
    <el-card shadow="hover" id="usercardbox">
        <div slot="header" class="clearfix header">
            <img class="user-avatar" :src="image">
            <div class="info-box">
                <p>100001</p>
                <p>哈哈哈哈<svg-icon icon-class="userlevel" class-name='userlevel'/>10</p>
                <p>注册时间:2018-01-01 10:10:10</p>        
            </div>      
        </div>
        <div class="content">
            <el-row class="moneyrow">
                <el-col :span="8"><div class="moneycol"><svg-icon icon-class="diamond" class-name='icon-class'/>1,000</div></el-col>
                <el-col :span="8"><div class="moneycol"><svg-icon icon-class="goldcard" class-name='icon-class'/>10,000</div></el-col>
                <el-col :span="8"><div class="moneycol"><svg-icon icon-class="coin" class-name='icon-class'/>1,000</div></el-col>
            </el-row> 
            <el-row>
                <el-col :span="8"><div class="">绑定代理111111</div></el-col>
                <el-col :span="8"><div class="">比赛场大师分10,000</div></el-col> 
            </el-row>
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark">最后登录时间:2018-01-01 10:10:10</div></el-col>
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
      required: true,
      default: userpre
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
