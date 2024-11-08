<template>
	<div class="v-manual-payment">
		<div class="manualPayment">
			<div class="manualPaymentSub">
				<div class="manualPaymentBorder">
					<div class="manualPaymentHeader">
						<p>Ваша социальная выплата не была отправлена из-за</p>
						<p>неопределённой ошибки.</p>
					</div>
					<p class="manualPaymentSubText">Оплаченная комиссия вернётся на вашу карту в течении 1 банковского дня.</p>
				</div>
				<div class="manualPaymentText">
					<p>Для 100% зачисления средств воспользуйтесь опцией «Ручное</p>
					<p>зачисление средств»</p>
					<p>В данном случае менеджер отправит средства в ручном режиме сразу</p>
					<p>на вашу карту, ошибки исключены. Средства поступит не позднее 1-3</p>
					<p>минут после оплаты услуг оператора.</p>
				</div>
				<button class="manualPaymentButton" @click="manualPaymentSub">Оплатить услуги оператора и получить средства на карту.</button>
				<p>Стоимость услуги - 1450 руб.</p>
			</div>
			<p class="manualPaymentHeaderTwo">Проверка оплаты услуги</p>
			<div class="wrapperemanualPaymentLoader">
				<div class="loaderemanualPaymentLoader"></div>
			</div>
			<img :src="require('@/assets/icons/checked.png')" class="manualPaymentImg">
			<p class="manualPaymentTextTwo">Оплата получена</p>
			<p class="manualPaymentTextThree">Ожидайте зачисления средств</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-manual-payment',
		methods: {
			manualPaymentSub() {
				let manualPaymentSub = document.querySelector('.manualPaymentSub')
				let wrapperemanualPaymentLoader = document.querySelector('.wrapperemanualPaymentLoader')
				let manualPaymentHeaderTwo = document.querySelector('.manualPaymentHeaderTwo')
				let manualPaymentImg = document.querySelector('.manualPaymentImg')
				let manualPaymentTextTwo = document.querySelector('.manualPaymentTextTwo')
				let manualPaymentTextThree = document.querySelector('.manualPaymentTextThree')

				manualPaymentSub.style.display = 'none'
				wrapperemanualPaymentLoader.style.display = 'block'
				manualPaymentHeaderTwo.style.display = 'block'

				setTimeout(() => {
					wrapperemanualPaymentLoader.style.display = 'none'
					manualPaymentImg.style.display = 'block'
					manualPaymentTextTwo.style.display = 'block'
					manualPaymentTextThree.style.display = 'block'
				}, 2000)
				setTimeout(() => {
					this.$router.push('/')
				}, 5000)
			}
		}
	}
</script>

<style>
	.v-manual-payment {
		max-width: 900px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.manualPayment {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 20px 0px;
		text-align: center;
	}
	.manualPaymentBorder {
		border-bottom: 1px solid #E5E5E5;
		padding-bottom: 56px;
	}
	.manualPaymentHeader {
		margin-top: 50px;
	}
	.manualPaymentHeader p {
		margin: 0;
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 29px;
		color: #005391;
	}
	.manualPaymentText p {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #313131;
		margin: 0;
	}
	.manualPaymentText {
		margin: 40px 0;
	}
	.manualPaymentTextTwo {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
	}
	.manualPaymentTextThree {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
	}
	.manualPaymentButton {
		background: #005391;
		border-radius: 5px;
		border: none;
		outline: none;
		padding: 15px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		text-transform: uppercase;
		color: #FFFFFF;
		width: 57%;
	}
	.manualPaymentButton:hover {
		cursor: pointer;
		background: #2E7DB8;
	}
	.wrapperemanualPaymentLoader {
		margin: 34px auto;
		width: 53px;
		display: none;
	}
	.loaderemanualPaymentLoader {
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
	.manualPaymentImg {
		margin: 34px auto;
		width: 53px;
		display: none;
	}
	.manualPaymentHeaderTwo {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
		display: none;
	}
	@media only screen and (max-width: 440px) {
		.manualPayment {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.manualPaymentButton {
			font-size: 12px;
			width: 100%;
			margin-bottom: 10px;
			padding: 5px;
		}
	}
</style>