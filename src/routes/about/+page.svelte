<!-- AboutPage.svelte -->

<div class="about-tools">
    <h1 class="title">About our project!</h1>
    <p>Welcome to our money-management tool, a website designed to help you keep track of your expenses! Our project is a simple <span>CMS</span> that mimics the features of a <span>CRUD</span> system, enabling users to create, read, update, and delete items from a database.</p>

    <p>Each item in our CMS is accessible through a unique URL path, providing a straightforward way to navigate through your data. Whether you want to view your transactions, update your budget, or manage your expenses, our website has got you covered.</p>
        
    <p>Our website features several pages to help you manage your finances. The <span>homepage</span> provides a quick overview of your expenses, while the <span>about page</span> offers more information about our project and how it can help you. The <span>profile page</span> enables you to update your account information and manage your settings, while the <span>dropdown menu</span> provides access to all your transactions. Finally, our <span>signin/signup</span> pages make it easy for you to create an account and get started with our money-management tool.</p>
        
    <p>We've used the latest technologies to implement our project, including <span>SvelteKit</span> with <span>TypeScript</span>, <span>ESLint</span>, and <span>Prettier</span> for the frontend, and <span>Django</span> for the backend. This ensures that our website is not only user-friendly but also reliable, secure, and scalable.</p>
        
    <p>In conclusion, our money-management tool is designed to make it easy for you to manage your finances. With our simple CMS, you can keep track of your expenses, update your budget, and manage your finances with ease. So why wait? Sign up today and start taking control of your finances!</p>

</div>

<div class="container">
    <h1 class="title">Meet Our Team</h1>
    <div class="team">
        <div class="member">
            <img src="https://www.dropbox.com/s/yo8pn0emz5lblch/shohjahon.jpeg?dl=1" alt="Shohjahon's Photo">
            <h2>Shohjahon</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="member">
            <img src="https://www.dropbox.com/s/i87neewtmqns9oq/arlan.jpg?dl=1" alt="Arlan">
            <h2>Arlan</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="member">
            <img src="https://www.dropbox.com/s/oydnzmj6qlxz96n/bekzat.jpg?dl=1" alt="Bekzat">
            <h2>Bekzat</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="member">
            <img src="https://www.dropbox.com/s/dqn01zk5vyr883a/aibek.jpg?dl=1" alt="Aibek's Photo">
            <h2>Aibek</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
</div>


<style>
    .about-tools {
        max-width: 1500px;
        margin: 0 auto;
        padding: 2rem;
    }

    .about-tools p {
        font-size: 1.2rem;
        line-height: 1.5;
    }

    .about-tools p span {
        color: brown;
    }

    .container {
        max-width: 1500px;
        margin: 0 auto;
        padding: 2rem;
    }
    .title {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 2rem;
    }
    .team {
        display: grid;
        grid-template-columns: repeat(4 , 1fr);
        grid-gap: 2rem;
    }
    .member {
        text-align: center;
    }
    .member img {
        width: 300px;
        height: 300px;
        overflow: hidden;
        border-radius: 50%;
        margin-bottom: 1rem;
    }
    .member h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .member p {
        font-size: 1.2rem;
        line-height: 1.5;
    }
</style>
  