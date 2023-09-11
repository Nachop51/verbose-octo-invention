<script>
	let number = '';
	$: console.log(number);
</script>

<form>
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered w-full max-w-xs rounded-xl"
		bind:value={number}
	/>
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered w-full max-w-xs rounded-xl"
	/>
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered w-full max-w-xs rounded-xl"
	/>
</form>
