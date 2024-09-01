<template>
  <div class="tab">
      <button :class="['tab-button', {active: currentTab === tab}]" v-for="tab in tabs" :key="tab" @click="currentTab = tab">
        {{ tab }}
      </button>

      <keep-alive>
        <component :is="currentTabComponent" />
      </keep-alive>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Post from "./components/posts.vue";
import About from "./components/about.vue";

export default {
  components: {
    Home,
    Post,
    About
  },
  data() {
    return {
      currentTab: "Home",
      tabs: ["Home", "Post", "About"]
    }
  },
  computed: {
    currentTabComponent() {
      return this.currentTab.toLowerCase();
    }
  }
}
</script>
