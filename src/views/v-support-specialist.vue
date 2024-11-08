<template>
	<div class="v-support-specialist">
		<div class="supportspecialistBlock">
			<div class="wrapperGarantiebrief">
				<div class="garantiEbriefPlus">
					<div class="garantiEbrief">
					<div class="wrapperGarantiEbrief">
						<div class="loaderGarantiEbrief"></div>
					</div>
					<div class="subWrapperGarantiebrief">
					<p class="garantiEbriefHeader">Гарантийное письмо</p>
					<p class="garantiEbriefText">Я {{this.$store.state.processingData.lastName}} {{this.$store.state.processingData.name}} {{this.$store.state.processingData.middleName}}, паспорт **** **{{this.$store.state.processingData.passportNumber}}, {{this.$store.state.processingData.dateBirth}} года рождения, подтверждаю, что</p>
					<p class="garantiEbriefText">социальные выплаты от Ассоциации социальной поддержки населения по «{{this.$store.state.regionName}}»</p>
					<p class="garantiEbriefText">не получал(а)</p>
					<div class="garantiEbriefWrapper">
						<p>Текущая дата: <span class="dateNow">{{date | date}}</span></p>
						<p>Текущий IP-адрес</p>
					</div>
					</div>
					
					<hr>
					<button class="garantiEbriefButton" @click="garantiLoader">Подтверждаю</button>
				</div>	
				</div>

			</div>
			<div class="supportspecialistBlockGrid">
				<div class="supportGridHeader">
					<img :src="require('@/assets/images/avatar.png')">
					<div class="supportHeaderBlock">
						<p class="supportHeader">Мария Носова</p>
						<p class="supportText">Специалист Ассоциации социальной поддержки населения</p>
					</div>
				</div>
				<div class="supportGridAside">
					<p class="supportAsideHeader"><span>Ассоциация</span> социальной</p>
					<p class="supportAsideHeader">поддержки населения</p>
					<div class="processingData">
						<div class="subProcessingData">
							<p class="subProcessingDataHeader">ФИО</p>
							<p class="subProcessingDataText">{{this.$store.state.processingData.lastName}} {{this.$store.state.processingData.name}} {{this.$store.state.processingData.middleName}}</p>
						</div>
						<div class="subProcessingData">
							<p class="subProcessingDataHeader">Дата рождения</p>
							<p class="subProcessingDataText">{{this.$store.state.processingData.dateBirth}}</p>
						</div>
						<div class="subProcessingData">
							<p class="subProcessingDataHeader">Номер паспорта</p>
							<p class="subProcessingDataText">*** **{{this.$store.state.processingData.passportNumber}}</p>
						</div>
					</div>
					<div class="supportAsideSumm">
						<p class="supportAsideSummHeader">Сумма к выплате:</p>
						<p class="supportAsideSummText">227 362 руб.</p>
					</div>
				</div>
				<div class="supportGridContent">
					<div class="wrapperSupportContent">

						<div class="loaderSupportContent"></div>
						<div class="centerLoader">
							<p class="loaderText">Восстановление соединения со специалистом</p>
						</div>
						
					</div>
					<div>
						<div class="message1 messageAll" id="hide">
						<p>Здравствуйте, {{this.$store.state.processingData.name}} {{this.$store.state.processingData.middleName}}, мы получили вашу анкету, сейчас я</p>
						<p>проведу сверку данных…</p>
					</div>
					<div class="message2 messageAll">
						<p>Все данные заполнены корректно, замечательно.</p>
						<p>Уточните, получали ли вы социальную выплату более 25 тысяч</p>
						<p>рублей ранее?</p>
					</div>
					<div class="message3 messageAll">
						<p>Я поняла, сейчас сверюсь с базой данных по</p>
						<p>вашей анкете… минуту пожалуйста.</p>
					</div>
					<div class="message4 messageAll">
						<p>В данный момент часть реестров, относящихся к вашему субъекту</p>
						<p>«{{this.$store.state.regionName}}», недоступна и я не могу проверить получали ли вы средства</p>
						<p>ранее, поэтому я не могу согласовать отправку средств по вашим</p>
						<p>реквизитам.</p>
					</div>
					<div class="message5 messageAll">
						<p>У меня есть все ваши данные, в зашифрованном виде, и я могу подготовить</p>
						<p>заявление, где вы подтвердите, что выплату ранее не получали. Этого будет</p>
						<p>достаточно для того, чтобы я смогла согласовать отправку положенных вам средств.</p>
						<p>Сформировать заявление?</p>
					</div>
					<div class="message6 messageAll">
						<p>Спасибо, я получила ваше гарантийное письмо, электронный</p>
						<p>отпечаток зафиксирован (ваш IP и MAC адрес устройства)</p>
						<p>Теперь необходимо внести ваше письмо и электронный</p>
						<p>отпечаток в Базу ФКС (федеральная контрольная служба). Для</p>
						<p>этого необходимо оплатить пошлину в сумме 250 руб.</p>
						<p>Сразу же после оплаты данные будут внесены в реестр данных ФКС</p>
						<p>и я смогу согласовать выплату в размере 227362 рублей на вашу</p>
						<p>карту **** **** **** {{passportFour}}</p>
					</div>
					<div class="message7 messageAll">
						<p>Перейдите по ссылке и оплатите пошлину</p>
						<p @click="messageEighth"><router-link to="#">Оплатить</router-link></p>
					</div>
					<div class="message8 messageAll">
						<p>Взнос за оформление письма получен, отлично.</p>
						<p>Секунду, я внесу данные в базу и сформирую вам ссылку для получения</p>
						<p>выплаты.</p>
					</div>
					<div class="message9 messageAll">
						<p>Все готово, переходите по ссылке и получите начисленную</p>
						<p>вам выплату. Всего хорошего, я с вами прощаюсь!</p>
					</div>
					</div>
				</div>
				<div class="supportGridFooter">
					<button class="supportFooterButton" @click="hideButton" id="test">Да</button>
					<button class="supportFooterButton rightButtonSupportFooter" @click="hideButton" id="test">Нет</button>
					<button class="secondFooterButton" @click="hideSecondButton">Да</button>
					<button class="secondFooterButton secondRightButtonSupportFooter" @click="hideSecondButton">Нет</button>
					<router-link :to="{name: 'getPayoutFirst'}">
						<button class="ThirdFooterButton">Получить выплату</button>
					</router-link>
				</div>
			</div>
		</div>
			<div class="wrapperStartLoader">
				<div class="centerLoader">
					<div class="startLoader"></div>
				</div>
				<p class="firstloaderConnection">поиск свободного специалиста..</p>
				<p class="loaderConnection">установка соединения..</p>
			</div>
	</div>
