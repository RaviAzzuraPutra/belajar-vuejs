<template>
  <div>
    {{ message }}
  </div>
  <hr>
  <ChildComponent :model-value="message" @update:model-value="message = $event" />
  <ChildComponent v-model="message" />
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'
export default {
    components: {
        ChildComponent
    },
    data() {
      return {
        message: ''
      }
    }
}
</script>
