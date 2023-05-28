<template>
    <div class="header">
        <div class="medapp col-md-5 col-lg-5 col-sm-12">
            <h4 >Best</h4> <br>
            <h4 id="med"><b>Medical App</b> </h4> <br>
            <h4>For Your Health</h4>
            <p>Lorem Ipsum Dolor Sit Amet consectetur adipisicing elit. Ex culpa delectus iste quod, doloremque perferendis?</p>

            <button id="download" >
                    Download App
                </button>

                <div id="rates">

                <div class="imgs ">
                    <img id="pic1" src="../assets/images/pic1.png" alt="member1" loading="lazy">
                    <img id="pic2" src="../assets/images/pic2.png" alt="member2" loading="lazy">
                    <img id="pic3" src="../assets/images/pic3.png" alt="member3" loading="lazy">
                    <img id="pic4" src="../assets/images/pic1.png" alt="member4" loading="lazy">
                </div>

                <div class="rating">
                    <i class="fa-solid fa-star text-warning p-1"></i>
                    <i class="fa-solid fa-star text-warning p-1"></i> 
                    <i class="fa-solid fa-star text-warning p-1"></i>
                    <i class="fa-solid fa-star text-warning p-1"></i>
                    <i class="fa-solid fa-star text-warning p-1"></i>

                    <h6>4.9 Star Over 1.2k Rated</h6>
                </div>
            </div>
        </div>


        <div class="shots col-lg-6 col-md-4 col-sm-12">
            <img class="shot1" src="../assets/images/shot1.png" alt="heartRateScreen" loading="lazy">
            <img class="shot2" src="../assets/images/shot2.png" alt="sezBotScreen" loading="lazy">
            <img class="shot3" src="../assets/images/shot3.png" alt="homeSccreen" loading="lazy">
            <img  class="shape1" src="../assets/images/shape1.png" alt="shape" loading="lazy">
            <img  class="shape2" src="../assets/images/circle.png" alt="circle" loading="lazy">
            <img  class="shape3" src="../assets/images/circle.png" alt="circle" loading="lazy">






        </div>
    
    </div>
</template>
<script>
    export default {
       
    }
</script>
<style scoped >
.header{
    background:  linear-gradient( to right ,rgb(226, 228, 249),rgb(238, 236, 249),rgb(236, 223, 251));
    display: flex;
   flex-wrap: wrap;
}
.medapp p{
    color: rgb(126, 125, 125);
}
.medapp h4{
    font-size: 40px;
}
.shots{
    position: relative;
    margin-top: 70px;
}
.medapp{
    margin-left: 70px;
    margin-top: 55px;
    padding-top: 60px;
    display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;
  flex-wrap: wrap;
}
#rates{
    width: 100%;
}
.imgs{
    width: 50%;
    height: 100px;
    position: relative;
}
#pic1 , #pic2 , #pic3 , #pic4{
height: 44px;
width: 44px;
border-radius: 50%;
margin-top: 20px;
}
#pic2{
    position: absolute;
left: 32px;
}
#pic3{
    position: absolute;
left: 62px;
}
#pic4{
    position: absolute;
left: 92px;
}

*{
    font-family: DINTEXT;
}
#download{
            border: none;
            padding: 14px;
        background:  linear-gradient( to right ,rgba(61, 103, 251, 1),rgba(156, 44, 250, 1));
        border-radius: 7px;
        color: white;
        font-size: 12px;
        width: 130px;
        margin-top: 20px;
            
         }
         #rates{
            display: flex;
            margin-top: 20px;
         }
         .rating{
margin-top: 20px;
margin-left: 20px;
         }
      .shot1{
        height:360px;
         position: absolute;
         left: 20%;
        top: 15%;
        z-index: 2;
         }
         .shot2{
            height:360px;
            position: absolute;
            left: 46%;
             top: 15%;
             z-index: 2;
             
         }
         .shot3{
            height:360px;
            position: absolute;
            left: 40%;
             top: 15%;
             z-index: 3;
             
         }
         .shape1{
            width:300px;
            position: absolute;
             left:32% ;
             top: 42%;
             z-index: 0;
         }
         .shape2{
            position: absolute;
            left: 24%;
            top: 14%;
         }
         .shape3{
            position: absolute;
            right: 20%;
            top: 15%;
         }
         @media only screen and (max-width: 870px){
    .header{
        height: 1100px;
    }
    .shape3{
            position: absolute;
           left: 71%;
            top: 13%;
         }
    .medapp{
        width: 80%;
    }
    .shots{
        width: 90%;
     margin-bottom: 350px;
    position: relative;
    margin-top: 30px;
    width: 80%;
}
.shape1{
    width:360px;
            position: absolute;
             left:27% ;
             top:108%;
             z-index: 0;
}
.shot1 ,.shot2 , .shot3{
   padding-bottom: 20px;
}
}

@media (min-width: 871px) and (max-width:1100px) {
    .shape1{
        position: absolute;
      left: 22%;
    }
    .shot1{
        position: absolute;
        left: 10%;
    }
.shape3{
    position: absolute;
    left: 89%;
}
.shots{
 width: 300px;
}
}
@media only screen and (max-width: 630px){
    .shape1{
        
        position: absolute;
        left: 20%;
    }
.shape3{
    position: absolute;
    left: 80%;
}
}
 </style>