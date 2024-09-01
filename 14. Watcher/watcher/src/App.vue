<template>
  <h1>{{ message }}</h1>

  <input v-model="message" />
</template>

<script>

export default {
  data() {
    return {
      message: "こんにちは世界"
    }
  },
  watch: {
    message(value) {
      console.log("Perubahan Message Adalah = ", value);
    }
  }
}
</script>
