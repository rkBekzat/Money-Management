<script lang="ts">
  import Chart from '$lib/charts/pie.svelte'; 
  import Line from '$lib/charts/line.svelte';     

  let name : string = "";
  let surname : string = "";
  let email : string = "";
  let username : string = "";
</script>


<div class="profilePage">

  <div class="information">
    <p>Name: {name}</p>
    <p>Surname: {surname}</p>
    <p>Username: {username}</p>
    <p>email: {email}</p>
    <button>edit</button>
  </div>

  <div class="charts">
    <Chart numbers={[300, 50, 100, 40, 120]} names={['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey']} />
    <Line names={['January', 'February', 'March', 'April', 'May', 'June', 'July']} numbers={[12, 19, 3, 5, 2, 3, 8]} />
  </div>

</div>

<style>
  button {
    width: 40%
  }

  .profilePage{
    display: flex;
    justify-content: space-between;
    margin: 50px;
  }

  .information {
    height: 300px;
    border: 2px black;
    border-style: solid;
    border-radius: 10px;
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  .charts {
    flex: 4
  }
</style>