<script lang="ts">
	import Balance from "../../lib/transactions/Balance.svelte";

	let name: string = '';
	let surname: string = '';
	let email: string = '';
	let username: string = '';
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>

<div>
	<div class="profile-page">
		<div class="information">
			<p>Name: {name}</p>
			<p>Surname: {surname}</p>
			<p>Username: {username}</p>
			<p>email: {email}</p>
			<button>edit</button>
		</div>
	</div>
	<div class="cards">
		<div class="balance-card">
			<Balance/>
		</div>
		<div class="income-card">

		</div>
		<div class="expense-card">

		</div>
	</div>
	<div>
		<div class="add-transaction">

		</div>
		<div class="history-transactions">

		</div>
	</div>
</div>

<style>
	button {
		width: 40%;
	}

	.profile-page {
		display: flex;
		justify-content: space-between;
		margin: 50px;
	}

	.information {
		border: 2px black;
		border-style: solid;
		border-radius: 10px;
		flex: 2;
		display: flex;
		flex-direction: column;
		padding: 15px;
	}

	.charts {
		flex: 4;
	}
</style>
