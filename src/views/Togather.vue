<template>
  <div class="work-page m-b-50">
    <div id="divider-background" />
    <div class="work-text">
      <div class="h1">Togather</div>
      <div class="detail">UI, UX design and user research</div>
      <div class="main-text m-t-20">
        <p>
          This app design is the result of a project in the course Social
          computing which I attended at University of Melbourne. We were given
          the task to build a social system of any kind which supports social
          activities and interactions. We chose to design the app -
          <b>Togather </b>- with the the purpose of connecting people with
          similar interests, or people who are just seeking new friends.
        </p>
        <p>
          If you want to read about the entire design process and the user
          research, download the report below! :)
        </p>
        <a :href="`${publicPath}togather.pdf`" download="Togather_report.pdf"
          ><b>Togather - Report (PDF)</b></a
        >

        <p>
          The project went through 4 design iterations: wireframing,
          prototyping, a functional prototype which was tested with users and
          lastly a final prototype. The first functional prototype was tested
          with users obervations where they were asked to perform tasks on the
          app, to gauge if there were any usability issues. Further qualitative
          data was gathered through user interviews about their opinion of the
          social functionalities and the safety the app. Would they, for
          example, feel safe meeting strangers through the app? We designed the
          interview process, recruited users and analysed the data. The results
          were evaluated and the app was redesigned accordingly as a final step.
        </p>
        <p>
          In Togather, users can create and attend events which are visible in a
          list and on a map on the front page. The events are recommended to
          them based on their interest, and each event has a chat group attached
          to it. The purpose of the group chat is to allow people attending the
          event to make plans, share images or make it a recurring event.
        </p>
        <p>
          The app was purposely designed for strangers to be able to meet. For
          this reason it was very important to include some accountability
          features into the app - to make it possible for users to determine the
          reliability of others. For this reason we added a reputation system to
          the app, which means active users gain points and badges by hosting
          and attending events. Furthermore, users can also report each other
          for indecent behaviour - which consequently leads to losing reputation
          - to make people accountable for their actions on and off the
          platform.
        </p>
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
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
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

  a {
    color: hotpink;
    text-decoration: none;
    &:active {
      color: black;
    }
  }
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
  max-width: 500px;
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