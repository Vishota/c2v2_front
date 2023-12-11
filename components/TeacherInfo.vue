<script setup lang="ts">
import * as teachers from '~/composables/api/teachers'
const { id } = defineProps({
    id: {
        type: Number,
        required: true
    }
});
const { info } = (await teachers.info.req({ id }))
</script>
<template>
    <To :to="'/teachers/' + id">
        <Bar>
            {{ info.name }}
            <div class="text-small">{{ info.speciality }}</div>
        </Bar>
    </To>
</template>