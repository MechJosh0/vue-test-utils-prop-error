<template>
	<FontAwesomeIcon
		:icon="icon"
	/>
</template>

<script>
	export default {
		props: {
			icon: {
				type: [String, Array],
				default: ''
			},
			mode: {
				type: [String, Array],
				default: ''
			}
		}
	};
</script>
