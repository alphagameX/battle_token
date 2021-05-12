<template>
<div class="tutorial">

    <div class="left__side"></div>

    <div class="right__side">

        <div class="coin__grid">
            <img class="_1" src="~/assets/svg/coin.svg" />
            <img class="_2" src="~/assets/svg/coin.svg" />
            <img class="_3" src="~/assets/svg/coin.svg" />
        </div>

        <div class="render__tutorial">
            <transition name="slide" v-on:leave="leave" v-on:enter="enter">
                <component :is="componentSlide[currentSlide]" v-if="done" />
            </transition>
        </div>

        <div class="control" v-if="currentSlide != componentSlide.length - 1">
            <div>
                <button class="secondary" v-if="currentSlide > 0" @click="prevSlide()">Précedant</button>
                <button class="primary" @click="nextSlide()" ref="next">Suivant</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import TutorialModel from '../components/Tutorial/TutorialModel.vue'
import TutorialSlide1 from '../components/Tutorial/TutorialSlide1.vue'
import TutorialSlide2 from '../components/Tutorial/TutorialSlide2.vue'
import TutorialSlide3 from '../components/Tutorial/TutorialSlide3.vue'
import TutorialSubmit from '../components/Tutorial/TutorialSubmit.vue'

export default {
    components: {
        TutorialModel,
        TutorialSlide1,
        TutorialSlide2,
        TutorialSlide3,
        TutorialSubmit
    },
    layout: "home",
    middleware({
        store,
        redirect
    }) {
        if (store.getters['auth/isAuth']) {
            return redirect('/dashboard')
        }
    },
    data() {
        return {
            value: "",
            componentSlide: [
                TutorialSlide1, TutorialSlide2, TutorialSlide3, TutorialSubmit
            ],
            complete: true,
            dir: null,
            done: true,
            currentSlide: 0
        }
    },
    watch: {
        currentSlide: function (val) {
            if (val == this.componentSlide.length - 1)
                console.log("need to submit")
        }
    },
    methods: {
        nextSlide() {
            if (this.complete) {
                this.dir = "next"
                this.done = false
                this.complete = false
                this.currentSlide++
                this.$refs.next.classList.remove('bounce')
            }
        },
        prevSlide() {
            if (this.complete && this.currentSlide > 0) {
                this.dir = "prev"
                this.done = false
                this.complete = false
                this.currentSlide--
                this.$refs.next.classList.remove('bounce')
            }
        },
        enter(el, done) {
            el.animate([{
                opacity: 0,
                transform: this.dir == "next" ? 'translateX(40px)' : 'translateX(-40px)'
            }, {
                opacity: 1,
                transform: 'translateX(0)'
            }], 400).finished.then(() => {
                this.complete = true
            })
        },
        leave(el, done) {
            el.animate([{
                opacity: 1,
                transform: 'translateX(0)'
            }, {
                opacity: 0,
                transform: this.dir == "next" ? 'translateX(-40px)' : 'translateX(40px)'
            }], 400).finished.then(() => {
                el.remove()
                this.done = true
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.tutorial {
    width: 100vw;
    height: 100vh;

    @media (max-width: 650px) {
        height: auto;
    }

    .left__side {
        position: relative;
        float: right;
        width: 40%;
        height: 100%;
        background: url('~/assets/footage/tutorial.jpeg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: right;

        @media (max-width: 1050px) {
            position: absolute;
            left: 0;
            z-index: 1;
            width: 60%;
        }

        @media (max-width: 650px) {
            width: 100%;
            position: fixed;
        }
    }

    .right__side {
        
        background: white;
        overflow-x: hidden;
        position: relative;
        float: left;
        width: 60%;
        height: 100%;

        @media (max-width: 1050px) {
            float: right;
            width: 80%;
        }

        @media (max-width: 800px) {
            width: 100%;
        }

        @media (max-width: 650px) {
            overflow: hidden;
        }

        .render__tutorial {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 650px) {
                margin-top: 100px;
            }

            @media(max-height: 700px) {
                height: auto;
            }

            .submit {}
        }

        .control {
            transition: all 0.6s;
            user-select: none;
            z-index: 2;
            position: absolute;
            bottom: 20px;
            right: 58px;

            button {
                margin-left: 10px;

                &.bounce {
                    animation: pulse 2s ease-in infinite;
                }

                &.disable {
                    cursor: default;
                    pointer-events: none;
                    filter: grayscale(1) !important;
                }

                @media(max-width: 480px) {
                    font-size: 1.2rem;
                }
            }

            @media (max-width: 650px),
            (max-height: 850px) {
                position: relative;
                bottom: unset;
                right: unset;
                margin: 0 20px;
                padding: 20px 20px 30px 20px;

                >div {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    button {
                        margin: 0 10px;
                        width: 50%;
                    }
                }
            }

            @media(max-height: 700px) {
                margin-top: 20px !important;
            }

            @media (max-height: 850px) and (min-width: 650px) {
                margin: 0 60px;
                padding: 0;
                padding-bottom: 40px;
            }
        }

        .coin__grid {
            ._1 {
                top: 83px;
                transform: rotateZ(38deg);
                right: 7px;
                position: absolute;
                width: 130px;
                z-index: 2;

                @media(max-width: 750px) {
                    //bottom: -30px;
                    top: 42px;
                    right: -22px;
                }
            }

            ._2 {
                position: absolute;
                bottom: 40px;
                left: 18%;
                width: 150px;
                transform: rotateZ(-16deg);
                z-index: 2;

                @media(max-height: 850px) {
                    bottom: 20px;
                }
            }

            ._3 {
                position: absolute;
                top: 93px;
                left: 9px;
                width: 120px;
                transform: rotateZ(-54deg);
                z-index: 2;

                @media(max-width: 750px) {
                    top: 60px;
                    left: -34px;
                }
            }
        }
    }
}
</style>
