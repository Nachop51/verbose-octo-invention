<script>
	let number = '';
	$: console.log(number);
	$: hexNumber = number ? parseInt(number, 10).toString(16) : '';
	$: octNumber = number ? parseInt(number, 10).toString(8) : '';
</script>

<form>
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered w-full max-w-xs rounded-xl"
		bind:value={number}
		on:input={() => console.log('number', number)}
	/>
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered w-full max-w-xs rounded-xl"
		bind:value={hexNumber}
	/>
	<input
		type="text"
		placeholder="Type here"
		class="input input-bordered w-full max-w-xs rounded-xl"
		bind:value={octNumber}
	/>
</form>
