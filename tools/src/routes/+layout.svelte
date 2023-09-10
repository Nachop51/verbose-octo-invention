<script>
	import '../app.css';
</script>

<nav class="flex space-around items-center p-4 bg-slate-50">
	<a href="/tools">Tools</a>
	<a href="/">Home</a>
</nav>

<main class="min-h-screen">
	<slot />
</main>

<style>
	nav a {
		text-decoration: none;
		color: #333;
	}
</style>
