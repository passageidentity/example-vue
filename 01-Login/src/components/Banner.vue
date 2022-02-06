<template>
  <div class="mainHeader">
    <a href="https://passage.id/"><div class="passageLogo"></div></a>
    <div class="header-text">Passage + Vue.js 3 Example App</div>
    <div class="spacer"></div>
    <a class="link" href="https://passage.id/">Go to Passage</a>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Banner',
})
</script>
<style scoped>
.mainHeader{
  padding: 20px 30px;
  display: flex;
  align-items: center;
  background-color: #27417E;
  color: white;
}

.header-text {
  font-size: 24px;
  margin-left: 10px;
}
  
.passageLogo {
  background-image: url('~@/assets/passage-logo.svg');
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.spacer {
  flex-grow: 1;
}
  
.link {
  margin-left: 20px;
  color: white;
  text-decoration-color: white;
}
</style>
