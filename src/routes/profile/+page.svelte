<script lang="ts">
  import Chart from '$lib/charts/pie.svelte'; 
  import Line from '$lib/charts/line.svelte';     
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

  <div class="charts">
    <Chart numbers={[300, 50, 100, 40, 120]} names={['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey']} />
    <Line names={['January', 'February', 'March', 'April', 'May', 'June', 'July']} numbers={[12, 19, 3, 5, 2, 3, 8]} />
  </div>
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
    width: 40%
  }

  .profilePage{
    display: flex;
    justify-content: space-between;
    margin: 50px;
  }

  .information {
    height: 300px;
    border: 2px black;
    border-style: solid;
    border-radius: 10px;
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  .charts {
    flex: 4
  }
</style>
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
