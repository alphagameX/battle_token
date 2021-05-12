<template>
<div class="menu">
    <global-logo />

    <div class="tool">
        <ul>
            <li v-for="(page, index) in pages" :key="index" @click="changePage(index)" :class="{active: page == pages[i]}">
                {{page}}
            </li>
        </ul>
    </div>

    <div class="bottom">

        <div class="logout" @click="logout()">
            <button>
                déconnexion
                <i class="fas fa-sign-out-alt"></i>
            </button>
        </div>

        <div class="create" @click="create = !create">
            <div>
                <i class="fas fa-plus"></i>
                <i class="fas fa-ellipsis-v"></i>
            </div>

            <h3>Crée une<br>confrontation</h3>
            <p>et defié le monde entier</p>
        </div>
    </div>

    <transition name="fade">
        <component :is="test" v-if="create" />
    </transition>

</div>

</template>

<script>


import { mapActions } from 'vuex'

import GlobalLogo from '../../Global/GlobalLogo.vue'
import DashboardMenuConfrontation from './DashboardMenuConfrontation.vue'


export default {
    name: "DashboardMenu",
    components: {
        GlobalLogo,
        DashboardMenuConfrontation
    },
    data() {
        return {
            test: DashboardMenuConfrontation,
            create: false,
            pages: [
                "Mon club",
                "Mes matchs",
                "Mes amis",
                "Réglage",
                "Messagerie"
            ],
            i: 0
        }
    },
    methods: {
        ...mapActions({
            logout: 'auth/logout'
        }),
        changePage(index) {
            this.i = index
            this.$parent.index = index
        }
    }
}
</script>

<style lang="scss">
.menu {
    position: relative;
    transition: 0.3s all ease-in;
    z-index: 1;
    border-radius: 40px;
    height: -webkit-fill-available;
    margin: 30px 0 30px 30px;
    min-width: 250px;
    background: linear-gradient(#a176e2, #453ff3);

    .logo__container h1 {
        margin-left: 5%;
        transform: scale(0.70);
    }

    .tool {
        margin-top: 10px;
        margin-left: 30px;
        padding-left: 30px;

        ul {
            li {
                transition: all 0.3s ease-in;
                cursor: pointer;
                color: white;
                font-weight: 500;
                font-size: 1.25rem;
                margin-bottom: 10px;
                width: fit-content;
                border-radius: 20px;
                list-style: none;

                &:hover, &.active {
                    color: #ffc034;
                }
            }
        }
    }

    .bottom {
        position: absolute;
        width: -webkit-fill-available;
        bottom: 20px;

        .logout {
            margin-left: 30px;
            padding-left: 30px;
            button {
                background: none;
                border: none;
                outline: none;
                font-weight: 500;
                font-size: 1.25rem;
                padding: 20px 0;
                color: white;
                i {
                    margin-left: 5px;
                }
            }
        }

        .create {
            transition: all 0.6s;
            cursor: pointer;
            background-color: #d6d0ff;
            width: -webkit-fill-available;
            padding: 1px 0;
            margin: 0 20px;
            border-radius: 40px;
            color: #4028ed;

            >div:first-child {
                margin: 20px 30px 15px 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                i:first-child {
                    font-size: 2rem;
                }
            }

            >h3 {
                transition: all 0.5s ease-in-out;
                margin-left: 30px;
                font-weight: 600;
                margin-bottom: 4px;
            }

            >p {
                margin-left: 30px;
                font-size: 10px;
                margin-bottom: 20px;
            }

            &:hover {
                transform: scale(1.05);

                >h3 {
                    color: #6150ee85;
                }
            }
        }
    }
}
</style>
