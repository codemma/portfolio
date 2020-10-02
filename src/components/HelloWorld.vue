<template>
  <div class="hello">Hi! My name is Emma Tysk</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@font-face {
  font-family: "Garamond-Bold";
  src: local("Garamond"),
    url(../fonts/EBGaramond/EBGaramond-Bold.ttf) format("truetype");
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
