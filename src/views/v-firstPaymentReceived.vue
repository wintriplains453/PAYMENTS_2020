<template>
	<div class="v-firstPaymentReceived">
		<div class="firstPaymentReceived">
			<div class="firstPaymentReceivedShow">
				<p class="firstPaymentReceivedHeaderShow">Оплата пошлины получена</p>
				<div class="wrapperPaymentReceived">
					<div class="loaderPaymentReceived"></div>
				</div>
			</div>
			<div class="firstPaymentReceivedHide">
				<p class="firstPaymentReceivedHeaderHide">Выполнено</p>
				<img :src="require('@/assets/icons/checked.png')" class="imgFirstPaymentReceived">
			</div>
			<div class="wrapperFirstPaymentReceivedText">
				<p class="firstPaymentReceivedText">Занесение информации в общий реестр</p>
				<p class="firstPaymentReceivedText">данных</p>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-firstPaymentReceived',
		
		methods: {
			showText() {
				let text = document.querySelector('.wrapperFirstPaymentReceivedText')
				let wrapperHide = document.querySelector('.firstPaymentReceivedShow')
				let wrapperShow = document.querySelector('.firstPaymentReceivedHide')
				setTimeout(() => {
					text.style.display = 'block'
				}, 500)
				setTimeout(() => {
					wrapperHide.style.display = 'none'
					wrapperShow.style.display = 'block'
				}, 2000)
				setTimeout(() => {
					this.$router.push('/getPayout/second')
				}, 3000)
			}
		},

		mounted() {
			this.showText()
		}
	}
</script>

<style>
	.v-firstPaymentReceived {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.firstPaymentReceived {
		width: 100%;
		min-height: 585px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 25px 10px;
		text-align: center;
		padding-top: 160px;
	}
	.wrapperPaymentReceived {
		margin: 34px auto;
		width: 53px;
	}
	.loaderPaymentReceived {
		animation: loader-spin 1s linear infinite;
		width: 53px;
		height: 53px;
		border: 4px solid rgba(0,0,0,0.1);
		border-radius: 50%;
		border-right-color: #0062AA;
		margin-top: 55px;
		margin-bottom: 100px;
	}
	@keyframes loader-spin {
  	0% {
    	transform: rotate(0deg);
  	}
  	100% {
    	transform: rotate(360deg);
  	}
	}
	.firstPaymentReceivedHeaderShow {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		color: #2D2D2D;
	}
	.wrapperFirstPaymentReceivedText {
		display: none;
	}
	.firstPaymentReceivedText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		margin: 0;
	}
	.firstPaymentReceivedHeaderHide {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #005391;
	}
	.firstPaymentReceivedHide {
		display: none;
	}
	.imgFirstPaymentReceived {
		margin-bottom: 80px;
		margin-top: 45px;
	}
	@media only screen and (max-width: 440px) {
		.firstPaymentReceived {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.firstPaymentReceivedHeaderShow {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #2D2D2D;
		}
		.firstPaymentReceivedHide {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #005391;
		}
	}
</style>