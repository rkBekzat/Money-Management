<script lang="ts">
	export let column = 'default';
	export let sort = { column: '', asc: true };
	export let sortBy = () => {
		return;
	};
</script>

<th>
	<button on:click={() => sortBy(column)}>
		{column}
		{#if sort.column === column && sort.asc}
			<i class="fa-solid fa-sort-up fa-fade"></i>
		{:else if sort.column === column}
			<i class="fa-solid fa-sort-down fa-fade"></i>
		{/if}
	</button>
</th>

<style>
	button {
		all: unset;
	}

	th {
		padding: 12px 15px;
		text-align: left;
		background-color: #333;
		cursor: pointer;
	}
</style>
