import { c as create_ssr_component, b as add_attribute } from "./index.js";
const transactions = [
  {
    name: "Пятерочка",
    type: "expense",
    amount: 1499,
    tags: ["Personal", "Food"],
    date: "10.01.2023",
    description: "-"
  },
  {
    name: "Salon",
    type: "expense",
    amount: 900,
    tags: ["Personal", "Other"],
    date: "10.02.2023",
    description: "Haircut"
  },
  {
    name: "Пятерочка",
    type: "expense",
    amount: 900,
    tags: ["Personal", "Food"],
    date: "15.01.2023",
    description: "-"
  },
  {
    name: "Shopping",
    type: "expense",
    amount: 1e3,
    tags: ["Personal", "Clothes"],
    date: "29.01.2022",
    description: "New T-shirt"
  },
  {
    name: "Scholarship",
    type: "income",
    amount: 10,
    tags: ["Personal", "University"],
    date: "25.03.2023",
    description: "OOOOOOOOOOOOOOO thx God"
  },
  {
    name: "Scholarship",
    type: "income",
    amount: 10,
    tags: ["Personal", "University"],
    date: "25.02.2023",
    description: "OOOOOOOOOOOOOOO thx God"
  },
  {
    name: "Lorem",
    type: "expense",
    amount: 1,
    tags: [],
    date: "19.09.1999",
    description: "Lorem"
  },
  {
    name: "Prize",
    type: "income",
    amount: 2e3,
    tags: ["Personal", "University", "Sport"],
    date: "10.04.2023",
    description: "Tournament prize"
  },
  {
    name: "Shaurma",
    type: "expense",
    amount: 9e3,
    tags: ["Personal", "Food"],
    date: "17.04.2023",
    description: "Very good"
  },
  {
    name: "Kinopoisk",
    type: "expense",
    amount: 300,
    tags: ["Personal", "Entertainment"],
    date: "01.01.2023",
    description: "Avatar 2"
  },
  {
    name: "Yandex Music",
    type: "expense",
    amount: 990,
    tags: ["Personal", "Entertainment"],
    date: "29.12.2022",
    description: "Music subscription for year"
  },
  {
    name: "Macbook",
    type: "expense",
    amount: 1e5,
    tags: ["Personal", "Household"],
    date: "01.01.2053",
    description: "New MacBook"
  }
];
const CustomInput_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-1g71iqx{all:unset;width:5rem;padding:0.5rem;margin:5px;border-radius:8px;background-color:#555555}input.svelte-1g71iqx::-webkit-outer-spin-button,input.svelte-1g71iqx::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.error.svelte-1g71iqx{background-color:darkred}",
  map: null
};
const CustomInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { type = "text" } = $$props;
  let { onChange } = $$props;
  let { error = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css);
  return `<div class="input-wrapper svelte-1g71iqx"><input${add_attribute("type", type, 0)}${add_attribute("value", value, 0)}${add_attribute("placeholder", label, 0)} class="${["svelte-1g71iqx", error ? "error" : ""].join(" ").trim()}">
</div>`;
});
function toDate(a) {
  const dateParts = a.split(".");
  return new Date(
    Number(dateParts[2]),
    Number(dateParts[1]) - 1,
    Number(dateParts[0])
  );
}
function isDate(a) {
  const dateParts = a.split(".");
  const date = new Date(
    Number(dateParts[2]),
    Number(dateParts[1]) - 1,
    Number(dateParts[0])
  );
  return isFinite(+date);
}
export {
  CustomInput as C,
  transactions as a,
  isDate as i,
  toDate as t
};
