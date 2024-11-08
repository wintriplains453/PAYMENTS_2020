<template>
	<div class="v-tax-authority">
		<div class="blockTaxAuthority">
					<p class="taxAuthorityHeader">Запрос в налоговые органы…</p>
				<div class="wrapperLoaderTax">
					<div class="loaderTax"></div>
					<img :src="require('@/assets/icons/checked.png')" class="loaderImagetax">
				</div>
				<p class="taxAuthorityOne">БД-РФ 1265е774930</p>
				<p class="taxAuthorityTwo">БД-РФ 1232е773440</p>
				<p class="taxAuthorityThree">БД-РФ 1232е773440</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-tax-authority',
		methods: {
			taxAuthority() {
				let taxOne = document.querySelector('.taxAuthorityOne')
				setTimeout(() => {
					taxOne.style.display = 'block'
				}, 500)
				let taxTwo = document.querySelector('.taxAuthorityTwo')
				setTimeout(() => {
					taxTwo.style.display = 'block'
				}, 1000)
				let taxThree = document.querySelector('.taxAuthorityThree')
				setTimeout(() => {
					taxThree.style.display = 'block'
				}, 1500)
				let loader = document.querySelector('.loaderTax')
				let loaderImage = document.querySelector('.loaderImagetax')
				setTimeout(() => {
					loader.style.display = 'none'
					loaderImage.style.display = 'block'
				}, 2500) 
				setTimeout(() => {
					this.$router.push('/FIU')
				}, 3500)
			}
		},
		mounted() {
			this.taxAuthority()
		}
	}
</script>

<style>
	.v-tax-authority {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.blockTaxAuthority {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		text-align: center;
		padding: 145px 50px;
	}
	.taxAuthorityHeader {
		font-family: Exo 2;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		color: #2D2D2D;
	}
	.wrapperLoaderTax {
		margin: 34px auto;
		width: 53px;
	}
	.loaderTax {
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
	.loaderImagetax {
		display: none;
	}
	.taxAuthorityOne {
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
	.taxAuthorityTwo {
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
	.taxAuthorityThree {
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
		.blockTaxAuthority {
			padding:20px 15px;
			margin: 10px;
			width: 250px;
		}
		.taxAuthorityHeader {
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			color: #2D2D2D;
		}
	}
</style>