<template>
  <div class="app-container">
     <div class="filter-container">
        <el-select size="mini" @change='handleFilter' style="width:140px" class="filter-item" v-model="blockAccount">
          <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key">
          </el-option>
        </el-select>
        <search-bar :searchKey="keys" :searchVal="searchVal" :searchkeys="searchkeyslist" @searchVal="getSearchData"></search-bar>
      </div>
      <el-table class="el-table"
      :data="list" v-loading.body="listLoading" size="mini" element-loading-text="Loading" 
      max-height=600 border fit highlight-current-row
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
        <el-table-column label="姓名" prop='mNick' width="80" align="center">
          <template slot-scope="scope">
            {{scope.row.mNick}}
          </template>
        </el-table-column>
        <el-table-column  class-name="status-col" prop='mAddress' label="地址"  width="80" align="center" :show-overflow-tooltip="true">
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
        <el-table-column align="center" prop="mAddBy" label="推荐人" width="80">
          <template slot-scope="scope">
            <span>{{scope.row.mAddBy}}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" prop="mAddByMid" label="推荐人ID" width="100">
          <template slot-scope="scope">
            <span>{{scope.row.mAddByMid}}</span>
          </template>
        </el-table-column>
        <el-table-column v-if="switches.rebateSwitch" sortable align="center" prop="mAddByTime" label="推荐时间" width="90" :formatter="timetransform">
          <template slot-scope="scope">
            <span>{{scope.row.mAddByTime}}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" prop="byMid" label="客户经理ID" width="100">
          <template slot-scope="scope">
            <span>{{scope.row.byMid}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="byName" label="客户经理" width="80">
          <template slot-scope="scope">
            <span>{{scope.row.byName}}</span>
          </template>
        </el-table-column>
        <el-table-column sortable header-align="left" align="left" prop="mTime" label="注册时间" width="90" :formatter="timetransform">
        </el-table-column>
        <el-table-column sortable align="center" prop="lastBuyDay" label="最后充值时间" width="90">
          <template slot-scope="scope">
            <span>{{scope.row.lastBuyDay}}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="left" prop="mLastSellTime" label="最后售钻时间" width="90" :formatter="timetransform">
        </el-table-column>
        <el-table-column v-if="switches.goldynSwitch" align="center" prop="mGoldLevel" label="金卡权限" width="80">
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
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
     </el-pagination>
  </div>
</template>

<script>
import { getmembers, getmembersCount } from '@/api/members'
import { parseTime } from '@/utils/time'
import SearchBar from '@/components/SearchBar'
const TIMESTAMP = new Date().getTime() + 3500 * 24 * 60 * 60 * 1000
export default {
  name: 'members',
  components: { SearchBar },
  data() {
    return {
      list: [],
      listLoading: true,
      switches: {},
      currentPage: 1,
      pageSizes: [20, 50, 100, 200, 500],
      pageSize: 20,
      total: 0,
      blockAccount: '1',
      searchKey: {},
      sortOptions: [{
        key: '1',
        label: '查看使用账号'
      }, {
        key: '2',
        label: '查看被删除账号'
      }],
      keys: 'mid',
      searchVal: '',
      searchkeyslist: [{
        key: 'mid',
        label: '用户ID'
      }, {
        key: 'lastBuyDay',
        label: '几日未充值'
      }, {
        key: 'mNick',
        label: '微信昵称'
      }, {
        key: 'mName',
        label: '姓名'
      }, {
        key: 'mAddress',
        label: '地址'
      }, {
        key: 'money',
        label: '钻石余额'
      }, {
        key: 'mAddBy',
        label: '推荐人'
      }, {
        key: 'mAddByMid',
        label: '推荐人ID'
      }, {
        key: 'byName',
        label: '客户经理'
      }, {
        key: 'byMid',
        label: '客户经理ID'
      }, {
        key: 'buyTotal',
        label: '本周购买'
      }, {
        key: 'buyReward',
        label: '未领返利'
      }, {
        key: 'mTime',
        label: '注册时间'
      }
      ]
    }
  },
  created() {
    this.fetchData()
    this.getAllcount()
  },
  methods: {
    getswitches() {
      this.switches = this.$root.$allSwitch
    },
    fetchData() {
      this.listLoading = true
      const msg = {}
      msg.limit = this.pageSize
      msg.skip = (this.currentPage - 1) * this.pageSize
      if (parseInt(this.blockAccount) === 2) {
        this.searchKey.banTime = { '$gte': TIMESTAMP }
      } else {
        this.searchKey.banTime = { '$lt': TIMESTAMP }
      }
      msg.searchKey = this.searchKey
      getmembers(msg).then(response => {
        this.list = response.data.rows
        this.listLoading = false
      })
    },
    timetransform(row, column, cellValue) {
      return parseTime(new Date(cellValue).getTime(), '{y}-{m}-{d} {h}:{i}:{s}')
    },
    getAllcount() {
      const para = {}
      if (parseInt(this.blockAccount) === 2) {
        para.banTime = { '$gte': TIMESTAMP }
      } else {
        para.banTime = { '$lt': TIMESTAMP }
      }
      getmembersCount(para).then(response => {
        // console.log(response.data)
        this.total = response.data
      })
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.currentPage = val
      this.fetchData()
    },
    handleFilter() {
      // console.log(this.blockAccount)
      this.currentPage = 1
      // console.log(this.pageSize)
      this.fetchData()
      this.getAllcount()
    },
    getSearchData(para) {
      if (!this.searchKey) {
        this.searchKey = {}
      }
      this.searchKey = para
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.app-container{
  padding:0;
}
.el-table {
  margin: 15px 0 5px;
}
</style>
