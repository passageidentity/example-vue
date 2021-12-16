<template>
  <Layout :authorized="true" layoutStyle="authorized">
    <div class="mainContainer">
      <div>
        <div class="title">Welcome!</div>
        <div class="message"><b>{{username}}</b> successfully signed in with Passage.</div>
      </div>
      <div class="spacer"></div>
      <div class="imgContainer">
        <img src="~@/assets/launch.png" alt="People Celebrating"/>
      </div>
      <div class="spacer"></div>
      <div class="subMessage">Implement risk-free authentication with two lines of code.</div>
    </div>
  </Layout>
</template>
<script>
import { defineComponent } from "vue";
import Layout from './Layout.vue'

export default defineComponent({
  name: 'Authorized',
  props:{
    username:{
      type: String,
      required: true
    }
  },
  components: {
    Layout,
  },
})

</script>
<style scoped>
.mainContainer{
  padding-top: 60px;
  padding-left: 75px;
  padding-right: 75px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  color: #263768
}

.spacer{
  flex-grow: 1;
}

.title {
  font-size: 64px;
  font-weight: 700;
}

.message {
  font-size: 36px;
}

.subMessage {
  font-size: 24px;
  align-self: center;
  padding-bottom: 10px;
}

.imgContainer {
  height: 310px;
  align-self: center;
}

.imgContainer > img {
  max-width: 100%;
  max-height: 100%;
}

/* for shorter 13" dekstop screens */
@media screen and (max-height: 845px) {
  .title {
    font-size: 48px;
  }
  
  .message {
    font-size: 24px;
  }
  
  .subMessage {
    font-size: 20px;
  }

  .main-footer{
    min-height: 45px;
  }
}

/* mobile rules begin here */
@media screen and (max-width: 760px){
  .mainContainer{
    padding-top: 45px;
    padding-left: 30px;
    padding-right: 30px;
  }

  .title {
    font-size: 36px;
  }
  
  .message {
    font-size: 18px;
  }
  
  .subMessage {
    font-size: 16px;
    align-self: center;
  }
}

@media screen and (max-width: 450px){
   .imgContainer {
      height: 260px;
  }
}
</style>