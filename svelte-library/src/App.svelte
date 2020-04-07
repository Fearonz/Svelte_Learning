<script>
	import Library from './library/Library.svelte';

	function handleBookSelect(event){
		console.log('click',event.detail.id);
	}
</script>

<main>
	<Library on:book-select={handleBookSelect}/>
</main>

<style>
</style>