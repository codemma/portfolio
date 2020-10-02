<template>
  <div class="home tall">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <section class="first-section">
      <div class="l-heading">Hej hej!</div>
      <div class="l-heading">My name is Emma Tysk</div>
    </section>
    <section class="container"></section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss">
.home {
  padding: 6em 8em;
}
.first-section {
  text-align: left;
  margin: auto;
}
.tall {
  min-height: calc(100vh - 30px);
}
.l-heading {
  text-align: left;
  font-size: 60px;
  font-family: Garamond-Bold, Helvetica, Arial, sans-serif;
}
</style>
