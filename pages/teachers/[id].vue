<script setup lang="ts">
import * as teachers from '~/composables/api/teachers'
import * as search from '~/composables/api/search'
const info = (await teachers.info.req({ id: parseInt(useRoute().params.id as string) })).info
const courses = (await search.ownedBy.req({ teacherId: parseInt(useRoute().params.id as string) })).results
</script>
<template>
    <div style="display: flex; flex-direction: column; gap: 20px">
        <div class="text-big">{{ info.name }}</div>
        <div class="text-medium">Преподаватель</div>
        <div class="text-regular">{{ info.speciality }}</div>
        <div class="text-small" style="white-space: break-spaces;">{{ info.about }}</div>
        <div class="text-medium">Курсы</div>
        <div style="display: flex; flex-direction: column; gap: 10px">
            <CourseBar v-for="course in courses" :id="course" />
        </div>
    </div>
</template>