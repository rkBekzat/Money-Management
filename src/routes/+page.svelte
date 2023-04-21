<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<layout>
  <main>
    <h1>Money Manager</h1>
    <p>Welcome to Money Manager, a simple way to manage your money!</p>

    <h2>Features</h2>
    <ul>
      <li><i class="fas fa-user-plus"></i> Create an account</li>
      <li><i class="fas fa-edit"></i> Edit your account information</li>
      <li><i class="fas fa-plus-circle"></i> Create transactions (income or expense)</li>
      <li><i class="fas fa-chart-line"></i> Track your current balance</li>
      <li><i class="fas fa-hand-holding-usd"></i> Manage permanent income</li>
      <li><i class="fas fa-calendar-alt"></i> See your expenses in a specific period</li>
      <li><i class="fas fa-filter"></i> Sort and filter your transaction history</li>
      <li><i class="fas fa-chart-bar"></i> View charts to visualize your spending habits</li>
    </ul>
  </main>
</layout>


<style>
    /* Custom styles */
    main {
        background-color: #1e1e1e;
        color: #fff;
        font-family: Kanit, sans-serif;
        margin: 0;
        padding: 0;
    }
    main {
        margin: 0 auto;
        max-width: 800px;
        padding: 40px 20px;
    }
    h1 {
        font-size: 3rem;
        margin-bottom: 20px;
        text-align: center;
        text-transform: uppercase;
    }
    h2 {
        font-size: 2rem;
        margin: 40px 0 20px;
        text-align: center;
        text-transform: uppercase;
    }
    p {
        font-size: 1.2rem;
        line-height: 1.5;
        margin-bottom: 20px;
        text-align: center;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        font-size: 1.2rem;
        line-height: 1.5;
        margin-bottom: 10px;
        position: relative;
        padding-left: 40px;
    }
    li:before {
        font-size: 1.5rem;
        left: 0;
        position: absolute;
        top: -2px;
    }
</style>