/*! For license information please see 7030.c1e8ec383db89272.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7030],{7030:(e,t,s)=>{s.r(t),s.d(t,{ion_reorder:()=>d,ion_reorder_group:()=>h});var r=s(10467),o=s(54261),i=s(23992),n=s(9483),l=s(20909),c=s(84920),a=s(21086);s(78438),s(28476);const d=class{constructor(e){(0,o.r)(this,e)}onClick(e){const t=this.el.closest("ion-reorder-group");e.preventDefault(),t&&t.disabled||e.stopImmediatePropagation()}render(){const e=(0,n.b)(this);return(0,o.h)(o.f,{key:"663d74e231e3af56b6298ee2539fdac9c8465839",class:e},(0,o.h)("slot",{key:"c7c384ab8c9ca8abdc89cd984a39dfde70e342ca"},(0,o.h)("ion-icon",{key:"c8b6052db03d4b9e33a90e600c20861c73ee73ce",icon:"ios"===e?i.j:i.k,lazy:!1,class:"reorder-icon",part:"icon","aria-hidden":"true"})))}get el(){return(0,o.i)(this)}};d.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:2.125rem;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:1.9375rem;opacity:0.3}"};const h=class{constructor(e){(0,o.r)(this,e),this.ionItemReorder=(0,o.d)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}connectedCallback(){var e=this;return(0,r.A)((function*(){const t=(0,l.f)(e.el);t&&(e.scrollEl=yield(0,l.g)(t)),e.gesture=(yield Promise.resolve().then(s.bind(s,28607))).createGesture({el:e.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:t=>e.canStart(t),onStart:t=>e.onStart(t),onMove:t=>e.onMove(t),onEnd:()=>e.onEnd()}),e.disabledChanged()}))()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(e){return Promise.resolve(this.completeReorder(e))}canStart(e){if(this.selectedItemEl||0!==this.state)return!1;const t=e.event.target.closest("ion-reorder");if(!t)return!1;const s=findReorderItem(t,this.el);return!!s&&(e.data=s,!0)}onStart(e){e.event.preventDefault();const t=this.selectedItemEl=e.data,s=this.cachedHeights;s.length=0;const r=this.el,o=r.children;if(!o||0===o.length)return;let i=0;for(let e=0;e<o.length;e++){const t=o[e];i+=t.offsetHeight,s.push(i),t.$ionIndex=e}const n=r.getBoundingClientRect();if(this.containerTop=n.top,this.containerBottom=n.bottom,this.scrollEl){const e=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=e.top+m,this.scrollElBottom=e.bottom-m}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=indexForItem(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(u),(0,a.a)()}onMove(e){const t=this.selectedItemEl;if(!t)return;const s=this.autoscroll(e.currentY),r=this.containerTop-s,o=Math.max(r,Math.min(e.currentY,this.containerBottom-s)),i=s+o-e.startY,n=this.itemIndexForTop(o-r);if(n!==this.lastToIndex){const e=indexForItem(t);this.lastToIndex=n,(0,a.b)(),this.reorderMove(e,n)}t.style.transform=`translateY(${i}px)`}onEnd(){const e=this.selectedItemEl;if(this.state=2,!e)return this.state=0,void 0;const t=this.lastToIndex,s=indexForItem(e);t===s?this.completeReorder():this.ionItemReorder.emit({from:s,to:t,complete:this.completeReorder.bind(this)}),(0,a.h)()}completeReorder(e){const t=this.selectedItemEl;if(t&&2===this.state){const s=this.el.children,r=s.length,o=this.lastToIndex,i=indexForItem(t);(0,c.r)((()=>{if(o!==i&&(void 0===e||!0===e)){this.el.insertBefore(t,i<o?s[o+1]:s[o])}for(let e=0;e<r;e++)s[e].style.transform=""})),Array.isArray(e)&&(e=reorderArray(e,i,o)),t.style.transition="",t.classList.remove(u),this.selectedItemEl=void 0,this.state=0}return e}itemIndexForTop(e){const t=this.cachedHeights;for(let s=0;s<t.length;s++)if(t[s]>e)return s;return t.length-1}reorderMove(e,t){const s=this.selectedItemHeight,r=this.el.children;for(let o=0;o<r.length;o++){let i="";o>e&&o<=t?i=`translateY(${-s}px)`:o<e&&o>=t&&(i=`translateY(${s}px)`),r[o].style.transform=i}}autoscroll(e){if(!this.scrollEl)return 0;let t=0;return e<this.scrollElTop?t=-p:e>this.scrollElBottom&&(t=p),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial}render(){const e=(0,n.b)(this);return(0,o.h)(o.f,{key:"491f3e5843cf728ff4589e58bd86b8ce6709b293",class:{[e]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return(0,o.i)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},indexForItem=e=>e.$ionIndex,findReorderItem=(e,t)=>{let s;for(;e;){if(s=e.parentElement,s===t)return e;e=s}},m=60,p=10,u="reorder-selected",reorderArray=(e,t,s)=>{const r=e[t];return e.splice(t,1),e.splice(s,0,r),e.slice()};h.style=".reorder-list-active>*{display:block;-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);