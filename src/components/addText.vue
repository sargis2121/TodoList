<template>
  <div>
   <Post/>
     <hr/>
     <table class="table">
          <tr v-for="(dataProp,idx) in dataList" :key="idx">
               <td>
                  <span class="title" v-show="!editing">{{dataProp.title}}</span>
                  <input v-if="dataIndex==idx" type="text" v-model="title" v-show="editing">
               </td>
             
               <td>
                  <span v-show="!editing">{{dataProp.descreption}}</span>
                  <input v-if="dataIndex==idx" type="text" v-model="desc" v-show="editing">
               </td>

               <td>
                  <button class="editEl" v-show="!editing" @click="editTitle(idx)">edit</button>
                  <button class="removeEl"  v-show="!editing" @click="removeElement(idx)">delete</button>
                  <button v-if="dataIndex==idx" v-show="editing" @click="saveEdit(idx)">save</button>
                  <button v-if="dataIndex==idx" v-show="editing" @click="cancelEdit(idx)">cancel</button>
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
      title:"",
      desc: "",
      editing:false,
      dataIndex:"",
    };
  },

  components:{
    Post,
  },
  
  computed: mapGetters(["dataList"]),
 
  methods: {
    ...mapMutations(["removeElement"]),

    editTitle(val) {
      this.editing = true;
      this.dataIndex = val;
      this.title = this.dataList[val].title;
      this.desc = this.dataList[val].descreption
    },

    saveEdit(val) {
       this.dataIndex=val;
       if(this.title && this.desc) {
          this.editing=false;
          this.dataList[val].title =this.title ;
          this.dataList[val].descreption=this.desc;
      }
    },

    cancelEdit(val) {
      this.editing=false;
      this.dataIndex=val;
    }
  }
}

</script>

<style>

  .table {
    background-color: lightgrey;
    width: 400px;
    border: 15px solid green;
    padding: 50px;
    margin: auto;
  }

  .editEl {
    background-color: #e7e7e7;
    color: black;
  }

  .removeEl {
    background-color: #e7e7e7;
    color: black;
  }

</style>