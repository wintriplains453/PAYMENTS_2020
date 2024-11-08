<template>
	<div>
		
	</div>
</template>

<script>
import {mapActions} from 'vuex'

	export default {
		name: 'v-all-regions',
		data() {
			return {
				arrRegions: [
		  		{
		  			name: 'Алтайский край',
		  			id: 1,
		  			image: 'Altai_Krai.png'
		  		},
		  		{
		  			name: 'Амурская область',
		  			id: 2,
		  			image: 'Amurskaja_obl.png'
		  		},
		  		{
		  			name: 'Архангельская область',
		  			id: 3,
		  			image: 'Arkhangelsk_oblast.png'
		  		},
		  		{
		  			name: 'Астраханская область',
		  			id: 4,
		  			image: 'Astrakhan_Oblast.png'
		  		},
		  		{
		  			name: 'Белгородская область',
		  			id: 5,
		  			image: 'Belgorod_Oblast.png'
		  		},
		  		{
		  			name: 'Брянская область',
		  			id: 6,
		  			image: 'Bryansk_Oblast.png'
		  		},
		  		{
		  			name: 'Владимирская область',
		  			id: 7,
		  			image: 'Vladimiri_Oblast.png'
		  		},
		  		{
		  			name: 'Волгоградская область',
		  			id: 8,
		  			image: 'Volgograd_oblast.png'
		  		},
		  		{
		  			name: 'Вологодская область',
		  			id: 9,
		  			image: 'Vologda_oblast.png'
		  		},
		  		{
		  			name: 'Воронежская область',
		  			id: 10,
		  			image: 'Voronezh_Oblast.png'
		  		},
		  		{
		  			name: 'г. Москва',
		  			id: 11,
		  			image: 'Moscow.png'
		  		},
		  		{
		  			name: 'Еврейская автономная область',
		  			id: 12,
		  			image: 'Jewish_Autonomous_Oblast.png'
		  		},
		  		{
		  			name: 'Забайкальский край',
		  			id: 13,
		  			image: 'Zabaykalsky_Krai.png'
		  		},
		  		{
		  			name: 'Ивановская область',
		  			id: 14,
		  			image: 'Ivanovo_Oblast.png'
		  		},
		  		{
		  			name: 'Иркутская область',
		  			id: 15,
		  			image: 'Irkutsk_Oblast.png'
		  		},
		  		{
		  			name: 'Кабардино-Балкарская Республика',
		  			id: 16,
		  			image: 'GerbKabardinoBalkaria.png'
		  		},
		  		{
		  			name: 'Калининградская область',
		  			id: 17,
		  			image: 'GerbKaliningradskayaObl.png'
		  		},
		  		{
		  			name: 'Калужская область',
		  			id: 18,
		  			image: 'GerbKalugskObl.png'
		  		},
		  		{
		  			name: 'Камчатский край',
		  			id: 19,
		  			image: 'GerbKamchatskogoKraya.png'
		  		},
		  		{
		  			name: 'Карачаево-Черкесская Республика',
		  			id: 20,
		  			image: 'GerbKCHR.png'
		  		},
		  		{
		  			name: 'Кемеровская область',
		  			id: 21,
		  			image: 'GerbKemerovskoyObl.png'
		  		},
		  		{
		  			name: 'Кировская область',
		  			id: 22,
		  			image: 'GerbKirovskoyObl.png'
		  		},
		  		{
		  			name: 'Костромская область',
		  			id: 23,
		  			image: 'GerbKostromaObl.png'
		  		},
		  		{
		  			name: 'Краснодарский край',
		  			id: 24,
		  			image: 'GerbKrasnodarKray.png'
		  		},
		  		{
		  			name: 'Красноярский край',
		  			id: 25,
		  			image: 'GerbKrasnoyarskKrai.png'
		  		},
		  		{
		  			name: '	Курганская область',
		  			id: 26,
		  			image: 'GerbKurganObl.png'
		  		},
		  		{
		  			name: '	Курская область',
		  			id: 27,
		  			image: 'GerbKurskObl.png'
		  		},
		  		{
		  			name: '	Ленинградская область',
		  			id: 28,
		  			image: 'GerbLeningradskoyObl.png'
		  		},
		  		{
		  			name: '	Липецкая область',
		  			id: 29,
		  			image: 'GerbLipetsk_oblast.png'
		  		},
		  		{
		  			name: '	Магаданская область',
		  			id: 30,
		  			image: 'GerbMagadanObl.png'
		  		},
		  		{
		  			name: '	Московская область',
		  			id: 31,
		  			image: 'GerbMoscowObl2005.png'
		  		},
		  		{
		  			name: '	Мурманская область',
		  			id: 32,
		  			image: 'GerbMurmanskoyObl.png'
		  		},
		  		{
		  			name: 'Ненецкий автономный округ',
		  			id: 33,
		  			image: 'GerbNAO.png'
		  		},
		  		{
		  			name: 'Нижегородская область',
		  			id: 34,
		  			image: 'GerbNizhniyNovgorodObl.png'
		  		},
		  		{
		  			name: '	Новгородская область',
		  			id: 35,
		  			image: 'GerbNovgorodskoyObl.gif'//!gif
		  		},
		  		{
		  			name: 'Новосибирская область',
		  			id: 36,
		  			image: 'GerbNovosibirskObl.png'
		  		},
		  		{
		  			name: '	Омская область',
		  			id: 37,
		  			image: 'GerbOmskObl.png'
		  		},
		  		{
		  			name: '	Оренбургская область',
		  			id: 38,
		  			image: 'GerbOrenburgObl.png'
		  		},
		  		{
		  			name: 'Орловская область',
		  			id: 39,
		  			image: 'GerbOryolObl.png'
		  		},
		  		{
		  			name: 'Пензенская область',
		  			id: 40,
		  			image: 'GerbPenzObl.jpg'
		  		},
		  		{
		  			name: 'Пермский край',
		  			id: 41,
		  			image: 'GerbPermObl.png'
		  		},
		  		{
		  			name: '	Приморский край',
		  			id: 42,
		  			image: 'GerbPrimorskyKrai.png'
		  		},
		  		{
		  			name: '	Псковская область',
		  			id: 43,
		  			image: 'GerbPskovskoyObl.jpg'
		  		},
		  		{
		  			name: 'Республика Адыгея (Адыгея)',
		  			id: 44,
		  			image: 'Adygea.png'
		  		},
		  		{
		  			name: 'Республика Алтай',
		  			id: 45,
		  			image: 'GerbAltaiRepublic.png'
		  		},
		  		{
		  			name: '	Республика Башкортостан',
		  			id: 46,
		  			image: 'Bashkortostan.png'
		  		},
		  		{
		  			name: 'Республика Бурятия',
		  			id: 47,
		  			image: 'GerbBuryatiya.png'
		  		},
		  		{
		  			name: 'Республика Дагестан',
		  			id: 48,
		  			image: 'GerbDagestan.png'
		  		},
		  		{
		  			name: '	Республика Ингушетия',
		  			id: 49,
		  			image: 'GerbIngushetia.png'
		  		},
		  		{
		  			name: 'Республика Калмыкия',
		  			id: 50,
		  			image: 'GerbKalmykia.png'
		  		},
		  		{
		  			name: 'Республика Карелия',
		  			id: 51,
		  			image: 'GerbKarelia.png'
		  		},
		  		{
		  			name: 'Республика Коми',
		  			id: 52,
		  			image: 'GerbKomiRepublic.png'
		  		},
		  		{
		  			name: 'Республика Крым',
		  			id: 53,
		  			image: 'GerbCrimea.png'
		  		},
		  		{
		  			name: 'Республика Марий Эл',
		  			id: 54,
		  			image: 'Mari_El.png'
		  		},
		  		{
		  			name: '	Республика Мордовия',
		  			id: 55,
		  			image: 'GerbMordovia1995.png'
		  		},
		  		{
		  			name: 'Республика Саха (Якутия)',
		  			id: 56,
		  			image: 'GerbSakhaYakutia.png'
		  		},
		  		{
		  			name: 'Республика Северная Осетия - Алания',
		  			id: 57,
		  			image: 'GerbOssetien.png'
		  		},
		  		{
		  			name: '	Республика Татарстан (Татарстан)',
		  			id: 58,
		  			image: 'GerbTatarstan.png'
		  		},
		  		{
		  			name: 'Республика Тыва',
		  			id: 59,
		  			image: 'GerbTuva.png'
		  		},
		  		{
		  			name: '	Республика Хакасия',
		  			id: 60,
		  			image: 'GerbKhakassia.png'
		  		},
		  		{
		  			name: 'Ростовская область',
		  			id: 61,
		  			image: 'GerbRostovObl.png'
		  		},
		  		{
		  			name: 'Рязанская область',
		  			id: 62,
		  			image: 'GerbRyazanObl.png'
		  		},
		  		{
		  			name: '	Самарская область',
		  			id: 63,
		  			image: 'GerbSamaraObl.png'
		  		},
		  		{
		  			name: '	Санкт-Петербург',
		  			id: 64,
		  			image: 'GerbSPB2003.png'
		  		},
		  		{
		  			name: '	Саратовская область',
		  			id: 65,
		  			image: 'GerbSaratovObl.png'
		  		},
		  		{
		  			name: 'Сахалинская область',
		  			id: 66,
		  			image: 'GerbSakhalinObl.png'
		  		},
		  		{
		  			name: '	Свердловская область',
		  			id: 67,
		  			image: 'GerbSverdlovskObl.png'
		  		},
		  		{
		  			name: '	Севастополь',
		  			id: 68,
		  			image: 'GerbSevastopolLenta.gif'
		  		},
		  		{
		  			name: '	Смоленская область',
		  			id: 69,
		  			image: 'GerbSmolenskayaObl.png'
		  		},
		  		{
		  			name: 'Ставропольский край',
		  			id: 70,
		  			image: 'GerbStavropolKrai.png'
		  		},
		  		{
		  			name: '	Тамбовская область',
		  			id: 71,
		  			image: 'GerbTambovskayaObl.png'
		  		},
		  		{
		  			name: 'Тверская область',
		  			id: 72,
		  			image: 'GerbTverObl.png'
		  		},
		  		{
		  			name: '	Томская область',
		  			id: 73,
		  			image: 'GerbTomskOblprazdn.png'
		  		},
		  		{
		  			name: 'Тульская область',
		  			id: 74,
		  			image: 'GerbTulskObl.png'
		  		},
		  		{
		  			name: 'Тюменская область',
		  			id: 75,
		  			image: 'GerbTyumenObl2009.jpeg'
		  		},
		  		{
		  			name: 'Удмуртская Республика',
		  			id: 76,
		  			image: 'GerbUdmurtia.png'
		  		},
		  		{
		  			name: 'Ульяновская область',
		  			id: 77,
		  			image: 'gerbUlObl03012014.gif'
		  		},
		  		{
		  			name: '	Хабаровский край',
		  			id: 78,
		  			image: 'GerbHabarovskogoKraya8.png'
		  		},
		  		{
		  			name: '	Ханты-Мансийский автономный округ - Югра',
		  			id: 79,
		  			image: 'GerbYugra.png'
		  		},
		  		{
		  			name: 'Челябинская область',
		  			id: 80,
		  			image: 'GerbChelyabinskObl.png'
		  		},
		  		{
					name: 'Чеченская Республика',
					id: 81,
					image: 'GerbChechnya.png'
  				},
  				{
  					name: 'Чувашская Республика - Чувашия',
  					id: 82,
  					image: 'GerbChuvashia.png'
  				},
  				{
  					name: '	Чукотский автономный округ',
  					id: 83,
  					image: 'GerbChukotka.png'
  				},
  				{
  					name: 'Ямало-Ненецкий автономный округ',
  					id: 84,
  					image: 'GerbYamalNenetsia.png'
  				},
  				{
  					name: 'Ярославская область',
  					id: 85,
  					image: 'GerbYaroslavlOblast2011full.png'
  				},
				]
			}
		},
		methods: {
			...mapActions([
				'GET_REGIONS'
			])
		},
		mounted() {
			this.GET_REGIONS(this.arrRegions)
		}
	}
</script>

<style>
	
</style>