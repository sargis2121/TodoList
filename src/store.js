import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export default new vuex.Store({
    state: {
        list: [],
        el: ""
    },
    mutations: {
        addItem(state, item) {
            if (item) {
                state.list.push(item)
            }
        },
        removeElement(state, index) {
            state.list.splice(index, 1);
        },
    },
    getters: {
        fullList(state) {
            return state.list
        },
    }

});