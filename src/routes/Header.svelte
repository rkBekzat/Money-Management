<script>
	let isUser = false;
	let dropdownOpen = false;
	let header;

	function toggleDropdown() {
		dropdownOpen = !dropdownOpen;
	}
</script>
<header class="header-container" bind:this={header}>
	<div class="header-left">
    <img src="favicon.png" alt="Logo" class="header-logo">
		<span class="header-title">Money Management</span>
	</div>
	<nav class="header-nav">
		<a href="/" class="header-link">Home</a>
		<a href="/profile" class="header-link">Profile</a>
		<div class="header-dropdown" on:click={toggleDropdown}>
			<span class="header-link">Transactions</span>
			{#if dropdownOpen}
				<div class="header-dropdown-menu">
					<a href="/add" class="header-dropdown-link">Add</a>
					<a href="/history" class="header-dropdown-link">History</a>
				</div>
			{/if}
		</div>
		<a href="/about" class="header-link">About</a>
	</nav>
	<div class="header-right">
		{#if isUser}
			<button class="header-button" on:click={alert('No function')}>Sign Out</button>
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
		background-color: black;
		color: silver;
		font-family: 'Kanit', sans-serif;
		font-size: 20px;
	}

	.header-left {
		display: flex;
		align-items: center;
		/*font-family: ;*/
		/*font-size: 20px;*/
	}

	.header-logo {
		width: 32px;
		height: 32px;
		margin-right: 8px;
	}

	.header-title {
		font-weight: bold;
	}

	.header-nav {
		display: flex;
		align-items: center;
	}

	.header-link {
		margin-left: 24px;
		color: silver;
		text-decoration: none;
		cursor: pointer;
	}

	.header-link:hover {
		text-decoration: underline;
	}

	.header-dropdown {
		position: relative;
	}

	.header-dropdown-menu {
		position: absolute;
		width: 80%;
		left: 18px;
		z-index: 1;
		background-color: #333333;
		border: 1px solid gray;
		padding: 5px;
		margin-top: 5px;
		border-radius: 10px;
		gap: 5px;
	}

	.header-dropdown-link {
		display: block;
		color: silver;
		text-decoration: none;
		padding: 5px;
	}

	.header-dropdown-link:hover {
		background-color: #222222;
		border-radius: 5px;
	}

	.header-button {
		color: silver;
		margin-right: 10px;
	}
</style>
