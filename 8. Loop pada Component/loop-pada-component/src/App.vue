<template>
  <div>Ini adalah Parent Component</div>
  <ChildComponent :Text="message"></ChildComponent>
  <ChildComponent v-for="data in todos" :key="data.id" :Text="data.text"></ChildComponent>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';
export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      //learn japanese todos
      todos: [
        { id: 1, text: 'Belajar Hiragana' },
        { id: 2, text: 'Belajar Katakana' },
        { id: 3, text: 'Belajar Kanji' },
        { id: 4, text: 'Belajar Kosakata' },
        { id: 5, text: 'Belajar Kalimat' }
      ],
    }
  }
}
</script>
