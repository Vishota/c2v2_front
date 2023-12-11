<script setup lang="ts">
import * as teachers from '~/composables/api/teachers'
import * as auth from '~/composables/api/auth'

const me = await auth.me.req()
if (me.isTeacher) useRouter().push('/teachers/' + me.id)

let name = ref('')
let speciality = ref('')
let about = ref('')

async function send() {
    await teachers.addSelf.req({ name: name.value, speciality: speciality.value, about: about.value });
}
</script>
<template>
    <div style="display: flex; flex-direction: column; gap: 20px">
        <div class="text-big">Стать преподавателем</div>
        <div class="text-regular">
            У вас есть глубокие знания в своей области и вы готовы поделиться своим опытом со студентами?
            <br><br>
            Приглашаем вас присоединиться к нашей команде преподавателей! Наши двери открыты для тех, кто стремится
            вдохновлять
            и формировать будущее через образование.
            <br><br>
            Для того, чтобы мы рассмотрели вашу кандидатуру, укажите вашу специализацию и опишите себя и ваш опыт в форме
            ниже. Эта информация о вас
            будет
            общедоступной в дальнейшем.
        </div>
        <div v-if="!me.id" class="text-regular">
            Для того, чтобы подать заявку, необходимо авторизоваться.
        </div>
        <div v-if="!me.id" style="display: flex; justify-content: flex-end; width: 100%;">
            <Button2 @click="$router.push('/auth')" style="width: 300px">Войти</Button2>
        </div>
        <input v-if="me.id" class="frame-9 text-wrapper-2" v-model="name" style="width: 100%" placeholder="Имя">
        <input v-if="me.id" class="frame-9 text-wrapper-2" v-model="speciality" style="width: 100%" placeholder="Специализация">
        <textarea v-if="me.id" v-model="about" style="width: 100%; height: 300px" placeholder="О Вас"></textarea>
        <div v-if="me.id" style="display: flex; justify-content: flex-end; width: 100%;">
            <Button2 @click="send" style="width: 300px">Отправить заявку</Button2>
        </div>
    </div>
</template>