<template >
    <div  class="post col-12 col-md-5 col-lg-3 mb-5 mb-lg-0 me-md-1 me-lg-0">
        <!-- class=" posts col-4 " for the root div -->
        <img class="post-img col-12 " :src="this.postImg" alt="">
        <div class="type-of-disease">
            <p class="col-2 col-lg-5 ">{{ diseaeType }}</p>
                <div class="post-time col-8 col-lg-7 ">
                <img src="../assets/images/clock-light1.png" alt="">
                <p>posted on <span> 3 days ago</span> </p>
            </div>
        </div>
        <div class="col-11 post-container">
            <p class="post-title">{{ postTitle }}</p>
            <p class="post-content">{{ postContent }} </p>
            <button class="post-read btn btn-danger">read more</button>
        </div>
    </div>
</template>

<script>
export default {
    
    props:{
        diseaeType:String,
        postTitle:String,
        postContent:String,
        postImg:String

    }

}


</script>

<style  scoped>
*{
    font-family: DINTEXT;
}
.post {
    /*width: 27% !important;*/
    position: relative;
    margin-bottom: 100px;
}
/*.post::after{
    position: absolute;
    content: '';
    width: 1px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    right: -65px;
    top: 0px;
}
.special-post::after{
    content: '';
    width: 0;
    height: 0;
}*/

.post-img{
    /* width: 398px;
    height: 246px; */
    margin-bottom: 24px;
}
.type-of-disease,.post-time{
    display: flex;   
}
.type-of-disease{
    justify-content: space-between;
    align-items: baseline;
    padding-right: 0 10px;
}
.type-of-disease p{
    font-family: DINTEXT;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    color: #3D67FB;
    text-transform: capitalize;
    text-align: left;
    

}
.post-time{
    justify-content: start;
    align-items: baseline;
    padding: 0px 0px 0px 15px;
    border-left:1px solid #333333 ;
    margin-left: 10px;
}
.post-time p{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-transform: capitalize;
    color: #A6A8A6;
    margin-bottom: 0px;
    }
    
.post-time span{
    color:#333333 ;
}
.post-time img{
    width: 16px;
    height: 16px;
    margin-right:10px;
    }
.post-container{
    text-align: left;

    }
.post-title{
    margin: 18px 0px;
    font-weight: 700;
    font-size: 20px;
    text-transform: capitalize;
}
.post-content{
    font-weight: 400;
   
    font-size: 16px;
    color: #A0A4B7;
    margin-bottom: 0px;
    
}
.post-read{
    width: 159px;
    height: 47px;
    border-radius: 4px;
    background-color: rgba(187, 199, 247, 0.29) ;
    text-transform: capitalize;
    color: #3D67FB;
    margin-top: 24px;
    border: none;
    outline: none;
    font-weight: 400;
 
    font-size: 16px;
    
}
@media (min-width:768px){
    .post::after{
        position: absolute;
        content: '';
        width: 1px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        right: -8%;
        top: 0px;
    }  
}
@media (min-width:992px) {

    .post{
        width:30%;
        /*width: 27%;*/
    }
}

</style>