<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;

    let password:string = "";
    let passwordConfirmation:string = "";
    let passwordsMatch: boolean = true;
    
    function validatePassword() {
        passwordsMatch = password === passwordConfirmation;
        if (password === passwordConfirmation) {
            console.log("Passwords match");
        } else {
            console.log("Passwords don't match");
        }
    }
</script>

<style>
	.container {
        background-color: skyblue;
		background-size: cover;
		color: #fff;
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}
	form {
		background-color: rgba(255, 255, 255, 0.8);
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		width: 100%;
		max-width: 400px;
	}
	h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
		text-align: center;
	}
	input {
		border-radius: 0.25rem;
		border: none;
		font-size: 1rem;
		margin-bottom: 1rem;
		padding: 0.75rem;
	}
	button {
		background-color: #007bff;
		border: none;
		border-radius: 0.25rem;
		color: #fff;
		cursor: pointer;
		font-size: 1rem;
		margin-top: 1rem;
		padding: 0.75rem;
	}
	button:hover {
		background-color: #0062cc;
	}
	.has-text-danger {
		color: #dc3545;
		font-size: 0.875rem;
		margin-top: 0.5rem;
	}
</style>

<div class="container">
	<h1>Register</h1>
	<form method="post">
		<input type="text" placeholder="Email" name="email" required />
		<input type="password" bind:value={password} placeholder="Password" name="password" required />
		{#if form?.errorMessage}
			<div class="has-text-danger">{form.errorMessage}</div>
		{/if}
        <input type="password" bind:value={passwordConfirmation} placeholder="Password confirmation" name="password" required />
		{#if form?.errorMessage}
			<div class="has-text-danger">{form.errorMessage}</div>
		{/if}
        <button on:click={validatePassword} type="submit" formaction="?/register">Register</button>
        {#if !passwordsMatch}
            <p style="color: red;">Passwords don't match</p>
        {/if}
	</form>
</div>


<!-- <button type="submit" formaction="?/register">Register</button> -->