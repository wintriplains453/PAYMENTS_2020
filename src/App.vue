<template>
  <div id="app">
  	<div>
  		 <component :is="layout">

  			<router-view />

  			</component>
  		<v-all-regions />
  	</div>
      </div>
</template>

<script>
import mainLayout from '@/layouts/mainLayout'
import emptyLayout from '@/layouts/emptyLayout'
import vAllRegions from '@/components/v-all-regions'

	export default {
		name: 'app',
		components: {
			mainLayout,
			emptyLayout,
			vAllRegions
		},
		computed: {
			layout() {
				return (this.$route.meta.layout || 'empty') + '-layout'
			}
		}
	}
</script>

<style>
#app {

}
p {
	font-family: Verdana, Geneva, Tahoma, sans-serif !important;
}
body {
	margin: 0;
	padding: 0;
	width: 100%;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
