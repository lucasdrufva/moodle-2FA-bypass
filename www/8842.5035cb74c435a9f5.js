"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8842],{38842:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var n=a(3353),o=a(98833),i=a(21182),s=a(6007),d=a(10467),r=a(89417),l=a(75629),c=a(49446),m=a(16082),g=a(15324),u=a(94455),p=a(52749),h=a(89911),f=a(75383),y=a(43411),_=a(79555),M=a(49882),v=a(63153),E=a(21113),I=a(18674),G=a(20119),A=a(22693),C=a(59829),k=a(23780),F=a(54438),b=a(60177),T=a(95638),D=a(64422),R=a(43952),w=a(58197),P=a(88246),x=a(43570),$=a(73465),N=a(41450),j=a(73955);const O=["editFormEl"],_c1=e=>({header:e});function AddonModGlossaryEditPage_h1_6_Template(e,t){if(1&e&&(F.j41(0,"h1"),F.nrm(1,"core-format-text",5),F.k0s()),2&e){const e=F.XpG();F.R7$(),F.Y8G("text",e.glossary.name)("contextInstanceId",e.cmId)("courseId",e.courseId)}}function AddonModGlossaryEditPage_form_9_ion_item_12_ion_select_option_6_Template(e,t){if(1&e&&(F.j41(0,"ion-select-option",13),F.EFF(1),F.k0s()),2&e){const e=t.$implicit;F.Y8G("value",e.id),F.R7$(),F.SpI(" ",e.name," ")}}function AddonModGlossaryEditPage_form_9_ion_item_12_Template(e,t){if(1&e){const e=F.RV6();F.j41(0,"ion-item")(1,"ion-select",11),F.nI1(2,"translate"),F.nI1(3,"translate"),F.nI1(4,"translate"),F.nI1(5,"translate"),F.mxI("ngModelChange",(function AddonModGlossaryEditPage_form_9_ion_item_12_Template_ion_select_ngModelChange_1_listener(t){F.eBV(e);const a=F.XpG(2);return F.DH7(a.data.categories,t)||(a.data.categories=t),F.Njj(t)})),F.DNE(6,AddonModGlossaryEditPage_form_9_ion_item_12_ion_select_option_6_Template,2,2,"ion-select-option",12),F.k0s()()}if(2&e){const e=F.XpG(2);F.R7$(),F.R50("ngModel",e.data.categories),F.Y8G("placeholder",F.bMT(2,6,"addon.mod_glossary.categories"))("cancelText",F.bMT(3,8,"core.cancel"))("interfaceOptions",F.eq3(14,_c1,F.bMT(4,10,"addon.mod_glossary.categories")))("label",F.bMT(5,12,"addon.mod_glossary.categories")),F.R7$(5),F.Y8G("ngForOf",e.categories)}}function AddonModGlossaryEditPage_form_9_ion_item_13_Template(e,t){if(1&e){const e=F.RV6();F.j41(0,"ion-item")(1,"ion-textarea",14),F.nI1(2,"translate"),F.mxI("ngModelChange",(function AddonModGlossaryEditPage_form_9_ion_item_13_Template_ion_textarea_ngModelChange_1_listener(t){F.eBV(e);const a=F.XpG(2);return F.DH7(a.data.aliases,t)||(a.data.aliases=t),F.Njj(t)})),F.k0s()()}if(2&e){const e=F.XpG(2);F.R7$(),F.R50("ngModel",e.data.aliases),F.Y8G("core-auto-rows",e.data.aliases)("label",F.bMT(2,3,"addon.mod_glossary.aliases"))}}function AddonModGlossaryEditPage_form_9_ng_container_16_Template(e,t){if(1&e){const e=F.RV6();F.qex(0),F.j41(1,"ion-item-divider")(2,"ion-label")(3,"h2"),F.EFF(4),F.nI1(5,"translate"),F.k0s()()(),F.j41(6,"ion-item",15)(7,"ion-toggle",16),F.mxI("ngModelChange",(function AddonModGlossaryEditPage_form_9_ng_container_16_Template_ion_toggle_ngModelChange_7_listener(t){F.eBV(e);const a=F.XpG(2);return F.DH7(a.data.usedynalink,t)||(a.data.usedynalink=t),F.Njj(t)})),F.EFF(8),F.nI1(9,"translate"),F.k0s()(),F.j41(10,"ion-item",15)(11,"ion-toggle",17),F.mxI("ngModelChange",(function AddonModGlossaryEditPage_form_9_ng_container_16_Template_ion_toggle_ngModelChange_11_listener(t){F.eBV(e);const a=F.XpG(2);return F.DH7(a.data.casesensitive,t)||(a.data.casesensitive=t),F.Njj(t)})),F.EFF(12),F.nI1(13,"translate"),F.k0s()(),F.j41(14,"ion-item",15)(15,"ion-toggle",18),F.mxI("ngModelChange",(function AddonModGlossaryEditPage_form_9_ng_container_16_Template_ion_toggle_ngModelChange_15_listener(t){F.eBV(e);const a=F.XpG(2);return F.DH7(a.data.fullmatch,t)||(a.data.fullmatch=t),F.Njj(t)})),F.EFF(16),F.nI1(17,"translate"),F.k0s()(),F.bVm()}if(2&e){const e=F.XpG(2);F.R7$(4),F.JRh(F.bMT(5,9,"addon.mod_glossary.linking")),F.R7$(3),F.R50("ngModel",e.data.usedynalink),F.R7$(),F.SpI(" ",F.bMT(9,11,"addon.mod_glossary.entryusedynalink")," "),F.R7$(3),F.Y8G("disabled",!e.data.usedynalink),F.R50("ngModel",e.data.casesensitive),F.R7$(),F.SpI(" ",F.bMT(13,13,"addon.mod_glossary.casesensitive")," "),F.R7$(3),F.Y8G("disabled",!e.data.usedynalink),F.R50("ngModel",e.data.fullmatch),F.R7$(),F.SpI(" ",F.bMT(17,15,"addon.mod_glossary.fullmatch")," ")}}function AddonModGlossaryEditPage_form_9_Template(e,t){if(1&e){const e=F.RV6();F.j41(0,"form",null,0)(2,"ion-item")(3,"ion-input",6),F.nI1(4,"translate"),F.nI1(5,"translate"),F.mxI("ngModelChange",(function AddonModGlossaryEditPage_form_9_Template_ion_input_ngModelChange_3_listener(t){F.eBV(e);const a=F.XpG();return F.DH7(a.data.concept,t)||(a.data.concept=t),F.Njj(t)})),F.k0s()(),F.j41(6,"ion-item")(7,"ion-label",7),F.EFF(8),F.nI1(9,"translate"),F.k0s(),F.j41(10,"core-rich-text-editor",8),F.nI1(11,"translate"),F.bIt("contentChanged",(function AddonModGlossaryEditPage_form_9_Template_core_rich_text_editor_contentChanged_10_listener(t){F.eBV(e);const a=F.XpG();return F.Njj(a.onDefinitionChange(t))})),F.k0s()(),F.DNE(12,AddonModGlossaryEditPage_form_9_ion_item_12_Template,7,16,"ion-item",3)(13,AddonModGlossaryEditPage_form_9_ion_item_13_Template,3,5,"ion-item",3),F.nrm(14,"core-attachments",9),F.nI1(15,"translate"),F.DNE(16,AddonModGlossaryEditPage_form_9_ng_container_16_Template,18,17,"ng-container",3),F.j41(17,"ion-button",10),F.bIt("click",(function AddonModGlossaryEditPage_form_9_Template_ion_button_click_17_listener(){F.eBV(e);const t=F.XpG();return F.Njj(t.save())})),F.EFF(18),F.nI1(19,"translate"),F.k0s()()}if(2&e){const e=F.XpG();F.R7$(3),F.Y8G("placeholder",F.bMT(4,22,"addon.mod_glossary.concept")),F.R50("ngModel",e.data.concept),F.Y8G("label",F.bMT(5,24,"addon.mod_glossary.concept")),F.R7$(5),F.JRh(F.bMT(9,26,"addon.mod_glossary.definition")),F.R7$(2),F.Y8G("control",e.definitionControl)("placeholder",F.bMT(11,28,"addon.mod_glossary.definition"))("component",e.component)("componentId",e.cmId)("autoSave",!0)("contextInstanceId",e.cmId)("draftExtraParams",e.editorExtraParams),F.R7$(2),F.Y8G("ngIf",e.categories.length>0),F.R7$(),F.Y8G("ngIf",e.showAliases),F.R7$(),F.Y8G("files",e.data.attachments)("component",e.component)("componentId",e.glossary.coursemodule)("allowOffline",!0)("courseId",e.courseId)("title",F.bMT(15,30,"addon.mod_glossary.attachment")),F.R7$(2),F.Y8G("ngIf",e.glossary.usedynalink),F.R7$(),F.Y8G("disabled",!e.data.concept||!e.data.definition),F.R7$(),F.SpI(" ",F.bMT(19,32,"core.save")," ")}}let S=(()=>{var e;class AddonModGlossaryEditPage{constructor(e){this.route=e,this.component=C.XG,this.loaded=!1,this.definitionControl=new r.MJ(null),this.categories=[],this.showAliases=!0,this.editorExtraParams={},this.data={concept:"",definition:"",timecreated:0,attachments:[],categories:[],aliases:"",usedynalink:!1,casesensitive:!1,fullmatch:!1},this.isDestroyed=!1,this.saved=!1}ngOnInit(){var e=this;return(0,d.A)((function*(){try{const t=g.CoreNavigator.getRouteParam("entrySlug");if(e.cmId=g.CoreNavigator.getRequiredRouteNumberParam("cmId"),e.courseId=g.CoreNavigator.getRequiredRouteNumberParam("courseId"),null!=t&&t.startsWith("new-")){const a=Number(t.slice(4));e.editorExtraParams.timecreated=a,e.handler=new AddonModGlossaryOfflineFormHandler(e,a)}else if(t){const{entry:a}=yield E.$.getEntry(Number(t));e.entry=a,e.editorExtraParams.timecreated=a.timecreated,e.handler=new AddonModGlossaryOnlineFormHandler(e,a)}else e.handler=new AddonModGlossaryNewFormHandler(e)}catch(e){return h.CoreDomUtils.showErrorModal(e),g.CoreNavigator.back(),void 0}e.fetchData()}))()}fetchData(){var e=this;return(0,d.A)((function*(){try{if(e.glossary=yield E.$.getGlossary(e.courseId,e.cmId),yield e.handler.loadData(e.glossary),e.loaded=!0,e.handler instanceof AddonModGlossaryOfflineFormHandler)return;A.OF.logEvent({type:A.qr.VIEW_ITEM,ws:"mod_glossary_get_glossaries_by_courses",name:e.glossary.name,data:{id:e.glossary.id,category:"glossary"},url:"/mod/glossary/edit.php"+(e.entry?`?cmid=${e.cmId}&id=${e.entry.id}`:"")})}catch(e){h.CoreDomUtils.showErrorModalDefault(e,"addon.mod_glossary.errorloadingglossary",!0),g.CoreNavigator.back()}}))()}resetForm(){this.originalData=void 0,this.data.concept="",this.data.definition="",this.data.timecreated=0,this.data.categories=[],this.data.aliases="",this.data.usedynalink=!1,this.data.casesensitive=!1,this.data.fullmatch=!1,this.data.attachments.length=0,this.definitionControl.setValue("")}onDefinitionChange(e){this.data.definition=null!=e?e:""}canLeave(){var e=this;return(0,d.A)((function*(){return e.saved||(e.hasDataChanged()&&(yield h.CoreDomUtils.showConfirm(_.HT.instant("core.confirmcanceledit"))),m.CoreFileUploader.clearTmpFiles(e.data.attachments),v.R.triggerFormCancelledEvent(e.formElement,p.CoreSites.getCurrentSiteId())),!0}))()}save(){var e=this;return(0,d.A)((function*(){if(!e.data.concept||!e.data.definition)return h.CoreDomUtils.showErrorModal("addon.mod_glossary.fillfields",!0),void 0;if(!e.glossary)return;const t=yield k.CoreLoadings.show("core.sending",!0);try{const t=yield e.handler.save(e.glossary);e.saved=!0,v.R.triggerFormSubmittedEvent(e.formElement,t,p.CoreSites.getCurrentSiteId()),g.CoreNavigator.back()}catch(e){h.CoreDomUtils.showErrorModalDefault(e,"addon.mod_glossary.cannoteditentry",!0)}finally{t.dismiss()}}))()}hasDataChanged(){return this.originalData&&void 0!==this.originalData.concept?this.originalData.definition!=this.data.definition||this.originalData.concept!=this.data.concept||m.CoreFileUploader.areFileListDifferent(this.data.attachments,this.originalData.attachments):!!(this.data.definition||this.data.concept||this.data.attachments.length>0)}}return(e=AddonModGlossaryEditPage).ɵfac=function AddonModGlossaryEditPage_Factory(t){return new(t||e)(F.rXU(i.nX))},e.ɵcmp=F.VBU({type:e,selectors:[["page-addon-mod-glossary-edit"]],viewQuery:function AddonModGlossaryEditPage_Query(e,t){if(1&e&&F.GBs(O,5),2&e){let e;F.mGM(e=F.lsd())&&(t.formElement=e.first)}},decls:10,vars:6,consts:[["editFormEl",""],["slot","start"],[3,"text"],[4,"ngIf"],[3,"hideUntil"],["contextLevel","module",3,"text","contextInstanceId","courseId"],["labelPlacement","stacked","type","text","name","concept",3,"ngModelChange","placeholder","ngModel","label"],["position","stacked"],["name","addon_mod_glossary_edit","contextLevel","module","elementId","definition_editor",3,"contentChanged","control","placeholder","component","componentId","autoSave","contextInstanceId","draftExtraParams"],[3,"files","component","componentId","allowOffline","courseId","title"],["expand","block",1,"ion-margin",3,"click","disabled"],["labelPlacement","stacked","multiple","true","interface","action-sheet","name","categories",3,"ngModelChange","ngModel","placeholder","cancelText","interfaceOptions","label"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["labelPlacement","stacked","rows","1","name","aliases",3,"ngModelChange","ngModel","core-auto-rows","label"],[1,"ion-text-wrap"],["name","usedynalink",3,"ngModelChange","ngModel"],["name","casesensitive",3,"ngModelChange","disabled","ngModel"],["name","fullmatch",3,"ngModelChange","disabled","ngModel"]],template:function AddonModGlossaryEditPage_Template(e,t){1&e&&(F.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),F.nrm(3,"ion-back-button",2),F.nI1(4,"translate"),F.k0s(),F.j41(5,"ion-title"),F.DNE(6,AddonModGlossaryEditPage_h1_6_Template,2,3,"h1",3),F.k0s()()(),F.j41(7,"ion-content")(8,"core-loading",4),F.DNE(9,AddonModGlossaryEditPage_form_9_Template,20,34,"form",3),F.k0s()()),2&e&&(F.R7$(3),F.Y8G("text",F.bMT(4,4,"core.back")),F.R7$(3),F.Y8G("ngIf",t.glossary),F.R7$(2),F.Y8G("hideUntil",t.loaded),F.R7$(),F.Y8G("ngIf",t.glossary))},dependencies:[b.Sq,b.bT,T.V,D.R,R.T,w.B,P.i,x.T,r.qT,r.BC,r.cb,r.vS,r.cV,$.Jm,$.QW,$.W9,$.eU,$.$w,$.uz,$.Dg,$.he,$.Nm,$.Ip,$.nc,$.BC,$.BY,$.ai,$.hB,$.Je,$.Gw,$.el,N.u,j.D9],encapsulation:2}),AddonModGlossaryEditPage})();class AddonModGlossaryFormHandler{constructor(e){this.page=e}loadCategories(e){var t=this;return(0,d.A)((function*(){t.page.categories=yield E.$.getAllCategories(e.id,{cmId:t.page.cmId})}))()}uploadAttachments(e){var t=this;return(0,d.A)((function*(){const a=t.page.data;return yield m.CoreFileUploader.uploadOrReuploadFiles(a.attachments,C.XG,e.id)}))()}storeAttachments(e,t){var a=this;return(0,d.A)((function*(){const n=a.page.data;return yield I.n.storeFiles(e.id,n.concept,t,n.attachments)}))()}checkDuplicates(e){var t=this;return(0,d.A)((function*(){if(e.allowduplicatedentries)return;const a=t.page.data;if(yield E.$.isConceptUsed(e.id,a.concept,{timeCreated:a.timecreated,cmId:t.page.cmId}))throw new l.CoreError(_.HT.instant("addon.mod_glossary.errconceptalreadyexists"))}))()}getSaveOptions(e){const t=this.page.data,a={};return this.page.showAliases&&(a.aliases=t.aliases),this.page.categories.length>0&&(a.categories=t.categories.join(",")),e.usedynalink&&(a.usedynalink=t.usedynalink?1:0,t.usedynalink&&(a.casesensitive=t.casesensitive?1:0,a.fullmatch=t.fullmatch?1:0)),a}}class AddonModGlossaryOfflineFormHandler extends AddonModGlossaryFormHandler{constructor(e,t){super(e),this.timecreated=t}loadData(e){var t=this;return(0,d.A)((function*(){var a;const n=t.page.data,o=yield G.e.getOfflineEntry(e.id,t.timecreated);var i,s,d;(n.concept=o.concept||"",n.definition=o.definition||"",n.timecreated=o.timecreated,o.options)&&(n.categories=(null!==(i=null===(s=o.options.categories)||void 0===s?void 0:s.split(","))&&void 0!==i?i:[]).map((e=>Number(e))),n.aliases=null!==(d=o.options.aliases)&&void 0!==d?d:"",n.usedynalink=!!o.options.usedynalink,n.usedynalink&&(n.casesensitive=!!o.options.casesensitive,n.fullmatch=!!o.options.fullmatch));null!==(a=o.attachments)&&void 0!==a&&a.offline&&(n.attachments=yield I.n.getStoredFiles(e.id,o.concept,o.timecreated)),t.page.originalData={concept:n.concept,definition:n.definition,attachments:n.attachments.slice(),timecreated:n.timecreated,categories:n.categories.slice(),aliases:n.aliases,usedynalink:n.usedynalink,casesensitive:n.casesensitive,fullmatch:n.fullmatch},t.page.definitionControl.setValue(n.definition),yield t.loadCategories(e)}))()}save(e){var t=this;return(0,d.A)((function*(){const a=t.page.data,n=t.page.data;let o;return n.attachments.length&&(o=yield t.storeAttachments(e,n.timecreated)),a.concept!==n.concept&&(yield I.n.deleteStoredFiles(e.id,a.concept,n.timecreated)),yield t.updateOfflineEntry(e,o),m.CoreFileUploader.clearTmpFiles(n.attachments),!1}))()}updateOfflineEntry(e,t){var a=this;return(0,d.A)((function*(){const n=a.page.originalData,o=a.page.data,i=a.getSaveOptions(e),s=f.Ni.formatHtmlLines(o.definition);n&&(yield a.checkDuplicates(e),yield G.e.updateOfflineEntry({glossaryid:e.id,courseid:a.page.courseId,concept:n.concept,timecreated:n.timecreated},o.concept,s,i,t))}))()}}class AddonModGlossaryNewFormHandler extends AddonModGlossaryFormHandler{loadData(e){var t=this;return(0,d.A)((function*(){yield t.loadCategories(e)}))()}save(e){var t=this;return(0,d.A)((function*(){const a=t.page.data,n=Date.now();let o,i;if(a.attachments.length)try{o=yield t.uploadAttachments(e)}catch(a){if(y.CoreWSError.isWebServiceError(a))throw a;i=yield t.storeAttachments(e,n)}const s=i?yield t.createOfflineEntry(e,n,i):yield t.createOnlineEntry(e,n,o,!a.attachments.length);return m.CoreFileUploader.clearTmpFiles(a.attachments),s&&(I.n.deleteStoredFiles(e.id,a.concept,n),M.z.trigger(M.z.ACTIVITY_DATA_SENT,{module:"glossary"})),!!s}))()}createOfflineEntry(e,t,a){var n=this;return(0,d.A)((function*(){const o=n.page.data,i=n.getSaveOptions(e),s=f.Ni.formatHtmlLines(o.definition);yield n.checkDuplicates(e),yield G.e.addOfflineEntry(e.id,o.concept,s,n.page.courseId,t,i,a,void 0,void 0)}))()}createOnlineEntry(e,t,a,n){var o=this;return(0,d.A)((function*(){const i=o.page.data,s=o.getSaveOptions(e),d=f.Ni.formatHtmlLines(i.definition);return yield E.$.addEntry(e.id,i.concept,d,o.page.courseId,s,a,{timeCreated:t,allowOffline:n,checkDuplicates:!e.allowduplicatedentries})}))()}}class AddonModGlossaryOnlineFormHandler extends AddonModGlossaryFormHandler{constructor(e,t){super(e),this.entry=t}loadData(){var e=this;return(0,d.A)((function*(){var t;const a=e.page.data;a.concept=e.entry.concept,a.definition=e.entry.definition||"",a.timecreated=e.entry.timecreated,a.usedynalink=e.entry.usedynalink,a.usedynalink&&(a.casesensitive=e.entry.casesensitive,a.fullmatch=e.entry.fullmatch),a.attachments=(null!==(t=e.entry.attachments)&&void 0!==t?t:[]).slice(),e.page.originalData={concept:a.concept,definition:a.definition,attachments:a.attachments.slice(),timecreated:a.timecreated,categories:a.categories.slice(),aliases:a.aliases,usedynalink:a.usedynalink,casesensitive:a.casesensitive,fullmatch:a.fullmatch},e.page.definitionControl.setValue(a.definition),e.page.showAliases=!1}))()}save(e){var t=this;return(0,d.A)((function*(){if(!u.WE.isOnline())throw new c.CoreNetworkError;const a=t.page.data,n=t.getSaveOptions(e),o=f.Ni.formatHtmlLines(a.definition),i=yield t.uploadAttachments();return yield E.$.updateEntry(e.id,t.entry.id,a.concept,o,n,i),m.CoreFileUploader.clearTmpFiles(a.attachments),M.z.trigger(M.z.ACTIVITY_DATA_SENT,{module:"glossary"}),!0}))()}uploadAttachments(){var e=this;return(0,d.A)((function*(){var t,a;const n=e.page.data;if(!m.CoreFileUploader.areFileListDifferent(n.attachments,null!==(t=e.entry.attachments)&&void 0!==t?t:[]))return;const{attachmentsid:o}=yield E.$.prepareEntryForEdition(e.entry.id),i=m.CoreFileUploader.getFilesToDelete(null!==(a=e.entry.attachments)&&void 0!==a?a:[],n.attachments);return i.length&&(yield m.CoreFileUploader.deleteDraftFiles(o,i)),yield m.CoreFileUploader.uploadFiles(o,n.attachments),o}))()}}const H=[{path:"",component:S,canDeactivate:[s.V]}];let V=(()=>{var e;class AddonModGlossaryEditLazyModule{}return(e=AddonModGlossaryEditLazyModule).ɵfac=function AddonModGlossaryEditLazyModule_Factory(t){return new(t||e)},e.ɵmod=F.$C({type:e}),e.ɵinj=F.G2t({imports:[i.iI.forChild(H),n.n,o.d]}),AddonModGlossaryEditLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&F.Obh(V,{declarations:[S],imports:[i.iI,n.n,o.d]}))}}]);