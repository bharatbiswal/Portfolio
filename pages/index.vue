<template>
  <!--Main Wrapper Start-->
<div class="prt_main_wrapper">
	<div class="prt_home_wrapper">
    	<Logo />
		<div class="prt_menu_wrapper">
			<Navbar />
		</div>
		<div class="container banner-container">
			<div class="row">
				<div class="col-md-7 col-lg-7 col-sm-12 col-xs-12">
					<vue-typed-js :strings="['I m Brielle Martin', 'I m Graphic Designer']" :loop="true">
						<h1 class="typing"></h1>
					</vue-typed-js>
				</div>
				<div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center banner-image-style">
					<img class="img-fluid mx-auto" src=".././assets/header-img.png" alt="">
				</div>
			</div>
		</div>
	</div>
</div>
<!--Main js file Style--> 
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navbar from '~/components/Navbar.vue'
// import portfolio from '~/components/portfolio.vue'

import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)

export default {
  components: {
    Logo,
	Navbar,
	// Portfolio
  },
}
</script>

<style>
.prt_home_wrapper {
	background-color: #f67590;
    position: relative;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    display: flex;
}
.prt_menu_wrapper a{
	color: #fff;
}
@media (min-width: 768px){
	.banner-container{
		background-color:#f66483;
	}
}
@media (max-width: 768px){
	.typed-element {
		display: block;
		align-items: center;
		position: absolute;
		top: 400px;
		left: 0;
    	right: 0;
		z-index: 9;
	}
	.prt_home_wrapper{
		display: block;
	}
	.prt_home_wrapper h1{
		position: relative;
		font-size: 60px;
		padding: 0 60px;
		color: #efefef;
		font-weight:bold;
		background: none;
		-webkit-background-clip: text;
		-webkit-text-fill-color: #efefef;
		/* background-size: cover; */
	}
	.banner-container img{
		/* width: 200px;
    	margin-top: 90px; */
	}
	.banner-image-style{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		position: relative;
		/* left: 50px; */
		padding-left: 75px;
	}
	
}
@media (max-width: 450px){
	.prt_home_wrapper h1{
		position: relative;
		font-size: 40px;
		padding: 0 80px;
	}
}
</style>
