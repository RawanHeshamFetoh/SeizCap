<template>
    <nav>
        <div class="container" id="nav">
            <ul class="left col-lg-3 col-md-2 col-sm-4  ">
                <h4  id="logo1">S C  <br></h4>
                  <h6 id="logo2"> S E I Z C A P</h6>
            </ul>
            <ul v-if="!mobileview" class="right col-lg-8 col-md-8 col-sm-8">
                <router-link to="/" v-scroll-to="'#Header'" > Home</router-link>
                <router-link to="/features" v-scroll-to="'#Features'">Features</router-link>
                <router-link to="/aboutseiz" v-scroll-to="'#AboutSeiz'">About App</router-link>
                <router-link to="/blogs" v-scroll-to="'#BlogBlot'">Blogs</router-link>
                <router-link to="/team" v-scroll-to="'#OurTeam'">Our Team</router-link>
            </ul>
            <div id="navigation-icon" v-if="mobileview">
                <i @click="toggle" class="fas fa-bars"></i>
                  <ul v-if="active" id="mobnav">
                    <router-link to="/" v-scroll-to="'#Header'" > Home</router-link>
                    <li><router-link to="/features" v-scroll-to="'#Features'">Features</router-link></li>
                    <li> <router-link to="/aboutseiz" v-scroll-to="'#AboutSeiz'">About App</router-link></li>
                    <li><router-link to="/blogs" v-scroll-to="'#BlogBlot'">Blogs</router-link></li>
                    <li><router-link to="/team" v-scroll-to="'#OurTeam'">Our Team</router-link></li>
                </ul>
            </div>
            <button v-if="!mobileview" id="sub" class="sub col-lg-3 col-md-2 ">
                    Subscribe Now
            </button>
        </div>
        
    </nav>
</template>
<script>
    export default {
        data: () =>{
            return{
                mobileview : true,
                showNav : false ,
                active: false
            };
        },
        methods:{
            handleview(){
                this.mobileview=  window.innerWidth < 760 ;
            },
            toggle () {
        this.active = !this.active
      }
        },
        created(){
            this.handleview();
        }
      
    }
</script>
<style  scoped>
#navigation-icon {
    padding: 10px 1px 20px;
    cursor: pointer;
    font-size: 20px;
    position: relative;
  }
  #navigation-icon > ul {
    background: linear-gradient(to right, #eeecf9, #ecdffb);
    position: absolute;
    right: 1%;
    height: 200px;
    width: 160px;
    box-shadow: 2px 2px 2px #a4a4a4;
  }
  #navigation-icon > ul a {
    list-style: none;
    text-decoration: none;
    font-size: 15px;
    color: #888;
  }
  #navigation-icon > ul .router-link-exact-active {
    color: #3d67fb;
    font-weight: 700;
  }
  #navigation-icon > ul li {
    margin-top: 5px;
    list-style: none;
    padding-right: 20px;
  }
  nav {
    background: linear-gradient(to right, #e2e4f9, #eeecf9, #ecdffb);
    position: fixed;
    top: 0;
    z-index: 7;
    width: 100%;
    height: 120px;
  }
  nav #logo1 {
    color: #3d67fb;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 40px;
    padding-top: 10px;
  }
  nav #logo2 {
    color: #3d67fb;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
  }
  nav .left {
    height: 90px;
    width: 20%;
  }
  nav #sub {
    font-family: DINTEXT;
    border: none;
    padding: 12px;
    background: linear-gradient(to right, #3d67fb, #9c2cfa);
    border-radius: 7px;
    color: white;
    font-size: 12px;
    width: 120px;
  }
  nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }
  nav .container > ul {
    padding: 0;
    margin: 0;
    text-align: left;
  }
  nav .container > ul a {
    font-family: DINTEXT;
    color: #888;
    text-decoration: none;
    text-align: left;
    font-size: 40px;
  }
  nav .container > ul .router-link-exact-active {
    color: #3d67fb;
    font-weight: 700;
  }
  nav .container > ul.right {
    height: 40px;
    display: flex;
    gap: 50px;
  }
  nav .container > ul.right a {
    font-size: 15px;
  }
  
</style>