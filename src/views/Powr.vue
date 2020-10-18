<template>
  <div class="work-page m-b-50">
    <div id="divider-background" />
    <div class="work-text">
      <div class="h1">Powr</div>
      <div class="h4"><i>App design</i></div>
      <div class="main-text m-t-20">
        <p>
          I was responsible for the UX and UI design of the app Pantad for a
          university project at Uppsala University
        </p>
        <p>
          The goal of the project was to create an application to motivate
          students who live in student corridors in Sweden to lessen their
          energy consumption.
        </p>
        <p>
          We came up with the idea to create a game where a student takes care
          of an avatar of their choice. By staying below a certain energy
          consumption treshhold, the avatar stays happy and the student gains
          points. The users can also compete in different challenges weekly, to
          keep them interested in the game. The corridor who has the lowest
          consumption of the week is published on a scoreboard on the app. The
          users also receive tips and tricks in the app on how to lower their
          consumption.
        </p>
      </div>
    </div>
    <div class="gallery-flex m-b-20">
      <div class="image span-row m-b-20">
        <img src="../assets/powr/screen-1.png" alt="brezza design" />
      </div>
      <div class="image m-b-20">
        <img src="../assets/powr/screen-2.png" alt="pantad design" />
      </div>
      <div class="image m-b-20">
        <img src="../assets/powr/screen-3.png" alt="pantad design" />
      </div>
      <div class="image m-b-20">
        <img src="../assets/powr/screen-4.png" alt="pantad design" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brezza",
  props: {},
};
</script>
<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";
.work-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
}
.span-row {
  min-width: 100%;
}
.gallery-flex {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  align-items: center;
  justify-content: center;
}
.gallery-flex > * {
  flex: 0 0 1;
}

.gallery-flex .image {
  max-width: 100%;
  img {
    max-width: 240px;
    max-height: 100%;

    @include for-phone-only {
      max-width: 180px;
    }
  }
}

.work-text {
  margin: 18px;
  font-size: 14px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bold {
  font-weight: bold;
}
</style>