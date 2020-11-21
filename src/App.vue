<template>
  <div id="app">
    <section class="first-section">
      <div class="l-heading">emma tysk</div>
    </section>
    <div id="nav" class="m-b-50">
      <router-link to="/">Work</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap&css2?family=IBM+Plex+Mono:ital@0;1&display=swap&family=Libre+Baskerville:wght@400;700&family=Montserrat&display=swap");
@import "./styles/_mixins.scss";

.first-section {
  margin: auto;
  padding: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.l-heading {
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
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
    font-family: "Libre Baskerville", serif;
    font-size: 24px;
    color: #2c3e50;
    text-decoration: none;
    font-weight: 700;

    &:last-child {
      margin-left: 16%;
    }

    &.router-link-exact-active {
      color: #f79bf7;
    }
  }
}
</style>
