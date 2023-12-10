<script setup lang="ts">
import * as courses from '~/composables/api/courses'
import * as finances from '~/composables/api/finances'
const courseId = parseInt(useRoute().params.id as string)
const courseInfo = (await courses.get.req({ id: courseId })).course

async function purchase() {
    const deposit = await finances.deposit.req({ amount: courseInfo.price, method: 'freemoney' });
    await finances.createWallet.req()
    if(!deposit.success) cancel();
    const buy = await finances.buy.req({ id: courseId });
    useRouter().push(`/mycourses/${courseId}`);
}
async function cancel() {
    useRouter().push(`/courses/${courseId}`);
}
</script>
<template>
    <div class="text-big">*Внешняя платежная система*</div>
    <div class="text-regular">Здесь должна быть подключена внешняя платежная система: Payeer, Qiwi, платежная система
        какого-либо банка или какая-либо еще<br>Поскольку система работает в тестовом режиме, в данном окне можно
        сымитировать оплату</div><br>
    <div class="text-regular">Сумма платежа: {{ courseInfo.price }} BYN</div>
    <Button1 @click="purchase" style="margin-top: 10px;">Подтвердить оплату</Button1>
    <Button2 @click="cancel" style="margin-top: 10px;">Отменить оплату</Button2>
    <!-- {{ courseInfo.price }} -->
</template>