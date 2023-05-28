<template>
    <div class="team-member" @mouseover="show=true" @mouseleave="show=false">
        <div class="member-info">
            <img class="member-img" :src="this.memberImage" loading="lazy" :alt="this.memberName">
            <div class="member-social-media" v-show="show" >
                <a :href="this.memberTwitter" target="_blank" id="twitter"><i class="fa-brands fa-twitter"></i></a>
                <a :href="this.memberFace" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                <a :href="this.memberLinkedIn" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                <a :href="this.memberInsta" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
        <p class="member-name">{{ memberName }}</p>
        <p class="member-skill">{{ memberSkill }}</p>
        
    </div>


</template>

<script>
export default {
    data() {
        return {
            show:false
        }
    },
    props:{
        memberName:String,
        memberSkill:String,
        memberImage:String,
        memberFace:String,
        memberTwitter:String,
        memberInsta:String,
        memberLinkedIn:String,
    }
}
</script>

<style  scoped>

.team-member{
    width: 356px;
    height: 498px;
    border-radius: 10px;
    background-color: #FFFFFF;
    margin-right: 50px;

}
.team-member:hover{
    box-shadow: 0px 1px 9px rgba(117, 65, 238, 0.16);
}
.team-member .member-img{
    width: 100%;
    height: 370px;
    border-radius: 10px 10px 0 0;
    
}
.member-info{
    position: relative;
}
.team-member .member-social-media{
    position: absolute;
    background: linear-gradient(90deg, #3D67FB 0%, #9C2CFA 100%);
    width: 169px;
    height: 30px;
    bottom: 0;
    left: 50%;
    border-radius: 8px 8px 0 0;
    transform: translate(-50%);
    color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-content: center;
    box-sizing: border-box;
    padding-top: 5px;
}

.member-social-media a{
    color: #FFFFFF;
    width: 7px;
    height: 14px;
}
.member-social-media a:hover{
    color: #FFFFFF;
}

.team-member p{
    text-transform: capitalize;
    text-align: center;
}

.team-member .member-name{
    font-weight: 700;
    margin-top: 16px;
    color: #333333;
    font-family: DINTEXT;
    margin-bottom: 8px;
    font-size: 28px;
}
.team-member .member-skill{
    font-weight: 400;
    color: #3D67FB;
    font-family: DINTEXT;
    font-size: 20px;
}
@media (max-width: 1040px) {
    .team-member{
        width: 80%;
        margin: auto;
    }
    
}
@media (min-width: 1040.5px) {
    .team-member{
        
        margin: auto;
    }
    
}
</style>