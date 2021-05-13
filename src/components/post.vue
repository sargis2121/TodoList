<template>
  <div class="hello">
    <input type="text" v-model="title"  placeholder="title"/>
    <input type="text" v-model="descreption" placeholder="descreption"/>
       <button  @click="creat">Creat New Post</button>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      title:'',
      descreption:''
    };
  },
  computed: mapGetters(["dataList"]),

  methods: {
    ...mapMutations(["creatPost"]),
    creat() {
      this.creatPost({
          title: this.title,
          descreption:this.descreption,
          id:Date.now()
      });
       this.title=this.descreption="";
    },
  }
};
</script>

