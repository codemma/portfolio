<template>
  <div class="about m-b-30">
    <div>
      <div class="m-b-40">
        Hi! My name is Emma Tysk and I am a 5th year master’s student studying
        Human and Computer Interaction at Uppsala University. I excel in
        projects where I can combine my passion for problem solving with design
        thinking.
      </div>
      <p class="m-b-40">
        I have experience working with UI and UX design and I have conducted
        user research through observations, interviews, A/B testing and eye
        tracking.
      </p>
      <p>
        Skilled in Javascript, React and Vue. I also have experience working
        with Java, Node.js and React Native
      </p>
      <p class="m-b-10">Check me out on Github! (if you want to)</p>
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
