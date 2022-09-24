export const state = {
  token: JSON.parse(localStorage.getItem('token')),
  user: {
    email: 'admin@example.com',
    password: 'Qwerty12345'
  },
  error: false,
  screen: false
}

export const getters = {
  hasToken: s => !!s.token
}

export const mutations = {
  setToken(state, token) {
    state.token = token
    localStorage.setItem('token', JSON.stringify(state.token))
  },

  clearToken(state) {
    state.token = null
    localStorage.setItem('token', JSON.stringify(state.token))
  },

  updateErrors(state, value) {
    state.error = value
  }
}

export const actions = {
  login({ commit }) {
    commit('setToken', 'g3n@f23134jd^U^%fyV')
  },

  logout({ commit }) {
    commit('clearToken')
  },
}
