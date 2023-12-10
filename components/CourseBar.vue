<script setup lang="ts">
import * as courses from '~/composables/courses'
const props = defineProps({
    id: {
        type: Number,
        required: true
    }
})
courses.load( props.id )
</script>
<template>
    <div style=" position: relative; border-radius: 10px; background-color: #eee; width: 100%; overflow: hidden; display: flex; flex-direction: row; align-items: flex-start; justify-content: flex-start; padding: 20px; box-sizing: border-box; gap: 20px; cursor: pointer; text-align: left; font-size: 36px; color: #000; font-family: Roboto;"
        id="frameContainer3">
        <div style="flex: 1;display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;">
            <div style="position: relative">{{$props.id}}Node.js Backend developer</div>
            <div style="position: relative; font-size: 16px">
                от
                <span style="text-decoration: underline">Станислава Шумака</span>
            </div>
        </div>
        <div
            style="align-self: stretch; overflow: hidden;display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;font-family: Righteous;">
            <div style="position: relative">120 BYN</div>
            <div
                style="align-self: stretch;display: flex;flex-direction: row;align-items: center;justify-content: flex-end;gap: 5px;font-size: 18px;color: #9747ff;font-family: 'Russo One';">
                <img style="align-self: stretch; position: relative; max-height: 100%; width: 22px;"
                    src="/promotion.svg?url" />
                <div style="position: relative">вернем 12!</div>
            </div>
        </div>
        <img style="position: relative;border-radius: 10px;width: 64px;height: 64px;overflow: hidden;flex-shrink: 0;cursor: pointer;"
            alt="" src="/go.svg?url" id="go" />
    </div>
</template>