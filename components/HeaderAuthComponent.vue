<script setup lang="ts">
    import * as auth from '~/composables/api/auth';

    const me = auth.me.ref();
</script>
<template>
    <div class="frame-2">
        <div class="message-light-wrapper" style="display: none;">
            <img class="message-light" src="/messages_read.svg?url" />
        </div>
        <To v-if="me == undefined || !('id' in me)" to="/auth"><ButtonLight>Войти</ButtonLight></To>
        <To v-else to="/me"><ButtonLight>{{ me.username }}</ButtonLight></To>
    </div>
</template>