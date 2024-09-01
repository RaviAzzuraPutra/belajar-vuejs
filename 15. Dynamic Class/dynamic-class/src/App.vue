<template>
  <div :class="status ? 'success' : 'failed'">STATUS</div>

  <button @click="status = !status">CHANGE STATUS</button>
  <div :class="[bold,greenClass]">TEST</div>
</template>

<script>

export default {
  data() {
    return{
      status: true,
      bold: 'bold',
      greenClass: 'success'
    }
  }
}
</script>

<style>
    .success{
      color: green
    }
    .failed{
      color:crimson
    }
    .bold {
      font-weight: bold
    }
</style>