<template>
    <div class="blog-bost">
        <div class="blot-header">
            <p class="sec-header-title">Blog Post</p>
            <div class="d-flex justify-content-center ">
                <p class="sec-header-info">popular </p>
                <div class="div-triangle">
                    <p class="sec-header-info tri-word"> blog post</p>
                    <div class="triangle tri-postion"> </div>
                </div>
            </div>
        </div>
        <div class=" posts  container d-block d-md-flex flex-wrap justify-content-between  ">
            <Disease diseaeType="Epilepsy" postTitle="Lorem ipsum dolor sit amet,..." postContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " :postImg="require('../assets/images/Rectangle598.png')"/>
            <Disease diseaeType="heart attack" postTitle="Lorem ipsum dolor sit amet,..." postContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " :postImg="require('../assets/images/heartAttack.png')"/>
            <Disease diseaeType="nervous spasms" postTitle="Lorem ipsum dolor sit amet,..." postContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " :postImg="require('../assets/images/nrevous.png')" class="special-post"/>
        </div>
        
    </div>
</template>

<script>
import Disease from '../components/Disease.vue'
export default {
    components:{
        Disease
    }
}
</script>

<style  scoped>
*{
    font-family: DINTEXT;
}
.blot-header{
    margin-top: 100px;
    margin-bottom: 81px;
    
}
.tri-postion{
    right: 5.1%;
    bottom: 37%;
    border-right: 150px solid transparent;
}
@media (max-width:767px) {
    .blog-bost{
        
        width: 95%;
        margin:600px  auto 0px ;
    }
    .tri-postion{
        right: 5.1%;
        bottom: 45%;
        border-right: 94px solid transparent;
        
    }
}

.posts{
    display: flex;
    position: relative;
    justify-content: space-between;
    
    }

    

    .special-post::after{
        content: '';
        width: 0;
        height: 0;
    }
</style>