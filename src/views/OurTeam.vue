<template>
    <div class="our-team" >
        <p class="sec-header-title">our team</p>
        <div class="d-flex justify-content-center ">
            <p class="sec-header-info">we have skilled team of</p>
            <div class="div-triangle">
                <p class="sec-header-info tri-word">professionals</p>
                <div class="triangle tri-postion"> </div>
            </div>
        </div>
    <swiper
    :slidesPerView="4"
    :spaceBetween="30"
    :pagination="false"
    :modules="modules"
    :grabCursor="true"
    :breakpoints="res"
    class="mySwiper"
    >
    <swiper-slide>
        <TeamMember memberName="mohamed fahmy" memberSkill="flutter developer" :memberImage="require('../assets/images/mohamedFahmy.png')"
        memberFace=" https://www.facebook.com/mohamedfahmy201 "
        memberInsta="https://www.instagram.com/mohamed_fahmy1318/ "
        memberLinkedIn=" https://www.linkedin.com/in/mo-fahmy-7a3a92246/"
        memberTwitter=" https://twitter.com/mof4943 "
        />
    </swiper-slide>

    <swiper-slide>
        <TeamMember memberName="omnia elsersawy" memberSkill="flutter developer" :memberImage="require('../assets/images/omnia.jpg')"
        memberFace="https://www.facebook.com/reflection.888?mibextid=ZbWKwL"
        memberInsta="https://instagram.com/omnia___elsersawy?igshid=MmJiY2I4NDBkZg=="
        memberLinkedIn="https://www.linkedin.com/in/omnia-el-sersawy-66a989246"
        memberTwitter="https://twitter.com/OmniaElsersawy?t=R77dUK9ymJ47NxbrFrMx1w&s=09"
        />
    </swiper-slide>
    
    <swiper-slide>
        <TeamMember memberName="omnia nihad" memberSkill="ui / ux designer" :memberImage="require('../assets/images/omniaNihad.png')"
        memberFace="https://www.facebook.com/polyantha.9?mibextid=ZbWKwL"
        memberInsta="#"
        memberLinkedIn="https://eg.linkedin.com/in/omnia-nihad-563a54209"
        memberTwitter="#"
        />
    </swiper-slide>

    <swiper-slide>
        <TeamMember memberName="Hanan abdelrahman " memberSkill="ui / ux designer" :memberImage="require('../assets/images/hanan.jpg')"
        memberFace="https://www.facebook.com/hanan.abdo.147?mibextid=ZbWKwL"
        memberInsta="https://instagram.com/7anan_abdalrahman7?"
        memberLinkedIn="#"
        memberTwitter="https://twitter.com/7nanAbdelr7man7?s=09"
        />
    </swiper-slide>

    <swiper-slide>
        <TeamMember memberName="Gamal Khaled" memberSkill="back-end developer" :memberImage="require('../assets/images/gamal.jpg')"
        memberFace=" https://www.facebook.com/gamalkh299"
        memberInsta="#"
        memberLinkedIn="  https://www.linkedin.com/in/gamalkh299/"
        memberTwitter="https://twitter.com/gamalkh299"
        />
    </swiper-slide>

    <swiper-slide>
        <TeamMember memberName="merhan mostafa" memberSkill="back-end developer" :memberImage="require('../assets/images/merhan.jpg')"
        memberFace="https://www.facebook.com/merhanmostafa47/"
        memberInsta="#"
        memberLinkedIn="https://www.linkedin.com/in/merhanmostafa47/"
        memberTwitter="#"
        />
        
    </swiper-slide>
    
    <swiper-slide>
        <TeamMember memberName="sohila anas" memberSkill="data science" :memberImage="require('../assets/images/sohaila.jpg')"
        memberFace="https://www.facebook.com/sohaila.anas.7?mibextid=ZbWKwL"
        memberInsta="https://instagram.com/sohaila_anas?igshid=MmJiY2I4NDBkZg=="
        memberLinkedIn="https://www.linkedin.com/in/sohaila-anas-012a96246"
        memberTwitter="#"
        />
    </swiper-slide>
    
    <swiper-slide>
        <TeamMember memberName="ahmed alaa" memberSkill="data science" :memberImage="require('../assets/images/ahmed.jpg')"
        memberFace="https://www.facebook.com/remahmed.ali.7?mibextid=ZbWKwL"
        memberInsta="#"
        memberLinkedIn="
        https://www.linkedin.com/in/ahmed-alaa-416798208?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXOdG2TP9Q%2BqxAMvIMNoQ9g%3D%3D"
        memberTwitter="#"
        />
    </swiper-slide>
    
    <swiper-slide>
        <TeamMember memberName="shahd nabil" memberSkill="frontend developer" :memberImage="require('../assets/images/shahd.jpg')"
        memberFace="https://www.facebook.com/shahd.elalfy.33?mibextid=ZbWKwL "
        memberInsta="https://instagram.com/shahd_nabil69?igshid=ZGUzMzM3NWJiOQ== "
        memberLinkedIn="https://www.linkedin.com/in/shahd-nabil-2a0581246"
        memberTwitter="https://twitter.com/ShahdNa65572768?t=aJFb9PMymg5il8IIZEEL5g&s=09"

        />
    </swiper-slide>
    
    <swiper-slide>
        <TeamMember memberName="rawan hesham" memberSkill="frontend developer" :memberImage="require('../assets/images/rawan.jpg')"
        memberFace="https://www.facebook.com/rawan.hesham.566?mibextid=ZbWKwL"
        memberInsta="https://instagram.com/rawan_fetoh?igshid=Y2M0YTlkZGNmOQ=="
        memberLinkedIn="https://www.linkedin.com/in/rawan-hesham-45047b246"
        memberTwitter="https://twitter.com/RawanHe24426808?t=qYHxHfYbDhrvVhDiy-m4Sg&s=09"

        />
    </swiper-slide>
    
    </swiper>
    </div>
</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/pagination';

    // import './style.css';

    // import required modules
    import { Pagination } from 'swiper';
    import TeamMember from '@/components/TeamMember.vue';

    export default {
    components: {
        Swiper,
        SwiperSlide,
        TeamMember
    },
    setup() {
        return {
        modules: [Pagination],
        };
    },
    data() {
        return {
            res:{
                480:{
                    slidesPerView:1,
                    
                },
                768:{
                    slidesPerView:2
                },
                1050:{
                    slidesPerView:3
                },
                1400:{
                    slidesPerView:4
                }
            }
        }
    },
    };
</script>
<style scoped>

.our-team{
    margin-top: 191.333px;
    height: max-content;
}
.our-team p{
    font-family: DINTEXT;
}
.our-team #team-skills{
    margin-bottom: 101px;
}
.mySwiper{
    height: 504px;
}

.tri-postion{
    right: 0;
    bottom: 36%;
    border-right: 234px solid transparent;

}

@media (max-width:767px) {
    .tri-postion{
        bottom: 42%;
        border-right: 146px solid transparent;
    }
}


</style>