<script lang="ts">
	export let number = '';
	export let base = 10;
	export let text = '';

	$: value = number !== 'NaN' ? parseInt(number).toString(base) : null;
</script>

<div class="join mb-3 w-full">
	<input type="text" class="input join-item w-full max-w-ws" disabled bind:value />

	<button
		on:click={() => navigator.clipboard.writeText(value?.toString() || '')}
		class="btn join-item mr-0">{text}</button
	>
</div>
