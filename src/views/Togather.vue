<template>
  <div class="work-page m-b-50">
    <div id="divider-background" />
    <div class="work-text">
      <div class="h1">Togather</div>
      <div class="h4"><i>App design - Social computing</i></div>
      <div class="main-text m-t-20">
        <p></p>
      </div>
    </div>
    <div class="gallery-flex m-b-20">
      <div class="image span-row m-b-20">
        <img src="../assets/togather/screen-1.png" alt="brezza design" />
      </div>
      <div class="image m-b-20">
        <img src="../assets/togather/screen-2.png" alt="pantad design" />
      </div>
      <div class="image m-b-20">
        <img src="../assets/togather/screen-3.png" alt="pantad design" />
      </div>
      <div class="image m-b-20">
        <img src="../assets/togather/screen-4.png" alt="pantad design" />
      </div>
      <div class="image m-b-20">
        <img src="../assets/togather/screen-5.png" alt="pantad design" />
      </div>
      <div class="image m-b-20">
        <img src="../assets/togather/screen-6.png" alt="pantad design" />
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
  font-family: Avenir, sans-serif;
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
}
.bold {
  font-weight: bold;
}
</style>