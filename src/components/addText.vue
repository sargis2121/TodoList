<template>
  <div>
  <Post/>
  <hr/>

     <table class="table">
          <tr v-for="(dataProp,idx) in dataList" :key="idx">
               <td>
                    <span v-show="!editing">{{dataProp.title}}</span>
                    <input v-if="dataIndex==idx" type="text" v-model="dataProp.title"  v-show="editing">
               </td>
             
               <td>
                      <span v-show="!editing">{{dataProp.descreption}}</span>
                    <input v-if="dataIndex==idx" type="text" v-model="dataProp.descreption"  v-show="editing">
               </td>
               <td>
                    <button  v-show="!editing" v-on:click="editTitle(idx)">edit</button>
                    <button  v-show="!editing" v-on:click="removeElement(idx)">delete</button>
                    <button v-if="dataIndex==idx" v-show="editing" v-on:click="saveEdit()">save</button>
               </td>
          </tr>
     </table>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from "vuex";
import Post from "./post"
export default {
  data() {
    return {
      editing:false,
dataIndex:"",
      text: "",
    };
  },
  components:{
    Post,
    },
  computed: mapGetters(["dataList"]),
  methods: {
    ...mapMutations(["addItem","removeElement"]),
    editTitle(val) {
this.editing=true;
this.dataIndex=val;
    },
    saveEdit() {
      this.editing=false;
    },
  }
};
</script>

<style>


.table {
  background-color: lightgrey;
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: auto;
}





</style>