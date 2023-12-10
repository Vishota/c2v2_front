<script setup lang="ts">
import * as courses from '~/composables/courses'
let defaultQuery = useRoute().query.q as string
let results = ref('loading' as 'loading' | number[] | 'error')

async function search(query: string) {
    results.value = 'loading'
    results.value = await courses.search(query).catch(e=>'error')
}
</script>
<template>
    <div style="display: flex; gap: 10px; flex-direction: column;">
        <CourseSearcher :default-query="defaultQuery" style="width: 100%;" @search="search" />
        <div v-if="results == 'loading'">loading...</div>
        <div v-else-if="results == 'error'">error</div>
        <CourseBar v-else v-for="courseId in results" :id="courseId" />
    </div>
</template>
