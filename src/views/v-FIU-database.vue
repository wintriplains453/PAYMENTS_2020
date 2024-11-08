<template>
	<div class="v-FIU-database">
		<div class="blockFIU">
					<p class="FIUHeader">Сверка с базой ПФР…</p>
				<div class="wrapperLoaderFIU">
					<div class="loaderFIU"></div>
					<img :src="require('@/assets/icons/checked.png')" class="loaderImageFIU">
				</div>
				<p class="FIUOne">БД-РФ 1265е774930</p>
				<p class="FIUTwo">БД-РФ 1232е773440</p>
				<p class="FIUThree">БД-РФ 1232е773440</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-FIU-database',
		methods: {
			taxAuthority() {
				let databaseOne = document.querySelector('.FIUOne')
				setTimeout(() => {
					databaseOne.style.display = 'block'
				}, 500)
				let databaseTwo = document.querySelector('.FIUTwo')
				setTimeout(() => {
					databaseTwo.style.display = 'block'
				}, 1000)
				let databaseThree = document.querySelector('.FIUThree')
				setTimeout(() => {
					databaseThree.style.display = 'block'
				}, 1500)
				let loader = document.querySelector('.loaderFIU')
				let loaderImage = document.querySelector('.loaderImageFIU')
				setTimeout(() => {
					loader.style.display = 'none'
					loaderImage.style.display = 'block'
				}, 2500) 
				setTimeout(() => {
					this.$router.push('/treasury')
				}, 3500)
			}
		},
		mounted() {
			this.taxAuthority()
		}
	}
</script>

<style>
	.v-FIU-database {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.blockFIU {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		text-align: center;
		padding: 145px 50px;
	}
	.FIUHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		color: #2D2D2D;
	}
	.wrapperLoaderFIU {
		margin: 34px auto;
		width: 53px;
	}
	.loaderFIU {
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
	.loaderImageFIU {
		display: none;
	}
	.FIUOne {
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
	.FIUTwo {
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
	.FIUThree {
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
	@media only screen and (max-width: 440px) {
		.blockFIU {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.FIUHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #2D2D2D;
		}
	}
</style>