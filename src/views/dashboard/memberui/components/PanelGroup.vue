<template>
  <el-row class="panel-group" :gutter="20">
    <el-col :xs="12" :sm="12" :lg="12">
      <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>个人信息</span>
          </div>
          <div class="component-item">
            <pan-thumb width="100px" height="100px" image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191">
              嘉兴乐玩网络科技有限公司
            </pan-thumb>
          </div>
        </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="12">
      <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>代理后台公告</span>
          </div>
          <div class="component-item">
            <pan-thumb width="100px" height="100px" image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191">
             嘉兴乐玩网络科技有限公司
            </pan-thumb>
          </div>
        </el-card>
    </el-col>
  </el-row>
</template>

<script>
import PanThumb from '@/components/PanThumb'
export default {
  components: {
    PanThumb
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
