<template>
  <div class="hello">
    <input type="text" v-model="text" @keypress.enter="add" />
    <button @click="add">addText</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapMutations(["addItem"]),
    add() {
      this.addItem(this.text);
      this.text = "";
    },
  },
};
</script>

