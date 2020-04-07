<script>
	import Detail from './detail/Detail.svelte';
	import Library from './library/Library.svelte';

	let page = 'library'
	let pageArgs = {}
	function handleBookSelect(event){
		page = 'detail'
		pageArgs = event.detail
	}
</script>

<main>
	{#if page === 'detail'}
	<Detail />
	{:else}
	<Library on:book-select={handleBookSelect}/>
	{/if}
</main>

<style>
</style>