<template>
  <div class="home tall">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <section class="first-section">
      <div class="l-heading">Hej hej!</div>
      <div class="l-heading">My name is Emma Tysk</div>
    </section>
    <section class="container">
      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?nature"
              alt="brezza design"
            />
          </div>
          <div class="text">Brezza</div>
        </div>
      </div>
      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?art"
              alt="brezza design"
            />
          </div>
          <div class="text">Brezza</div>
        </div>
      </div>
      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img
              src="https://source.unsplash.com/1600x900/?art"
              alt="brezza design"
            />
          </div>
          <div class="text">Brezza</div>
        </div>
      </div>
      <div class="gallery-container">
        <div class="gallery-item">
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
  components: {
    HelloWorld,
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
  grid-auto-rows: 100px 300px;
  grid-gap: 10px;
}
.gallery-item {
  width: 100%;
  height: 100%;
  position: relative;
}

.gallery-item .image {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.gallery-item .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
