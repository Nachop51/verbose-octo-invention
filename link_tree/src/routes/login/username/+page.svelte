<script lang="ts">
	import AuthCheck from "$lib/components/AuthCheck.svelte";
	import { db, user, userData } from "$lib/firebase";
	import { doc, getDoc, writeBatch } from "firebase/firestore";
	import NodeJS from "node:process";

	let username = "";
	let loading = false;
	let isAvailable = false;
	let debounceTimer: NodeJS.Timeout;

	const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

	$: isValid =
		username?.length > 2 && username?.length < 16 && re.test(username);
	$: isTouched = username?.length > 0;
	$: isTaken = isValid && !isAvailable && !loading;

	async function checkAvalability() {
		isAvailable = false;
		clearTimeout(debounceTimer);
		loading = true;

		debounceTimer = setTimeout(async () => {
			console.log("Checking username", username);

			const ref = doc(db, "usernames", username);
			const exists = await getDoc(ref).then((doc) => doc.exists());

			isAvailable = !exists;
			loading = false;
		});
	}

	async function confirmUsername() {
		console.log("Confirming username", username);

		const batch = writeBatch(db);
		batch.set(doc(db, "usernames", username), { uid: $user?.uid });
		batch.set(doc(db, "users", $user?.uid ?? "default"), {
			username: username,
			photoURL: $user?.photoURL ?? null,
			published: true,
			bio: "I'm new to SvelteKit!",
			links: [
				{ title: "Test link", url: "https://www.google.com", icon: "custom" },
			],
		});

		await batch.commit();

		username = "";
		isAvailable = false;
	}
</script>

<AuthCheck>
	{#if $userData?.username}
		<p>
			Your username is <span>{$userData.username}</span>
		</p>
	{:else}
		<form on:submit|preventDefault={confirmUsername} class="w-2/5">
			<input
				type="text"
				placeholder="Username"
				class="input w-full"
				bind:value={username}
				on:input={checkAvalability}
				class:input-error={!isValid && isTouched}
				class:input-warning={isTaken}
				class:input-success={isAvailable && isValid && !loading}
			/>
			<div class="my-4 min-g-16 px-8 w-full">
				{#if loading}
					<p class="text-secondary">Checking availabilty of @{username}...</p>
				{/if}
				{#if !isValid && isTouched}
					<p class="text-error text-sm">
						Username must be between 3 and 16 characters, alphanumeric only.
					</p>
				{/if}
				{#if isValid && !isAvailable && !loading}
					<p class="text-warning text-sm">
						Username @{username} is already taken.
					</p>
				{/if}
				{#if isAvailable}
					<button class="btn btn-success">Confirm username @{username} </button>
				{/if}
			</div>
		</form>
	{/if}
</AuthCheck>
