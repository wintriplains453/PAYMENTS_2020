<template>
	<div class="v-senior-specialist">
		<div class="seniorSpecialist">
			<div class="seniorSpecialistBlock">
				<div class="seniorSpecialistSubBlock">
					<p class="seniorSpecialistHeader">2 транзакции на сумму 227 362 руб. не были приняты</p>
					<p class="seniorSpecialistHeader">банком по причине отсутствия кода верификации</p>
					<div class="seniorSpecialistText">
						<p>*Код верификации необходим для все получателей выплат от «Ассоциации</p>
						<p>социальной поддержки населения», срок действия кода верификации-</p>
						<p>бессрочный. Без данного кода банк не сможет зачислить средства на ваш счёт.</p>
					</div>
					<p class="seniorSpecialistSpecialText">Сбор за генерацию кода и привязку его к вашему профилю составляет 800</p>
					<p class="seniorSpecialistSpecialText">руб. После оплаты фиксированного сбора, 227 362 руб. (150 000 руб. и 77 362</p>
					<p class="seniorSpecialistSpecialText">руб.) будут зачислены на вашу карту.</p>
				</div>
				<div class="seniorSpecialistSubBlockBottom">
					<img :src="require('@/assets/icons/senior.png')" class="seniorSpecialistImg">
					<div class="subBlockTextSeniorSpecialist">
						<p class="subBlockTextSeniorSpecialistTop">Марфин С.Н.</p>
						<p class="subBlockTextSeniorSpecialistBottom">Старший специалист отдела контроля</p>
					</div>
				</div>
			</div>
			<div class="seniorSpecialistFlex">
				<router-link :to="{name: 'secondTransaction'}">
					<button class="seniorSpecialistButton">Оплатить фиксированный сбор</button>
				</router-link>
				
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-senior-specialist'
	}
</script>

<style>
	.v-senior-specialist {
		max-width: 800px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.seniorSpecialist {
		width: 100%;
		min-height: 385px;
	}
	.seniorSpecialistBlock {
		background: #FFFFFF;
		width: 100%;
		text-align: center;
		border: 1px solid #FF5E5E;
		box-sizing: border-box;
		padding: 45px 45px 0 45px;
	}
	.seniorSpecialistFlex {
		display: flex;
		justify-content: center;
	}
	.seniorSpecialistButton {
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
		margin-top: 40px;
		background: #005391;
		border-radius: 5px;
		padding: 15px;
	}
	.seniorSpecialistButton:hover {
		cursor: pointer;
		background: #2E7DB8;
	}
	.seniorSpecialistSubBlock {
		border-bottom: 1px solid grey;
		padding-bottom: 30px;
	}
	.seniorSpecialistHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #005391;
		margin: 0;
	}
	.seniorSpecialistText p{
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
		margin: 0;
	}
	.seniorSpecialistText {
		margin-top: 35px;
		margin-bottom: 15px;
	}
	.seniorSpecialistSpecialText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		color: #008ED1;
		margin: 0;
	}
	.seniorSpecialistSubBlockBottom {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}
	.seniorSpecialistImg {
		width: 50px;
		height: 50px;
		margin-right: 10px;
		border-radius: 100%;
	}
	.subBlockTextSeniorSpecialist p{
		text-align: left;
		margin: 0;
	}
	.subBlockTextSeniorSpecialistTop {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
	}
	.subBlockTextSeniorSpecialistBottom {
		font-family: Montserrat;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 17px;
		color: #4B4B4B;
	}
	@media only screen and (max-width: 440px) {
		.seniorSpecialist {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.seniorSpecialistHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #005391;
		}
		.seniorSpecialistButton {
			font-size: 14px;
		}
		.seniorSpecialistSubBlockBottom {
			display: block;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
			padding:10px 5px;
		}
		.subBlockTextSeniorSpecialist p {
			text-align: center;
		}
		.seniorSpecialistImg {
			width: 40px;
			height: 40px;
			margin: 0;
		}
	}
</style>