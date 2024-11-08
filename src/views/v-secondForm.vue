<template>
	<div class="v-secondForm">
		<div class="secondFormBlock">
			<p class="secondFormHeader">Для получения средств в размере 227 362 руб. заполните</p>
			<p class="secondFormHeader">недостающую информацию в заявке на выплату</p>
			<p class="secondFormText">Если необходимо, то внесите корректировки</p>

			<div class="secondFormGrid">
				<div class="secondFormGridInput">
					<p>Фамилия</p>
					<input type="text" v-model="lastName" class="lastName">
					<i class="material-icons iconInputValidate" key="lastName" v-if="lastName">done</i>
				</div>
				<div class="secondFormGridInput">
					<p>Имя</p>
					<input type="text" v-model="name" class="name">
					<i class="material-icons iconInputValidate" key="name" v-if="name">done</i>					
				</div>
				<div class="secondFormGridInput">
					<p>Отчество</p>
					<input type="text" v-model="middleName" class="middleName">
					<i class="material-icons iconInputValidate" key="middleName" v-if="middleName">done</i>	
				</div>
				<div class="secondFormGridInput">
					<div class="subSecondFormGridInput">
						<div>
							<p>Дата рождения</p>
								<input type="text" v-model="dateBirth" class="dateBirth">
								<i class="material-icons iconInputValidate" key="done4" v-if="dateBirth">done</i>
						</div>
						<div>
							<p>Пол</p>
								<input type="text" v-model="gender" class="gender">
								<i class="material-icons iconInputValidate" key="gender" v-if="gender">done</i>		
						</div>
					</div>
				</div>
				<div class="secondFormGridInput">
					<p>Четыре последние цифры номера паспорта</p>
						<input type="text" v-model="passportNumber" class="passportNumber">
						<i class="material-icons iconInputValidate" key="passportNumber" v-if="passportNumber">done</i>
				</div>
				<div class="secondFormGridInput">
					<p>Номер карты для получения выплаты</p>
						<input type="text" v-model="cardNumber" class="cardNumber" id="cardNumber" placeholder="____ ____ ____ ____" maxlength="19" minlength="19">
						<i class="material-icons iconInputValidate" key="cardNumber" v-if="cardNumber">done</i>		
				</div>
			</div>
			<router-link :to="{name: 'supSpecialist'}">
				<button class="secondFormButton" @click="processing">Отправить анкету на обработку</button>
			</router-link>
		</div>
	</div>
</template>

<script>
import {mapActions} from 'vuex'

	export default {
		name: 'v-secondForm',
		data() {
			return {
				lastName: '',
				name: '',
				middleName: '',
				passportNumber: '',
				dateBirth: '',
				gender: '',
				cardNumber: '',
				isActiveButton: false
			}
		},
		methods: {
			...mapActions([
				'GET_PROCESSING_DATA'
			]),
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

				let gender = document.querySelector('.gender')
				gender.addEventListener("focus", () => gender.classList.add('focused'), true);
				gender.addEventListener("blur", () => gender.classList.remove('focused'), true);

				let cardNumber = document.querySelector('.cardNumber')
				cardNumber.addEventListener("focus", () => cardNumber.classList.add('focused'), true);
				cardNumber.addEventListener("blur", () => cardNumber.classList.remove('focused'), true);
			},
			cardSpaces() {
				function mask() {
    			let val = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ0-9]/g, '');
    			val = val !== '' ? val.match(/.{1,4}/g).join` ` : ``;
    			this.value = val;
				}
				document.querySelector('#cardNumber').addEventListener('input', mask);
			},
			processing() {
				let arrData = {}
				arrData.lastName = this.lastName
				arrData.name = this.name
				arrData.middleName = this.middleName
				arrData.passportNumber = this.passportNumber
				arrData.dateBirth = this.dateBirth
				arrData.gender = this.gender
				arrData.cardNumber = this.cardNumber
				this.GET_PROCESSING_DATA(arrData)
			}
		},
		mounted() {
			this.inputActivate()
			this.cardSpaces()
		}
	} 
</script>

<style>
	.v-secondForm {
		max-width: 1200px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.secondFormBlock {
		width: 100%;
		min-height: 530px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		text-align: center;
		padding: 75px 50px;
	}
	.secondFormHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		color: #005391;
		margin: 0;
	}
	.secondFormText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #2D2D2D;
		margin: 10px;
		margin-bottom: 70px;
	}
	.secondFormGrid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-gap: 20px;
	}
	.secondFormGridInput p{
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		color: #646464;
		margin: 0;
		text-align: left;
	}
	.secondFormGridInput input {
		width: 100%;
		height: 100%;
		padding: 15px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #313131;
		background: #FFFFFF;
		border: 1px solid #E4E4E4;
		box-sizing: border-box;
		border-radius: 3px;
	}
	.subSecondFormGridInput {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 2%;
	}
	.secondFormButton {
		background: #005391;
		border-radius: 5px;
		width: 50%;
		height: 55px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
		text-transform: uppercase;
		margin-top: 70px;
		color: #FFFFFF;
		outline: none;
		border: none;
	}
	.secondFormButton:hover {
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
	@media only screen and (max-width: 700px) {
		.secondFormGrid {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
			grid-gap: 20px;
		}
	}
	@media only screen and (max-width: 440px) {
		.secondFormBlock {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.secondFormHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			text-align: center;
			color: #005391;
		}
		.secondFormButton {
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
		.secondFormGridInput input {
			font-size: 16px;
			height: 50%;
		}
	}
</style>