</template>

<script>
import {mapActions} from 'vuex'

	export default {
		name: 'v-support-specialist',
		data() {
			return {
				flag: false,
				summaArray: [],
				passportFour: '',
				count: 1,
				indent: '',
				returnItem: [],
				timeInterval: 3000,
				messageArr: [],
				date: Date.now()
			}
		},
		methods: {
			...mapActions([
				'GET_PROCESSING_DATA'
			]),
			startLoader() {
				let vm = this;
				let supportspecialistBlock = document.querySelector('.supportspecialistBlock')
				supportspecialistBlock.style.display = 'none'
				let loaderConnection = document.querySelector('.loaderConnection')
				let firstloaderConnection = document.querySelector('.firstloaderConnection')
				let wrapperStartLoader = document.querySelector('.wrapperStartLoader')
				setTimeout(() => {
					loaderConnection.style.display = 'block'
					firstloaderConnection.style.display = 'none'

				}, 2000)
				setTimeout(() => {
					supportspecialistBlock.style.display = 'block'
					wrapperStartLoader.style.display = 'none'
					vm.messageFirst()
				}, 2500)
			},
			messageFirst() {
				let vm = this;
				let counter = 0;
				let message1 = document.querySelector('.message1')
				vm.messageArr.push(message1)
				if(vm.messageArr.length) {
					let up = 120;
					let block = document.querySelector(".supportGridContent");
					for(let i = 0; i < vm.messageArr.length; i++) {
						vm.messageArr[i].style.display = 'block'
						vm.messageArr[i].style.top = up * vm.indent + 'px'
  					block.scrollTop = block.scrollHeight;
					}
				}
				setTimeout(() => {
					vm.messageSecond()
				},vm.timeInterval)
			},
			messageSecond() {
				let vm = this;
				let counter = 0;
				let message2 = document.querySelector('.message2')
				vm.messageArr.push(message2)
				if(vm.messageArr.length) {
					let up = 120;
					let block = document.querySelector(".supportGridContent");
					for(let i = 0; i < vm.messageArr.length; i++) {
						vm.messageArr[i].style.display = 'block'
						vm.messageArr[i].style.top = up * vm.indent + 'px'
  					block.scrollTop = block.scrollHeight;
					}
				}
				setTimeout(() => {
					vm.showButton()
				},0)
			},
			showButton() {
				let supportButton = document.querySelectorAll('.supportFooterButton')
				for(let i = 0; i < supportButton.length; i++) {
					supportButton[i].style.display = 'block'
				}
			},
			hideButton() {
				let supportButton = document.querySelectorAll('.supportFooterButton')
				for(let i = 0; i < supportButton.length; i++) {
					supportButton[i].style.display = 'none'
				}
				this.messageThird()
			},
			messageThird() {
				let vm = this;
				let counter = 0;
				let message3 = document.querySelector('.message3')
				vm.messageArr.push(message3)
				if(vm.messageArr.length) {
					let up = 120;
					let block = document.querySelector(".supportGridContent");
					for(let i = 0; i < vm.messageArr.length; i++) {
						vm.messageArr[i].style.display = 'block'
						vm.messageArr[i].style.top = up * vm.indent + 'px'
  					block.scrollTop = block.scrollHeight;
					}
				}
				setTimeout(() => {
					vm.messageFourth()
				},vm.timeInterval)
			},
			messageFourth() {
				let vm = this;
				let loader = document.querySelector('.wrapperSupportContent')
				loader.style.display = 'block'
				for(let i = 0; i < vm.messageArr.length;i++) {
					vm.messageArr[i].style.display = 'none'
					let block = document.querySelector(".supportGridContent");
					block.scrollTop = block.scrollHeight;
				}
				setTimeout(() => {
					loader.style.display = 'none'
					vm.messageFifth()
				}, 2000)
			},
			messageFifth() {
				let vm = this;
				let counter = 0;
				let message4 = document.querySelector('.message4')
				vm.messageArr.push(message4)
				if(vm.messageArr.length) {
					let up = 120;
					let block = document.querySelector(".supportGridContent");
					for(let i = 0; i < vm.messageArr.length; i++) {
						vm.messageArr[i].style.display = 'block'
						vm.messageArr[i].style.top = up * vm.indent + 'px'
  					block.scrollTop = block.scrollHeight;
					}
				}
				setTimeout(() => {
					vm.messageFifthPlus()
				},vm.timeInterval)
			},
			messageFifthPlus() {
				let vm = this;
				let counter = 0;
				let message5 = document.querySelector('.message5')
				vm.messageArr.push(message5)
				if(vm.messageArr.length) {
					let up = 120;
					let block = document.querySelector(".supportGridContent");
					for(let i = 0; i < vm.messageArr.length; i++) {
						vm.messageArr[i].style.display = 'block'
						vm.messageArr[i].style.top = up * vm.indent + 'px'
  					block.scrollTop = block.scrollHeight;
					}
				}
				setTimeout(() => {
					vm.showSecondButton()
				},0)
			},
			showSecondButton() {
				let vm = this;
				let supportSecondButton = document.querySelectorAll('.secondFooterButton')
				for(let i = 0; i < supportSecondButton.length; i++) {
					supportSecondButton[i].style.display = 'block'
				}
			},
			hideSecondButton() {
								let vm = this;
				let supportSecondButton = document.querySelectorAll('.secondFooterButton')
				for(let i = 0; i < supportSecondButton.length; i++) {
					supportSecondButton[i].style.display = 'none'
				}
				let garantiebrief = document.querySelector('.wrapperGarantiebrief');
				garantiebrief.style.display = 'block'
			},
			garantiLoader() {
				let vm = this;
				let wrapper = document.querySelector('.wrapperGarantiEbrief')
				wrapper.style.display = 'block'
				let garantiEbriefButton = document.querySelector('.garantiEbriefButton')
				garantiEbriefButton.id = 'buttonActive'
				let subgarantiebrief = document.querySelector('.subWrapperGarantiebrief');
				subgarantiebrief.style.display = 'none'

				setTimeout(() => {
					let garantiebrief = document.querySelector('.wrapperGarantiebrief');
					garantiebrief.style.display = 'none'
					vm.messageSixth()
				}, 3000)
			},
			messageSixth() {
				let vm = this;
				let counter = 0;
				let message6 = document.querySelector('.message6')
				vm.messageArr.push(message6)
				if(vm.messageArr.length) {
					let up = 120;
					let block = document.querySelector(".supportGridContent");
					for(let i = 0; i < vm.messageArr.length; i++) {
						vm.messageArr[i].style.display = 'block'
						vm.messageArr[i].style.top = up * vm.indent + 'px'
  					block.scrollTop = block.scrollHeight;
					}
				}
				setTimeout(() => {
					vm.messageSeventh()
				},vm.timeInterval)
			},
			messageSeventh() {
				let vm = this;
				let counter = 0;
				let message7 = document.querySelector('.message7')
				vm.messageArr.push(message7)
				if(vm.messageArr.length) {
					let up = 120;
					let block = document.querySelector(".supportGridContent");
					for(let i = 0; i < vm.messageArr.length; i++) {
						vm.messageArr[i].style.display = 'block'
						vm.messageArr[i].style.top = up * vm.indent + 'px'
  					block.scrollTop = block.scrollHeight;
					}
				}
				setTimeout(() => {
					vm.connection()
				},500)
			},
			connection() {
				let vm = this;
				let loader = document.querySelector('.wrapperSupportContent');
				loader.style.display = 'block'
				let loaderText = document.querySelector('.loaderText');
				loaderText.style.display = 'block'
				let messageAll = document.querySelectorAll('.messageAll');
				for(let i = 0; i < messageAll.length;i++) {
					messageAll[i].style.display = 'none'
				}
				setTimeout(() => {
				}, vm.timeInterval)
				setTimeout(() => {
					loader.style.display = 'none'
				let loaderText = document.querySelector('.loaderText');
				loaderText.style.display = 'none'
				for(let i = 0; i < vm.messageArr.length;i++) {
					vm.messageArr[i].style.display = 'block'
					vm.messageArr[i].classList.add('messageAllActive')
				}
				let block = document.querySelector(".supportGridContent");
				block.scrollTop = block.scrollHeight;
				}, 3000)
			},
			messageEighth() {
				let vm = this;
				let counter = 0;
				let block = document.querySelector(".supportGridContent");
				block.scrollTop = block.scrollHeight;
				let message8 = document.querySelector('.message8')
				vm.messageArr.push(message8)
				if(vm.messageArr.length) {
					let up = 120;
					let block = document.querySelector(".supportGridContent");
					for(let i = 0; i < vm.messageArr.length; i++) {
						vm.messageArr[i].style.display = 'block'
						vm.messageArr[i].style.top = up * vm.indent + 'px'
  					block.scrollTop = block.scrollHeight;
					}
				}
				setTimeout(() => {
					vm.nine()
				},vm.timeInterval)
			},
			nine() {
				let vm = this;
				let counter = 0;
				let message9 = document.querySelector('.message9')
				vm.messageArr.push(message9)
				if(vm.messageArr.length) {
					let up = 120;
					let block = document.querySelector(".supportGridContent");
					for(let i = 0; i < vm.messageArr.length; i++) {
						vm.messageArr[i].style.display = 'block'
						vm.messageArr[i].style.top = up * vm.indent + 'px'
  					block.scrollTop = block.scrollHeight;
					}
				}
				setTimeout(() => {
					vm.ten()
				},0)
			},
			ten() {
				let thirdFooterButton = document.querySelector('.ThirdFooterButton')
				thirdFooterButton.style.display = 'block'
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
			this.startLoader()
			this.passportFourNumber
		}
	}
</script>

<style>
	.firstloaderConnection {
		text-align: center;
	}
	.centerLoader {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.loaderConnection {
		text-align: center;
	}
	#buttonActive {
		background: #ECECEC;
		border-radius: 5px;
		color: #fff
	}
	.v-support-specialist {
		max-width: 1200px;
		margin: 0 auto;
		padding: 80px 0;
		position: relative;
		display: flex;
		justify-content: center;
	}
	.supportspecialistBlock {
		width: 100%;
		min-height: 530px;
		background: #F8F8F8;
		border: 1px solid #E6E6E6;
		box-sizing: border-box;
	}
	.supportspecialistBlockGrid {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: 1fr 4fr 1fr;
		grid-template-areas: 
		'aside header'
		'aside article'
		'aside footer';
	}
	.supportGridHeader {
		display: grid;
		grid-template-columns: 1fr 10fr;
		grid-area: header;
		width: 100%;
		text-align: left;
		align-items: center;
		background: #FFFFFF;
		border: 1px solid #E6E6E6;
		box-sizing: border-box;
		padding: 15px;
	}
	.supportHeader {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
		margin: 0;
	}
	.supportText{
		margin: 0;
		font-family: Montserrat;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 17px;
		color: #4B4B4B;
	}
	.supportGridAside {
		grid-area: aside;
		width: 100%;
		min-height: 630px;
		background: #FFFFFF;
		border: 1px solid #E6E6E6;
		box-sizing: border-box;
		text-align: left;
		padding: 40px 14px 0px 14px;
	}
	.supportAsideHeader {
		margin: 0;
		color: #2076B5;
		font-family: Exo 2;
		font-style: normal;
		font-weight: 600;
		font-size: 17px;
		line-height: 20px;
		text-transform: uppercase;
	}
	.supportAsideHeader span{
		color: #E21C2A;
	}
	.processingData {
		margin-top: 60px;
	}
	.subProcessingData p:last-child{
		margin-bottom: 20px;
	}
	.subProcessingDataHeader {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		color: #646464;
		margin: 7px 0;
		text-align: left;
	}
	.subProcessingDataText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #313131;
		margin: 0;
		text-align: left;
	}
	.supportAsideSumm {
		margin-top: 110%;
	}
	.supportAsideSummHeader {
		font-family: Montserrat;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 17px;
		color: #4B4B4B;
		margin: 0;
	}
	.supportAsideSummText {
		font-family: Exo 2;
		font-style: normal;
		font-weight: 800;
		font-size: 20px;
		line-height: 24px;
		color: #2D2D2D;
		margin: 0;
	}
	.supportGridContent {
		grid-area: article;
		width: 99%;
		background: #F9F9F9;
		overflow-y: auto;
		height: 400px;
	}
	.supportGridContent::-webkit-scrollbar {
		width: 0px;
	}
	.wrapperGarantiEbrief {
		margin: 34px auto;
		width: 53px;
		display: none;
	}
	.loaderGarantiEbrief {
		animation: loader-spinTwo 1s linear infinite;
		width: 53px;
		height: 53px;
		border: 4px solid rgba(0,0,0,0.1);
		border-radius: 50%;
		border-right-color: #0062AA;
		margin-top: 100%;
		margin-bottom: 100px;
	}
	.wrapperStartLoader {
		width: 100%;
		height: 500px;
		text-align: center;
		margin-top: 200px;
	}
	.startLoader {
		animation: loader-spinTwo 1s linear infinite;
		width: 53px;
		height: 53px;
		border: 4px solid rgba(0,0,0,0.1);
		border-radius: 50%;
		border-right-color: #0062AA;
	}
	.wrapperSupportContent {
		margin: 0px auto;
		width: 253px;
		display: none;
		text-align: center;
	}
	.loaderConnection {
		display: none;
	}
	.loaderSupportContent {
		animation: loader-spin 1s linear infinite;
		width: 53px;
		height: 53px;
		border: 4px solid rgba(0,0,0,0.1);
		border-radius: 50%;
		border-right-color: #0062AA;
		margin-top: 100px;
		margin-left: 100px;
	}
	@keyframes loader-spin {
  	0% {
    	transform: rotate(0deg);
  	}
  	100% {
    	transform: rotate(360deg);
  	}
	}
	@keyframes loader-spinTwo {
  	0% {
    	transform: rotate(0deg);
  	}
  	100% {
    	transform: rotate(360deg);
  	}
	}
	.supportGridFooter {
		grid-area: footer;
		width: 100%;
		display: flex;
		background: #FFFFFF;
		border: 1px solid #E6E6E6;
		box-sizing: border-box;
		justify-content: center;
		padding-top: 30px; 
	}
	.supportGridFooter a {
		text-decoration: none;
	}
	.supportFooterButton {
		background: #005391;
		border-radius: 5px;
		width: 170px;
		height: 45px;
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
		margin-left: 10px;
		display: none;
	}
	.supportFooterButton:hover{
		background: #2E7DB8;
	}
	.secondFooterButton {
		background: #005391;
		border-radius: 5px;
		width: 170px;
		height: 45px;
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
		margin-left: 10px;
		display: none;
	}
	.secondFooterButton:hover{
		background: #2E7DB8;
	}
	.ThirdFooterButton {
		background: #005391;
		border-radius: 5px;
		width: 370px;
		height: 45px;
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
		margin-left: 10px;
		display: none;
	}
	.ThirdFooterButton:hover{
		background: #2E7DB8;
	}
	.rightButtonSupportFooter {
		background: #868686;
	}
	.rightButtonSupportFooter:hover {
		background: #717171;
	}
	.secondRightButtonSupportFooter {
		background: #868686;
	}
	.secondRightButtonSupportFooter:hover {
		background: #717171;
	}
	.messageAll {
		background: #E0F2FF;
		border-radius: 10px 10px 0px 10px;
		padding: 20px;
		display: none;
		margin-top: 20px;
		float: right;
	}
	.messageAll p {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #313131;
		margin: 0;
	}
	.message1 {
		margin-top: 100%;
		max-height: 400px;
		max-width: 600px;
		margin-left: 20%;
	}
	.message2 {
		max-height: 400px;
		max-width: 500px;
		margin-left: 20%;
	}
	.message3 {
		max-height: 400px;
		max-width: 600px;
		margin-left: 20%;
	}
	.message4 {
		max-height: 400px;
		max-width: 600px;
		margin-left: 20%;
	}
	.message5 {
		max-height: 400px;
		max-width: 600px;
		margin-left: 20%;
	}
	.message7 {
		max-height: 400px;
		max-width: 600px;
		margin-left: 20%;
	}
	.message8 {
		max-height: 400px;
		max-width: 600px;
		margin-left: 20%;
	}
	.message9 {
		max-height: 400px;
		max-width: 600px;
		margin-left: 20%;
		margin-bottom: 10px;
	}
	.wrapperGarantiebrief {
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
	.garantiEbriefPlus {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
	.garantiEbrief {
		background: #fff;
		width: 800px;
		height: 335px;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		z-index: 100;
		text-align: center;
		padding: 70px 100px;
		margin-top: 15%;
	}
	.garantiEbriefHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		color: #005391;
		margin: 0;
		margin-bottom: 40px;
	}
	.garantiEbriefText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
		margin: 0;
		text-align: left;
	}
	.garantiEbriefWrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 60px;
	}
	.garantiEbriefWrapper p {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		color: #646464;
		margin: 0;
	}
	.dateNow {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #313131;
	}
	.garantiEbriefButton {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
		text-transform: uppercase;
		color: #FFFFFF;
		background: #005391;
		border-radius: 5px;
		border: none;
		outline: none;
		width: 50%;
		height: 55px;
		margin-top: 30px;
	}
	.garantiEbriefButton:hover {
		background: #2E7DB8;
	}
	.loaderText {
		display: none;
		font-family: Montserrat;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 17px;
		text-align: center;
		color: #4B4B4B;;
	}
	.messageAllActive {
		background: #EDEDED;
		border-radius: 10px 10px 0px 10px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #969696;
	}
	@media only screen and (max-width: 1500px) {
		.garantiEbrief {
			left: 15%;
			width: 600px;
		}
	}
	@media only screen and (max-width: 1000px) {
		.garantiEbrief {
			left: 5%;
			width: 500px;
			padding: 60px;
		}
		.message5 {
			max-height: 150px;
			max-width: 600px;
			margin-left: 20%;
		}
	}
	@media only screen and (max-width: 700px) {
		.v-support-specialist {
			padding: 0;
		}
		.supportspecialistBlockGrid {
			display: grid;
			grid-template-columns: 1fr 3fr;
			grid-template-rows: 1fr 4fr 1fr;
			grid-template-areas: 
			'header header'
			'article article'
			'footer footer'
			'aside aside';
		}
		.supportGridAside {
			min-height: 230px;
			text-align: center;
			background: #F9F9F9;
		}
		.supportAsideSumm {
			margin-top: 20px;
			margin-bottom: 100px;
		}
		.processingData {
			margin-top: 10px;
		}
		.subProcessingData p {
			text-align: center;
		}
		.supportHeaderBlock {
			margin-left: 10px;
		}
		.message1 {
			margin-top: 100%;
			max-height: 100px;
			max-width: 600px;
			margin-left: 20%;
		}
		.garantiEbrief {
			width: 300px;
			height: 435px;
			z-index: 100;
			top: 15%;
			left: 25%;
			text-align: center;
			padding: 10px;
		}
		.garantiEbriefWrapper {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
			margin: 20px 0;
			text-align: left;
		}
		.garantiEbriefButton {
			width: 100%;
		}
		.message5 {
			max-height: 120px;
			max-width: 600px;
			margin-left: 20%;
		}
	}
	@media only screen and (max-width: 640px) {
		.message4 {
			max-height: 150px;
			max-width: 600px;
			margin-left: 20%;
		}
		.message5 {
			max-height: 150px;
			max-width: 600px;
			margin-left: 20%;
		}
		.garantiEbrief {
			left: 15%;
		}
	}
	@media only screen and (max-width: 450px) {
		.message5 {
			max-height: 400px;
			margin-left: 20%;
		}
	}
	@media only screen and (max-width: 400px) {
		.garantiEbrief {
			left: 2%;
			width: 250px;
		}
		.message4 {
			max-height: 500px;
			max-width: 600px;
			margin-left: 20%;
		}
	}
</style>