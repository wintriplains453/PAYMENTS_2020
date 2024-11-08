<template>
	<div class="v-paymentIsDue">
		<div class="paymentIsDue">
			<div class="hidePaymentIsDueContent">
				<p class="paymentIsDueHeader">Происходит подсчёт выплаты…</p>
				<div class="wrapperLoaderpaymentIsDue">
					<div class="loaderpaymentIsDue"></div>
				</div>
			</div>

			<div class="showPaymentIsDueContent">
				<p class="paymentIsDueHeaderTwo">Вам положена единоразовая</p>
				<p class="paymentIsDueHeaderTwo">выплата в сумме</p>

				<p class="paymentIsDueSum">227 362 руб.</p>

				<p class="paymentIsDueText">Для получения средств укажите</p>
				<p class="paymentIsDueText">реквизиты на следующем этапе…</p>
			
				<div class="paymentIsDueSubText">
					<p>Если автоматическая переадресация не</p>
					<p>произошла, то жмите на кнопку ниже</p>
				</div>

				<router-link :to="{name: 'secondForm'}">
					<button class="paymentIsDueButton">Перейти к заполнению реквизитов </button>
				</router-link>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-paymentIsDue',
		methods: {
			paymentIsDue() {
				let hidePayment = document.querySelector('.hidePaymentIsDueContent')
				let showPayment = document.querySelector('.showPaymentIsDueContent')
				setTimeout(() => {
					hidePayment.style.display = 'none'
					showPayment.style.display = 'block'
				}, 3000)
			}
		},
		mounted() {
			this.paymentIsDue()
		}
	}
</script>

<style>
	.v-paymentIsDue {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.paymentIsDue {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		text-align: center;
		padding: 145px 50px;
	}
	.showPaymentIsDueContent {
		display: none;
	}
	.paymentIsDueHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		color: #005391;
		margin: 0;
	}
	.wrapperLoaderpaymentIsDue {
		margin: 34px auto;
		width: 53px;
	}
	.loaderpaymentIsDue {
		animation: loader-spin 1s linear 3;
		width: 53px;
		height: 53px;
		border: 4px solid rgba(0,0,0,0.1);
		border-radius: 50%;
		border-right-color: #0062AA;
	}
	@keyframes loader-spin {
  	0% {
    	transform: rotate(0deg);
  	}
  	100% {
    	transform: rotate(360deg);
  	}
	}
	.paymentIsDueHeaderTwo {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		color: #005391;
		margin: 0;
	}
	.paymentIsDueSum {
		font-family: Exo 2;
		font-style: normal;
		font-weight: 800;
		font-size: 44px;
		line-height: 53px;
		text-align: center;
		color: #2D2D2D;
		margin: 0;
		margin-top: 40px;
	}
	.paymentIsDueText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #2D2D2D;
		margin: 0;
	}
	.paymentIsDueSubText {
		margin-top: 160px;
	}
	.paymentIsDueSubText p {
		font-family: Montserrat;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
		color: #4B4B4B;
		margin: 0;
	}
	.paymentIsDueButton {
		background: #005391;
		border-radius: 5px;
		width: 80%;
		height: 55px;
		outline: none;
		border: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
		text-transform: uppercase;
		color: #FFFFFF;
		margin-top: 20px;
	}
	.paymentIsDueButton:hover {
		background: #2E7DB8;
	}
	@media only screen and (max-width: 440px) {
		.paymentIsDue {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.paymentIsDueHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #2D2D2D;
		}
		.paymentIsDueHeaderTwo {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			text-align: center;
			color: #005391;
		}
		.paymentIsDueSum {
			font-family: Exo 2;
			font-style: normal;
			font-weight: 800;
			font-size: 22px;
			line-height: 26px;
			text-align: center;
			color: #2D2D2D;
		}
		.paymentIsDueSubText {
			margin-top: 50px;
		}
		.paymentIsDueButton {
			width: 100%;
			font-family: Montserrat;
			font-style: normal;
			font-weight: bold;
			font-size: 16px;
			line-height: 20px;
			text-align: center;
			text-transform: uppercase;
			color: #FFFFFF;
		}
	}

</style>