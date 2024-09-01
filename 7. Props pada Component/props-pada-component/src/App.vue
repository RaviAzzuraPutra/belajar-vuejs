<template>
  <div>
    <ChildComponent Text="Ini Adalah Props"></ChildComponent>
    <ChildComponent :Text="message"></ChildComponent>
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      //japanese message
      message: "こんにちは、Vue!",
    }
  }
}
</script>
