<template>
  <div class="full">
    <ToDo />
    <hr />
    <div class="list">
      <ol>
        <li v-for="(el, index) in fullList" :key="el.id">
          <div class="list-child">
            {{ el }}
            <div class="button-container">
              <button class="removeEl" @click="removeElement(index)">
                Delete
              </button>
            </div>
          </div>
        </li>
      </ol>
    </div>
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

.list {
  background-color: lightgrey;
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: auto;
}

ol {
  margin: 0;
  padding: 0;
}

li {
  border: 1px;
}

.list-child {
  list-style: position inside;
  border: 1px;
  display: flex;
  position: relative;
}

.button-container {
  position: absolute;
  border: 1px;
  margin-left: 250px;
  display: table;
  clear: both;
}

.removeEl {
  background-color: #e7e7e7;
  color: black;
  bottom: 100px;
}
</style>