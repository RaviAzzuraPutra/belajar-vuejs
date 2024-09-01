<template>
    <HelloWorldSatu />
</template>

<script>
import HelloWorldSatu from './components/HelloWorldSatu.vue';


export default {
  components: {
    HelloWorldSatu,
  },
  data() {
    return {
      nama: "ラヴィ  アズラ  プトラ",
    }
  },
  provide() {
    return {
      Nama: this.nama,
    }
  }
}
</script>
