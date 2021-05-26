<template>
  <div id="app">
    <div class="grid-container">
      <div class="header">
        <Post />
        <h1>To Do List</h1>
      </div>
      <div class="left"><h6>Left</h6></div>
      <div class="midle">
        <TodoList />
      </div>
      <div class="right"><h6>Right</h6></div>
      <div class="footer"><h3>Footer</h3></div>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/addText.vue";
import Post from "./components/post";

export default {
  name: "App",
  components: {
    Post,
    TodoList
  }
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 100px auto auto 100px;
  grid-template-rows: auto auto auto auto 100px;
  grid-gap: 2px;
  background-color: aqua;
  padding: 5px;
  grid-row-gap: 1px;
  grid-column-gap: 5px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 1px 0;
  font-size: 20px;
}

.header {
  grid-column: 1 / span 4;
  grid-row: 1;
}

.left {
  grid-column: 1;
  grid-row: 2 / span 3;
}

.midle {
  grid-column: 2 / span 2;
  grid-row: 2 / span 3;
  height: calc(85vh - 100px);
  overflow-y: scroll;
}

.right {
  grid-column: 4;
  grid-row: 2 / span 3;
}

.footer {
  grid-column: 1 / span 4;
  grid-row: 5;
}

h1 {
  color: rgb(185, 19, 19);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  overflow-y: hidden;
  background-color: lightblue;
}
</style>
