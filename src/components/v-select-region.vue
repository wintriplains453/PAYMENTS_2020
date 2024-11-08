<template>
			<div class="subSelectLink" @click="getRegion">{{this.region_data.name}}</div>
</template>

<script>
	export default {
		name: 'v-select-region',
		props: {
			region_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			getRegion() {
				this.$emit('getRegion')
			}
		},
		mounted() {
		}
	}
</script>

<style>
	.subSelectLink{
		padding: 10px 30px;
		width: inherit;
		list-style: none;
		background: #EAEAEA;
		cursor: pointer;font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
		border-top:1px solid #D9D9D9;
	}
	.subSelectLink:hover {
		background: #fff;
	}
</style>