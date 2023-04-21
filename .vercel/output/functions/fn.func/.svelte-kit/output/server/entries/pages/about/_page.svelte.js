import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about-tools.svelte-o4cqrt.svelte-o4cqrt{max-width:1500px;margin:0 auto;padding:2rem}.about-tools.svelte-o4cqrt p.svelte-o4cqrt{font-size:1.2rem;line-height:1.5}.about-tools.svelte-o4cqrt p span.svelte-o4cqrt{color:brown}.container.svelte-o4cqrt.svelte-o4cqrt{max-width:1500px;margin:0 auto;padding:2rem}.title.svelte-o4cqrt.svelte-o4cqrt{font-size:3rem;text-align:center;margin-bottom:2rem}.team.svelte-o4cqrt.svelte-o4cqrt{display:grid;grid-template-columns:repeat(4 , 1fr);grid-gap:2rem}.member.svelte-o4cqrt.svelte-o4cqrt{text-align:center}.member.svelte-o4cqrt img.svelte-o4cqrt{width:300px;height:300px;overflow:hidden;border-radius:50%;margin-bottom:1rem}.member.svelte-o4cqrt h2.svelte-o4cqrt{font-size:2rem;margin-bottom:1rem}.member.svelte-o4cqrt p.svelte-o4cqrt{font-size:1.2rem;line-height:1.5}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

<div class="about-tools svelte-o4cqrt"><h1 class="title svelte-o4cqrt">About our project!</h1>
    <p class="svelte-o4cqrt">Welcome to our money-management tool, a website designed to help you keep track of your expenses! Our project is a simple <span class="svelte-o4cqrt">CMS</span> that mimics the features of a <span class="svelte-o4cqrt">CRUD</span> system, enabling users to create, read, update, and delete items from a database.</p>

    <p class="svelte-o4cqrt">Each item in our CMS is accessible through a unique URL path, providing a straightforward way to navigate through your data. Whether you want to view your transactions, update your budget, or manage your expenses, our website has got you covered.</p>
        
    <p class="svelte-o4cqrt">Our website features several pages to help you manage your finances. The <span class="svelte-o4cqrt">homepage</span> provides a quick overview of your expenses, while the <span class="svelte-o4cqrt">about page</span> offers more information about our project and how it can help you. The <span class="svelte-o4cqrt">profile page</span> enables you to update your account information and manage your settings, while the <span class="svelte-o4cqrt">dropdown menu</span> provides access to all your transactions. Finally, our <span class="svelte-o4cqrt">signin/signup</span> pages make it easy for you to create an account and get started with our money-management tool.</p>
        
    <p class="svelte-o4cqrt">We&#39;ve used the latest technologies to implement our project, including <span class="svelte-o4cqrt">SvelteKit</span> with <span class="svelte-o4cqrt">TypeScript</span>, <span class="svelte-o4cqrt">ESLint</span>, and <span class="svelte-o4cqrt">Prettier</span> for the frontend, and <span class="svelte-o4cqrt">Django</span> for the backend. This ensures that our website is not only user-friendly but also reliable, secure, and scalable.</p>
        
    <p class="svelte-o4cqrt">In conclusion, our money-management tool is designed to make it easy for you to manage your finances. With our simple CMS, you can keep track of your expenses, update your budget, and manage your finances with ease. So why wait? Sign up today and start taking control of your finances!</p></div>

<div class="container svelte-o4cqrt"><h1 class="title svelte-o4cqrt">Meet Our Team</h1>
    <div class="team svelte-o4cqrt"><div class="member svelte-o4cqrt"><img src="https://www.dropbox.com/s/yo8pn0emz5lblch/shohjahon.jpeg?dl=1" alt="Shohjahon's Photo" class="svelte-o4cqrt">
            <h2 class="svelte-o4cqrt">Shohjahon</h2>
            <p class="svelte-o4cqrt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <div class="member svelte-o4cqrt"><img src="https://www.dropbox.com/s/i87neewtmqns9oq/arlan.jpg?dl=1" alt="Arlan" class="svelte-o4cqrt">
            <h2 class="svelte-o4cqrt">Arlan</h2>
            <p class="svelte-o4cqrt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <div class="member svelte-o4cqrt"><img src="https://www.dropbox.com/s/oydnzmj6qlxz96n/bekzat.jpg?dl=1" alt="Bekzat" class="svelte-o4cqrt">
            <h2 class="svelte-o4cqrt">Bekzat</h2>
            <p class="svelte-o4cqrt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <div class="member svelte-o4cqrt"><img src="https://www.dropbox.com/s/dqn01zk5vyr883a/aibek.jpg?dl=1" alt="Aibek's Photo" class="svelte-o4cqrt">
            <h2 class="svelte-o4cqrt">Aibek</h2>
            <p class="svelte-o4cqrt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div>
</div>`;
});
export {
  Page as default
};
