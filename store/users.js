import axios from 'axios'

export const state = {
  users: [],
  errorGetUsers: false
}

export const getters = {
  byUsers: state => state.users
}

export const mutations = {
  updateUsers(state, users) {
    users.forEach(user => state.users.push(user))
  },

  updateErrorGetUsers(state, value) {
    state.errorGetUsers = value
  },
}

export const actions = {
  async getUsers({ commit }) {
    try {
      const response =
        await axios.get('https://randomuser.me/api/?results=10&inc=id,picture,name,dob,email,phone,location')
      commit('updateUsers', response.data.results)
    } catch (e) {
      console.log('error caught')
    }
  }
}
