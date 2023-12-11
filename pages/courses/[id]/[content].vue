<script setup lang="ts">
import * as attachments from '~/composables/api/attachments'
import * as content from '~/composables/api/content'

const courseId = parseInt(useRoute().params.id as string);
const contentId = parseInt(useRoute().params.content as string);

const attached = (await attachments.list.req({ course: courseId })).attached;

const next = attached[attached.indexOf(contentId) + 1]
const prev = attached[attached.indexOf(contentId) - 1]

const contentInfo = await content.get.req({ id: contentId })
</script>
<template>
    <div class="text-big">{{ contentInfo.title }}</div>
    <div class="text-regular" style="white-space: break-spaces;">{{ contentInfo.content }}</div>
    <div class="navigation">
        <Button1 @click="$router.push(prev + '')" v-if="prev">Назад</Button1>
        <ButtonLight v-else>Начало</ButtonLight>
        <Button2 @click="$router.push('../')">К курсу</Button2>
        <Button1 @click="$router.push(next + '')" v-if="next">Вперед</Button1>
        <ButtonLight v-else>Конец</ButtonLight>
    </div>
</template>
<style scoped>
.navigation {
    display: flex;
    gap: 10px;
}

.navigation > * {
    flex-grow: 1;
    width: auto;
    text-align: center;
}
</style>