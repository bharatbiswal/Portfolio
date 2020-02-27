<template>
    <!--Contact Wrapper Start-->
	<div class="prt_contact_wrapper prt_toppadder115" id="contact">
         <Logo />
		<div class="prt_close_wrapper">
            <nuxt-link to="/">
			    <img src=".././assets/right_arrow.png" alt="Close" class="prt_close">
            </nuxt-link>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="prt_heading_wrapper">
						<div class="prt_heading">
							<h1>get in touch</h1>
							<vue-typed-js :strings="['contact us', 'message us']" :loop="true">
								<p class="typing"></p>
							</vue-typed-js>
						</div>
					</div>
				</div>
				<div class="prt_contact_box">
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div class="prt_contact_info">
								<h1>How we can help you ?</h1>
								<div class="prt_contact_form">
									<form>
									<div class="row">
										<!-- <form> -->
											<!-- for error -->
											<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div class="alert alert-danger" role="alert" v-if="errors.length">
													<div v-for="error in errors" :key="error['.key']" class="error-text-style">{{ error }}</div>
												</div>
											</div>
											<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
												<input type="text" name="name" placeholder="Your Name" class="require" v-model="contact.name">
											</div>
											<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
												<input type="text" name="email" placeholder="Your Email" class="require" data-valid="email" 
												data-error="Email should be valid." v-model="contact.email">
											</div>
											<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<input type="text" name="subject" placeholder="Subject" class="require" v-model="contact.subject">
											</div>
											<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<textarea rows="4" name="message" placeholder="Message" class="require" v-model="contact.message"></textarea>
											</div>
											<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<div class="response"></div>
											</div>
											<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
												<!-- <button @click="writeToFirestore" :disabled="writeSuccessful">
													<span v-if="!writeSuccessful">Write now</span>
													<span v-else>Successful!</span>
												</button> -->
												<button type="button" class="prt_btn submitForm" form-type="contact" @click="writeToFirestore">submit</button>
											</div>
										<!-- </form> -->
									</div>
									</form>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div class="prt_contact_map">
								<img src=".././assets/contact-map.jpg" alt="map">
							</div>
						</div>
					</div>
				</div>
				<div class="prt_contact_details">
					<div class="row">
						<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
							<div class="prt_contact_details_box details_box1" data-aos="fade-right">
								<font-awesome-icon :icon="['fas', 'phone']"/>
								<p>+1-202-555-0125<br>01-202-555-0125</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
							<div class="prt_contact_details_box details_box2" data-aos="fade-up">
								<font-awesome-icon :icon="['fas', 'envelope-open']"/>
								<p><a href="index">name@yourmail.com</a><br>
								<a href="index">mail@yourname.com</a></p>
							</div>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
							<div class="prt_contact_details_box details_box3" data-aos="fade-left">
								<font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
								<p>71 Pilgrim Avenue<br>Chevy Chase, MD 20815</p>
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
						<p>Copyright © 2020 <a href="/">Portfolio</a>. All Rights Reserved</p>
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
	<!--Contact Wrapper End-->
</template>

<script>
import Logo from '~/components/Logo.vue'
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
import {fireDb} from '~/plugins/firebase.js'


Vue.use(VueTypedJs)
export default {
    transition: 'page',
    components: {
        Logo,
  },
  data() {
      return {
		errors:[],
		name: null,
		email:null,
		subject:null,
		message:null,
		contact: {},
      }
    },
    methods: {
      async writeToFirestore() {
		this.errors = [];
		if(this.contact.name == undefined || (this.contact.name.length < 1)) {
			this.errors.push("Firstname not specified, Please enter a valid Firstname");
			return;
		}
		if(this.contact.email == undefined || (this.contact.email.length < 1)) {
			this.errors.push("Email not specified, Please enter a valid Email");
			return;
		}
		if(this.contact.subject == undefined || (this.contact.subject.length < 1)) {
			this.errors.push("Subject not specified, Please enter a valid Subject");
			return;
		}
		if(this.contact.message == undefined || (this.contact.message.length < 1)) {
			this.errors.push("Message not specified, Please enter a valid Message");
			return;
		}
		const ref = fireDb.collection("contacts").add(this.contact)
		.then(() => {
			// const document = {
				this.contact.name = ''
				this.contact.email = ''
				this.contact.subject = ''
				this.contact.message = ''
			alert("SUCCESS, contact added successfully");
		})
		.catch((error) => {
			alert("Error adding document: ", error);
		});
        
        // try {
        //   await ref.set(document)
        // } catch (e) {
        //   // TODO: error handling
        //   console.error(e)
        // }
        // this.writeSuccessful = true
      }
    }
}
</script>

<style scoped>
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

@media (max-width: 575px) {
  .prt_contact_wrapper{
	  padding: 115px 40px;
  }
}


</style>