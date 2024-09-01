<template>
  <HelloWorld>
    <template v-slot:judul>
      <div>The Adventure of the Lost Key</div>
    </template>
    <template v-slot:content>
      <div>Once upon a time, in a small village nestled between rolling hills, there lived a young girl named Lily. Lily was known for her adventurous spirit and her love for exploring the forests and meadows around her home. One day, while wandering through the woods, she stumbled upon a mysterious, old key half-buried in the ground.

            Curious, Lily picked up the key and examined it closely. It was ornate and intricately designed, with strange symbols etched into its surface. Determined to find out what the key unlocked, Lily embarked on a quest to uncover its secrets. She visited the village elder, searched through old books in the library, and even consulted with a local blacksmith who specialized in antique artifacts.

            Her search led her to an ancient, abandoned mansion on the edge of the village. The mansion had been untouched for decades, and the villagers spoke of it only in hushed tones. With a mixture of excitement and trepidation, Lily approached the mansion and found a locked door that seemed to match the key she had found. Holding her breath, she inserted the key into the lock and turned it.

            The door creaked open, revealing a hidden room filled with forgotten treasures and old maps. Among the artifacts was a journal that belonged to a long-lost explorer who had once lived in the mansion. The journal detailed the explorer's travels and discoveries, including tales of hidden treasures and ancient mysteries.

            Lily's discovery was celebrated by the villagers, and she was hailed as a local hero. The mansion was restored, and the hidden room became a museum showcasing the explorer's legacy. Lily continued her adventures, inspired by the stories she had uncovered and eager to explore more of the world's secrets.
      </div>
    </template>
    <template v-slot:footer>
      <div>And so, Lily's journey not only revealed the mysteries of the old mansion but also inspired a new generation of adventurers in her village. Her tale became a legend, reminding everyone that curiosity and courage can unlock the most wondrous secrets. The lost key was no longer just an object of mystery but a symbol of the endless possibilities that lie in the pursuit of discovery.</div>
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
