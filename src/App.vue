<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Abouts</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
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
  font-family: "LibreBaskerville";
  src: local("LibreBaskerville-Italic"),
    url(./fonts/LibreBaskerville/LibreBaskerville-Italic.ttf) format("truetype");
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
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
