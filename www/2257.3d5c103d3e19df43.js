"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2257],{42257:(e,n,o)=>{o.r(n),o.d(n,{CoreViewerImageComponent:()=>w});var t=o(79555),i=o(76125),r=o(14678),a=o(3353),s=o(54438),m=o(60177),l=o(10892),c=o(86198),p=o(88246),_=o(43570),g=o(73465),C=o(73955);const u=["swiperRef"];function CoreViewerImageComponent_Conditional_5_Template(e,n){if(1&e&&s.nrm(0,"img",2),2&e){const e=s.XpG();s.Y8G("src",e.dataUrl,s.B4B)("alt",e.title)}}function CoreViewerImageComponent_Conditional_6_Template(e,n){if(1&e&&s.nrm(0,"img",8),2&e){const e=s.XpG();s.Y8G("url",e.image)("alt",e.title)("component",e.component)("componentId",e.componentId)}}function CoreViewerImageComponent_ion_col_14_Template(e,n){if(1&e){const e=s.RV6();s.j41(0,"ion-col",4)(1,"ion-button",5),s.nI1(2,"translate"),s.bIt("click",(function CoreViewerImageComponent_ion_col_14_Template_ion_button_click_1_listener(){s.eBV(e);const n=s.XpG();return s.Njj(n.zoom(!1))})),s.nrm(3,"ion-icon",9),s.k0s()()}2&e&&(s.R7$(),s.Y8G("ariaLabel",s.bMT(2,1,"core.zoomout")))}function CoreViewerImageComponent_ion_col_15_Template(e,n){if(1&e){const e=s.RV6();s.j41(0,"ion-col",4)(1,"ion-button",5),s.nI1(2,"translate"),s.bIt("click",(function CoreViewerImageComponent_ion_col_15_Template_ion_button_click_1_listener(){s.eBV(e);const n=s.XpG();return s.Njj(n.zoom(!0))})),s.nrm(3,"ion-icon",10),s.k0s()()}2&e&&(s.R7$(),s.Y8G("ariaLabel",s.bMT(2,1,"core.zoomin")))}let w=(()=>{var e;class CoreViewerImageComponent{constructor(){this.title="",this.image="",this.swiperOpts={freeMode:!0,slidesPerView:1,centerInsufficientSlides:!0,centeredSlides:!0,zoom:{maxRatio:CoreViewerImageComponent.MAX_RATIO,minRatio:CoreViewerImageComponent.MIN_RATIO,toggle:!0}}}set swiperRef(e){setTimeout((()=>{const n=r.O.initSwiperIfAvailable(this.swiper,e,this.swiperOpts);n&&(this.swiper=n,this.swiper.zoom.enable())}))}ngOnInit(){this.title=this.title||t.HT.instant("core.imageviewer"),this.image.startsWith("data:")&&(this.dataUrl=t.up.bypassSecurityTrustResourceUrl(this.image))}closeModal(){t.W3.dismiss()}zoom(e=!0){if(!this.swiper)return;let n=this.swiper.zoom.scale;e?n*=2:n/=2,n=i.o.clamp(n,CoreViewerImageComponent.MIN_RATIO,CoreViewerImageComponent.MAX_RATIO),this.swiper.zoom.in(n)}}return(e=CoreViewerImageComponent).MAX_RATIO=8,e.MIN_RATIO=.5,e.ɵfac=function CoreViewerImageComponent_Factory(n){return new(n||e)},e.ɵcmp=s.VBU({type:e,selectors:[["core-viewer-image"]],viewQuery:function CoreViewerImageComponent_Query(e,n){if(1&e&&s.GBs(u,5),2&e){let e;s.mGM(e=s.lsd())&&(n.swiperRef=e.first)}},inputs:{title:"title",image:"image",component:"component",componentId:"componentId"},standalone:!0,features:[s.aNF],decls:16,vars:6,consts:[["swiperRef",""],[1,"swiper-zoom-container"],[3,"src","alt"],[1,"ion-justify-content-between","ion-align-items-center","ion-no-padding"],["size","auto"],["fill","clear",3,"click","ariaLabel"],["name","fas-xmark","slot","icon-only","aria-hidden","true"],["size","auto",4,"ngIf"],["core-external-content","",3,"url","alt","component","componentId"],["name","fas-magnifying-glass-minus","slot","icon-only","aria-hidden","true"],["name","fas-magnifying-glass-plus","slot","icon-only","aria-hidden","true"]],template:function CoreViewerImageComponent_Template(e,n){if(1&e){const e=s.RV6();s.j41(0,"ion-content")(1,"swiper-container",null,0)(3,"swiper-slide")(4,"div",1),s.DNE(5,CoreViewerImageComponent_Conditional_5_Template,1,2,"img",2)(6,CoreViewerImageComponent_Conditional_6_Template,1,4),s.k0s()()()(),s.j41(7,"ion-footer")(8,"ion-row",3)(9,"ion-col",4)(10,"ion-button",5),s.nI1(11,"translate"),s.bIt("click",(function CoreViewerImageComponent_Template_ion_button_click_10_listener(){return s.eBV(e),s.Njj(n.closeModal())})),s.nrm(12,"ion-icon",6),s.k0s()(),s.nrm(13,"ion-col"),s.DNE(14,CoreViewerImageComponent_ion_col_14_Template,4,3,"ion-col",7)(15,CoreViewerImageComponent_ion_col_15_Template,4,3,"ion-col",7),s.k0s()()}2&e&&(s.R7$(5),s.vxM(5,n.dataUrl?5:6),s.R7$(5),s.Y8G("ariaLabel",s.bMT(11,4,"core.close")),s.R7$(4),s.Y8G("ngIf",n.swiper),s.R7$(),s.Y8G("ngIf",n.swiper))},dependencies:[a.n,m.bT,l.l,c.t,p.i,_.T,g.Jm,g.hU,g.W9,g.M0,g.iq,g.ln,C.D9],styles:["swiper-container[_ngcontent-%COMP%]{height:100%}img[_ngcontent-%COMP%]{max-width:100%}ion-footer[_ngcontent-%COMP%]{background:var(--contrast-background)}"]}),CoreViewerImageComponent})()}}]);