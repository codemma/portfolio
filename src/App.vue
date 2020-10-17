<template>
  <div id="app">
    <section class="first-section">
      <div class="l-heading">EMMA TYSK</div>
    </section>
    <div id="nav" class="m-b-50">
      <router-link to="/">Work</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/_mixins.scss";
@font-face {
  font-family: "Garamond-Bold";
  src: local("Garamond"),
    url(./fonts/EBGaramond/EBGaramond-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "IBMPlexMono-Regular";
  src: local("IBMPlexMono-Regular"),
    url(./fonts/IBMPlexMono/IBMPlexMono-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "LibreBaskerville";
  src: local("LibreBaskerville-Regular"),
    url(./fonts/LibreBaskerville/LibreBaskerville-Regular.ttf)
      format("truetype");
}
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat-Regular"),
    url(./fonts/Montserrat/Montserrat-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "LibreBaskerville";
  src: local("LibreBaskerville-Italic"),
    url(./fonts/LibreBaskerville/LibreBaskerville-Italic.ttf) format("truetype");
}
.first-section {
  text-align: left;
  margin: auto;
  padding: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.l-heading {
  font-size: 18px;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body {
  margin: 0;
}
#nav {
  padding: 30px;

  a {
    font-family: LibreBaskerville-Regular, sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &:last-child {
      margin-left: 16%;
    }

    &.router-link-exact-active {
      color: #f79bf7;
    }
  }
}
</style>
