<script lang="ts">
	import { CharacterClass } from '$lib/models/characterClass';
	import { CharacterPhoto } from '$lib/models/characterPhoto';
	/**
	 * Character Card layout.
	 * Photo with ability to change
	 * Name and class
	 * Stats and modifiers
	 * feats
	 * notes ( for now will also be inventory)
	 * Dice roll button ( will link to another lib file)
	 *
	 */

	//---------import the character--------
	export const character: CharacterClass = new CharacterClass(
		'name',
		new CharacterPhoto('photo', 'photo', 'photo'),
		'class',
		10,
		10,
		10,
		10,
		10,
		10
	);
</script>
