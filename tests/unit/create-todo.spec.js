import { shallowMount } from "@vue/test-utils";
import { render } from "@testing-library/vue";
import CreateTodo from "../../src/components/todo/CreateTodo.vue";
describe("Todo create form", () => {
  it("Should have a label", () => {
    const { container } = render(CreateTodo);
    let label = container
      .querySelector('[for="new-todo-input"]')
      .textContent.trim();
    expect(label).toBe("What needs to be done?");
  });
  test("reveals a notification when submitted", async () => {
    let input = "Finish todo List";
    const wrapper = shallowMount(CreateTodo);
    await wrapper.find('[id="new-todo-input"]').setValue(input);
    let newTodo = wrapper.find(".message").text();
    expect(newTodo).toBe(input);
    // await wrapper.find("form").trigger("submit.prevent")
  });
});
