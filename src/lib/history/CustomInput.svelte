<script>
  export let label = "";
  export let value = "";
  export let type = "text";
  export let onChange;
  export let error = false;

  function handleChange(event) {
    value = event.target.value;
    onChange(label, value);
  }
</script>

<div class="input-wrapper">
  <input
    type={type}
    value={value}
    on:input={handleChange}
    placeholder={label}
    class:error={error}
  />
</div>

<style>
    .input-wrapper {
        /*width: 15rem;*/
    }
    input {
        all: unset;
        width: 5rem;
        padding: 0.5rem;
        margin: 5px;
        border-radius: 8px;
        background-color: #555555;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .error {
        background-color: darkred;
    }
</style>
