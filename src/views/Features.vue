<template>
<div class="features" >

<div class="fshot col-lg-5 col-md-5 col-sm-12">
    <img class="shot4" src="../assets/images/group12.png" alt="honeScreen" loading="lazy">

</div>

<div class="ffeature col-lg-7 col-md-7 col-sm-12">

    <div class="APPf ">
    <h3 class="text-dark"> <b> App Features</b></h3>
    <p class="text-muted">Lorem  ipsum dolor sit amet consectetur.Nemo, odio! Nulla accusamus perferendis, quas impedit doloribus, cumque autem amet ut quo porro aliquid ea? Accusamus, delectus quidem</p>
</div>

<div class="Appicon">

    <div class="ficon  ">
        <div class="imgicon">
            <img id="icon1" class="pt-3" src="../assets/images/icon1.png" alt="icon" loading="lazy">
        </div>

         <div class="fdetail">
             <h5>Perfect Ui Design</h5>
             <p class="text-muted">Lorem  ipsum  dolor  sit  amet  consectetur   adipisicing  elit   Sapiente   distinctio sit  .</p>
         </div> 

    </div>

    <div class="ficon">
         <div class="imgicon">
            <img id="icon2" class="pt-2" src="../assets/images/icon2.png" alt="headPhone" loading="lazy">
             </div>
             <div class="fdetail">
             <h5>24/7 Support</h5>
             <p class="text-muted">Lorem  ipsum  dolor  sit  amet  consectetur   adipisicing  elit   Sapiente   distinctio sit  .</p>
         </div> 
            </div>

    <div class="ficon"> 
        <div class="imgicon">
            <img id="icon3" class="pt-3" src="../assets/images/icon3.png" alt="chart" loading="lazy">
             </div>
             <div class="fdetail">
             <h5>Cost Statistics</h5>
             <p class="text-muted">Lorem  ipsum  dolor  sit  amet  consectetur   adipisicing  elit   Sapiente   distinctio sit  .</p>
         </div> 
            </div>

              <div class="ficon">
                <div class="imgicon">
            <img id="icon4" class="pt-3" src="../assets/images/icon4.png" alt="cloud" loading="lazy" >
             </div>
             <div class="fdetail">
             <h5>Cloud Storage</h5>
             <p class="text-muted">Lorem  ipsum  dolor  sit  amet  consectetur   adipisicing  elit   Sapiente   distinctio sit  .</p>
         </div> 
              </div>

    <div class="ficon">
        <div class="imgicon">
            <img id="icon5" class="pt-3" src="../assets/images/icon5.png" alt="verification" loading="lazy">
             </div>
             <div class="fdetail">
             <h5>Fully Secured</h5>
             <p class="text-muted">Lorem  ipsum  dolor  sit  amet  consectetur   adipisicing  elit   Sapiente   distinctio sit  .</p>
         </div> 
    </div>
    <div class="ficon">
        <div class="imgicon d-flex align-items-baseline">
            <img id="icon6" class="pt-2 ps-2" src="../assets/images/icon6.png" alt="happy" loading="lazy">
             </div>
             <div class="fdetail">
             <h5>Top Standards</h5>
             <p class="text-muted">Lorem  ipsum  dolor  sit  amet  consectetur   adipisicing  elit   Sapiente   distinctio sit  .</p>
         </div> 
            </div>
   
</div>
</div>


   </div>
</template>


<script>
    export default {
       
    }
</script>

<style scoped >
*{
    font-family: DINTEXT;
}
.fshot{
 margin-top: 40px;
    height: 100%;
 position: relative;
  
}
.shot4{
    height: 100%;
    
}
.shot5{
    width: 240px;
    height: 140px;
    position: absolute;
    top: 20%;
    left: 46%;
}
.APPf{
    margin-top: 20px;
    height: 120px; 
    padding-left: 80px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    text-align: start;
}
.ficon{
    width: 330px;
    height:110px;
    padding-left: 20px;
    position: relative;
}
.fdetail{
    width: 230px;
    display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  padding-left: 10px;
    height: 70%;
    margin-left: 60px;
    margin-bottom: 100px;
    position: absolute;
    top: 12%;
}
.fdetail p{
    font-size: 12px;
}
.Appicon{
   margin-top: 20px;
    width: 100%;
    margin-bottom: 30px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
    height: 460px;
}
.imgicon{
    margin-top: 12px;
    width: 55px;
    height: 55px;
    background:  linear-gradient( to right ,rgb(226, 228, 249),rgb(238, 236, 249),rgb(236, 223, 251));
    border-radius: 5px;
    text-align: center;
}
.imgicon h5 {
    font-weight:bolder;
}
.ffeature{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.features{
   flex-wrap: wrap;
    display: flex;
    height: 600px;
    margin-top: 100px;
}
@media (min-width: 1200px) {
    .shot4{
        margin-left: 13%;
    }
}

@media (min-width: 1400px) {
    .shot4{
        margin-left: 19%;
    }
}
@media (min-width: 650px) and (max-width: 780px)  {
    .shot4{
        margin-left: 14%;
    }
}
@media only screen and (max-width: 1200px){
    .ficon{
      width: 300px;
     margin: auto;
    }
    .fdetail{
        width: 190px;
    }
 
}
@media only screen and (max-width: 1100px){
    .ficon{
      width: 270px;
     margin: auto;
    }
    .shot5{
     width: 210px;
     height: 120px;
    }
    .fdetail h5{
        font-size: 17px;
        padding-top: 12px;
    }
}
@media only screen and (max-width: 950px){
    .features{
        height: 680px;
    }
    .shot5{
     width: 180px;
     height: 120px;
    }
    .shot4{
        width: 370px;
        
    }
    .ficon{
      width: 350px;
      height: 88px;
    }
    .ffeature{
    padding-left: 20px;
    }
  .fdetail{
    width: 280px;
  }
    .fdetail h5{
        font-size: 15px;
        padding-top: 15px;
   margin-left: 15px;
    }
    .Appicon{
        height: 570px;
    }
}
@media only screen and (max-width: 770px){
    .ficon{
      width: 300px;
    }
    .fdetail{
        width: 230px;
    }
    .ffeature{
        margin-top: 50px;
        width: 95%;
        margin-left: 10px;
    }
    .shot4{
        width: 470px;
        
    }
    .shot5{
        width: 250px;
        height: 140px;
    }
    .APPf{
       margin-right: 20px;
       width: 100%;
    }
}
</style>