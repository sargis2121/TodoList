import Vue from "vue"
import vuex from "vuex"
import list from "./list"

Vue.use(vuex);

export default new vuex.Store({
  modules:{
    list
  }
})