<template>
<div id="login">

    <button class="primary" @click="active=!active">
        active
    </button>

    <vs-dialog blur v-model="active" class="login__form">
        <template #header>
            <h4 class="not-margin">
                Bon retour parmis nous !
            </h4>
            <p class="error" v-if="error">{{error}}</p>
        </template>

        <div class="content__login">
            <vs-input class="email" placeholder="Votre email ou username" v-model="email" @input="error = ''">
                <template #icon>
                    <i class="fas fa-at"></i>
                </template>
            </vs-input>

            <vs-input class="password" placeholder="Votre mot de passe" type="password" v-model="password" @input="error = ''">
                <template #icon>
                    <i class="fas fa-lock"></i>
                </template>
            </vs-input>
        </div>

        <template #footer>
            <button class="primary" @click="login">
                connexion
            </button>
        </template>
    </vs-dialog>
</div>
</template>

<script>
import {
    mapActions,
    mapMutations,
    mapState
} from 'vuex'

export default {
    //name: "GlobalLogin",
    data() {
        return {
            active: false,
            error: false,
            email: "arthurtweak@gmail.com",
            password: "06112001..Arthur"
        }
    },

    computed: {
        ...mapState('auth', [
            'token'
        ])
    },

    methods: {
        ...mapActions({
            tryToAuth: 'auth/tryToAuth'
        }),
        ...mapMutations({
            setToken: 'auth/setToken',
            setClub: 'auth/setClub'
        }),
        login() {
            this.tryToAuth({
                email: this.email,
                password: this.password
            }).then((e) => {
                this.active = !this.active
                setTimeout(() => {
                    this.$parent.sidebar = false
                    this.$router.push('/dashboard')
                }, 250)
            }).catch((e) => {
                console.log("catch: ", e)
                this.error = e.msg 
            })

        }
    },
    mounted() {
       
    }
}
</script>

<style lang="scss" scoped>
#login {
    .global {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column
    }
}

.login__form {
    .vs-dialog {
        .content__login {
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 10px;

            .email {
                margin-bottom: 10px;
            }
        }

        footer.vs-dialog__footer {
            button.primary {
                margin: 10px 0;
                font-size: 1rem;
            }
        }
    }
}
</style>
