<script setup lang="ts">
defineProps(['text'])
</script>
<template>
    <To :to="'/courses/search?q=' + $props.text">
        <div class="frame-7">
            <div class="text-wrapper-5">{{ $props.text }}</div>
        </div>
    </To>
</template>