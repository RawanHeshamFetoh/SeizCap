<template>
  <div >
    
    <NavBar/>
    <Header id="Header"/> 
    <Features  id="Features"/>
    <AboutSeiz id="AboutSeiz"/>
    <BlogPost  id="BlogBlot"/>
    <AppInfo/>
    <OurTeam id="OurTeam"/>
    <AppScreen/>
    <Footer/>
  </div>
  
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
@font-face{
  font-family: DINTEXT ;
  src: url(assets/fonts/DINTEXT.ttf);
}
.sec-header-title{
  font-size: 26px;
  font-weight: 400;
  font-family: DINTEXT;
  font-style: normal;
  color: #A0A4B7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;
  text-transform: capitalize;
}

.sec-header-info{
  margin-top: 0px;
  font-size: 40px;
  font-weight: 700;
  font-family: DINTEXT;
  font-style: normal;
  color: #333333;
  text-transform: capitalize;
  text-align: center;
  line-height: 66px;
}

.div-triangle{
  position: relative;
}

.triangle{
  width: 0;
height: 0;
position: absolute;
z-index: -10;
text-indent: -9999px;
border-bottom: 10px solid #FFD46B;
}
.tri-word{
  margin-left: 12px;
}

@media (max-width:767px) {
  .sec-header-info{
      font-size: 25px;
  }
}
</style>
<script>
import NavBar from './views/NavBar.vue';
import Header from './views/Header.vue';
import Features from './views/Features.vue';
import AboutSeiz from './views/AboutSeiz.vue'
import BlogPost from './views/BlogPost.vue';
import AppInfo from './views/AppInfo.vue';
import OurTeam from './views/OurTeam.vue';
import HomeView from './views/HomeView.vue';
import AppScreen from './views/AppScreen.vue';
import Footer from './views/Footer.vue'




export default {
  components:{
    NavBar,
    Header,
    Features,
    AboutSeiz,
    BlogPost,
    AppInfo,
    OurTeam,
    HomeView,
    AppScreen,
    Footer,
   
  }
}
</script>
