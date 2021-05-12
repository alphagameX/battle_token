
export const state  = () => ({
    token: null,
    club: null
})

export const mutations = {
    setToken(store, token) {
        if(this.$cookies.get('token') == undefined)
            this.$cookies.set('token', token)
        store.token = token
    },

    setClub(store, club) {
        store.club = club
    },

    clearAuth(store) {
        store.token = null,
        store.club = null
    }
}

export const getters = {
    isAuth(store) {
        return store.token != null && store.club != null
    },

    authClub(store) {

        let club = {...store.club}

        club['profil'] = process.env.SERVER_URL + club.profil

        return club
    }
}


export const actions = {
    tryToAuth({state, commit}, club) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/club/auth/login', club).then(({data}) => {
                if(data.error != undefined) {
                    reject(data)
                }
                commit('setToken', data.access_token)
                commit('setClub', data.club)
                resolve(data)
            }).catch((e) => {
                debugger
            })
        })
    },

    getTokenCookie() {
        return this.$cookies.get('token') ?? null
    },

    getClubData({state}) {
        const headers = {
            headers: {
                Authorization: `Bearer ${state.token}`
            }
        }

        return new Promise((resolve, reject) => {
            this.$axios.get('/club/auth/data', headers).then((e) => {
                resolve(e.data)
            }).catch(() => {
                reject(null)
            })
        })
    },

    async logout({state, dispatch, commit}) {        
        const token = await dispatch('getTokenCookie')
        const headers = {
            headers: {
                Authorization: `Bearer ${state.token}`
            }
        }
        if(token != undefined) {
            this.$axios.get('/club/auth/logout', headers).then((e) => {
                this.$cookies.remove('token')
                this.$router.push('/')

                setTimeout(() => {
                    commit('clearAuth')
                }, 500)
            })
        }
    }
}

