<template>
  <div>
    <input type="text" v-model="title" placeholder="title" />
    <input type="text" v-model="description" placeholder="description" />
    <button @click="createNewPost">Creat New Post</button>
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