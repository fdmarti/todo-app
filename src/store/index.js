import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    entries : []
  },
  getters: {
    getEntries ( state ){
      return state.entries
    }
  },
  mutations: {
    setEntries(state,payload){
      state.entries = payload
    },

    setEntry (state, payload) {
      state.entries.push(payload)

      const entries = localStorage.getItem('entries')
      const arrEntries = JSON.parse(entries)

      arrEntries.push(payload)
      localStorage.setItem('entries',JSON.stringify(arrEntries))

    },

    deleteEntry(state,payload){
      const entry = state.entries.findIndex( el => el.id === payload )
      if (entry) state.entries.splice(entry, 1)
    },

  },
  actions: {

    async getEntries({commit}){
      const entries = await JSON.parse(localStorage.getItem('entries'))

      if ( !entries )  localStorage.setItem('entries', JSON.stringify([]))
      else commit('setEntries',entries)

    },

    addEntry ( { commit }, entry) {
      const newEntry = {
        id : uuidv4(),
        state : false,
        name : entry
      }
      commit('setEntry',newEntry)
    },

    deleteEntry( { commit }, id ){
      const entries = JSON.parse(localStorage.getItem('entries'))

      const entry = entries.findIndex( el => el.id === id )
      if (entry) entries.splice(entry, 1)

      localStorage.setItem('entries',JSON.stringify(entries))

      commit('deleteEntry',id)

    },

    changeStateEntry({ commit }, id){

      const entries = JSON.parse(localStorage.getItem('entries'))
      const entry = entries.find(el => el.id === id)

      entries.forEach( el => {
        if ( el.id === id )  entry.state = !entry.state
      })

      localStorage.setItem('entries',JSON.stringify(entries))
      commit('setEntries',entries)

    }
  }
})
