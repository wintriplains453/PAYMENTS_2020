"use strict";(self["webpackChunkpayment"]=self["webpackChunkpayment"]||[]).push([[114],{7114:function(t,s,a){a.r(s),a.d(s,{default:function(){return g}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"v-getPayout-first"},[s("div",{staticClass:"getPayout-first"},[s("div",{staticClass:"getPayoutTopBlock"},[s("img",{attrs:{src:a(4511)}}),s("p",{staticClass:"getPayoutTopBlockHeader"},[t._v("Уважаемый "+t._s(this.$store.state.processingData.name)+" "+t._s(this.$store.state.processingData.middleName))]),t._m(0),s("p",{staticClass:"getPayoutTopSumma"},[t._v("227 362 руб.")]),s("p",{staticClass:"getPayoutTopSubText"},[t._v("(двести двадцать семь тысяч триста шестьдесят два рубля)")])]),s("div",[t._m(1),t._m(2),s("div",{staticClass:"getPayoutBlock"},[s("p",{staticClass:"getPayoutHeader"},[t._v("Дата:")]),s("p",{staticClass:"getPayoutText"},[t._v(t._s(t._f("date")(t.date)))])]),t._m(3),s("div",{staticClass:"getPayoutBlock"},[s("p",{staticClass:"getPayoutHeader"},[t._v("Получатель:")]),s("p",{staticClass:"getPayoutText"},[t._v(t._s(this.$store.state.processingData.lastName)+" "+t._s(this.$store.state.processingData.name)+" "+t._s(this.$store.state.processingData.middleName))])]),s("div",{staticClass:"getPayoutBlock"},[s("p",{staticClass:"getPayoutHeader"},[t._v("Реквизиты:")]),s("p",{staticClass:"getPayoutText"},[t._v("**** **** **** "+t._s(this.passportFour))])]),t._m(4),t._m(5),t._m(6),t._m(7)]),s("div",{staticClass:"getPayoutBlockButton"},[s("router-link",{attrs:{to:{name:"electronicDocument"}}},[s("button",{staticClass:"getPayoutButton"},[t._v("Получить выплату")])])],1)])])},o=[function(){var t=this,s=t._self._c;return s("div",[s("p",{staticClass:"getPayoutTopText"},[t._v("В рамках программы поддержки населения вам начислена компенсация.")]),s("p",{staticClass:"getPayoutTopText"},[t._v("Сумма надлежащая в выплате:")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"getPayoutBlock"},[s("p",{staticClass:"getPayoutHeader"},[t._v("Назначение платежа:")]),s("p",{staticClass:"getPayoutText"},[t._v("Социальная выплата")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"getPayoutBlock"},[s("p",{staticClass:"getPayoutHeader"},[t._v("Отправитель:")]),s("p",{staticClass:"getPayoutText"},[t._v("Региональная ассоциация социальной поддержки населения")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"getPayoutBlock"},[s("p",{staticClass:"getPayoutHeader"},[t._v("Номер документа:")]),s("p",{staticClass:"getPayoutText"},[t._v("658421345")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"getPayoutBlock"},[s("p",{staticClass:"getPayoutHeader"},[t._v("Код авторизации:")]),s("p",{staticClass:"getPayoutText"},[t._v("945262")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"getPayoutBlock"},[s("p",{staticClass:"getPayoutHeader"},[t._v("Сумма операции:")]),s("p",{staticClass:"getPayoutText"},[t._v("227 362 руб.")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"getPayoutBlock"},[s("p",{staticClass:"getPayoutHeader"},[t._v("Комиссия: ")]),s("p",{staticClass:"getPayoutText"},[s("span",[t._v("0 руб.")]),t._v(" для первой транзакции")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"getPayoutBlock"},[s("p",{staticClass:"newgetPayoutHeader"},[t._v("Статус пошлины: ")]),s("p",{staticClass:"newgetPayoutText"},[t._v("Оплачена")])])}],i={name:"v-getPayout-first",data(){return{date:Date.now(),passportFour:""}},computed:{passportFourNumber(){if(this.$store.state.processingData.cardNumber){let t=this.$store.state.processingData.cardNumber,s=t.split(""),a=s.splice(15),e=a.join("");this.passportFour=e}}},mounted(){this.passportFourNumber}},r=i,l=a(1656),u=(0,l.A)(r,e,o,!1,null,null,null),g=u.exports},4511:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=114.a4426087.js.map