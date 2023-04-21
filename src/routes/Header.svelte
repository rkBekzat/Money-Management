<script>
  let isUser = false;
  let dropdownOpen = false;

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }
</script>

<header class="header-container">
    <div class="header-left">
        <img src="favicon.png" alt="Logo" class="header-logo">
        <span class="header-title">Money Management</span>
    </div>
    <nav class="header-nav">
        <a href="/" class="header-link">Home</a>
        <a href="/profile" class="header-link">Profile</a>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="header-dropdown" on:click={toggleDropdown}>
            <span class="header-link">Dropdown</span>
            {#if dropdownOpen}
                <div class="header-dropdown-menu">
                    <a href="add" class="header-dropdown-link">Add Transaction</a>
                    <a href="history" class="header-dropdown-link">History</a>
                </div>
            {/if}
        </div>
        <a href="/about" class="header-link">About</a>
    </nav>
    <div class="header-right">
        {#if isUser}
            <button class="header-button" on:click={handleLogout}>Sign Out</button>
        {:else}
            <a href="/login" class="header-button">Sign In</a>
        {/if}
    </div>
</header>

<style>
    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        background-color: #333;
        color: #fff;
    }

    .header-left {
        display: flex;
        align-items: center;
    }

    .header-logo {
        width: 32px;
        height: 32px;
        margin-right: 8px;
    }

    .header-title {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .header-nav {
        display: flex;
        align-items: center;
    }

    .header-link {
        margin-left: 24px;
        color: #fff;
        text-decoration: none;
        font-size: 1.2rem;
    }

    .header-link:hover {
        text-decoration: underline;
    }

    .header-dropdown {
        position: relative;
    }

    .header-dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1;
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }

    .header-dropdown-link {
        display: block;
        color: #333;
        text-decoration: none;
        padding: 4px 0;
        font-size: 1.1rem;
    }

    .header-dropdown-link:hover {
        background-color: #f4f4f4;
    }

    .header-button {
        color: #f4f4f4;
        margin-right: 10px;
    }
</style>