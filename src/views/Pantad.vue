<template>
  <div class="work-page m-b-50">
    <div id="divider-background" />
    <div class="work-text">
      <div class="h1">Pantad</div>
      <div class="detail">App design and implementation</div>
      <div class="main-text m-t-20">
        <p>
          I was responsible for the UX and UI design of the app Pantad for a
          project at Uppsala University.
        </p>
        <p>
          The idea behind the app is to increase recycling by letting people
          give their cans and bottles to others to recycle. The incentive to
          recycle for others in Sweden is simple: you get money from recycling!
          So this app could example be used by students, or anyone who is in
          need of a bit of extra cash.
        </p>
        <p>
          In the app users can see how much they have recycled, and also how
          much money a reycling "mission" would get them.
        </p>
      </div>
    </div>
    <div class="gallery-flex m-b-20">
      <div class="image span-row m-b-20">
        <img src="../assets/pantad/screen-1.png" alt="brezza design" />
      </div>
      <div class="image m-b-20">
        <img src="../assets/pantad/screen-2.png" alt="pantad design" />
      </div>
      <div class="image m-b-20">
        <img src="../assets/pantad/screen-3.png" alt="pantad design" />
      </div>
      <div class="image m-b-20">
        <img src="../assets/pantad/screen-5.png" alt="pantad design" />
      </div>
      <div class="image m-b-20">
        <img src="../assets/pantad/screen-4.png" alt="pantad design" />
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
  font-family: Avenir, sans-serif;
  .detail {
    font-family: "IBM Plex Mono", monospace;
    font-style: italic;
  }
}
.bold {
  font-weight: bold;
}
</style>