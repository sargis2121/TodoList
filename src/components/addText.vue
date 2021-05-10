<template>
  <div class="hello">
    <input type="text" v-model="text" @keypress.enter="add"/>
    <button v-on:click="add">addText</button>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  props: {
    text: String,
  },
  methods: {
    add() {
      this.$emit("save", this.text);
    },
  },
};
</script>

