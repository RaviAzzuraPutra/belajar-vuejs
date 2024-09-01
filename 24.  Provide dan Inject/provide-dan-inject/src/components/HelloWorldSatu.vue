<template>
  <HellLoWorldDua />
</template>

<script>
import HelloWorldDua from './HelloWorldDua.vue';
export default {
    components: {
        HelloWorldDua,
    },
     inject: ['Nama'], // Menambahkan inject
  provide() {
    return {
      Nama: this.Nama, // Meneruskan inject ke komponen berikutnya
    }
  }
}
</script>
