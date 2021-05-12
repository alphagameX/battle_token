<template>
<div id="dashboard">
    <dashboard-menu />

    <div class="panel">
        <dashboard-panel-user />
        <component :is="page[index]" />
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import DashboardMenu from '../components/Dashboard/DashboardMenu/DashboardMenu.vue'
import DashboardPageMyClub from '../components/Dashboard/DashboardPage/DashboardPageMyClub.vue'
import DashboardPanelUser from '../components/Dashboard/DashboardPanel/DashboardPanelUser.vue'

export default {
    middleware: "authed",
    layout: "empty",
    components: {
        DashboardMenu,
        DashboardPanelUser,
        DashboardPageMyClub
    },
    data() {
        return {
            page: [
                DashboardPageMyClub
            ],
            index: 0
        }
    },
    computed: {
        ...mapState('auth', [
            'club',
            'token'
        ])
    },
    mounted() {
        // var channel = this.$pusher.subscribe('my-channel');
        // channel.bind('my-event', function(data) {
        //     alert(JSON.stringify(data));
        // });
    }
}
</script>

<style lang="scss">
#dashboard {
    background-color: #e5e5ff;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .panel {
        transition: all 0.4s ease-in;
        display: flex;
        flex-direction: column;
        position: relative;
        box-shadow: 0px 0px 80px 2px #00000014;
        border-radius: 40px;
        margin: 30px;
        background-color: #edeaff;
        width: 100%;
        height: -webkit-fill-available;

        .grid {
            display: flex;
            width: 100%;
            height: 100%;

            justify-content: flex-end;

            .center {
                @media(max-width: 950px) {
                    margin-left: 10px;
                    width: -webkit-fill-available;
                }
            }

            @media(max-width: 850px) {
                flex-direction: column-reverse;

                .center {
                    margin: 0 10px;
                }
            }
        }

        @media (max-width: 950px) {
            width: 100%;
            margin: 30px 30px 30px 10px;
        }
    }

}
</style>
