import { c as create_ssr_component, e as escape, f as createEventDispatcher, v as validate_component, h as each, i as null_to_empty } from "../../../chunks/index.js";
import { C as CustomInput, i as isDate, t as toDate, a as transactions } from "../../../chunks/date.js";
const TableHeader_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-1xdqub1{all:unset}th.svelte-1xdqub1{padding:12px 15px;text-align:left;background-color:#333;cursor:pointer}",
  map: null
};
const TableHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { column = "default" } = $$props;
  let { sort = { column: "", asc: true } } = $$props;
  let { sortBy = () => {
    return;
  } } = $$props;
  if ($$props.column === void 0 && $$bindings.column && column !== void 0)
    $$bindings.column(column);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.sortBy === void 0 && $$bindings.sortBy && sortBy !== void 0)
    $$bindings.sortBy(sortBy);
  $$result.css.add(css$2);
  return `<th class="svelte-1xdqub1"><button class="svelte-1xdqub1">${escape(column)}
		${sort.column === column && sort.asc ? `<i class="fa-solid fa-sort-up fa-fade"></i>` : `${sort.column === column ? `<i class="fa-solid fa-sort-down fa-fade"></i>` : ``}`}</button>
</th>`;
});
const Tags = ["Personal", "Food", "Clothes", "University", "Other", "Job", "Household", "Games", "Entertainment"];
const FilterDropdown_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".filter-dropdown.svelte-1nm0fuz{position:absolute;z-index:1;right:0;background-color:#222222;padding:10px;border-radius:10px;border:1px solid gray}button.svelte-1nm0fuz{all:unset;display:inline-block;margin:5px;padding:3px 8px;border-radius:5px;font-size:14px;background-color:#555;color:#fff}.range-input.svelte-1nm0fuz{display:flex;flex-direction:row;align-items:center}.active.svelte-1nm0fuz{background-color:#4caf50}.income.svelte-1nm0fuz{color:greenyellow}.expense.svelte-1nm0fuz{color:darkred}.rules.svelte-1nm0fuz{font-size:10px;color:gray}",
  map: null
};
const FilterDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { filter } = $$props;
  let { visible = false } = $$props;
  let errorAmount = false;
  let errorDate = false;
  const dispatch = createEventDispatcher();
  function amountClick(type, value) {
    if (type == "From")
      filter.amount.from = value == "" ? null : value;
    else if (type == "To")
      filter.amount.to = value == "" ? null : value;
    errorAmount = false;
    errorAmount = filter.amount.to < 0 || filter.amount.from < 0 || filter.amount.to < filter.amount.from && filter.amount.to != null && filter.amount.from != null;
    if (errorAmount)
      filter.amount.from = filter.amount.to = null;
    dispatch("change", filter);
  }
  function dateClick(type, value) {
    if (type == "From")
      filter.date.from = value == "" ? null : value;
    else if (type == "To")
      filter.date.to = value == "" ? null : value;
    errorDate = false;
    if (filter.date.from != null)
      errorDate = !isDate(filter.date.from);
    if (!errorDate && filter.date.to != null)
      errorDate = !isDate(filter.date.to);
    if (errorDate)
      filter.date.from = filter.date.to = null;
    dispatch("change", filter);
  }
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  $$result.css.add(css$1);
  return `${visible ? `<div class="filter-dropdown svelte-1nm0fuz"><table><tr><th>Type</th>
        <td><button class="${["type income svelte-1nm0fuz", filter.type === "income" ? "active" : ""].join(" ").trim()}">income
          </button>
          <button class="${["type expense svelte-1nm0fuz", filter.type === "expense" ? "active" : ""].join(" ").trim()}">expense
          </button></td></tr>
      <tr><th>Amount</th>
        <td><div class="range-input svelte-1nm0fuz">${validate_component(CustomInput, "CustomInput").$$render(
    $$result,
    {
      label: "From",
      type: "number",
      onChange: amountClick,
      error: errorAmount
    },
    {},
    {}
  )}
            <span>-</span>
            ${validate_component(CustomInput, "CustomInput").$$render(
    $$result,
    {
      label: "To",
      type: "number",
      onChange: amountClick,
      error: errorAmount
    },
    {},
    {}
  )}</div></td></tr>
      <tr><th>Tags</th>
        <td>${each(Tags, (tag) => {
    return `<button class="${["tag svelte-1nm0fuz", filter.tags.includes(tag) ? "active" : ""].join(" ").trim()}">${escape(tag)}</button>`;
  })}</td></tr>
      <tr><th><div>Date</div>
          <div class="rules svelte-1nm0fuz">mm.dd.yyyy</div></th>
        <td><div class="range-input svelte-1nm0fuz">${validate_component(CustomInput, "CustomInput").$$render(
    $$result,
    {
      label: "From",
      type: "text",
      onChange: dateClick,
      error: errorDate
    },
    {},
    {}
  )}
            <span>-</span>
            ${validate_component(CustomInput, "CustomInput").$$render(
    $$result,
    {
      label: "To",
      type: "text",
      onChange: dateClick,
      error: errorDate
    },
    {},
    {}
  )}</div></td></tr></table></div>` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-adj7fh.svelte-adj7fh{all:unset}.container.svelte-adj7fh.svelte-adj7fh{background-color:#121212;color:white;font-family:'Roboto', sans-serif}.table-filter-wrapper.svelte-adj7fh.svelte-adj7fh{height:40px;display:grid;align-items:center;justify-content:center}.table-filter.svelte-adj7fh.svelte-adj7fh{position:absolute;right:10px}table.svelte-adj7fh.svelte-adj7fh{width:100%}td.svelte-adj7fh.svelte-adj7fh{padding:12px 15px;text-align:left}tbody.svelte-adj7fh tr.svelte-adj7fh:nth-child(even){background-color:#222}tbody.svelte-adj7fh tr.svelte-adj7fh:hover{background-color:#444}tbody.svelte-adj7fh td span.svelte-adj7fh{display:inline-block;margin-right:5px;padding:3px 8px;border-radius:5px;font-size:14px;background-color:#555;color:#fff}.income.svelte-adj7fh.svelte-adj7fh{color:green}.expense.svelte-adj7fh.svelte-adj7fh{color:red}.description.svelte-adj7fh.svelte-adj7fh{font-size:15px;color:gray}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let show_transactions = transactions;
  let sort = { column: "Date", asc: true };
  function sortBy(column) {
    if (sort.column === column)
      sort.asc = !sort.asc;
    else {
      sort.column = column;
      sort.asc = true;
    }
    sorting();
  }
  function sorting() {
    show_transactions = show_transactions.sort((a, b) => {
      let cmp = 0;
      if (sort.column === "Name")
        cmp = a.name.localeCompare(b.name);
      else if (sort.column === "Type")
        cmp = a.type.localeCompare(b.type);
      else if (sort.column === "Amount")
        cmp = a.amount - b.amount;
      else if (sort.column === "Date")
        cmp = toDate(a.date) - toDate(b.date);
      else if (sort.column === "Description")
        cmp = a.description.localeCompare(b.description);
      return sort.asc ? cmp : -cmp;
    });
  }
  let filter = {
    type: null,
    amount: { from: null, to: null },
    tags: [],
    date: { from: null, to: null }
  };
  let filterOpen = false;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-nsjq5l_START -->${$$result.title = `<title>History</title>`, ""}<!-- HEAD_svelte-nsjq5l_END -->`, ""}

