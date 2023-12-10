<template>
    <div class="container">
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.container {
    width: 100%;
}

.container {
    width: min(1250px, 100vw);
    max-width: 100%;
}
</style>