import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/index.js";
const transaction_form_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-m1oef3{width:250px;border-radius:5px;background-color:#f2f2f2;padding:20px}input[type='text'].svelte-m1oef3,input[type='number'].svelte-m1oef3,input[type='datetime-local'].svelte-m1oef3{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}input[type='submit'].svelte-m1oef3{width:100%;background-color:#4caf50;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer}input[type='submit'].svelte-m1oef3:hover{background-color:#45a049}",
  map: null
};
const Transaction_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title = "";
  let amount = 0;
  let tag = "";
  $$result.css.add(css$1);
  return `<div class="svelte-m1oef3"><form action=""><label for="Title">Title:</label> <br>
		<input type="text" placeholder="title of transaction" class="svelte-m1oef3"${add_attribute("value", title, 0)}> <br>
		<label for="amount">amount:</label> <br>
		<input type="number" placeholder="amount money" class="svelte-m1oef3"${add_attribute("value", amount, 0)}> <br>
		<b>Type:</b> <br>

		<label><input type="radio" name="scoops"${add_attribute("value", 1, 0)}${add_attribute("checked", true, 1)}>
			expense
		</label> <br>

		<label><input type="radio" name="scoops"${add_attribute("value", 2, 0)}${""}>
			income
		</label> <br>

		<label for="Tag">Tag:</label> <br>
		<input type="text" class="svelte-m1oef3"${add_attribute("value", tag, 0)}> <br>
		<label for="DateTime">Date and time:</label> <br>
		<input type="datetime-local" class="svelte-m1oef3"> <br>

		<input type="submit" class="svelte-m1oef3"></form>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#form.svelte-1meb1tk{margin:100px;display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="form" class="svelte-1meb1tk">${validate_component(Transaction_form, "TransactionForm").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
