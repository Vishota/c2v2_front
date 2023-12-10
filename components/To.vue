<script setup lang="ts">
const props = defineProps({
    to: {
        type: String,
        required: true
    }
})
</script>
<template>
    <RouterLink class="a" :to="props.to">
        <slot></slot>
    </RouterLink>
</template>
<style scoped>
    .a {
        text-decoration: none;
        color: unset
    }
</style>