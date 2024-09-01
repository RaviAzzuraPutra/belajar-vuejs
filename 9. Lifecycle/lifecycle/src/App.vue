<template>
    <div id="lifecycle">
      {{ message }}
    </div>

    <button @click="message = 'LOCALHOST'">更新</button>
    <button @click="message = ''">アンマウント</button>
</template>

<script>

export default {
  data() {
    return {
      message: "VueJs"
    }
  },
  //life cycle hooks
  //beforeCreate
  beforeCreate() {
    console.log("作成前");
  },
  //created
  created() {
    console.log("作成");
    console.log(this.message);
    console.log(document.getElementById("lifecycle"));
  },
  //beforeMount
  beforeMount() {
    console.log("マウント前");
  },
  //mounted
  mounted() {
    console.log("マウント");
    console.log(this.message);
    console.log(document.getElementById("lifecycle"));
  },
  //beforeUpdate
  beforeUpdate() {
    console.log("更新前");
    console.log(document.getElementById("lifecycle").textContent);
  },
  //updated
  updated() {
    console.log("更新");
    console.log(document.getElementById("lifecycle").textContent);
  },
  //beforeUnmount
  beforeUnmount() {
    console.log("アンマウント前");
    console.log(document.getElementById("lifecycle").textContent);
  },
  //unmounted
  unmounted() {
    console.log("アンマウント");
    console.log(document.getElementById("lifecycle").textContent);
  },
}
</script>
