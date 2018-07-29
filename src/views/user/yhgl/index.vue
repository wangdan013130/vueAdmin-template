<template>
  <div class="app-container">
    <component :is="currentRole"></component>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import memberuiDashboard from './memberui/userui'
export default {
  name: 'yhgl',
  components: { memberuiDashboard },
  data() {
    return {
      currentRole: 'memberuiDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'info'
    ])
  },
  created() {
    // console.log(this.roles)
    // this.currentRole = 10
    // this.$store.dispatch('GetInfo')
    if (this.info.adminLevel === 1) {
      this.currentRole = 'memberuiDashboard'
    }/* else if(this.info.adminLevel === 3){
      this.currentRole = 'managerDashboard'
    }else if(this.info.adminLevel === 10){
      this.currentRole = 'adminDashboard'
    } */
  }
}
</script>
