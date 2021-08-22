<template>
  <div class="custom-checkbox">
    <h1>To-Do List</h1>
    <create-todo @todo-added="addToDo"></create-todo>
    <h2 id="list-summary">{{ listSummary }}</h2>
    <ul type="none" aria-labelledby="list-summary" class="stack-large">
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item
          :label="item.label"
          :done="item.done"
          :id="item.id"
          @checkbox-changed="updateDoneStatus(item.id)"
        ></to-do-item>
      </li>
    </ul>
  </div>
</template>
<script>
import uniqueId from "lodash.uniqueid";
import CreateTodo from "../components/todo/CreateTodo";
import ToDoItem from "../components/todo/ToDoItem.vue";
export default {
  name: "Todo",
  components: {
    ToDoItem,
    CreateTodo,
  },
  methods: {
    updateDoneStatus(toDoId) {
      const toDoToUpdate = this.ToDoItems.find(item => item.id === toDoId);
      toDoToUpdate.done = !toDoToUpdate.done;
    },
    addToDo(toDoLabel) {
      this.ToDoItems.push({
        id: uniqueId("todo-"),
        label: toDoLabel,
        done: false,
      });
      console.log("To-do added", toDoLabel);
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
      ToDoItems: [
        { id: uniqueId("todo-"), label: "Learn Vue", done: false },
        {
          id: uniqueId("todo-"),
          label: "Create a Vue project with the CLI",
          done: true,
        },
        { id: uniqueId("todo-"), label: "Have fun", done: true },
        { id: uniqueId("todo-"), label: "Create a to-do list", done: false },
      ],
    };
  },
};
</script>

<style scoped></style>
