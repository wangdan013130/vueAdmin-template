<template>
   <div>
      <el-form :inline="true" :model="form" :label-position="labelPosition">
          <el-form-item label="货币类型">
              <el-select v-model="form.productType" size="mini" placeholder="货币类型">
                <el-option v-for="item in pdtoptions" :key="item.key" :label="item.label" :value="item.key">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="流向/消费类型">
            <el-cascader
              :options="options"
              v-model="form.selectedOptions"
              size="mini"
            ></el-cascader>
          </el-form-item>  
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
              <el-button type="primary" size="mini" @click="searchMoneyLog">查询</el-button>
          </el-form-item>
      </el-form>
      <el-table
        size="mini"
        :data="tableData"
        height="250"
        border>
        <el-table-column
          prop="buyTime"
          label="时间"
          width="140">
        </el-table-column>
        <el-table-column
          prop="uid"
          label="用户ID"
          width="100">
        </el-table-column>
        <el-table-column
          prop="productType"
          label="货币类型"
          width="100">
        </el-table-column>
        <el-table-column
          prop="direction"
          label="流向"
          width="100">
        </el-table-column>
        <el-table-column
          prop="buyType"
          label="流通类型"
          width="100">
        </el-table-column>
        <el-table-column
          prop="payType"
          label="流通渠道"
          width="100">
        </el-table-column>
        <el-table-column
          prop="buyNum"
          label="数量"
          width="100">
        </el-table-column>
        <el-table-column
          prop="buyMoney"
          label="金额"
          width="100">
        </el-table-column>
        <el-table-column
          prop="memberMoney"
          label="剩余库存"
          width="100">
        </el-table-column>
        <el-table-column
          prop="byMid"
          label="操作ID"
          width="100">
        </el-table-column>
          <el-table-column
          prop="buyNote"
          label="运营备注"
          width="100"
          :show-overflow-tooltip="true">
        </el-table-column>
      </el-table>
    </div>
</template>
<script>
import { getMoneylog } from '@/api/user'
import { parseTime } from '@/utils/time'
export default {
  name: 'MoneylogDia',
  data() {
    return {
      form: {
        uid: 0,
        productType: 0,
        time: [new Date().setTime(new Date().getTime() - 3600 * 1000 * 24 * 7), new Date().getTime()],
        selectedOptions: [0, 0, 0]
      },  
      tableData: [],
      pdtoptions: [{
        key: 0,
        label: '全部'
      }, {
        key: 1,
        label: '钻石'
      }, {
        key: 2,
        label: '金币券'
      }, {
        key: 3,
        label: '金币'
      }, {
        key: 4,
        label: '金卡'
      }],
      options: [
        {
          value: 0,
          label: '全部',
          children: [
            {
              value: 0,
              label: '全部'
            },
            {
              value: 1,
              label: '充值'
            },
            {
              value: 2,
              label: '赠送'
            },
            {
              value: 3,
              label: '消耗'
            }
          ]
        },
        {
          value: 1,
          label: '获取',
          children: [
            {
              value: 0,
              label: '全部'
            },
            {
              value: 1,
              label: '充值'
            },
            {
              value: 2,
              label: '赠送'
            }
          ]
        },
        {
          value: 2,
          label: '流失',
          children: [
            {
              value: 0,
              label: '全部'
            },
            {
              value: 1,
              label: '消耗'
            }
          ]
        }
      ],
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
  methods: {
    searchMoneyLog() {
      const para = {}
      para.productType = this.form.productType
      para.direction = this.form.selectedOptions[0]
      para.buyType = this.form.selectedOptions[1]
      para.startTime = parseTime(this.form.time[0], '{y}-{m}-{d}')
      para.endTime = parseTime(this.form.time[1], '{y}-{m}-{d}')
      para.uid = this.form.uid
      getMoneylog(para).then(response => {
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
      this.form = {
        productType: 0,
        time: [new Date().setTime(new Date().getTime() - 3600 * 1000 * 24 * 7), new Date().getTime()],
        selectedOptions: [0, 0, 0]
      }
      this.tableData = []
    },
    setMid(uid) {
      // console.log(mid)
      this.form.uid = uid
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scope>
.stylewid>div{
  width:90%;
}
</style>