<div class="container svelte-adj7fh"><div class="table-filter-wrapper svelte-adj7fh"><strong>History of transactions</strong>
    <div class="table-filter svelte-adj7fh"><button class="svelte-adj7fh"><i class="fa-solid fa-filter-circle-dollar fa-xl"></i></button>
      ${validate_component(FilterDropdown, "FilterDropdown").$$render($$result, { filter, visible: filterOpen }, {}, {})}</div></div>
  <table class="svelte-adj7fh"><thead><tr>${validate_component(TableHeader, "TableHeader").$$render($$result, { column: "Name", sort, sortBy }, {}, {})}
      ${validate_component(TableHeader, "TableHeader").$$render($$result, { column: "Type", sort, sortBy }, {}, {})}
      ${validate_component(TableHeader, "TableHeader").$$render($$result, { column: "Amount", sort, sortBy }, {}, {})}
      ${validate_component(TableHeader, "TableHeader").$$render($$result, { column: "Date", sort, sortBy }, {}, {})}
      ${validate_component(TableHeader, "TableHeader").$$render($$result, { column: "Tags" }, {}, {})}
      ${validate_component(TableHeader, "TableHeader").$$render($$result, { column: "Description", sort, sortBy }, {}, {})}</tr></thead>
    <tbody class="svelte-adj7fh">${each(show_transactions, (transaction) => {
    return `<tr class="svelte-adj7fh"><td class="svelte-adj7fh">${escape(transaction.name)}</td>
        <td class="${escape(null_to_empty(transaction.type), true) + " svelte-adj7fh"}">${escape(transaction.type)}</td>
        <td class="svelte-adj7fh">${escape(transaction.amount)}</td>
        <td class="svelte-adj7fh">${escape(transaction.date)}</td>
        <td class="svelte-adj7fh">${each(transaction.tags, (tag) => {
      return `<span class="svelte-adj7fh">${escape(tag)}</span>`;
    })}</td>
        <td class="description svelte-adj7fh">${escape(transaction.description)}</td>
      </tr>`;
  })}</tbody></table>
</div>`;
});
export {
  Page as default
};
