<template>
  <div>
      {{ diskon }}  
  </div>


  <input v-model="num1" />
  <input v-model="num2" />

  <button @click="addDiskon">Tambah Diskon</button>
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
  diskon: {
    get(){
      return parseInt(this.num1) + parseInt(this.num2);
    },
     set(value) {
        this.num1 -= value;
        this.num2 -= value;
    }
  }
},
methods: {
  addDiskon() {
    this.diskon = 500;
  } 
}
}
</script>
