<template>
  <div class="work-page">
    <div class="container">
      <div class="work-text">
        <div class="h1">Brezza</div>
        <div class="detail">Graphic design</div>
        <div class="main-text m-t-20">
          <p>
            I was hired to design a logo for a Italian restaurant in my hometown
            Uppsala.
          </p>
          <p>
            The owner wanted it to represent the vision he had for the
            restaurant. A place with genuine Italian atmosphere with a focus on
            wine, which he personally collects each year in Italy. In addition,
            he wanted the inspiration for the name "a breeze in southern Italy"
            - to be a component in the logo.
          </p>
          <p>The result? See below!</p>
        </div>
      </div>
    </div>
    <div class="gallery">
      <div class="image">
        <img src="../assets/brezza/brezza.gif" alt="brezza design" />
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
.gallery .image img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: 50% 50%;
  margin-bottom: 40px;
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

.work-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  font-family: LibreBaskerville-Regular, sans-serif;
  font-weight: 800;
  font-size: 28px;
  margin-bottom: 4px;
}
.sub-header {
  font-family: IBMPlexMono-Regular, sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 40px;
}
</style>