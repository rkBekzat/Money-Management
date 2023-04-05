<script lang="ts">
	export let column = 'default';
	export let sort = { column: '', asc: true };
	export let sortBy = () => {
		return;
	};
</script>

<th>
	<span on:click={() => sortBy(column)}>
		{column}
		{#if sort.column === column && sort.asc}
			<i class="fa-solid fa-sort-up fa-fade"></i>
		{:else if sort.column === column}
			<i class="fa-solid fa-sort-down fa-fade"></i>
		{/if}
	</span>
</th>

<style>
	th {
		padding: 12px 15px;
		text-align: left;
		background-color: #333;
		cursor: pointer;
	}
</style>
