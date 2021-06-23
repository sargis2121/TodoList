export default {
    state: {
        jsonList:[
            {
              "id": 1,
              "title": "a",
              "description": "1"
            },
            {
              "id": 2,
              "title": "b",
              "description": "2"
            },
            {
              "id": 3,
              "title": "c",
              "description": "3"
            },
            {
              "id": 4,
              "title": "d",
              "description": "4"
            },
            {
              "id": 5,
              "title": "e",
              "description": "5"
            }
          ]
    },

    actions: {
      editTodo({commit}, todo ){
        commit("saveEditTodo", todo)
      }
    },

    mutations: {
      saveEditTodo(state,todo) {
          state.jsonList[todo.idx].title = todo.title;
          state.jsonList[todo.idx].description = todo.description;
      },
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
};