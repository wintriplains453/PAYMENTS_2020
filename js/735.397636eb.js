"use strict";(self["webpackChunkpayment"]=self["webpackChunkpayment"]||[]).push([[735],{7735:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"indentsVRequiredPayment"},[e("div",{staticClass:"vRequiredPayment"},[e("div",{staticClass:"questionnaireRequiredPayment"},[e("p",{staticClass:"requiredPaymentHeader"},[t._v("Заполните анкету для расчета положенной вам выплаты.")]),e("form",{staticClass:"requiredPaymentForm"},[e("p",[t._v("Фамилия")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"lastName",attrs:{type:"text"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),t.lastName?e("i",{key:"lastName",staticClass:"material-icons iconInputValidate"},[t._v("done")]):t._e(),e("p",[t._v("Имя")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"name",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t.name?e("i",{key:"name",staticClass:"material-icons iconInputValidate"},[t._v("done")]):t._e(),e("p",[t._v("Отчество")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.middleName,expression:"middleName"}],staticClass:"middleName",attrs:{type:"text"},domProps:{value:t.middleName},on:{input:function(e){e.target.composing||(t.middleName=e.target.value)}}}),t.middleName?e("i",{key:"middleName",staticClass:"material-icons iconInputValidate"},[t._v("done")]):t._e(),e("p",[t._v("Укажите Ваш пол:")]),e("div",{staticClass:"requiredPaymentFormGrid"},[e("button",{staticClass:"buttonM",attrs:{onclick:"return false"},on:{click:t.activateButtonM}},[t._v("М")]),e("button",{staticClass:"buttonW",attrs:{onclick:"return false"},on:{click:t.activateButtonW}},[t._v("Ж")])]),e("p",[t._v("Четыре последние цифры номера паспорта")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.passportNumber,expression:"passportNumber"}],staticClass:"passportNumber",attrs:{type:"text"},domProps:{value:t.passportNumber},on:{input:function(e){e.target.composing||(t.passportNumber=e.target.value)}}}),t.passportNumber?e("i",{key:"passportNumber",staticClass:"material-icons iconInputValidate"},[t._v("done")]):t._e(),e("p",[t._v("Дата рождения")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.dateBirth,expression:"dateBirth"}],staticClass:"dateBirth",attrs:{type:"text"},domProps:{value:t.dateBirth},on:{input:function(e){e.target.composing||(t.dateBirth=e.target.value)}}}),t.dateBirth?e("i",{key:"done4",staticClass:"material-icons iconInputValidate"},[t._v("done")]):t._e(),e("router-link",{attrs:{to:{name:"collation"}}},[e("button",{staticClass:"sendRequestRequiredPayment"},[t._v("отправить запрос на расчет выплаты")])])],1)])])])},i=[],n={data(){return{lastName:"",name:"",middleName:"",passportNumber:"",dateBirth:"",isActiveButton:!1}},methods:{inputActivate(){let t=document.querySelector(".name");t.addEventListener("focus",(()=>t.classList.add("focused")),!0),t.addEventListener("blur",(()=>t.classList.remove("focused")),!0);let e=document.querySelector(".lastName");e.addEventListener("focus",(()=>e.classList.add("focused")),!0),e.addEventListener("blur",(()=>e.classList.remove("focused")),!0);let a=document.querySelector(".middleName");a.addEventListener("focus",(()=>a.classList.add("focused")),!0),a.addEventListener("blur",(()=>a.classList.remove("focused")),!0);let s=document.querySelector(".passportNumber");s.addEventListener("focus",(()=>s.classList.add("focused")),!0),s.addEventListener("blur",(()=>s.classList.remove("focused")),!0);let i=document.querySelector(".dateBirth");i.addEventListener("focus",(()=>i.classList.add("focused")),!0),i.addEventListener("blur",(()=>i.classList.remove("focused")),!0)},activateButtonM(){this.isActiveButton=!this.isActiveButton;let t=document.querySelector(".buttonM"),e=document.querySelector(".buttonW");this.isActiveButton?(t.classList.add("activeButton"),e.classList.remove("activeButton")):t.classList.remove("activeButton")},activateButtonW(){this.isActiveButton=!this.isActiveButton;let t=document.querySelector(".buttonW"),e=document.querySelector(".buttonM");this.isActiveButton?t.classList.remove("activeButton"):(t.classList.add("activeButton"),e.classList.remove("activeButton"))}},mounted(){this.inputActivate()}},o=n,r=a(1656),u=(0,r.A)(o,s,i,!1,null,null,null),d=u.exports}}]);
//# sourceMappingURL=735.397636eb.js.map