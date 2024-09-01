<template>
    <div class="container mt-3">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              SIMPLE TO-DO LIST APP 
            </h4>
            <div class="row mt-3">
              <div class="col-10">
                <input v-model="todo" type="text" class="form-control" @keyup.enter="add">
              </div>
              <div class="col-2">
                <button class="btn btn-dark" @click="add"><i class="bi bi-plus-lg me-2"></i>Tambah</button>
              </div>
            </div>
            <list :todos="todos" @deleteTODO="deleteTODO" @done="done"/>
            <small>Total: {{ totalTODO }}</small>
            <small class="ms-4" disabled><i class="bi bi-check-circle-fill text-success"></i> is Done</small>
          </div>
        </div>
    </div>
</template>

<script>
import list from './components/list.vue'

export default {
    data() {
      return {
        todo: "",
        todos: []
      }
    },
    mounted() {
      this.todos = JSON.parse(localStorage.getItem('todos'))
    },
    methods: {
      add() {
        this.todos.unshift({
          activity: this.todo,
          isDone: false
        }),
        this.todo = "";
        this.saveToLocalStorage();
      },
      deleteTODO(todoIndex) {
        this.todos = this.todos.filter((item, index) => {
          if (index != todoIndex) {
            return item
          }
        });
        this.saveToLocalStorage();
      },
      done(todoIndex) {
        this.todos = this.todos.filter((item, index) => {
          if (index == todoIndex) {
            item.isDone = true
          }
          return item
        });
        this.saveToLocalStorage();
      },
      saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    },
    components: {
      list
    },
    computed: {
      totalTODO() {
        return this.todos.length;
      }
    }
}
</script>
