<script lang="ts">
    let title : string = "";
    let amount : number = 0;
    let tag : string = "";
    let scoops : number = 1;
</script>

<div>
    <form action="">
        <label for="Title">Title:</label> <br>
        <input type="text" bind:value={title} placeholder="title of transaction"> <br>
        <label for="amount">amount:</label> <br>
        <input type=number bind:value={amount} placeholder="amount money"> <br>
        <b>Type:</b> <br>

        <label>
            <input type=radio bind:group={scoops}  name="scoops" value={1}>
            expense
        </label> <br>
        
        <label>
            <input type=radio bind:group={scoops}  name="scoops" value={2}>
            income
        </label> <br>



        <label for="Tag">Tag:</label> <br>
        <input type="text" bind:value={tag}> <br>
        <label for="DateTime">Date and time:</label> <br>
        <input type="datetime-local"> <br>
        
        <input type="submit">
    </form>
</div>

<style>
    div {
        width: 250px;
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }

    input[type=text], input[type=number], input[type=datetime-local]{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        }

        input[type=submit]:hover {
        background-color: #45a049;
        }
</style>