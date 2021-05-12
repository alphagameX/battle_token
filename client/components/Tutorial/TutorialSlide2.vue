<template>
<tutorial-model :parent="$parent" :timeToInteract="10" content="full">
    <div class="tuto__slide__register">
        <h1>Creation du votre club</h1>

        <div class="form">

            <p>c'est ici que vous allez donner une identité à votre club, certain champs seront definitif, alors choisissez bien !</p>

            <div class="cell">
                <vs-input placeholder="Nom du club" @input="editClub($event, 'name')" :value="getClub.name.value" autocomplete="off">
                    <template #icon>
                        <i class="far fa-address-card"></i>
                    </template>
                    <template #message-success v-if="getClub.name.value != '' && getClub.name.valid">
                        Nom de club valide !
                    </template>
                    <template #message-danger v-else-if="getClub.name.value != '' && !getClub.name.valid ">
                        Nom du club invalide ou manquant
                    </template>
                </vs-input>

                <vs-input placeholder="Pseudo du joueur" @input="editClub($event, 'username')" :value="getClub.username.value" autocomplete="off">
                    <template #icon>
                        <i class="far fa-user"></i>
                    </template>
                    <template #message-success v-if="getClub.username.value != '' && getClub.username.valid">
                        Username disponible !
                    </template>
                    <template #message-danger v-else-if="getClub.username.value != '' && !getClub.username.valid ">
                        Nom du club invalide ou manquant
                    </template>
                </vs-input>
            </div>

            <div class="cell">

                <h3>Dans quel pays est votre club ?</h3>

                <vs-select color="#ff4657" placeholder="Select" @input="editClub($event, 'country')" :value="getClub.country.value">
                    <vs-option label="France" value="France">
                        France
                    </vs-option>
                    <vs-option label="Bresil" value="Bresil">
                        Bresil
                    </vs-option>
                    <vs-option label="Angleterre" value="Angleterre">
                        Angleterre
                    </vs-option>
                </vs-select>
            </div>

            <div class="group">
                <h3>Vous jouer chez les ?</h3>
                <div class="cell">
                    <vs-radio color="#ff4657" @input="editClub($event, 'sex')" :value="getClub.sex.value" val="0"><i class="fas fa-mars"></i> Homme</vs-radio>
                    <vs-radio color="#ff4657" @input="editClub($event, 'sex')" :value="getClub.sex.value" val="1"><i class="fas fa-venus"></i> Femme</vs-radio>
                </div>
            </div>

            <div class="group">
                <h3>Entrez vos données de connexion</h3>
                <div class="cell">
                    <vs-input placeholder="Votre email" @input="editClub($event, 'email')" :value="getClub.email.value" autocomplete="off">
                        <template #icon>
                            <i class="fas fa-at"></i>
                        </template>
                        <template #message-success v-if="getClub.email.value != '' && getClub.email.valid">
                            Email valide
                        </template>
                        <template #message-danger v-else-if="getClub.email.value != '' && !getClub.email.valid ">
                            Email incorrect ou déjà utilisé
                        </template>
                    </vs-input>

                    <vs-input type="password" @input="editClub($event, 'password')" :value="getClub.password.value" placeholder="Password" :visiblePassword="showPass" icon-after @click-icon="showPass = !showPass">
                        <template #icon>
                            <i v-if="!showPass" class="fas fa-lock"></i>
                            <i v-else class="fas fa-unlock"></i>
                        </template>
                        <template #message-success v-if="getClub.password.value != '' && getClub.password.valid">
                            Bon mot de passe
                        </template>
                        <template #message-danger v-else-if="getClub.password.value != '' && !getClub.password.valid ">
                            une lettre, un chiffre, 8 charactere !
                        </template>

                    </vs-input>
                </div>
            </div>

        </div>
    </div>
</tutorial-model>
</template>

<script>
import TutorialModel from './TutorialModel.vue'
import {
    mapMutations,
    mapGetters,
    mapActions
} from "vuex"

export default {
    components: {
        TutorialModel
    },
    name: "TutorialSlide2",
    data() {
        return {
            keys: [
                'email', 'name', 'username', 'password', 'sex', 'country'
            ],
            showPass: false,
            validField: true,
            name: false
        }
    },
    computed: {
        ...mapGetters({
            getClub: 'club/getClub'
        }),
    },
    methods: {
        ...mapActions({
            isCompleted: 'club/isCompleted',
            checkBunchOfField: 'club/checkBunchOfField'
        }),
        ...mapMutations({
            setClub: 'club/setClub'
        }),

        toggleDisable(is) {
            if (is) {
                this.$parent.$refs.next.classList.remove('disable')
            } else {
                this.$parent.$refs.next.classList.add('disable')
            }
        },
        async editClub(e, target) {
            /*NEED TO SET FIRST*/
            this.setClub({
                key: target,
                value: e
            })

            /*CAN CHECK THE VALID IN DB*/
            this.checkBunchOfField(target).then(() => {
                this.isCompleted(this.keys).then((is) => {
                    this.toggleDisable(is)
                })
            })
        }
    },

    mounted() {
        this.isCompleted(this.keys).then((is) => {
            this.toggleDisable(is)
        })

        console.log(this.getClub)
    }

}
</script>

<style lang="scss">

</style>
