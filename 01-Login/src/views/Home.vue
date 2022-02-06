<template>
  <passage-auth :app-id="appId"></passage-auth>
</template>
<script>
import { defineComponent } from 'vue'
import '@passageidentity/passage-auth'

export default defineComponent({
  name: 'Home',
  setup() {
    const appId = process.env.VUE_APP_PASSAGE_APP_ID
    return {
      appId,
    }
  },
})
</script>
