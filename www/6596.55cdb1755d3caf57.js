"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6596,8657],{74094:(e,n,t)=>{t.d(n,{L:()=>AddonCompetencyCourseCompetenciesSource});var o=t(10467),c=t(99522),r=t(55554),i=t(41140),a=t(8657);class AddonCompetencyCourseCompetenciesSource extends c.F{static getSourceId(e,n){return`${e}-${n||"current-user"}`}constructor(e,n){super(),this.COURSE_ID=e,this.USER_ID=n}getItemPath(e){return String(e.competency.id)}load(){var _superprop_getLoad=()=>super.load,e=this;return(0,o.A)((function*(){!e.dirty&&e.courseCompetencies||(yield e.loadCourseCompetencies()),yield _superprop_getLoad().call(e)}))()}invalidateCache(){var e=this;return(0,o.A)((function*(){yield r.g.ignoreErrors(i.AddonCompetency.invalidateCourseCompetencies(e.COURSE_ID,e.USER_ID))}))()}loadPageItems(){var e=this;return(0,o.A)((function*(){if(!e.courseCompetencies)throw new Error("Can't load competencies without course data");return{items:e.courseCompetencies.competencies}}))()}loadCourseCompetencies(){var e=this;return(0,o.A)((function*(){[e.courseCompetencies,e.user]=yield Promise.all([i.AddonCompetency.getCourseCompetencies(e.COURSE_ID,e.USER_ID),a.AddonCompetencyHelper.getProfile(e.USER_ID)])}))()}}},71852:(e,n,t)=>{t.d(n,{P:()=>AddonCompetencyPlanCompetenciesSource});var o=t(10467),c=t(99522),r=t(55554),i=t(41140),a=t(8657);class AddonCompetencyPlanCompetenciesSource extends c.F{constructor(e){super(),this.PLAN_ID=e}getItemPath(e){return String(e.competency.id)}load(){var _superprop_getLoad=()=>super.load,e=this;return(0,o.A)((function*(){!e.dirty&&e.plan||(yield e.loadLearningPlan()),yield _superprop_getLoad().call(e)}))()}invalidateCache(){var e=this;return(0,o.A)((function*(){yield r.g.ignoreErrors(i.AddonCompetency.invalidateLearningPlan(e.PLAN_ID))}))()}loadPageItems(){var e=this;return(0,o.A)((function*(){if(!e.plan)throw new Error("Can't load competencies without plan!");return{items:e.plan.competencies}}))()}loadLearningPlan(){var e=this;return(0,o.A)((function*(){e.plan=yield i.AddonCompetency.getLearningPlan(e.PLAN_ID),e.plan.plan.statusname=a.AddonCompetencyHelper.getPlanStatusName(e.plan.plan.status),e.user=yield a.AddonCompetencyHelper.getProfile(e.plan.plan.userid)}))()}}},91784:(e,n,t)=>{t.d(n,{y:()=>i});var o=t(3353),c=t(37811),r=t(54438);let i=(()=>{var e;class AddonCompetencyCompetenciesPageModule{}return(e=AddonCompetencyCompetenciesPageModule).ɵfac=function AddonCompetencyCompetenciesPageModule_Factory(n){return new(n||e)},e.ɵmod=r.$C({type:e}),e.ɵinj=r.G2t({imports:[o.n]}),AddonCompetencyCompetenciesPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&r.Obh(i,{declarations:[c.m],imports:[o.n]}))},37811:(e,n,t)=>{t.d(n,{m:()=>P});var o=t(10467),c=t(89911),r=t(29492),i=t(79555),a=t(15324),m=t(75629),p=t(71852),d=t(74094),s=t(2401),_=t(83696),l=t(22693),y=t(52749),u=t(24742),g=t(54438),C=t(60177),f=t(64422),I=t(58197),h=t(88246),v=t(73465),A=t(73955);function AddonCompetencyCompetenciesPage_ion_item_15_ion_badge_6_Template(e,n){if(1&e&&(g.j41(0,"ion-badge",10),g.EFF(1),g.k0s()),2&e){const e=g.XpG().$implicit;g.Y8G("color",e.usercompetency.proficiency?"success":"danger"),g.R7$(),g.SpI(" ",e.usercompetency.gradename," ")}}function AddonCompetencyCompetenciesPage_ion_item_15_ion_badge_7_Template(e,n){if(1&e&&(g.j41(0,"ion-badge",10),g.EFF(1),g.k0s()),2&e){const e=g.XpG().$implicit;g.Y8G("color",e.usercompetencycourse.proficiency?"success":"danger"),g.R7$(),g.SpI(" ",e.usercompetencycourse.gradename," ")}}function AddonCompetencyCompetenciesPage_ion_item_15_Template(e,n){if(1&e){const e=g.RV6();g.j41(0,"ion-item",7),g.bIt("click",(function AddonCompetencyCompetenciesPage_ion_item_15_Template_ion_item_click_0_listener(){const n=g.eBV(e).$implicit,t=g.XpG();return g.Njj(t.competencies.select(n))})),g.j41(1,"ion-label")(2,"p",8),g.nrm(3,"core-format-text",2),g.j41(4,"em"),g.EFF(5),g.k0s()()(),g.DNE(6,AddonCompetencyCompetenciesPage_ion_item_15_ion_badge_6_Template,2,2,"ion-badge",9)(7,AddonCompetencyCompetenciesPage_ion_item_15_ion_badge_7_Template,2,2,"ion-badge",9),g.k0s()}if(2&e){const e=n.$implicit,t=g.XpG();g.Y8G("detail",!0),g.BMQ("aria-label",e.competency.shortname)("aria-current",t.competencies.getItemAriaCurrent(e)),g.R7$(3),g.Y8G("text",e.competency.shortname)("contextLevel",t.contextLevel)("contextInstanceId",t.contextInstanceId),g.R7$(2),g.JRh(e.competency.idnumber),g.R7$(),g.Y8G("ngIf",e.usercompetency),g.R7$(),g.Y8G("ngIf",e.usercompetencycourse)}}let P=(()=>{var e;class AddonCompetencyCompetenciesPage{constructor(){this.title="";const e=a.CoreNavigator.getRouteNumberParam("planId");if(this.logView=u.j.once((()=>this.performLogView())),!e){const e=a.CoreNavigator.getRequiredRouteNumberParam("courseId"),n=a.CoreNavigator.getRouteNumberParam("userId"),t=_.u.getOrCreateSource(d.L,[e,n]);return this.competencies=new s.R(t,AddonCompetencyCompetenciesPage),void 0}const n=_.u.getOrCreateSource(p.P,[e]);this.competencies=new s.R(n,AddonCompetencyCompetenciesPage)}ngAfterViewInit(){var e=this;return(0,o.A)((function*(){yield e.fetchCompetencies(),e.competencies.start(e.splitView)}))()}fetchCompetencies(){var e=this;return(0,o.A)((function*(){try{const t=e.competencies.getSource();if(yield e.competencies.load(),t instanceof p.P){var n;if(!t.plan||t.plan&&t.plan.competencycount<=0)throw new m.CoreError(i.HT.instant("addon.competency.errornocompetenciesfound"));e.title=t.plan.plan.name,e.contextLevel="user",e.contextInstanceId=(null===(n=t.user)||void 0===n?void 0:n.id)||t.plan.plan.userid}else e.title=i.HT.instant("addon.competency.coursecompetencies"),e.contextLevel="course",e.contextInstanceId=t.COURSE_ID;e.logView()}catch(e){c.CoreDomUtils.showErrorModalDefault(e,"Error getting competencies data.")}}))()}refreshCompetencies(e){var n=this;return(0,o.A)((function*(){yield n.competencies.getSource().invalidateCache(),n.competencies.getSource().setDirty(!0),n.fetchCompetencies().finally((()=>{null==e||e.complete()}))}))()}ngOnDestroy(){this.competencies.destroy()}performLogView(){const e=this.competencies.getSource();if(e instanceof p.P)return l.OF.logEvent({type:l.qr.VIEW_ITEM_LIST,ws:"tool_lp_data_for_plan_page",name:this.title,data:{category:"competency",planid:e.PLAN_ID},url:`/admin/tool/lp/plan.php?id=${e.PLAN_ID}`}),void 0;e.USER_ID&&e.USER_ID!==y.CoreSites.getCurrentSiteUserId()||l.OF.logEvent({type:l.qr.VIEW_ITEM_LIST,ws:"tool_lp_data_for_course_competencies_page",name:this.title,data:{category:"competency",courseid:e.COURSE_ID},url:`/admin/tool/lp/coursecompetencies.php?courseid=${e.COURSE_ID}`})}}return(e=AddonCompetencyCompetenciesPage).ɵfac=function AddonCompetencyCompetenciesPage_Factory(n){return new(n||e)},e.ɵcmp=g.VBU({type:e,selectors:[["page-addon-competency-competencies"]],viewQuery:function AddonCompetencyCompetenciesPage_Query(e,n){if(1&e&&g.GBs(r.M,5),2&e){let e;g.mGM(e=g.lsd())&&(n.splitView=e.first)}},decls:16,vars:12,consts:[["slot","start"],[3,"text"],[3,"text","contextLevel","contextInstanceId"],["slot","fixed",3,"ionRefresh","disabled"],[3,"pullingText"],[3,"hideUntil"],["class","ion-text-wrap","button","",3,"detail","click",4,"ngFor","ngForOf"],["button","",1,"ion-text-wrap",3,"click","detail"],[1,"item-heading"],["slot","end",3,"color",4,"ngIf"],["slot","end",3,"color"]],template:function AddonCompetencyCompetenciesPage_Template(e,n){1&e&&(g.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),g.nrm(3,"ion-back-button",1),g.nI1(4,"translate"),g.k0s(),g.j41(5,"ion-title")(6,"h1"),g.nrm(7,"core-format-text",2),g.k0s()()()(),g.j41(8,"ion-content")(9,"core-split-view")(10,"ion-refresher",3),g.bIt("ionRefresh",(function AddonCompetencyCompetenciesPage_Template_ion_refresher_ionRefresh_10_listener(e){return n.refreshCompetencies(e.target)})),g.nrm(11,"ion-refresher-content",4),g.nI1(12,"translate"),g.k0s(),g.j41(13,"core-loading",5)(14,"ion-list"),g.DNE(15,AddonCompetencyCompetenciesPage_ion_item_15_Template,8,9,"ion-item",6),g.k0s()()()()),2&e&&(g.R7$(3),g.Y8G("text",g.bMT(4,8,"core.back")),g.R7$(4),g.Y8G("text",n.title)("contextLevel",n.contextLevel)("contextInstanceId",n.contextInstanceId),g.R7$(3),g.Y8G("disabled",!n.competencies.loaded),g.R7$(),g.FS9("pullingText",g.bMT(12,10,"core.pulltorefresh")),g.R7$(2),g.Y8G("hideUntil",n.competencies.loaded),g.R7$(2),g.Y8G("ngForOf",n.competencies.items))},dependencies:[C.Sq,C.bT,f.R,r.M,I.B,h.i,v.In,v.QW,v.W9,v.eU,v.uz,v.he,v.nf,v.To,v.Ki,v.BC,v.ai,v.el,A.D9],encapsulation:2}),AddonCompetencyCompetenciesPage})()},77876:(e,n,t)=>{t.d(n,{a:()=>i});var o=t(3353),c=t(52639),r=t(54438);let i=(()=>{var e;class AddonCompetencyCompetencyPageModule{}return(e=AddonCompetencyCompetencyPageModule).ɵfac=function AddonCompetencyCompetencyPageModule_Factory(n){return new(n||e)},e.ɵmod=r.$C({type:e}),e.ɵinj=r.G2t({imports:[o.n]}),AddonCompetencyCompetencyPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&r.Obh(i,{declarations:[c.C],imports:[o.n]}))},52639:(e,n,t)=>{t.d(n,{C:()=>G});var o=t(10467),c=t(8657),r=t(52749),i=t(89911),a=t(79555),m=t(41140),p=t(15324),d=t(55554),s=t(49697),_=t(52266),l=t(83696),y=t(71852),u=t(74094),g=t(24742),C=t(22693),f=t(8014),I=t(54438),h=t(60177),v=t(64422),A=t(32572),P=t(16658),R=t(58197),x=t(23007),T=t(37557),b=t(28988),S=t(88246),E=t(73465),$=t(59528),k=t(73955);function AddonCompetencyCompetencyPage_h1_6_Template(e,n){if(1&e&&(I.j41(0,"h1"),I.nrm(1,"core-format-text",7),I.j41(2,"small"),I.EFF(3),I.k0s()()),2&e){const e=I.XpG();I.R7$(),I.Y8G("text",e.competency.competency.competency.shortname)("contextLevel",e.contextLevel)("contextInstanceId",e.contextInstanceId),I.R7$(2),I.JRh(e.competency.competency.competency.idnumber)}}function AddonCompetencyCompetencyPage_ion_card_12_Template(e,n){if(1&e&&(I.j41(0,"ion-card")(1,"ion-item",8),I.nrm(2,"core-user-avatar",9),I.j41(3,"ion-label")(4,"p",10),I.EFF(5),I.k0s()()()()),2&e){const e=I.XpG();I.R7$(2),I.Y8G("user",e.user),I.R7$(3),I.JRh(e.user.fullname)}}function AddonCompetencyCompetencyPage_ion_card_13_ion_item_1_Template(e,n){if(1&e&&(I.j41(0,"ion-item",8)(1,"ion-label"),I.nrm(2,"core-format-text",7),I.k0s()()),2&e){const e=I.XpG(2);I.R7$(2),I.Y8G("text",e.competency.competency.competency.description)("contextLevel",e.contextLevel)("contextInstanceId",e.contextInstanceId)}}function AddonCompetencyCompetencyPage_ion_card_13_a_8_Template(e,n){if(1&e&&(I.j41(0,"a",15),I.nrm(1,"core-format-text",7),I.k0s()),2&e){const e=I.XpG(2);I.Y8G("href",e.competencyFrameworkUrl,I.B4B),I.R7$(),I.Y8G("text",e.competency.competency.comppath.framework.name)("contextLevel",e.contextLevel)("contextInstanceId",e.contextInstanceId)}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_9_Template(e,n){if(1&e&&(I.qex(0),I.nrm(1,"core-format-text",7),I.bVm()),2&e){const e=I.XpG(2);I.R7$(),I.Y8G("text",e.competency.competency.comppath.framework.name)("contextLevel",e.contextLevel)("contextInstanceId",e.contextInstanceId)}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_button_1_Template(e,n){if(1&e){const e=I.RV6();I.j41(0,"button",17),I.bIt("click",(function AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_button_1_Template_button_click_0_listener(){I.eBV(e);const n=I.XpG().$implicit,t=I.XpG(2);return I.Njj(t.openCompetencySummary(n.id))})),I.nrm(1,"core-format-text",7),I.k0s()}if(2&e){const e=I.XpG().$implicit,n=I.XpG(2);I.R7$(),I.Y8G("text",e.name)("contextLevel",n.contextLevel)("contextInstanceId",n.contextInstanceId)}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_ng_container_2_Template(e,n){if(1&e&&(I.qex(0),I.nrm(1,"core-format-text",7),I.bVm()),2&e){const e=I.XpG().$implicit,n=I.XpG(2);I.R7$(),I.Y8G("text",e.name)("contextLevel",n.contextLevel)("contextInstanceId",n.contextInstanceId)}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_ng_container_3_Template(e,n){1&e&&(I.qex(0),I.EFF(1," / "),I.bVm())}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_Template(e,n){if(1&e&&(I.qex(0),I.DNE(1,AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_button_1_Template,2,3,"button",16)(2,AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_ng_container_2_Template,2,3,"ng-container",2)(3,AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_ng_container_3_Template,2,0,"ng-container",2),I.bVm()),2&e){const e=n.$implicit,t=I.XpG(2);I.R7$(),I.Y8G("ngIf",t.competency.competency.comppath.showlinks),I.R7$(),I.Y8G("ngIf",!t.competency.competency.comppath.showlinks),I.R7$(),I.Y8G("ngIf",!e.last)}}function AddonCompetencyCompetencyPage_ion_card_13_p_17_Template(e,n){1&e&&(I.j41(0,"p"),I.EFF(1),I.nI1(2,"translate"),I.k0s()),2&e&&(I.R7$(),I.SpI(" ",I.bMT(2,1,"addon.competency.nocrossreferencedcompetencies")," "))}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_18_p_1_Template(e,n){if(1&e){const e=I.RV6();I.j41(0,"p")(1,"button",17),I.bIt("click",(function AddonCompetencyCompetencyPage_ion_card_13_ng_container_18_p_1_Template_button_click_1_listener(){const n=I.eBV(e).$implicit,t=I.XpG(3);return I.Njj(t.openCompetencySummary(n.id))})),I.nrm(2,"core-format-text",7),I.EFF(3),I.k0s()()}if(2&e){const e=n.$implicit,t=I.XpG(3);I.R7$(2),I.Y8G("text",e.shortname)("contextLevel",t.contextLevel)("contextInstanceId",t.contextInstanceId),I.R7$(),I.SpI(" - ",e.idnumber," ")}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_18_Template(e,n){if(1&e&&(I.qex(0),I.DNE(1,AddonCompetencyCompetencyPage_ion_card_13_ng_container_18_p_1_Template,4,4,"p",14),I.bVm()),2&e){const e=I.XpG(2);I.R7$(),I.Y8G("ngForOf",e.competency.competency.relatedcompetencies)}}function AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_p_5_Template(e,n){1&e&&(I.j41(0,"p"),I.EFF(1),I.nI1(2,"translate"),I.k0s()),2&e&&(I.R7$(),I.SpI(" ",I.bMT(2,1,"addon.competency.noactivities")," "))}function AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_ion_item_6_core_mod_icon_1_Template(e,n){if(1&e&&I.nrm(0,"core-mod-icon",22),2&e){const e=I.XpG().$implicit;I.Y8G("modicon",e.iconurl)("showAlt",!1)("colorize",!1)}}function AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_ion_item_6_Template(e,n){if(1&e&&(I.j41(0,"ion-item",19),I.DNE(1,AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_ion_item_6_core_mod_icon_1_Template,1,3,"core-mod-icon",20),I.j41(2,"ion-label"),I.nrm(3,"core-format-text",21),I.k0s()()),2&e){const e=n.$implicit,t=I.XpG(3);I.Y8G("href",e.url),I.BMQ("aria-label",e.name),I.R7$(),I.Y8G("ngIf",e.iconurl),I.R7$(2),I.Y8G("text",e.name)("contextInstanceId",e.id)("courseId",t.courseId)}}function AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_Template(e,n){if(1&e&&(I.j41(0,"ion-item",8)(1,"ion-label")(2,"p",10),I.EFF(3),I.nI1(4,"translate"),I.k0s(),I.DNE(5,AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_p_5_Template,3,3,"p",2)(6,AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_ion_item_6_Template,4,6,"ion-item",18),I.k0s()()),2&e){const e=I.XpG(2);I.R7$(3),I.JRh(I.bMT(4,3,"addon.competency.activities")),I.R7$(2),I.Y8G("ngIf",0===e.coursemodules.length),I.R7$(),I.Y8G("ngForOf",e.coursemodules)}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_ion_item_1_Template(e,n){if(1&e&&(I.j41(0,"ion-item",8)(1,"ion-label")(2,"p",10),I.EFF(3),I.nI1(4,"translate"),I.k0s(),I.j41(5,"p"),I.EFF(6),I.k0s()()()),2&e){const e=I.XpG(3);I.R7$(3),I.JRh(I.bMT(4,2,"addon.competency.reviewstatus")),I.R7$(3),I.JRh(e.competency.usercompetency.statusname)}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_ion_badge_7_Template(e,n){1&e&&(I.j41(0,"ion-badge",26),I.EFF(1),I.nI1(2,"translate"),I.k0s()),2&e&&(I.R7$(),I.SpI(" ",I.bMT(2,1,"core.yes")," "))}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_ion_badge_8_Template(e,n){1&e&&(I.j41(0,"ion-badge",27),I.EFF(1),I.nI1(2,"translate"),I.k0s()),2&e&&(I.R7$(),I.SpI(" ",I.bMT(2,1,"core.no")," "))}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_Template(e,n){if(1&e&&(I.qex(0),I.DNE(1,AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_ion_item_1_Template,7,4,"ion-item",11),I.j41(2,"ion-item",8)(3,"ion-label")(4,"p",10),I.EFF(5),I.nI1(6,"translate"),I.k0s()(),I.DNE(7,AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_ion_badge_7_Template,3,3,"ion-badge",23)(8,AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_ion_badge_8_Template,3,3,"ion-badge",24),I.k0s(),I.j41(9,"ion-item",8)(10,"ion-label")(11,"p",10),I.EFF(12),I.nI1(13,"translate"),I.k0s()(),I.j41(14,"ion-badge",25),I.EFF(15),I.k0s()(),I.bVm()),2&e){const e=I.XpG(2);I.R7$(),I.Y8G("ngIf",e.competency.usercompetency&&e.competency.usercompetency.status),I.R7$(4),I.JRh(I.bMT(6,6,"addon.competency.proficient")),I.R7$(2),I.Y8G("ngIf",e.userCompetency.proficiency),I.R7$(),I.Y8G("ngIf",!e.userCompetency.proficiency),I.R7$(4),I.JRh(I.bMT(13,8,"addon.competency.rating")),I.R7$(3),I.JRh(e.userCompetency.gradename)}}function AddonCompetencyCompetencyPage_ion_card_13_Template(e,n){if(1&e&&(I.j41(0,"ion-card"),I.DNE(1,AddonCompetencyCompetencyPage_ion_card_13_ion_item_1_Template,3,3,"ion-item",11),I.j41(2,"ion-item",12)(3,"ion-label")(4,"p",10),I.EFF(5),I.nI1(6,"translate"),I.k0s(),I.j41(7,"p"),I.DNE(8,AddonCompetencyCompetencyPage_ion_card_13_a_8_Template,2,4,"a",13)(9,AddonCompetencyCompetencyPage_ion_card_13_ng_container_9_Template,2,3,"ng-container",2),I.EFF(10,"  /  "),I.DNE(11,AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_Template,4,3,"ng-container",14),I.k0s()()(),I.j41(12,"ion-item",8)(13,"ion-label")(14,"p",10),I.EFF(15),I.nI1(16,"translate"),I.k0s(),I.DNE(17,AddonCompetencyCompetencyPage_ion_card_13_p_17_Template,3,3,"p",2)(18,AddonCompetencyCompetencyPage_ion_card_13_ng_container_18_Template,2,1,"ng-container",2),I.k0s()(),I.DNE(19,AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_Template,7,5,"ion-item",11)(20,AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_Template,16,10,"ng-container",2),I.k0s()),2&e){const e=I.XpG();I.R7$(),I.Y8G("ngIf",e.competency.competency.competency.description),I.R7$(4),I.JRh(I.bMT(6,10,"addon.competency.path")),I.R7$(3),I.Y8G("ngIf",e.competency.competency.comppath.showlinks),I.R7$(),I.Y8G("ngIf",!e.competency.competency.comppath.showlinks),I.R7$(2),I.Y8G("ngForOf",e.competency.competency.comppath.ancestors),I.R7$(4),I.JRh(I.bMT(16,12,"addon.competency.crossreferencedcompetencies")),I.R7$(2),I.Y8G("ngIf",!e.competency.competency.hasrelatedcompetencies),I.R7$(),I.Y8G("ngIf",e.competency.competency.hasrelatedcompetencies),I.R7$(),I.Y8G("ngIf",e.coursemodules),I.R7$(),I.Y8G("ngIf",e.userCompetency)}}function AddonCompetencyCompetencyPage_div_14_p_4_Template(e,n){1&e&&(I.j41(0,"p",28),I.EFF(1),I.nI1(2,"translate"),I.k0s()),2&e&&(I.R7$(),I.SpI(" ",I.bMT(2,1,"addon.competency.noevidence")," "))}function AddonCompetencyCompetencyPage_div_14_ion_card_5_ion_item_1_Template(e,n){if(1&e&&(I.j41(0,"ion-item",33),I.nrm(1,"core-user-avatar",34),I.j41(2,"ion-label")(3,"p",10),I.EFF(4),I.k0s(),I.j41(5,"p"),I.EFF(6),I.nI1(7,"coreFormatDate"),I.k0s()()()),2&e){const e=I.XpG().$implicit,n=I.XpG(2);I.Y8G("userId",e.actionuser.id)("courseId",n.courseId),I.R7$(),I.Y8G("user",e.actionuser)("linkProfile",!1),I.R7$(3),I.JRh(e.actionuser.fullname),I.R7$(2),I.JRh(I.bMT(7,6,1e3*e.timemodified))}}function AddonCompetencyCompetencyPage_div_14_ion_card_5_p_7_Template(e,n){if(1&e&&(I.j41(0,"p",35),I.EFF(1),I.k0s()),2&e){const e=I.XpG().$implicit;I.R7$(),I.JRh(e.description)}}function AddonCompetencyCompetencyPage_div_14_ion_card_5_blockquote_8_Template(e,n){if(1&e&&(I.j41(0,"blockquote"),I.EFF(1),I.k0s()),2&e){const e=I.XpG().$implicit;I.R7$(),I.JRh(e.note)}}function AddonCompetencyCompetencyPage_div_14_ion_card_5_Template(e,n){if(1&e&&(I.j41(0,"ion-card"),I.DNE(1,AddonCompetencyCompetencyPage_div_14_ion_card_5_ion_item_1_Template,8,8,"ion-item",30),I.j41(2,"ion-item",8)(3,"ion-label")(4,"p")(5,"ion-badge",31),I.EFF(6),I.k0s()(),I.DNE(7,AddonCompetencyCompetencyPage_div_14_ion_card_5_p_7_Template,2,1,"p",32)(8,AddonCompetencyCompetencyPage_div_14_ion_card_5_blockquote_8_Template,2,1,"blockquote",2),I.k0s()()()),2&e){const e=n.$implicit;I.R7$(),I.Y8G("ngIf",e.actionuser),I.R7$(5),I.JRh(e.gradename),I.R7$(),I.Y8G("ngIf",e.description),I.R7$(),I.Y8G("ngIf",e.note)}}function AddonCompetencyCompetencyPage_div_14_Template(e,n){if(1&e&&(I.j41(0,"div")(1,"h2",28),I.EFF(2),I.nI1(3,"translate"),I.k0s(),I.DNE(4,AddonCompetencyCompetencyPage_div_14_p_4_Template,3,3,"p",29)(5,AddonCompetencyCompetencyPage_div_14_ion_card_5_Template,9,4,"ion-card",14),I.k0s()),2&e){const e=I.XpG();I.R7$(2),I.JRh(I.bMT(3,3,"addon.competency.evidence")),I.R7$(2),I.Y8G("ngIf",0===e.competency.evidence.length),I.R7$(),I.Y8G("ngForOf",e.competency.evidence)}}let G=(()=>{var e;class AddonCompetencyCompetencyPage{constructor(){this.competencyLoaded=!1,this.logView=g.j.once((()=>this.performLogView()));try{const e=p.CoreNavigator.getRouteNumberParam("planId");if(!e){const e=p.CoreNavigator.getRequiredRouteNumberParam("courseId"),n=p.CoreNavigator.getRouteNumberParam("userId"),t=l.u.getOrCreateSource(u.L,[e,n]);return this.competencies=new AddonCompetencyCompetenciesSwipeManager(t),void 0}const n=l.u.getOrCreateSource(y.P,[e]);this.competencies=new AddonCompetencyCompetenciesSwipeManager(n)}catch(e){return i.CoreDomUtils.showErrorModal(e),p.CoreNavigator.back(),void 0}}get competencyFrameworkUrl(){if(!this.competency)return;const{pluginbaseurl:e,framework:n,pagecontextid:t}=this.competency.competency.comppath;return`${e}/competencies.php?competencyframeworkid=${n.id}&pagecontextid=${t}`}get courseId(){const e=this.competencies.getSource();if(e instanceof u.L)return e.COURSE_ID}ngOnInit(){var e=this;return(0,o.A)((function*(){try{const n=e.competencies.getSource();yield n.reload(),yield e.competencies.start(),yield e.fetchCompetency()}finally{e.competencyLoaded=!0}}))()}ngOnDestroy(){this.competencies.destroy()}fetchCompetency(){var e=this;return(0,o.A)((function*(){try{const n=e.competencies.getSource();e.competency=n instanceof y.P?yield e.fetchCompetencySummaryFromPlan(n):yield e.fetchCompetencySummaryFromCourse(n),e.competency.user.id!=r.CoreSites.getCurrentSiteUserId()&&(e.user=e.competency.user),e.competency.evidence.forEach((e=>{if(e.descidentifier){e.description=a.HT.instant("addon.competency."+e.descidentifier,{$a:e.desca})}})),e.logView()}catch(e){i.CoreDomUtils.showErrorModalDefault(e,"Error getting competency data.")}}))()}refreshCompetency(e){var n=this;return(0,o.A)((function*(){const t=n.competencies.getSource();yield d.g.ignoreErrors(t instanceof y.P?m.AddonCompetency.invalidateCompetencyInPlan(t.PLAN_ID,n.requireCompetencyId()):m.AddonCompetency.invalidateCompetencyInCourse(t.COURSE_ID,n.requireCompetencyId(),t.USER_ID)),n.fetchCompetency().finally((()=>{null==e||e.complete()}))}))()}openCompetencySummary(e){p.CoreNavigator.navigate(`../${e}/${s.kO}`,{params:{contextLevel:this.contextLevel,contextInstanceId:this.contextInstanceId}})}requireCompetencyId(){const e=this.competencies.getSelectedItem();if(!e)throw new Error("Failed to get competency id from selected item");return e.competency.id}fetchCompetencySummaryFromPlan(e){var n=this;return(0,o.A)((function*(){var t;const o=yield m.AddonCompetency.getCompetencyInPlan(e.PLAN_ID,n.requireCompetencyId());return n.planStatus=o.plan.status,o.usercompetencysummary.usercompetency&&(o.usercompetencysummary.usercompetency.statusname=c.AddonCompetencyHelper.getCompetencyStatusName(o.usercompetencysummary.usercompetency.status)),n.contextLevel="user",n.contextInstanceId=(null===(t=e.user)||void 0===t?void 0:t.id)||o.usercompetencysummary.user.id,n.userCompetency=o.usercompetencysummary.usercompetencyplan||o.usercompetencysummary.usercompetency,o.usercompetencysummary}))()}fetchCompetencySummaryFromCourse(e){var n=this;return(0,o.A)((function*(){const t=yield m.AddonCompetency.getCompetencyInCourse(e.COURSE_ID,n.requireCompetencyId(),e.USER_ID);return n.coursemodules=t.coursemodules,n.contextLevel="course",n.contextInstanceId=e.COURSE_ID,n.userCompetency=t.usercompetencysummary.usercompetencycourse||t.usercompetencysummary.usercompetency,t.usercompetencysummary}))()}performLogView(){var e=this;return(0,o.A)((function*(){var n;if(!e.competency)return;const t=e.competencies.getSource(),o=e.requireCompetencyId(),c=e.competency.competency.competency.shortname,r=null===(n=t.user)||void 0===n?void 0:n.id;if(t instanceof y.P){if(!e.planStatus)return;yield d.g.ignoreErrors(m.AddonCompetency.logCompetencyInPlanView(t.PLAN_ID,o,e.planStatus,c,r));return C.OF.logEvent({type:C.qr.VIEW_ITEM,ws:e.planStatus===m.AddonCompetencyProvider.STATUS_COMPLETE?"core_competency_user_competency_plan_viewed":"core_competency_user_competency_viewed_in_plan",name:c,data:{id:o,category:"competency",planid:t.PLAN_ID,planstatus:e.planStatus,userid:r},url:f.F.addParamsToUrl("/admin/tool/lp/user_competency_in_plan.php",{planid:t.PLAN_ID,userid:r,competencyid:o})}),void 0}yield d.g.ignoreErrors(m.AddonCompetency.logCompetencyInCourseView(t.COURSE_ID,o,c,t.USER_ID)),C.OF.logEvent({type:C.qr.VIEW_ITEM,ws:"core_competency_user_competency_viewed_in_course",name:c,data:{id:o,category:"competency",courseid:t.COURSE_ID,userid:r},url:f.F.addParamsToUrl("/admin/tool/lp/user_competency_in_course.php",{courseid:t.COURSE_ID,competencyid:o,userid:r})})}))()}}return(e=AddonCompetencyCompetencyPage).ɵfac=function AddonCompetencyCompetencyPage_Factory(n){return new(n||e)},e.ɵcmp=I.VBU({type:e,selectors:[["page-addon-competency-competency"]],decls:15,vars:13,consts:[["slot","start"],[3,"text"],[4,"ngIf"],[1,"limited-width",3,"core-swipe-navigation"],["slot","fixed",3,"ionRefresh","disabled"],[3,"pullingText"],[3,"hideUntil"],[3,"text","contextLevel","contextInstanceId"],[1,"ion-text-wrap"],["slot","start",3,"user"],[1,"item-heading"],["class","ion-text-wrap",4,"ngIf"],[1,"ion-text-wrap","only-links"],["core-link","",3,"href",4,"ngIf"],[4,"ngFor","ngForOf"],["core-link","",3,"href"],["class","as-link",3,"click",4,"ngIf"],[1,"as-link",3,"click"],["class","ion-text-wrap","core-link","","capture","true",3,"href",4,"ngFor","ngForOf"],["core-link","","capture","true",1,"ion-text-wrap",3,"href"],["slot","start",3,"modicon","showAlt","colorize",4,"ngIf"],["contextLevel","module",3,"text","contextInstanceId","courseId"],["slot","start",3,"modicon","showAlt","colorize"],["slot","end","color","success",4,"ngIf"],["slot","end","color","danger",4,"ngIf"],["color","dark","slot","end"],["slot","end","color","success"],["slot","end","color","danger"],[1,"ion-margin-horizontal"],["class","ion-margin-horizontal",4,"ngIf"],["class","ion-text-wrap","core-user-link","",3,"userId","courseId",4,"ngIf"],["color","dark"],["class","ion-margin-top",4,"ngIf"],["core-user-link","",1,"ion-text-wrap",3,"userId","courseId"],["slot","start",3,"user","linkProfile"],[1,"ion-margin-top"]],template:function AddonCompetencyCompetencyPage_Template(e,n){1&e&&(I.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),I.nrm(3,"ion-back-button",1),I.nI1(4,"translate"),I.k0s(),I.j41(5,"ion-title"),I.DNE(6,AddonCompetencyCompetencyPage_h1_6_Template,4,4,"h1",2),I.k0s()()(),I.j41(7,"ion-content",3)(8,"ion-refresher",4),I.bIt("ionRefresh",(function AddonCompetencyCompetencyPage_Template_ion_refresher_ionRefresh_8_listener(e){return n.refreshCompetency(e.target)})),I.nrm(9,"ion-refresher-content",5),I.nI1(10,"translate"),I.k0s(),I.j41(11,"core-loading",6),I.DNE(12,AddonCompetencyCompetencyPage_ion_card_12_Template,6,2,"ion-card",2)(13,AddonCompetencyCompetencyPage_ion_card_13_Template,21,14,"ion-card",2)(14,AddonCompetencyCompetencyPage_div_14_Template,6,5,"div",2),I.k0s()()),2&e&&(I.R7$(3),I.Y8G("text",I.bMT(4,9,"core.back")),I.R7$(3),I.Y8G("ngIf",n.competency),I.R7$(),I.Y8G("core-swipe-navigation",n.competencies),I.R7$(),I.Y8G("disabled",!n.competencyLoaded),I.R7$(),I.FS9("pullingText",I.bMT(10,11,"core.pulltorefresh")),I.R7$(2),I.Y8G("hideUntil",n.competencyLoaded),I.R7$(),I.Y8G("ngIf",n.user),I.R7$(),I.Y8G("ngIf",n.competency),I.R7$(),I.Y8G("ngIf",n.competency))},dependencies:[h.Sq,h.bT,v.R,A.I,P.T,R.B,x.j,T.O,b.n,S.i,E.In,E.QW,E.b_,E.W9,E.eU,E.uz,E.he,E.To,E.Ki,E.BC,E.ai,E.el,$.f,k.D9],encapsulation:2}),AddonCompetencyCompetencyPage})();class AddonCompetencyCompetenciesSwipeManager extends _.Z{getSelectedItemPathFromRoute(e){return p.CoreNavigator.getRouteParams(e).competencyId}}},47248:(e,n,t)=>{t.d(n,{Q:()=>i});var o=t(3353),c=t(139),r=t(54438);let i=(()=>{var e;class AddonCompetencyCompetencySummaryPageModule{}return(e=AddonCompetencyCompetencySummaryPageModule).ɵfac=function AddonCompetencyCompetencySummaryPageModule_Factory(n){return new(n||e)},e.ɵmod=r.$C({type:e}),e.ɵinj=r.G2t({imports:[o.n]}),AddonCompetencyCompetencySummaryPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&r.Obh(i,{declarations:[c._],imports:[o.n]}))},139:(e,n,t)=>{t.d(n,{_:()=>f});var o=t(10467),c=t(41140),r=t(15324),i=t(89911),a=t(55554),m=t(49697),p=t(24742),d=t(22693),s=t(54438),_=t(60177),l=t(64422),y=t(58197),u=t(88246),g=t(73465),C=t(73955);function AddonCompetencyCompetencySummaryPage_h1_6_Template(e,n){if(1&e&&(s.j41(0,"h1"),s.nrm(1,"core-format-text",7),s.j41(2,"small"),s.EFF(3),s.k0s()()),2&e){const e=s.XpG();s.R7$(),s.Y8G("text",e.competency.competency.shortname)("contextLevel",e.contextLevel)("contextInstanceId",e.contextInstanceId),s.R7$(2),s.JRh(e.competency.competency.idnumber)}}function AddonCompetencyCompetencySummaryPage_ion_card_12_ion_item_1_Template(e,n){if(1&e&&(s.j41(0,"ion-item",9)(1,"ion-label"),s.nrm(2,"core-format-text",7),s.k0s()()),2&e){const e=s.XpG(2);s.R7$(2),s.Y8G("text",e.competency.competency.description)("contextLevel",e.contextLevel)("contextInstanceId",e.contextInstanceId)}}function AddonCompetencyCompetencySummaryPage_ion_card_12_ng_container_9_Template(e,n){if(1&e){const e=s.RV6();s.qex(0),s.EFF(1,"  /  "),s.j41(2,"button",12),s.bIt("click",(function AddonCompetencyCompetencySummaryPage_ion_card_12_ng_container_9_Template_button_click_2_listener(){const n=s.eBV(e).$implicit,t=s.XpG(2);return s.Njj(t.openCompetencySummary(n.id))})),s.nrm(3,"core-format-text",7),s.k0s(),s.bVm()}if(2&e){const e=n.$implicit,t=s.XpG(2);s.R7$(3),s.Y8G("text",e.name)("contextLevel",t.contextLevel)("contextInstanceId",t.contextInstanceId)}}function AddonCompetencyCompetencySummaryPage_ion_card_12_Template(e,n){if(1&e&&(s.j41(0,"ion-card"),s.DNE(1,AddonCompetencyCompetencySummaryPage_ion_card_12_ion_item_1_Template,3,3,"ion-item",8),s.j41(2,"ion-item",9)(3,"ion-label")(4,"p",10),s.EFF(5),s.nI1(6,"translate"),s.k0s(),s.j41(7,"p"),s.nrm(8,"core-format-text",7),s.DNE(9,AddonCompetencyCompetencySummaryPage_ion_card_12_ng_container_9_Template,4,3,"ng-container",11),s.k0s()()()()),2&e){const e=s.XpG();s.R7$(),s.Y8G("ngIf",e.competency.competency.description),s.R7$(4),s.JRh(s.bMT(6,6,"addon.competency.path")),s.R7$(3),s.Y8G("text",e.competency.comppath.framework.name)("contextLevel",e.contextLevel)("contextInstanceId",e.contextInstanceId),s.R7$(),s.Y8G("ngForOf",e.competency.comppath.ancestors)}}let f=(()=>{var e;class AddonCompetencyCompetencySummaryPage{constructor(){var e=this;this.competencyLoaded=!1,this.logView=p.j.once((0,o.A)((function*(){e.competency&&(yield a.g.ignoreErrors(c.AddonCompetency.logCompetencyView(e.competencyId,e.competency.competency.shortname)),d.OF.logEvent({type:d.qr.VIEW_ITEM_LIST,ws:"core_competency_competency_viewed",name:e.competency.competency.shortname,data:{competencyId:e.competencyId,category:"competency"},url:`/admin/tool/lp/user_competency.php?id=${e.competencyId}`}))})))}ngOnInit(){var e=this;return(0,o.A)((function*(){try{e.competencyId=r.CoreNavigator.getRequiredRouteNumberParam("competencyId"),e.contextLevel=r.CoreNavigator.getRouteParam("contextLevel"),e.contextInstanceId=r.CoreNavigator.getRouteNumberParam("contextInstanceId")}catch(e){return i.CoreDomUtils.showErrorModal(e),r.CoreNavigator.back(),void 0}try{yield e.fetchCompetency()}finally{e.competencyLoaded=!0}}))()}fetchCompetency(){var e=this;return(0,o.A)((function*(){try{const t=yield c.AddonCompetency.getCompetencySummary(e.competencyId);var n;if(!e.contextLevel||void 0===e.contextInstanceId)e.contextLevel="user",e.contextInstanceId=null===(n=t.usercompetency)||void 0===n?void 0:n.userid;e.competency=t.competency,e.logView()}catch(e){i.CoreDomUtils.showErrorModalDefault(e,"Error getting competency summary data.")}}))()}refreshCompetency(e){c.AddonCompetency.invalidateCompetencySummary(this.competencyId).finally((()=>{this.fetchCompetency().finally((()=>{null==e||e.complete()}))}))}openCompetencySummary(e){r.CoreNavigator.navigate(`../../${e}/${m.kO}`,{params:{contextLevel:this.contextLevel,contextInstanceId:this.contextInstanceId}})}}return(e=AddonCompetencyCompetencySummaryPage).ɵfac=function AddonCompetencyCompetencySummaryPage_Factory(n){return new(n||e)},e.ɵcmp=s.VBU({type:e,selectors:[["page-addon-competency-competency-summary"]],decls:13,vars:10,consts:[["slot","start"],[3,"text"],[4,"ngIf"],[1,"limited-width"],["slot","fixed",3,"ionRefresh","disabled"],[3,"pullingText"],[3,"hideUntil"],[3,"text","contextLevel","contextInstanceId"],["class","ion-text-wrap",4,"ngIf"],[1,"ion-text-wrap"],[1,"item-heading"],[4,"ngFor","ngForOf"],[1,"as-link",3,"click"]],template:function AddonCompetencyCompetencySummaryPage_Template(e,n){1&e&&(s.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),s.nrm(3,"ion-back-button",1),s.nI1(4,"translate"),s.k0s(),s.j41(5,"ion-title"),s.DNE(6,AddonCompetencyCompetencySummaryPage_h1_6_Template,4,4,"h1",2),s.k0s()()(),s.j41(7,"ion-content",3)(8,"ion-refresher",4),s.bIt("ionRefresh",(function AddonCompetencyCompetencySummaryPage_Template_ion_refresher_ionRefresh_8_listener(e){return n.refreshCompetency(e.target)})),s.nrm(9,"ion-refresher-content",5),s.nI1(10,"translate"),s.k0s(),s.j41(11,"core-loading",6),s.DNE(12,AddonCompetencyCompetencySummaryPage_ion_card_12_Template,10,8,"ion-card",2),s.k0s()()),2&e&&(s.R7$(3),s.Y8G("text",s.bMT(4,6,"core.back")),s.R7$(3),s.Y8G("ngIf",n.competency),s.R7$(2),s.Y8G("disabled",!n.competencyLoaded),s.R7$(),s.FS9("pullingText",s.bMT(10,8,"core.pulltorefresh")),s.R7$(2),s.Y8G("hideUntil",n.competencyLoaded),s.R7$(),s.Y8G("ngIf",n.competency))},dependencies:[_.Sq,_.bT,l.R,y.B,u.i,g.QW,g.b_,g.W9,g.eU,g.uz,g.he,g.To,g.Ki,g.BC,g.ai,g.el,C.D9],encapsulation:2}),AddonCompetencyCompetencySummaryPage})()},8657:(e,n,t)=>{t.r(n),t.d(n,{AddonCompetencyHelper:()=>d,AddonCompetencyHelperProvider:()=>p});var o=t(10467),c=t(52749),r=t(41140),i=t(98870),a=t(79555),m=t(54438);let p=(()=>{var e;class AddonCompetencyHelperProvider{getProfile(e){return(0,o.A)((function*(){if(e&&e!=c.CoreSites.getCurrentSiteUserId())return i.CoreUser.getProfile(e,void 0,!0)}))()}getCompetencyStatusName(e){let n;switch(e){case r.AddonCompetencyProvider.REVIEW_STATUS_IDLE:n="idle";break;case r.AddonCompetencyProvider.REVIEW_STATUS_IN_REVIEW:n="inreview";break;case r.AddonCompetencyProvider.REVIEW_STATUS_WAITING_FOR_REVIEW:n="waitingforreview";break;default:return String(e)}return a.HT.instant("addon.competency.usercompetencystatus_"+n)}getPlanStatusName(e){let n;switch(e){case r.AddonCompetencyProvider.STATUS_DRAFT:n="draft";break;case r.AddonCompetencyProvider.STATUS_ACTIVE:n="active";break;case r.AddonCompetencyProvider.STATUS_COMPLETE:n="complete";break;case r.AddonCompetencyProvider.STATUS_WAITING_FOR_REVIEW:n="waitingforreview";break;case r.AddonCompetencyProvider.STATUS_IN_REVIEW:n="inreview";break;default:return String(e)}return a.HT.instant("addon.competency.planstatus"+n)}}return(e=AddonCompetencyHelperProvider).ɵfac=function AddonCompetencyHelperProvider_Factory(n){return new(n||e)},e.ɵprov=m.jDH({token:e,factory:e.ɵfac,providedIn:"root"}),AddonCompetencyHelperProvider})();const d=(0,a.Qd)(p)},52266:(e,n,t)=>{t.d(n,{Z:()=>CoreSwipeNavigationItemsManager});var o=t(10467),c=t(15324),r=t(95990);class CoreSwipeNavigationItemsManager extends r.u{start(){var e=this;return(0,o.A)((function*(){e.updateSelectedItem()}))()}navigateToNextItem(){var e=this;return(0,o.A)((function*(){yield e.navigateToItemBy(1,"forward")}))()}navigateToPreviousItem(){var e=this;return(0,o.A)((function*(){yield e.navigateToItemBy(-1,"back")}))()}hasNextItem(){var e=this;return(0,o.A)((function*(){return!!(yield e.getItemBy(1))}))()}hasPreviousItem(){var e=this;return(0,o.A)((function*(){return!!(yield e.getItemBy(-1))}))()}getCurrentPageRoute(){return c.CoreNavigator.getCurrentRoute()}getSelectedItemPathFromRoute(e){const n=[];for(;e&&(n.push(...c.CoreNavigator.getRouteUrl(e)),e.firstChild);)e=e.firstChild;return n.map((e=>e.path)).join("/").replace(/\/+/,"/").trim()||null}navigateToItemBy(e,n){var t=this;return(0,o.A)((function*(){const o=yield t.getItemBy(e);o&&(yield t.navigateToItem(o,{animationDirection:n,replace:!0}))}))()}getItemBy(e){var n=this;return(0,o.A)((function*(){var t;const o=n.getSource().getItems(),c=null!==(t=n.selectedItem&&(null==o?void 0:o.indexOf(n.selectedItem)))&&void 0!==t?t:-1;if(-1===c||null===o)return null;const r=e>0?1:-1;let i=c,a=0;for(;a!==e;){if(i+=r,i<0)return null;if(i>=o.length)break;n.skipItemInSwipe(o[i])||(a+=r)}return a===e?o[i]:n.getSource().isCompleted()?null:(yield n.getSource().load(),n.getItemBy(e))}))()}skipItemInSwipe(e){return!1}}}}]);