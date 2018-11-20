<template>
	<div
		:class="[`size-${size}`]"
		data-block-id="TestBlock"
	>
		<SimpleButton
			:icon="['fal', 'arrows']"
			:mode="['text', 'move']"
		/>
	</div>
</template>

<script>

	export default {
		data()
		{
			return {
				size: null
			};
		},
		mounted()
		{
			this.size = 'asdf';
		}
	};
</script>

<style>

</style>
