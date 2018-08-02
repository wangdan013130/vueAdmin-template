<template>
  <el-tabs v-model="activeName2" @tab-click="handleClick">
    <el-tab-pane label="货币记录" name="moneylog">
      <!-- <moneylog-dia ref="moneyLog"></moneylog-dia> -->
    </el-tab-pane>
    <el-tab-pane label="玩家战绩" name="playerlog">

    </el-tab-pane>
    <el-tab-pane label="活动记录" name="activitylog">

    </el-tab-pane>
  </el-tabs>
</template>
<script>
import MoneylogDia from '../MoneylogDia/index'
export default {
  name: 'UserData',
  data() {
    return {
      activeName2: 'moneylog'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    } 
  }
}
</script>
