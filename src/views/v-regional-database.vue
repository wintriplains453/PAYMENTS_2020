<template>
	<div class="v-regional-database">
		<div class="blockDatabase">
			<p class="blockDatabaseText">Обращение в региональную базу</p>
			<p class="blockDatabaseText">данных..</p>
			<div class="wrapperLoader">
				<div class="loader"></div>
				<img :src="require('@/assets/icons/checked.png')" class="loaderImage">
			</div>
			<p class="regionalDatabaseProcessingOne">БД-РФ 1265е774930</p>
			<p class="regionalDatabaseProcessingTwo">БД-РФ 1232е773440</p>
			<p class="regionalDatabaseProcessingThree">БД-РФ 1232е773440</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-regional-database',
		methods: {
			regDatabase() {
				let regionalOne = document.querySelector('.regionalDatabaseProcessingOne')
				setTimeout(() => {
					regionalOne.style.display = 'block'
				}, 500)
				let regionalTwo = document.querySelector('.regionalDatabaseProcessingTwo')
				setTimeout(() => {
					regionalTwo.style.display = 'block'
				}, 1000)
				let regionalThree = document.querySelector('.regionalDatabaseProcessingThree')
				setTimeout(() => {
					regionalThree.style.display = 'block'
				}, 1500)
				let loader = document.querySelector('.loader')
				let loaderImage = document.querySelector('.loaderImage')
				setTimeout(() => {
					loader.style.display = 'none'
					loaderImage.style.display = 'block'
				}, 2500) 
				setTimeout(() => {
					this.$router.push('/tax_authority')
				}, 3500)
			}
		},
		mounted() {
			this.regDatabase()
		}
	}
</script>

<style>
	.v-regional-database {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.blockDatabase {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		text-align: center;
		padding: 145px 50px;
	}
	.blockDatabaseText {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #2D2D2D;
		margin: 0;
	}
	.wrapperLoader {
		margin: 34px auto;
		width: 53px;
	}
	.loader {
		animation: loader-spin 1s linear infinite;
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
	.regionalDatabaseProcessingOne {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #0062AA;
		margin: 0;
		display: none;
	}
	.regionalDatabaseProcessingTwo {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #0062AA;
		margin: 0;
		display: none;
	}
	.regionalDatabaseProcessingThree {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #0062AA;
		margin: 0;
		display: none;
	}
	.loaderImage {
		display: none;
	}
	@media only screen and (max-width: 440px) {
		.blockDatabase {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.blockDatabaseText {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #2D2D2D;
		}
	}
</style>