: any<template>
    <div>
        <span data-testid="span">{{randomNumber}}</span>
        <button @click="getRandomNumber(props.max, props.min)">Click</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue'

const props = defineProps<{
    min: number
    max: number
}>()
const randomNumber: Ref<number> = ref(0);
const getRandomNumber = ( max : number, min : number) :number => {
    return randomNumber.value = Math.floor(Math.random()*(max- min + 1)) + min
}
</script>

<style scoped>

</style>