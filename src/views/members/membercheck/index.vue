<template>
  <div class="app-container">
      <el-table class="el-table"
        :data="list" v-loading.body="listLoading" size="mini" element-loading-text="Loading" 
        max-height=700 border fit highlight-current-row
        :default-sort = "{prop: 'ctime', order: 'descending'}">
        <template v-for="item in column">
          <el-table-column v-if="item.type === 'normal'" align="center" :key="item.field" :prop="item.field" :label="item.title" v-show="item.show">
          </el-table-column>
          <el-table-column v-else-if="item.type === 'time'" align="center" :key="item.field" :prop="item.field" :label="item.title" v-show="item.show">
            <template slot-scope="scope">
              <span>{{scope.row[item.field] | parseTime('{y}-{m}-{d} {h}:{i}:{s}')}}</span>
            </template>
          </el-table-column>
          <el-table-column v-else-if="item.type === 'status'" align="center" :key="item.field" :prop="item.field" :label="item.title" v-show="item.show">
            <template slot-scope="scope">
              <span>{{scope.row[item.field] ? '通过':'拒绝'}}</span>
            </template>
          </el-table-column>
          <el-table-column v-else align="center" :key="item.field" :prop="item.field" :label="item.title" v-show="item.show">
            <template slot-scope="scope">
              <el-dropdown size="mini" type="primary">
                <el-button type="primary" size="mini">
                  操作<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>   
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="pass(scope.row)">同意</el-dropdown-item>
                  <el-dropdown-item @click.native="reject(scope.row)">拒绝</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>
        </template>  
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
import { getQrcodeApply, approveQrcodeApply, refuseQrcodeApply } from '@/api/members'
import { parseTime } from '@/utils/time'
const COLUMNINIT = [
  { field: '_id', title: 'id', width: 0, isshow: false, type: 'normal' },
  { field: 'ctime', title: '申请时间', width: 200, isshow: true, type: 'time' },
  { field: 'phone', title: '申请人手机号', width: 160, isshow: true, type: 'normal' },
  { field: 'wx', title: '微信号', width: 100, isshow: true, type: 'normal' },
  { field: 'nickname', title: '昵称', width: 100, isshow: true, type: 'normal' },
  { field: 'name', title: '姓名', width: 100, isshow: true, type: 'normal' },
  { field: 'address', title: '地址', width: 100, isshow: true, type: 'normal' },
  { field: 'recommandId', title: '推荐人会员ID', width: 150, isshow: true, type: 'normal' },
  { field: 'recommandNickname', title: '推荐人昵称', width: 100, isshow: true, type: 'normal' },
  { field: 'status', title: '审核状态', width: 100, isshow: true, type: 'status' },
  { field: 'op_id', title: '审核人', width: 100, isshow: true, type: 'normal' },
  { field: 'optime', title: '审核时间', width: 200, isshow: true, type: 'time' },
  { field: 'op', title: '操作', width: 200, isshow: true, type: 'ope' }
]
export default {
  name: 'memberCheck',
  data() {
    return {
      list: [],
      listLoading: false,
      column: COLUMNINIT,
      currentPage: 1,
      pageSizes: [20, 50, 100, 200, 500],
      pageSize: 20,
      total: 0
    }
  },
  filters: {
    parseTime
  },
  methods: {
    getList() {
      const para = {}
      para.start = (this.currentPage - 1) * this.pageSize
      para.limit = parseInt(this.pageSize)
      getQrcodeApply(para).then(response => {
        const rtn = response.data
        this.listLoading = false
        if (!rtn.data || rtn.errno) {
          this.list = []
          this.$message.error('获取列表错误')
          return
        }
        if (rtn.data && rtn.errno === 0) {
          this.total = rtn.data.length
          this.list = rtn.data
          return
        }
        this.$message({
          message: '没有记录',
          type: 'success'
        })
        this.list = []
      })
    },
    pass(row) {
      if (row.status === 1) {
        this.$message({
          message: '已处于通过审核状态,不能进行重复操作',
          type: 'error'
        })
        return
      }
      var para = {}
      para.id = row._id
      approveQrcodeApply(para).then(response => {
        const rtn = response.data
        if (rtn.errno === 0) {
          this.$message({
            message: '审核通过',
            type: 'success'
          })
          this.getList()
          return 
        }
        this.$message({
          message: '操作失败',
          type: 'error'
        })
      })
    },
    reject(row) {
      if (row.status === 3) {
        this.$message({
          message: '已处于拒绝结果,不能进行重复操作',
          type: 'error'
        })
        return
      }
      var para = {}
      para.id = row._id
      refuseQrcodeApply(para).then(response => {
        const rtn = response.data
        if (rtn.errno === 0) {
          this.$message({
            message: '已拒绝该申请',
            type: 'success'
          })
          this.getList()
          return 
        }
        this.$message({
          message: '操作失败',
          type: 'error'
        })
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getList()
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.getList()
    })
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.app-container{
  .hidden{
    display: none
  } 
}
</style>
