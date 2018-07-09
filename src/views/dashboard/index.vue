<template>
  <div class="dashboard-container">
  <component :is="currentRole"></component>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import memberDashboard from './memberui'

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
        'roles'
      ])
    },
    created() {
      // console.log(this.roles)
      // this.currentRole = 10
      if (this.roles[0] === 10) {
        this.currentRole = 'memberDashboard'
      }
    }
  }
</script>
