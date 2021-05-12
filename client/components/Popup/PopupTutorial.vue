<template>
<div class="notif">
    <h3>Félicitations <span>{{club.username.value}}</span></h3>
    <p>vous avez crée le club: {{club.name.value}}</p>
    <p>il est temps d'allez affontrez d'autre joueur ! <span @click="goBattle()">GO</span></p>
</div>
</template>

<script>
export default {
    name: "PopupTutorial",
    data() {
        return {
            club: null,
        }
    },
    methods: {
        goBattle() {
            this.$nuxt.$router.push('/')
        }
    },
    beforeMount() {
        this.club = this.$nuxt.$store.getters['club/getClub']
        console.log(this.club)
    }
}
</script>

