<template>
  <input v-model="num1" />
  <input v-model="num2" />

  <p>Num1 + Num2</p>
  <div>{{ total}}</div>

  <p>Contoh IF</p>
  <div>{{ totalif}}</div>
</template>

<script>

export default {
  data() {
    return{
      num1: 0,
      num2: 0,
    }
  },
  computed:{
    total () {
      return parseInt(this.num1) + parseInt(this.num2);
    },
    totalif() {
      if (this.num1 > this.num2) {
        return "num1 lebih besar";
      } else if (this.num1 < this.num2) {
        return "num2 lebih besar";  
      }else {
        return "num1 dan num2 sama besar"
      }
    }
  }
}
</script>
