"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1948],{51948:(e,r,n)=>{n.r(r),n.d(r,{AddonModWorkshopAssessmentStrategyNumErrorsHandler:()=>i,AddonModWorkshopAssessmentStrategyNumErrorsHandlerLazyService:()=>a});var t=n(10467),s=n(79555),o=n(58753),d=n(54438);let a=(()=>{var e;class AddonModWorkshopAssessmentStrategyNumErrorsHandlerLazyService extends o.t{getComponent(){return(0,t.A)((function*(){const{AddonModWorkshopAssessmentStrategyNumErrorsComponent:e}=yield n.e(3631).then(n.bind(n,33631));return e}))()}getOriginalValues(e){return(0,t.A)((function*(){const r=[];return e.fields.forEach(((n,t)=>{n.dimtitle=s.HT.instant("addon.mod_workshop_assessment_numerrors.dimensionnumber",{$a:n.number}),e.current[t]||(e.current[t]={}),r[t]={},r[t].peercomment=e.current[t].peercomment||"",r[t].number=n.number,r[t].grade=e.current[t].grade||""})),r}))()}hasDataChanged(e,r){for(const n in e){if(e[n].grade!=r[n].grade)return!0;if(e[n].peercomment!=r[n].peercomment)return!0}return!1}prepareAssessmentData(e,r){return(0,t.A)((function*(){const n={},t={};let o=!1;if(r.fields.forEach(((d,a)=>{if(a<r.dimenssionscount){var i;const m=parseInt(String(e[a].grade),10);isNaN(m)||1!=m&&-1!=m?(t["grade_"+a]=s.HT.instant("core.required"),o=!0):n["grade__idx_"+a]=m,n["peercomment__idx_"+a]=null!==(i=e[a].peercomment)&&void 0!==i?i:"",n["gradeid__idx_"+a]=parseInt(r.current[a].gradeid,10)||0,n["dimensionid__idx_"+a]=parseInt(d.dimensionid,10),n["weight__idx_"+a]=parseInt(d.weight,10)||0}})),o)throw t;return n}))()}}return(e=AddonModWorkshopAssessmentStrategyNumErrorsHandlerLazyService).ɵfac=(()=>{let r;return function AddonModWorkshopAssessmentStrategyNumErrorsHandlerLazyService_Factory(n){return(r||(r=d.xGo(e)))(n||e)}})(),e.ɵprov=d.jDH({token:e,factory:e.ɵfac,providedIn:"root"}),AddonModWorkshopAssessmentStrategyNumErrorsHandlerLazyService})();const i=(0,s.Qd)(a)}}]);