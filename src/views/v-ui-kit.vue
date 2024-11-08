<template>
	<div class="v-ui-kit">
		<div class="uiGridButtons">
			<button class="uiLeftButton"><p>Подать заявку</p></button>
			<button class="uiRightButton"><p>Подать заявку</p></button>
		</div>
		<div class="blockSupportTop">
			<p>Кому назначают выплаты от Ассоциации социальной поддержки граждан?</p>
			<i class="material-icons changeIcon" key="keyboard_arrow_down" @click="showAnswer">keyboard_arrow_down</i>
			<div class="showAnswerBlockSupportTop" v-if="isAnswer">
				<p>Текст ответа Текст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответаТекст ответа</p>
			</div>
			
		</div>
<!-- 		<div class="blockSupportBottom">
			<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, laboriosam.</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis corrupti quis ullam, dicta eius blanditiis, nesciunt eveniet laboriosam modi, possimus nihil. Placeat impedit eaque amet facilis at corporis dolorem, nostrum animi, molestias quod. Reprehenderit, consequatur. Sequi numquam a eius tempora.</p>
		</div> -->
		<div class="uiForm">
			<p>Фамилия</p>
			<input type="text" class="uiInput">
<!-- 
			<p>Фамилия</p>
			<input type="text" class="uiInput">

			<p>Фамилия</p>
			<input type="text" class="uiInput"> -->

			<div class="uiFormButton">
				<button>М</button>
		</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-ui-kit',
		data() {
			return {
				isAnswer: false
			}
		},
		methods: {
			showAnswer() {
				this.isAnswer = !this.isAnswer
				let icon = document.querySelector('.changeIcon')

				if(this.isAnswer == true) {
					icon.classList.remove('rotateIconRight')
					icon.classList.add('rotateIconLeft')
				} else {
					icon.classList.add('rotateIconRight')
					icon.classList.remove('rotateIconLeft')
				}
			}
		}
	}
</script>

<style>
.v-ui-kit {
	max-width: 1000px;
	margin: 0 auto;
}
.uiGridButtons {
	display: grid;
	grid-template-columns: 1fr 3fr;
	margin-top: 70px;
	padding: 0;
}
.uiLeftButton {
	width: 340px;
	height: 55px;
	cursor: pointer;
	outline: none;
	text-decoration: none;
	border-radius: 5px;
	border: none;
	background: #005391;
	color: #fff;
}
.uiLeftButton p {
	margin: 0;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	text-transform: uppercase;
}
.uiRightButton {
	width: 340px;
	height: 55px;
	cursor: pointer;
	outline: none;
	margin-left: 61px;
	border-radius: 5px;
	border: none;
	background: #2E7DB8;
	color: #fff;
}
.uiRightButton p {
	margin: 0;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	text-transform: uppercase;
}
.blockSupportTop {
	max-width: 100%;
	padding: 30px;
	margin-top: 65px;
	border: 1px solid #E6E6E6;
	box-sizing: border-box;
	position: relative;
}
.changeIcon {
	text-align: right;
	position: absolute;
	right: 30px;
	top: 25px;
	cursor: pointer;
	color: red;
}
.blockSupportTop p {
	margin: 0;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 20px;
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
.blockSupportBottom {
	border: 2px solid #F0F0F0;
	max-width: 100%;
	padding: 15px 30px;
	margin-top: 25px;
}
.uiForm p{
	margin: 40px 0 0 0;
	color: grey;
}
.uiForm {
	max-width: 400px;
}
.uiInput {
	font-size: 15px;
	padding: 10px;
	outline: none;
	border: 2px solid #E5E5E5;
	border-radius: 3px;
	width: 90%;
}
.uiFormButton {
	max-width: 400px;
	display: grid;
	grid-template-columns: 1fr 1fr;
}
.uiFormButton button {
	border: none;
	outline: none;
	background: #F1F1F1;
	padding: 10px 80px;
	font-size: 15px;
	font-weight: bold;
	margin: 20px 20px 20px 0;
}
.rotateIconRight {
	transform: rotateZ(0deg);
	transition: transform .3s ease;
}
.rotateIconLeft {
	transform: rotateZ(90deg);
	transition: transform .3s ease;
}
</style>