<template>
  <div v-once>
    {{ message }}
  </div>

  <button @click="message = 'hello world'">
    update
  </button>
</template>

<script>

export default {
    data() {
      return {
        message: "こんにちは世界"
      }
    },  
}
</script>
