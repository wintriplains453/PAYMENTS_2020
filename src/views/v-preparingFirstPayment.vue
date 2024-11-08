<template>
	<div class="v-preparingFirstPayment">
		<div class="preparingFirstPayment">
			<div class="wrapperMainFirstPayment">
				<p class="FirstPaymentHeader">Подготовка выплаты</p>
				<div class="wrapperFirstPayment">
						<div class="loaderFirstPayment"></div>
				</div>
				<p class="FirstPaymentTextOne">Подготовка электронных документов</p>
				<p class="FirstPaymentTextTwo">Сверка по базам данных</p>
				<p class="FirstPaymentTextThree">Получение ответа</p>
			</div>
			<div class="readyFirstPayment">
				<p class="readyFirstPaymentHeader">Ответ от надзорных органов</p>
				<p class="readyFirstPaymentHeader">получен</p>
				<img :src="require('@/assets/icons/checked.png')" class="imgFirstPayment">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-preparingFirstPayment',
		methods: {
			showText() {
				let one = document.querySelector('.FirstPaymentTextOne')
				let two = document.querySelector('.FirstPaymentTextTwo')
				let three = document.querySelector('.FirstPaymentTextThree')
				let ready = document.querySelector('.readyFirstPayment')
				let wrapper = document.querySelector('.wrapperMainFirstPayment')
				setTimeout(() => {
					one.style.display = 'block'
				}, 1000)
				setTimeout(() => {
					two.style.display = 'block'
				}, 2000)
				setTimeout(() => {
					three.style.display = 'block'
				}, 3000)
				setTimeout(() => {
					ready.style.display = 'block'
					wrapper.style.display = 'none'
				}, 5000)
				setTimeout(() => {
					this.$router.push('/firstPayment')
				}, 6000)
			}
		},
		mounted() {
			this.showText()
		}	
	}
</script>

<style>
	.v-preparingFirstPayment {
		max-width: 800px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.preparingFirstPayment {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 25px 10px;
		text-align: center;
	}
	.FirstPaymentHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.wrapperFirstPayment {
		margin: 34px auto;
		width: 53px;
	}
	.loaderFirstPayment {
		animation: loader-spin 1s linear infinite;
		width: 53px;
		height: 53px;
		border: 4px solid rgba(0,0,0,0.1);
		border-radius: 50%;
		border-right-color: #0062AA;
		margin-top: 100%;
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
	.FirstPaymentTextOne {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
	}
	.FirstPaymentTextTwo {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
	}
	.FirstPaymentTextThree {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
	}
	.readyFirstPayment {
		display: none;
		margin-top: 150px;
	}
	.readyFirstPaymentHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #005391;
		margin: 0;
	}
	.imgFirstPayment {
		margin-top: 30px;
	}
	@media only screen and (max-width: 440px) {
		.preparingFirstPayment {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.FirstPaymentHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #2D2D2D;
		}
		.readyFirstPaymentHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			text-align: center;
			color: #005391;
		}
	}
</style>