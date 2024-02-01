<script lang="ts">
	import ChatDisplay from '$lib/components/ChatDisplay.svelte';
	export let data;
	const users = data.data;
	// console.log(data);
</script>

{#each users as user}
	<a href="/chat">
		<ChatDisplay {user} />
	</a>
{/each}
