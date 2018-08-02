<template>
    <el-dialog title="赠送货币" :visible.sync="dialogFormVisible" :before-close="closeDia">
        <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item label="代理货币">
                <el-radio-group v-model="money">
                  <el-radio label="1">钻石</el-radio>
                  <el-radio v-if="goldSwitch" label="2">金卡</el-radio>
                </el-radio-group>              
            </el-form-item>
            <el-form-item label="赠送数量">
                <el-input v-model="giftmoney" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="运营备注">
                <el-input v-model="giftnote" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closeDia">取 消</el-button>
            <el-button type="primary" @click="addMoneyYes">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
import { addmemMoneyYes } from '@/api/members'
import { addUserMoney } from '@/api/user'
export default {
  name: 'GiftMoney',
  data() {
    return {
      tit: '',
      labelPosition: 'left',
      money: '1',
      giftmoney: '',
      giftnote: '',
      formVisible: this.initialCounter,
      isMember: true,
      id: ''
    }
  },
  props: {
    dialogFormVisible: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    addMoneyYes() {
      const para = {}
      let url = ''
      if (this.isMember) {
        if (this.money === '1') {
          url = '/api/admin/addMemberMoney' 
        } else {
          url = '/api/admin/addMemberGold'
        } 
        para.mid = parseInt(this.id)
        para.buyNum = parseInt(this.giftmoney)
        para.buyMoney = 0
        para.buyNote = this.giftnote
        para.buyType = 0
        addmemMoneyYes(url, para).then(response => {
          const rtn = response.data
          if (rtn === -10) {
            this.$message({
              message: '您的密码不安全，请修改密码后操作',
              type: 'error'
            })
            return
          }
          if (rtn.er === 2) {
            this.$message({
              message: '余额不足',
              type: 'error'
            })
            return
          }
          if (!rtn) {
            this.$message({
              message: '无响应',
              type: 'error'
            })
            return
          }
          this.$emit('closegiftMoney')
        })
      } else {
        if (this.money === '1') {
          url = '/api/admin/addUserMoney' 
        } else {
          url = '/api/admin/addUserGold'
        }
        para.uid = parseInt(this.id)
        para.buyNum = parseInt(this.giftmoney)
        para.buyMoney = 0
        para.buyNote = this.giftnote
        para.buyType = 0
        addUserMoney(url, para).then(response => {
          const rtn = response.data          
          if (rtn === -10) {
            this.$message({
              message: '您的密码不安全，请修改密码后操作',
              type: 'error'
            })
            this.$emit('closegiftMoney')
            return
          } 
          if (rtn === -6) {
            this.$message({
              message: '没有绑定关系',
              type: 'error'
            })
            this.$emit('closegiftMoney')
            return 
          }
          if (rtn === -2) {
            this.$message({
              message: '余额不足',
              type: 'error'
            })
            this.$emit('closegiftMoney')
            return
          }
          if (rtn.er) {
            this.$message({
              message: '赠送出现错误',
              type: 'error'
            })
            this.$emit('closegiftMoney')
            return
          }
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.$emit('closegiftMoney')
          this.$emit('refreshUI')
        })
      }
    },
    resetForm() {
      this.money = '1'
      this.giftmoney = ''
      this.giftnote = ''
      this.id = ''
    },
    closeDia() {
      this.$emit('closegiftMoney')
    },
    setMid(id, isMember) {
      this.id = id
      this.isMember = isMember
    }
  },
  computed: {
    goldSwitch() {
      return this.$root.$allSwitch.goldynSwitch
    }
  }
}
</script>