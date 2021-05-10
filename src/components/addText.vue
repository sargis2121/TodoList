<template>
  <div class="hello">
    <input type="text" v-model="text" v-on:keypress.enter="add"/>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
