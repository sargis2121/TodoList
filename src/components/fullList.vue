<template>
  <div class="full">
    <ToDo />
    <hr />
    <ol class="list">
      <li v-for="(el, index) in fullList" :key="el">
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
import { mapGetters, mapMutations } from "vuex";
import ToDo from "./addText";

export default {
  computed: mapGetters(["fullList"]),
  components: {
    ToDo,
  },
  methods: {
    ...mapMutations(["removeElement"]),
    removEl() {
      this.removeElement(this.index);
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