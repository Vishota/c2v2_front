<script setup lang="ts">
import * as courses from '~/composables/api/courses'

let about = ref('')
let title = ref('')
let price = ref(0)

let errorMessage = ref('')

let busy = false;

async function create() {
    if(busy) {
        errorMessage.value = 'Создание курса уже идет, ожидайте'
        return;
    }
    busy = true;
    errorMessage.value = ''
    try {
        if (price.value < 0 || !about || !title) throw ''
        const result = await courses.create.req({
            title: about.value,
            about: title.value,
            price: price.value
        })
        useRouter().push('/courses/'+result.id)
    } catch {
        errorMessage.value = 'Ошибка при создании курса'
    } finally {
        busy = false
    }
}
</script>
<template>
    <div class="wrapper">
        <div class="text-big">Создание курса</div>
        <div class="text-regular">Название <span class="text-small">{{ title.length }} / 100</span></div>
        <input maxlength="100" class="frame-9 text-wrapper-2" v-model="title" placeholder="Название курса">
        <div class="text-regular">Описание <span class="text-small">{{ about.length }} / 3000</span></div>
        <textarea maxlength="3000" style="height: 300px;" v-model="about" placeholder="Описание курса"></textarea>
        <div style="display: flex; align-items: center; gap: 10px">
            <input type="number" min="0" maxlength="100" :class="'frame-9 text-wrapper-2 ' + (price < 0 ? 'bad-input' : '')"
                v-model="price" placeholder="Цена">
            <div class="text-regular">BYN</div>
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