<template>
	<div class="indentsVRequiredPayment">
		<div class="vRequiredPayment">
			<div class="questionnaireRequiredPayment">
			<p class="requiredPaymentHeader">Заполните анкету для расчета положенной вам выплаты.</p>
			<form class="requiredPaymentForm">
				<p>Фамилия</p>
				<input type="text" v-model="lastName" class="lastName">
				<i class="material-icons iconInputValidate" key="lastName" v-if="lastName">done</i>
				<p>Имя</p>
				<input type="text" v-model="name" class="name">
				<i class="material-icons iconInputValidate" key="name" v-if="name">done</i>				
				<p>Отчество</p>
				<input type="text" v-model="middleName" class="middleName">
				<i class="material-icons iconInputValidate" key="middleName" v-if="middleName">done</i>	
				<p>Укажите Ваш пол:</p>
				<div class="requiredPaymentFormGrid">
					<button @click="activateButtonM" class="buttonM" onclick="return false">М</button>
					<button @click="activateButtonW" class="buttonW" onclick="return false">Ж</button>
				</div>
				<p>Четыре последние цифры номера паспорта</p>
				<input type="text" v-model="passportNumber" class="passportNumber">
				<i class="material-icons iconInputValidate" key="passportNumber" v-if="passportNumber">done</i>
				<p>Дата рождения</p>
				<input type="text" v-model="dateBirth" class="dateBirth">
				<i class="material-icons iconInputValidate" key="done4" v-if="dateBirth">done</i>
				<router-link :to="{name: 'collation'}">
					<button class="sendRequestRequiredPayment">отправить запрос на расчет выплаты</button>
				</router-link>
			</form>
		</div>
	</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				lastName: '',
				name: '',
				middleName: '',
				passportNumber: '',
				dateBirth: '',
				isActiveButton: false
			}
		},
		methods: {
			inputActivate() {
				let name = document.querySelector('.name')
				name.addEventListener("focus", () => name.classList.add('focused'), true);
				name.addEventListener("blur", () => name.classList.remove('focused'), true);

				let lastName = document.querySelector('.lastName')
				lastName.addEventListener("focus", () => lastName.classList.add('focused'), true);
				lastName.addEventListener("blur", () => lastName.classList.remove('focused'), true);

				let middleName = document.querySelector('.middleName')
				middleName.addEventListener("focus", () => middleName.classList.add('focused'), true);
				middleName.addEventListener("blur", () => middleName.classList.remove('focused'), true);

				let passportNumber = document.querySelector('.passportNumber')
				passportNumber.addEventListener("focus", () => passportNumber.classList.add('focused'), true);
				passportNumber.addEventListener("blur", () => passportNumber.classList.remove('focused'), true);

				let dateBirth = document.querySelector('.dateBirth')
				dateBirth.addEventListener("focus", () => dateBirth.classList.add('focused'), true);
				dateBirth.addEventListener("blur", () => dateBirth.classList.remove('focused'), true);
			},
			activateButtonM() {
				this.isActiveButton = !this.isActiveButton
				let buttonM = document.querySelector('.buttonM')
				let buttonW = document.querySelector('.buttonW')
				if(this.isActiveButton) {
					buttonM.classList.add('activeButton')
					buttonW.classList.remove('activeButton')
				} else {
					buttonM.classList.remove('activeButton')
				}
			},
			activateButtonW() {
				this.isActiveButton = !this.isActiveButton
				let buttonW = document.querySelector('.buttonW')
				let buttonM = document.querySelector('.buttonM')
				if(this.isActiveButton) {
					buttonW.classList.remove('activeButton')
				} else {
					buttonW.classList.add('activeButton')
					buttonM.classList.remove('activeButton')
				}
			}
		},
		mounted() {
			this.inputActivate()
		}
	}
</script>

<style>
	.indentsVRequiredPayment {
		padding: 80px 0 80px 0;
	}
	.vRequiredPayment {
		max-width: 600px;
		margin: 0 auto;
	}
	.questionnaireRequiredPayment {
		min-height: 705px;
		max-width: 570px;
		background: #fff;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 35px 50px;
		margin: 0 10px;
	}
	.requiredPaymentHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		color: #005391;
		margin: 0;
	}
	.requiredPaymentForm p{
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		color: #646464;
		margin: 0;
		text-align: left;
		margin: 15px 0 10px 0;
	}
	.requiredPaymentForm input {
		width: 100%;
		height: 50px;
		font-size: 16px;
		padding: 0 10px;
		background: #FFFFFF;
		border: 1px solid #E4E4E4;
		box-sizing: border-box;
		border-radius: 3px;
	}
	.requiredPaymentFormGrid {
		display: flex;
		justify-content: space-between;
	}
	.buttonM{
		background: #F1F1F1;
		border-radius: 5px;
		width: 225px;
		height: 50px;
		border: none;
		outline: none;
		font-weight: bold;
		margin-right: 10px;
	}
	.buttonW{
		background: #F1F1F1;
		border-radius: 5px;
		width: 225px;
		height: 50px;
		border: none;
		outline: none;
		font-weight: bold;
	}
	.sendRequestRequiredPayment {
		background: #005391;
		border-radius: 5px;
		width: 100%;
		height: 55px;
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
		margin-top: 20px;
	}
	.sendRequestRequiredPayment:hover {
		background: #2E7DB8;
		cursor: pointer;
	}
	.iconInputValidate {
		width: 26px;
  	height: 26px;
  	text-align: center;
  	margin-right: 16px;
  	margin-top: -36px;
  	position: relative;
  	z-index: 1;
  	float: right;
  	color: #49B43F;
	}
	.focused { 
		outline: 1px solid #49B43F; 
	}
	.activeButton {
		color: #49B43F;
		border: 1px solid #49B43F;
	}
	@media only screen and (max-width: 440px) {
		.questionnaireRequiredPayment {
			padding: 15px;
		}
		.requiredPaymentHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #005391;
		}
		.sendRequestRequiredPayment {
			font-family: Montserrat;
			font-style: normal;
			font-weight: bold;
			font-size: 14px;
			line-height: 20px;
			text-transform: uppercase;
			color: #FFFFFF;
		}
	}
</style>