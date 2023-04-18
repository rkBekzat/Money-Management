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
    <Chart/>
    <Line/>
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