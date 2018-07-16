<template>
    <el-table 
    :data="list" v-loading.body="listLoading" size="mini" element-loading-text="Loading" 
    height="600" border fit highlight-current-row
    :default-sort = "{prop: 'mTime', order: 'descending'}">
    <el-table-column fixed align="center" prop='index' label='序号' width="80">
        <template slot-scope="scope">
          {{scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column fixed sortable align="center" prop='mid' label='会员ID' width="100">
        <template slot-scope="scope">
          {{scope.row.mid}}
        </template>
      </el-table-column>
      <el-table-column  prop='mNick' label="微信昵称" width="80">
        <template slot-scope="scope">
          {{scope.row.mNick}}
        </template>
      </el-table-column><el-table-column sortable align="center" prop='mwxId' label='微信号' width="100">
        <template slot-scope="scope">
          {{scope.row.mwxId}}
        </template>
      </el-table-column>
      <el-table-column label="姓名" prop='mNick' width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.mNick}}
        </template>
      </el-table-column>
      <el-table-column  class-name="status-col" prop='mAddress' label="地址"  width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.mAddress}}
        </template>
      </el-table-column>
      <el-table-column sortable align="center" prop="money" label="钻石余额" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.money}}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="switches.goldynSwitch" sortable align="center" prop="gold" label="金卡数量" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.gold}}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="switches.rebateBaseOneSwitch" sortable align="center" prop="buyTotal" label="本周购买" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.buyTotal}}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="switches.rebateBaseOneSwitch" sortable align="center" prop="buyReward" label="未领返利" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.buyReward}}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="switches.rebateSwitch" sortable align="center" prop="rebateTotal" label="本期购买-元" width="140">
        <template slot-scope="scope">
          <span>{{scope.row.rebateTotal}}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="switches.rebateSwitch" sortable align="center" prop="rebateReward" label="未领返利" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.rebateReward}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="mAddBy" label="推荐人" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.mAddBy}}</span>
        </template>
      </el-table-column>
      <el-table-column sortable align="center" prop="mAddByMid" label="推荐人ID" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.mAddByMid}}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="switches.rebateSwitch" sortable align="center" prop="mAddByTime" label="推荐时间" width="140">
        <template slot-scope="scope">
          <span>{{scope.row.mAddByTime}}</span>
        </template>
      </el-table-column>
      <el-table-column sortable align="center" prop="byMid" label="客户经理ID" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.byMid}}</span>
        </template>
      </el-table-column>
      <el-table-column sortable align="center" prop="mTime" label="注册时间" width="120" formatter:timetransform>
        <template slot-scope="scope">
          <span>{{scope.row.mTime}}</span>
        </template>
      </el-table-column>
      <el-table-column sortable align="center" prop="lastBuyDay" label="最后充值时间" width="140">
        <template slot-scope="scope">
          <span>{{scope.row.lastBuyDay}}</span>
        </template>
      </el-table-column>
      <el-table-column sortable align="center" prop="mLastSellTime" label="最后售钻时间" width="140">
        <template slot-scope="scope">
          <span>{{scope.row.mLastSellTime}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="byName" label="客户经理" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.byName}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="mGoldLevel" label="金卡权限" width="100">
        <template slot-scope="scope">      
          <span>{{scope.row.mGoldLevel}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="gameids" label="gameids" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.gameids}}</span>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
import { getmembers } from '@/api/members'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      switches: {}
    }
  },
  created() {
    // console.log(this.$root.$allSwitch)
    this.fetchData()
  },
  methods: {
    getswitches() {
      this.switches = this.$root.$allSwitch
    },
    fetchData() {
      this.listLoading = true
      const timestamp = new Date().getTime() + 3500 * 24 * 60 * 60 * 1000
      const msg = {}
      const searchKey = {}
      msg.limit = 50
      msg.skip = 0
      searchKey.banTime = { '$lt': timestamp }
      msg.searchKey = searchKey
      getmembers(msg).then(response => {
        this.list = response.data.rows
        this.listLoading = false
      })
    },
    timetransform(row, column) {
      console.log(new Date(row.mTime).getTime())
      return new Date(row.mTime).getTime()
    }
  }
}
</script>
