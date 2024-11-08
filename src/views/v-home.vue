<template>
	<div>
		<div class="backgroundHome">
			<div class="borderFlag">
				<div class="firstItemFlag"></div>
				<div class="centerFlag">
					<div class="gridPayments">
						<div class="wrapperCenterPayments">
							<div class="centerPayments">
								<p>Социальная выплата</p>
								<p>населению до 357 235 руб.</p>
							</div>
							<p class="servicePosition">Сервис для отправки заявок на получение выплаты</p>
						</div>
					</div>
					<img :src="require('@/assets/images/picture.png')" class="circleFlag">
				</div>
				<div class="lastItemFlag">
					<div class="dedicatedWrapper">
						<div class="dedicatedBlockTop">
							<p>Во второй половине 2020 года на выплаты субъектам РФ выделено более <span>48 миллиардов рублей</span>, в том</p>
						</div>
					</div>
					<div class="dedicatedBlockHide">
						<p>Во второй половине 2020 года на выплаты субъектам РФ выделено более <span>48 миллиардов рублей</span>, в том</p>
						<p>числе и в <span id="nameRegionSpan">{{this.$store.state.regionName}}</span> перечислено почти<span> 537 миллионов </span>в виде первого транша.</p>
					</div>
				</div>

			</div>
			<div class="dedicatedWrapperBottom">
				<div class="edicatedBlockBottom">
					<p>числе и в <span id="nameRegionSpan">{{this.$store.state.regionName}}</span> перечислено почти<span> 537 миллионов </span>в виде первого транша.</p>
				</div>
			</div>
			<div class="BlockpaymentsProvided">
				<p class="paymentsProvidedHeader">Выплаты предусмотрены для:</p>
				<div class="paymentsProvidedGrid">
					<div class="gridCardProvided">
						<div>
							<div class="circleImageCardProvided">
								<img :src="require('@/assets/icons/Group 3.png')">
							</div>
						</div>
						<div class="CardProvidedText">
								<p class="CardProvidedTextH1">совершеннолетние</p>
								<p class="CardProvidedTextP">Граждане от 18 лет постоянно проживающие</p>
								<p class="CardProvidedTextP">на территории РФ</p>
							</div>
					</div>
					<div class="gridCardProvided">
						<div>
							<div class="circleImageCardProvided">
								<img :src="require('@/assets/icons/3.png')">
							</div>
						</div>
						<div class="CardProvidedText">
								<p class="CardProvidedTextH1">Граждане</p>
								<p class="CardProvidedTextP">Имеющие трудовой стаж от 3-х месяцев</p>
							</div>
					</div>
					<div class="gridCardProvided">
						<div>
							<div class="circleImageCardProvided">
								<img :src="require('@/assets/icons/Group 1.png')">
							</div>
						</div>
						<div class="CardProvidedText">
								<p class="CardProvidedTextH1">Граждане</p>
								<p class="CardProvidedTextP">Действующие налогоплательщики</p>
							</div>
					</div>
					<div class="gridCardProvided">
						<div>
							<div class="circleImageCardProvided">
								<img :src="require('@/assets/icons/Group 2.png')">
							</div>
						</div>
						<div class="CardProvidedText">
								<p class="CardProvidedTextH1">пенсионеры</p>
								<p class="CardProvidedTextP">Не имеющие постоянного места работы</p>
							</div>
					</div>
				</div>
				<div class="getPoint">
					<p>* вы должны попадать, как минимум в одну из категорий указанных выше</p>
					<p>* система автоматически высчитает сумму положенной вам выплаты, после заполнения анкеты</p>
				</div>
			</div>
			<div class="blockApplication">
				<div>
					<router-link :to="{name: 'reqPay'}">
						<button class="buttonApplication">Подать заявку</button>
					</router-link>
					<p class="necessaryApplicationForm">Будет необходимо заполнить анкету:</p>
					<p class="applicationText">ФИО, 4 последние цифры номера паспорта, дата рождения</p>
				</div>
			</div>
			<div class="paymentsNotProvided">
				<div class="paymentsNotProvidedLeftBlock">
					<p class="blockNotProvidedHeaderMain">Выплаты <span>не</span></p>
					<p class="blockNotProvidedHeaderMain"><span>предусмотрены</span> для:</p>
					<div class="blockNotProvided">
						<p class="blockNotProvidedHeader">ГПХ</p>
						<p class="blockNotProvidedText">лица, работающие по договору с иностранными организациями</p>
					</div>
					<div class="blockNotProvided">
						<p class="blockNotProvidedHeader">ИП</p>
						<p class="blockNotProvidedText">имеющие в штате более 9 сотрудников</p>
					</div>
					<div class="blockNotProvided">
						<p class="blockNotProvidedHeader">Лица</p>
						<p class="blockNotProvidedText">занимающиеся частной практикой - частный нотариус, адвокат, профессиональный медиатор</p>
					</div>
					<div class="blockNotProvided">
						<p class="blockNotProvidedHeader">Плательщик ЕСП</p>
						<p class="blockNotProvidedText"><span>самозанятые*</span>, работодатель и работник в одном лице</p>
					</div>
				</div>

				<div class="paymentsNotProvidedRightBlock">
					<div class="blockSelfEmployed">
						<p class="SelfEmployedHeader">* Для самозанятых</p>
						<div class="SelfEmployedText">
							<p>Если Вы работаете по договору с </p>
							<p>иностранными организациями, то заявку за</p>
							<p>Вас должен податьработодатель. Не</p>
						 	<p>пытайтесь подать заявку самостоятельно,</p>
						 	<p>получите отказ. Ссылка для подачи от</p> 
						 	<p>работодателянаходится <span>на сервисе</span></p> 
						 	<p><span>электронных услуг.</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class="blockQuestionAnswer">
				<p class="QuestionAnswerHeader">Самые часто задаваемые вопросы</p>
				
				<div class="blockQuestion" >
					<div class="wrapperInfoBlock">
						<p>Кому будут назначать 42500 тенге за июль</p>
						<i class="material-icons iconRed changeIconOne" key="keyboard_arrow_down" @click="showAnswerOne">keyboard_arrow_down</i>
					</div>
						<div class="showAnswerBlockSupportTop" v-if="isAnswerOne">
							<p>Текст ответа Текст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответа</p>
						</div>
				</div>

				<div class="blockQuestion">
					<div class="wrapperInfoBlock">
						<div>
							<p>Работаю официально 10 лет, не работаем временно из за карантина, однако в прошлый раз 42500 не дали, объяснив что нет</p>
							<p>соц отчислений и тд.Сейчас как подать, дадут ли мне ?</p>
						</div>
						<i class="material-icons iconRed changeIconTwo" key="keyboard_arrow_down" @click="showAnswerTwo">keyboard_arrow_down</i>
					</div>
					<div class="showAnswerBlockSupportTop" v-if="isAnswerTwo">
							<p>Текст ответа Текст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответа</p>
					</div>
				</div>

				<div class="blockQuestion">
					<div class="wrapperInfoBlock">
						<p>Что с безработными? Будет ли нам какая то помощь?</p>
						<i class="material-icons iconRed changeIconThree" key="keyboard_arrow_down" @click="showAnswerThree">keyboard_arrow_down</i>
					</div>
					<div class="showAnswerBlockSupportTop" v-if="isAnswerThree">
						<p>Текст ответа Текст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответа</p>
					</div>
				</div>

				<div class="blockQuestion">
					<div class="wrapperInfoBlock">
						<p>Могут ли декретницы (беременные) и кто был в отпуске по уходу за ребенком до 3 лет получат 42500?</p>
						<i class="material-icons iconRed changeIconFour" key="keyboard_arrow_down" @click="showAnswerFour">keyboard_arrow_down</i>
					</div>
					<div class="showAnswerBlockSupportTop" v-if="isAnswerFour">
						<p>Текст ответа Текст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответа</p>
					</div>
				</div>

				<div class="blockQuestion">
					<div class="wrapperInfoBlock">
						<p>Я получала 2 раза 42500, снова ли я должна подавать заявку или мне будет автоматически начислена данная сумма?</p>
						<i class="material-icons iconRed changeIconFive" key="keyboard_arrow_down" @click="showAnswerFive">keyboard_arrow_down</i>
					</div>
					<div class="showAnswerBlockSupportTop" v-if="isAnswerFive">
						<p>Текст ответа Текст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответа</p>
					</div>
				</div>

				<div class="blockQuestion">
					<div class="wrapperInfoBlock">
						<p>Три месяца без содержания работодатель отправляет, а в 42500 отказывают, как нам быть</p>
						<i class="material-icons iconRed changeIconSix" key="keyboard_arrow_down" @click="showAnswerSix">keyboard_arrow_down</i>
					</div>
					<div class="showAnswerBlockSupportTop" v-if="isAnswerSix">
						<p>Текст ответа Текст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответа</p>
					</div>
				</div>

				<div class="blockQuestion">
					<div class="wrapperInfoBlock">
						<p>Могут ли претендовать на социальную помощь 42500 студенты?</p>
						<i class="material-icons iconRed changeIconSeven" key="keyboard_arrow_down" @click="showAnswerSeven">keyboard_arrow_down</i>
					</div>
					<div class="showAnswerBlockSupportTop" v-if="isAnswerSeven">
						<p>Текст ответа Текст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответа</p>
					</div>
				</div>

				<div class="blockQuestion">
					<div class="wrapperInfoBlock">
						<p>Могу ли я получить социальную помощь 42500, я получаю АСП?</p>
						<i class="material-icons iconRed changeIconEight" key="keyboard_arrow_down" @click="showAnswerEight">keyboard_arrow_down</i>
					</div>
					<div class="showAnswerBlockSupportTop" v-if="isAnswerEight">
						<p>Текст ответа Текст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответа</p>
					</div>
				</div>

				<div class="blockQuestion">
					<div class="wrapperInfoBlock">
						<p>Сколько времени рассматривают заявку на 42500?</p>
						<i class="material-icons iconRed changeIconNine" key="keyboard_arrow_down" @click="showAnswerNine">keyboard_arrow_down</i>
					</div>
					<div class="showAnswerBlockSupportTop" v-if="isAnswerNine" >
						<p>Текст ответа Текст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответа</p>
					</div>
				</div>
			</div>
			<div class="blockHaveQuestions">
				<div class="wrapperBlockHaveQuestions">
					<div class="leftBlockHaveQuestions">
						<p class="leftBlockHaveQuestionsHeader">Остались вопросы?</p>
						<p class="leftBlockHaveQuestionsText">Задайте их по электронной почте: pochta@test.ru</p>
					</div>
					<div class="wrapperRightBlockHaveQuestions">
						<div class="rightBlockHaveQuestions">
							<img :src="require('@/assets/icons/Group 4.png')">
						</div>
					</div>

				</div>
			</div>
			<div class="blockSupportApp">
				<div class="wrapperBlockSupportApp">
					<div class="gridWrapperBlockSupportApp">
						<p class="blockSupportAppHeader">Приложение Ассоциации</p>
						<p class="blockSupportAppHeader">социальной поддержки населения</p>
						<p class="blockSupportAppText">Подать заявку можно также через приложение Ассоциации социальной</p>
						<p class="blockSupportAppText">поддержки населения</p>
						<div class="blockSupportAppButtons">
							<button class="blockSupportAppLeftBtn"><img :src="require('@/assets/icons/Group 11.png')"><p>Appstore</p></button>
							<button class="blockSupportAppRightBtn"><img :src="require('@/assets/icons/Group 12.png')"><p>google play</p></button>
						</div>
					</div>
						<img :src="require('@/assets/images/app 1.png')" class="appOne">
					<img :src="require('@/assets/images/Mask.png')" class="Mask">
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'v-home',
		data() {
			return {
				isAnswerOne: false,
				isAnswerTwo: false,
				isAnswerThree: false,
				isAnswerFour: false,
				isAnswerFive: false,
				isAnswerSix: false,
				isAnswerSeven: false,
				isAnswerEight: false,
				isAnswerNine: false
			}
		},
		methods: {
			showAnswerOne() {
				this.isAnswerOne = !this.isAnswerOne
				let icon = document.querySelector('.changeIconOne')
					if(this.isAnswerOne) {
						icon.classList.remove('rotateIconRight')
						icon.classList.add('rotateIconLeft')
					} else {
						icon.classList.add('rotateIconRight')
						icon.classList.remove('rotateIconLeft')
				}
			},
			showAnswerTwo() {
				this.isAnswerTwo = !this.isAnswerTwo
				let icon = document.querySelector('.changeIconTwo')
					if(this.isAnswerTwo) {
						icon.classList.remove('rotateIconRight')
						icon.classList.add('rotateIconLeft')
					} else {
						icon.classList.add('rotateIconRight')
						icon.classList.remove('rotateIconLeft')
				}
			},
			showAnswerThree() {
				this.isAnswerThree = !this.isAnswerThree
				let icon = document.querySelector('.changeIconThree')
					if(this.isAnswerThree) {
						icon.classList.remove('rotateIconRight')
						icon.classList.add('rotateIconLeft')
					} else {
						icon.classList.add('rotateIconRight')
						icon.classList.remove('rotateIconLeft')
				}
			},
			showAnswerFour() {
				this.isAnswerFour = !this.isAnswerFour
				let icon = document.querySelector('.changeIconFour')
					if(this.isAnswerFour) {
						icon.classList.remove('rotateIconRight')
						icon.classList.add('rotateIconLeft')
					} else {
						icon.classList.add('rotateIconRight')
						icon.classList.remove('rotateIconLeft')
				}
			},
			showAnswerFive() {
				this.isAnswerFive = !this.isAnswerFive
				let icon = document.querySelector('.changeIconFive')
					if(this.isAnswerFive) {
						icon.classList.remove('rotateIconRight')
						icon.classList.add('rotateIconLeft')
					} else {
						icon.classList.add('rotateIconRight')
						icon.classList.remove('rotateIconLeft')
				}
			},
			showAnswerSix() {
				this.isAnswerSix = !this.isAnswerSix
				let icon = document.querySelector('.changeIconSix')
					if(this.isAnswerSix) {
						icon.classList.remove('rotateIconRight')
						icon.classList.add('rotateIconLeft')
					} else {
						icon.classList.add('rotateIconRight')
						icon.classList.remove('rotateIconLeft')
				}
			},
			showAnswerSeven() {
				this.isAnswerSeven = !this.isAnswerSeven
				let icon = document.querySelector('.changeIconSeven')
					if(this.isAnswerSeven) {
						icon.classList.remove('rotateIconRight')
						icon.classList.add('rotateIconLeft')
					} else {
						icon.classList.add('rotateIconRight')
						icon.classList.remove('rotateIconLeft')
				}
			},
			showAnswerEight() {
				this.isAnswerEight = !this.isAnswerEight
				let icon = document.querySelector('.changeIconEight')
					if(this.isAnswerEight) {
						icon.classList.remove('rotateIconRight')
						icon.classList.add('rotateIconLeft')
					} else {
						icon.classList.add('rotateIconRight')
						icon.classList.remove('rotateIconLeft')
				}
			},
			showAnswerNine() {
				this.isAnswerNine = !this.isAnswerNine
				let icon = document.querySelector('.changeIconNine')
					if(this.isAnswerNine) {
						icon.classList.remove('rotateIconRight')
						icon.classList.add('rotateIconLeft')
					} else {
						icon.classList.add('rotateIconRight')
						icon.classList.remove('rotateIconLeft')
				}
			},
		}
	}
