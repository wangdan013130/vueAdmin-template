<template>
  <div class="app-container">
     <div class="filter-container">
       <el-row>
          <el-col :xs="18" :sm="18" :md="10" :lg="6" :xl="6">
              <search-bar  :searchkeys="getSelOption" @searchVal="getSearchData"></search-bar>
          </el-col> 
          <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="3">
            <el-select size="mini" @change="handleFilter" style="width:140px" class="filter-item" v-model="blockAccount">
              <el-option @click.native="handleFilter" v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key">
              </el-option>
            </el-select>
          </el-col>
          <el-col :md="10" :lg="15" :xl="15">
            <el-button class="filter-item" size="mini" @click="handleCreate" type="primary" icon="el-icon-edit">
              添加会员
            </el-button>
          </el-col>
       </el-row>
      </div>
      <addmem-dia :dialogFormVisible="isOpenaddMemDia" @refreshUI="refreshUI" @closeAddDia="closeAddDia" ref="addmethod"></addmem-dia>
      <moneylog-dia :moneylogVisble="isOpenMoneylogDia" @closeMonlogDia="closeMonlogDia" ref="moneyLog" class="stylewid"></moneylog-dia>
      <user-dia :playerdiaVisble="isOpenPlayerDia" @closeUserlogDia="closeUserlogDia" ref="playerDia"></user-dia>
      <el-table class="el-table"
      :data="list" v-loading.body="listLoading" size="mini" element-loading-text="Loading" 
      max-height=700 border fit highlight-current-row
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
        <el-table-column prop="mMoneyLevel" align="center" label="钻石权限" :filters="[{ text: '已关闭', value: 0 }, { text: '已开启', value: 1 }]" :filter-method="filterDia" width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.mMoneyLevel === 1 ? 'primary' : 'warning'">{{scope.row.mMoneyLevel ? "已开启" : "已关闭"}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="mGoldLevel" v-if="switches.goldynSwitch" align="center" label="金卡权限" :filters="[{ text: '已关闭', value: 0 }, { text: '已开启', value: 1 }]" :filter-method="filterGold" width="100">
          <template slot-scope="scope">      
            <el-tag :type="scope.row.mGoldLevel === 1 ? 'primary' : 'warning'">{{scope.row.mGoldLevel ? "已开启" : "已关闭"}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="gameids" label="gameids" width="100">
          <template slot-scope="scope">
            <span>{{scope.row.gameids}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="150">
          <template slot-scope="scope">
            <el-dropdown size="mini" type="primary">
              <el-button type="primary" size="mini">
                操作／查询<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>   
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="setDia(scope.row)" v-if="scope.row.mMoneyLevel">关闭钻石权限</el-dropdown-item>
                <el-dropdown-item @click.native="setDia(scope.row)" v-else>开启钻石权限</el-dropdown-item>
                <el-dropdown-item @click.native="setGold(scope.row)" v-if="switches.goldynSwitch && scope.row.mGoldLevel" divided>关闭金卡权限</el-dropdown-item>
                <el-dropdown-item @click.native="setGold(scope.row)" v-else-if="switches.goldynSwitch && (!scope.row.mGoldLevel)" divided>开启金卡权限</el-dropdown-item>
                <el-dropdown-item @click.native="searchMoneyLog(scope.row)" divided>货币记录</el-dropdown-item>
                <el-dropdown-item @click.native="searchUsercus(scope.row)" divided>玩家消耗明细</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
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
import { getmembers, getmembersCount, setmemMoney, setmemGold } from '@/api/members'
import { parseTime } from '@/utils/time'
import SearchBar from '@/components/SearchBar'
import AddmemDia from '../components/AddmemDia'
import MoneylogDia from '../components/MoneylogDia'
import UserDia from '../components/UserDia'
const TIMESTAMP = new Date().getTime() + 3500 * 24 * 60 * 60 * 1000
export default {
  name: 'members',
  components: { SearchBar, AddmemDia, MoneylogDia, UserDia },
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
      filterFlag: 0,
      searchKey: {},
      addMemFlag: true,
      isOpenaddMemDia: false,
      isOpenMoneylogDia: false,
      isOpenPlayerDia: false,
      sortOptions: [{
        key: '1',
        label: '查看使用账号'
      }, {
        key: '2',
        label: '查看被删除账号'
      }],
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
    this.refreshUI()
  },
  methods: {
    refreshUI() {
      this.fetchData()
      this.getAllcount()
    },
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
        if (this.filterFlag === 1) {
          this.total = this.list.length
        }
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
      // console.log('mmmmmmm')
      this.filterFlag = 0
      this.currentPage = 1
      // console.log(this.pageSize)
      this.searchKey = {}
      if (parseInt(this.blockAccount) === 2) {
        this.searchKey.banTime = { '$gte': TIMESTAMP }
      } else {
        this.searchKey.banTime = { '$lt': TIMESTAMP }
      }
      this.fetchData()
      this.getAllcount()
    },
    getSearchData(...para) {
      // console.log(para[0])
      // console.log(para[1])
      this.filterFlag = 1
      if (para[0] === 'mid' || para[0] === 'lastBuyDay' || para[0] === 'money' || para[0] === 'mAddByMid' || para[0] === 'byMid' || para[0] === 'buyTotal' || para[0] === 'buyReward') {
        para[1] = parseInt(para[1])
      }
      const msg = {}
      if (para[0] === 'mGoldLevel' || para[0] === 'mMoneyLevel') {
        msg[para[0]] = 1
      } else {
        msg[para[0]] = para[1]
      }
      if (!this.searchKey) {
        this.searchKey = {}
      }
      this.searchKey = msg
      this.currentPage = 1
      this.fetchData()
    },
    handleCreate() {
      this.addMemFlag = true
      this.isOpenaddMemDia = true
      this.$refs['addmethod'].setTit(1)
      this.$nextTick(() => {
        this.$refs['addmethod'].resetForm()
      })
    },
    closeAddDia() {
      this.isOpenaddMemDia = false
      this.addMemFlag = false
      this.$nextTick(() => {
        this.$refs['addmethod'].resetForm()
      })
    },
    setDia(row) {
      var para = {}
      para.mid = row.mid
      if (row.mMoneyLevel === 1) {
        para.mMoneyLevel = 0
      } else {
        para.mMoneyLevel = 1
      }
      setmemMoney(para).then(response => {
        // console.log(response.data)
        if (!response.data.errno) {
          this.$message({
            message: '权限修改成功',
            type: 'success'
          })
          this.refreshUI()
        } else {
          this.$message.error(response.data.errmsg)
        }
      })
    },
    setGold(row) {
      var para = {}
      para.mid = row.mid
      if (row.mGoldLevel === 1) {
        para.mGoldLevel = 0
      } else {
        para.mGoldLevel = 1
      }
      setmemGold(para).then(response => {
        // console.log(response.data)
        if (!response.data.errno) {
          this.$message({
            message: '权限修改成功',
            type: 'success'
          })
          this.refreshUI()
        } else {
          this.$message.error(response.data.errmsg)
        }
      })
    },
    searchMoneyLog(row) {
      this.isOpenMoneylogDia = true
      // console.log(row.mid)
      this.$refs['moneyLog'].setMid(row.mid)
    },
    closeMonlogDia() {
      this.isOpenMoneylogDia = false
      this.$nextTick(() => {
        this.$refs['moneyLog'].resetForm()
      })
    },
    searchUsercus(row) {
      this.isOpenPlayerDia = true
      this.$refs['playerDia'].setMid(row.mid)
    },
    closeUserlogDia() {
      this.isOpenPlayerDia = false
      this.$nextTick(() => {
        this.$refs['playerDia'].resetForm()
      })
    },
    filterDia(value, row, column) {
      return row['mMoneyLevel'] === value
    },
    filterGold(value, row, column) {
      return row['mGoldLevel'] === value
    }
  },
  computed: {
    getSelOption: function() {
      if (!this.$root.$allSwitch.goldynSwitch) {
        this.searchkeyslist.splice(-1, 1)
      }
      return this.searchkeyslist
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.app-container{
  padding:0;
  .stylewid{
    width:100%
  }
}
.el-table {
  margin: 15px 0 5px;
}
.el-row{
  margin-bottom: 5px;
}
</style>
