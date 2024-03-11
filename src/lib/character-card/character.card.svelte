<script lang="ts">
	import { CharacterClass } from '$lib/models/characterClass';
	import { CharacterPhoto } from '$lib/models/characterPhoto';
	import { IconPhoto } from '@tabler/icons-svelte';
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

<div>
	<div class="char-Header">
		{character.name}
		{character.classType}
	</div>
	<div class="char-photo">
		<!-- place holder -->
		<IconPhoto />
	</div>
	<div class="char-stats">
		{character.strength}
		{character.strengthSavingThrow}
		{character.dexterity}
		{character.dexteritySavingThrow}
		{character.constitution}
		{character.constitutionSavingThrow}
		{character.intelligence}
		{character.intelligenceSavingThrow}
		{character.wisdom}
		{character.wisdomSavingThrow}
		{character.charisma}
		{character.charismaSavingThrow}
	</div>
</div>

<style>
</style>
