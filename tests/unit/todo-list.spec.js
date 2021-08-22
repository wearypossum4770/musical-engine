import { mount } from "@vue/test-utils";
import { render, fireEvent } from "@testing-library/vue";
import TodoList from "../../src/views/TodoList.vue";
import todoList from "../todoList.json";
describe("TodoList component", () => {
  let wrapper = mount(TodoList, {
    data() {
      return { todoList };
    },
  });
  let header2Text = "To-Do List";
  it("has a <h2> tag", async () => {
    const { getByText } = render(TodoList);
    let header2 = getByText(header2Text).textContent;
    expect(header2).toBe(header2Text);
  });
  test("data props are rendered", async () => {
    // let todoArray = wrapper.getElementById("todo-list-items").getElementsByTagName('li')
    let todoArray = wrapper.findAll('[itemprop="itemListElement"]');
    expect(todoArray.length).toBe(4);
  });
});
