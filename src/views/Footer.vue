<template>
    <div>
        <footer class="footer">
            <p id="download-app">what are you waiting for? download now </p>
            <div class="download-btns d-md-flex  justify-content-around">
                <div class="download-btn   d-flex mb-5 mb-md-0">
                    <i class="fa-brands fa-apple"></i>
                    <div class="download-info">
                        <p class="download-it">download on the </p>
                        <p class="download-app">apple store</p>
                    </div>
                </div>
                <div class="download-btn  d-flex">
                    <i class="fa-brands fa-google-play"></i>
                    <div class="download-info">
                        <p class="download-it">get in on </p>
                        <p class="download-app">google play</p>
                    </div>
                </div>
            </div>
            <p class="copy-right"> &#169;  2023 sezicap . All rights reserved</p>
            <div class="footer-nav d-md-flex justify-content-between flex-wrap">
    
                <ul id="app-name " class="col-12 text-center text-md-start col-md-2  mb-5 mb-lg-0">
                    <h4  id="logo1">S C  <br></h4>
                    <h6 id="logo2">s e i z c a p </h6>
                </ul>
                
    
                <ul class="page-link mb-5 mb-lg-0 col-md-9 col-12   d-flex flex-wrap col-lg-6 justify-content-evenly justify-content-lg-between align-items-center">
                    <li class="col-4 col-md mb-2 mb-md-0"><router-link to="/" v-scroll-to="'#Header'">Home</router-link></li>
                    <li class="col-4 col-md mb-2 mb-md-0"><router-link to="/features" v-scroll-to="'#Features'">Service</router-link></li>
                    <li class="col-4 col-md mb-2 mb-md-0"><a href="#">contact us</a></li>
                    <li class="col-4 col-md mt-2 mt-md-0"><router-link to="/team" v-scroll-to="'#OurTeam'">Our Team</router-link></li>
                    <li class="col-4 col-md mt-2 mt-md-0"><router-link to="/aboutseiz" v-scroll-to="'#AboutSeiz'">About us</router-link></li>
                    
                </ul>
    
                <div class="page-icon col-12 col-lg-3 d-flex justify-content-evenly  justify-content-lg-between align-items-md-center">
                    <div><a href="#"><i class="fa-brands fa-whatsapp"></i></a></div>
                    <div><a href="#"><i class="fa-brands fa-facebook-f"></i></a></div>
                    <div><a href="#"><i class="fa-brands fa-instagram"></i></a></div>
                    <div><a href="#"><i class="fa-brands fa-twitter"></i></a></div>
                </div>
    
            </div>
        </footer>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
footer{
    background: linear-gradient(90deg, #3D67FB -15.83%, #9C2CFA 85.13%);
    padding:108px 10% 0 ;
    position: relative;
    }
    footer p{
        font-family: DINTEXT;
    }
    #download-app{
        color: #FFFFFF;
        font-weight: 700;
        font-size: 43px;
        text-align: center;
       
        text-transform: capitalize;
    }
    .copy-right{
        font-family: DINTEXT;
    }
    .download-btns{
        /* width: 45%; */
        margin: 64px auto 74px;
    }
    .download-btn{
        /* width: 243px;
        height: 70px;
        */
        /* width: 45%; */
        background-color: #000;
        color: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 10px;
        padding: 14px 33px;
        text-transform: capitalize;
        cursor: pointer;
    }
    .download-btn p{
        padding: 0;
    }
    .download-btn i{
        font-size: 40px;
        margin-right: 15px;
    }
    .download-it{
        font-weight: 50;
        margin-bottom: 1px;
        font-size: 12px;
    }
    
    .download-app{
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 0;
    }
    
    .copy-right{
        color: #FFFFFF;
        /* font-weight: 400; */
        font-size: 17px;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        line-height: 20.72px;
        margin-bottom: 73px;
    }
    .footer-nav{
        border-top: 1px solid #FFFFFF;
        padding-top: 45px;
        color: #FFFFFF;
        padding-bottom: 28px;
    }
    
    .footer-nav a{
        text-decoration: none;
        color: #FFFFFF;
    }
    .footer-nav a:hover{
        color: #FFFFFF;
    }
    .page-icon{
        justify-content: space-between;
    }
    .page-icon div {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 1px solid #FFFFFF;
        text-align: center;
        cursor: pointer;
        position: relative;
    }
    
    .page-icon i{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .page-link li{
        list-style: none;
    font-family: DINTEXT;

    }
    .page-link a{
        font-family: DINTEXT;
        text-transform: capitalize;
        font-weight: 400;
        font-size: 20px;
       
    
    }
    
    #app-name{
        color: #FFFFFF;
    }
    #logo1{
        font-family:Georgia, 'Times New Roman', Times, serif;
        font-size: 40px;
    }
    
    #logo2{
        font-family:Arial, Helvetica, sans-serif;
        font-size: 10px;
        text-transform: uppercase;
    }
    
    
    @media (max-width:767px) {
        #download-app{
            font-size: 20px;
        }
    
        .download-btn{
            width: 70%;
            margin: auto;
        }
       .page-link{
        width: 80%;
        margin: auto;
       }
    }
    @media (min-width:768px ){
        .download-btns{
            width: 85%;
        }

    }
    
    @media (min-width:1025px) {
        .download-btns{
            width: 65%;
        }
        
    }
    @media (min-width:1300px) {
        .download-btns{
            width: 45%;
        }
        
    }
    
    
</style>