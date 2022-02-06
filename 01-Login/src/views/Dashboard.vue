<template>
  <div class="dashboard">
    <div v-if="isLoading"/>
      <div v-else-if="isAuthorized">
        <div class="title">Welcome!</div>
        <div class="message">
          You successfully signed in with Passage.
          <br/><br/>
          Your email is: <b>{{username}}</b>
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

export default defineComponent({
  name: 'Dashboard',
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