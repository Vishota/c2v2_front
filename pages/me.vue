<script setup lang="ts">
import * as search from '~/composables/api/search';
import * as auth from '~/composables/api/auth';
import kostyl from '~/composables/kostyl';
if(kostyl()) {
    console.log('kostyl...');
    useRouter().push('/k')
}
const me = await auth.me.req();
let accessed = (await search.accessibleFor.req({ accountId: me.id })).results;
const owned = me.isTeacher ? (await search.ownedBy.req({ teacherId: me.id })).results : [];
if (!me.id) useRouter().push('/auth')
accessed = accessed.filter(item => !owned.includes(item));
</script>
<template>
    <div style="display: flex; flex-direction: column; gap: 20px">
        <div class="text-big">Здравствуйте, <span style="color: #954fee;">{{ me.username }}</span>
        </div>
        <div class="text-medium">Студент</div>
        <div class="text-regular">Доступные вам курсы</div>
        <CourseBar v-for="course in accessed" :id="course"></CourseBar>
        <To to="/courses/search">
            <div style="align-items: center; position: relative; border-radius: 10px; background-color: #eee; width: 100%; overflow: hidden; display: flex; flex-direction: row; justify-content: flex-start; padding: 20px; box-sizing: border-box; gap: 20px; cursor: pointer; text-align: left; font-size: 36px; color: #000; font-family: Roboto;"
                id="frameContainer3">
                <div
                    style="flex: 1;display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;">
                    <div style="position: relative; ">Купить</div>
                </div>
                <img style="position: relative;border-radius: 10px;width: 64px;height: 64px;overflow: hidden;flex-shrink: 0;cursor: pointer;"
                    alt="" src="/go.svg?url" id="go" />
            </div>
        </To>
        <div class="text-medium">Преподаватель</div>
        <div v-show="me.isActiveTeacher" style="display: flex; flex-direction: column; gap: 20px">
            <div class="text-regular">Ваши курсы</div>
            <CourseBar v-for="course in owned" :id="course" />
            <To to="/courses/create">
                <Bar>[+] Создать</Bar>
            </To>
        </div>
        <div v-show="me.isInactiveTeacher">
            <div class="text-regular">Ваша заявка находится на рассмотрении</div>
        </div>
        <div v-show="!me.isTeacher">
            <div style="display: flex; flex-direction: column; gap: 20px">
                <div class="text-regular">Вы не преподаете</div>
                <To to="/teachers/apply">
                    <div style="align-items: center; position: relative; border-radius: 10px; background-color: #eee; width: 100%; overflow: hidden; display: flex; flex-direction: row; justify-content: flex-start; padding: 20px; box-sizing: border-box; gap: 20px; cursor: pointer; text-align: left; font-size: 36px; color: #000; font-family: Roboto;"
                        id="frameContainer3">
                        <div
                            style="flex: 1;display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;">
                            <div style="position: relative; ">Подать заявку</div>
                        </div>
                        <img style="position: relative;border-radius: 10px;width: 64px;height: 64px;overflow: hidden;flex-shrink: 0;cursor: pointer;"
                            alt="" src="/go.svg?url" id="go" />
                    </div>
                </To>
            </div>
        </div>
    </div>
</template>