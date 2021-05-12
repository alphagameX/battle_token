<template>
<div class="last__match">
    <swiper-container>
        <swiper-slide>
            <h1>Salut</h1>
        </swiper-slide>
        <swiper-slide>
            <h1>Salut</h1>
        </swiper-slide>
        <swiper-slide>
            <h1>Salut</h1>
        </swiper-slide>
    </swiper-container>
</div>
</template>

<script>
import SwiperContainer from '../../Swiper/SwiperContainer.vue'
import SwiperSlide from '../../Swiper/SwiperSlide.vue'


export default {
    name: "DashboardPanelMatch",
    components: {
        SwiperContainer,
        SwiperSlide
    },

}
</script>

<style lang="scss">
.last__match {
    height: 290px;
    margin-top: 10px;
    background-color: white;
    border-radius: 20px;
}
</style>
