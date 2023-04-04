<script lang="ts">
  import { faSortUp } from '@fortawesome/free-solid-svg-icons'
  import { faSortDown } from '@fortawesome/free-solid-svg-icons'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'

  library.add(faSortUp)
  library.add(faSortDown)

  export let column = "default";
  export let sort = {column: '', asc: true};
  export let sortBy = () => {return};
</script>

<th>
    <span on:click={() => sortBy(column)}>
        {column}
        {#if sort.column === column && sort.asc}
             <FontAwesomeIcon icon="sort-up" />
        {:else if sort.column  === column}
             <FontAwesomeIcon icon="sort-down" />
        {/if}
    </span>
</th>

<style>
    th{
        padding: 12px 15px;
        text-align: left;
        background-color: #333;
        cursor: pointer;
    }
</style>