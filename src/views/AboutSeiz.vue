<template>
<div class="about" >

    <div class="aboutapp col-lg-6 col-md-6 col-sm-12">
        
     <p class="text-muted">About App</p>
     <h4 class="text-dark"><b> Manage All Your Epileptic <br> Seizures Using Our App</b></h4>
     <p class="text-muted mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi asperiores nemo tempore maiores provident corrupti dicta recusandae, error deserunt perspiciatis culpa doloremque!</p>
      <div class="feat">
         <div class="check">
            <i class="fa-solid fa-check mt-1"></i>
            <p>Trusted And Reliable</p>
         </div>
         <div class="check">
            <i class="fa-solid fa-check mt-1"></i>
            <p>Privacy Protected</p>
         </div>
         <div class="check">
            <i class="fa-solid fa-check mt-1"></i>
            <p>Cloud Storage</p>
         </div>
         <div class="check">
            <i class="fa-solid fa-check mt-1"></i>
            <p>User Friendly</p>
         </div>
      </div>

      <button id="download" >
                    Download App
                </button>
    </div>


    <div class=" statistics col-lg-6 col-md-6 col-sm-12">
      
        <img class="report pt-3"  src="../assets/images/group2.png">
    </div>
</div>
 </template>

<script>
export default {
       
}
</script>

<style scoped lang="scss">
*{
   font-family: DINTEXT;
}
.about{
    width: 100%;
    height: 530px;
    margin-top: 100px;
   display: flex;
   flex-wrap: wrap;
    background:  linear-gradient( to right ,rgb(226, 228, 249),rgb(238, 236, 249),rgb(236, 223, 251));
}
.report{
   margin-left: 30%;
  
}


.aboutapp{
   
    height: 100%;
   padding-top: 70px;
    padding-left: 80px;
    display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;

}
.feat{
    width: 80%;
    height: 120px;
    display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.check{
    display: flex;
    width: 45%;
}
.check i{
    color: rgba(61, 103, 251, 1);;
}
.check p{
    padding-left: 10px;
    color: rgb(46, 46, 46);
}
#download{
            border: none;
            padding: 14px;
        background:  linear-gradient( to right ,rgba(61, 103, 251, 1),rgba(156, 44, 250, 1));
        border-radius: 7px;
        color: white;
        font-size: 12px;
        width: 150px;
        margin-top: 20px;
         }
         .statistics{
            position: relative;
         }
         .report{
           position: absolute;
           top: -3%;
          right: 10%;
           width: 520px;
            height: 548px;
            z-index: 4;
         }
   
         @media only screen and (max-width: 770px){
            .about{
               margin-top: 840px;
            }
         }
         @media (max-width: 970px) {
   .report{
      margin-left: 20%;
   }
   
}
@media only screen and (max-width: 970px){
  .report2{
   height: 150px;
   width: 190px;
  }
  .report{
   width: 350px;
   
  }
}
@media only screen and (max-width: 760px){

.statistics{
   width: 100%;
   background:  linear-gradient( to right ,rgb(226, 228, 249),rgb(238, 236, 249),rgb(236, 223, 251));
}
.report{
   width: 400px;
   margin-right: 50px;
}
   
}

</style>