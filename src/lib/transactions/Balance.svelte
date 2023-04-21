<script lang="ts">
  import { transactions } from "./getTransactions";
  import { isDate, toDate } from "./date";
  import type { dateType, Transaction } from "../types";
  import CustomInput from "../history/CustomInput.svelte";

  let date: dateType = { from: null, to: null };

  let balance = 0;
  let error = false;
  let button = '';
  function changeBalance() {
    balance = 0;
    for (const transaction: Transaction of transactions) {
      if ((toDate(transaction.date) >= date.from && toDate(transaction.date) <= date.to)
        || (date.to == null && date.from == null)) {
        if (transaction.type == "income")
          balance += transaction.amount;
        else
          balance -= transaction.amount;
      }
    }
  }

  function lastMonthButton() {
    console.log('aaa');
    button = 'month';
    date.to = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    date.from = lastMonth;
    changeBalance();
  }

  function lastYearButton() {
    button = 'year';
    date.to = new Date();
    const lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() + 1);
    date.from = lastYear;
    changeBalance();
  }

  function allButton() {
    button = 'all';
    date.to = null;
    date.from = null;
    changeBalance();
  }

  function dateChange(type, value) {
    error = value != '' && !isDate(value);
    if (type == "From")
      date.from = value == "" ? null : toDate(value);
    else if (type == "To")
      date.to = value == "" ? null : toDate(value);
    if (error)
      date.from = date.to = null;
    button = date.from == null && date.to == null ? "all" : "none";
    changeBalance();
  }

  allButton();
</script>

<div class="card">
  <div class="col left-col">
    <i class="fa-solid fa-wallet fa-lg"></i>
  </div>
  <div class="col right-col">
    <strong>Balance</strong>
    <br>
    <div class="balance">
      {balance}
    </div>
    <div class="range-input">
      <CustomInput label="From" type="text" onChange={dateChange} error={error} />
      <span>-</span>
      <CustomInput label="To" type="text" onChange={dateChange} error={error} />
    </div>
    <div class="row">
      <button class:active={button === 'all'} onclick={allButton}>All period</button>
      <button class:active={button === 'month'} onclick={() => lastMonthButton()}>Last month</button>
      <button class:active={button === 'year'} onclick={lastYearButton}>Last year</button>
    </div>
  </div>
</div>

<style>
    .card {
        padding: 10px;
        display: flex;
        border-radius: 10px;
        border: white;
        background-color: greenyellow;
        width: 25%;
        gap: 10px;
        color: black;
        font-family: 'Kanit', sans-serif;
        font-size: 30px;
    }

    .col {
        display: inline-block;
    }

    .right-col {
        width: 100%;
    }

    .fa-wallet {
        width: 50px;
        height: 50px;
        display: grid;
        align-items: center;
        justify-items: center;
        border-radius: 100%;
        background-color: green;
        color: greenyellow;
    }

    .balance {
        text-align: right;
    }

    .range-input {
        font-size: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .row {
        display: flex;
        justify-content: space-evenly;
    }

    button {
        all: unset;
        padding: 2px;
        font-size: 10px;
        background-color: grey;
        border-radius: 5px;
    }

    .active {
        background-color: green;
        border: 0.5px solid black;
    }

</style>