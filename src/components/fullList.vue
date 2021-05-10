<template>
  <div class="full">
    <ToDo v-on:save="addList" />
    <hr />
    <ol class="list">
      <li v-for="(el, index) in list" v-bind:key="el">
        <div class="list-child">
          {{ el }}
          <div class="button-container">
            <button class="removeEl" v-on:click="removeElement(index)">
              Delete
            </button>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import ToDo from "./addText";
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
      if (val) {
      this.list.push(val);
      }
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
}
ol {
  counter-reset: olCounter;
  display: inline-block;
  margin: 0 0px;
}
li {
  width: 100px;
}

.list-child {
  display: flex;
}

.button-container {
  position: absolute;
  margin-left: 100px;
}

.removeEl {
  background-color: #e7e7e7;
  color: black;
  bottom: 10px;
}
</style>