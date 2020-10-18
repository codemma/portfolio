<template>
  <div class="home tall">
    <!--   <section class="first-section">
      <div class="l-heading">Emma Tysk</div>
    </section> -->
    <section class="container">
      <div class="gallery-container">
        <div
          @mouseenter="mouseOver"
          @mouseleave="mouseLeave"
          class="gallery-item"
        >
          <router-link to="/Brezza" class="image">
            <!-- @mouseover="mouseOver" -->
            <img src="../../public/img/brezza.png" alt="brezza design" />
            <div class="hover">
              <div class="text">Brezza Logo design</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="gallery-container">
        <div
          class="gallery-item"
          @mouseenter="mouseOver"
          @mouseleave="mouseLeave"
        >
          <router-link to="/Kgt" class="image">
            <img src="../../public/img/kgt-preview.png" alt="Vårdkällan" />

            <div class="hover">
              <div class="text">
                <p>Vårdkällan</p>
                <p>App design</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="gallery-container">
        <div
          @mouseenter="mouseOver"
          @mouseleave="mouseLeave"
          class="gallery-item"
        >
          <div class="image">
            <img src="../../public/img/powr.png" alt="power app design" />
            <div class="hover">
              <div class="text">App design</div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery-container">
        <router-link
          to="/Pantad"
          class="gallery-item"
          @mouseenter="mouseOver"
          @mouseleave="mouseLeave"
        >
          <div class="image">
            <img
              src="../../public/img/pantad-preview.png"
              alt="Togather app design"
            />
          </div>
          <div class="hover">
            <div class="text">App design - Pantad</div>
          </div>
        </router-link>
      </div>
      <div class="gallery-container">
        <div
          class="gallery-item"
          @mouseenter="mouseOver"
          @mouseleave="mouseLeave"
        >
          <div class="image">
            <img
              src="../../public/img/togather-preview.png"
              alt="Togather app design"
            />
          </div>
          <div class="hover">
            <div class="text">App design</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    mouseLeave(event) {
      console.log("mouseleave", event.target.classList);
      event.target.className += " transition-out";
    },
    mouseOver(event) {
      console.log("mouseover", event.target.classList);
      event.target.classList.remove("transition-out");
      this.hover = true;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../styles/_mixins.scss";
.home {
  text-align: center;
  width: 100%;
}
.tall {
  min-height: calc(100vh - 30px);
  width: 100%;
}
.container {
  margin: 0 6em;
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 260px;
  grid-gap: 60px;

  @include for-phone-only {
    grid-template-columns: 1fr;
    grid-auto-rows: 240px;
    margin: 0 3em;
    grid-gap: 20px;
  }
}
.gallery-item {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.gallery-item .image {
  width: 100%;
  height: 100%;
  // overflow: hidden;
}
.gallery-item .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  cursor: pointer;
}
.transition-out .image img {
  -webkit-transform: translateZ(0);
  animation: leaves 0.8s ease-in;
}

@keyframes leaves {
  0% {
    opacity: 10%;
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
  100% {
    opacity: 100%;
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

.h-2 {
  grid-row: span 2;
}

.gallery-item:hover .hover {
  visibility: visible;
  //transform: translate(10px, 10px);
}

.gallery-item .hover {
  visibility: hidden;
  background-color: #f79bf7;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: 0.1s ease-in-out;
  text-align: left;
  top: 0;
  .text {
    margin: 20px;
    font-family: Garamond-Bold, Helvetica, Arial, sans-serif;
    pointer-events: none;
    font-size: 24px;
    color: black;
    font-weight: black;
  }
}
.first-section {
  text-align: left;
  margin: auto;
  padding: 6em;
}
.l-heading {
  text-align: left;
  font-size: 60px;
  font-family: Garamond-Bold, Helvetica, Arial, sans-serif;
}
</style>
