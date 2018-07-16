<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getAllSwitch } from '@/api/common'

export default {
  name: 'App',
  created: function() {
    this.getswitch()
  },
  data() {
    return {
      allSwitch: {}
    }
  },
  methods: {
    getswitch() {
      getAllSwitch().then(response => {
        this.allSwitch = response.data.switch
      })
    }
  }
}

</script>
