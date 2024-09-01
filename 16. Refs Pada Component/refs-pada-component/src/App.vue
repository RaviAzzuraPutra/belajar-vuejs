<template>
    <refs ref="refs" @child-click="onPress">

    </refs>

    <button @click="ClickSaya">Button Dari Parent</button>
</template>

<script>
import refs from './components/refs.vue'

export default {
  components: {
    refs
  },
  methods: {
    onPress(value) {
      console.log(value);
    },
    ClickSaya() {
      this.$refs.refs.onClick();
    }
  }
}
</script>
