<script setup>
import App from './app.vue'
const error = useError();
console.warn(error);
</script>
<template>
    <App>
        <div class="frame-wrapper">
            <div class="frame-3">
                <div style="width: 100%">
                    <div class="text-wrapper-3" style="margin-bottom: 15px;">У нас возникла проблемка</div>
                    <div class="text-wrapper-7">Пока что вам стоит перейти на <To to="/"
                            style="text-decoration: underline; color: #54d277">Главную</To>
                    </div>
                    <div class="text-wrapper-3"
                        style="font-size: 14px; opacity: .5; margin-top: 5px; font-family: 'Roboto Slab', Helvetica;">
                        {{ error.statusCode }} {{ error.statusMessage }} {{ error.name }}
                    </div>
                </div>
            </div>
        </div>
    </App>
</template>