<template>
    <div class="swiper-container" ref="container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>

        <div v-if="this.pagination == true" class="swiper-pagination" ref="pagination"></div>
    </div>
</template>


<script>

// import Swiper JS
import Swiper, { Autoplay, Pagination } from 'swiper';
Swiper.use([Autoplay, Pagination])
// import Swiper styles
import 'swiper/swiper-bundle.css';

export default {
    props: ['slidesPerView', 'autoplay', 'spaceBetween', 'loop', 'autoHeight', 'pagination'],
    name: "SwiperContainer",
    mounted() {

        let data = {
            slidesPerView: this.slidesPerView,
            spaceBetween: this.spaceBetween,
            autoplay: this.autoplay,
            loop: this.loop,
            autoHeight: this.autoHeight
        }

        if(this.pagination == true) {
            data['pagination'] = {
                el: this.$refs.pagination,
                dynamicBullets: true
            }
        }

        new Swiper(this.$refs.container, data)
    }
}
</script>

<style lang="scss" scoped>
    .swiper-container {
        padding-bottom: 20px;
        position: relative;
        height: auto;
        z-index: 0;
        width: -webkit-fill-available;

        .swiper-slide {
            width: auto;
        }

        .swiper-pagination {
            bottom: 0;
        }
    }
</style>