<template>
  <div class="mainHeader">
    <a href="https://passage.id/" passHref><div class="passageLogo"></div></a>
    <div class="spacer"></div>
    <div class="links">
      <div v-if="router.currentRoute.path === '/dashboard' && authorized" class="logout" @click.prevent="logout">Logout</div>
      <a href="https://passage.id/" passHref><div class="home"><span class="text">Go to Passage</span><div class="icon"></div></div></a>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Banner',
  props:{
    authorized: {
      type: Boolean,
      required: false,
    },
  },
  setup() {
    const router = useRouter()

    function logout() {
      document.cookie = "psg_auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      localStorage.removeItem("psg_auth_token");
      router.push('/')
    }

    return {
      router,
      logout,
    }
  },
})
</script>
<style scoped>
.mainHeader{
  display: flex;
  align-items: flex-start;
  padding-top: 20px;
  color: #263768;
  position: relative;
}
  
.passageLogo {
  background-image: url('~@/assets/passage-full-logo.svg');
  background-repeat: no-repeat;
  width: 300px;
  height: 60px;
  margin-left: 40px;
  cursor: pointer;
}

.spacer {
  flex-grow: 1;
} 
  
.home {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
  
 .links {
  display: flex;
  text-decoration: underline;
  cursor: pointer;
  align-items: center;
}
  
.text {
  margin-right: 10px;
  color: #263768;
  text-decoration-color: #263768;
}
  
.icon {
  background-image: url('~@/assets/home.svg');
  background-repeat: no-repeat;
  width: 28px;
  height: 26px;
}

.logout {
  text-decoration: underline;
  user-select: none;
  cursor: pointer;
  margin-right: 20px;
}

@media screen and (max-width: 530px) {
  .passageLogo {
    background-image: url('~@/assets/passage-logo.svg');
    background-repeat: no-repeat;
    width: 50px;
    height: 60px;
    margin-left: 30px;
  }
}
</style>
