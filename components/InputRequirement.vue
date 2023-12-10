<script setup lang="ts">
interface Props {
    input: string
    test: (input: string) => 'bad' | 'warn' | 'ok'
}
defineProps<Props>()
</script>
<template>
    <div style="display: flex; gap: 10px;   margin-top: 10px;">
        <img v-if="$props.test($props.input) == 'ok'" src="/input_ok.svg?url"
            style="scale: 1.2;filter: invert(82%) sepia(10%) saturate(2653%) hue-rotate(76deg) brightness(93%) contrast(76%);">
        <img v-else-if="$props.test($props.input) == 'warn'" src="/input_warn.svg?url"
            style="filter: invert(35%) sepia(56%) saturate(1861%) hue-rotate(243deg) brightness(95%) contrast(97%);">
        <img v-else src="/input_bad.svg?url"
            style="filter: invert(25%) sepia(95%) saturate(1881%) hue-rotate(343deg) brightness(82%) contrast(86%);">
        <div class="text-small">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
    img {
        height: 26px;
        width: 26px;
    }
</style>