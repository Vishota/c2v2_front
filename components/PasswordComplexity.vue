<script setup lang="ts">
defineProps({
    complexity: {
        type: Number,
        required: true
    }
})
</script>
<template>
    <div class="text-small" style="margin-top: 10px;">Сложность</div>
    <div class="complexity-bar">
        <div class="complexity-scale" :style="'width: ' + Math.floor($props.complexity * 100) + '%; background: ' + ($props.complexity < .5 ? '#c63334' : $props.complexity < .75 ? '#54d277' : '#954fee')
            "></div>
    </div>
</template>
<style scoped>
.complexity-bar {
    border-radius: 10px;
    background-color: #eee;
    margin-top: 10px;
    height: 30px;
    width: 100%;
    clip-path: content-box;
}

.complexity-scale {
    height: 100%;
    transition: .3s;
    border-radius: 10px;
}
</style>