<template>
  <div class="prt_logo_wrapper">
    <nuxt-link to="/">
      <img src=".././assets/logo.png" alt="Logo" id="prt_close_tab">
    </nuxt-link>
	</div>
</template>
<style>
.prt_logo_wrapper img{
    position: fixed;
    left: 50px;
    top: 50px;
    z-index: 2;
  -webkit-animation: rotate 2s linear infinite;
  -moz-animation: rotate 2s linear infinite;
  -o-animation: rotate 2s linear infinite;
  -ms-animation: rotate 2s linear infinite;
  animation: rotate 2s linear infinite;
}
</style>
