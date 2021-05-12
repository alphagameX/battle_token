<template>
<tutorial-model :parent="$parent" :timeToInteract="10">

    <div ref="target" id="target" class="submit">

        <div v-if="!loading">
            <h3>Vous etes sur le point de crée de votre <span>@BattleToken</span> Club</h3>
            <p>le nom du club ne pourra plus etre changer par la suite, etes vous sur ?</p>
            <vs-checkbox color="#ff4657" v-model="condition">
                Acceptez les conditions <span v-if="error">requis !</span>
            </vs-checkbox>
            <button class="primary" @click="submit()">Crée mon club</button>
        </div>

        <div ref="load"></div>
    </div>
</tutorial-model>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
import PopupTutorial from '../Popup/PopupTutorial.vue'
import TutorialModel from './TutorialModel.vue'

export default {
    components: {
        TutorialModel,
        PopupTutorial
    },
    name: "TutorialSubmit",
    data() {
        return {
            success: false,
            loading: false,
            condition: false,
            error: false
        }
    },
    computed: {
        ...mapGetters({
            getClub: 'club/getClub'
        })
    },
    methods: {
        ...mapActions({
            createClub: 'club/createClub',
            tryToAuth: 'auth/tryToAuth'
        }),
        submit() {
            if (this.condition == false) {
                this.error = true
                return;
            }
            this.loading = true
            const loading = this.$vs.loading({
                target: this.$refs.load,
                type: 'square',
                color: '#ff4657',
            })
            this.createClub().then(() => {

                this.tryToAuth({
                    email: this.getClub.email.value,
                    password: this.getClub.password.value
                }).then(() => {
                    loading.close()
                    console.log(this.getClub)
                    this.$router.push('/dashboard')
                    this.$vs.notification({
                        position: 'top-right',
                        duration: 10000,
                        content: PopupTutorial
                    })
                })
            })
        }
    }
}
</script>

<style lang="scss">
.submit {
    padding: 0 20px;

    .vs-loading {
        position: relative;
    }

    div:first-child {
        display: flex;
        flex-direction: column;

        h3 {
            margin-bottom: 10px;

            span {
                font-weight: bold;
                color: $color1;
            }
        }

        p {
            margin-bottom: 25px;
            color: red;
        }

        .vs-checkbox-content {
            span {
                margin-left: 5px;
                color: $color1;
            }

            margin-bottom: 10px;
        }
    }
}
</style>
