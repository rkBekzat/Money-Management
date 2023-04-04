<script lang="ts">
  import { transactions } from "../../lib/History/history.ts";
  import TableHeader from "../../lib/History/TableHeader.svelte";
  import { faFilter } from '@fortawesome/free-solid-svg-icons'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
  library.add(faFilter)

  let show_transactions = transactions;

  let sort = { column: "Date", asc: true };

  function sortBy(column) {
    if (sort.column === column)
      sort.asc = !sort.asc;
    else {
      sort.column = column;
      sort.asc = true;
    }
    show_transactions = transactions.sort((a, b) => {
      let cmp = 0;
      if (sort.column === "Name")
        cmp = a.name.localeCompare(b.name);
      else if (sort.column === "Type")
        cmp = a.type.localeCompare(b.type);
      else if (sort.column === "Amount")
        cmp = a.amount - b.amount;
      else if (sort.column === "Date") {
        const datePartsA: string[] = a.date.split(".");
        const datePartsB: string[] = b.date.split(".");
        const dateA = new Date(Number(datePartsA[2]), Number(datePartsA[1]) - 1, Number(datePartsA[0]));
        const dateB = new Date(Number(datePartsB[2]), Number(datePartsB[1]) - 1, Number(datePartsB[0]));
        cmp = dateA - dateB;
      }
      return sort.asc ? cmp : -cmp;
    });
  }

  // TODO Filter later

  sortBy("Date");
</script>

<div class="container">
    <strong>History of transactions</strong>
    <div class="table-filter">
<!--        <FontAwesomeIcon icon="filter" class="table-filter-icon" size="lg" />-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">&lt;!&ndash;! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. &ndash;&gt;<path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>-->
    </div>
    <table>
        <thead>
        <tr>
            <TableHeader column="Name" sort={sort} sortBy={sortBy} />
            <TableHeader column="Type" sort={sort} sortBy={sortBy} />
            <TableHeader column="Amount" sort={sort} sortBy={sortBy} />
            <TableHeader column="Date" sort={sort} sortBy={sortBy} />
            <TableHeader column="Tags" />
            <TableHeader column="Description" sort={sort} sortBy={sortBy} />
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