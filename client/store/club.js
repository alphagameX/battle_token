export const state = () => ({
  club: {
      email: {
        value: "",
        valid: false
      },
      username: {
        value: "",
        valid: false
      },
      background: {
        value: "",
        valid: true
      },
      profil: {
        value: "",
        valid: true
      },
      sex: {
        value: "0",
        valid: true
      },
      name: {
        value: "",
        valid: false
      },
      password: {
        value: "",
        valid: false
      },
      country: {
        value: "",
        valid: true
      }
  }
})

  
export const mutations = {
  setClub(store, {key , value}) {
    if(store.club[key] != undefined) {
      store.club[key].value = value
    } else {
      return false
    }
  },

  setValid(store, {key, value}) {
    store.club[key].valid = !value
  }
}

export const getters = {
  getClub(store) {
    return store.club
  }
}

export const actions = {

  /**
   * 
   * @param {*} param0 
   * @param {Array<String>} keys 
   * @returns 
   */
  isCompleted({getters}, keys) {
    let completed = true
    let club = getters.getClub

    keys.forEach((key) => {
      if(club[key].value.length == 0 || club[key].valid == false) {
        completed = false
      }
    })
    return completed
  },

  checkBunchOfField(state, key) {
  
    let club = state.getters.getClub[key]

    return new Promise((resolve) => {

        if(key != "email" && key != "username" && key != "name" && key != "password") {
          resolve()
          return;
        }

        this.$axios.post('/club/create/check', {key: key, value: club.value}).then((e) => {
          state.commit('setValid', {
            key: key,
            value: e.data[0]
          })
          resolve()
        })
    })
  },

  createClub({getters}) {
    let club = getters.getClub
    let formData = new FormData()

    Object.keys(club).forEach((key) => {
      formData.append(key, club[key].value)
    })

    return new Promise((resolve) => {
      this.$axios.post('/club/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }).then((e) => {
        resolve(e.data)
      }).catch((e) => {
        debugger
      })
    })
  }
}