<template>
	<div v-if="sectionFunck">
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
	</div>
</template>

<script>
	export default {
		name: 'v-questions-section',
		data() {
			return {
			}
		},
		computed: {
			sectionFunck() {
				let isSection = true;
				for(let i = 0; i < this.$router.options.routes.length; i++) {
					if(this.$route.path === '/') {
						return isSection = false 
					} else {
						return isSection
					}
				}
			}
		},
		mounted() {
		}
	}
</script>

<style>
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
	@media only screen and (max-width: 640px) {
		.wrapperBlockHaveQuestions {
			display: flex;
			padding: 40px;
			flex-direction: column;
		}
	}
	@media only screen and (max-width: 440px) {
		.blockHaveQuestions {
			height: 300px;
			text-align: center;
		}
	}
	@media only screen and (max-width: 340px) { 
		.blockHaveQuestions {
			height: 500px;
		}
	}
</style>