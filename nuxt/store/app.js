import axios from 'axios'

export const state = () => ({
  query: '',
  results: {},
  loading: false
})

export const getters = {
  query(state) {
    return state.query
  },
  results(state) {
    return state.results
  },
  loading(state) {
    return state.loading
  }
}

export const mutations = {
  query: (state, value) => { state.query = value },
  results: (state, value) => { state.results = value },
  loading: (state, value) => { state.loading = value }
}

export const actions = {
  results: async (context) => {
    context.commit('loading', true)
    await axios.get(
        `http://localhost:3001/spotify/v1/search?q=${encodeURIComponent(context.getters['query'])}`
      ).then(({ data }) => {
        context.commit('results', data)
        context.commit('loading', false)
      }).catch((error) => {
        console.log(error)
        context.commit('loading', false)
      })
  },
  query: (context, value) => {
    context.commit('query', value)
  }
}