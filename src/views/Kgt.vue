<template>
  <div class="work-page m-b-50">
    <div id="divider-background" />
    <div class="work-text">
      <div class="h1">Vårdkällan</div>
      <div class="detail">App design and Illustrations</div>
      <div class="main-text m-t-20">
        <p>
          I was responsible for the UX and UI design of the app for a healthcare
          company in Uppsala
        </p>
        <p>
          The goal of the app is to make it easier and more flexible for nurses
          and other healthcare professionals to find work at different
          hospitals. In the app you can apply for a job which fit your
          credentials, and you can also report the time you spent working there
          after finishing a job.
        </p>
        <p>
          The project scope was very time limited and therefore I had to produce
          a full design with sketches in only 3 weeks. Below are some selected
          screens and illustrations from the finished design.
        </p>
      </div>
    </div>
    <div class="h3 m-b-30">App design</div>
    <div class="gallery-container">
      <div class="blue-divider">
        <img src="../assets/kgt/divider.svg" alt="kgt design" />
      </div>
      <div class="gallery-flex m-b-50">
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
    </div>
    <div class="h3 m-b-30">Illustrations</div>
    <div class="gallery-2-col">
      <div class="image">
        <img src="../assets/kgt/getApp.svg" alt="kgt  design" />
      </div>
      <div class="h4 text-left">1. Get the app</div>
      <div class="h4 text-right">2. Search and apply for work</div>
      <div class="image">
        <img src="../assets/kgt/chooseWork.svg" alt="kgt  design" />
      </div>
      <div class="image">
        <img src="../assets/kgt/choosePersonell.svg" alt="kgt design" />
      </div>
      <div class="h4 text-left">3. Get selected!</div>
      <div class="h4 text-right">4. Report your time</div>
      <div class="image">
        <img src="../assets/kgt/reportTime.svg" alt="kgt design" />
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
.gallery-flex {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  align-items: center;
  justify-content: center;
}
.gallery-flex > * {
  flex: 0 0 1;
  z-index: 3;
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

.gallery-container {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.blue-divider {
  position: absolute;
  min-width: 100vw;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  @include for-big-desktop-up {
    display: none;
  }
  @include for-phone-only {
    display: none;
  }
}

.text-left {
  text-align: left;
  margin-left: 40px;
}
.text-right {
  text-align: right;
  margin-right: 50px;
}

.gallery-2-col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  max-width: 600px;

  @include for-phone-only {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 150px;
    grid-gap: 20px;

    .h4 {
      display: none;
    }
  }

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
</style>