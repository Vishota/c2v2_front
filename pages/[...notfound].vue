<script setup lang="ts">
    const event = useRequestEvent()

    setResponseStatus(event, 404)
</script>
<template>
    <div class="frame-wrapper">
        <div class="frame-3">
            <div style="width: 100%">
                <div class="text-wrapper-3" style="margin-bottom: 15px;">Тут ничего нет</div>
                <div class="text-wrapper-7">Кажется, вам стоит перейти на <To to="/"
                        style="text-decoration: underline; color: #54d277">Главную</To>
                </div>
                <div class="text-wrapper-3"
                    style="font-size: 14px; opacity: .5; margin-top: 5px; font-family: 'Roboto Slab', Helvetica;">
                    404 /{{ ($route.params.notfound).join('/') }}
                </div>
            </div>
        </div>
    </div>
</template>