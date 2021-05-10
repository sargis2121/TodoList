<template>
  <div class="full">
    <ToDo v-on:save="addList" />
    <hr />
    <ol class="list">
      <li v-for="(el, index) in list" v-bind:key="el">
        {{ el }}
        <button class="removeEl" v-on:click="removeElement(index)">
          Delete
        </button>
      </li>
    </ol>
  </div>
</template>

<script>
import ToDo from "./HelloWorld.vue";

export default {
  data() {
    return {
      list: [],
      el: "",
    };
  },
  components: {
    ToDo,
  },
  methods: {
    addList(val) {
      this.list.push(val);
    },
    removeElement(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>

<style>
.full {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list {
  display: inline-block;
  margin: 0 10px;
}
</style>
