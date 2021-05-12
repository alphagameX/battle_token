<template>
<div>
    <div class="home">
        <div class="container">
            <card-group />
            <div class="home__title">
                <global-logo />
                <p>
                    Embarqué dans une experience enrichissante, faite des rencontres tout en misant votre honeur sur le terrain de jeux !
                </p>
                <nuxt-link to="/tutorial" class="primary start__play">
                    Commencez à jouer
                </nuxt-link>
            </div>
        </div>

        <div class="scroll">
            <i class="fas fa-arrow-circle-down"></i>
        </div>
    </div>
    <div class="pre">
        <match-swiper />
        <home-feature />
    </div>

    <div class="tutorial-container">
        <div class="tooltip">
            <h3>Nous rejoindre</h3>
            <p>
                Si vous souhaitez rejoindre @BattleToken, il vous suffit de crée un compte et de suivre le tutorial
            </p>

            <nuxt-link to="/tutorial">
                <button class="secondary">
                    Débuter l'aventure
                </button>
            </nuxt-link>

        </div>
    </div>

</div>
</template>

<script>
import CardGroup from '../components/Card/CardGroup.vue'
import GlobalLogo from '../components/Global/GlobalLogo.vue'
import HomeFeature from '../components/Home/HomeFeature.vue'
import MatchSwiper from '../components/Match/MatchSwiper.vue'

export default {
    layout: "home",
    components: {
        MatchSwiper,
        CardGroup,
        GlobalLogo,
        HomeFeature,
    },
    pageTransition: "page"
}
</script>

<style lang="scss" scoped>

.home {
    height: 100vh;
    width: 100vw;
    background-image: url('~/assets/footage/home-1.jpeg');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .container {
        @media(max-width: 950px) {
            flex-direction: column-reverse;

            .home__title {
                margin-bottom: 90px;
            }
        }

        .home__title {
            width: -webkit-fill-available;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            >p {
                width: 70%;
                color: white;
                text-align: center;
                margin: 10px 0;
                font-weight: 600;
            }

            .start__play {
                margin-top: 10px;
                text-decoration: none;
            }
        }
    }

    .scroll {
        position: absolute;
        bottom: 20px;
        color: white;
        font-size: 3rem;
        cursor: pointer;
        animation: loop 2s infinite ease;
    }
}

.pre {
    background-color: #e5e5ff;
    padding-top: 40px;
}

.tutorial-container {
    padding-top: 30px;
    background-position: center;
    background-size: cover;
    background-image: url('~/assets/footage/keyboard.jpeg');

    .tooltip {
        padding: 80px 50px;
        color: white;

        h3 {
            line-height: 78px;
            font-size: 4rem;
            font-weight: bold;
        }

        .secondary {
            margin-top: 20px;
        }
    }
}
</style>
