<template>
    <!--Portfolio Wrapper Start-->
	<div class="prt_portfolio_wrapper prt_toppadder115 page-enter-active" id="portfolio">
		<div class="prt_close_wrapper">
			<img src=".././assets/left_arrow.png" alt="Close" class="prt_close">
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
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
						<a class="imageopen" href="http://kamleshyadav.com/html/portfolio/white_version_typed/images/content/port1_big.jpg" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port1.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>box mockup design</h4>
									<p>Mockup</p>
								</div>
							</div>
						</a>
						<a class="popup-youtube" href="https://www.youtube.com/watch?v=6yWzKvQXsYM" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port2.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>Click and open video</h4>
									<p>video</p>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
						<a class="popup-youtube" href="https://www.youtube.com/watch?v=6yWzKvQXsYM" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port3.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>Click and open video</h4>
									<p>video</p>
								</div>
							</div>
						</a>
						<a class="imageopen" href="http://kamleshyadav.com/html/portfolio/white_version_typed/images/content/port4_big.jpg" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port4.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>box mockup design</h4>
									<p>Mockup</p>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
						<a class="popup-youtube" href="https://www.youtube.com/watch?v=6yWzKvQXsYM" title="">
							<div class="prt_portfolio_img">
								<img src=".././assets/port5.jpg" alt="Portfolio">
								<div class="prt_portfolio_text">
									<h4>Click and open video</h4>
									<p>video</p>
								</div>
							</div>
						</a>
						<a class="imageopen" href="http://kamleshyadav.com/html/portfolio/white_version_typed/images/content/port6_big.jpg" title="">
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
						<a class="imageopen" href="http://kamleshyadav.com/html/portfolio/white_version_typed/images/content/port7_big.jpg" title="">
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
						<a class="popup-youtube" href="https://www.youtube.com/watch?v=6yWzKvQXsYM" title="">
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
export default {
  
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

.page-enter-active {
  animation: acrossIn .45s ease-out both;
} 

.page-leave-active {
  animation: acrossOut .65s ease-in both;
} 

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}

</style>