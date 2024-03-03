<script>
	import { invoke } from '@tauri-apps/api/tauri';

	let name = '';
	let greeting = '';
	let fart = '';
	/**
     using tauri invoke to call the greet function
	 notice how we are using tauri like an API to call the greet function
	 * hints the async structure of the function
	 NEET !
     * */
	async function greet() {
		greeting = await invoke('greet', { name });
	}

	async function fartted() {
		fart = await invoke('fart');
		fartGone();
	}

	function fartGone() {
		setTimeout(() => {
			fart = '';
		}, 2000);
	}
</script>

<div>
	<input bind:value={name} />
	<button on:click={greet}>Greet</button>
	<p>{greeting}</p>
	<button on:click={fartted}>Fart</button>
	<p>{fart}</p>
</div>
