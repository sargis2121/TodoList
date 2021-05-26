<template>
  <div>
    <input type="text" v-model="title" placeholder="title" />
    <input type="text" v-model="descreption" placeholder="descreption" />
    <button @click="createNewPost">Creat New Post</button>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
      descreption: ""
    };
  },
  computed: mapGetters(["dataList"]),

  methods: {
    ...mapMutations(["createPost"]),
    createNewPost() {
      if (this.title && this.descreption) {
        this.createPost({
          title: this.title,
          descreption: this.descreption,
          id: Date.now()
        });
      }
      this.title = this.descreption = "";
    }
  }
};

</script>