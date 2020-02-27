<template>
    <!--About Wrapper Start-->
	<div class="prt_about_wrapper prt_toppadder115" id="about">
         <Logo />
		<div class="prt_close_wrapper">
            <nuxt-link to="/">
			    <img src=".././assets/down_arrow.png" alt="Close" class="prt_close">
            </nuxt-link>
		</div>
		<div class="container">
			<div class="row">
				<div class="prt_about_info prt_bottompadder80 col-12">
					<div class="row">
					<div class="col-lg-5 col-12 col-12 col-12">
						<div class="prt_about_img">
							<img src=".././assets/about.jpg" alt="About">
						</div>
						<div class="social-items mt-4 text-center">
							<ul class="list-inline">
								<li class="list-inline-item">
									<font-awesome-icon :icon="['fab', 'facebook-f']"/>
								</li>
								<li class="list-inline-item">
									<font-awesome-icon :icon="['fab', 'twitter']"/>
								</li>
								<li class="list-inline-item">
									<font-awesome-icon :icon="['fab', 'google-plus']"/>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-7 col-12 col-12 col-12">
						<div class="about-desc-content">
							<h1 class="font-weight-light">I'm Brielle Martin</h1>
							<p class="mt-3 font-weight-light">
							There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</p>
						</div>
						<div class="about-desc-more text-left mt-5">
								<div class="row">
									<div class="col-lg-6">
										<div class="about-desc-info">
											<div class="svg-style"><font-awesome-icon :icon="['fas', 'calendar-alt']"/></div>
											<b>Age : </b>
											<span>19</span>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="about-desc-info">
											<div class="svg-style"><font-awesome-icon :icon="['fas', 'map-marker-alt']"/></div>
											<b>Location : </b>
											<span>Miami, FL</span>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="about-desc-info">
											<div class="svg-style"><font-awesome-icon :icon="['fas', 'graduation-cap']"/></div>
											<b>Degree : </b>
											<span>Master</span>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="about-desc-info">
											<div class="svg-style"><font-awesome-icon :icon="['fab', 'skype']"/></div>
											<b>Skype : </b>
											<a href="tel:beingeorge">beingeorge</a>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="about-desc-info">
											<div class="svg-style"><font-awesome-icon :icon="['fas', 'phone-alt']"/></div>
											<b>Phone : </b>
											<a href="tel:0987654321">098-765-4321</a>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="about-desc-info">
											<div class="svg-style"><font-awesome-icon :icon="['fas', 'envelope']"/></div>
											<b>Mail : </b>
											<a href="mailto:hello@beingeorge.com">hello@brielle.com</a>
										</div>
									</div>
									
								</div>
							</div>
							<ul class="about-social mb-0 list-inline mt-4">
								<li class="list-inline-item">
									<nuxt-link to="/" class="prt_btn">Hire Me</nuxt-link>
								</li>
							</ul>
						<!-- <div class="prt_heading_wrapper_2">
							<div class="prt_heading prt_toppadder50">
								<h1>About ME</h1>
								<vue-typed-js :strings="['WHo AM i', 'Know more']" :loop="true">
									<p class="typing"></p>
								</vue-typed-js>
							</div>
						</div>
						<div class="prt_about_details">
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</p>
							 <nuxt-link to="/" class="prt_btn">
							Download Resume</nuxt-link> 
							<nuxt-link to="/" class="prt_btn">Hire Me</nuxt-link>
						</div> -->
					</div>
					</div>
				</div>
				<div class="prt_about_edulearn_wrapper prt_bottompadder115">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="prt_heading_wrapper">
							<div class="prt_heading">
								<h1>EDucation</h1>
								<vue-typed-js :strings="['learning', 'Reading']" :loop="true">
									<p class="typing"></p>
								</vue-typed-js>
							</div>
						</div>
						<div class="prt_about_learnsection">
							<div class="row">
								<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 offset-lg-6 offset-md-0 offset-sm-0 offset-xs-0">
									<div class="prt_about_learnbox_right">
										<div class="prt_about_learnbox_year">
											<h1 data-aos="zoom-in">2004</h1>
										</div>
										<div class="prt_about_learnbox_info">
											<h4>Diploma In UI/UX Design</h4>
											<span>New York</span>
											<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
									<div class="prt_about_learnbox_left">
										<div class="prt_about_learnbox_year">
											<h1 data-aos="zoom-in">2006</h1>
										</div>
										<div class="prt_about_learnbox_info">
											<h4>Diploma In Web Design</h4>
											<span>New York</span>
											<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 offset-lg-6 offset-md-0 offset-sm-0 offset-xs-0">
									<div class="prt_about_learnbox_right">
										<div class="prt_about_learnbox_year">
											<h1 data-aos="zoom-in">2008</h1>
										</div>
										<div class="prt_about_learnbox_info">
											<h4>Diploma In UI/UX Design</h4>
											<span>New York</span>
											<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
									<div class="prt_about_learnbox_left">
										<div class="prt_about_learnbox_year">
											<h1 data-aos="zoom-in">2010</h1>
										</div>
										<div class="prt_about_learnbox_info">
											<h4>Diploma In Web Design</h4>
											<span>New York</span>
											<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="prt_about_experience_wrapper prt_bottompadder60">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="prt_heading_wrapper">
							<div class="prt_heading">
								<h1>Experience</h1>
								<vue-typed-js :strings="['involvement', 'participation']" :loop="true">
									<p class="typing"></p>
								</vue-typed-js>
							</div>
						</div>
						<div class="prt_about_experience">
							<div class="row">
								<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
									<div class="prt_about_experiencebox" data-aos="fade-right">
										<div class="prt_about_experience_year">
											<h1>2012</h1>
											<h4>July to 2013 Sep</h4>
										</div>
										<div class="prt_about_experience_info">
											<h4>Junior Ui/Ux Designer</h4>
											<span>Amazon</span>
											<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
									<div class="prt_about_experiencebox" data-aos="fade-left">
										<div class="prt_about_experience_year">
											<h1>2013</h1>
											<h4>Oct to 2014 Dec</h4>
										</div>
										<div class="prt_about_experience_info">
											<h4>Senior Ui/Ux Designer</h4>
											<span>Adobe</span>
											<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
									<div class="prt_about_experiencebox" data-aos="fade-right">
										<div class="prt_about_experience_year">
											<h1>2015</h1>
											<h4>Jun to 2015 Mar</h4>
										</div>
										<div class="prt_about_experience_info">
											<h4>Senior Ui/Ux Designer</h4>
											<span>Google</span>
											<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
									<div class="prt_about_experiencebox" data-aos="fade-left">
										<div class="prt_about_experience_year">
											<h1>2016</h1>
											<h4>Apr to Present</h4>
										</div>
										<div class="prt_about_experience_info">
											<h4>Lead Ui/Ux Designer</h4>
											<span>Google</span>
											<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="prt_profile_info">
					<div class="row">
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div class="prt_profile_slider">
							<div class="owl-carousel owl-theme owl-loaded owl-drag">
								<div class="social-items">
									<ul class="list-inline">
										<li class="list-inline-item">
											<font-awesome-icon :icon="['fab', 'facebook-f']"/>
										</li>
										<li class="list-inline-item">
											<font-awesome-icon :icon="['fab', 'twitter']"/>
										</li>
										<li class="list-inline-item">
											<font-awesome-icon :icon="['fab', 'google-plus']"/>
										</li>
									</ul>
									 <carousel :autoplay="true" :nav="false">
										<div>
											<font-awesome-icon :icon="['fab', 'facebook-f']"/>
											<h4>Facebook</h4>
										</div>
										<div>
											<font-awesome-icon :icon="['fab', 'twitter']"/>
											<h4>Twitter</h4>
										</div>
										<div>
											<font-awesome-icon :icon="['fab', 'google-plus']"/>
											<h4>Google plus</h4>
										</div>
									</carousel>
								</div> 
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div class="prt_heading_wrapper_2">
							<div class="prt_heading">
								<h1>PROFILES</h1>
								<vue-typed-js :strings="['Works At', 'effort at']" :loop="true">
									<p class="typing"></p>
								</vue-typed-js>
							</div>
						</div>
						<div class="prt_profile_details">
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
						</div>
					</div>
					</div>
				</div> -->
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
	<!--About Wrapper End-->
