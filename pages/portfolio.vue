<template>
    <!--Portfolio Wrapper Start-->
	<div class="prt_portfolio_wrapper prt_toppadder115 page-enter-active" id="portfolio">
        <Logo />
		<div class="prt_close_wrapper">
            <nuxt-link to="/">
			    <img src=".././assets/left_arrow.png" alt="Close" class="prt_close">
            </nuxt-link>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="prt_heading_wrapper">
						<div class="prt_heading">
							<h1>portfolio</h1>
							<vue-typed-js :strings="['MY work', 'my passion']" :loop="true">
								<p class="typing"></p>
							</vue-typed-js>
						</div>
					</div>
				</div>
				<div class="prt_portfolio_box popup-gallery">
					<div class="row">
					<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
						<a class="imageopen" href="" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port1.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>box mockup design</h4>
									<p>Mockup</p>
								</div>
							</div>
						</a>
						<a class="popup-youtube" href="" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port2.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>Click and open video</h4>
									<p>video</p>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
						<a class="popup-youtube" href="" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port3.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>Click and open video</h4>
									<p>video</p>
								</div>
							</div>
						</a>
						<a class="imageopen" href="" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port4.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>box mockup design</h4>
									<p>Mockup</p>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
						<a class="popup-youtube" href="" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port5.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>Click and open video</h4>
									<p>video</p>
								</div>
							</div>
						</a>
						<a class="imageopen" href="" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port6.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>box mockup design</h4>
									<p>Mockup</p>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
						<a class="imageopen" href="" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port7.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>box mockup design</h4>
									<p>Mockup</p>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
						<a class="popup-youtube" href="" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port8.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>Click and open video</h4>
									<p>video</p>
								</div>
							</div>
						</a>
					</div>
					</div>
				</div>
			</div>
		</div>
		<div class="prt_footer_wrapper prt_toppadder30 prt_bottompadder30">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<p>Copyright © 2020 <a href="index">Portfolio</a>. All Rights Reserved</p>
						<ul>
							<li>
								<a>
									<font-awesome-icon :icon="['fab', 'facebook-f']"/>
								</a>
							</li>
							<li>
								<a>
									<font-awesome-icon :icon="['fab', 'twitter']"/>
								</a>
							</li>
							<li>
								<a>
									<font-awesome-icon :icon="['fab', 'google-plus']"/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--Portfolio Wrapper End-->
</template>

<script>
import Logo from '~/components/Logo.vue'
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
export default {
    transition: 'bounce',
    components: {
        Logo,
    }
}
</script>

<style scoped>

  	.gallery {
		-webkit-column-count: 3;
		-moz-column-count: 3;
		column-count: 3;
		-webkit-column-width: 33%;
		-moz-column-width: 33%;
		column-width: 33%; 
	}

	.gallery .pics {
		-webkit-transition: all 350ms ease;
		transition: all 350ms ease; 
	}

	.gallery .animation {
		-webkit-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1); 
	}

	@media (max-width: 450px) {
		.gallery {
			-webkit-column-count: 1;
			-moz-column-count: 1;
			column-count: 1;
			-webkit-column-width: 100%;
			-moz-column-width: 100%;
			column-width: 100%;
		}
	}
	@media (max-width: 575px) {
		.prt_portfolio_img{
			padding: 0 60px;
			display: block;
		}
		.prt_portfolio_text{
			text-align: center;
		}
	}
    .bounce-enter-active {
        animation: bounce-in .8s;
    }
    .bounce-leave-active {
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% { transform: scale(0) }
        50% { transform: scale(1.5) }
        100% { transform: scale(1) }
    }
    @keyframes bounce-out {
        0% { transform: scale(1) }
        50% { transform: scale(1.5) }
        100% { transform: scale(0) }
    }
    

</style>