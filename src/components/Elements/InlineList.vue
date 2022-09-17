<template>
  <ul class="inline-list">
    <li v-for="entry in block.entries" v-bind:key="entry.title" v-html="entry.title"></li>
  </ul>
</template>

<script>
/**
InlineList is an element that only shows the title of its entries.
They are displayed one after the other, on the same line.
Good for Links.
*/
export default {
  name: 'InlineList',
  props: {
    block: Object
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

<style lang="scss" scoped>
/*@import '../../style.scss';*/

.inline-list {
  display: flex;
  font-size: 80%;
  li {
    margin-right: 0.5rem;
    :last-child {
      margin-right: none;
    }
  }
  /* TODO this is a bit too custom */
  /* this could appear if title is not displayed ? */
  border-top: 1px solid #eaeaea;
  padding-top: 1rem;
}

</style>
