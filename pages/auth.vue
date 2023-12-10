<script setup lang="ts">
import * as validation from '~/composables/validation';
import * as auth from '~/composables/api/auth'

auth.me.req().then(me=>{
    if('id' in me) {
        useRouter().push('/me')
    }
})

let loginUsername = ref('');
let loginPassword = ref('');
let signupUsername = ref('');
let signupPassword = ref('');
let signupPasswordRepeat = ref('');

let badDataWarning = ref('');

async function signup() {
    let data = {
        username: signupUsername.value,
        password: signupPassword.value,
        passRepeat: signupPasswordRepeat.value
    }
    let badData:('юзернейм'|'пароль'|'повтор пароля')[] = []
    if(!validation.validateLogin( data.username )) badData.push('юзернейм')
    if(!validation.validatePassword( data.password )) badData.push('пароль')
    if(data.password != data.passRepeat) badData.push('повтор пароля')
    if(badData.length > 0) {
        badDataWarning.value = 'Перепроверьте ' + badData.join(', ');
        return;
    }
    badDataWarning.value = ''
    const result = await auth.auth.req({
        username: signupUsername.value,
        password: signupPassword.value,
        signup: true,
    })
    if(result.success === false) badDataWarning.value = 'Такой логин уже занят'
    else window.location.reload()
}
</script>
<template>
    <div class="auth-wrapper">
        <div class="vwrapper">
            <div class="text-medium">Вход</div>
            <div>
                <div class="text-small">Юзернейм</div>
                <input class="frame-9 text-wrapper-2" style="width: 100%;" placeholder="Юзернейм" v-model="loginUsername">
            </div>
            <div>
                <div class="text-small">Пароль</div>
                <input type="password" class="frame-9 text-wrapper-2" style="width: 100%;" placeholder="Пароль"
                    v-model="loginPassword">
            </div>
            <Button1>Войти</Button1>
        </div>
        <div class="vwrapper">
            <div class="text-medium">Регистрация</div>
            <div>
                <div class="text-small">Юзернейм</div>
                <input
                    :class="'frame-9 text-wrapper-2 ' + (signupUsername == '' || validation.validateLogin(signupUsername) ? '' : 'bad-input')"
                    style="width: 100%;" placeholder="Юзернейм" v-model="signupUsername">
                <div v-show="signupUsername != ''">
                    <InputRequirement :input="signupUsername"
                        :test="input => input.length >= 4 && input.length <= 16 ? 'ok' : 'bad'">От 4 до 16 символов
                    </InputRequirement>
                    <InputRequirement :input="signupUsername" :test="input => /^[a-zA-Z0-9.]+$/.test(input) ? 'ok' : 'bad'">
                        Английские буквы и цифры, а также точка
                    </InputRequirement>
                    <InputRequirement :input="signupUsername"
                        :test="input => input.at(0) == '.' || input.at(input.length - 1) == '.' || input.indexOf('..') != -1 ? 'bad' : 'ok'">
                        Точки стоят не в начале, не в конце и не рядом
                    </InputRequirement>
                </div>
            </div>
            <div>
                <div class="text-small">Пароль</div>
                <input type="password"
                    :class="'frame-9 text-wrapper-2 ' + (signupPassword == '' || validation.validatePassword(signupPassword) ? '' : 'bad-input')"
                    style="width: 100%;" placeholder="Пароль" v-model="signupPassword">
                <div v-show="signupPassword != ''">
                    <PasswordComplexity
                        :complexity="validation.passwordStrength(signupPassword) / (signupPassword.length >= 8 && signupPassword.length <= 32 ? 1 : 2.2)" />
                    <InputRequirement :input="signupPassword"
                        :test="input => validation.passwordStrength(signupPassword) / (signupPassword.length >= 8 && signupPassword.length <= 32 ? 1 : 2.2) >= .5 ? 'ok' : 'bad'">
                        Достаточная сложность
                    </InputRequirement>
                    <InputRequirement :input="signupPassword"
                        :test="input => input.length >= 8 && input.length <= 32 ? 'ok' : 'bad'">От 8 до 32 символов
                    </InputRequirement>
                    <InputRequirement :input="signupPassword" :test="input => /[a-z]/.test(input) ? 'ok' : 'warn'">Маленькие
                        буквы
                    </InputRequirement>
                    <InputRequirement :input="signupPassword" :test="input => /[A-Z]/.test(input) ? 'ok' : 'warn'">Большие
                        буквы
                    </InputRequirement>
                    <InputRequirement :input="signupPassword" :test="input => /[0-9]/.test(input) ? 'ok' : 'warn'">Цифры
                    </InputRequirement>
                    <InputRequirement :input="signupPassword" :test="input => /[\W_]/.test(input) ? 'ok' : 'warn'">
                        Специальные символы
                    </InputRequirement>
                </div>
            </div>
            <div>
                <div class="text-small">Пароль, еще раз</div>
                <input type="password" class="frame-9 text-wrapper-2" style="width: 100%;" placeholder="Пароль, еще раз"
                    v-model="signupPasswordRepeat">
                <div v-show="signupPasswordRepeat != ''">
                    <InputRequirement :input="signupPasswordRepeat" :test="input => input == signupPassword ? 'ok' : 'bad'">
                        Пароли совпадают
                    </InputRequirement>
                </div>
            </div>
            <Button1 @click="signup">Создать аккаунт</Button1>
            <div style="color: rgb(198, 51, 52)">{{ badDataWarning }}</div>
        </div>
    </div>
</template>
<style scoped>
.auth-wrapper {
    display: flex;
    gap: 20px
}

.auth-wrapper>* {
    flex-grow: 1;
    height: fit-content;
}

.vwrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

input {
    margin-top: 5px !important;
}
</style>