<script lang="ts">
  import { transactions } from "../../lib/transactions/getTransactions.ts";
  import TableHeader from "../../lib/History/TableHeader.svelte";
  import FilterDropdown from "../../lib/history/FilterDropdown.svelte";
  import type { Filter, Transaction } from "../../lib/types";
  import { toDate } from "../../lib/transactions/date";

  let show_transactions: Transaction[] = transactions;

  let sort = { column: "Date", asc: true };

  function sortBy(column) {
    if (sort.column === column) sort.asc = !sort.asc;
    else {
      sort.column = column;
      sort.asc = true;
    }
    sorting();
  }

  function sorting() {
    show_transactions = show_transactions.sort((a, b) => {
      let cmp = 0;
      if (sort.column === "Name") cmp = a.name.localeCompare(b.name);
      else if (sort.column === "Type") cmp = a.type.localeCompare(b.type);
      else if (sort.column === "Amount") cmp = a.amount - b.amount;
      else if (sort.column === "Date") cmp = toDate(a.date) - toDate(b.date);
      else if (sort.column === "Description") cmp = a.description.localeCompare(b.description);
      return sort.asc ? cmp : -cmp;
    });
  }

  let filter: Filter = { type: null, amount: { from: null, to: null }, tags: [], date: { from: null, to: null } };
  let filterOpen = false;

  function toggleFilter() {
    filterOpen = !filterOpen;
  }

  function filterBy(f: Filter) {
    show_transactions = transactions;
    if (f.type != null)
      show_transactions = show_transactions.filter(a => a.type === f.type);
    if (f.amount.from != null && f.amount.to != null)
      show_transactions = show_transactions.filter(a => a.amount >= f.amount.from && a.amount <= f.amount.to);
    else if (f.amount.from != null)
      show_transactions = show_transactions.filter(a => a.amount >= f.amount.from);
    else if (f.amount.to != null)
      show_transactions = show_transactions.filter(a => a.amount <= f.amount.to);
    if (f.tags.length)
      show_transactions = show_transactions.filter(a => {
        for (const tag of f.tags)
          if (!a.tags.includes(tag))
            return false;
        return true;
      });
    if (f.date.from != null && f.date.to != null)
      show_transactions = show_transactions.filter(a => toDate(a.date) >= toDate(<string>f.date.from) && toDate(a.date) <= toDate(<string>f.date.to));
    if (f.date.from != null)
      show_transactions = show_transactions.filter(a => toDate(a.date) >= toDate(<string>f.date.from));
    if (f.date.to != null)
      show_transactions = show_transactions.filter(a => toDate(a.date) <= toDate(<string>f.date.to));
    sorting();
  }
</script>

<svelte:head>
  <title>History</title>
</svelte:head>

<div class="container">
  <div class="table-filter-wrapper">
    <strong>History of transactions</strong>
    <div class="table-filter">
      <button on:click={toggleFilter}>
        <i class="fa-solid fa-filter-circle-dollar fa-xl"></i>
      </button>
      <FilterDropdown on:change={() => filterBy(filter)} filter={filter} visible={filterOpen} />
    </div>
  </div>
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
        <td class="description">{transaction.description}</td>
      </tr>
    {/each}
    </tbody>
  </table>
</div>

<style>
    button {
        all: unset;
    }

    .container {
        background-color: #121212;
        color: white;
        font-family: 'Roboto', sans-serif;
    }

    .table-filter-wrapper {
        height: 40px;
        display: grid;
        align-items: center;
        justify-content: center;
    }

    .table-filter {
        position: absolute;
        right: 10px;
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
