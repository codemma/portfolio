<template>
  <div class="home tall">
    <section class="container">
      <div class="gallery-container" v-for="work in works" :key="work.title">
        <div
          @mouseenter="mouseOver"
          @mouseleave="mouseLeave"
          class="gallery-item"
        >
          <router-link :to="'/' + work.title" class="image">
            <img :src="work.icon" alt="brezza design" />
            <div class="hover">
              <div class="hover-text">
                <p class="title">{{ work.title }}</p>
                <p class="subtitle">{{ work.hover }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      works: [
        {
          title: "Kgt",
          hover: "App design for a healthcare company",
          icon: require("@/assets/kgt/preview.png"),
        },
        {
          title: "Powr",
          hover: "An app designed to lower students energy consumption",
          icon: require("@/assets/powr/preview.png"),
        },
        {
          title: "Brezza",
          hover: "Logo for italian restaurant",
          icon: require("@/assets/brezza/brezza.gif"),
        },
        {
          title: "Pantad",
          icon: require("@/assets/pantad/preview.png"),
          hover: "An app with the purpose of increasing recycling",
        },
        {
          title: "Togather",
          hover:
            "An app with the purpose of connecting people with similar interests ",
          icon: require("@/assets/togather/preview.png"),
        },
      ],
    };
  },
  methods: {
    mouseLeave(event) {
      event.target.className += " transition-out";
    },
    mouseOver(event) {
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
}
.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  justify-content: center;
}
.container > * {
  flex: 0 0 1;
}
.gallery-container {
  flex: 0 0 260px;
  margin: 20px;
}

.gallery-item {
  height: 260px;
  width: 100%;
  position: relative;
  overflow: hidden;
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
  animation: leaves 0.4s ease-in;
}

@keyframes leaves {
  0% {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

.gallery-item:hover .hover {
  visibility: visible;
}

.hover-text {
  margin: 22px;
  font-family: "EB Garamond", Arial, sans-serif;

  pointer-events: none;
  font-size: 25px;
  color: black;

  .title {
    font-weight: 600;
  }

  .subtitle {
    font-family: "IBM Plex Mono", monospace;
    font-size: 14px;
  }
}

.gallery-item .hover {
  visibility: hidden;
  background-color: #ffcdff;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: 0.1s ease-in-out;
  text-align: left;
  top: 0;
}
</style>
