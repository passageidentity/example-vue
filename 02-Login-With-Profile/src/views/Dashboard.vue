<template>
  <div class="dashboard">
    <div v-if="isLoading"/>
      <div v-else-if="isAuthorized">
        <div class="title">Welcome!</div>
        <div class="message">
          You successfully signed in with Passage.
          <br/><br/>
          <passage-profile :app-id="appId"></passage-profile>
        </div>
      </div>
    <div v-else>
      <div class="title">Unauthorized</div>
      <div class="message">
        You have not logged in and cannot view the dashboard.
        <br/><br/>
        <a href="/" class="link">Login to continue.</a>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useAuthStatus } from '../composables/useAuthStatus'
import '@passageidentity/passage-elements/passage-profile'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const {isLoading, isAuthorized} = useAuthStatus()
    const appId = process.env.VUE_APP_PASSAGE_APP_ID
    return {
      isLoading,
      isAuthorized,
      appId,
    }
  },
})
</script>
<style scoped>
.dashboard{
  padding: 30px 30px 20px;
}

.title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
}

.message {
  overflow-wrap: anywhere;
}

.link {
  color: black;
  text-decoration-color: black;
}
</style>