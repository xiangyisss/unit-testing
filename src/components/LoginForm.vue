<template>
    <div>
        <!-- Messages from Parent : {{props.messages}} -->
        <form @submit.prevent="login">
            <input type="text" data-testid="name-input" v-model="username">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

// interface Message {
//     messages: string
// }

const username: Ref<string> = ref('')
const emit = defineEmits<{
    (e: 'submitform', name: string): void
}>()

const login = ():void => {
    emit('submitform', username.value)
}

// const props = defineProps<Message>()

</script>

<style scoped>

</style>