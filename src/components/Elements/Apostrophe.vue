<template>
  <ul>
    <li v-for="entry in block.entries" v-bind:key="entry.title" class="apostrophe">
      <div class="same-line">
        <span class="title">{{ entry.title }}</span>
        <span class="detail">{{ entry.detail }}</span>
      </div>
      <div class="subtitle" v-html="entry.subtitle">
        {{ entry.subtitle }}
      </div>
      <span class="description" v-html="entry.description"></span>
    </li>
  </ul>
</template>

<script>
/**
Apostrophe displays all the content.
A detail is on the top right corner (usually a date).
*/
export default {
  name: 'Apostrophe',
  props: {
    block: Object
  }
}
</script>

<style scoped lang="scss">
@import '../../style.scss';

.detail {
  font-family: $secondaryFont;
  font-size: 70%;
  max-height: 14px;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;

  display: flex;
  align-items: center;

  color: white;
  background: $primary;

  b {
    margin-right: 0.4rem;
  }
}
</style>
