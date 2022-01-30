<template>
  <div :class="['fingerprints', layoutStyle]">
    <Banner :authorized="authorized"/>
    <div class="mainContainerSizer">
      <div class="mainContainer">
        <slot></slot>
      </div>
    </div>
    <div class="mainFooter"></div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Banner from './Banner.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Banner,
  },
  props: {
    authorized: {
      type: Boolean,
      required: false,
    },
    layoutStyle: {
      type: String,
      default: '',
    }
  },
})
</script>
<style scoped>
.mainContainerSizer{
  padding-top: 60px;
  padding-left: 185px;
  padding-right: 185px;
  display: flex;
  flex-direction: column;
}
  
.mainContainer {
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  min-height: 700px;
  width: 100%;
  max-width: 1200px;
  align-self: center;
  display: flex;
}

.mainFooter{
  min-height: 60px;
}

@media screen and (max-width: 1050px) {
  .mainContainerSizer{
    padding-left: 100px;
    padding-right: 100px;
  } 
}

/* for shorter 13" dekstop screens */
@media screen and (max-height: 845px) {
  .mainContainerSizer{
    padding-top: 20px;
  }

  .mainContainer{
    min-height: 625px;
  }

  .mainFooter{
    min-height: 10px;
  }
}

/* mobile rules begin here */
@media screen and (max-width: 760px) {
  .mainContainerSizer{
    padding-top: 20px;
    padding-left: 45px;
    padding-right: 45px;
  }

  .mainContainer{
    min-width: 210px;
    min-height: 625px;
  }

  .mainFooter{
    min-height: 30px;
  }
}

.fingerprints{
  background-repeat: no-repeat;
  background-size: 50%;
  height: 100vh;
}

/* home view fingerprints */
.home{
  background-image: 
    url('~@/assets/fingerprint-left-index.svg'), 
    url('~@/assets/fingerprint-right-index.svg');
  background-position: 
    top 160px left -50%,
    top 300px right -50%;
}

@media screen and (max-width: 870px) {
  .home{
    background-position: 
      top 110px left -120px,
      top 300px right -120px;
    background-size: 70%;
  }
}

@media screen and (max-width: 670px) {
  .home{
    background-position: 
      top 110px left -120px,
      top 450px right -120px;
    background-size: 100%;
  }
}

/* authorized fingerprints */
.authorized{
  background-image: 
    url('~@/assets/fingerprint-left-success.svg'), 
    url('~@/assets/fingerprint-right-success.svg');
  background-position: 
    top 130px left -50%,
    top 300px right -50%;
}

@media screen and (max-width: 760px){
  .authorized{
    background-position: 
      top 100px left -120px,
      top 340px right -120px;
    background-size: 70%;
  }
}

@media screen and (max-width: 450px){
  .authorized{
    background-position: 
      top 100px left -140px,
      top 450px right -120px;
    background-size: 100%;
  }
}

/* unauthorized fingerprints */
.unauthorized{
  background-image: 
    url('~@/assets/fingerprint-left-error.svg'), 
    url('~@/assets/fingerprint-right-error.svg');
  background-position: 
    top 300px left -50%,
    top 120px right -50%;
}

@media screen and (max-width: 500px){
  .unauthorized{
    background-position: 
      top 450px left -120px,
      top 90px right -190px;
    background-size: 100%;
  }
}



</style>
