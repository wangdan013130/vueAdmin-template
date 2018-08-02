<template>
  <div class="app-container">
     <div class="filter-container">
       <el-form :inline="true" :model="form" :label-position="labelPosition">
           <el-form-item>
              <el-select size="mini" v-model="form.ranktype" placeholder="选择排行类型">
                <el-option @click.native="getRankType" v-for="item in rankTypeArr" :key="item.value" :value="item.value" :label="item.label" ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="日期">
                 <el-date-picker
                  size="mini"
                  v-model="form.time"
                  type="daterange"
                  align="right"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions2">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="mini" @click="rankData">点击查询</el-button>
            </el-form-item>
        </el-form>
      </div>
      <el-table class="el-table"
        :data="list" v-loading.body="listLoading" size="mini" element-loading-text="Loading" 
        max-height=700 border fit highlight-current-row
        :default-sort = "{prop: '_id', order: 'ascending'}">
        <el-table-column v-for="item in column" :key="item.field" align="center" :prop="item.field" :label="item.title" width="item.width">
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
import { getRankList } from '@/api/members'
import { parseTime } from '@/utils/time'
const URLS = {
  '5': '/api/newMember/getMemberBuy',
  '1': '/api/currency/getMemberSell',
  '6': '/api/newMember/getMemberBuy',
  '7': '/api/currency/getMemberSell'
}
export default {
  name: 'rank',
  data() {
    return {
      labelPosition: 'left',
      allData: [],
      list: [],
      listLoading: true,
      url: URLS['5'],
      column: [
        { field: '_id', title: '排名', width: 100 },
        { field: 'memberId', title: '会员ID', width: 100 },
        { field: 'nickname', title: '会员姓名', width: 100 },
        { field: 'buyNum', title: '充值数量_钻', width: 100 },
        { field: 'buyMoney', title: '充值金额_元', width: 100 },
        { field: 'buyCount', title: '充值次数_次', width: 100 }
      ],
      currentPage: 1,
      pageSizes: [50, 100, 200, 500, 1000],
      pageSize: 50,
      total: 0,
      form: {
        ranktype: '5',
        time: [new Date().getTime(), new Date().getTime()]
      },
      rankTypeArr: [
        { value: '5', label: '钻石充值榜' },
        { value: '1', label: '钻石销售榜' }/* ,
        { value: '6', label: '金卡充值榜' },
        { value: '7', label: '金卡销售榜' } */
      ],
      pickerOptions2: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 24 * 60 * 60 * 1000
        },
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      columns5: [
        { field: '_id', title: '排名', width: 100 },
        { field: 'memberId', title: '会员ID', width: 100 },
        { field: 'nickname', title: '会员姓名', width: 100 },
        { field: 'buyNum', title: '充值数量_钻', width: 100 },
        { field: 'buyMoney', title: '充值金额_元', width: 100 },
        { field: 'buyCount', title: '充值次数_次', width: 100 }
      ],
      columns1: [
        { field: '_id', title: '排名', width: 100 },
        { field: 'mid', title: '会员ID', width: 100 },
        { field: 'nickname', title: '会员姓名', width: 100 },
        { field: 'sellNum', title: '销售数量_钻', width: 100 },
        { field: 'sellCount', title: '销售次数_次', width: 100 },
        { field: 'memberNum', title: '卖给会员人数', width: 100 },
        { field: 'playerNum', title: '卖给玩家人数', width: 100 }
      ],
      columns6: [
        { field: '_id', title: '排名', width: 100 },
        { field: 'memberId', title: '会员ID', width: 100 },
        { field: 'nickname', title: '会员姓名', width: 100 },
        { field: 'buyNum', title: '充值数量_金卡', width: 100 },
        { field: 'buyMoney', title: '充值金额_元', width: 100 },
        { field: 'buyCount', title: '充值次数_次', width: 100 }
      ],
      columns7: [
        { field: '_id', title: '排名', width: 100 },
        { field: 'mid', title: '会员ID', width: 100 },
        { field: 'nickname', title: '会员姓名', width: 100 },
        { field: 'sellNum', title: '销售数量_钻', width: 100 },
        { field: 'sellCount', title: '销售次数_次', width: 100 },
        { field: 'memberNum', title: '卖给会员人数', width: 100 },
        { field: 'playerNum', title: '卖给玩家人数', width: 100 }
      ]
    }
  },
  methods: {
    getRankType() {
      const type = this.form.ranktype
      const columntit = 'columns' + type
      this.column = this[columntit]
      this.url = URLS[type]
      this.rankData()
    },
    rankData() {
      const para = {}
      para.start = parseTime(this.form.time[0], '{y}-{m}-{d}')
      para.end = parseTime(this.form.time[1], '{y}-{m}-{d}')
      if (this.form.time[1] - this.form.time[0] > 31 * 24 * 60 * 60 * 1000) {
        this.$message({
          message: '最大查询31天数据',
          type: 'error'
        })
        return   
      }
      if (this.form.ranktype === '7' || this.form.ranktype === '6') {
        para.ProductType = 4
      }
      const url = this.url
      getRankList(url, para).then(response => {
        const rtn = response.data
        this.listLoading = false
        if (!rtn.rows || rtn.errno) {
          this.list = []
          this.$message.error(rtn.errmsg)
          return
        }
        if (rtn.rows && rtn.total) {
          this.allData = rtn.rows
          this.total = rtn.total
          this.loadData()
          return
        }
        this.$message({
          message: '没有记录',
          type: 'success'
        })
        this.list = []
      })
    },
    loadData() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = (this.currentPage * this.pageSize > this.allData.length ? this.allData.length : this.currentPage * this.pageSize)
      this.list = this.allData.slice(start, end)
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.loadData()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.currentPage = val
      this.loadData()
    }
  },
  created() {
    this.rankData()
  }
}
</script>