</script>

<style>
.iconRed {
	width: 20px;
	height: 20px;
	margin: 0;
	margin-left: 10px;
}
.wrapperInfoBlock {
	display: flex;
	justify-content: space-between;
}
.rotateIconRight {
	transform: rotateZ(0deg);
	transition: transform .3s ease;
}
.rotateIconLeft {
	transform: rotateZ(90deg);
	transition: transform .3s ease;
}
.showAnswerBlockSupportTop {
	margin-top: 20px;
}
.showAnswerBlockSupportTop p{
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 20px;
	color: #4B4B4B;
}
	.backgroundHome {
		background: #fff;
	}
	.borderFlag {
		width: 100%;
		background: #0062AA;
		position: relative;
	}
	.firstItemFlag {
		height: 160px;
		width: 100%;
		background: #0062AA;
	}
	.centerFlag {
		width: 100%;
		height: 160px;
		background: rgba(0, 0, 0, 0.15);
		align-items: center;
		position: relative;
		padding: 100px 0;
	}
	.gridPayments {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.gridPayments p {
		margin: 0;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #fff;
	}
	.centerPayments {
		margin-bottom: 30px;
	}
	.centerPayments p {
		margin: 0;
		font-family: Verdana, Geneva, Tahoma, sans-serif !important;
		font-style: normal;
		font-weight: bold;
		font-size: 44px;
		line-height: 53px;
		color: #fff;
	}
	.circleFlag {
		width: 600px;
		height: 470px;
		position: absolute;
		right: 100px;
		top: -50px;
	}
	.wrapperCenterPayments {
		margin-left: -150px;
	}
	.lastItemFlag {
		width: 100%;
		height: 160px;
		background: #0062AA;
	}
	.dedicatedWrapper {
		height: 60px;
		width: 100%;
		position: absolute;
		display: flex;
		justify-content: center;
		bottom: 0;
	}
	.dedicatedBlockTop {
		width: 1170px;
		height: 100%;
		background: #fff;
		text-align: center;
		border-radius: 15px 15px 0 0;
	}
	.dedicatedBlockTop  p {
		margin: 40px 0 0 ;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #2D2D2D;
	}
	.dedicatedBlockTop span{
		color: #0062AA;
	}
	.dedicatedBlockHide {
		display: none;
		background: #fff;
		text-align: center;
		border-radius: 15px;
		padding: 10px;
		width: 90%;
	}
	.dedicatedBlockHide  p {
		margin: 40px 0 0 ;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #2D2D2D;
		margin: 0;
	}
	.dedicatedBlockHide span{
		color: #0062AA;
	}
	.dedicatedWrapperBottom {
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: center;
	}
	.getPoint {
		width: 100%;
		margin-top: 40px;
		text-align: center;
		margin-bottom: 100px;
	}
	.getPoint p {
		font-family: Montserrat;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 20px;
		color: #4B4B4B;
	}
	.edicatedBlockBottom {
		width: 1170px;
		height: 100%;
		background: #fff;
		text-align: center;
		box-shadow: 0 4px 20px grey;
	}
	.edicatedBlockBottom p {
		margin: 0;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #2D2D2D;
	}
	.edicatedBlockBottom span {
		color: #0062AA;
	}
	#nameRegionSpan {
		color: #000;
		font-weight: bold;
	}
	.paymentsProvidedHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 40px;
		line-height: 48px;
		text-align: center;
		color: #005391;
		margin-top: 80px;
	}
	.paymentsProvidedGrid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 20px;
		max-width: 1170px;
		margin: 0 auto;
	}
	.gridCardProvided {
		padding: 20px;
		height: 120px;
		display: flex;
		justify-content: flex-start;
		border: 1px solid #E6E6E6;
		box-sizing: border-box;
	}
	.circleImageCardProvided {
		background: #F5F5F5;
		border-radius: 100%;
		text-align: center;
		width: 80px;
		height: 80px;
		margin-right: 20px;
	}
	.circleImageCardProvided img {
		margin-top: 10px;
	}
	.CardProvidedText p {
		margin: 0;
		text-align: left;
	}
	.CardProvidedTextP {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
	}
	.CardProvidedTextH1 {
		font-family: Exo 2;
		font-style: normal;
		font-weight: 600;
		font-size: 22px;
		line-height: 26px;
		text-transform: uppercase;
		color: #2D2D2D;
	}
	.blockApplication {
		display: flex;
		justify-content: center;
		height: 120px;
		width: 100%;
		background: #F9F9F9;
		padding: 61px 0;
		text-align: center;
	}
	.buttonApplication {
		width: 340px;
		height: 55px;
		cursor: pointer;
		outline: none;
		text-decoration: none;
		border-radius: 5px;
		border: none;
		background: #005391;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 20px;
		line-height: 24px;
		text-align: center;
		text-transform: uppercase;
		color: #fff;
	}
	.buttonApplication:hover {
		background: #2E7DB8;
	}
	.necessaryApplicationForm {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 22px;
		color: #2D2D2D;
	}
	.applicationText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #0062AA;
	}
	.paymentsNotProvided {
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-width: 1166px;
		margin: 0 auto;
		margin-top: 80px;
	}
	.paymentsNotProvided p {
		margin: 0;
	}
	.blockNotProvidedHeaderMain {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 40px;
		line-height: 48px;
		color: #005391;
	}
	.blockNotProvidedHeaderMain span {
		color: red;
	}
	.blockNotProvided {
		margin: 30px 0;
		border-left: 3px solid #E21C2A;;
		padding-left: 10px;
	}
	.blockNotProvidedHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: 600;
		font-size: 22px;
		line-height: 26px;
		text-transform: uppercase;
		color: #2D2D2D;
	}
	.blockNotProvidedText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
	}
	.blockNotProvidedText span {
		color: #0062AA;
	}
	.paymentsNotProvidedRightBlock {
		padding-top: 107px;
	}
	.blockSelfEmployed {
		width: 390px;
		height: 193px;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		background: #FFFFFF;
		padding: 60px 40px;
	}
	.SelfEmployedHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: 600;
		font-size: 22px;
		line-height: 26px;
		text-transform: uppercase;
		color: #0062AA;
	}
	.SelfEmployedText {
		margin-top: 20px;
	}
	.SelfEmployedText p {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
	}
	.SelfEmployedText p span {
		color: #3CA3D3;
		text-decoration: underline;
	}
	.SelfEmployedText p span:hover {
		cursor: pointer;
	}
	.blockQuestionAnswer {
		text-align: center;
		max-width: 1170px;
		margin: 0 auto;
		margin-bottom: 100px;
	}
	.QuestionAnswerHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 40px;
		line-height: 48px;
		color: #005391;
		margin-top: 120px;
	}
	.blockQuestion {
		display: flex;
		flex-direction: column;
		padding: 30px;
		min-height: 80px;
		background: #FFFFFF;
		border: 1px solid #E6E6E6;
		box-sizing: border-box;
		margin: 15px 0;
	}
	.blockQuestion p{
		margin: 0;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
		text-align: left;
	}
	.blockHaveQuestions {
		width: 100%;
		height: 180px;
		background: #0062AA;
	}
	.wrapperBlockHaveQuestions {
		max-width: 1170px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		padding: 40px;
	}
	.leftBlockHaveQuestionsHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 38px;
		color: #FFFFFF;
		margin: 0;
	}
	.leftBlockHaveQuestionsText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #FFFFFF;
	}
	.rightBlockHaveQuestions {
		background: #fff;
		height: 87px;
		border-radius: 100%;
		text-align: center;
	}
	.rightBlockHaveQuestions img {
		align-items: center;
		margin-top: 4px;
	}
	.blockSupportApp {
		background: #F9F9F9;
		position: relative;
		overflow: hidden;
	}
	.absolutBlockOne {
		position: absolute;
		width: 769px;
		height: 769px;
		background: #BCE2FF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
		right: 229px;
		top: 350px;
		border-radius: 100%;
	}
	.absolutBlockTwo {
		width: 665px;
		height: 665px;
		background: #F1F1F1;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
		position: absolute;
		top: 410px;
		border-radius: 100%;
		right: 279px;
	}
	.wrapperBlockSupportApp {
		display: grid;
		grid-template-columns: 4fr 1fr;
		max-width: 1200px;
		margin: 0 auto;
		height: 600px;
		right: 0px;
	}
	.blockSupportAppHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 44px;
		line-height: 53px;
		color: #E21C2A;
		margin: 0;
	}
	.blockSupportAppHeader:first-child {
		margin-top: 173px;
	}
	.blockSupportAppText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
		margin: 0;
	}
	.blockSupportAppButtons {
		align-items: center;
		display: grid;
		grid-template-columns: 1fr 2fr;
		margin-top: 56px;
	}
	.blockSupportAppLeftBtn {
		background: #383838;
		border-radius: 5px;
		color: #fff;
		width: 200px;
		height: 50px;
		align-items: center;
		border:none;
		outline: none;
		display: flex;
		justify-content: center;
		font-family: Proxima Nova;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 22px;
		text-transform: uppercase;
		color: #FFFFFF;
		cursor: pointer;
	}
	.blockSupportAppRightBtn {
		background: #383838;
		border-radius: 5px;
		color: #fff;
		width: 200px;
		height: 50px;
		align-items: center;
		border:none;
		outline: none;
		display: flex;
		justify-content: center;
		font-family: Proxima Nova;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 22px;
		text-transform: uppercase;
		cursor: pointer;
	}
	.blockSupportAppRightBtn img {
		margin-right: 20px;
	}
	.blockSupportAppLeftBtn img {
		margin-right: 20px;
	}
	.appOne{
		margin: 63px 0;
		position: absolute;
		right: 330px;
		z-index: 100;
	}
	.Mask {
		position: absolute;
		right: 30px;
		margin-bottom: 100px;
	}
	@media only screen and (max-width: 1750px) {
		.gridPayments {
			display: flex;
			justify-content: flex-start;
		}
		.wrapperCenterPayments {
			margin-left: 10px;
		}
	}
	@media only screen and (max-width: 1600px) {
		.wrapperBlockSupportApp {
			display: grid;
			grid-template-columns: 1fr 1fr;
			max-width: 1200px;
			margin: 0 auto;
		}
		.blockSupportAppButtons {
			align-items: center;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
			margin-top: 56px;
		}
		.blockSupportAppLeftBtn {
			margin-bottom: 10px;
		}
		.appOne{
			margin: 63px 0;
			position: absolute;
			right: 230px;
			z-index: 100;
		}
		.Mask {
			position: absolute;
			right: -80px;
			margin-bottom: 100px;
		}
	}
	@media only screen and (max-width: 1240px) {
		.circleFlag {
			width: 350px;
			height: 270px;
			top: -220px;
			left: 30%;
		}
		.borderFlag {
			width: 100%;
			height: 823px;
		}
		.firstItemFlag {
			height: 260px;
			width: 100%;
		}
		.lastItemFlag {
			width: 100%;
			height: 260px;
			display: flex;
			justify-content: center;
			padding: 20px 0;
		}
		.dedicatedBlockTop {
			display: none;
		}
		.dedicatedWrapperBottom {
			display: none;
		}
		.gridPayments {
			display: flex;
			justify-content: center;
		}
		.dedicatedBlockHide {
			display: block;
			max-height: 100px;
		}
		.dedicatedWrapper {
			display: none;
		}
		.BlockpaymentsProvided {
			margin-top: 100px;
		}
		.paymentsProvidedHeader {
			margin-top: 0;
			height: 100px;
		}
		.paymentsProvidedGrid {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;
			grid-gap: 20px;
			width: 100%;
			margin: 0 auto;
		}
		.gridCardProvided {
			margin-right: 10px;
			text-align: center;
		}
		.paymentsNotProvided {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
			width: 100%;
			margin-top: 80px;
		}
		.blockNotProvided {
			margin: 30px 0;
			border-left: 3px solid #E21C2A;;
			padding-left: 10px;
		}
		.paymentsNotProvidedLeftBlock {
			margin-left: 5%;
		}
		.blockNotProvidedHeaderMain{
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 34px;
			line-height: 29px;
			color: #005391;
		}
		.paymentsNotProvidedRightBlock {
			margin-left: 5%;
			padding-top: 27px;
		}
		.wrapperBlockSupportApp {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
			margin: 0 auto;
			height: 1050px;
		}
		.appOne{
			position: absolute;
			right: 310px;
			z-index: 100;
			bottom: 0;
		}
		.Mask {
			position: absolute;
			right: 0px;
			bottom: 0;
			margin-bottom: 0;
		}
		.gridWrapperBlockSupportApp {
			text-align: center;
		}
		.blockSupportAppButtons {
			display: flex;
			justify-content: center;
		}
		.blockSupportAppLeftBtn {
			margin-bottom: 0;
			margin-right: 20px;
		}
	}
	@media only screen and (max-width: 1000px) {
		.appOne{
			right: 220px;
			bottom: -30px;
		}
		.Mask {
			right: -100px;
			bottom: 0;
			margin-bottom: 0;
		}
	}
	@media only screen and (max-width: 900px) {
		.appOne{
			right: 160px;
			bottom: -160px;
		}
		.Mask {
			right: -150px;
			bottom: -100px;
			margin-bottom: 0;
		}
	}
	@media only screen and (max-width: 800px) {
		.appOne{
			right: 110px;
			bottom: -160px;
		}
		.Mask {
			right: -200px;
			bottom: -100px;
			margin-bottom: 0;
		}
	}
	@media only screen and (max-width: 640px) {
		.wrapperRightBlockHaveQuestions {
			display: flex;
			justify-content: center;
		}
		.rightBlockHaveQuestions {
			width: 87px;
		}
		.blockHaveQuestions {
			min-height: 250px;
			text-align: center;
		}
		.circleFlag {
			width: 350px;
			height: 270px;
			top: -220px;
			left: 15%;
		}
		.dedicatedBlockHide {
			display: block;
			max-height: 300px;
		}
		.centerPayments p {
			margin: 0;
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 22px;
			line-height: 26px;
			color: #FFFFFF;
		}
		.gridCardProvided {
			height: 240px;
			display: block;
		}
		.circleImageCardProvided {
			text-align: center;
			width: 80px;
			height: 80px;
			margin-bottom: 20px;
			margin-left: 40%;
		}
		.CardProvidedText p {
			margin: 0;
			text-align: center;
		}
		.blockNotProvidedHeaderMain {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 24px;
			line-height: 29px;
			color: #005391;
		}
		.blockSelfEmployed {
			width: 290px;
			height: 193px;
			box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
			border-radius: 15px;
			background: #FFFFFF;
			padding: 60px 40px;
		}
		.buttonApplication {
			width: 240px;
		}
		.paymentsProvidedHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 24px;
			line-height: 29px;
			text-align: center;
			color: #005391;
			margin-top: 150px;
		}
		.blockSupportAppHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 24px;
			line-height: 29px;
			color: #E21C2A;
			margin: 0;
			text-align: center;
		}
		.blockSupportAppHeader:first-child {
			margin-top: 100px;
		}
		.blockSupportAppImage {
			width: 200px;
			height: 300px;
		}
		.wrapperBlockSupportApp {
			display: grid;
			grid-template-columns:1fr;
			grid-template-rows:1fr 1fr;
			max-width: 1200px;
			margin: 0 auto;
			bottom: -100px;
			right: 0px;
		}
		.blockSupportAppButtons {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
			margin-top: 56px;
		}
		.blockSupportAppLeftBtn {
			width: 95%;
			margin: 10px;
		}
		.blockSupportAppRightBtn {
			width: 95%;
			margin: 10px;
		}
		.absolutBlockOne {
			position: absolute;
			width: 569px;
			height: 569px;
			background: #BCE2FF;
			box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
			right: 59px;
			top: 550px;
			border-radius: 100%;
		}
		.absolutBlockTwo {
			width: 465px;
			height: 465px;
			background: #F1F1F1;
			box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
			position: absolute;
			top: 610px;
			border-radius: 100%;
			right: 109px;
		}
		.wrapperBlockSupportApp {
			height: 850px;
		}
		.appOne{
			right: 50px;
			bottom: -160px;
		}
		.Mask {
			right: -260px;
			bottom: -100px;
			margin-bottom: 0;
		}
	}
	@media only screen and (max-width: 500px) {
		.appOne{
			right: -20px;
			bottom: -160px;
		}
		.Mask {
			right: -330px;
			bottom: -100px;
			margin-bottom: 0;
		}
	}
	@media only screen and (max-width: 440px) {
		.blockHaveQuestions {
			min-height: 300px;
			text-align: center;
		}
		.circleFlag {
			width: 300px;
			height: 230px;
			top: -200px;
			left: -1%;
		}
		.blockSelfEmployed {
			width: 190px;
			height: 393px;
		}
		.gridWrapperBlockSupportApp {
			padding-left: 20px;
		}
		.blockSupportAppHeader {
			text-align: left;
		}
		.blockSupportAppText {
			text-align: left;
		}
		.blockSupportAppLeftBtn {
			margin-left: 0;
		}
		.blockSupportAppRightBtn {
			margin-left: 0;
		}
		.appOne{
			right: 10px;
			bottom: -100px;
			width: 400px;
		}
		.Mask {
			right: -360px;
			bottom: -100px;
			margin-bottom: 0;
		}
	}
	@media only screen and (max-width: 350px) {
		.appOne{
			right: -40px;
			bottom: -100px;
			width: 400px;
		}
		.Mask {
			right: -360px;
			bottom: -100px;
			margin-bottom: 0;
			display: none;
		}
	}
</style>