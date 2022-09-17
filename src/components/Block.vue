<template>
  <div class="block">
    <!-- Block title with custom style -->
    <h2 :style="titleCss">
      <span class="highlight">{{ block.title }}</span>
    </h2>

    <!-- Block description -->
    <p style="font-size: 80%" v-html="block.description"></p>

    <!-- Block entries -->
    <Duoline v-if="block.styling.blockType == 'duoline'" :block="block"/>
    <OneLiner v-if="block.styling.blockType == 'oneliner'" :block="block"/>
    <InlineList v-if="block.styling.blockType == 'inline-list'" :block="block"/>
    <Apostrophe v-if="block.styling.blockType == 'apostrophe'" :block="block"/>
  </div>
</template>

<script>
import InlineList from './Elements/InlineList.vue'
import Duoline from './Elements/Duoline.vue'
import OneLiner from './Elements/OneLiner.vue'
import Apostrophe from './Elements/Apostrophe.vue'

export default {
  name: 'Block',
  props: {
    block: Object
  },
  data() {
    return {
      blockCss: {},
      titleCss: {},
      descriptionCss: {}
    }
  },
  created: function () {
    this.blockCss = this.block.styling.customBlockCss
    this.titleCss = this.blockCss.titleCss
    this.descriptionCss = this.blockCss.descriptionCss
  },
  components: {
    Apostrophe,
    InlineList,
    Duoline,
    OneLiner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
