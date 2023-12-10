<script setup lang="ts">
import './assets/fonts.css'
import './assets/main.css'
import './assets/about.css'
</script>
<template>
	<div class="app">
		<HeaderComponent />
		<div v-if="$slots.default">
			<slot></slot>
		</div>
		<WidthWrapper v-else>
			<NuxtPage />
		</WidthWrapper>
	</div>
</template>