<template>
  <div class="work-page">
    <div class="container">
      <div class="work-text">
        <div class="h1">Aloha</div>
        <div class="detail">UX & UI design, Branding, User research & analysis </div>
      <div class="gallery">
      <div class="image-smallest"> 
        <img src="../assets/aloha/preview2.png" alt="discover page" />
      </div>
      </div>
        <div class="main-text m-t-20">
          <p>
            Aloha is a hardware device and web application, which allows musicians to play online with the lowest
possible latency. The previous version of Aloha was only intended for musicians
who already knew each other to connect and play, and lacked any social and networking
features, which would enable new musical interactions and networks to form. This is
where this project came in.</p>
<p>
The purpose of this project was to design the next version of the web-based interface
of Aloha, focusing on social interactions. The goal was to make it the go-to alternative
to playing together physically, and a destination for musicians to expand their network
and make new musical connections and collaborations. To understand the goals and
needs of the potential users, we collected qualitative data by performing semi-structured
interviews. The data was analysed by using a thematic analysis, where data is sorted
and presented in different themes, which emerged through the analysis. Based on the
themes, user stories and personas were composed, which together laid the foundation
for the design of the prototype. </p>
<p>
I was responsible for the design, color and prototyping of the entre application together with my classmate Ester. I was solely responsible for some branding elements, as the logo shown above.
The resulting prototype consists of five main pages: ”Discover”, ”Groups & Bands”,
”Musicians”, ”Sessions” and ”Profile”. Some selected screens and UI elements are shown below.
</p>
 <p>
          If you want to read about the entire design process and the user
          research, download the report through the DIVA portal, link below! :)
        </p>
      <a href="http://uu.diva-portal.org/smash/record.jsf?pid=diva2%3A1571095&dswid=-507"> <b>Link to Aloha Report</b> </a>
        </div>
      </div>
    </div>
    <div class="h3 m-t-20 m-b-30">Selected screens and UI elements</div>
    <div class="gallery">
      <div class="image"> 
        <img src="../assets/aloha/discover_happeningnow.png" alt="discover page" />
      </div>
      <div class="image-smaller"> 
      <img src="../assets/aloha/rec_musician.png" alt="brezza design" />
      </div>
        <div class="image"> 
        <img src="../assets/aloha/groups_discover.png" alt="discover page" />
      </div>
      <div class="image-smaller"> 
      <img src="../assets/aloha/rec_groups.png" alt="brezza design" />
      </div>
      <div class="image"> 
        <img src="../assets/aloha/session.png" alt="discover page" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aloha",
  props: {},
};
</script>
<style scoped lang="scss">
@import "../styles/_mixins.scss";
@import "../styles/_variables.scss";

  a {
    color: hotpink;
    text-decoration: none;
    &:active {
      color: black;
    }
  }

.gallery .image-small {
  display: flex;
  justify-content: center;
  }

.gallery .image img {
  max-width: 700px;
  border-radius: 5px;
  object-fit: cover;
  object-position: 50% 50%;
  margin-bottom: 20px;
}

.gallery .image-smallest img {
  max-width: 240px;
  border-radius: 5px;
  object-fit: fit;
  object-position: 50% 50%;
  margin-top: 20px;
}

.gallery .image-smaller img {
  max-width: 560px;
  border-radius: 5px;
  object-fit: fit;
  object-position: 50% 50%;
  margin-bottom: 20px;
}

.work-text {
  margin: 18px;
  font-size: 14px;
  max-width: 500px;
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
  max-width: 500px;
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