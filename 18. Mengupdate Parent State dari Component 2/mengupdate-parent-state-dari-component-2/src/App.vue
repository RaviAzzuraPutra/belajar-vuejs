<template>
  <h1>{{ message }}</h1>
  <hr>
  <hello v-model="message"/>
</template>

<script>
import hello from './components/HelloWorld.vue'

export default {
  components: {
    hello
  },
  data() {
    return {
      message: ""
    }
  }  
}
</script>
