<script lang="ts">
	import { transactions } from '../../lib/History/history.ts';
	import TableHeader from '../../lib/History/TableHeader.svelte';

	let show_transactions = transactions;

	let sort = { column: 'Date', asc: true };

	function sortBy(column) {
		if (sort.column === column) sort.asc = !sort.asc;
		else {
			sort.column = column;
			sort.asc = true;
		}
		show_transactions = transactions.sort((a, b) => {
			let cmp = 0;
			if (sort.column === 'Name') cmp = a.name.localeCompare(b.name);
			else if (sort.column === 'Type') cmp = a.type.localeCompare(b.type);
			else if (sort.column === 'Amount') cmp = a.amount - b.amount;
			else if (sort.column === 'Date') {
				const datePartsA: string[] = a.date.split('.');
				const datePartsB: string[] = b.date.split('.');
				const dateA = new Date(
					Number(datePartsA[2]),
					Number(datePartsA[1]) - 1,
					Number(datePartsA[0])
				);
				const dateB = new Date(
					Number(datePartsB[2]),
					Number(datePartsB[1]) - 1,
					Number(datePartsB[0])
				);
				cmp = dateA - dateB;
			}
			return sort.asc ? cmp : -cmp;
		});
	}

	// TODO Filter later

	sortBy('Date');
</script>

<div class="container">
	<strong>History of transactions</strong>
	<div class="table-filtersss">
		<i class="fa-solid fa-filter-circle-dollar fa-xl"></i>
	</div>
	<i class="fa-regular fa-filters"></i>
	<table>
		<thead>
			<tr>
				<TableHeader column="Name" {sort} {sortBy} />
				<TableHeader column="Type" {sort} {sortBy} />
				<TableHeader column="Amount" {sort} {sortBy} />
				<TableHeader column="Date" {sort} {sortBy} />
				<TableHeader column="Tags" />
				<TableHeader column="Description" {sort} {sortBy} />
			</tr>
		</thead>
		<tbody>
			{#each show_transactions as transaction}
				<tr>
					<td>{transaction.name}</td>
					<td class={transaction.type}>{transaction.type}</td>
					<td>{transaction.amount}</td>
					<td>{transaction.date}</td>
					<td>
						{#each transaction.tags as tag}<span>{tag}</span>{/each}
					</td>
					<td class="description">{transaction.description || '-'}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.container {
		background-color: #121212;
		color: white;
		font-family: 'Roboto', sans-serif;
	}

	.table-filter {
		/*padding-right: 40px;*/
		/*position: relative;*/
		/*width: 100%;*/
		/*height: 0;*/
		/*width: 0;*/
	}

	table {
		/*border-collapse: collapse;*/
		width: 100%;
	}

	td {
		padding: 12px 15px;
		text-align: left;
	}

	tbody tr:nth-child(even) {
		background-color: #222;
	}

	tbody tr:hover {
		background-color: #444;
	}

	tbody td span {
		display: inline-block;
		margin-right: 5px;
		padding: 3px 8px;
		border-radius: 5px;
		font-size: 14px;
		background-color: #555;
		color: #fff;
	}

	.income {
		color: green;
	}

	.expense {
		color: red;
	}

	.description {
		font-size: 15px;
		color: gray;
	}
</style>
