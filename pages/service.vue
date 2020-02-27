<template>
    <!--Services Wrapper Start-->
	<div class="prt_services_wrapper prt_toppadder115" id="service">
         <Logo />
		<div class="prt_close_wrapper">
            <nuxt-link to="/">
			    <img src=".././assets/up_arrow.png" alt="Close" class="prt_close">
            </nuxt-link>
		</div>
		<div class="prt_services_slider_wrapper prt_bottompadder115">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="prt_heading_wrapper">
							<div class="prt_heading">
								<h1>What I do</h1>
								<vue-typed-js :strings="['take a look', 'have a look']" :loop="true">
									<p class="typing"></p>
								</vue-typed-js>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div class="prt_services_slider_imgs tab-content">
							<div class="tab-pane active tab-pane-style" id="a">
								<img class="img_1" src=".././assets/serv1.png" alt="Service">
							</div>
							<div class="tab-pane tab-pane-style" id="b">
								<img class="img_2" src=".././assets/serv2.png" alt="Service">
							</div>
							<div class="tab-pane tab-pane-style" id="c">
								<img class="img_3" src=".././assets/serv3.jpeg" alt="Service">
							</div>
							<div class="tab-pane tab-pane-style" id="d">
								<img class="img_4" src=".././assets/serv4.png" alt="Service">
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div class="prt_services_slider_box nav nav-tabs">
							<!-- <div class="prt_services_slider_text active"> -->
								<a href="#a" data-toggle="tab" class="prt_services_slider_text active">
									<img src=".././assets/serv_icon1.png" alt="Service icon">
									<h4>Website Design</h4>
									<p>It is a long established fact that a reader will be distracted</p>
								</a>
							<!-- </div> -->
							<!-- <div class="prt_services_slider_text"> -->
								<a href="#b" data-toggle="tab" class="prt_services_slider_text">
									<img src=".././assets/serv_icon2.png" alt="Service icon">
									<h4>Graphic Design</h4>
									<p>It is a long established fact that a reader will be distracted</p>
								</a>
							<!-- </div> -->
							<!-- <div class="prt_services_slider_text"> -->
								<a href="#c" data-toggle="tab" class="prt_services_slider_text">
									<img src=".././assets/serv_icon3.png" alt="Service icon">
									<h4>Logo Design</h4>
									<p>It is a long established fact that a reader will be distracted</p>
								</a>
							<!-- </div> -->
							<!-- <div class="prt_services_slider_text"> -->
								<a href="#d" data-toggle="tab" class="prt_services_slider_text">
									<img src=".././assets/serv_icon4.png" alt="Service icon">
									<h4>Mobile App Design</h4>
									<p>It is a long established fact that a reader will be distracted</p>
								</a>
							<!-- </div> -->
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Client section -->
		<div class="prt_client_slider_wrapper">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="prt_heading_wrapper">
							<div class="prt_heading">
								<h1>Clients</h1>
								<vue-typed-js :strings="['Worked Witn', 'happy With']" :loop="true">
									<p class="typing"></p>
								</vue-typed-js>
							</div>
						</div>
					</div>
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="prt_client_slider">
							<div class="owl-carousel owl-theme owl-loaded owl-drag">
							<div class="owl-stage-outer">
								<carousel :autoplay="true" :nav="false">
									<div>
										<img src=".././assets/client1.png" alt="Client">
									</div>
									<div>
										<img src=".././assets/client2.png" alt="Client">
									</div>
									<div>
										<img src=".././assets/client3.png" alt="Client">
									</div>
									<div>
										<img src=".././assets/client4.png" alt="Client">
									</div>
									<div>
										<img src=".././assets/client5.png" alt="Client">
									</div>
								</carousel>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

		<!-- client section end -->

		<div class="prt_skills_wrapper prt_toppadder115 prt_bottompadder115">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="prt_heading_wrapper">
							<div class="prt_heading">
								<h1>My Skills</h1>
								<vue-typed-js :strings="['Expert in', 'experience in']" :loop="true">
									<p class="typing"></p>
								</vue-typed-js>
							</div>
						</div>
					</div>
					<div id="canvas">
						<div class="row">
							<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
								<div class="circle" id="circles-1" data-aos="zoom-in-right">
                                    <div class="circle-cover"></div>
									<div class="circle-number">
										<!-- <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path fill="transparent" stroke="#202020" stroke-width="8" d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 99.86665792594512 4.000092604777535 Z"></path><path fill="transparent" stroke="#00c8ff" stroke-width="8" d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 43.489510975495364 22.394815700165083 "></path></svg> -->
                                    	<div class="circles-text">90%</div>
                                    </div>
								</div>
								<!-- <h4>90%</h4> -->
								<h5>Photoshop</h5>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
								<div class="circle" id="circles-2" data-aos="zoom-in-down">
                                    <div class="circle-cover"></div>
									<div class="circle-number">
										<!-- <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path fill="transparent" stroke="#202020" stroke-width="8" d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 99.86665792594512 4.000092604777535 Z"></path><path fill="transparent" stroke="#ff8511" stroke-width="8" d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 8.676294097439992 70.40302819167597 "></path></svg> -->
                                    	<div class="circles-text">85%</div>
                                    </div>
								</div>
								<!-- <h4>95%</h4> -->
								<h5>Illustrator</h5>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
								<div class="circle" id="circles-3" data-aos="zoom-in-up">
                                    <div class="circle-cover"></div>
									<div class="circle-number">
										<!-- <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path fill="transparent" stroke="#202020" stroke-width="8" d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 99.86665792594512 4.000092604777535 Z"></path><path fill="transparent" stroke="#00c8ff" stroke-width="8" d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 43.489510975495364 22.394815700165083 "></path></svg> -->
                                    	<div class="circles-text">95%</div>
                                    </div>
								</div>
								<!-- <h4>80%</h4> -->
								<h5>Html &amp; Css</h5>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
								<div class="circle" id="circles-4" data-aos="zoom-in-left">
                                    <div class="circle-cover"></div>
									<div class="circle-number">
										<!-- <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path fill="transparent" stroke="#202020" stroke-width="8" d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 99.86665792594512 4.000092604777535 Z"></path><path fill="transparent" stroke="#ff8511" stroke-width="8" d="M 99.98044737244527 4.000001991173164 A 96 96 0 1 1 8.676294097439992 70.40302819167597 "></path></svg> -->
                                    	<div class="circles-text">85%</div>
                                    </div>
								</div>
								<!-- <h4>95%</h4> -->
								<h5>Sketch</h5>
							</div>
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
	<!--Services Wrapper End-->
