import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export default new vuex.Store({
    state: {
        jsonList:[
            {
              "id": 1,
              "title": "a",
              "descreption": "1"
            },
            {
              "id": 2,
              "title": "b",
              "descreption": "2"
            },
            {
              "id": 3,
              "title": "c",
              "descreption": "3"
            },
            {
              "id": 4,
              "title": "d",
              "descreption": "4"
            },
            {
              "id": 5,
              "title": "e",
              "descreption": "5"
            }
          ]
    },

    mutations: {

        removeElement(state, index) {
            state.jsonList.splice(index, 1);
        },

        createPost(state,newPost) {
            if(newPost) {
             state.jsonList.unshift(newPost);
          }
        },
    },

    getters: {
        dataList(state) {
           return state.jsonList
        }
    }
});