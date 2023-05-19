<template>
    <div class="app-single-info text-center mb-5 mb-lg-0 me-3 me-lg-0 col-6 col-md-4 col-lg-2 ">
        <img :src="this.infoImg" alt="">
        <p class="info-number">{{ infoNumber }}</p>
        <p class="info-title">{{ infoTitle }}</p>
    </div>
</template>

<script>
export default {
    props:{
        infoNumber:String,
        infoTitle:String,
        infoImg:String
    }
}
</script>

<style  scoped>
*{
    font-family: DINTEXT;
}
.app-single-info{
    position: relative;

}
.app-single-info::after{
    position: absolute;
    content: '';
    width: 1px;
    height: 00%;
    background-color: rgba(0, 0, 0, 0.1);
    right: -60%;
    top: 0px;
}

.app-single-info img{
    width: 55px;
    height: 55px;
}
.app-single-info .info-number{
    font-weight: 700;
    font-size: 36px;
    color: #333333;
    margin: 15px 0px;
}

.app-single-info .info-title{
    font-weight: 500;
    font-size: 23px;
    color: #333333;
}

@media (max-width: 767px) {
    .app-single-info::after{
        position: absolute;
        content: '';
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.1);
        left: 0;
        top: 110%;
    }
    /*.app-single-info{
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5px;
    
    }*/
}
@media (min-width: 768px) {
    .app-single-info{
        
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .app-single-info::after{
        position: absolute;
        content: '';
        width: 1px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        right: -30%;
        top: 0;
    }
}
@media (min-width: 992px) {
    .app-single-info::after{
        position: absolute;
        content: '';
        width: 1px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        right: -30%;
        top: 0px;
    }
    .app-single-info{
        border: none;
    }
}

</style>