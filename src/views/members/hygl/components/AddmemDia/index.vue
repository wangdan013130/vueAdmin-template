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
                <address-sel></address-sel>
            <el-form-item label="详细地址">
                 <el-input v-model="form.mAddress" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                 <el-input v-model="form.mAddress" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item v-if="isbindphone" label="手机号">
                <el-input v-model="form.memberBindPhone" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item v-if="goldSwitch" label="代理货币">
                <el-checkbox-group v-model="form.money">
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
export default {
  name: 'AddmemDia',
  components: { AddressSel },
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
        memberBindPhone: '',
        money: []
      },
      memberRules: {
        mNick: [{ required: true, trigger: 'blur', validator: validateContent }],
        mwxId: [{ required: true, trigger: 'blur', validator: validateContent }],
        mName: [{ required: true, trigger: 'blur', validator: validateContent }],
        mAddress: [{ required: true, trigger: 'blur', validator: validateContent }],
        memberBindPhone: [{ trigger: 'blur', validator: validateContent }]
      },
      tit: '',
      labelPosition: 'left'
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
      addmembersYes().then(response => {
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
        this.tit = '添加会员'
      }
      this.tit = '修改会员'
      console.log(this.tit)
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
    }
  }
}
</script>