<template>
    <el-dialog :title=tit :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="memberRules" :label-position="labelPosition" label-width="80px">
            <el-form-item label="微信昵称">
                <el-input v-model="form.mNick" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="微信号">
                <el-input v-model="form.mwxId" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.mName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="省市区">
                <address-sel @setBaseAddr="setBaseAddr"></address-sel>
            </el-form-item>    
            <el-form-item label="详细地址">
                 <el-input v-model="address" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item v-if="isbindphone" label="手机号">
                <tel-sel></tel-sel>
            </el-form-item>
            <el-form-item v-if="goldSwitch" label="代理货币">
                <el-checkbox-group v-model="money">
                    <el-checkbox label="金币" name="money"></el-checkbox>
                    <el-checkbox label="金卡" name="money"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addMemYes">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
import { addmembersYes } from '@/api/members'
import { isvalidContent } from '@/utils/validate'
import AddressSel from '@/components/AddressSel'
import TelSel from '@/components/TelSel'
export default {
  name: 'AddmemDia',
  components: { AddressSel, TelSel },
  data() {
    const validateContent = (rule, value, callback) => {
      if (!isvalidContent(value)) {
        callback(new Error('请填写完整会员信息'))
      } else {
        callback()
      }
    }
    return {
      form: {
        mNick: '',
        mwxId: '',
        mName: '',
        mAddress: '',
        mPhone: ''
      },
      memberRules: {
        mNick: [{ required: true, trigger: 'blur', validator: validateContent }],
        mwxId: [{ required: true, trigger: 'blur', validator: validateContent }],
        mName: [{ required: true, trigger: 'blur', validator: validateContent }],
        mPhone: [{ trigger: 'blur', validator: validateContent }]
      },
      tit: '',
      labelPosition: 'left',
      baseAddr: '',
      address: '',
      addFlag: 0,
      money: []
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
    addMemYes() {
      this.form.mAddress = this.baseAddr + this.address
      const para = {}
      let url = ''
      if (this.addFlag) {
        url = '/api/admin/addMember'
        para.mid = null
      } else {
        url = '/api/admin/saveMember'
        para.mid = []
      }
      addmembersYes(url, para).then(response => {
        // this.total = response.data
        // this.$emit('refreshUI')
      })
    },
    resetForm() {
      this.form = {
        mNick: '',
        mwxId: '',
        mName: '',
        mAddress: '',
        memberBindPhone: '',
        money: []
      }
    },
    setTit(para) {
      if (para) {
        this.addFlag = 1
        this.tit = '添加会员'
      } else {
        this.addFlag = 0
        this.tit = '修改会员'
      }
    },
    setBaseAddr(...para) {
      // console.log('aaa')
      // console.log(para)
      this.baseAddr = para[0].split(',').join()
    }
  },
  computed: {
    isbindphone() {
      // const gameid = window.location.href.split('.')
      if (this.$GAMETYPE['git'] != null && this.$GAMETYPE['git']['memberBindPhone']) {
        return true
      }
      return false
    },
    goldSwitch() {
      return this.$root.$allSwitch.goldynSwitch
    },
    getMaddress() {
      this.form.mAddress = this.baseAddr + this.address
      return this.form.mAddress
    }
  }
}
</script>