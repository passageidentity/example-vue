<template>
  <Layout layoutStyle="home">
    <div class="mainContainer">
    <div class="earlyAccessContainer">
      <div class="title">Experience the Passage Difference.</div>
      <div class="spacer"></div>
      <div class="bodyText">Implement risk-free authentication with two lines of code.</div>
    </div>
    <div class="authContainer">
      <passage-auth :app-id="appId"></passage-auth>
    </div>
    </div>
  </Layout>
</template>
<script>
import { defineComponent } from 'vue'
import '@passageidentity/passage-auth'
import Layout from '../components/Layout.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Layout,
  },
  setup() {
    const appId = process.env.VUE_APP_PASSAGE_APP_ID
    return {
      appId,
    }
  },
})
</script>
<style scoped>

.mainContainer {
  display: flex;
}

.spacer{
  flex-grow: 1;
}

.earlyAccessContainer{
  min-width: 325px;
  width: 35%;
  color: white;
  background-color: #27417E;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: 700;
  font-size: 48px;
  margin-top: 65px;
  padding-left: 45px;
  padding-right: 65px;
}

.bodyText{
  padding-left: 45px;
  padding-right: 45px;
  padding-bottom: 35px;
  font-size: 24px;
}

.authContainer{
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
}

/* for shorter 13" dekstop screens */
@media screen and (max-height: 845px) {
  .title {
    font-size: 40px;
  }
  .bodyText{
    font-size: 20px;
  }
}

/* steps to mobile rules begin here */
@media screen and (max-width: 870px) {

  .mainContainer{
    flex-direction: column;
    width: 100%;
  }

  .earlyAccessContainer{
    min-width: unset;
    width: 100%;
    min-height: 30%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .title {
    font-size: 32px;
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .bodyText{
    font-size: 20px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 15px;
  }

  .authContainer{
    width: 100%;
    height: 100%;
    flex-grow: 1;
    padding-top: 20px;
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media screen and (max-width: 670px) {
  .title {
    font-size: 24px;
  }
  .bodyText{
    font-size: 16px;
  }
}

@media screen and (max-width: 460px) {
  .earlyAccessContainer{
    min-height: unset;
  }
}

</style>
