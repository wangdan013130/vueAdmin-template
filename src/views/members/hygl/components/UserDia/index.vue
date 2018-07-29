<template>
    <el-dialog title="玩家消耗明细" :visible.sync="playerdiaVisble" :before-close="closeDia">
        <el-form :inline="true" :model="form" :label-position="labelPosition">
            <el-form-item label="日期">
                 <el-date-picker
                  size="mini"
                  v-model="form.time"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions2">
                </el-date-picker>
            </el-form-item>
             <el-form-item>
                 <el-button type="primary" size="mini" @click="searchUserLog">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table
          size="mini"
          :data="tableData"
          height="250"
          border>
          <el-table-column
            prop="userID"
            label="玩家ID"
            width="100">
          </el-table-column>
          <el-table-column
            prop="useDiaNum"
            label="消耗钻石"
            width="100">
          </el-table-column>
          <el-table-column
            prop="buyDiaNum"
            label="购买钻石"
            width="100">
          </el-table-column>
        </el-table>
    </el-dialog>
</template>
<script>
import { getUserlog } from '@/api/members'
import { parseTime } from '@/utils/time'
export default {
  name: 'UserDia',
  data() {
    return {
      mid: 0,
      form: {
        time: [new Date().setTime(new Date().getTime() - 3600 * 1000 * 24 * 7), new Date().getTime()]
      },   
      labelPosition: 'left',
      tableData: [],
      pickerOptions2: {
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
  props: {
    playerdiaVisble: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    searchUserLog() {
      const para = {}
      para.mid = this.form.mid
      para.std = parseTime(this.form.time[0], '{y}-{m}-{d}')
      para.edd = parseTime(this.form.time[1], '{y}-{m}-{d}')
      para._strday = this.form.time[1]
      para._endday = this.form.time[1]
      console.log(para)
      getUserlog(para).then(response => {
        const rtn = response.data
        if (!rtn.rows || rtn.errno) {
          this.tableData = []
          this.$message.error(rtn.errmsg)
          return
        }
        if (rtn.total) {
          this.tableData = response.data
          return
        } 
        this.$message({
          message: '没有记录',
          type: 'success'
        })
        this.tableData = []
      })
    },
    resetForm() {
      this.mid = 0
      this.form = {
        time: [new Date().setTime(new Date().getTime() - 3600 * 1000 * 24 * 7), new Date().getTime()]
      }
      this.tableData = []
    },
    closeDia() {
      this.$emit('closeUserlogDia')
    },
    setMid(mid) {
      this.form.mid = mid
    }
  }
}
</script>