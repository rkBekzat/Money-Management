import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-m85akd{background-color:skyblue;background-size:cover;color:#fff;display:flex;flex-direction:column;height:100vh;justify-content:center;align-items:center;padding:1rem}form.svelte-m85akd{background-color:rgba(255, 255, 255, 0.8);border-radius:0.5rem;display:flex;flex-direction:column;padding:2rem;width:100%;max-width:400px}h1.svelte-m85akd{font-size:2rem;margin-bottom:2rem;text-align:center}input.svelte-m85akd{border-radius:0.25rem;border:none;font-size:1rem;margin-bottom:1rem;padding:0.75rem}button.svelte-m85akd{background-color:#007bff;border:none;border-radius:0.25rem;color:#fff;cursor:pointer;font-size:1rem;margin-top:1rem;padding:0.75rem}button.svelte-m85akd:hover{background-color:#0062cc}.has-text-danger.svelte-m85akd{color:#dc3545;font-size:0.875rem;margin-top:0.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let password = "";
  let passwordConfirmation = "";
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="container svelte-m85akd"><h1 class="svelte-m85akd">Register</h1>
	<form method="post" class="svelte-m85akd"><input type="text" placeholder="Email" name="email" required class="svelte-m85akd">
		<input type="password" placeholder="Password" name="password" required class="svelte-m85akd"${add_attribute("value", password, 0)}>
		${form?.errorMessage ? `<div class="has-text-danger svelte-m85akd">${escape(form.errorMessage)}</div>` : ``}
        <input type="password" placeholder="Password confirmation" name="password" required class="svelte-m85akd"${add_attribute("value", passwordConfirmation, 0)}>
		${form?.errorMessage ? `<div class="has-text-danger svelte-m85akd">${escape(form.errorMessage)}</div>` : ``}
        <button type="submit" formaction="?/register" class="svelte-m85akd">Register</button>
        ${``}</form></div>


`;
});
export {
  Page as default
};
