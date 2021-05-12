
// store server init
export default {
    actions: {
        async nuxtServerInit ({ commit, dispatch, app }, { req }) {
            let token = await dispatch('auth/getTokenCookie')
        
            if(token != undefined || token != undefined) {
                commit('auth/setToken', token)

                const response = await dispatch('auth/getClubData').catch(() => {
                    app.$cookies.remove('token')
                })

                if(response != null) {
                    commit('auth/setClub', response)
                }
            }
        }
    }
}