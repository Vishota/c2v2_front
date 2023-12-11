<script setup lang="ts">
import * as teachers from '~/composables/api/teachers'
import * as admin from '~/composables/api/admin'
import * as search from '~/composables/api/search'
import * as auth from '~/composables/api/auth'
const teacherId = parseInt(useRoute().params.id as string)
const info = (await teachers.info.req({ id: teacherId })).info
const me = (await auth.me.req())
const courses = (await search.ownedBy.req({ teacherId })).results
async function activate() {
    await admin.setTeacherActive.req({ id: teacherId, active: true })
    window.location.reload()
}
async function deactivate() {
    await admin.setTeacherActive.req({ id: teacherId, inactive: true })
    window.location.reload()
}
</script>
<template>
    <div style="display: flex; flex-direction: column; gap: 20px">
        <div class="text-big">{{ info.name }}</div>
        <div class="text-medium">Преподаватель</div>
        <div v-if="!info.is_active" class="text-small">Аккаунт не активирован</div>
        <div v-if="me.isAdmin">
            <ButtonLight @click="activate" v-if="!info.is_active">Активировать аккаунт</ButtonLight>
            <ButtonLight @click="deactivate" v-else>Деактивировать аккаунт</ButtonLight>
        </div>
        <div class="text-regular">{{ info.speciality }}</div>
        <div class="text-small" style="white-space: break-spaces;">{{ info.about }}</div>
        <div class="text-medium">Курсы</div>
        <div style="display: flex; flex-direction: column; gap: 10px">
            <div class="text-small" v-if="courses.length == 0">Пока что тут пусто</div>
            <CourseBar v-for="course in courses" :id="course" />
        </div>
    </div>
</template>