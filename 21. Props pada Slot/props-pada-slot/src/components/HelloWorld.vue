<template>
  <h1>Title</h1>
  <slot name="title" :judul="title"/>
  <h1>Content</h1>
  <slot name="content" :content="content"/>
  <h1>Footer</h1>
  <slot name="footer" :footer="footer"/>
</template>

<script>
export default {
    data() {
      return {
        title: '失われた鍵の冒険',
        content: "昔々、緑の丘に囲まれた小さな村に、リリーという若い女の子が住んでいました",
        footer: "こうして、リリーの冒険は古い邸宅の謎を明らかにしただけでなく、村の新しい世代の冒険者たちにインスピレーションを与えました"
      }
    },
}
</script>
