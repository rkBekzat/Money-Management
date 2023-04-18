<script lang="ts">
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chart: any;
  
    onMount(() => {
      const ctx : any = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3, 8],
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
