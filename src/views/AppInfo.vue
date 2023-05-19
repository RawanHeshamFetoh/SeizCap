<template>
    <div class="app-info  container-fluid d-flex flex-wrap justify-content-around align-content-around">
        <SingleAppInfo infoNumber="18000+" infoTitle="app download" :infoImg="require('../assets/images/cloud-arrow-down-light.png')" />
        <SingleAppInfo infoNumber="1500+" infoTitle="happy customer" :infoImg="require('../assets/images/users-three-thin.png')" class="SpecialAfterMediamLeft" />
        <SingleAppInfo infoNumber="7000+" infoTitle="active user" :infoImg="require('../assets/images/globe-hemisphere-west-thin.png')" class="SpecialAfterMediamBottom"/>
        <SingleAppInfo infoNumber="1200" infoTitle="reviews" :infoImg="require('../assets/images/star.png')" class="SpecialAfterSmall SpecialAfterMediamBottom SpecialAfterMediamLeft SpecialAfterLarge"/>
    </div>
</template>

<script>
import SingleAppInfo from '@/components/SingleAppInfo.vue';
export default {
    components:{
        SingleAppInfo
    }
}
</script>

<style  scoped>
*{
    font-family: DINTEXT;
}
.app-info{
    box-sizing: border-box;
    background-color: #F5F5F5;
    width: 99%;
    margin-top: 170px;
    padding: 5%;
}
@media (max-width: 767px){
    .SpecialAfterSmall::after{
        width: 0;
    }
}
@media (min-width: 768px) {
    .SpecialAfterMediamBottom{
        border: none;
    }
    
}
@media (min-width: 992px) {
    .SpecialAfterLarge::after{
        content: '';
        height: 0;
        height: 0;
    }
}
</style>