<template>
  <div class="work-page">
    <div class="container">
      <div class="work-text">
        <div class="header">Brezza</div>
        <div class="sub-header">Graphic design</div>
        <div class="main-text">
          <p>
            I was hired to design a logo for a Italian restaurant in my hometown
            Uppsala.
          </p>
          <p>lorem ipsu</p>
          .
        </div>
      </div>
    </div>
    <div class="gallery">
      <div class="image">
        <img src="../assets/brezza.png" alt="brezza design" />
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
.gallery .image img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: 50% 50%;
  margin-bottom: 40px;
}

.work-text {
  margin-bottom: 18px;
  font-size: 14px;
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
  font-family: LibreBaskerville-Italic, sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 40px;
}
</style>