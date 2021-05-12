<template>
<tutorial-model :parent="$parent" :timeToInteract="3" content="full">
    <div class="tuto__slide__register">
        <h1>Customizons votre club</h1>

        <div class="form">
            <div class="group">
                <h3>Choisissez une image de profil pour votre club !</h3>
                <div class="cell">
                    <input type="file" @input="getFile($event.target)" ref="file" accept="image/png, image/jpeg" />

                    <div class="vs-input__message vs-input__message--success" v-if="fileError == false && hasFile != ''">
                        Fichier valide
                    </div>
                    <div class="vs-input__message vs-input__message--danger" v-else-if="fileError != false && hasFile != ''">
                        Fichier invalide ou manquant (taille, extension)
                    </div>

                </div>
            </div>

            <div class="group">
                <h3>Choisissez une baniere provisoir pour votre club !</h3>
                <div class="cell cell-3">
                    <vs-radio v-for="(image,index) in background" :key="index" color="#ff4657" @input="editClub($event, 'background')" :val="image" :value="getClub.background.value" class="flex">
                        <img :src="image" />
                    </vs-radio>
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
    async fetch() {
        this.background = (await this.$axios.get('media/background')).data
    },
    components: {
        TutorialModel
    },
    name: "TutorialSlide3",
    data() {
        return {
            keys: [
                'profil', 'background'
            ],
            fileError: false,
            hasFile: "",
            background: []
        }
    },
    computed: {
        ...mapGetters({
            getClub: 'club/getClub'
        })
    },
    methods: {
        ...mapActions({
            isCompleted: 'club/isCompleted'
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
        editClub(e, target) {
            this.setClubAndCheck(e, target)
        },
        getFile(e) {

            const file = e.files[0]
            this.fileError = false
            this.hasFile = e.value

            if (file.size / 1024 > 1000) {
                this.fileError = "ce fichier est trop grand"
            }
            if (file.type != "image/png" && file.type != "image/jpg" && file.type != "image/jpeg") {
                this.fileError = "ce fichier n'a pas le bon type"
            }

            if (this.fileError != false)
                this.$refs.file.value = ""
            else
                this.setClubAndCheck(file, "profil")
        },

        async setClubAndCheck(e, target) {
            this.setClub({
                key: target,
                value: e
            })
            this.toggleDisable(await this.isCompleted(this.keys))
        }
    },

    mounted() {
        this.isCompleted(this.keys).then((is) => {
            this.toggleDisable(is)
        })

        console.log(this.$refs.file.value)
    }

}
</script>

<style lang="scss" scoped>

    
</style>
