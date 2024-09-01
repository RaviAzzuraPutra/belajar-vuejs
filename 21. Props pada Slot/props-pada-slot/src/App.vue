<template>
  <HelloWorld>
    //bisa destructuring object
      <template v-slot:title="{judul}">
        <div>
          Judul = {{ judul }}
        </div>
      </template>
      //bisa props
      <template v-slot:content="props">
        <div>
          Content : {{ props.content }}
        </div>
      </template>
      <template v-slot:footer="footer">
        <div>
          Footer : {{ footer.footer }}
        </div>
      </template>
  </HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
