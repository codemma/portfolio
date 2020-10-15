<template>
  <div class="work-page">
    <div id="divider-background" />
    <div class="work-text">
      <div class="h1">Vårdkällan</div>
      <div class="h4"><i>App design and Illustrations</i></div>
      <div class="main-text mt-l">
        <p>
          I was responsible for the design of the app for a healthcare company
          in Uppsala
        </p>
        <p>Lorem ipsum</p>
      </div>
    </div>
    <div class="h3 mb-l">App design</div>
    <div class="gallery-3-row mb-l">
      <div class="image">
        <img src="../assets/kgt/screen-1.png" alt="kgt design" />
      </div>
      <div class="image">
        <img src="../assets/kgt/screen-2.png" alt="kgt design" />
      </div>
      <div class="image">
        <img src="../assets/kgt/screen-3.png" alt="kgt design" />
      </div>
    </div>
    <div class="h3 mb-l">Illustrations</div>
    <div class="gallery-2-row">
      <div class="image">
        <img src="../assets/kgt/getApp.png" alt="kgt  design" />
      </div>
      <div class="h4 text-left bold">1. Get the app</div>
      <div class="h4 text-right bold">2. Search and apply for work</div>
      <div class="image">
        <img src="../assets/kgt/chooseWork.png" alt="kgt  design" />
      </div>
      <div class="image">
        <img src="../assets/kgt/choosePersonell.png" alt="kgt design" />
      </div>
      <div class="h4 text-left bold">3. Get selected!</div>
      <div class="h4 text-right bold">4. Report your time</div>
      <div class="image">
        <img src="../assets/kgt/reportTime.png" alt="kgt design" />
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
  z-index: 3;
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
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
  top: 18vh;
}
.gallery-3-row .image {
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
.mt-l {
  margin-top: 50px;
}

.text-left {
  text-align: left;
  margin-left: 50px;
}
.text-right {
  text-align: right;
  margin-right: 50px;
}

.gallery-3-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 460px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.gallery-2-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  max-width: 800px;

  .image {
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    align-self: center;
    max-width: 100%;
    max-height: 100%;
  }
}

.h1 {
  font-family: LibreBaskerville-Regular, sans-serif;
  font-weight: 800;
  font-size: 28px;
}
.h2 {
  font-family: LibreBaskerville-Regular, sans-serif;
  font-weight: 800;
  font-size: 22px;
}
.h3 {
  font-family: LibreBaskerville-Regular, sans-serif;
  font-weight: 600;
  font-size: 18px;
}
.h4 {
  font-family: LibreBaskerville-Regular, sans-serif;
  font-weight: 500;
  font-size: 14px;
}

.bold {
  font-weight: bold;
}
</style>