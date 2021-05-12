<template>
<div class="club" :class="{navbared: navbared}" :style="{backgroundImage: `url(${authClub.background})`}">
    <div class="user">
        <img :src="authClub.profil" />
        <h3>{{authClub.name}}</h3>
        <p>{{authClub.username}}</p>
    </div>
</div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: "DashboardPanelUser",
    props: ['navbar'],
    computed : {
        ...mapGetters('auth', [
            'authClub'
        ]),
        navbared () {
            if(this.$props.navbar == undefined)
                return false
            return true
        }
    }
}
</script>

<style lang="scss">
.club {
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    height: 200px;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: flex-end;

    .user {
        border-top-right-radius: 40px;
        background-color: white;
        //background: linear-gradient(90deg, rgba(255,255,255,0) 0%, white 100%);
        width: 200px;
        display: flex;
        align-items: center;
        flex-direction: column;

        img {
            margin-top: 20px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
        }

        >h3 {
            margin-top: 10px;
            font-size: 1rem;
            color: white;
            font-weight: 800;
            background: #ff4657;
            border-radius: 20px;
            padding: 0 10px;
        }

        >p {
            margin-top: 10px;
            margin-bottom: 10px;
            font-weight: 500;
            font-size: 13px;
        }
    }

    &.navbared {
        border-radius: 0;
        .user {
            border-radius: 0;
            width: fit-content;
            padding: 0 30px ;
        }
    }
}
</style>