</template>

<script>
import Logo from '~/components/Logo.vue'
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
export default {
	transition: 'slide',
    components: {
       Logo,
  }
}
</script>

<style scoped>
.prt_about_img img{
	padding: .25rem;
    border: 1px solid #1c1f2f;
    border-radius: .25rem;
    max-width: 100%;
    height: auto;
}
.about-desc-info {
    margin-bottom: 20px;
}

.about-desc-info b {
    margin-right: 10px;
}
.about-desc-info span, .about-desc-info a {
    font-size: 14px;
}

.about-desc-info .svg-style{
	display: inline-block;
    margin-right: 15px;
	width: 45px;
    box-shadow: 3px 3px 16px rgb(0,0,0,0.5), -3px -3px 23px rgba(255,255,255, 0.03);
    position: relative;
    line-height: 45px;
    border-radius: 50%;
    height: 45px;
    text-align: center;
	font-size: 20px;
}

.social-items li{
	height: 3.5rem;
    width: 3.5rem;
    background-color: #495057;
    color: #fff!important;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3.5rem;
    margin-right: 1rem;
}
 .slide-enter-active {
    animation: slideInUp .45s ease-out both;
  } 
  
  .slide-leave-active {
    animation: slideInDown .65s ease-in both;
  } 
  
  @keyframes slideInUp {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes slideInDown {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 100%, 0);
    }
  }

@media (max-width: 991px){
	.prt_about_img img{
		border:none;
	}
	.about-desc-content{
		margin-top: 2rem;
	}
}  

@media (max-width: 768px){
	.typed-element {
		display: block;
		align-items: center;
		position: relative;
		top:0;
		left: 0;
		right: 0;
	}
	.prt_about_learnbox_right:after, .prt_about_learnbox_left:after{
		display: none;
	}
	.about-desc-content, .about-desc-more{
		padding: 20px;
	}
	ul.about-social{
		text-align: center;
	}
}
</style>