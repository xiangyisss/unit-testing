<template>
	<div class="about">
		<DisplayRandomNumber :max="300" :min="200"/>
	</div>
</template>

<script setup lang="ts">
import DisplayRandomNumber from '@/components/DisplayRandomNumber.vue'

</script>

<style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>
