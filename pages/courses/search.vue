<script setup lang="ts">
import * as search from '~/composables/api/search'
let defaultQuery = useRoute().query.q as string
let results = search.search.ref({ text: defaultQuery });
function updateResults(searchPrompt: string) {
    search.search.ref({ text: searchPrompt })
}
</script>
<template>
    <div style="display: flex; gap: 10px; flex-direction: column;">
        <CourseSearcher :default-query="defaultQuery" style="width: 100%;" @search="updateResults" />
        <div v-if="results === null">loading...</div>
        <CourseBar v-else v-for="result in results.results" :id="result.id" />
    </div>
</template>
