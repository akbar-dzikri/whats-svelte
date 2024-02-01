<script lang="ts">
	import ToggleTheme from '$lib/components/ToggleTheme.svelte';
	import '$lib/main.css';
</script>

<svelte:head>
	<title>Whats-Svelte</title>
</svelte:head>

<header>
	<nav>
		<div class="branding">
			<img src="/logo.svg" alt="svelte logo" />
			<span>Whats<span>Svelte</span></span>
		</div>
		<ToggleTheme />
	</nav>
</header>

<main>
	<slot />
</main>

<style>
	header {
		padding: 0.5rem 1rem;
		background-color: var(--primary);
		position: sticky;
		top: 0;
		z-index: 50;
	}
	nav {
		display: flex;
		justify-content: space-between;
		color: #ffffff;
		align-items: center;
		font-size: 1.3em;
	}
	.branding{
		display: flex;
		align-items: center;
		gap: 8px;

	}
	nav img {
		width: 2rem;
	}
</style>
