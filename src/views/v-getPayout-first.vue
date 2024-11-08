<template>
	<div class="v-getPayout-first">
		<div class="getPayout-first">
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
					<p class="getPayoutText">658421345</p>
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
					<p class="getPayoutText"><span>0 руб.</span> для первой транзакции</p>
				</div>
			</div>
			<div class="getPayoutBlockButton">
				<router-link :to="{name: 'preparingFirstPayment'}">
					<button class="getPayoutButton">Получить выплату</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-getPayout-first',
		data() {
			return {
				date: Date.now(),
				passportFour: ''
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
	.v-getPayout-first {
		max-width: 800px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.getPayout-first {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 25px 10px;
		margin: 0 10px;
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
		margin-top: 55px;
	}
	.getPayoutButton:hover {
		background: #2E7DB8;
	}
	@media only screen and (max-width: 640px) {
		.getPayoutBlock {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
		.getPayoutHeader {
			text-align: left;
			margin-bottom: 0;
		}
		.getPayoutText {
			text-align: left;
			margin: 0;
		}
		.getPayoutTopBlockHeader {
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