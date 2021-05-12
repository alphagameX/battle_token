<template>
<div class="current-match container">
    <h3>Les matchs à la une ! 🙌🏼</h3>
    <swiper-container slidesPerView="auto" :spaceBetween="20" :autoplay="{delay: 2000, disableOnInteraction: false}" :loop="true" :pagination="true" :autoHeight="true">
        <swiper-slide v-for="game in data" :key="game.id">
            <div class="item">
                <div class="status">
                    <span v-if="game.party.live">live</span>
                </div>

                <div class="detail">
                    <h3>{{game.player_1.name}}</h3>
                    <img src="~/assets/svg/versus.png" />
                    <h3>{{game.player_2.name}}</h3>
                </div>

                <div class="score">
                    <div>
                        <p>{{game.party.score.player_1}}</p>
                        <span>:</span>
                        <p>{{game.party.score.player_2}}</p>
                    </div>

                    <p class="name">Jeux: {{game.party.game}}</p>
                </div>

                <button class="primary">Consulter</button>
            </div>
        </swiper-slide>
    </swiper-container>

    <div class="coin-grid">
        <img class="_1" src="~/assets/svg/coin.svg" />
        <img class="_2" src="~/assets/svg/coin.svg" />
    </div>
</div>
</template>

<script>
import SwiperContainer from '../Swiper/SwiperContainer.vue'
import SwiperSlide from '../Swiper/SwiperSlide.vue'

export default {
    components: {
        SwiperContainer,
        SwiperSlide
    },
    name: "MatchSwiper",
    data() {
        return {
            data: [{
                    id: 0,
                    player_1: {
                        name: "alphagameX",
                    },
                    player_2: {
                        name: "alphaOmega"
                    },

                    party: {
                        live: false,
                        game: "Fifa 21",
                        score: {
                            player_1: 3,
                            player_2: 1
                        }
                    }
                },
                {
                    id: 1,
                    player_1: {
                        name: "drazer41",
                    },
                    player_2: {
                        name: "gotaga"
                    },

                    party: {
                        live: true,
                        game: "Fifa 21",
                        score: {
                            player_1: 5,
                            player_2: 0
                        }
                    }
                },
                {
                    id: 2,
                    player_1: {
                        name: "michou",
                    },
                    player_2: {
                        name: "Doigby"
                    },

                    party: {
                        live: true,
                        game: "Fifa 21",
                        score: {
                            player_1: 5,
                            player_2: 0
                        }
                    }
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.current-match {
    border-radius: 30px;
    position: relative;
    width: auto;
    flex-direction: column;
    padding-top: 70px;
    padding-bottom: 70px;

    >h3 {
        z-index: 1;
        text-transform: uppercase;
        text-align: center;
        font-size: 2.4rem;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .item {
        width: 400px;
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.5);
        margin: 20px 10px;
        border-radius: 20px;
        padding: 10px;

        .status {
            min-height: 25px;
            display: flex;
            justify-content: flex-end;

            span {
                font-size: 1rem;
                color: white;
                font-weight: 800;
                background: #ff1717;
                border-radius: 20px;
                padding: 0 10px;
                animation: pulse 1s infinite ease-in-out;
            }
        }

        .detail {
            font-size: 1.17em;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            h3:first-of-type {
                position: relative;
                top: -15px;
            }

            h3:last-of-type {
                position: relative;
                top: 15px;
            }

            img {
                margin: 0 5px;
                width: 30px;
            }
        }

        .score {
            width: 100%;

            >div {
                margin-top: 10px;
                display: flex;
                align-items: center;
                justify-content: center;

                p {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #ff1717;
                    margin: 0 10px;
                }
            }

            .name {
                margin-left: 10px;
                font-size: 0.8rem;
                color: grey;
                font-weight: 500;
                margin-bottom: 5px;
            }
        }

        button.primary {
            margin-bottom: 6px;
            font-size: 1rem;
        }
    }

    .coin-grid {
        ._1 {
            position: absolute;
            top: 40px;
            left: 0;
            width: 200px;
            transform: rotateZ(-30deg);
            position: absolute;
        }

        ._2 {
            width: 150px;
            bottom: -20px;
            position: absolute;
            right: 24px;
            transform: rotateZ(35deg);
        }
    }
}
</style>
