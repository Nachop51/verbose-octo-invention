<script>
	import Nested from "./Nested.svelte";
</script>

<p>This is a paragraph.</p>
<Nested />

<!-- Notice that even though Nested.svelte has a <p> element,
   the styles from App.svelte don't leak in. -->

<style>
	p {
		color: goldenrod;
		font-family: "Comic Sans MS", cursive;
		font-size: 2em;
	}
</style>
