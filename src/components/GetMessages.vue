Array<template>
    <div>
        Comments:
        <p v-if="errorMessage" data-testid="error">{{errorMessage}}</p>
        <div v-else data-testid="message" >
            <p v-for="message in messages"
                :key="message.id"
            >{{message.id}} : {{message.body}}</p>
        </div>

        <button @click="getMessagesFromApi">Get data from API</button>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue'
import type { Ref } from 'vue'

interface Messages {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
const messages:Ref<Messages[]> = ref([])
const errorMessage: Ref<string> = ref('')
const getMessagesFromApi = () :void  => {
    axios.get('https://jsonplaceholder.typicode.com/comments', {
        params: {
      _limit: 5
     }
    })
    .then( (res) :void => {
        messages.value = res.data
    })
    .catch( (err) :void => {
        errorMessage.value = 'Something went rong!'
    })
}

</script>

<style scoped>

</style>