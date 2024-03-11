<script lang="ts">
	import Character from '$lib/character-card/character.card.svelte';
	import { CharacterClass } from '$lib/models/characterClass';
	import { CharacterPhoto } from '$lib/models/characterPhoto';

	const characterList: Array<CharacterClass> = [];
	let randAmount: number = Math.floor(Math.random() * 5) + 1;

	for (let i = 0; i < randAmount; i++) {
		addCharacter();
	}

	function addCharacter() {
		characterList.push(
			new CharacterClass(
				'newName',
				new CharacterPhoto('photo', 'photo', 'photo'),
				'newClass',
				10,
				10,
				10,
				10,
				10,
				10
			)
		);
	}

	function rollInitiative() {
		// call the roll initiative die roll lib in the future
	}
</script>

<div class="d-flex">
	<div class="title">
		<h1>Goop Session Manger</h1>
	</div>

	<div>
		<button on:click={rollInitiative}>roll initiative</button>
	</div>
	<br />

	<button on:click={addCharacter}>Add Character</button>
	<div class="char-row">
		{#each characterList as character}
			<Character {character} />
		{/each}
	</div>
</div>

<style>
	.char-row {
		display: flex;
		flex-wrap: wrap;
	}
</style>
