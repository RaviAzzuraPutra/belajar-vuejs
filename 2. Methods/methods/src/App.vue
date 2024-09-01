<template>
    <h2>{{ count }}</h2>
    <button @click="count++">プラス</button>
    <button @click="minus">マイナス</button>
    <hr>
    <h1>{{ message }}</h1>
    <button @click="japan">Japan</button>
    <button @click="english">English</button>
</template>

<script>

export default {
  data() {
    return {
      count: 0,
      message : 'Hello Vue.js'
    }
  },
  methods: {
    minus () {
      this.count--
  },
  japan () {
    this.message = 'こんにちは、Vue.js'
  },
  english () {
    this.message = 'Hello Vue.js'
}
}
}
</script>
