import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firebaseInit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stories:[]
  },
  mutations: {
    LOAD_STORY(state,data){
      state.stories = data
    },
    ADD_STORY(state,data){
      state.stories = [...state.stories,data]
    },
    DELETE_STORY(state,id){
      const data = state.stories.filter(data=>data.id != id)
      state.stories = data
    },
    UPDATE_STORY(state,data){
      state.stories.forEach(datas=>{
        if(datas.id == data.id){
          datas = data
        }
      })
    },
   
  },
  actions: {
    async loadStory({commit}){
    const story =db.collection('story')
    try {
      const response = await story.get();
      const value = []; 
      response.forEach(doc=>{
        const data = doc.data()
        data.id = doc.id; 
        value.push(data)
      })
      commit('LOAD_STORY',value)
    } catch (error) {
      console.log(error)
    }
    },
    async AddStory({commit},value){
      const story = db.collection('story')
      try {
        const response = await story.add(value)
        if(response.id){
        value.id = response.id
        commit('ADD_STORY',value)
        return response.id
        }
      } catch (error) {
        console.log(error)
      }
    },
    async DeleteStory({commit},id){
      const story = db.collection('story')
      try {
        await story.doc(id).delete()
        commit('DELETE_STORY',id)
      } catch (error) {
        console.log(error)
      }
    },
    async UpdateStory({commit},value){
     
      const story = db.collection('story')
      try {
        const res = story.doc(value.id)
        delete value.id
        await  res.update(value)
        commit('UPDATE_STORY',value)
      } catch (error) {
        console.log(error)
      }
    },

  },
  modules: {
  }
})
