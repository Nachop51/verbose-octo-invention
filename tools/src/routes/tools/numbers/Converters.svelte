<script lang="ts">
	import Input from './Input.svelte';

	let number = '';
	let newMode = 'dec';
	const bases = {
		hex: 16,
		dec: 10,
		oct: 8,
		bin: 2
	};

	$: realValue = parseInt(number, bases[newMode as keyof typeof bases]).toString();

	function swapMode(mode: string) {
		if (mode === newMode) return;
		newMode = mode;
	}
</script>

<form class="py-4">
	<div class="join mb-3 w-full">
		<input
			type="text"
			placeholder="Type a number"
			class="input join-item flex-grow"
			bind:value={number}
		/>
		<button
			class="btn join-item mr-0"
			on:click={() => navigator.clipboard.writeText(number?.toString() || '')}>{newMode}</button
		>
	</div>
	{#key newMode}
		{#each Object.entries(bases) as [baseName, baseValue]}
			{#if baseName !== newMode}
				<Input number={realValue} text={baseName} base={baseValue} />
			{/if}
		{/each}
	{/key}
	<div class="flex flex-col justify-center items-center">
		<h3 class="font-semibold">Swap between modes...</h3>
		<ul
			class="menu menu-vertical sm:menu-horizontal bg-base-200 font-semibold text-neutral-content rounded-box"
		>
			<li><button on:click={() => swapMode('hex')}>Hex</button></li>
			<li><button on:click={() => swapMode('dec')}>Dec</button></li>
			<li><button on:click={() => swapMode('oct')}>Oct</button></li>
			<li><button on:click={() => swapMode('bin')}>Bin</button></li>
		</ul>
	</div>
</form>
