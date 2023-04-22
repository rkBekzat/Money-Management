import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".header-container.svelte-1qbugkx{display:flex;justify-content:space-between;align-items:center;padding:16px;background-color:black;color:silver;font-family:'Kanit', sans-serif;font-size:20px}.header-left.svelte-1qbugkx{display:flex;align-items:center}.header-title.svelte-1qbugkx{font-weight:bold}.header-nav.svelte-1qbugkx{display:flex;align-items:center}.header-link.svelte-1qbugkx{margin-left:24px;color:silver;text-decoration:none;cursor:pointer}.header-link.svelte-1qbugkx:hover{text-decoration:underline}.header-dropdown.svelte-1qbugkx{position:relative}.header-dropdown-menu.svelte-1qbugkx{position:absolute;width:80%;left:18px;z-index:1;background-color:#333333;border:1px solid gray;padding:5px;margin-top:5px;border-radius:10px;gap:5px}.header-dropdown-link.svelte-1qbugkx{display:block;color:silver;text-decoration:none;padding:5px}.header-dropdown-link.svelte-1qbugkx:hover{background-color:#222222;border-radius:5px}.header-button.svelte-1qbugkx{color:silver;margin-right:10px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let header;
  $$result.css.add(css$2);
  return `<header class="header-container svelte-1qbugkx"${add_attribute("this", header, 0)}><div class="header-left svelte-1qbugkx">
		<span class="header-title svelte-1qbugkx">Money Management</span></div>
	<nav class="header-nav svelte-1qbugkx"><a href="/" class="header-link svelte-1qbugkx">Home</a>
		<a href="/profile" class="header-link svelte-1qbugkx">Profile</a>
		<div class="header-dropdown svelte-1qbugkx"><span class="header-link svelte-1qbugkx">Transactions</span>
			${``}</div>
		<a href="/about" class="header-link svelte-1qbugkx">About</a></nav>
	<div class="header-right">${`<a href="/login" class="header-button svelte-1qbugkx">Sign In</a>`}</div>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".footer-container.svelte-1wks7c9{background-color:black;color:white;display:flex;justify-content:space-between;align-items:center;font-family:'Kanit', sans-serif;font-size:12px;width:100%}.footer-left.svelte-1wks7c9{padding:20px}.footer-right.svelte-1wks7c9{padding:20px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="footer-container svelte-1wks7c9"><div class="footer-left svelte-1wks7c9"><i class="fa-regular fa-copyright"></i>
    2023 Copyright
  </div>
  <div class="footer-right svelte-1wks7c9">Developed by MINI WORLDS team
  </div>
</footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;padding:0;height:100%}.app.svelte-1pbipbg{height:100%;display:flex;flex-direction:column}main.svelte-1pbipbg{background-color:#121212;color:white}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1pbipbg">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<main class="svelte-1pbipbg">${slots.default ? slots.default({}) : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
