<script>
	let numbers = [1, 2, 3, 4];

	function addNumber() {
		// Array.push() will mutate the array, but Svelte will not detect the change
		numbers = [...numbers, numbers.length + 1];
	}

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<p>{numbers.join(" + ")} = {sum}</p>

<button on:click={addNumber}> Add a number </button>

<!-- A simple rule of thumb: the name of the updated variable must appear on the left hand side of the assignment. For example this...

const foo = obj.foo;
foo.bar = 'baz';
...won't trigger reactivity on obj.foo.bar, unless you follow it up with obj = obj. -->
