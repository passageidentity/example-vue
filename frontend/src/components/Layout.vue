<template>
  <div>
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
</style>
