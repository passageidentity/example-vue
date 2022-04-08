<template>
<div>
  <Banner />
  <div class="main-container">
    <router-view/>
  </div>
  <div className="footer">
    Learn more with our 
    <a href="https://docs.passage.id">Documentation</a> and
    <a href="https://github.com/passageidentity">Github</a>.
    <br>       
  </div>
</div>
</template>
<style>
body {
  margin: 0px;
  height: 100vh;
  font-family: sans-serif;
  background-color: #E5E5E5;
}

.main-container {
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 600px;
  min-height: 310px;
  margin: 30px auto;
}

.footer {
  text-align: center;
  font-size: 18px;
}
</style>

