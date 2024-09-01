<template>
  <!-- <h1>
    {{ name }}
  </h1> -->
  <pre>
    {{ $data }}
  </pre>
  <button @click="onPress">
    click
  </button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import basicMixins from './mixins/basic';
import data from './mixins/data';

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      name: 'ラヴィ  アズラ  プトラ'
    }
  },
  mixins: [basicMixins, data],
}
</script>
