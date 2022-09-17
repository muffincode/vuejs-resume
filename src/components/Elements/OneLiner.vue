<template>
  <ul>
    <li v-for="entry in block.entries" v-bind:key="entry.title">
      <b v-html="entry.title" v-bind:style="titleCss"></b>
      <span class="description" v-html="entry.description" v-bind:style="descriptionCss"></span>
    </li>
  </ul>
</template>

<script>
/**
OneLiner is an element with only a bold title
followed by a short description on the same line.
Usually used in sidebars for Languages
*/
export default {
  name: 'OneLiner',
  props: {
    block: Object,
  },
  data() {
    return {
      elementCss: {},
      titleCss: {},
      descriptionCss: {}
    }
  },
  created: function () {
    this.elementCss = this.block.styling.customElementCss
    this.titleCss = this.elementCss.titleCss
    this.descriptionCss = this.elementCss.descriptionCss
  }
}
</script>

<style scoped>
/*@import '../../style.scss';*/
li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
</style>
