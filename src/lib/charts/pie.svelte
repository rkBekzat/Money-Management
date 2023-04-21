<script lang="ts">
  import { Pie } from 'svelte-chartjs';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

  export let numbers : number[]; 
  export let names : string[];
  var data = {
  labels: names,
  datasets: [
    {
      data: numbers,
    },
  ],
};

</script>

<div style="height:250px; width:250px">

    <Pie {data} options={{ responsive: true }}/>
</div>
