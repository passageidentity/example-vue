<template>
  <div v-if="isLoading"/>
  <Authorized v-else-if="isAuthorized" :username="username"/>
  <Unauthorized v-else/>
</template>
<script>
import { defineComponent } from 'vue'
import { useAuthStatus } from '../composables/useAuthStatus'
import Authorized from '../components/Authorized.vue'
import Unauthorized from '../components/Unauthorized.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    Authorized,
    Unauthorized,
  },
  setup() {
    const {isLoading, isAuthorized, username} = useAuthStatus()
    return {
      isLoading,
      isAuthorized,
      username
    }
  },
})
</script>
