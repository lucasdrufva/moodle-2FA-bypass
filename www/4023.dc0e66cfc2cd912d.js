"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4023],{14023:(e,i,t)=>{t.r(i),t.d(i,{AddonModWikiCreateLinkHandler:()=>y,AddonModWikiCreateLinkHandlerLazyService:()=>g});var r=t(10467),a=t(44682),n=t(15324),d=t(89911),o=t(79555),s=t(67981),c=t(51069),u=t(93320),l=t(23780),k=t(54438);let g=(()=>{var e;class AddonModWikiCreateLinkHandlerLazyService extends u.g{currentStateIsSameWiki(e,i,t){return(0,r.A)((function*(){if(!e)return!1;const r=n.CoreNavigator.getRouteParams(e),a=n.CoreNavigator.getRouteQueryParams(e);if(a.subwikiId==i)return!0;const d={cmId:r.cmId,readingStrategy:1,siteId:t};if(a.pageId)try{return(yield s.N.getPageContents(a.pageId,d)).subwikiid==i}catch{}try{const e=yield s.N.getWiki(r.courseId,r.cmId,d);return yield s.N.wikiHasSubwiki(e.id,i,d)}catch{return!1}}))()}handleAction(e,i,o){var s=this;return(0,r.A)((function*(){const r=yield l.CoreLoadings.show(),{AddonModWikiIndexPage:u}=yield Promise.all([t.e(4078),t.e(2076)]).then(t.bind(t,49072));try{const t=n.CoreNavigator.getCurrentRoute({pageComponent:u});if(!t)return;const r=parseInt(o.swid,10),d=parseInt(o.wid,10);let l=c.Jb;if(yield s.currentStateIsSameWiki(t,r,e)){const e=n.CoreNavigator.getRouteParams(t);l+=`/${e.courseId}/${e.cmId}/edit`}else if(d){const i=yield a.CoreCourse.getModuleBasicInfoByInstance(d,"wiki",{siteId:e,readingStrategy:1});l+=`/${i.course}/${i.id}/edit`}else l+=`/${i||0}/0/edit`;n.CoreNavigator.navigateToSitePath(l,{params:{pageTitle:o.title,subwikiId:r},siteId:e})}catch(e){d.CoreDomUtils.showErrorModalDefault(e,"addon.mod_wiki.errorloadingpage",!0)}finally{r.dismiss()}}))()}}return(e=AddonModWikiCreateLinkHandlerLazyService).ɵfac=(()=>{let i;return function AddonModWikiCreateLinkHandlerLazyService_Factory(t){return(i||(i=k.xGo(e)))(t||e)}})(),e.ɵprov=k.jDH({token:e,factory:e.ɵfac,providedIn:"root"}),AddonModWikiCreateLinkHandlerLazyService})();const y=(0,o.Qd)(g)}}]);