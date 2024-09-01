<template>
  <h1>{{ message }}</h1>

  <h3>{{ nomor }}</h3>
</template>

<script>
export default {
  props: {
    message: String,
    nomor: {
      type: Number,
      default: 0
    }
  }
}
</script>
