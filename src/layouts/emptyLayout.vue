<template>
	<div class="emptyLayout">
		<div class="headerHome">
		<div class="flexHeader">
							<div class="emblem">
				<img v-if="this.regionImage.length" :src="require('@/assets/emblem/' + this.regionImage)">
			</div>
			<div class="headerAssociations">
				<p><span>АССОЦИАЦИЯ </span>СОЦИАЛЬНОЙ</p>
				<p>ПОДДЕРЖКИ НАСЕЛЕНИЯ</p>
			</div>
		</div>
		<div class="flexHeader2">
			<div 
			class="forCitizens" 
			@mouseenter="showForCitizens" 
			@mouseleave="hideForCitizens" 
			@click="toggleForCitizens" 
			ref="forCitizens-wraper"
			>
				<div class="forCitizensBlock">Для граждан
					<ul class="forCitizensList" v-if="this.toggle">
						<li></li>
						<li><p>Для юридических лиц</p></li>
						<li><p>Для предпринимателей</p></li>
						<li><p>Для иностраннцых граждан</p></li>
						<li><p>Для партнеров</p></li>
					</ul>
				</div>
				<i class="material-icons iconRed" key="keyboard_arrow_down">keyboard_arrow_down</i>
			</div>
			<div 
				class="wrapperSelectRegion" 
				@mouseenter="showwrapperSelectRegion" 
				@mouseleave="hidewrapperSelectRegions" 
				@click="togglewrapperSelectRegion"
				ref="wrapperSelectRegion-wraper"
			>
				<div 
				class="selectRegion" 
				ref="selectRegion-wraper" 
				@click="toggleSelectRegion"
				>
					<p class="selectRegionOne">Ваш регион:</p>
					<p class="selectRegionTwo">{{this.regionName}}</p>
					<i class="material-icons iconRed" key="keyboard_arrow_down">keyboard_arrow_down</i>
					<div class="subSelectRegion" v-if="this.secondToggle || this.toggleSelect">
						<ul>
						<v-select-region 
						v-for="(item, index) in this.$store.state.region"
						:key="item.id"
						:region_data="item"
						@getRegion="getRegion(item)"
						/>
						</ul>
					</div>
				</div>
			<div class="invisibleSelectRegion"></div>
			</div>
		</div>
		</div>
		<div class="emptyContent">
			<router-view />
		</div>
			<v-questions-section />
		<div class="footerLayout">
				<p class="firstFooterText">Ассоциация <span>социальной поддержки населения</span></p>
				<p class="secondFooterText">{{this.regionName}}</p>
				<p class="thirdFooterText">При поддержке ИТ-штаба</p>
		</div>
	</div>
</template>

<script>
import vSelectRegion from '@/components/v-select-region'
import vQuestionsSection from '@/components/v-questions-section' 
import {mapActions} from 'vuex'

	export default {
		name: 'emptyLayout',
		components: {
			vSelectRegion,
			vQuestionsSection
		},
		data() {
			return {
				regionName: 'Алтайский край',
				regionImage: 'Altai_Krai.png',
				toggle: false,
				secondToggle: false,
				toggleSelect: false
			}
		},
		methods: {
			...mapActions([
				'GET_REGION_NAME'
			]),
			getRegion(item) {
				this.regionName = item.name
				this.regionImage = item.image
				this.GET_REGION_NAME(item.name)
			},
			showForCitizens() {
				if(window.innerWidth >= 640) {
					this.toggle = true
				}
			},
			hideForCitizens() {
				if(window.innerWidth >= 640) {
					this.toggle = false
				}
			},
			toggleForCitizens() {
				if(window.innerWidth < 640) {
					let forCitizens = document.querySelector('.forCitizens')
					this.toggle = !this.toggle
					let vm = this;
					document.addEventListener('click', (item) => {
						if(item.target != vm.$refs['forCitizens-wraper']) {
							vm.toggle = false;
						}
					})
				}

			},
			showwrapperSelectRegion() {
				if(window.innerWidth >= 640) {
					this.secondToggle = true
				}
			},
			hidewrapperSelectRegions() {
				if(window.innerWidth >= 640) {
					this.secondToggle = false
				}
			},
			togglewrapperSelectRegion() {
				if(window.innerWidth < 640) {
					this.secondToggle = !this.secondToggle
					let vm = this;
					document.addEventListener('click', (item) => {
						if(item.target <= vm.$refs['wrapperSelectRegion-wraper']) {
							vm.secondToggle = false;
						}
					})
				}
			},
			toggleSelectRegion() {
				if(window.innerWidth < 640) {
					this.toggleSelect = !this.toggleSelect
					let vm = this;
					document.addEventListener('click', (item) => {
						if(item.target != vm.$refs['selectRegion-wraper']) {
							vm.toggleSelect = false;
						}
					})
				}

			},
		},
		mounted() {
		}
	}
