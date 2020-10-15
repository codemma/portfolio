<template>
  <div class="work-page">
    <div id="divider-background" />
    <div class="work-text">
      <div class="h1">Vårdkällan</div>
      <div class="h4">App design and Illustrations</div>
      <div class="main-text">
        <p>
          I was responsible for the design of the app for a healthcare company
          in Uppsala
        </p>
        <p>Lorem ipsum</p>
      </div>
    </div>
    <div class="h3 mb-l">App design</div>
    <div class="gallery">
      <div class="image">
        <img src="../assets/kgt/screen-1.png" alt="kgt  design" />
      </div>
      <div class="image">
        <img src="../assets/kgt/screen-2.png" alt="kgt  design" />
      </div>
      <div class="image">
        <img src="../assets/kgt/screen-3.png" alt="kgt design" />
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
.work-page {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.work-text {
  margin: 18px;
  font-size: 14px;
  max-width: 400px;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#divider-background {
  background-image: url("../assets/kgt/divider.png");
  background-size: cover;
  //background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9;
  top: 10%;
}
.gallery .image {
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
  z-index: 10;
}

.mb-sm {
  margin-bottom: 16px;
}
.mb-l {
  margin-bottom: 50px;
}
.mb-s {
  margin-bottom: 10px;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 460px;
}

.h1 {
  font-family: LibreBaskerville-Regular, sans-serif;
  font-weight: 800;
  font-size: 28px;
  margin-bottom: 4px;
}
.h3 {
  font-family: LibreBaskerville-Regular, sans-serif;
  font-weight: 600;
  font-size: 18px;
}
.h4 {
  font-family: LibreBaskerville-Italic, sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 40px;
}
</style>