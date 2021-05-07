<template>
  <div id="app">
    <to-do v-on:save="addList"></to-do>
    <p>{{list}}</p>
  </div>
</template>

<script>
import ToDo from "./components/HelloWorld.vue";

export default {
  name: "App",
  props:{
    list:String,
  },
  components: {
    ToDo,
  },
  methods:{
    addList(val) {
    this.list = val;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
