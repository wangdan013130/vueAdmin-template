<template>
  <div class="app-container">
    <component :is="currentRole"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import memberDashboard from './memberui/memberui'
export default {
  name: 'hygl',
  components: { memberDashboard },
  data() {
    return {
      currentRole: 'memberDashboard'
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
      this.currentRole = 'memberDashboard'
    }/* else if(this.info.adminLevel === 3){
      this.currentRole = 'managerDashboard'
    }else if(this.info.adminLevel === 10){
      this.currentRole = 'adminDashboard'
    } */
  }
}
</script>
