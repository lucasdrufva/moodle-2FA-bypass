"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4399],{34399:(e,i,t)=>{t.r(i),t.d(i,{CoreSharedFilesListModalComponent:()=>u});var a=t(3353),n=t(91416),o=t(87809),s=t(79555),r=t(98028),l=t(54438),c=t(86198),d=t(88246),h=t(43570),p=t(73465),m=t(73955),k=t(87207);let u=(()=>{var e;class CoreSharedFilesListModalComponent{constructor(){this.manage=!1,this.pick=!1,this.hideSitePicker=!1}ngOnInit(){this.calculateTitle(this.path)}calculateTitle(e){this.title=e?o.H.getFileAndDirectoryFromPath(e).name:s.HT.instant("core.sharedfiles.sharedfiles")}closeModal(){s.W3.dismiss()}filePicked(e){s.W3.dismiss(e)}}return(e=CoreSharedFilesListModalComponent).ɵfac=function CoreSharedFilesListModalComponent_Factory(i){return new(i||e)},e.ɵcmp=l.VBU({type:e,selectors:[["core-shared-files-list-modal"]],inputs:{siteId:"siteId",mimetypes:"mimetypes",manage:[l.Mj6.HasDecoratorInputTransform,"manage","manage",n.G],pick:[l.Mj6.HasDecoratorInputTransform,"pick","pick",n.G],path:"path",hideSitePicker:[l.Mj6.HasDecoratorInputTransform,"hideSitePicker","hideSitePicker",n.G]},standalone:!0,features:[l.GFd,l.aNF],decls:11,vars:11,consts:[["slot","end"],["fill","clear",3,"click","ariaLabel"],["name","fas-xmark","slot","icon-only","aria-hidden","true"],[3,"onPathChanged","onFilePicked","siteId","mimetypes","isModal","manage","pick","path","showSitePicker"]],template:function CoreSharedFilesListModalComponent_Template(e,i){1&e&&(l.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title")(3,"h1"),l.EFF(4),l.k0s()(),l.j41(5,"ion-buttons",0)(6,"ion-button",1),l.nI1(7,"translate"),l.bIt("click",(function CoreSharedFilesListModalComponent_Template_ion_button_click_6_listener(){return i.closeModal()})),l.nrm(8,"ion-icon",2),l.k0s()()()(),l.j41(9,"ion-content")(10,"core-shared-files-list",3),l.bIt("onPathChanged",(function CoreSharedFilesListModalComponent_Template_core_shared_files_list_onPathChanged_10_listener(e){return i.calculateTitle(e)}))("onFilePicked",(function CoreSharedFilesListModalComponent_Template_core_shared_files_list_onFilePicked_10_listener(e){return i.filePicked(e)})),l.k0s()()),2&e&&(l.R7$(4),l.JRh(i.title),l.R7$(2),l.Y8G("ariaLabel",l.bMT(7,9,"core.close")),l.R7$(4),l.Y8G("siteId",i.siteId)("mimetypes",i.mimetypes)("isModal",!0)("manage",i.manage)("pick",i.pick)("path",i.path)("showSitePicker",!i.hideSitePicker))},dependencies:[a.n,c.t,d.i,h.T,p.Jm,p.QW,p.W9,p.eU,p.iq,p.BC,p.ai,m.D9,r.a,k.$],encapsulation:2}),CoreSharedFilesListModalComponent})()}}]);