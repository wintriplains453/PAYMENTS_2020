<template>
	<div class="v-collation">
		<div class="blockCollation">
					<p>Сверка заполненной анкеты с</p>
					<p>базой данных</p>
				<div class="wrapperLoader">
					<div class="loader"></div>
				</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-collation',
		methods: {
			loaderFuck() {
				setTimeout(() => {
					this.$router.push('/youIdentified')
				}, 3000)
			}
		},
		mounted() {
			this.loaderFuck()
		}
	}
</script>

<style>
	.v-collation {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
	.blockCollation {
		width: 100%;
		min-height: 485px;
		background: #FFFFFF;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		text-align: center;
		padding: 145px 50px;
	}
	.blockCollation p {
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
		animation: loader-spin 1s linear 3;
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
	@media only screen and (max-width: 440px) {
		.blockCollation {
			padding: 20px 15px;
			margin: 10px;
			width: 250px;
		}
		.blockCollation p{
			font-family: Exo 2;
			font-style: normal;
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			text-align: center;
			color: #2D2D2D;
		}
	}
</style>