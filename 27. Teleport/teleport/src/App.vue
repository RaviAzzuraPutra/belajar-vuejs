<template>
  <h1>
    メインアプリケーション
  </h1>
  <Teleport to="#target-teleport">
    <HelloWorld />
  </Teleport>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