</template>

<script>
import Logo from '~/components/Logo.vue'
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
export default {
    transition: 'grow',
    components: {
        Logo,
  	}
}

</script>

<style scoped>

.circle-cover{
    left: 0px;
    right: 0px;
    width: 100%;
    position: absolute;
    top: 0px;
    border-radius: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0px;
    background-color: rgba(204, 204, 204, 0.92);
}
.circle{
    position: relative;
}
.grow-enter-active,
.grow-leave-active {
  transition: transform .5s;
}

.grow-enter,
.grow-leave-to {
  transform: scale(4);
}
.nav-tabs{
	border: none;
}
.tab-content>.tab-pane.tab-pane-style{
	padding:20px;
}
.tab-pane.tab-pane-style img{
	border:1px solid #f67590; 
	padding: 20px;
}
.prt_client_slider_wrapper {
    display: inline-block;
    width: 100%;
    background-color: #f5f5f5;
	padding: 40px;
	margin-top: 60px;
}
.prt_client_slider_wrapper .prt_heading p{
	background-color: #f5f5f5;
}
.circle-number{
	position: relative; 
	display: block;
}
.circles-text{
	position: absolute; 
	top: 0px; 
	left: 0px; 
	text-align: center; 
	width: 100%; 
	font-size: 40px; 
	line-height: 200px;
}
#canvas .circle {
    border: 5px solid #f67590;
}
.prt_footer_wrapper{
	margin-top: 0
}

@media (max-width: 991px){
	.prt_client_slider_wrapper{
		margin-top: 0
	}
	.prt_services_slider_box {
	}
	#canvas .circle {
		width: 160px;
		height: 160px;
	}
	.circles-text{
		line-height: 160px;
	}
	.circles-text {
		font-size: 30px !important;
	}
}
@media (max-width: 768px){
	.prt_client_slider .owl-carousel .owl-item img{
		width: 130px!important;
	}
}

@media (max-width: 520px) {
	.prt_client_slider .owl-carousel .owl-item img{
		width: 100px!important;
	}
}

</style>