<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Filter } from "./types";
  import { Tags } from "./types";
  import CustomInput from "./CustomInput.svelte";

  export let filter: Filter;
  export let visible = false;
  let errorAmount = false;
  let errorDate = false;

  const dispatch = createEventDispatcher();

  function isDate (a: string): boolean {
    const dateParts: string[] = a.split(".");
    let date = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    )
    return isFinite(+date);
  }

  function typeClick(type) {
    if (filter.type != null)
      filter.type = filter.type === type ? null : type;
    else
      filter.type = type;
    dispatch("change", filter);
  }

  function tagClick(tag) {
    const tags = [...filter.tags];
    if (tags.includes(tag))
      tags.splice(tags.indexOf(tag), 1);
    else
      tags.push(tag);
    filter.tags = tags;
    dispatch("change", filter);
  }

  function amountClick(type, value) {
    if (type == 'From')
      filter.amount.from = value == "" ? null : value;
    else if (type == 'To')
      filter.amount.to = value == "" ? null : value;
    errorAmount = false;
    errorAmount = (filter.amount.to < 0 || filter.amount.from < 0 ||
      (filter.amount.to < filter.amount.from && filter.amount.to != null && filter.amount.from != null));
    dispatch("change", filter);
  }

  function dateClick(type, value) {
    if (type == 'From')
      filter.date.from = value == "" ? null : value;
    else if (type == 'To')
      filter.date.to = value == "" ? null : value;
    errorDate = false;
    if (filter.date.from != null)
      errorDate = !isDate(filter.date.from);
    if (!errorDate && filter.date.to != null)
      errorDate = !isDate(filter.date.to);
    dispatch("change", filter);
  }

</script>

{#if visible}
  <div class="filter-dropdown">
    <table>
      <tr>
        <th>Type</th>
        <td>
          <button class="type income" class:active={filter.type === 'income'} on:click={() => typeClick('income')}>
            income
          </button>
          <button class="type expense" class:active={filter.type === 'expense'} on:click={() => typeClick('expense')}>
            expense
          </button>
        </td>
      </tr>
      <tr>
        <th>Amount</th>
        <td>
          <div class="range-input">
            <CustomInput label="From" type="number" onChange={amountClick} error={errorAmount}/>
            <span>-</span>
            <CustomInput label="To" type="number" onChange={amountClick} error={errorAmount}/>
          </div>
        </td>
      </tr>
      <tr>
        <th>Tags</th>
        <td>
          {#each Tags as tag}
            <button class="tag" class:active={filter.tags.includes(tag)} on:click={() => tagClick(tag)}>{tag}</button>
          {/each}
        </td>
      </tr>
      <tr>
        <th>
          <div>Date</div>
          <div class="rules">mm.dd.yyyy</div>
        </th>
        <td>
          <div class="range-input">
            <CustomInput label="From" type="text" onChange={dateClick} error={errorDate} />
            <span>-</span>
            <CustomInput label="To" type="text" onChange={dateClick} error={errorDate}/>
          </div>
        </td>
      </tr>
    </table>
  </div>
{/if}

<style>
    .filter-dropdown {
        position: absolute;
        z-index: 1;
        right: 0;
        background-color: #222222;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid gray;
    }

    button {
        all: unset;
        display: inline-block;
        margin: 5px;
        padding: 3px 8px;
        border-radius: 5px;
        font-size: 14px;
        background-color: #555;
        color: #fff;
    }

    .range-input {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .active {
        background-color: #4caf50;
    }

    .income {
        color: greenyellow;
    }

    .expense {
        color: darkred;
    }

    .rules {
        font-size: 10px;
        color: gray;
    }
</style>