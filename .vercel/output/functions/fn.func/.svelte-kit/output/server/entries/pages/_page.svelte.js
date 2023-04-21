import { c as create_ssr_component } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-15mxnsj{background-color:#1e1e1e;color:#fff;font-family:Kanit, sans-serif;margin:0;padding:0}main.svelte-15mxnsj{margin:0 auto;max-width:800px;padding:40px 20px}h1.svelte-15mxnsj{font-size:3rem;margin-bottom:20px;text-align:center;text-transform:uppercase}h2.svelte-15mxnsj{font-size:2rem;margin:40px 0 20px;text-align:center;text-transform:uppercase}p.svelte-15mxnsj{font-size:1.2rem;line-height:1.5;margin-bottom:20px;text-align:center}ul.svelte-15mxnsj{list-style:none;margin:0;padding:0}li.svelte-15mxnsj{font-size:1.2rem;line-height:1.5;margin-bottom:10px;position:relative;padding-left:40px}li.svelte-15mxnsj:before{font-size:1.5rem;left:0;position:absolute;top:-2px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-n3ior8_START -->${$$result.title = `<title>Home</title>`, ""}<!-- HEAD_svelte-n3ior8_END -->`, ""}

<layout><main class="svelte-15mxnsj"><h1 class="svelte-15mxnsj">Money Manager</h1>
    <p class="svelte-15mxnsj">Welcome to Money Manager, a simple way to manage your money!</p>

    <h2 class="svelte-15mxnsj">Features</h2>
    <ul class="svelte-15mxnsj"><li class="svelte-15mxnsj"><i class="fas fa-user-plus"></i> Create an account</li>
      <li class="svelte-15mxnsj"><i class="fas fa-edit"></i> Edit your account information</li>
      <li class="svelte-15mxnsj"><i class="fas fa-plus-circle"></i> Create transactions (income or expense)</li>
      <li class="svelte-15mxnsj"><i class="fas fa-chart-line"></i> Track your current balance</li>
      <li class="svelte-15mxnsj"><i class="fas fa-hand-holding-usd"></i> Manage permanent income</li>
      <li class="svelte-15mxnsj"><i class="fas fa-calendar-alt"></i> See your expenses in a specific period</li>
      <li class="svelte-15mxnsj"><i class="fas fa-filter"></i> Sort and filter your transaction history</li>
      <li class="svelte-15mxnsj"><i class="fas fa-chart-bar"></i> View charts to visualize your spending habits</li></ul></main>
</layout>`;
});
export {
  Page as default
};
