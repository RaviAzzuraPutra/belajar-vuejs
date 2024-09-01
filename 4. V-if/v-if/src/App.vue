<template>
  <div id="app">
    <h1 v-if="status">Vue.js</h1>
    <button @click="toggle">Toggle</button>

    <div v-if="status">true</div>
    <div v-else>false</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      status: false
    }
  },
  methods: {
    toggle() {
      this.status = !this.status
    }
  }
}
</script>
