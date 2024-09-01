<template>
  <h1>{{ message }}</h1>
  
  <span :title="message">תהיה עצמך ולעולם אל תיכנע</span>
</template>

<script>

export default {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  }
}
</script>
