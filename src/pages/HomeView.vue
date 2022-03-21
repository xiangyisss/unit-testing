<script setup lang="ts">
import LoginFormVue from '@/components/LoginForm.vue';
import GetMessages from '@/components/GetMessages.vue'
import { ref } from 'vue'
import type { Ref } from 'vue';

const name: Ref<string> = ref('')
const form = (username :string):void => {
	name.value = username
}
</script>

<template>
  <main>
    <LoginFormVue @submitform="form" messages="This is testing"/>
    <h1>User name : {{name}}</h1>

    <GetMessages />
  </main>
</template>
