<template>
  <div class="work-page">
    <div class="container">
      <div class="work-text">
        <div class="header">Brezza</div>
        <div class="sub-header">Logo for a restaurant in Uppsala</div>
        <div class="main-text">
          <p>
            I was asked to design a logo for a Italian restaurant in my hometown
            Uppsala.
          </p>
          <p>
            The owner wanted something to represent the main features of the
            restaurant such as its focus on good Italian wine and the
            inspiration for the name, a breeze in southern Italy
          </p>
          .
        </div>
      </div>
      <div class="gallery">
        <div class="image">
          <img src="../assets/brezza.png" alt="brezza design" />
        </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.gallery .image img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: 50% 50%;
}

.work-text {
  margin-bottom: 20px;
  font-size: 14px;
}

.work-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  font-family: LibreBaskerville-Regular, sans-serif;
  font-weight: 800;
  font-size: 28px;
  margin-bottom: 10px;
}
.sub-header {
  font-family: LibreBaskerville-Italic, sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 40px;
}
</style>