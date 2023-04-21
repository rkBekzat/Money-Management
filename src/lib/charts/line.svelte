<script lang="ts">
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chart: any;
    export let names : string[];
    export let numbers : number[];
    onMount(() => {
      const ctx : any = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: names,
          datasets: [{
            label: 'Sales',
            data: numbers,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  
  </script>
  
  <canvas id="myChart" width="200" height="100" ></canvas>
