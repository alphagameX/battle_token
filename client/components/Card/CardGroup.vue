<template>
  <div class="card__container">
    <div class="card__group">
        <transition-group name="card">
            <card v-for="(card, index) in data" :key="card.id"
                :title="card.title"
                :comment="card.comment"
                :image="card.image"
                :content="card.content">
                <template v-slot:change v-if="index == 0">
                    <button @click="next()">
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </button>
                </template>
            </card>
        </transition-group>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
    components: { Card },
    name: "CardGroup",
    data() {
        return {
            data: [
                {
                    id: 0,
                    title: "Un nouveau depart !",
                    content: "Voici la nouvelle appli d'esport en ligne, simple et amusante, redecouvrer l'envie de gagner sur @BattleToken",
                    image: require('~/assets/footage/fut-card.jpeg'),
                    comment: 60
                },
                {
                    id: 1,
                    title: "c'est cool quand meme",
                    content: "Voici la nouvelle appli d'esport en ligne, simple et amusante, redecouvrer l'envie de gagner sur @BattleToken",
                    image: require('~/assets/footage/fut-card.jpeg'),
                    comment: 60
                },
                {
                    id: 2,
                    title: "putain mec",
                    content: "Voici la nouvelle appli d'esport en ligne, simple et amusante, redecouvrer l'envie de gagner sur @BattleToken",
                    image: require('~/assets/footage/fut-card.jpeg'),
                    comment: 60
                }
            ]
        }
    },
    methods: {
        next(e) {
            let tmp = this.data[0]
            this.data.splice(0, 1)
            setTimeout(() => {
                this.data.push(tmp)
            }, 500)
        }
    }
}
</script>

<style lang="scss" scoped>
    .card__container {
        display: flex;
        width: -webkit-fill-available;
        justify-content: center;
        
       .card__group {
           position: relative;
           @media(max-width: 950px) {
               margin-left: 30px;
           }

            .card:nth-child(1) {
                top: 0;
                left: 0;
                position: relative;
                z-index: 3;
                display: block !important;
            }

            .card:nth-child(2) {
                position: absolute;
                z-index: 2;
                display: block !important;
                top: -20px;
                left: -20px;
            }

            .card {
                transition: left 0.4s, top 0.4s;
                display: none;
            }
       }

        .card-enter-active, .card-leave-active {
            transition: all 0.4s !important;
        }
        .card-enter, .card-leave-to /* .list-leave-active below version 2.1.8 */ {
            opacity: 0;
            transform: translateX(50px) rotateZ(5deg);
        }

       
    }
</style>