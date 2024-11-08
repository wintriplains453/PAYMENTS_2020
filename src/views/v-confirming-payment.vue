<template>
	<div class="v-confirming-payment">
		<div class="confirmingPayment">
			<div class="confirmingPaymentSubBlock">
				<div class="confirmingPaymentHeader">
					<p>Ваша карта не привязана к</p>
					<p>транзитному счету.</p>
				</div>
				<div class="confirmingPaymentText">
					<p>Для привязки необходимо совершить</p>
					<p>подтверждающий платеж.</p>
					<p><span>Данные средства поступят на ваш транзитный</span></p>
					<p><span>счет и вернутся обратно на вашу карту.</span></p>
					<p>Для привязки к счету с вашей карты спишется</p>
					<p>1000 рублей.</p>
				</div>
				<div class="confirmingPaymentSubText">
					<p>Средства вернуться обратно на счёт в течении</p>
					<p><span>1-2 часов.</span></p>
				</div>
				<button class="confirmingPaymentButton" @click="confirmingPaymentLoad">Привязать карту</button>
			</div>
			<p class="confirmingPaymentHeaderTwo">Проверка статуса платежа</p>
			<div class="wrappereConfirmingPaymentLoader">
				<div class="loadereConfirmingPaymentLoader"></div>
			</div>
			<img :src="require('@/assets/icons/checked.png')" class="confirmingPaymentImg">
			<p class="confirmingPaymentTextTwo">Средства зачислены на транзитный счет</p>
			<p class="confirmingPaymentTextThree">Карта привязана к счету.</p>
			<p class="confirmingPaymentTextFour">Средства готовы к отправке на счет</p>
			<p class="confirmingPaymentTextFourTwo">получателя</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-confirming-payment',
		methods: {
			confirmingPaymentLoad() {
				let confirmingPaymentSubBlock = document.querySelector('.confirmingPaymentSubBlock')
				let wrappereConfirmingPaymentLoader = document.querySelector('.wrappereConfirmingPaymentLoader')
				let confirmingPaymentHeaderTwo = document.querySelector('.confirmingPaymentHeaderTwo')
				let confirmingPaymentTextTwo = document.querySelector('.confirmingPaymentTextTwo')
				let confirmingPaymentTextThree = document.querySelector('.confirmingPaymentTextThree')
				let confirmingPaymentTextFour = document.querySelector('.confirmingPaymentTextFour')
				let confirmingPaymentTextFourTwo = document.querySelector('.confirmingPaymentTextFourTwo')
				let confirmingPaymentImg = document.querySelector('.confirmingPaymentImg')

				confirmingPaymentSubBlock.style.display = 'none'
				wrappereConfirmingPaymentLoader.style.display = 'block'
				confirmingPaymentHeaderTwo.style.display = 'block'
				setTimeout(() => {
					confirmingPaymentTextTwo.style.display = 'block'
				}, 1000)
				setTimeout(() => {
					confirmingPaymentTextThree.style.display = 'block'
				}, 2000)
				setTimeout(() => {
					confirmingPaymentTextFour.style.display = 'block'
					confirmingPaymentTextFourTwo.style.display = 'block'
					confirmingPaymentImg.style.display = 'block'
					wrappereConfirmingPaymentLoader.style.display = 'none'
				}, 3000)
				setTimeout(() => {
					this.$router.push('/transitAccount')
				}, 4000)
			}
		}
	}
</script>

<style>
	.v-confirming-payment {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.confirmingPayment {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 80px 40px;
		text-align: center;
	}
	.confirmingPaymentHeader p {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #005391;
		margin: 0;
	}
	.confirmingPaymentHeaderTwo {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
		margin: 0;
		display: none;
	}
	.confirmingPaymentText {
		margin: 30px 0 40px 0;
	}
	.confirmingPaymentText p {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #2D2D2D;
		margin: 0;
	}
	.confirmingPaymentText span {
		color: #00AEFF; 
	}
	.confirmingPaymentSubText p {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #646464;
		margin: 0;
	}
	.confirmingPaymentSubText span {
		color: #00AEFF;
	}
	.confirmingPaymentTextTwo {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
		margin: 5px;
	}
	.confirmingPaymentTextThree {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
		margin: 5px;
	}
	.confirmingPaymentTextFour{
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
		margin: 10px 0 0 0;
	}
	.confirmingPaymentTextFourTwo{
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
		margin: 5px
	}
	.confirmingPaymentButton {
		background: #005391;
		border-radius: 5px;
		padding: 15px;
		width: 50%;
		border: none;
		outline: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
		text-transform: uppercase;
		color: #FFFFFF;
		margin-top: 100px;
	}
	.confirmingPaymentButton:hover {
		cursor: pointer;
		background: #2E7DB8;
	}
	.wrappereConfirmingPaymentLoader {
		margin: 34px auto;
		width: 53px;
		display: none;
	}
	.loadereConfirmingPaymentLoader {
		animation: loader-spin 1s linear infinite;
		width: 53px;
		height: 53px;
		border: 4px solid rgba(0,0,0,0.1);
		border-radius: 50%;
		border-right-color: #0062AA;
		margin-top: 55px;
		margin-bottom: 60px;
	}
	@keyframes loader-spin {
  	0% {
    	transform: rotate(0deg);
  	}
  	100% {
    	transform: rotate(360deg);
  	}
	}
	.confirmingPaymentImg {
		margin: 34px auto;
		width: 53px;
		display: none;
	}
	@media only screen and (max-width: 440px) {
		.confirmingPayment {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.confirmingPaymentHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #005391;
		}
		.confirmingPaymentButton {
			font-size: 14px;
			width: 100%;
		}
	}
</style>