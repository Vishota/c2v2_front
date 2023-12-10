<script setup lang="ts">
import * as courses from '~/composables/api/courses'
import * as teachers from '~/composables/api/teachers'
const courseId = parseInt(useRoute().params.id as string);
const courseData = await courses.get.req({ id: courseId })
const courseOwner = await teachers.info.req({ id: courseData.course.owner_user_id })
</script>
<template>
    <div class="text-big">{{ courseData.course.title }}</div>
    <div class="text-regular" style=" margin-bottom: 20px; ">автор:<u>
            <To :to="'/teachers/' + courseData.course.owner_user_id">{{ courseOwner.info.name }}</To>
        </u></div>
    <div class="text-small" style="white-space: break-spaces;">{{ courseData.course.about }}</div>
    <div style="font-family: Righteous; display: flex; gap: 10px; align-items: center">
        <div style="font-size: 56px">{{ courseData.course.price }} BYN</div>
        <img src="/promotion.svg?url" style="align-self: stretch; position: relative; max-height: 100%; width: 41px;">
        <div style="font-size: 36px; color: rgb(151, 71, 255); font-family: 'Russo One';">Вернём {{
            Math.floor(courseData.course.price / 10) }}!</div>
        <div style="flex-grow: 1;"></div>
        <To :to="'/purchase/' + courseId">
            <Button1 style="width: 300px;">Купить</Button1>
        </To>
    </div>
</template>