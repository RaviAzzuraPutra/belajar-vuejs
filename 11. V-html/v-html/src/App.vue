<template>
    <h1 v-html="Message"></h1>
</template>

<script>

export default {
  data() {
    return {
      Message: '<span style="color:fuchsia"> こんにちは、Vue.jsです。</span>',
  }
}
}
</script>
