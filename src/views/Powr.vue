<template>
  <div class="work-page m-b-50">
    <div id="divider-background" />
    <div class="h1">Powr</div>
    <div class="detail m-b-30">UI, UX design and user research</div>
    <div class="gallery-flex m-t-10 m-b-10">
      <div class="image">
        <img src="../assets/powr/screen-2.png" alt="pantad design" />
      </div>
      <div class="image-md">
        <img src="../assets/powr/screen-1.png" alt="pantad design" />
      </div>
      <div class="image">
        <img src="../assets/powr/screen-3.png" alt="pantad design" />
      </div>
    </div>
    <div class="work-text">
      <div class="main-text">
        <p>
          The goal of this project was to create an app to motivate students who
          live in dormitories in Sweden to keep track of and lessen their energy
          consumption.
        </p>
        <p>
          The project went through 3 iterations: <b>user interviews</b>,
          <b>wireframing</b>, <b>user observations</b> and lastly a fully
          functional prototype was made in Adobe XD. Initially we conducted
          interviews with students to learn about their energy/power consumption
          and to gauge their current knowledge of their own consumption. Based
          on the data collected we made design decisions on how to educate them
          about the topic and how to potentially lower their consumption.
          However, we also wanted to make the app fun and engaging (as the topic
          to itself was not interesting to many of the users).
        </p>

        <p>
          For this reason we came up with the idea to create a game where a
          students take care of an avatar of their choice. By staying below a
          certain energy consumption threshold, the avatar stays happy and the
          student gains points. The users can also compete in different
          challenges weekly, to keep them interested in the game. The dormitory
          who has the lowest consumption of the week is published on a
          scoreboard on the app. The users also receive tips and tricks in the
          app on how to lower their consumption.
        </p>
        <p>
          After the wireframes where finished we conducted user observations
          where students got to test the app. We designed the interview process,
          recruited users and analysed the data. The results were evaluated and
          the app was redesigned accordingly as a final step.
        </p>
        <p>
          Our final design won best project of the course, which was such a
          happy surprise! :)
        </p>
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
  align-items: center;
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

.gallery-flex .image-small {
  max-width: 100%;
  img {
    max-width: 80px;
    max-height: 100%;

    @include for-phone-only {
      max-width: 80px;
    }
  }
}

.gallery-flex .image-md {
  max-width: 100%;
  img {
    max-width: 260px;
    max-height: 100%;

    @include for-phone-only {
      max-width: 180px;
    }
  }
}

.gallery-flex .image {
  max-width: 100%;
  img {
    max-width: 220px;
    max-height: 100%;

    @include for-phone-only {
      max-width: 180px;
    }
  }
}

.detail {
  font-family: "IBM Plex Mono", monospace;
  font-style: italic;
  font-size: 14px;
}

.main-text {
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