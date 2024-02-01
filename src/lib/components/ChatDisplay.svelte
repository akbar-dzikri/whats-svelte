<script lang="ts">
	interface User {
		firstName: string;
		lastName: string;
		image: string;
	}

	export let user: User;
</script>

<div class="container">
	<div class="chat-profile">
		<img src={user.image} alt="" />
	</div>
	<div class="chat-content">
		<h3>{user.firstName + ' ' + user.lastName}</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam recusandae doloremque
			culpa placeat iure voluptates rerum temporibus molestias! Possimus perspiciatis sint minus
			cumque repellendus repellat nulla excepturi rem a?
		</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
        padding: .5rem 0;
        border: var(--accent) 1px solid;
	}
	.chat-profile {
		height: 3rem;
		object-fit: cover;
		border-radius: 100%;
		overflow: clip;
		aspect-ratio: 1;
	}

	img {
		width: 100%;
		aspect-ratio: 1;
	}

	.chat-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	p {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
