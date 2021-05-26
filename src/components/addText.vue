<template>
  <div class="table">
    <div class="grid-container" v-for="(dataProp, idx) in dataList" :key="idx">
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
        <span v-show="!editing">{{ dataProp.description }}</span>
        <input
          v-if="dataIndex == idx"
          type="text"
          v-model="desc"
          v-show="editing"
        />
      </div>
      <div v-if="!editing">
        <button class="editEl" @click="editTitle(idx)">
          edit
        </button>
        <button class="removeEl" @click="removeElement(idx)">
          delete
        </button>
      </div>
      <div v-else>
        <button v-if="dataIndex == idx" @click="saveEdit(idx)">
          save
        </button>
        <button v-if="dataIndex == idx" @click="cancelEdit(idx)">
          cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      title: "",
      desc: "",
      editing: false,
      dataIndex: ""
    };
  },
  computed: mapGetters(["dataList"]),
  methods: {
    ...mapMutations(["removeElement", "saveEditTodo"]),
    ...mapActions(["editTodo"]),
    editTitle(val) {
      this.editing = true;
      this.dataIndex = val;
      this.title = this.dataList[val].title;
      this.desc = this.dataList[val].description;
    },
    saveEdit(val) {
      this.dataIndex = val;
      if (this.title && this.desc) {
        const todo = {
          idx: val,
          title: this.title,
          description: this.desc
        };
        this.editing = false;
        this.editTodo(todo);
      }
    },
    cancelEdit(val) {
      this.editing = false;
      this.dataIndex = val;
    }
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: lightgrey;
  padding: 1px;
  justify-content: center;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: center;
}

.grid-container > div {
  background-color: rgba(34, 128, 65, 0.8);
  text-align: center;
  padding: 10px 0;
  font-size: 20px;
  word-wrap: break-word;
  width: 100px;
}

.table {
  background-color: lightgrey;
  width: auto;
  border: 15px solid green;
  padding: 50px;
  margin: 1px;
  height: calc(73vh - 100px);
  overflow-y: scroll;
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
