/*! For license information please see 7428.c4e22822dbfe10a9.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7428],{67428:(e,t,i)=>{i.r(t),i.d(t,{ion_datetime_button:()=>c});var a=i(10467),n=i(54261),o=i(84920),r=i(74929),s=i(80333),d=i(9483),l=i(33761);const c=class{constructor(e){var t=this;(0,n.r)(this,e),this.datetimeEl=null,this.overlayEl=null,this.getParsedDateValues=e=>null==e?[]:Array.isArray(e)?e:[e],this.setDateTimeText=()=>{var e,t,i,a,n;const{datetimeEl:o,datetimePresentation:s}=this;if(!o)return;const{value:d,locale:c,formatOptions:m,hourCycle:p,preferWheel:h,multiple:u,titleSelectedDatesFormatter:b}=o,f=this.getParsedDateValues(d),v=(0,l.s)(f.length>0?f:[(0,l.x)()]);if(!v)return;const x=v[0],g=(0,l.L)(c,p);switch(this.dateText=this.timeText=void 0,s){case"date-time":case"time-date":const o=(0,l.N)(c,x,null!==(e=null==m?void 0:m.date)&&void 0!==e?e:{month:"short",day:"numeric",year:"numeric"}),s=(0,l.M)(c,x,g,null==m?void 0:m.time);h?this.dateText=`${o} ${s}`:(this.dateText=o,this.timeText=s);break;case"date":if(u&&1!==f.length){let e=`${f.length} days`;if(void 0!==b)try{e=b(f)}catch(e){(0,r.a)("Exception in provided `titleSelectedDatesFormatter`: ",e)}this.dateText=e}else this.dateText=(0,l.N)(c,x,null!==(t=null==m?void 0:m.date)&&void 0!==t?t:{month:"short",day:"numeric",year:"numeric"});break;case"time":this.timeText=(0,l.M)(c,x,g,null==m?void 0:m.time);break;case"month-year":this.dateText=(0,l.N)(c,x,null!==(i=null==m?void 0:m.date)&&void 0!==i?i:{month:"long",year:"numeric"});break;case"month":this.dateText=(0,l.N)(c,x,null!==(a=null==m?void 0:m.time)&&void 0!==a?a:{month:"long"});break;case"year":this.dateText=(0,l.N)(c,x,null!==(n=null==m?void 0:m.time)&&void 0!==n?n:{year:"numeric"})}},this.waitForDatetimeChanges=(0,a.A)((function*(){const{datetimeEl:e}=t;return e?new Promise((t=>{(0,o.a)(e,"ionRender",t,{once:!0})})):Promise.resolve()})),this.handleDateClick=function(){var e=(0,a.A)((function*(e){const{datetimeEl:i,datetimePresentation:a}=t;if(!i)return;let n=!1;switch(a){case"date-time":case"time-date":!i.preferWheel&&"date"!==i.presentation&&(i.presentation="date",n=!0)}t.selectedButton="date",t.presentOverlay(e,n,t.dateTargetEl)}));return function(t){return e.apply(this,arguments)}}(),this.handleTimeClick=e=>{const{datetimeEl:t,datetimePresentation:i}=this;if(!t)return;let a=!1;switch(i){case"date-time":case"time-date":"time"!==t.presentation&&(t.presentation="time",a=!0)}this.selectedButton="time",this.presentOverlay(e,a,this.timeTargetEl)},this.presentOverlay=function(){var e=(0,a.A)((function*(e,i,a){const{overlayEl:n}=t;n&&("ION-POPOVER"===n.tagName?(i&&(yield t.waitForDatetimeChanges()),n.present(Object.assign(Object.assign({},e),{detail:{ionShadowTarget:a}}))):n.present())}));return function(t,i,a){return e.apply(this,arguments)}}(),this.datetimePresentation="date-time",this.dateText=void 0,this.timeText=void 0,this.datetimeActive=!1,this.selectedButton=void 0,this.color="primary",this.disabled=!1,this.datetime=void 0}componentWillLoad(){var e=this;return(0,a.A)((function*(){const{datetime:t}=e;if(!t)return(0,r.a)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",e.el),void 0;const i=e.datetimeEl=document.getElementById(t);if(!i)return(0,r.a)(`No ion-datetime instance found for ID '${t}'.`,e.el),void 0;if("ION-DATETIME"!==i.tagName)return(0,r.a)(`Expected an ion-datetime instance for ID '${t}' but received '${i.tagName.toLowerCase()}' instead.`,i),void 0;new IntersectionObserver((t=>{e.datetimeActive=t[0].isIntersecting}),{threshold:.01}).observe(i);const a=e.overlayEl=i.closest("ion-modal, ion-popover");a&&a.classList.add("ion-datetime-button-overlay"),(0,o.c)(i,(()=>{const t=e.datetimePresentation=i.presentation||"date-time";switch(e.setDateTimeText(),(0,o.a)(i,"ionValueChange",e.setDateTimeText),t){case"date-time":case"date":case"month-year":case"month":case"year":e.selectedButton="date";break;case"time-date":case"time":e.selectedButton="time"}}))}))()}render(){const{color:e,dateText:t,timeText:i,selectedButton:a,datetimeActive:o,disabled:r}=this,l=(0,d.b)(this);return(0,n.h)(n.f,{key:"0be955404133adbb31ae16a6599014bb29765f19",class:(0,s.c)(e,{[l]:!0,[`${a}-active`]:o,"datetime-button-disabled":r})},t&&(0,n.h)("button",{key:"812dcb50b17768cc13a5cfa0bcce8b113cee0f09",class:"ion-activatable",id:"date-button","aria-expanded":o?"true":"false",onClick:this.handleDateClick,disabled:r,part:"native",ref:e=>this.dateTargetEl=e},(0,n.h)("slot",{key:"46930c740a32a78502df9e651f9bd5914d6a9fea",name:"date-target"},t),"md"===l&&(0,n.h)("ion-ripple-effect",{key:"0602999cc8435dc37aa22da7f5531bc8cb71e1b4"})),i&&(0,n.h)("button",{key:"ecdd21da5181ecbdce03209f9f6673b7dcbc1f78",class:"ion-activatable",id:"time-button","aria-expanded":o?"true":"false",onClick:this.handleTimeClick,disabled:r,part:"native",ref:e=>this.timeTargetEl=e},(0,n.h)("slot",{key:"b5b093b5166d12d11e27360788edaac916d44390",name:"time-target"},i),"md"===l&&(0,n.h)("ion-ripple-effect",{key:"70bb3a04f4748d13233eeb257503968dbd1161a9"})))}get el(){return(0,n.i)(this)}};c.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:7px;padding-bottom:7px}:host button.ion-activated{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}",md:":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}"}}}]);