</script>

<style>
	.flexHeader {
		display: flex;
		background: #fff;
	}
	.flexHeader2 {
		display: flex;
		background: #fff;
	}
	.headerHome {
		width: 100%;
		background: #fff;
		display: flex;
		justify-content: center;
		min-height: 120px;
		align-items: center;
		flex-wrap: wrap;
	}
	.headerHome > div {
		width: 50%;
		justify-content: center;
	}
	.emblem {
		width: 100px;
		height: 100px;
	}
	.emblem img {
		width: inherit;
		height: inherit;
	}
	.headerAssociations {
		margin-left: 20px;
		height: 50px;
		top: 30px;
		position: relative;
	}
	.headerAssociations span {
		color: red;
		font-family: Exo 2;
		font-style: Semi Bold;
		font-size: 22px;
		line-height: 26px;
		line-height: 100%;
		vertical-align: Top;
	}
	.headerAssociations p {
		margin: 0;
		font-family: Exo 2;
		font-style: Semi Bold;
		font-size: 22px;
		line-height: 26px;
		line-height: 100%;
		color: #0062AA;
		vertical-align: Top;
	}
	.forCitizens {
		display: flex;
		padding: 15px 20px;
		align-items: center;
		margin-top: -10px;
		position: relative;
		height: 20px;
		margin-left: 0;
	}
	.forCitizens:hover {
		background: #F8F8F8;
		cursor: pointer;
	}
	.forCitizens:hover .iconRed{
		transition: transform .5s;
		transform: rotateZ(90deg);
	}
	.forCitizensList {
		position: absolute;
		width: inherit;
		padding: 0;
		left: -0px;
		z-index: 10;
	}
	.forCitizensList li {
		list-style: none;
		text-align: left;
		width: 250px;
		background: #EAEAEA;
		left: 0;
		padding: 15px 20px;
		border-bottom: 1px solid #D9D9D9;
	}
	.forCitizensList li:hover{
		background: #fff;
		cursor: pointer;
	}
	.forCitizensList li:first-child {
		background: #fff;
		padding: 20px 20px;
		border-bottom: none;
	}
	.forCitizensList li:last-child {
		border-bottom: none;
	}
	.forCitizensList li p {
		margin: 0;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
	}
	.forCitizensBlock{
		font-family: Montserrat;
		font-style: SemiBold;
		font-weight: bold;
		font-size: 17px;
		line-height: 20px;
		line-height: 100%;
		vertical-align: Top;
		color: #2D2D2D;
	}
	.wrapperSelectRegion {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: -10px;
		height: 20px;
		padding: 15px 0;
	}
	.invisibleSelectRegion {
		margin-top: 10px;
		min-height: 41px;
		width: 100%;
		background: #fff;
	}
	.selectRegion {
		display: flex;
		justify-content: center;
		width: 373px;
		height: 50px;
		align-items: center;
		padding: 0 10px;
		cursor: pointer;
		margin-left: 0;
	}
	.wrapperSelectRegion:hover {
		background: #F8F8F8;
	}
	.wrapperSelectRegion:hover .iconRed{
		transform: rotateZ(90deg);
		transition: transform .5s;
	}
	.wrapperSelectRegion:hover .subSelectRegion {
		display: block;
	}
	.selectRegion p {
		margin: 0;
		margin-right: 10px;
	}
	.subSelectRegion {
		position: absolute;
		width: 393px;
		top: 120px;
		z-index: 20;
		padding:0;
		height: 575px;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.subSelectRegion ul {
		padding: 0;
		margin: 0;
	}
	.subSelectRegion::-webkit-scrollbar {
		width: 5px;
		height: 20px;
	}
	.subSelectRegion::-webkit-scrollbar-thumb {
  	background: #E31C23;
	}
	.selectRegionOne {
		color: #4B4B4B;
		font-family: Montserrat;
		font-style: Regular;
		font-size: 17px;
		line-height: 20px;
		line-height: 100%;
		vertical-align: Top;
	}
	.selectRegionTwo {
		font-family: Montserrat;
		font-style: SemiBold;
		font-size: 17px;
		line-height: 20px;
		line-height: 100%;
		font-weight: bold;
		vertical-align: Top;
		color: #2D2D2D;
		margin: 0;
		text-align: center;
	}
	.iconRed {
		color: red;
		cursor: pointer;
		margin-left: 10px;
	}
	.emptyContent {
		background: #F9F9F9;
		min-height: 700px;
	}
	.footerLayout {
		height: 110px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.firstFooterText {
		font-family: Exo 2;
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 24px;
		text-transform: uppercase;
		color: #E21C2A;
		padding-right: 30px;
	}
	.firstFooterText span {
		color: #0062AA;
	}
	.secondFooterText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		color: #2D2D2D;
		padding-left: 30px;
		border-left: 1px solid grey;
	}
	.thirdFooterText {
		font-family: Montserrat;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
		color: #4B4B4B;
		padding-left: 189px;
		margin-right: 1%;
	}
	@media only screen and (max-width: 1400px) {
			.invisibleSelectRegion {
				margin-top: 15px;
			}
	}
	@media only screen and (max-width: 1240px) {
		.headerHome > div {
			width: 100%;
			justify-content: center;
		}
		.headerHome {
			margin-bottom: 10px;
			justify-content: center;
			display: flex;
		}
		.emblem {
			margin-left: 0;
		}
		.forCitizens {
			margin-top: 30px;
			margin-left: 50px;
		}
		.wrapperSelectRegion {
			margin-top: 27px;
		}
		.subSelectRegion {
			top: 190px;
		}
		.invisibleSelectRegion {
			min-height: 20px;
		}
		.forCitizensList li:first-child {
			padding: 4.5px;
		}
		.firstFooterText {
			font-size: 14px;
		}
	}
	@media only screen and (max-width: 640px) {
		.headerHome > div {
			width: 100%;
			justify-content: flex-start;
		}
		.flexHeader2 {
			flex-wrap: wrap;
		}
		.flexHeader2 > div {
			width: 100%;
		}
		.forCitizensList{
			width: 100%;
			margin-right: 0;
		}
		.forCitizens {
			border-top: 1px solid grey;
			margin-left: 0;
		}
		.forCitizensList li {
			width: 100%;
		}
		.forCitizensList li:first-child {
			padding: 0;
		}
		.wrapperSelectRegion {
			padding: 10px 5px 0px 20px;
			height: 40px;
			margin: 10px 0;
		}
		.selectRegion {
			justify-content: flex-start;
			width: 100%;
			padding:0;
		}
		.subSelectRegion {
			width: 100%;
			left: 0;
		}
		.subSelectRegion {
			top: 237px;
		}
		.flexHeader {
			min-height: 60px;
		}
		.headerAssociations p {
			font-weight: 600;
			font-size: 16px;
			line-height: 22px;
		}
		.headerAssociations span {
			font-weight: 600;
			font-size: 16px;
			line-height: 22px;
		}
		.emblem {
			margin-top: 30px;
			width: 50px;
			height: 50px;
		}
		.invisibleSelectRegion {
			min-height: 1px;
		}
		.footerLayout {
			height: 110px;
			width: 100%;
			display: grid;
			grid-template-rows: 1fr 1fr 1fr;
			grid-template-columns: 1fr;
			align-items: center;
		}
		.firstFooterText {
			text-align: center;
			font-family: Exo 2;
			font-style: normal;
			font-weight: 600;
			font-size: 20px;
			line-height: 24px;
			text-transform: uppercase;
			color: #E21C2A;
		}
		.secondFooterText {
			text-align: center;
			padding-left: 0;
		}
		.thirdFooterText {
			padding-left: 0;
			text-align: center;
		}
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
	}
</style>