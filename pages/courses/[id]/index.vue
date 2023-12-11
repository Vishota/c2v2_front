<script setup lang="ts">
import * as access from '~/composables/api/access'
import * as courses from '~/composables/api/courses'
import * as attachments from '~/composables/api/attachments'
import * as teachers from '~/composables/api/teachers'
import * as auth from '~/composables/api/auth'
import ContentBar from '~/components/ContentBar.vue';

const courseId = parseInt(useRoute().params.id as string);
const courseData = await courses.get.req({ id: courseId })
const courseOwner = await teachers.info.req({ id: courseData.course.owner_user_id })
const attached = (await attachments.list.req({ course: courseId })).attached

async function determineAccessType(): Promise<"admin" | "owner" | "access" | "guest"> {
    const me = await auth.me.req();
    if (courseData.course.owner_user_id == me.id) return 'owner'
    if (me.isAdmin) return 'admin'
    if ((await access.check.req({ course: courseId })).access) return 'access'
    return 'guest'
}

const accessType = await determineAccessType();
</script>
<template>
    <div style="display: flex; flex-direction: column; gap: 20px">
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
            <div v-if="accessType == 'guest'">
                <To :to="'/purchase/' + courseId">
                    <Button1 style="width: 300px;">Купить</Button1>
                </To>
            </div>
            <div v-else-if="accessType == 'owner'">
                <ButtonLight>Вы преподаете</ButtonLight>
            </div>
            <div v-else-if="accessType == 'admin'">
                <ButtonLight>Доступ администратора</ButtonLight>
            </div>
            <div v-else-if="accessType == 'access'">
                <ButtonLight>Приобретено</ButtonLight>
            </div>
        </div>
        <div v-if="accessType != 'guest'">
            <div class="text-medium">Учебные материалы</div>
            <div style="display: flex; flex-direction: column; gap: 10px">
                <To :to="`/courses/${courseId}/addContent`">
                    <Bar v-if="accessType == 'owner' || accessType == 'admin'">[+] Создать</Bar>
                </To>
                <To v-for="contentId in attached" :to="`/courses/${courseId}/${contentId}`">
                    <ContentBar :id="contentId" />
                </To>
            </div>
        </div>
    </div>
</template>