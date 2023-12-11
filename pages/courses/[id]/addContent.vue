<script setup lang="ts">
import * as content from '~/composables/api/content'
import * as courses from '~/composables/api/courses'
import * as attachments from '~/composables/api/attachments'

const courseId = parseInt(useRoute().params.id as string)
const courseInfo = await courses.get.req({ id: courseId })

let text = ref('')
let title = ref('')

let errorMessage = ref('')

let busy = false;

async function create() {
    if (busy) {
        errorMessage.value = 'Создание материала уже идет, ожидайте'
        return;
    }
    busy = true;
    errorMessage.value = ''
    try {
        if (!text.value || !title.value) throw ''
        const created = await content.add.req({
            title: title.value,
            content: text.value
        })
        const attached = await attachments.attach.req({
            course: courseId,
            content: created.id
        });
        useRouter().push('/courses/' + courseId + '/' + created.id)
    } catch {
        errorMessage.value = 'Ошибка при создании материала'
    } finally {
        busy = false
    }
}
</script>
<template>
    <div class="wrapper">
        <div class="text-big">Создание материала</div>
        <div class="text-medium">{{ courseInfo.course.title }}</div>
        <div class="text-regular">Название <span class="text-small">{{ title.length }} / 500</span></div>
        <input maxlength="500" class="frame-9 text-wrapper-2" v-model="title" placeholder="Заголовок">
        <div class="text-regular">Описание <span class="text-small">{{ text.length }} / 12000</span></div>
        <textarea maxlength="12000" style="height: 300px;" v-model="text" placeholder="Текст"></textarea>
        <div style="display: flex; flex-direction: row-reverse; align-items: center; gap: 10px">
            <Button1 @click="create" style="width: 300px;">Создать</Button1>
        </div>
        <div class="text-small" style="color: #f00; text-align: right;">{{ errorMessage }}</div>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.wrapper>* {
    width: 100%;
}
</style>