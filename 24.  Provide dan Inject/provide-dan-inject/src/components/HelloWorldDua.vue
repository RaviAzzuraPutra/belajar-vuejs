<template>
    <HelloWorldTiga />
</template>

<script>
import HelloWorldTiga from './HelloWorldTiga.vue';
export default {
    components: {
        HelloWorldTiga,
    },
    inject: ['Nama'], // Menambahkan inject
  provide() {
    return {
      Nama: this.Nama, // Meneruskan inject ke komponen berikutnya
    }
  }
}
</script>
