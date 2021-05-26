<template>
  <div>
    <input type="text" v-model="title" placeholder="title" />
    <input type="text" v-model="description" placeholder="description" />
    <button @click="createNewPost">Create New Post</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
      description: ""
    };
  },
  computed: mapGetters(["dataList"]),

  methods: {
    ...mapMutations(["createPost"]),
    createNewPost() {
      if (this.title && this.description) {
        this.createPost({
          title: this.title,
          description: this.description,
          id: Date.now()
        });
      }
      this.title = "";
      this.description = "";
    }
  }
};
</script>

<style scoped>
button {
  background-color: #4CAF50; 
  border: 2px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
}

button:hover {
  background-color: rgb(30, 15, 228);
}
</style>