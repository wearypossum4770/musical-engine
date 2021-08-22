import uniqueId from "lodash.uniqueid";
import { writeFileSync } from "fs";
let ToDoItems = [
  { id: uniqueId("todo-"), label: "Learn Vue", done: false },
  {
    id: uniqueId("todo-"),
    label: "Create a Vue project with the CLI",
    done: true,
  },
  { id: uniqueId("todo-"), label: "Have fun", done: true },
  { id: uniqueId("todo-"), label: "Create a to-do list", done: false },
];

writeFileSync("../tests/todoList.json", JSON.stringify(ToDoItems));
