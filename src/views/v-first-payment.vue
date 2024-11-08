<template>
	<div class="v-first-payment">
		<div class="firstPayment">
			<p class="firstPaymentHeader">По социальной выплате</p>
			<p class="firstPaymentHeader">№658421345 для ФИО на сумму</p>
			<p class="firstPaymentHeader">227 362 руб. (двести двадцать</p>
			<p class="firstPaymentHeader">семь тысяч триста шестьдесят два</p>
			<p class="firstPaymentHeader">рубля) отсутствует информация о</p>
			<p class="firstPaymentHeader">оплате пошлины.</p>

			<div class="subFirstPayment">
				<p class="firstPaymentText">Для моментального зачисления средств на вашу</p>
				<p class="firstPaymentText">банковскую карту</p>
				<p class="firstPaymentText firstPaymentWeight">№**** **** **** ****</p>
				<p class="firstPaymentText">Необходимо <span>оплатить пошлину</span> в размере 0,3%</p>
				<p class="firstPaymentText">(680 руб.) от суммы выплаты.</p>
			</div>
			<router-link :to="{name: 'firstPaymentReceived'}">
				<button class="firstPaymentButton">Оплатить пошлину и получить выплату</button>
			</router-link>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-first-payment'
	}
</script>

<style>
	.v-first-payment {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.firstPayment {
		width: 100%;
		min-height: 585px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 25px 10px;
		text-align: center;
	}
	.firstPaymentHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #005391;
		margin: 0;
	}
	.subFirstPayment {
		margin-top: 50px;
	}
	.firstPaymentText {
		margin: 0;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #2D2D2D;
	}
	.firstPaymentText span {
		color: #008ED1;
		cursor: pointer;
	}
	.firstPaymentButton {
		margin-top: 50px;
		padding: 15px;
		background: #005391;
		border-radius: 5px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
		text-transform: uppercase;
		color: #FFFFFF;
		border: none;
		outline: none;
	}
	.firstPaymentButton:hover {
		background: #2E7DB8;
		cursor: pointer;
	}
	.firstPaymentWeight {
		font-weight: bold;
		color: #000;
	}
	@media only screen and (max-width: 440px) {
		.firstPayment {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.firstPaymentHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #005391;
		}
		.firstPaymentButton {
			font-size: 14px;
		}
	}
</style>