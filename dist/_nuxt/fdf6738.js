(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{253:function(t,e,n){"use strict";var r=n(255),o=n.n(r);e.a=function(){return o.a.create({baseURL:"http://localhost:8081"})}},256:function(t,e,n){"use strict";var r=n(253);e.a={fetchItems:function(){return Object(r.a)().get("items")},getItem:function(t){return Object(r.a)().get("item/"+t.id)},addItem:function(t){return Object(r.a)().post("items",t)},updateItem:function(t){return Object(r.a)().put("items/"+t.id,t)},deleteItem:function(t){return Object(r.a)().delete("items/"+t)}}},304:function(t,e,n){var content=n(333);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("778d041a",content,!0,{sourceMap:!1})},332:function(t,e,n){"use strict";n(304)},333:function(t,e,n){(e=n(52)(!1)).push([t.i,".table-wrap{margin-top:100px;margin-left:25%;width:50%;text-align:center}.items{margin-top:50px}",""]),t.exports=e},350:function(t,e,n){"use strict";n.r(e);n(141),n(197),n(142),n(65);var r=n(24),o=n(256),c=n(261),l=n.n(c);window.Swal=l.a;var d={name:"items",data:function(){return{fields:["title","description","action"],items:[],infoModal:{id:"info-modal",title:"",description:""}}},mounted:function(){this.getItems()},methods:{deleteIt:function(t){var e=this;l.a.fire({title:"Etes vous certain?",text:"Cette opération est irreversible!",icon:"warning",showCancelButton:!0,cancelButtonText:"Annulé",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, supprimer!"}).then((function(n){n.isConfirmed&&(e.deleteItem(t),l.a.fire("Supprimé!","Enregistrement supprimé.","success"))}))},getItems:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.fetchItems();case 2:n=e.sent,t.items=n.data.items;case 4:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.item._id,e.items.splice(t.index,1),n.next=4,o.a.deleteItem(r);case 4:case"end":return n.stop()}}),n)})))()},addItem:function(){this.$router.push("/newItem")},editItem:function(t){var e=t.item._id;this.$router.push({name:"EditItem",params:{id:e}})},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},info:function(t,e,button){this.infoModal.title="Détail de "+t.title,this.infoModal.content=t.description,this.$root.$emit("bv::show::modal",this.infoModal.id,button)}}},m=(n(332),n(42)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"items"},[t._m(0),t._v(" "),t.items.length>0?n("div",{staticClass:"table-wrap"},[n("b-table",{staticClass:"text-light",attrs:{striped:"",hover:"",items:t.items,fields:t.fields,bordered:"","head-variant":"dark"},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2 col-lg-12"},[n("b-button",{staticClass:"mr-1",attrs:{variant:"primary"},on:{click:function(n){return t.info(e.item,e.index,n.target)}}},[t._v("\n          Détails\n        ")]),t._v(" "),n("b-button",{attrs:{variant:"primary"},on:{click:function(n){return t.editItem(e)}}},[t._v("Edit")]),t._v(" "),n("b-button",{attrs:{variant:"primary"},on:{click:function(n){return t.deleteIt(e)}}},[t._v("Supp")])],1)])]}}],null,!1,1344803860)}),t._v(" "),n("div",[n("b-button",{attrs:{variant:"primary"},on:{click:t.addItem}},[t._v("Ajouter un item")])],1)],1):n("div",[t._v("\n      There are no item.. Lets add one now "),n("br"),n("br"),t._v(" "),n("nuxt-link",{staticClass:"nav-link",attrs:{to:"NewItem"}},[t._v("Add item")])],1),t._v(" "),n("div",[n("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"ok-only":""},on:{hide:t.resetInfoModal}},[n("pre",[t._v(t._s(t.infoModal.content))])])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h1",[this._v("Items")])])}],!1,null,null,null);e.default=component.exports}}]);