<template>
  <div id="resume">
    <Header :content="header"/>

    <div class="content">
      <div class="side">
        <Block v-for="block in side" v-bind:key="block.id" v-bind:id="block.id" :block="block"/>
      </div>

      <div class="main">
        <Block v-for="block in main" v-bind:key="block.id" v-bind:id="block.id" :block="block"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Blocks/Header.vue'
import Block from '../components/Block.vue'
import resumeContent from "../resume.json";

export default {
  name: "Preview",
  data() {
    return {
      content: resumeContent,
      header: {},
      main: {},
      side: {},
    };
  },
  created: function () {
    this.header = resumeContent.filter(block => block.styling.position == "header")[0];
    this.main = resumeContent.filter(block => block.styling.position == "main");
    this.side = resumeContent.filter(block => block.styling.position == "side");
  },
  components: {
    Block,
    Header
  },
};
</script>

<style lang="scss">
@import '../style.scss';

html,
body,
#resume{
  margin: 0;
  background: #fff;
}

#resume{
  font-family: $mainFont;

  width: 21cm;
  height: 29.7cm;
  padding: 1cm;

  background: white;
  color: $dark;
  /* border: 10px solid $primary; */
}

a {
  color: $secondary;
}

h1,
h2 {
  font-family: $secondaryFont;
  font-weight: 300;
  color: black;
}

/* Block title custom */
h2 span.highlight {
  background-image: linear-gradient(
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0) 0%,
    $light 0,
    $light 50%,
    hsla(0, 0%, 100%, 0) 0
  );
  font-weight: 900;
  padding: 0 0.3rem;
}

/* = = = = = Page layout = = = = = */
.content {
  display: flex;
}

.content {
  .side {
    width: 30%;
    padding-right: 2rem;

    div ul {
      font-size: 90%;
    }
  }
  .main {
    width: 70%;
    padding-left: 2rem;
    border-left: 1px solid $light;
  }
}

/* = = = = = Lists = = = = = */
div ul {
  padding-inline-start: 0;

  li {
    list-style-type: none;
    display: flex;
    flex-direction: column;

    .same-line {
      display: flex;
      justify-content: space-between;
    }

    .title {
      font-weight: 500;
      color: $dark;
    }
    .subtitle {
      font-size: 90%;
      color: $primary;
    }

    .description {
      font-family: $secondaryFont;
      font-size: 84%;
      color: black;
      text-align: justify;
      line-height: 1.4;
    }
  }
}

.main ul {
  :last-child {
    border: none;
  }

  li {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid $light;

    .description {
      margin-top: 0.3rem;
    }
  }
}

.side ul li {
  margin-bottom: 0.5em;
}
</style>
