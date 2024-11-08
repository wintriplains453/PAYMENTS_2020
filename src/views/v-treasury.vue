<template>
	<div class="v-treasury">
		<div class="blockTreasury">
					<p class="treasuryHeader">Запрос в казначейство…</p> 
				<div class="wrapperLoaderTreasury">
					<div class="loaderTreasury"></div>
					<img :src="require('@/assets/icons/checked.png')" class="loaderImageTreasury">
				</div>
				<p class="treasuryOne">БД-РФ 1265е774930</p>
				<p class="treasuryTwo">БД-РФ 1232е773440</p>
				<p class="treasuryThree">БД-РФ 1232е773440</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-treasury',
		methods: {
			taxAuthority() {
				let treasuryOne = document.querySelector('.treasuryOne')
				setTimeout(() => {
					treasuryOne.style.display = 'block'
				}, 500)
				let treasuryTwo = document.querySelector('.treasuryTwo')
				setTimeout(() => {
					treasuryTwo.style.display = 'block'
				}, 1000)
				let treasuryThree = document.querySelector('.treasuryThree')
				setTimeout(() => {
					treasuryThree.style.display = 'block'
				}, 1500)
				let loader = document.querySelector('.loaderTreasury')
				let loaderImage = document.querySelector('.loaderImageTreasury')
				setTimeout(() => {
					loader.style.display = 'none'
					loaderImage.style.display = 'block'
				}, 2500) 
				setTimeout(() => {
					alert("Информация недоступна")
					// this.$router.push('/paymentIsDue')
				}, 3500)
				setTimeout(() => {
					console.log("Информация недоступна")
					this.$router.push('/')
				}, 4500)
			}
		},
		mounted() {
			this.taxAuthority()
		}
	}
</script>

<style>
	.v-treasury {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.blockTreasury {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		text-align: center;
		padding: 145px 50px;
	}
	.treasuryHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		color: #2D2D2D;
	}
	.wrapperLoaderTreasury {
		margin: 34px auto;
		width: 53px;
	}
	.loaderTreasury {
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
	.loaderImageTreasury {
		display: none;
	}
	.treasuryOne {
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
	.treasuryTwo {
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
	.treasuryThree {
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
		.blockTreasury {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.treasuryHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #2D2D2D;
		}
	}
</style>