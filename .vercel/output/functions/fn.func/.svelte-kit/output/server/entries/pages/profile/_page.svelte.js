import { o as onDestroy, c as create_ssr_component, j as spread, k as escape_object, b as add_attribute, v as validate_component, e as escape } from "../../../chunks/index.js";
import { Chart as Chart$1, PieController, Title, Tooltip, Legend, ArcElement, CategoryScale } from "chart.js";
import "chart.js/auto";
import { C as CustomInput, i as isDate, t as toDate, a as transactions } from "../../../chunks/date.js";
const eventPrefix = /^on/;
const events = [];
Object.keys(globalThis).forEach((key) => {
  if (eventPrefix.test(key)) {
    events.push(key.replace(eventPrefix, ""));
  }
});
function useForwardEvents(getRef) {
  const destructors = [];
  onDestroy(() => {
    while (destructors.length) {
      destructors.pop()();
    }
  });
}
function clean(props) {
  let { data, type, options, plugins, children, $$scope, $$slots, ...rest } = props;
  return rest;
}
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { data = { datasets: [] } } = $$props;
  let { options = {} } = $$props;
  let { plugins = [] } = $$props;
  let { updateMode = void 0 } = $$props;
  let { chart = null } = $$props;
  let canvasRef;
  let props = clean($$props);
  onDestroy(() => {
    if (chart)
      chart.destroy();
    chart = null;
  });
  useForwardEvents();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.updateMode === void 0 && $$bindings.updateMode && updateMode !== void 0)
    $$bindings.updateMode(updateMode);
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  return `<canvas${spread([escape_object(props)], {})}${add_attribute("this", canvasRef, 0)}></canvas>`;
});
const Pie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart$1.register(PieController);
  let { chart = null } = $$props;
  let props;
  let baseChartRef;
  useForwardEvents();
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    props = $$props;
    $$rendered = `${validate_component(Chart, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "pie" }, props, { this: baseChartRef }, { chart }),
      {
        this: ($$value) => {
          baseChartRef = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Pie_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart$1.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
  let { numbers } = $$props;
  let { names } = $$props;
  var data = {
    labels: names,
    datasets: [{ data: numbers }]
  };
  if ($$props.numbers === void 0 && $$bindings.numbers && numbers !== void 0)
    $$bindings.numbers(numbers);
  if ($$props.names === void 0 && $$bindings.names && names !== void 0)
    $$bindings.names(names);
  return `<div style="height:250px; width:250px">${validate_component(Pie, "Pie").$$render($$result, { data, options: { responsive: true } }, {}, {})}</div>`;
});
const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { names } = $$props;
  let { numbers } = $$props;
  if ($$props.names === void 0 && $$bindings.names && names !== void 0)
    $$bindings.names(names);
  if ($$props.numbers === void 0 && $$bindings.numbers && numbers !== void 0)
    $$bindings.numbers(numbers);
  return `<canvas id="myChart" width="200" height="100"></canvas>`;
});
const Balance_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-1gw6mcy{padding:10px;display:flex;border-radius:10px;border:white;background-color:greenyellow;width:25%;gap:10px;color:black;font-family:'Kanit', sans-serif;font-size:30px}.col.svelte-1gw6mcy{display:inline-block}.right-col.svelte-1gw6mcy{width:100%}.fa-wallet.svelte-1gw6mcy{width:50px;height:50px;display:grid;align-items:center;justify-items:center;border-radius:100%;background-color:green;color:greenyellow}.balance.svelte-1gw6mcy{text-align:right}.range-input.svelte-1gw6mcy{font-size:10px;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly}.row.svelte-1gw6mcy{display:flex;justify-content:space-evenly}button.svelte-1gw6mcy{all:unset;padding:2px;font-size:10px;background-color:grey;border-radius:5px}.active.svelte-1gw6mcy{background-color:green;border:0.5px solid black}",
  map: null
};
const Balance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let date = { from: null, to: null };
  let balance = 0;
  let error = false;
  let button = "";
  function changeBalance() {
    balance = 0;
    for (const transaction of transactions) {
      if (toDate(transaction.date) >= date.from && toDate(transaction.date) <= date.to || date.to == null && date.from == null) {
        if (transaction.type == "income")
          balance += transaction.amount;
        else
          balance -= transaction.amount;
      }
    }
  }
  function lastMonthButton() {
    console.log("aaa");
    button = "month";
    date.to = /* @__PURE__ */ new Date();
    const lastMonth = /* @__PURE__ */ new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    date.from = lastMonth;
    changeBalance();
  }
  function lastYearButton() {
    button = "year";
    date.to = /* @__PURE__ */ new Date();
    const lastYear = /* @__PURE__ */ new Date();
    lastYear.setFullYear(lastYear.getFullYear() + 1);
    date.from = lastYear;
    changeBalance();
  }
  function allButton() {
    button = "all";
    date.to = null;
    date.from = null;
    changeBalance();
  }
  function dateChange(type, value) {
    error = value != "" && !isDate(value);
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
  $$result.css.add(css$1);
  return `<div class="card svelte-1gw6mcy"><div class="col left-col svelte-1gw6mcy"><i class="fa-solid fa-wallet fa-lg svelte-1gw6mcy"></i></div>
  <div class="col right-col svelte-1gw6mcy"><strong>Balance</strong>
    <br>
    <div class="balance svelte-1gw6mcy">${escape(balance)}</div>
    <div class="range-input svelte-1gw6mcy">${validate_component(CustomInput, "CustomInput").$$render(
    $$result,
    {
      label: "From",
      type: "text",
      onChange: dateChange,
      error
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
      onChange: dateChange,
      error
    },
    {},
    {}
  )}</div>
    <div class="row svelte-1gw6mcy"><button${add_attribute("onclick", allButton, 0)} class="${["svelte-1gw6mcy", button === "all" ? "active" : ""].join(" ").trim()}">All period</button>
      <button${add_attribute("onclick", () => lastMonthButton(), 0)} class="${["svelte-1gw6mcy", button === "month" ? "active" : ""].join(" ").trim()}">Last month</button>
      <button${add_attribute("onclick", lastYearButton, 0)} class="${["svelte-1gw6mcy", button === "year" ? "active" : ""].join(" ").trim()}">Last year</button></div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-p4codj{width:40%\r\n  }.information.svelte-p4codj{height:300px;border:2px black;border-style:solid;border-radius:10px;flex:2;display:flex;flex-direction:column;padding:15px}.charts.svelte-p4codj{flex:4\r\n  }button.svelte-p4codj{width:40%}.profile-page.svelte-p4codj{display:flex;justify-content:space-between;margin:50px}.information.svelte-p4codj{border:2px black;border-style:solid;border-radius:10px;flex:2;display:flex;flex-direction:column;padding:15px}.charts.svelte-p4codj{flex:4}",
  map: null
};
let name = "";
let surname = "";
let email = "";
let username = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1u2dft7_START -->${$$result.title = `<title>Profile</title>`, ""}<!-- HEAD_svelte-1u2dft7_END -->`, ""}

<div><div class="profile-page svelte-p4codj"><div class="information svelte-p4codj"><p>Name: ${escape(name)}</p>
			<p>Surname: ${escape(surname)}</p>
			<p>Username: ${escape(username)}</p>
			<p>email: ${escape(email)}</p>
			<button class="svelte-p4codj">edit</button></div></div>
	<div class="cards"><div class="balance-card">${validate_component(Balance, "Balance").$$render($$result, {}, {}, {})}</div>
		<div class="income-card"></div>
		<div class="expense-card"><div class="charts svelte-p4codj">${validate_component(Pie_1, "Chart").$$render(
    $$result,
    {
      numbers: [300, 50, 100, 40, 120],
      names: ["Red", "Green", "Yellow", "Grey", "Dark Grey"]
    },
    {},
    {}
  )}
    ${validate_component(Line, "Line").$$render(
    $$result,
    {
      names: ["January", "February", "March", "April", "May", "June", "July"],
      numbers: [12, 19, 3, 5, 2, 3, 8]
    },
    {},
    {}
  )}</div></div></div>
	<div><div class="add-transaction"></div>
		<div class="history-transactions"></div></div>
</div>`;
});
export {
  Page as default
};
