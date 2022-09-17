<template>
<div class="header">
  <img :alt="content.entries[0].title" :src="content.entries[0].image"/>
  <div style="margin-left: 3rem">
    <h1 style="margin: 0; font-weight: 400">{{ content.entries[0].title }}</h1>
    <h2 style="margin: 0; font-weight: 900">{{ content.entries[0].subtitle }}</h2>
    <p style="font-weight: 300">{{ content.entries[0].description }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    content: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
}

img {
  width: 3cm;
  height: 3cm;
}
</style>
