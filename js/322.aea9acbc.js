"use strict";(self["webpackChunkpayment"]=self["webpackChunkpayment"]||[]).push([[322],{3322:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"v-second-transaction"},[t("div",{staticClass:"secondTransaction"},[t("p",{staticClass:"secondTransactionHeaderOne"},[e._v("Сбор оплачен")]),t("p",{staticClass:"secondTransactionHeaderTwo"},[e._v("Код получен успешно!")]),e._m(0),e._m(1),t("img",{staticClass:"secondTransactionImg",attrs:{src:s(8653)}}),e._m(2),t("p",{staticClass:"secondTransactionTextFour"},[e._v("Отправляем транзакцию на 150 000 руб")]),t("p",{staticClass:"secondTransactionTextFive"},[e._v("Отправляем транзакцию на 77 362 руб")])])])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"secondTransactionHeaderThree"},[t("p",[e._v("Отказ, код верификации не")]),t("p",[e._v("активирован!")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrappereSecondTransactionLoader"},[t("div",{staticClass:"loadereSecondTransactionLoader"})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"subBlockTextSecondTransaction"},[t("p",{staticClass:"secondTransactionTextOne"},[e._v("Генерация кода…")]),t("p",{staticClass:"secondTransactionTextTwo"},[e._v("Получение кода верификации…")]),t("p",{staticClass:"secondTransactionTextThree"},[e._v("53959-sdgwg525923532")])])}],o=(s(4114),{name:"v-second-transaction",methods:{feePaid(){let e=document.querySelector(".secondTransactionTextOne"),t=document.querySelector(".secondTransactionTextTwo"),s=document.querySelector(".secondTransactionTextThree"),n=document.querySelector(".secondTransactionTextFour"),a=document.querySelector(".secondTransactionTextFive"),o=document.querySelector(".secondTransactionHeaderOne"),c=document.querySelector(".secondTransactionHeaderTwo"),i=document.querySelector(".secondTransactionHeaderThree"),r=document.querySelector(".subBlockTextSecondTransaction"),d=document.querySelector(".wrappereSecondTransactionLoader"),l=document.querySelector(".secondTransactionImg");setTimeout((()=>{e.style.display="block"}),1e3),setTimeout((()=>{t.style.display="block"}),2e3),setTimeout((()=>{s.style.display="block"}),3e3),setTimeout((()=>{o.style.display="none",c.style.display="block",r.style.display="none"}),4e3),setTimeout((()=>{n.style.display="block"}),5e3),setTimeout((()=>{a.style.display="block"}),6e3),setTimeout((()=>{c.style.display="none",d.style.display="none",i.style.display="block",l.style.display="block",n.classList.add("textActive"),a.classList.add("textActive")}),7e3),setTimeout((()=>{this.$router.push("/verificationActive")}),8e3)}},mounted(){this.feePaid()}}),c=o,i=s(1656),r=(0,i.A)(c,n,a,!1,null,null,null),d=r.exports},8653:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT1SURBVHgB7ZvNTttKGIa/OCEIkFDWbHAlNrAp5wY4qcSORQ+QLFg1uYJyrqA5V9ByBU1XSPyfBTskAjdQygIWLOreQQQCJH77va4nSoLteCYzTuL2kUJMHIPfd76Z+ebHKTLM7u6ufX9/n0+n06+fn59tvFKpVI5P2W1fdfhcnc85/Dp5eHj4ls1mTxYXFx0ySIoMsLm5mbcs6y0L+odeCpUChvBb7enp6UuxWKyRZrQZwCWd41Jb5Rt+R12KDsKLjgq/jnRFRtcGCOFc4u+5xHMUAzACEZHJZKrdGtGVAdvb26v89iEu4e2IiFhaWvpCiigZgIbt8fHxMx/mqQ+AERyBb1SiwSJJuNRLHH5fqU/EA/QsXCBfufFdlbxUzgD+BxX+Z597FfIdyHEkfMQ9ylwUuQrwH656LfwgUC0UCuUoX4xkwICJF0QyoaMBAype0NGE0DYA9WmAxYNSpzYhMALQx3Nj95ESAHeRpaBcwdcA9PPo6vq0tVehzoOxv/zyBN8qwOIPEyQe5LzE7QUvDECig8SCkkfeL1FqqQJe6B8m1ABQv7q6elUul+vig5YI4FFdUktfkBsfH3/f/EEjAn6D0he0REEjAlh8vt/EDw0NkQFaoqC5CnwgzczMzLgvFcbGxmh+fl75+jC4oEvi2DUAc3i6Sx83Pj097b5kRUD83NwcjY6OKl0fARuaceAawJmS1nRXiBfIiGgWr3K9BG/xQ1SBPGmiXbwgigg/8TLXy8BjHMxYk4XWX1f4o9GanJwMPB8mIky8gO+TNGLv7+9PWpwizpImeAGEjo+P6ebmJvA7fiZEEX92dkbn5+ekk9vb27zFofCaNHJ9fS1lQq/EA46o2Qy/a4sAgTAhTBhMQJWZmJjoiXjAhW9bppKfKJEwNTXVM/EA2tELGBv2RjEhCNPiARZpYYBNBlExIQ7xHrb0wogKMibEKN4lFgNk4LCkOInFgChdncBQ2hsIDHDIIDLiBTGa4MCAOhlCRbwgDhOwJcfytqBoJ4r4i4sL6bRZJ+6yOhmoAlHT29PTU6Wxgy6wGQuDoW+kEdncXnbsoBOeBjyxOB+vkSaQ26sMbHplArbiWd5ykUMawHDYcZzA82FJThQTNM8HOCsrK24bgLqwR5qAQAhtJ0qGF2aCgQyxhh+uAVwX/ieNtJsgc/N+JphIj3ketIr3Rt65tbX1nTQPjMTcoMrNi8YUVcrA2MApFAqvcJARn3A1qHIdq5BGurlxRMLBwYHbrhigIg4aYwEOiTU2wVhWqIIh8Q7/3SPxS8MA7g0g/hMlHEQ6Wn/xe8tosB+jQDPO3d1dy1aZFgMQBdwj/EfJpdJc+sB39oF7hEPqo62wmmi0/M34TohwI1FOWFWos6Y3fid8DfDC5F9KDi9CXxA4Jba8vIwdohUacKCBQ38t8Dx1IOlbZf9slqaIJHW7fORp8WKxWBqENsGr85HEu98nSbDbkjPGnj0oFUKd72tV9gEqpWWY9fV1m6e/kCzZ1B/UkLsEdXVhdLUOtbGxUUI0UO+MQLIW2s11ouuFOERDNpt95+29syke8Izxp8vLy7Xmfb8qaFuJhBHpdDpvOCLwoGRVh3CBkaXYnZ2dv3lUWaJfAyqbugNPle+xuXvcwB2RZoyvRSMyhoeH8eg89iLNeltyfB+fp1+hjeeC3UfoR0ZGagsLCz/IID8B0nW7L36q8SMAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=322.aea9acbc.js.map