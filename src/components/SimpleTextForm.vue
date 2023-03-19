<template>
  <div>
    <FormKit
      type="text"
      label="Username"
      name="username"
      help="fill your username"
      validation="required|matched:/^@[a-zA-Z]+$|length:5"
      value=""
      prefix-icon="avatarMan"
      inner-class="p-1 mb-2"
    >
      <template #label="context"
        >{{ context.label }} <span class="text-success">{{ context.help }}</span></template
      >
      <template #help></template>
    </FormKit>
    <FormKit type="select" help="pick your class"></FormKit>
    <FormKit type="textarea" help="fill the description"></FormKit>
  </div>
</template>
