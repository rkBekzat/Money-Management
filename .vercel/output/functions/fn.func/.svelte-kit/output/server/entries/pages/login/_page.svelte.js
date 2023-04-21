import { c as create_ssr_component, e as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-xdg3lz{background-color:skyblue;background-size:cover;color:#fff;display:flex;flex-direction:column;height:100vh;justify-content:center;align-items:center;padding:1rem}form.svelte-xdg3lz{background-color:rgba(255, 255, 255, 0.8);border-radius:0.5rem;display:flex;flex-direction:column;padding:2rem;width:100%;max-width:400px}h1.svelte-xdg3lz{font-size:2rem;margin-bottom:2rem;text-align:center}input.svelte-xdg3lz{border-radius:0.25rem;border:none;font-size:1rem;margin-bottom:1rem;padding:0.75rem}button.svelte-xdg3lz{background-color:#007bff;border:none;border-radius:0.25rem;color:#fff;cursor:pointer;font-size:1rem;margin-top:1rem;padding:0.75rem}button.svelte-xdg3lz:hover{background-color:#0062cc}.has-text-danger.svelte-xdg3lz{color:#dc3545;font-size:0.875rem;margin-top:0.5rem}.container.svelte-xdg3lz{padding:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="container svelte-xdg3lz"><h1 class="svelte-xdg3lz">Login or Register</h1>
	<form method="post" class="svelte-xdg3lz"><input type="text" placeholder="Username" name="username" required class="svelte-xdg3lz">
		<input type="password" placeholder="Password" name="password" required class="svelte-xdg3lz">
		${form?.errorMessage ? `<div class="has-text-danger svelte-xdg3lz">${escape(form.errorMessage)}</div>` : ``}
		<button type="submit" formaction="?/register" class="svelte-xdg3lz">Register</button>
		<button class="is-primary svelte-xdg3lz" type="submit" formaction="?/login">Login</button></form></div>



<div class="container svelte-xdg3lz"><h1 class="svelte-xdg3lz">Login</h1>
	<form method="post" class="svelte-xdg3lz"><input type="text" placeholder="Email" name="email" required class="svelte-xdg3lz">
		<input type="password" placeholder="Password" name="password" required class="svelte-xdg3lz">
		${form?.errorMessage ? `<div class="has-text-danger svelte-xdg3lz">${escape(form.errorMessage)}</div>` : ``}
		<button class="is-primary svelte-xdg3lz" type="submit" formaction="?/login">Login</button>
		<a href="/signup" class="ifthecase">If you don&#39;t have account, register new account!</a></form></div>


`;
});
export {
  Page as default
};
