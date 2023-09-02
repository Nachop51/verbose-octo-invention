<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div>
	<h1>{data.title}</h1>
	<p>{data.text}</p>
</div>
