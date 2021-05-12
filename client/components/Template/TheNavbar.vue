<template>
<div class="navbar">
    <button class="secondary" @click="toggleSideBar()">
        <i class="fas fa-bars"></i>
    </button>

    <transition name="sidebar">
        <div v-if="sidebar" class="sidebar">

            <dashboard-panel-user v-if="isAuth == true" navbar />
            <global-login v-else />

            <ul>
                <li>
                    <nuxt-link to="dashboard">Dashboard</nuxt-link>
                </li>
            </ul>
        </div>
    </transition>

    <transition name="filter">
        <div class="filter" v-if="sidebar" @click="toggleSideBar()"></div>
    </transition>

</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'

import DashboardPanelUser from '../Dashboard/DashboardPanel/DashboardPanelUser.vue'
import GlobalLogin from '../Global/GlobalLogin.vue'

export default {
    name: "TheNavbar",
    components: {
        DashboardPanelUser,
        GlobalLogin
    },
    data() {
        return {
            sidebar: false
        }
    },
    computed: {
        ...mapGetters('auth', [
            'isAuth'
        ])
    },
    methods: {
        toggleSideBar() {
            this.sidebar = !this.sidebar
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    pointer-events: none;
    z-index: 10;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: flex-end;

    button {
        pointer-events: all;
        margin: 20px 20px 0 0;
        display: flex;
        align-items: center;
        background-color: white;
        border: none;

        i {
            font-size: 2.4rem;
        }
    }

    .sidebar {
        pointer-events: all;
        background-color: white;
        position: absolute;
        width: 300px;
        height: 100vh;
        z-index: 1;
        left: 0;

        ul {
            margin-top: 30px;
            margin-left: 20px;
            padding-left: 20px;

            li {
                a {
                    transition: 0.3s all ease;
                    cursor: pointer;
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: black;
                    text-decoration: none;

                    &:hover {
                        color: $color1;
                    }
                }
            }
        }
    }

    .filter {
        pointer-events: all;
        top: 0;
        left: 0;
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0.5;
        z-index: 0;
    }

    .sidebar-enter-active,
    .sidebar-leave-active {
        transition: left .5s;
    }

    .sidebar-enter,
    .sidebar-leave-to

    /* .fade-leave-active below version 2.1.8 */
        {
        left: -300px;
    }

    .filter-enter-active,
    .filter-leave-active {
        transition: opacity .5s;
    }

    .filter-enter,
    .filter-leave-to

    /* .fade-leave-active below version 2.1.8 */
        {
        opacity: 0;
    }
}
</style>
