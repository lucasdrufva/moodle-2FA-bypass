"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6553,178],{80178:(e,o,r)=>{r.r(o),r.d(o,{AddonModWorkshopHelper:()=>y,AddonModWorkshopHelperProvider:()=>A});var s=r(10467),d=r(75629),i=r(16082),n=r(45507),t=r(52749),a=r(75383),l=r(81690),u=r(79555),c=r(65964),m=r(67193),p=r(26327),f=r(81552),h=r(55554),g=r(54438);let A=(()=>{var e;class AddonModWorkshopHelperProvider{getTask(e,o){return e.find((e=>e.code==o))}isTaskDone(e,o){const r=this.getTask(e,o);return!r||!!r.completed}canSubmit(e,o,r){const s=e.useexamples&&1==e.examplesmode,d=o.canmanageexamples||0==e.examplesmode||this.isTaskDone(r,"examples");return e.phase>10&&o.cansubmit&&(!s||d)}canAssess(e,o){return!(e.useexamples&&2==e.examplesmode)||o.canmanageexamples}getUserSubmission(e,o={}){return(0,s.A)((function*(){const r=o.userId||t.CoreSites.getCurrentSiteUserId();return(yield m.AddonModWorkshop.getSubmissions(e,o)).find((e=>e.authorid==r))}))()}getSubmissionById(e,o,r={}){return(0,s.A)((function*(){try{return yield m.AddonModWorkshop.getSubmission(e,o,r)}catch{const s=(yield m.AddonModWorkshop.getSubmissions(e,r)).find((e=>e.id==o));if(!s)throw new d.CoreError("Submission not found");return s}}))()}getReviewerAssessmentById(e,o,r={}){return(0,s.A)((function*(){let s;try{s=yield m.AddonModWorkshop.getAssessment(e,o,r)}catch(d){if(s=(yield m.AddonModWorkshop.getReviewerAssessments(e,r)).find((e=>e.id===o)),!s)throw d}return s.form=yield m.AddonModWorkshop.getAssessmentForm(e,o,r),s}))()}getReviewerAssessments(e,o={}){var r=this;return(0,s.A)((function*(){o.siteId=o.siteId||t.CoreSites.getCurrentSiteId();const s=yield m.AddonModWorkshop.getReviewerAssessments(e,o),d=[];return s.forEach((s=>{d.push(r.getSubmissionById(e,s.submissionid,o).then((e=>{s.submission=e}))),d.push(m.AddonModWorkshop.getAssessmentForm(e,s.id,o).then((e=>{s.form=e})))})),yield Promise.all(d),s}))()}deleteSubmissionStoredFiles(e,o){return(0,s.A)((function*(){const r=yield p.AddonModWorkshopOffline.getSubmissionFolder(e,o);yield h.g.ignoreErrors(n.CoreFile.removeDir(r))}))()}storeSubmissionFiles(e,o,r){return(0,s.A)((function*(){const s=yield p.AddonModWorkshopOffline.getSubmissionFolder(e,r);return i.CoreFileUploader.storeFilesToUpload(s,o)}))()}uploadOrStoreSubmissionFiles(e,o,r,s){return r?this.storeSubmissionFiles(e,o,s):i.CoreFileUploader.uploadOrReuploadFiles(o,f.Ug,e,s)}getStoredSubmissionFiles(e,o){return(0,s.A)((function*(){const r=yield p.AddonModWorkshopOffline.getSubmissionFolder(e,o);return h.g.ignoreErrors(i.CoreFileUploader.getStoredFiles(r),[])}))()}getSubmissionFilesFromOfflineFilesObject(e,o,r){return(0,s.A)((function*(){const s=yield p.AddonModWorkshopOffline.getSubmissionFolder(o,r);return i.CoreFileUploader.getStoredFilesFromOfflineFilesObject(e,s)}))()}deleteAssessmentStoredFiles(e,o,r){return(0,s.A)((function*(){const s=yield p.AddonModWorkshopOffline.getAssessmentFolder(e,o,r);yield h.g.ignoreErrors(n.CoreFile.removeDir(s))}))()}storeAssessmentFiles(e,o,r,d){return(0,s.A)((function*(){const s=yield p.AddonModWorkshopOffline.getAssessmentFolder(e,o,d);return i.CoreFileUploader.storeFilesToUpload(s,r)}))()}uploadOrStoreAssessmentFiles(e,o,r,s,d){return s?this.storeAssessmentFiles(e,o,r,d):i.CoreFileUploader.uploadOrReuploadFiles(r,f.Ug,e,d)}getStoredAssessmentFiles(e,o,r){return(0,s.A)((function*(){const s=yield p.AddonModWorkshopOffline.getAssessmentFolder(e,o,r);return h.g.ignoreErrors(i.CoreFileUploader.getStoredFiles(s),[])}))()}getAssessmentFilesFromOfflineFilesObject(e,o,r,d){return(0,s.A)((function*(){const s=yield p.AddonModWorkshopOffline.getAssessmentFolder(o,r,d);return i.CoreFileUploader.getStoredFilesFromOfflineFilesObject(e,s)}))()}applyOfflineData(e,o=[]){var r=this;return(0,s.A)((function*(){if(0===o.length)return e;const s=null!=e?e:{id:0,workshopid:0,title:"",content:"",timemodified:0,example:!1,authorid:0,timecreated:0,contenttrust:0,attachment:0,published:!1,late:0};let d;const i=o[0].workshopid;return o.forEach((e=>{switch(e.action){case"add":case"update":s.title=e.title,s.content=e.content,s.title=e.title,s.courseid=e.courseid,s.submissionmodified=e.timemodified/1e3,s.offline=!0,d=e.attachmentsid;break;case"delete":s.deleted=!0,s.submissionmodified=e.timemodified/1e3}})),s.attachmentfiles=d?yield r.getSubmissionFilesFromOfflineFilesObject(d,i):[],s}))()}prepareAssessmentData(e,o,r,d,i=0){return(0,s.A)((function*(){var s;if(2==e.overallfeedbackmode&&!r){throw{feedbackauthor:u.HT.instant("core.err_required")}}const n=(yield c.AddonWorkshopAssessmentStrategyDelegate.prepareAssessmentData(null!==(s=e.strategy)&&void 0!==s?s:"",o,d))||{};return n.feedbackauthor=r,n.feedbackauthorformat=a.II.FORMAT_HTML,n.feedbackauthorattachmentsid=i,n.nodims=d.dimenssionscount,n}))()}realGradeValueHelper(e,o=0,r=0){return"string"==typeof e?e:null!=e?0===o?"0":(e=a.Ni.roundToDecimals(o*e/100,r),l.j.formatFloat(e)):void 0}realGradeValue(e,o){return o.grade=this.realGradeValueHelper(o.grade,e.grade,e.gradedecimals),o.gradinggrade=this.realGradeValueHelper(o.gradinggrade,e.gradinggrade,e.gradedecimals),o.gradinggradeover=this.realGradeValueHelper(o.gradinggradeover,e.gradinggrade,e.gradedecimals),o}showGrade(e){return null!=e}}return(e=AddonModWorkshopHelperProvider).ɵfac=function AddonModWorkshopHelperProvider_Factory(o){return new(o||e)},e.ɵprov=g.jDH({token:e,factory:e.ɵfac,providedIn:"root"}),AddonModWorkshopHelperProvider})();const y=(0,u.Qd)(A)},36553:(e,o,r)=>{r.r(o),r.d(o,{AddonModWorkshopSync:()=>W,AddonModWorkshopSyncProvider:()=>b});var s=r(10467),d=r(42008),i=r(49446),n=r(97254),t=r(94455),a=r(52749),l=r(48966),u=r(49588),c=r(43411),m=r(79555),p=r(49882),f=r(67193),h=r(80178),g=r(26327),A=r(81552),y=r(55554),k=r(54438);let b=(()=>{var e;class AddonModWorkshopSyncProvider extends d.l{constructor(){super("AddonModWorkshopSyncProvider"),this.componentTranslatableString="workshop"}hasDataToSync(e,o){return g.AddonModWorkshopOffline.hasWorkshopOfflineData(e,o)}syncAllWorkshops(e,o){return this.syncOnSites("all workshops",(e=>this.syncAllWorkshopsFunc(!!o,e)),e)}syncAllWorkshopsFunc(e,o){var r=this;return(0,s.A)((function*(){const d=(yield g.AddonModWorkshopOffline.getAllWorkshops(o)).map(function(){var d=(0,s.A)((function*(s){const d=e?yield r.syncWorkshop(s,o):yield r.syncWorkshopIfNeeded(s,o);d&&d.updated&&p.z.trigger(A.N7,{workshopId:s,warnings:d.warnings},o)}));return function(e){return d.apply(this,arguments)}}());yield Promise.all(d)}))()}syncWorkshopIfNeeded(e,o){var r=this;return(0,s.A)((function*(){if(yield r.isSyncNeeded(e,o))return r.syncWorkshop(e,o)}))()}syncWorkshop(e,o){o=o||a.CoreSites.getCurrentSiteId();const r=this.getOngoingSync(e,o);if(r)return r;if(l.CoreSync.isBlocked(A.Ug,e,o))throw this.logger.debug(`Cannot sync workshop '${e}' because it is blocked.`),new d.D(m.HT.instant("core.errorsyncblocked",{$a:this.componentTranslate}));this.logger.debug(`Try to sync workshop '${e}' in site ${o}'`);const s=this.performSyncWorkshop(e,o);return this.addOngoingSync(e,s,o)}performSyncWorkshop(e,o){var r=this;return(0,s.A)((function*(){const s={warnings:[],updated:!1};yield y.g.ignoreErrors(n.CoreCourseLogHelper.syncActivity(A.Ug,e,o));const d=yield Promise.all([y.g.ignoreErrors(g.AddonModWorkshopOffline.getSubmissions(e,o),[]),y.g.ignoreErrors(g.AddonModWorkshopOffline.getAssessments(e,o),[]),y.g.ignoreErrors(g.AddonModWorkshopOffline.getEvaluateSubmissions(e,o),[]),y.g.ignoreErrors(g.AddonModWorkshopOffline.getEvaluateAssessments(e,o),[])]);let a;for(const e in d)if(d[e].length>0&&d[e][0].courseid){a=d[e][0].courseid;break}if(!a)return yield y.g.ignoreErrors(r.setSyncTime(e,o)),s;if(!t.WE.isOnline())throw new i.CoreNetworkError;const l=yield f.AddonModWorkshop.getWorkshopById(a,e,{siteId:o}),u=d[1],c=d[2],m=d[3],p={},h=[];return d[0].forEach((e=>{p[e.submissionid]=p[e.submissionid]||[],p[e.submissionid].push(e)})),Object.keys(p).forEach((e=>{h.push(r.syncSubmission(l,p[e],s,o).then((()=>{s.updated=!0})))})),u.forEach((e=>{h.push(r.syncAssessment(l,e,s,o).then((()=>{s.updated=!0})))})),c.forEach((e=>{h.push(r.syncEvaluateSubmission(l,e,s,o).then((()=>{s.updated=!0})))})),m.forEach((e=>{h.push(r.syncEvaluateAssessment(l,e,s,o).then((()=>{s.updated=!0})))})),yield Promise.all(h),s.updated&&(yield y.g.ignoreErrors(f.AddonModWorkshop.invalidateContentById(e,a,o))),yield y.g.ignoreErrors(r.setSyncTime(e,o)),s}))()}syncSubmission(e,o,r,d){var i=this;return(0,s.A)((function*(){let n,t=0,a=(o=o.sort(((e,o)=>e.timemodified-o.timemodified)))[0].submissionid;if(a>0)try{t=(yield f.AddonModWorkshop.getSubmission(e.id,a,{cmId:e.coursemodule,siteId:d})).timemodified}catch{t=-1}if(t<0||t>=o[0].timemodified)return r.updated=!0,n=m.HT.instant("addon.mod_workshop.warningsubmissionmodified"),yield g.AddonModWorkshopOffline.deleteAllSubmissionActions(e.id,d),i.addOfflineDataDeletedWarning(r.warnings,e.name,n),void 0;yield Promise.all(o.map(function(){var o=(0,s.A)((function*(o){a=o.submissionid>0?o.submissionid:a;try{let r;if(o.attachmentsid){const s=yield h.AddonModWorkshopHelper.getSubmissionFilesFromOfflineFilesObject(o.attachmentsid,e.id,d);r=yield h.AddonModWorkshopHelper.uploadOrStoreSubmissionFiles(e.id,s,!1,d)}else r=yield h.AddonModWorkshopHelper.uploadOrStoreSubmissionFiles(e.id,[],!1,d);switch(0==e.submissiontypefile&&(r=void 0),o.action){case"add":a=yield f.AddonModWorkshop.addSubmissionOnline(e.id,o.title,o.content,r,d);break;case"update":yield f.AddonModWorkshop.updateSubmissionOnline(a,o.title,o.content,r,d);break;case"delete":yield f.AddonModWorkshop.deleteSubmissionOnline(a,d)}}catch(e){throw c.CoreWSError.isWebServiceError(e)&&(n=u.CoreErrorHelper.getErrorMessageFromError(e)),e}if(r.updated=!0,yield g.AddonModWorkshopOffline.deleteSubmissionAction(o.workshopid,o.action,d),"add"==o.action||"update"==o.action)return h.AddonModWorkshopHelper.deleteSubmissionStoredFiles(o.workshopid,d)}));return function(e){return o.apply(this,arguments)}}())),n&&i.addOfflineDataDeletedWarning(r.warnings,e.name,n)}))()}syncAssessment(e,o,r,d){var i=this;return(0,s.A)((function*(){let s;const n=o.assessmentid;let t=0;try{t=(yield f.AddonModWorkshop.getAssessment(e.id,n,{cmId:e.coursemodule,siteId:d})).timemodified}catch{t=-1}if(t<0||t>=o.timemodified)return r.updated=!0,s=m.HT.instant("addon.mod_workshop.warningassessmentmodified"),yield g.AddonModWorkshopOffline.deleteAssessment(e.id,n,d),i.addOfflineDataDeletedWarning(r.warnings,e.name,s),void 0;let a=0;const l=o.inputdata;try{let o=[];l.feedbackauthorattachmentsid&&"number"!=typeof l.feedbackauthorattachmentsid&&(o=yield h.AddonModWorkshopHelper.getAssessmentFilesFromOfflineFilesObject(l.feedbackauthorattachmentsid,e.id,n,d)),a=yield h.AddonModWorkshopHelper.uploadOrStoreAssessmentFiles(e.id,n,o,!1,d),l.feedbackauthorattachmentsid=a||0,yield f.AddonModWorkshop.updateAssessmentOnline(n,l,d)}catch(e){if(!c.CoreWSError.isWebServiceError(e))throw e;s=u.CoreErrorHelper.getErrorMessageFromError(e)}r.updated=!0,yield g.AddonModWorkshopOffline.deleteAssessment(e.id,n,d),yield h.AddonModWorkshopHelper.deleteAssessmentStoredFiles(e.id,n,d),s&&i.addOfflineDataDeletedWarning(r.warnings,e.name,s)}))()}syncEvaluateSubmission(e,o,r,d){var i=this;return(0,s.A)((function*(){let s;const n=o.submissionid;let t=0;try{t=(yield f.AddonModWorkshop.getSubmission(e.id,n,{cmId:e.coursemodule,siteId:d})).timemodified}catch{t=-1}if(t<0||t>=o.timemodified)return r.updated=!0,s=m.HT.instant("addon.mod_workshop.warningsubmissionmodified"),yield g.AddonModWorkshopOffline.deleteEvaluateSubmission(e.id,n,d),i.addOfflineDataDeletedWarning(r.warnings,e.name,s),void 0;try{yield f.AddonModWorkshop.evaluateSubmissionOnline(n,o.feedbacktext,o.published,o.gradeover,d)}catch(e){if(!c.CoreWSError.isWebServiceError(e))throw e;s=u.CoreErrorHelper.getErrorMessageFromError(e)}r.updated=!0,yield g.AddonModWorkshopOffline.deleteEvaluateSubmission(e.id,n,d),s&&i.addOfflineDataDeletedWarning(r.warnings,e.name,s)}))()}syncEvaluateAssessment(e,o,r,d){var i=this;return(0,s.A)((function*(){let s;const n=o.assessmentid;let t=0;try{t=(yield f.AddonModWorkshop.getAssessment(e.id,n,{cmId:e.coursemodule,siteId:d})).timemodified}catch{t=-1}if(t<0||t>=o.timemodified)return r.updated=!0,s=m.HT.instant("addon.mod_workshop.warningassessmentmodified"),g.AddonModWorkshopOffline.deleteEvaluateAssessment(e.id,n,d);try{yield f.AddonModWorkshop.evaluateAssessmentOnline(n,o.feedbacktext,o.weight,o.gradinggradeover,d)}catch(e){if(!c.CoreWSError.isWebServiceError(e))throw e;s=u.CoreErrorHelper.getErrorMessageFromError(e)}r.updated=!0,yield g.AddonModWorkshopOffline.deleteEvaluateAssessment(e.id,n,d),s&&i.addOfflineDataDeletedWarning(r.warnings,e.name,s)}))()}}return(e=AddonModWorkshopSyncProvider).ɵfac=function AddonModWorkshopSyncProvider_Factory(o){return new(o||e)},e.ɵprov=k.jDH({token:e,factory:e.ɵfac,providedIn:"root"}),AddonModWorkshopSyncProvider})();const W=(0,m.Qd)(b)}}]);