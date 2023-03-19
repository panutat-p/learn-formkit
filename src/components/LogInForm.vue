<script setup lang="ts">
import { ref } from 'vue';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const logInPayload = ref({
  username: 'monkey',
  password: '',
});

async function handleSubmit(data: any) {
  console.log('handleSubmit, data:', data);
  await sleep(1500);
}
</script>

<template>
  <FormKit
    type="form"
    submit-behavior="disabled"
    submit-label="Log In"
    v-bind:value="logInPayload"
    v-on:submit="handleSubmit"
  >
    <h1>Log In</h1>
    <FormKit
      type="text"
      validation="required|length:6,10"
      validation-visibility="blur"
      label="Username"
      name="username"
    ></FormKit>
    <FormKit
      type="password"
      validation="required|length:6"
      validation-visibility="blur"
      label="Password"
      name="password"
    ></FormKit>
  </FormKit>
</template>
