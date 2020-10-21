<template>
  <div class="about m-b-40">
    <div>
      <p class="m-b-40">
        Hi! My name is Emma Tysk. I am a multifaceted developer studying for a
        master’s degree in Information Technology at Uppsala University,
        graduating in the spring of 2021.
      </p>
      <p class="m-b-40">
        I've experience in prototyping, UX design, conducting user interviews,
        usability testing, wireframing and illustrations.
      </p>
      <p>Skilled in Javascript, Vue, React, React Native, Typescript.</p>
      <p class="m-b-10">Check me out on Github :</p>
      <a href="https://github.com/codemma">
        <img src="../assets/icons/github.svg" alt="github" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";
.about {
  max-width: 400px;
  margin: auto;
  font-family: Avenir, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  @include for-phone-only {
    margin: 0 2em;
  }
}
a {
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
