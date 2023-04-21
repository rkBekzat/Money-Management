<!-- AboutPage.svelte -->
<div class="container">
    <h1 class="title">Meet Our Team</h1>
    <div class="team">
        <div class="member">
            <img src="https://via.placeholder.com/150" alt="Shohjahon">
            <h2>Shohjahon</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="member">
            <img src="https://via.placeholder.com/150" alt="Arlan">
            <h2>Arlan</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="member">
            <img src="https://via.placeholder.com/150" alt="Bekzat">
            <h2>Bekzat</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="member">
            <img src="https://via.placeholder.com/150" alt="Aibek">
            <h2>Aibek</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
</div>


<style>
    .container {
        max-width: 1000px;
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
        grid-template-columns: repeat(2 , 1fr);
        grid-gap: 2rem;
    }
    .member {
        text-align: center;
    }
    .member img {
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
  