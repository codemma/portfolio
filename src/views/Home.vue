<template>
  <div class="home tall">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <section class="first-section">
      <div class="l-heading">Hej hej!</div>
      <div class="l-heading">Emma Tysk</div>
    </section>
    <section class="container">
      <div class="gallery-container">
        <div
          @mouseenter="mouseOver"
          @mouseleave="mouseLeave"
          class="gallery-item"
        >
          <div class="image">
            <!-- @mouseover="mouseOver" -->
            <img
              src="https://source.unsplash.com/1600x900/?art"
              alt="brezza design"
            />
            <div @mouseover.stop="childMouseOver" class="hover">
              <div class="text">Hover test</div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery-container">
        <div
          @mouseenter="mouseOver"
          @mouseleave="mouseLeave"
          class="gallery-item"
        >
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?art"
              alt="brezza design"
            />
            <div class="hover">
              <div class="text">Hover test</div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery-container">
        <div
          class="gallery-item"
          @mouseenter="mouseOver"
          @mouseleave="mouseLeave"
        >
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?people"
              alt="brezza design"
            />
          </div>
          <div class="text">Brezza</div>
        </div>
      </div>
      <div class="gallery-container">
        <div
          class="gallery-item"
          @mouseenter="mouseOver"
          @mouseleave="mouseLeave"
        >
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?nature"
              alt="brezza design"
            />
          </div>
          <div class="text">Brezza</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HelloWorld,
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
    childMouseOver(event) {
      //event.stopPropagation();
    },
  },
};
</script>
<style lang="scss">
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
  grid-auto-rows: 200px 300px;
  grid-gap: 20px;
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

.gallery-item:hover .hover {
  visibility: visible;
  //transform: translate(10px, 10px);
}
.gallery-item .hover {
  visibility: hidden;
  background-color: pink;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: 0.1s ease-in-out;
  top: 0;
  .text {
    pointer-events: none;
    color: white;
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
