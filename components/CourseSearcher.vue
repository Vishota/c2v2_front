<script setup lang=ts>
const router = useRouter()
const emits = defineEmits(['search'])
const props = defineProps({
    defaultQuery: {
        type: String,
        required: false
    }
})
let searchQuery = ref(props.defaultQuery ? props.defaultQuery : '')
function search() {
    const query = searchQuery.value
    if (query) router.push('/courses/search?q=' + query)
    emits('search', query)
}
search();
</script>
<template>
    <div class="wrapper">
        <input class="frame-9 text-wrapper-2" placeholder="Искать курc" v-model="searchQuery" @keyup.enter="search">
        <div class="frame-10" style="cursor: pointer" @click="search">
            <div class="text-wrapper-5">Найти</div>
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
    width: 100%;
}
</style>