<template>
    <ol>
        <li v-for="data in todos" :key="data.id">
            {{ data.text }}
        </li>
    </ol>
</template>

<script>

export default {
  data() {
    return{
      todos: [
        { id: 1, text: 'Learn Vue Js', isCompleted: false },
        { id: 2, text: 'Learn Node Js', isCompleted: false },
        { id: 3, text: 'Learn Laravel', isCompleted: false },
        { id: 4, text: 'Learn Tailwind CSS', isCompleted: false },
        { id: 5, text: 'Skripsi', isCompleted: false }
      ]
    }
  }
}
</script>
