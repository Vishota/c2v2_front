<script setup lang="ts">
    import * as admin from '~/composables/api/admin'

    const teachers = (await admin.getInactive.req()).teachers
</script>
<template>
    <div style="display: flex; gap: 10px; flex-direction: column;">
        <div class="text-big">Заявки на преподавание</div>
        <div class="text-regular">Для активации преподавательского аккаунта перейдите на его страницу и нажмите на соответствующую кнопку</div>
        <div class="text-medium">Последние неактивированные аккаунты</div>
        <TeacherInfo v-for="id in teachers" :id="id" />
    </div>
</template>