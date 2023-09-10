<script>
	import '../app.css';
</script>

<nav class="navbar bg-base">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/tools">Tools</a></li>
			<li>
				<details class="w-full">
					<summary>List of tools</summary>
					<ul class="p-2 bg-base-100">
						<li><a href="/tools/hex">Hex</a></li>
						<li><a href="/tools/str">Str</a></li>
						<li><a href="/tools/test">Test</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
</nav>

<div class="min-h-screen flex flex-col bg-base mx-auto text-base-content">
	<slot />
</div>
