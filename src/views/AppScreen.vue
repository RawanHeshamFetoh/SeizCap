<template>
  <div class="app-screen">
    <div class="d-flex justify-content-center ">
      <p class="sec-header-info">our app </p>
      <div class="div-triangle">
          <p class="sec-header-info tri-word"> screenshot</p>
          <div class="triangle tri-postion"> </div>
      </div>
  </div>
    <p class="sec-header-title app-screen-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q</p>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 7,
      slideShadows: true,
    }"
    :simulateTouch="false"
    :pagination="false"
    :loop="true"
    :navigation="{ 
      nextEl:'.slider-prev',
      prevEl:'.slider-next',
    }"
    :modules="modules"
    class="mySwiper"
  >
    
    <swiper-slide id="swiper">
      <div class="screen">
        <img src="../assets/images/screen1.png" class="main-screen"  alt="">
      </div>
    </swiper-slide>
    
    <swiper-slide >
      <div class="screen">
        <img src="../assets/images/cover.png" class="cover" alt="">
        <img src="../assets/images/screen2.png" class="screen-content" alt="">
      </div>
    </swiper-slide>
    
    <swiper-slide >
      <div class="screen">
        <img src="../assets/images/cover.png" class="cover" alt="">
        <img src="../assets/images/screen3.png" class="screen-content" alt="">
      </div>
    </swiper-slide>

    <swiper-slide >
      <div class="screen">
        <img src="../assets/images/cover.png" class="cover" alt="">
        <img src="../assets/images/screen4.png" class="screen-content" alt="">
      </div>
    </swiper-slide>
    
    <swiper-slide >
      <div class="screen">
        <img src="../assets/images/cover.png" class="cover" alt="">
        <img src="../assets/images/screen7.png" class="screen-content" alt="">
      </div>
    </swiper-slide>

    <swiper-slide >
      <div class="screen">
        <img src="../assets/images/cover.png" class="cover" alt="">
        <img src="../assets/images/screen6.png" class="screen-content" alt="">
      </div>
    </swiper-slide>
    
    <swiper-slide >
      <div class="screen">
        <img src="../assets/images/cover.png" class="cover" alt="">
        <img src="../assets/images/screen5.png" class="screen-content" alt="">
      </div>
    </swiper-slide>

    <div class="slider-controler ">
      <div class=" slider-next">
        <i class="fa-solid fa-chevron-left"></i>
      </div>

      <div class=" slider-prev">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      
    </div>
    
  </swiper>
  
  

  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";



// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';



// import required modules
import { EffectCoverflow, Pagination ,Navigation} from "swiper";


export default {
  data() {
    return {
      swiper:null
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination,Navigation],
    };
  }
};
</script>
<style scoped>

.swiper {
  width: 60%;
  margin:27px auto ;
}

.swiper-slide {
  /*width: 354px;*/
  /*height: 686px;*/
  width: 347px;
  height: 650px;
  border-radius: 20px;
}


.swiper-slide img {
  display: block;
  width: 100%;
  background: none;
}
.app-screen{
  margin-top: 200px;
  margin-bottom: 82px;
}
.app-screen p{
  
    font-family: DINTEXT;

}
.app-screen-info{
  width: 70%;
  margin:10px auto 20px;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
}
.screen{
  position: relative;
}

.screen-content{
  position: absolute;
  top: 7px;
  left: 22px;
  width: 300px !important;
  height: 630px;
}
.slider-controler{
  display: flex;
  justify-content: center;
  width: 40%;
  margin:47px auto 10px;
}
.slider-next,.slider-prev{
  width: 60px;
  height: 60px;
  background-color:#FFFFFF;
  box-shadow: 0px 1px 14px rgba(117, 65, 238, 0.17); 
  margin-left: 23px;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  position: relative;
}
.slider-next:hover,.slider-prev:hover{
color: #FFFFFF;
background-color:  #3D67FB;
}
.slider-controler i{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
font-size: 25px;
}
.tri-postion{
  right: 3.1%;
  bottom: 31%;
  border-right: 188px solid transparent;
}

@media (max-width: 767px) {
    .swiper{
      width: 100%;
    }
    .tri-postion{
      right: 0;
      bottom: 42%;
      border-right: 120px solid transparent;
      
  }
  .screen-content{
    height: 450px;
    width: 253px !important;
  }
  .cover,.main-screen,.swiper-slide{
    height: 506px;
    width: 300px;
  }
  
}
</style>
