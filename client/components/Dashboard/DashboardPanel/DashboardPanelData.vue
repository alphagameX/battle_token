<template>
<div class="side">
    <div class="wallet">
        <p>Mon wallet</p>
        <h3>{{authClub.cbt}}<span>CBT</span></h3>
    </div>

    <div class="fan">
        <p>Vos avez</p>
        <h3>{{authClub.fan}} <span>FAN</span></h3>
    </div>

    <div class="match__win">
        <p>Matchs gagné</p>
        <h3>{{authClub.match_win}}</h3>
    </div>

    <div class="match__lose">
        <p>Matchs perdu</p>
        <h3>{{authClub.match_lose}}</h3>
    </div>

</div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: "DashboardPanelData",
    computed: {
        ...mapGetters('auth', [
            'authClub'
        ])
    }
}
</script>

<style lang="scss">
.side {
    display: grid;
    grid-template-columns: 1fr;

    >div {
        color: #4028ed;
        margin: 10px 10px 0 10px;
        border-radius: 20px;
        background-color: white;
        width: 190px;
        padding: 10px 0;
        height: fit-content;

        p {
            color: black;
            font-size: 10px;
            margin-left: 30px;
        }

        h3 {
            display: flex;
            justify-content: space-between;
            font-weight: 600;
            margin-left: 30px;

            span {
                font-weight: 600;
                margin-right: 15px;
            }
        }
    }

    @media(max-width: 850px) {
        margin: 10px 10px 0 10px;
        grid-template-columns: 1fr 1fr;
        row-gap: 10px;
        column-gap: 10px;

        >div {
            justify-self: center;
            margin: 0;
            width: 100%;
        }
    }
}
</style>
