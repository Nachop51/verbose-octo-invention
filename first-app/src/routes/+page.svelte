<script lang="ts">
	// Client side data fetching
	import { onMount } from "svelte"; // lifecycle hook

	type Todo = {
		title: string;
	};

	let todo: Todo[] = []; // create state

	onMount(async () => {
		todo = await fetch(".../todos").then((r) => r.json()); // set state
	});
	// This runs in client side, this won't run in server side
	// This won't be visible for search engines

	// Client-side data fetching
	// is ideal for fetching private data

	// This is the typical way that you would do in Svelte without the Kit
</script>

<!-- render state -->
<div>
	{#each todo as item}
		<div>{item.title}</div>
	{/each}
	<!-- This is the way that Svelte handles page redirection -->
	<a href="/hello">Hello page</a>
</div>
