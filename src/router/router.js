import Vue from 'vue'
import VueRouter from 'vue-router' 

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',	
	routes : [
		{
			path: '/PAYMENTS_2020/',
			name: 'home',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-home')
		},
		{
			path: '/required/payment',
			name: 'reqPay',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-required-payment')
		},
		{
			path: '/collation',
			name: 'collation',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-collation')
		},
		{
			path: '/youIdentified',
			name: 'youIdentified',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-youIdentified')
		},
		{
			path: '/regdatabase',
			name: 'regdatabase',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-regional-database')
		},
		{
			path: '/tax_authority',
			name: 'tax_authority',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-tax-authority')
		},
		{
			path: '/FIU',
			name: 'FIU',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-FIU-database')
		},
		{
			path: '/treasury',
			name: 'treasury',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-treasury')
		},
		{
			path: '/paymentIsDue',
			name: 'paymentIsDue',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-paymentIsDue')
		},
		{
			path: '/secondForm',
			name: 'secondForm',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-secondForm')
		},
		{
			path: '/supSpecialist',
			name: 'supSpecialist',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-support-specialist')
		},
		{
			path: '/getPayout/first',
			name: 'getPayoutFirst',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-getPayout-first')
		},
		{
			path: '/preparingFirstPayment',
			name: 'preparingFirstPayment',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-preparingFirstPayment')
		},
		{
			path: '/firstPayment',
			name: 'firstPayment',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-first-payment')
		},
		{
			path: '/firstPaymentReceived',
			name: 'firstPaymentReceived',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-firstPaymentReceived')
		},
		{
			path: '/getPayout/second',
			name: 'getPayoutSecond',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-getPayout-second')
		},
		{
			path: '/electronicDocument',
			name: 'electronicDocument',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-electronic-document')
		},
		{
			path: '/firstTransaction',
			name: 'firstTransaction',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-first-transaction')
		},
		{
			path: '/seniorSpecialist',
			name: 'seniorSpecialist',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-senior-specialist')
		},
		{
			path: '/secondTransaction',
			name: 'secondTransaction',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-second-transaction')
		},
		{
			path: '/verificationActive',
			name: 'verificationActive',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-verificationActive')
		},
		{
			path: '/responseQuestion',
			name: 'responseQuestion',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-response-question')
		},
		{
			path: '/confirmingPayment',
			name: 'confirmingPayment',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-confirming-payment')
		},
		{
			path: '/transitAccount',
			name: 'transitAccount',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-transit-account')
		},
		{
			path: '/fastMoney',
			name: 'fastMoney',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-fast-money')
		},
		{
			path: '/manualPayment',
			name: 'manualPayment',
			meta: {layout: 'empty'},
			component: () => import('@/views/v-manual-payment')
		}
	]
})


