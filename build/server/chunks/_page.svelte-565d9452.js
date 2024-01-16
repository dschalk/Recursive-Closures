import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from './ssr-8d0cd32c.js';

const css = {
  code: ".checked.svelte-1s7lgad{text-decoration:line-through}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let newItem = "";
  let todoList = [
    {
      text: "Write my first post",
      status: true
    },
    {
      text: "Upload the post to the blog",
      status: false
    },
    {
      text: "Publish the post at Facebook",
      status: false
    }
  ];
  $$result.css.add(css);
  return `<input type="text" placeholder="new todo item.."${add_attribute("value", newItem, 0)}> <button data-svelte-h="svelte-1l6la3">Add</button> <br> ${each(todoList, (item, index) => {
    return `<input type="checkbox"${add_attribute("checked", item.status, 1)}> <span class="${["svelte-1s7lgad", item.status ? "checked" : ""].join(" ").trim()}">${escape(item.text)}</span> <span style="color:magenta" data-svelte-h="svelte-1go0bdz">remove</span> <br>`;
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-565d9452.js.map