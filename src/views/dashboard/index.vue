<template>
  <div class="dashboard-container">
  <component :is="currentRole"></component>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import memberDashboard from './memberui'
  // import managerDashboard from './manager'
  // import adminDashboard from './admin'

  export default {
    name: 'dashboard',
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
      this.$store.dispatch('GetInfo')
      if (this.info.adminLevel === 10) {
        this.currentRole = 'memberDashboard'
      }/* else if(this.info.adminLevel === 3){
        this.currentRole = 'managerDashboard'
      }else if(this.info.adminLevel === 10){
        this.currentRole = 'adminDashboard'
      } */
    }
  }
</script>
