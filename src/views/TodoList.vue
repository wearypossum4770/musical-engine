<template>
  <div class="custom-checkbox">
    <h1>To-Do List</h1>
    <create-todo @todo-added="addToDo"></create-todo>
    <h2 id="list-summary" ref="listSummary" tabindex="-1">{{ listSummary }}</h2>
    <ul
      type="none"
      id="todo-list-items"
      aria-labelledby="list-summary"
      class="stack-large"
    >
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item
          :label="item.label"
          :done="item.done"
          :id="item.id"
          @checkbox-changed="updateDoneStatus(item.id)"
          @item-deleted="deleteToDo(item.id)"
          @item-edited="editToDo(item.id, $event)"
        ></to-do-item>
      </li>
    </ul>
  </div>
</template>
<script>
// import uniqueId from "lodash.uniqueid";
import CreateTodo from "../components/todo/CreateTodo";
import ToDoItem from "../components/todo/ToDoItem.vue";
export default {
  name: "TodoList",
  components: {
    ToDoItem,
    CreateTodo,
  },
  methods: {
    filterTodo(toDoId) {
      return this.ToDoItems.find(item => item.id === toDoId);
    },
    deleteToDo(toDoId) {
      const itemIndex = this.ToDoItems.findIndex(item => item.id === toDoId);
      this.ToDoItems.splice(itemIndex, 1);
      this.$refs.listSummary.focus();
    },
    editToDo(toDoId, newLabel) {
      const toDoToEdit = this.filterTodo(toDoId);
      toDoToEdit.label = newLabel;
    },
    getNextID() {
      let _id = 1;
      let ids = this.ToDoItems.map(todo =>
        parseInt(todo.id?.match(/\d+/).shift()),
      );
      if (ids.length > 0) {
        let last = ids.pop();
        _id = last += 1;
      }
      return _id;
    },
    updateDoneStatus(toDoId) {
      const toDoToUpdate = this.filterTodo(toDoId);
      toDoToUpdate.done = !toDoToUpdate.done;
    },
    addToDo(toDoLabel) {
      this.ToDoItems.push({
        id: `todo-${this.getNextID()}`,
        label: toDoLabel,
        done: false,
      });
    },
  },
  computed: {
    listSummary() {
      const completed = this.ToDoItems?.filter(item => item.done).length;
      return `${completed} out of ${this.ToDoItems.length} items completed`;
    },
  },
  data() {
    return {
      ToDoItems: [],
    };
  },
};
</script>
<style scoped></style>
