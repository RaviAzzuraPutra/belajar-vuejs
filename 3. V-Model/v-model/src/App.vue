<template>
  <div>{{ message }}</div>

  <input v-model="message" />
</template>

<script>

export default {
  data() {
    return {
      message: 'こんにちは、Vue.js!'
    }
  }
}
</script>
