<template>
  <div class="intro-text">
    <div class="header">Brezza</div>
    <div class="sub-header">logo for a restaurant in Uppsala</div>
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
.intro-text {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.header {
  font-weight: 700;
  font-size: 28px;
}
.sub-header {
  font-style: italic;
}
</style>