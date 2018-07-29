<template>
  <div class="app-container">
     <div class="filter-container">
       <el-form :inline="true" :model="form" :label-position="labelPosition">
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
            <el-form-item v-if="blockshow">
                <el-button type="primary" size="mini" @click="memberTjCheck">会员积分统计查询</el-button>
            </el-form-item>
            <el-form-item label="会员ID">
              <el-input size="mini" v-model="form.mid"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="mini" @click="memberBonusCheck">个人积分统计查询</el-button>
            </el-form-item>
            <el-form-item v-if="blockshow">
                <el-button type="primary" size="mini" @click="memberBonusDetail">个人积分明细查询</el-button>
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
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getPersonBonus } from '@/api/members'
import { parseintTime } from '@/utils/time'
const COLUMNINIT = [
  { field: 'date', title: '日期', width: 120 },
  { field: 'userCount', title: '活跃人数', width: 100 },
  { field: 'gain', title: '获得积分', width: 100 },
  { field: 'consume', title: '消耗积分', width: 100 },
  { field: 'surplus', title: '积分总量', width: 100 }
]
export default {
  name: 'bonusCheck',
  data() {
    return {
      blockshow: false,
      labelPosition: 'left',
      list: [],
      listLoading: false,
      column: COLUMNINIT,
      form: {
        mid: '',
        time: [new Date().getTime(), new Date().getTime()]
      },
      pickerOptions2: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  methods: {
    memberTjCheck() {
      console.log('memberTjCheck')
    },
    memberBonusCheck() {
      const para = {}
      para.mid = parseInt(this.form.mid)
      if (this.form.time[1] - this.form.time[0] > 7 * 24 * 60 * 60 * 1000) {
        this.$message({
          message: '最大查询7天数据',
          type: 'error'
        })
        return 
      }
      const std = parseintTime(this.form.time[0])
      const end = parseintTime(this.form.time[1])
      para.startDate = parseInt(String(std.y) + std.m + std.d)
      para.endDate = parseInt(String(end.y) + end.m + end.d)
      getPersonBonus(para).then(response => {
        const rtn = response.data
        this.listLoading = false
        if (!rtn.datas || rtn.errno) {
          this.list = []
          this.$message.error(rtn.errmsg)
          return
        }
        if (rtn.datas && rtn.errno === 0) {
          this.allData = rtn.rows
          this.total = rtn.total
          this.list = rtn.datas
          return
        }
        this.$message({
          message: '没有记录',
          type: 'success'
        })
        this.list = []
      })
    },
    memberBonusDetail() {
      console.log('memberBonusDetail')
    } 
  },
  computed: {
    ...mapGetters([
      'info'
    ])
  },
  created() {
    if (this.info.adminLevel === 3 || this.info.adminLevel === 10) {
      this.blockshow = true
      this.memberTjCheck()
      return
    }
  }
}
</script>
