<template>
  <div>
    <div class="addItem">
      <Post />
      <hr />
    </div>
    <!-- <table class="table"> -->
    <div class="table">
      <div
        class="grid-container"
        v-for="(dataProp, idx) in dataList"
        :key="idx"
      >
        <div>
          <span v-show="!editing">{{ dataProp.title }}</span>
          <input
            v-if="dataIndex == idx"
            type="text"
            v-model="title"
            v-show="editing"
          />
        </div>

        <div>
          <span v-show="!editing">{{ dataProp.descreption }}</span>
          <input
            v-if="dataIndex == idx"
            type="text"
            v-model="desc"
            v-show="editing"
          />
        </div>

        <div>
          <button class="editEl" v-show="!editing" @click="editTitle(idx)">
            edit
          </button>
          <button
            class="removeEl"
            v-show="!editing"
            @click="removeElement(idx)"
          >
            delete
          </button>
          <button
            v-if="dataIndex == idx"
            v-show="editing"
            @click="saveEdit(idx)"
          >
            save
          </button>
          <button
            v-if="dataIndex == idx"
            v-show="editing"
            @click="cancelEdit(idx)"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
    <!-- </table> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Post from "./post";

export default {
  data() {
    return {
      title: "",
      desc: "",
      editing: false,
      dataIndex: ""
    };
  },

  components: {
    Post
  },

  computed: mapGetters(["dataList"]),

  methods: {
    ...mapMutations(["removeElement"]),

    editTitle(val) {
      this.editing = true;
      this.dataIndex = val;
      this.title = this.dataList[val].title;
      this.desc = this.dataList[val].descreption;
    },

    saveEdit(val) {
      this.dataIndex = val;
      if (this.title && this.desc) {
        this.editing = false;
        this.dataList[val].title = this.title;
        this.dataList[val].descreption = this.desc;
      }
    },

    cancelEdit(val) {
      this.editing = false;
      this.dataIndex = val;
    }
  }
};
</script>

<style>
.addItem {
  text-align: left;
  padding-left: 10px;
}
.grid-container {
  display: grid;
  align-self: center;
  width: 1000px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1px;
  background-color: #2196f3;
  padding: 1px;
  justify-content: center;
}
.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 10px 0;
  font-size: 20px;
  word-wrap: break-word;
  width: 300px;
}
.table {
  background-color: lightgrey;
  width: 1000px;
  border: 15px solid green;
  padding: 50px;
  margin: 1px;
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
