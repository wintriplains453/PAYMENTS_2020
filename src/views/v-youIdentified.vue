<template>
	<div class="v-youIdentified">
		<div class="youIdentified">
			<p class="youIdentifiedHeader">Вы идентифицированы.</p>
			<img :src="require('@/assets/icons/checked.png')">
			<p class="youIdentifiedText">Сейчас мы подготовим запросы для расчета</p>
			<p class="youIdentifiedText">положенной выплаты, это займет некоторое</p>
			<p class="youIdentifiedText">время, пожалуйста, не закрывайте эту страницу.</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-youIdentified',
		methods: {
			identified() {
				setTimeout(() => {
					this.$router.push('/regdatabase')
				}, 3000)
			}
		},
		mounted() {
			this.identified()
		}
	}
</script>

<style>
	.v-youIdentified {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.youIdentified {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		text-align: center;
		padding: 145px 50px;
	}
	.youIdentified img {
		width: 64px;
		height: 64px;
		margin: 60px 0;
	}
	.youIdentifiedHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		color: #005391;
		margin: 0;
	}
	.youIdentifiedText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #2D2D2D;
		margin: 0;
	}
	@media only screen and (max-width: 440px) {
		.youIdentified {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.youIdentifiedHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #005391;
		}
	}
</style>