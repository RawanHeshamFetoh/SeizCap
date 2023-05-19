<template>
  <div class="home">
    <tiny-slider :mouse-drag="true" :loop="false" items="5" slide-by="1" gutter="20" class="my-team-slider">
      <div>Slider item #1</div>
      <div>Slider item #2</div>
      <div>Slider item #3</div>
      <div>Slider item #4</div>
      <div>Slider item #5</div>
      <div>Slider item #6</div>
      <div>Slider item #7</div>
      <div>Slider item #8</div>
      <div>Slider item #9</div>
      <div>Slider item #10</div>
  </tiny-slider>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VueTinySlider from 'vue-tiny-slider';


export default {
  name: 'HomeView',
  components: {
    'tiny-slider': VueTinySlider
  }
}
</script>
