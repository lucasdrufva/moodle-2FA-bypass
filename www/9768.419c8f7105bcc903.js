"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9768],{79768:(t,i,n)=>{n.r(i),n.d(i,{default:()=>tt});var o=n(94114),e=n(3353),a=n(10467),r=n(89911),c=n(81690),s=n(49882),d=n(98320),l=n(15324),f=n(29492),_=n(83696),g=n(71758),m=n(52749),u=n(16474),p=n(99522);class AddonNotificationsNotificationsSource extends p.F{constructor(){super(...arguments),this.totals={}}getItemPath(t){return t.id.toString()}reset(){this.totals={},super.reset()}loadPageItems(t){var i=this;return(0,a.A)((function*(){const n=yield i.loadNotifications(d.AddonNotificationsGetReadType.BOTH,t*i.getPageLength());return{items:n.notifications,hasMoreItems:n.hasMoreNotifications}}))()}loadNotifications(t,i,n){var o=this;return(0,a.A)((function*(){var e,a;if(n=null!==(e=n)&&void 0!==e?e:o.getPageLength(),t in o.totals&&o.totals[t]<=i)return{notifications:[],hasMoreNotifications:!1};const r=yield d.AddonNotifications.getNotificationsWithStatus(t,{offset:i,limit:n});return r.length<n&&(o.totals[t]=i+r.length),{notifications:r,hasMoreNotifications:(null!==(a=o.totals[t])&&void 0!==a?a:Number.MAX_VALUE)>i+n}}))()}setItems(t,i){const n=t.slice(0);n.sort(((t,i)=>t.timecreated<i.timecreated?1:-1)),super.setItems(n,i)}getPageLength(){return d.AddonNotificationsProvider.LIST_LIMIT}}var h=n(2401);class AddonLegacyNotificationsNotificationsSource extends AddonNotificationsNotificationsSource{loadPageItems(t){var i=this;return(0,a.A)((function*(){let n=[],o=!1,e=0;const a=i.getPageLength(),totalUnread=()=>{var t;return null!==(t=i.totals[d.AddonNotificationsGetReadType.UNREAD])&&void 0!==t?t:Number.MAX_VALUE};if(totalUnread()>t*a){const r=yield i.loadNotifications(d.AddonNotificationsGetReadType.UNREAD,t*a);n=n.concat(r.notifications),o=r.hasMoreNotifications,e=r.notifications.length}if(totalUnread()<(t+1)*a){const r=Math.max(0,t*a-totalUnread()),c=yield i.loadNotifications(d.AddonNotificationsGetReadType.READ,r,a-e);n=n.concat(c.notifications),o=c.hasMoreNotifications}return{items:n,hasMoreItems:o}}))()}}var N=n(67935),v=n(85190),P=n(74431),b=n(18022),M=n(55554),C=n(54438),A=n(60177),x=n(16986),I=n(66198),O=n(64422),R=n(16658),T=n(10892),y=n(86198),k=n(58197),G=n(66731),w=n(88246),L=n(43570),$=n(73465),E=n(19547),S=n(32885),j=n(93453),F=n(73955);const _c0=t=>({$a:t});function AddonNotificationsListPage_ion_card_17_Template(t,i){if(1&t){const t=C.RV6();C.j41(0,"ion-card",12)(1,"ion-item",13),C.nrm(2,"ion-icon",14),C.j41(3,"ion-label")(4,"p")(5,"strong"),C.EFF(6),C.nI1(7,"translate"),C.k0s()(),C.j41(8,"p"),C.EFF(9),C.nI1(10,"translate"),C.k0s()()(),C.j41(11,"div",15)(12,"ion-button",16),C.bIt("click",(function AddonNotificationsListPage_ion_card_17_Template_ion_button_click_12_listener(){C.eBV(t);const i=C.XpG();return C.Njj(i.hidePermissionWarning())})),C.EFF(13),C.nI1(14,"translate"),C.nI1(15,"coreNoPeriod"),C.k0s(),C.j41(16,"ion-button",17),C.bIt("click",(function AddonNotificationsListPage_ion_card_17_Template_ion_button_click_16_listener(){C.eBV(t);const i=C.XpG();return C.Njj(i.openSettings())})),C.EFF(17),C.nI1(18,"translate"),C.k0s()()()}2&t&&(C.R7$(6),C.JRh(C.bMT(7,4,"core.turnonnotifications")),C.R7$(3),C.JRh(C.bMT(10,6,"core.turnonnotificationsmessage")),C.R7$(4),C.SpI(" ",C.bMT(15,10,C.bMT(14,8,"core.dontshowagain"))," "),C.R7$(4),C.JRh(C.bMT(18,12,"core.turnon")))}function AddonNotificationsListPage_ion_item_18_core_user_avatar_1_div_1_Template(t,i){if(1&t&&(C.j41(0,"div",26),C.nrm(1,"img",27),C.k0s()),2&t){const t=C.XpG(2).$implicit;C.R7$(),C.Y8G("url",t.iconurl)}}function AddonNotificationsListPage_ion_item_18_core_user_avatar_1_Template(t,i){if(1&t&&(C.j41(0,"core-user-avatar",24),C.DNE(1,AddonNotificationsListPage_ion_item_18_core_user_avatar_1_div_1_Template,2,1,"div",25),C.k0s()),2&t){const t=C.XpG().$implicit;C.Y8G("user",t)("profileUrl",t.profileimageurlfrom)("fullname",t.userfromfullname)("userId",t.useridfrom),C.R7$(),C.Y8G("ngIf",t.iconurl)}}function AddonNotificationsListPage_ion_item_18_ng_container_2_img_1_Template(t,i){if(1&t&&C.nrm(0,"img",30),2&t){const t=C.XpG(2).$implicit;C.Y8G("url",t.imgUrl)}}function AddonNotificationsListPage_ion_item_18_ng_container_2_div_2_img_1_Template(t,i){if(1&t&&C.nrm(0,"img",34),2&t){const t=C.XpG(3).$implicit;C.Y8G("url",t.iconurl)}}function AddonNotificationsListPage_ion_item_18_ng_container_2_div_2_ion_icon_2_Template(t,i){1&t&&C.nrm(0,"ion-icon",35)}function AddonNotificationsListPage_ion_item_18_ng_container_2_div_2_Template(t,i){if(1&t&&(C.j41(0,"div",31),C.DNE(1,AddonNotificationsListPage_ion_item_18_ng_container_2_div_2_img_1_Template,1,1,"img",32)(2,AddonNotificationsListPage_ion_item_18_ng_container_2_div_2_ion_icon_2_Template,1,0,"ion-icon",33),C.k0s()),2&t){const t=C.XpG(2).$implicit;C.R7$(),C.Y8G("ngIf",t.iconurl),C.R7$(),C.Y8G("ngIf",!t.iconurl)}}function AddonNotificationsListPage_ion_item_18_ng_container_2_Template(t,i){if(1&t&&(C.qex(0),C.DNE(1,AddonNotificationsListPage_ion_item_18_ng_container_2_img_1_Template,1,1,"img",28)(2,AddonNotificationsListPage_ion_item_18_ng_container_2_div_2_Template,3,2,"div",29),C.bVm()),2&t){const t=C.XpG().$implicit;C.R7$(),C.Y8G("ngIf",t.imgUrl),C.R7$(),C.Y8G("ngIf",!t.imgUrl)}}function AddonNotificationsListPage_ion_item_18_ng_container_10_Template(t,i){if(1&t&&(C.qex(0),C.EFF(1),C.bVm()),2&t){const t=C.XpG().$implicit;C.R7$(),C.SpI(" · ",t.userfromfullname,"")}}function AddonNotificationsListPage_ion_item_18_ion_note_11_Template(t,i){1&t&&(C.j41(0,"ion-note",2),C.nrm(1,"ion-icon",36),C.k0s())}function AddonNotificationsListPage_ion_item_18_Template(t,i){if(1&t){const t=C.RV6();C.j41(0,"ion-item",18),C.bIt("click",(function AddonNotificationsListPage_ion_item_18_Template_ion_item_click_0_listener(){const i=C.eBV(t).$implicit,n=C.XpG();return C.Njj(n.notifications.select(i))})),C.DNE(1,AddonNotificationsListPage_ion_item_18_core_user_avatar_1_Template,2,5,"core-user-avatar",19)(2,AddonNotificationsListPage_ion_item_18_ng_container_2_Template,3,2,"ng-container",20),C.j41(3,"ion-label")(4,"p",21),C.nI1(5,"translate"),C.nrm(6,"core-format-text",22),C.k0s(),C.j41(7,"p"),C.EFF(8),C.nI1(9,"coreTimeAgo"),C.DNE(10,AddonNotificationsListPage_ion_item_18_ng_container_10_Template,2,1,"ng-container",20),C.k0s()(),C.DNE(11,AddonNotificationsListPage_ion_item_18_ion_note_11_Template,2,0,"ion-note",23),C.k0s()}if(2&t){const t=i.$implicit,n=C.XpG();C.Y8G("detail",!1),C.BMQ("aria-current",n.notifications.getItemAriaCurrent(t)),C.R7$(),C.Y8G("ngIf",t.useridfrom>0),C.R7$(),C.Y8G("ngIf",t.useridfrom<=0),C.R7$(2),C.BMQ("aria-label",t.timeread?t.subject:C.i5U(5,11,"addon.notifications.unreadnotification",C.eq3(16,_c0,t.subject))),C.R7$(2),C.Y8G("text",t.subject)("contextInstanceId",0)("wsNotFiltered",!0),C.R7$(2),C.JRh(C.bMT(9,14,t.timecreated)),C.R7$(2),C.Y8G("ngIf",t.useridfrom>0),C.R7$(),C.Y8G("ngIf",!t.timeread)}}function AddonNotificationsListPage_core_empty_box_19_Template(t,i){1&t&&(C.nrm(0,"core-empty-box",37),C.nI1(1,"translate")),2&t&&C.Y8G("message",C.bMT(1,1,"addon.notifications.therearentnotificationsyet"))}function AddonNotificationsListPage_ion_chip_22_ion_icon_1_Template(t,i){1&t&&C.nrm(0,"ion-icon",40)}function AddonNotificationsListPage_ion_chip_22_ion_spinner_2_Template(t,i){1&t&&(C.nrm(0,"ion-spinner"),C.nI1(1,"translate")),2&t&&C.BMQ("aria-label",C.bMT(1,1,"core.loading"))}function AddonNotificationsListPage_ion_chip_22_Template(t,i){if(1&t){const t=C.RV6();C.j41(0,"ion-chip",38),C.bIt("click",(function AddonNotificationsListPage_ion_chip_22_Template_ion_chip_click_0_listener(){C.eBV(t);const i=C.XpG();return C.Njj(i.markAllNotificationsAsRead())})),C.DNE(1,AddonNotificationsListPage_ion_chip_22_ion_icon_1_Template,1,0,"ion-icon",39)(2,AddonNotificationsListPage_ion_chip_22_ion_spinner_2_Template,2,3,"ion-spinner",20),C.EFF(3),C.nI1(4,"translate"),C.k0s()}if(2&t){const t=C.XpG();C.Y8G("disabled",t.loadingMarkAllNotificationsAsRead),C.R7$(),C.Y8G("ngIf",!t.loadingMarkAllNotificationsAsRead),C.R7$(),C.Y8G("ngIf",t.loadingMarkAllNotificationsAsRead),C.R7$(),C.SpI(" ",C.bMT(4,4,"addon.notifications.markallread")," ")}}let z=(()=>{var t;class AddonNotificationsListPage{constructor(){this.fetchMoreNotificationsFailed=!1,this.canMarkAllNotificationsAsRead=!1,this.loadingMarkAllNotificationsAsRead=!1,this.hasNotificationsPermission=!0,this.permissionWarningHidden=!1,this.pendingRefresh=!1;try{const t=_.u.getOrCreateSource(m.CoreSites.getRequiredCurrentSite().isVersionGreaterEqualThan("4.0")?AddonNotificationsNotificationsSource:AddonLegacyNotificationsNotificationsSource,[]);this.notifications=new h.R(t,AddonNotificationsListPage)}catch(t){return r.CoreDomUtils.showErrorModal(t),l.CoreNavigator.back(),void 0}this.checkPermission(),this.appResumeSubscription=b.CorePlatform.resume.subscribe((()=>{this.checkPermission()}))}ngAfterViewInit(){var t=this;return(0,a.A)((function*(){yield t.fetchInitialNotifications(),t.notifications.start(t.splitView),t.cronObserver=s.z.on(d.AddonNotificationsProvider.READ_CRON_EVENT,(()=>{t.isCurrentView&&t.refreshNotifications()}),m.CoreSites.getCurrentSiteId()),t.pushObserver=g.CorePushNotificationsDelegate.on("receive").subscribe((i=>{if(!t.isCurrentView)return t.pendingRefresh=!0,void 0;c.j.isTrueOrOne(i.notif)&&m.CoreSites.isCurrentSite(i.site)&&t.refreshNotifications()})),t.readObserver=s.z.on(d.AddonNotificationsProvider.READ_CHANGED_EVENT,(i=>{if(!i.id)return;const n=t.notifications.items.find((t=>t.id===i.id));n&&(n.read=!0,n.timeread=i.time,t.loadMarkAllAsReadButton())})),m.CoreSites.loginNavigationFinished()}))()}checkPermission(){var t=this;return(0,a.A)((function*(){t.permissionWarningHidden=!!(yield v.CoreConfig.get(P.CoreConstants.DONT_SHOW_NOTIFICATIONS_PERMISSION_WARNING,0)),t.hasNotificationsPermission=yield N.CoreLocalNotifications.hasNotificationsPermission()}))()}fetchNotifications(t){var i=this;return(0,a.A)((function*(){t?yield i.notifications.reload():yield i.notifications.load(),i.fetchMoreNotificationsFailed=!1,i.loadMarkAllAsReadButton()}))()}fetchInitialNotifications(){var t=this;return(0,a.A)((function*(){try{yield t.fetchNotifications(!0)}catch(i){r.CoreDomUtils.showErrorModalDefault(i,"Error loading notifications"),t.notifications.reset()}}))()}fetchMoreNotifications(t){var i=this;return(0,a.A)((function*(){try{yield i.fetchNotifications(!1)}catch(t){r.CoreDomUtils.showErrorModalDefault(t,"Error loading more notifications"),i.fetchMoreNotificationsFailed=!0}t()}))()}markAllNotificationsAsRead(){var t=this;return(0,a.A)((function*(){t.loadingMarkAllNotificationsAsRead=!0,yield M.g.ignoreErrors(d.AddonNotifications.markAllNotificationsAsRead()),s.z.trigger(d.AddonNotificationsProvider.READ_CHANGED_EVENT,{time:u.CoreTimeUtils.timestamp()},m.CoreSites.getCurrentSiteId()),yield t.refreshNotifications()}))()}loadMarkAllAsReadButton(){var t=this;return(0,a.A)((function*(){try{t.loadingMarkAllNotificationsAsRead=!0;const i=yield d.AddonNotifications.getUnreadNotificationsCount();t.canMarkAllNotificationsAsRead=i.count>0}finally{t.loadingMarkAllNotificationsAsRead=!1}}))()}refreshNotifications(t){var i=this;return(0,a.A)((function*(){yield M.g.ignoreErrors(d.AddonNotifications.invalidateNotificationsList()),yield M.g.ignoreErrors(i.fetchNotifications(!0)),null==t||t.complete()}))()}openSettings(){N.CoreLocalNotifications.openNotificationSettings()}hidePermissionWarning(){v.CoreConfig.set(P.CoreConstants.DONT_SHOW_NOTIFICATIONS_PERMISSION_WARNING,1),this.permissionWarningHidden=!0}ionViewDidEnter(){this.isCurrentView=!0,this.pendingRefresh&&(this.pendingRefresh=!1,this.refreshNotifications())}ionViewDidLeave(){this.isCurrentView=!1}ngOnDestroy(){var t,i,n,o,e;null===(t=this.cronObserver)||void 0===t||t.off(),null===(i=this.readObserver)||void 0===i||i.off(),null===(n=this.pushObserver)||void 0===n||n.unsubscribe(),null===(o=this.notifications)||void 0===o||o.destroy(),null===(e=this.appResumeSubscription)||void 0===e||e.unsubscribe()}}return(t=AddonNotificationsListPage).ɵfac=function AddonNotificationsListPage_Factory(i){return new(i||t)},t.ɵcmp=C.VBU({type:t,selectors:[["page-addon-notifications-list"]],viewQuery:function AddonNotificationsListPage_Query(t,i){if(1&t&&C.GBs(f.M,5),2&t){let t;C.mGM(t=C.lsd())&&(i.splitView=t.first)}},decls:23,vars:17,consts:[["slot","start"],[3,"text"],["slot","end"],["slot","fixed",3,"ionRefresh","disabled"],[3,"pullingText"],[3,"hideUntil"],["class","core-warning-card core-card-with-buttons",4,"ngIf"],["class","ion-text-wrap addon-notification-item","button","","lines","full",3,"detail","click",4,"ngFor","ngForOf"],["icon","far-bell",3,"message",4,"ngIf"],[3,"action","enabled","error"],["slot","fixed","collapsible-footer","","appearOnBottom","",1,"mark-all-as-read"],["color","info","class","clickable fab-chip",3,"disabled","click",4,"ngIf"],[1,"core-warning-card","core-card-with-buttons"],[1,"ion-text-wrap"],["name","fas-circle-info","slot","start","aria-hidden","true"],[1,"core-card-buttons"],["fill","clear",3,"click"],["fill","outline",3,"click"],["button","","lines","full",1,"ion-text-wrap","addon-notification-item",3,"click","detail"],["slot","start",3,"user","profileUrl","fullname","userId",4,"ngIf"],[4,"ngIf"],[1,"item-heading"],["contextLevel","system",3,"text","contextInstanceId","wsNotFiltered"],["slot","end",4,"ngIf"],["slot","start",3,"user","profileUrl","fullname","userId"],["class","core-avatar-extra-img",4,"ngIf"],[1,"core-avatar-extra-img"],["alt","","role","presentation","core-external-content","",3,"url"],["class","core-notification-img","core-external-content","","alt","","role","presentation","slot","start",3,"url",4,"ngIf"],["class","core-notification-icon","slot","start",4,"ngIf"],["core-external-content","","alt","","role","presentation","slot","start",1,"core-notification-img",3,"url"],["slot","start",1,"core-notification-icon"],["core-external-content","","alt","","role","presentation",3,"url",4,"ngIf"],["name","fas-bell","aria-hidden","true",4,"ngIf"],["core-external-content","","alt","","role","presentation",3,"url"],["name","fas-bell","aria-hidden","true"],["name","fas-circle","color","primary","aria-hidden","true"],["icon","far-bell",3,"message"],["color","info",1,"clickable","fab-chip",3,"click","disabled"],["name","fas-eye","aria-hidden","true",4,"ngIf"],["name","fas-eye","aria-hidden","true"]],template:function AddonNotificationsListPage_Template(t,i){1&t&&(C.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),C.nrm(3,"ion-back-button",1),C.nI1(4,"translate"),C.k0s(),C.j41(5,"ion-title")(6,"h1"),C.EFF(7),C.nI1(8,"translate"),C.k0s()(),C.j41(9,"ion-buttons",2),C.nrm(10,"core-user-menu-button"),C.k0s()()(),C.j41(11,"ion-content")(12,"core-split-view")(13,"ion-refresher",3),C.bIt("ionRefresh",(function AddonNotificationsListPage_Template_ion_refresher_ionRefresh_13_listener(t){return i.refreshNotifications(t.target)})),C.nrm(14,"ion-refresher-content",4),C.nI1(15,"translate"),C.k0s(),C.j41(16,"core-loading",5),C.DNE(17,AddonNotificationsListPage_ion_card_17_Template,19,14,"ion-card",6)(18,AddonNotificationsListPage_ion_item_18_Template,12,18,"ion-item",7)(19,AddonNotificationsListPage_core_empty_box_19_Template,2,3,"core-empty-box",8),C.j41(20,"core-infinite-loading",9),C.bIt("action",(function AddonNotificationsListPage_Template_core_infinite_loading_action_20_listener(t){return i.fetchMoreNotifications(t)})),C.k0s()(),C.j41(21,"div",10),C.DNE(22,AddonNotificationsListPage_ion_chip_22_Template,5,6,"ion-chip",11),C.k0s()()()),2&t&&(C.R7$(3),C.Y8G("text",C.bMT(4,11,"core.back")),C.R7$(4),C.JRh(C.bMT(8,13,"addon.notifications.notifications")),C.R7$(6),C.Y8G("disabled",!i.notifications.loaded),C.R7$(),C.FS9("pullingText",C.bMT(15,15,"core.pulltorefresh")),C.R7$(2),C.Y8G("hideUntil",i.notifications.loaded),C.R7$(),C.Y8G("ngIf",!i.hasNotificationsPermission&&!i.permissionWarningHidden),C.R7$(),C.Y8G("ngForOf",i.notifications.items),C.R7$(),C.Y8G("ngIf",!i.notifications||i.notifications.empty),C.R7$(),C.Y8G("enabled",i.notifications.loaded&&!i.notifications.completed)("error",i.fetchMoreNotificationsFailed),C.R7$(2),C.Y8G("ngIf",i.notifications.loaded&&i.canMarkAllNotificationsAsRead))},dependencies:[A.Sq,A.bT,x.h,I.b,O.R,f.M,R.T,T.l,y.t,k.B,G.i,w.i,L.T,$.Jm,$.QW,$.b_,$.ZB,$.W9,$.eU,$.iq,$.uz,$.he,$.JI,$.To,$.Ki,$.w2,$.BC,$.ai,$.el,E.U,S.w,j.A,F.D9],styles:["ion-item.addon-notification-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px}ion-item.addon-notification-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:var(--mdl-typography-body-font-sm)}ion-item.addon-notification-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.item-heading[_ngcontent-%COMP%]{font-size:var(--text-size)}@supports (-webkit-line-clamp: 2){ion-item.addon-notification-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p.item-heading[_ngcontent-%COMP%]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;white-space:normal}}ion-item.addon-notification-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{margin:0;padding-inline-start:8px;padding-inline-end:0;padding-top:12px}ion-item.addon-notification-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:.375rem;vertical-align:middle}ion-item.addon-notification-item[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]{align-self:start;margin-top:16px}.mark-all-as-read[_ngcontent-%COMP%]{padding-bottom:16px;bottom:0;left:0;right:0;display:flex;background:transparent;box-shadow:none;pointer-events:none}.mark-all-as-read[_ngcontent-%COMP%]   ion-chip.ion-color[_ngcontent-%COMP%]{margin:0 auto}.mark-all-as-read[_ngcontent-%COMP%]   ion-chip.ion-color[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{width:16px;height:16px;margin-inline-start:0;margin-inline-end:8px}ion-content[_ngcontent-%COMP%]::part(scroll){padding-bottom:44px}","[_nghost-%COMP%]{--icon-size: 32px;--extra-icon-size: 12px}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]     core-user-avatar{--core-avatar-size: var(--icon-size)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]     core-user-avatar .core-avatar-extra-img{margin:0!important;position:absolute;right:-4px;bottom:-4px;--module-icon-padding: .2rem}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]     core-user-avatar .core-avatar-extra-img{background:var(--background-color);border-radius:var(--mdl-shape-borderRadius-sm)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]     core-user-avatar .core-avatar-extra-img img{max-width:var(--extra-icon-size);max-height:var(--extra-icon-size);width:var(--extra-icon-size);height:var(--extra-icon-size);display:block}[_nghost-%COMP%]   div.core-notification-icon[_ngcontent-%COMP%]{max-width:var(--icon-size);max-height:var(--icon-size);padding:0;background:var(--background-color);border-radius:var(--core-avatar-radius);margin-inline-start:0px;margin-inline-end:8px;margin-top:6px;margin-bottom:6px}[_nghost-%COMP%]   div.core-notification-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:var(--icon-size);height:var(--icon-size);padding:4px}[_nghost-%COMP%]   div.core-notification-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:var(--icon-size)}[_nghost-%COMP%]   .core-notification-img[_ngcontent-%COMP%]{margin-inline-start:0px;margin-inline-end:8px;margin-top:6px;margin-bottom:6px;width:var(--icon-size);height:var(--icon-size);object-fit:cover;border-radius:var(--core-avatar-radius)}"]}),AddonNotificationsListPage})();var D=n(26005),Y=n(52266),B=n(33504),U=n(22693),V=n(79555),X=n(28988),W=n(54048);function AddonNotificationsNotificationPage_div_11_core_user_avatar_2_div_1_Template(t,i){if(1&t&&(C.j41(0,"div",16),C.nrm(1,"img",17),C.k0s()),2&t){const t=C.XpG(3);C.R7$(),C.Y8G("url",t.notification.iconurl)}}function AddonNotificationsNotificationPage_div_11_core_user_avatar_2_Template(t,i){if(1&t&&(C.j41(0,"core-user-avatar",14),C.DNE(1,AddonNotificationsNotificationPage_div_11_core_user_avatar_2_div_1_Template,2,1,"div",15),C.k0s()),2&t){const t=C.XpG(2);C.Y8G("userId",t.notification.useridfrom)("profileUrl",t.notification.profileimageurlfrom)("fullname",t.notification.userfromfullname),C.R7$(),C.Y8G("ngIf",t.notification.iconurl)}}function AddonNotificationsNotificationPage_div_11_ng_container_3_img_1_Template(t,i){if(1&t&&C.nrm(0,"img",20),2&t){const t=C.XpG(3);C.Y8G("url",t.notification.imgUrl)}}function AddonNotificationsNotificationPage_div_11_ng_container_3_div_2_img_1_Template(t,i){if(1&t&&C.nrm(0,"img",24),2&t){const t=C.XpG(4);C.Y8G("url",t.notification.iconurl)}}function AddonNotificationsNotificationPage_div_11_ng_container_3_div_2_ion_icon_2_Template(t,i){1&t&&C.nrm(0,"ion-icon",25)}function AddonNotificationsNotificationPage_div_11_ng_container_3_div_2_Template(t,i){if(1&t&&(C.j41(0,"div",21),C.DNE(1,AddonNotificationsNotificationPage_div_11_ng_container_3_div_2_img_1_Template,1,1,"img",22)(2,AddonNotificationsNotificationPage_div_11_ng_container_3_div_2_ion_icon_2_Template,1,0,"ion-icon",23),C.k0s()),2&t){const t=C.XpG(3);C.R7$(),C.Y8G("ngIf",t.notification.iconurl),C.R7$(),C.Y8G("ngIf",!t.notification.iconurl)}}function AddonNotificationsNotificationPage_div_11_ng_container_3_Template(t,i){if(1&t&&(C.qex(0),C.DNE(1,AddonNotificationsNotificationPage_div_11_ng_container_3_img_1_Template,1,1,"img",18)(2,AddonNotificationsNotificationPage_div_11_ng_container_3_div_2_Template,3,2,"div",19),C.bVm()),2&t){const t=C.XpG(2);C.R7$(),C.Y8G("ngIf",t.notification.imgUrl),C.R7$(),C.Y8G("ngIf",!t.notification.imgUrl)}}function AddonNotificationsNotificationPage_div_11_p_7_ng_container_3_Template(t,i){if(1&t&&(C.qex(0),C.EFF(1),C.bVm()),2&t){const t=C.XpG(3);C.R7$(),C.SpI(" · ",t.notification.userfromfullname,"")}}function AddonNotificationsNotificationPage_div_11_p_7_Template(t,i){if(1&t&&(C.j41(0,"p"),C.EFF(1),C.nI1(2,"coreTimeAgo"),C.DNE(3,AddonNotificationsNotificationPage_div_11_p_7_ng_container_3_Template,2,1,"ng-container",9),C.k0s()),2&t){const t=C.XpG(2);C.R7$(),C.SpI(" ",C.bMT(2,2,t.notification.timecreated)," "),C.R7$(2),C.Y8G("ngIf",t.notification.useridfrom>0)}}function AddonNotificationsNotificationPage_div_11_Template(t,i){if(1&t&&(C.j41(0,"div",6)(1,"ion-item",7),C.DNE(2,AddonNotificationsNotificationPage_div_11_core_user_avatar_2_Template,2,4,"core-user-avatar",8)(3,AddonNotificationsNotificationPage_div_11_ng_container_3_Template,3,2,"ng-container",9),C.j41(4,"ion-label")(5,"p",10),C.nrm(6,"core-format-text",11),C.k0s(),C.DNE(7,AddonNotificationsNotificationPage_div_11_p_7_Template,4,4,"p",9),C.k0s()(),C.j41(8,"ion-item",12)(9,"ion-label"),C.nrm(10,"core-format-text",13),C.nI1(11,"coreCreateLinks"),C.k0s()()()),2&t){const t=C.XpG();C.R7$(2),C.Y8G("ngIf",t.notification.useridfrom>0),C.R7$(),C.Y8G("ngIf",t.notification.useridfrom<=0),C.R7$(3),C.Y8G("text",t.notification.subject)("contextInstanceId",0)("wsNotFiltered",!0),C.R7$(),C.Y8G("ngIf",t.notification.timecreated>0),C.R7$(3),C.Y8G("text",C.bMT(11,8,t.notification.mobiletext))("contextInstanceId",0)}}function AddonNotificationsNotificationPage_div_12_ion_button_2_Template(t,i){if(1&t){const t=C.RV6();C.j41(0,"ion-button",29),C.bIt("click",(function AddonNotificationsNotificationPage_div_12_ion_button_2_Template_ion_button_click_0_listener(){const i=C.eBV(t).$implicit;return C.Njj(i.action())})),C.nrm(1,"ion-icon",30),C.EFF(2),C.nI1(3,"translate"),C.k0s()}if(2&t){const t=i.$implicit;C.R7$(),C.FS9("name",t.icon),C.R7$(),C.SpI(" ",C.bMT(3,2,t.message)," ")}}function AddonNotificationsNotificationPage_div_12_Template(t,i){if(1&t&&(C.j41(0,"div",26)(1,"div",27),C.DNE(2,AddonNotificationsNotificationPage_div_12_ion_button_2_Template,4,4,"ion-button",28),C.k0s()()),2&t){const t=C.XpG();C.R7$(2),C.Y8G("ngForOf",t.actions)}}let q=(()=>{var t;class AddonNotificationsNotificationPage{constructor(){this.loaded=!1,this.actions=[]}ngOnInit(){var t=this;return(0,a.A)((function*(){let i;try{i=t.getNotification()}catch(t){return r.CoreDomUtils.showErrorModal(t),l.CoreNavigator.back(),void 0}t.notification="subject"in i?i:yield d.AddonNotifications.convertPushToMessage(i),yield t.loadActions(t.notification),D.AddonNotificationsHelper.markNotificationAsRead(i),t.loaded=!0,i.id&&U.OF.logEvent({type:U.qr.VIEW_ITEM,ws:"core_message_get_messages",name:V.HT.instant("addon.notifications.notifications"),data:{id:i.id,category:"notifications"},url:`/message/output/popup/notifications.php?notificationid=${i.id}&offset=0`})}))()}getNotification(){const t=l.CoreNavigator.getRouteNumberParam("id"),i=t?this.getNotificationById(t):void 0;return null!=i?i:l.CoreNavigator.getRequiredRouteParam("notification")}getNotificationById(t){var i;const n=_.u.getOrCreateSource(m.CoreSites.getRequiredCurrentSite().isVersionGreaterEqualThan("4.0")?AddonNotificationsNotificationsSource:AddonLegacyNotificationsNotificationsSource,[]),o=null===(i=n.getItems())||void 0===i?void 0:i.find((({id:i})=>i===t));if(o)return this.loadNotifications(n),o}loadNotifications(t){var i=this;return(0,a.A)((function*(){i.notifications=new AddonNotificationSwipeItemsManager(t),yield i.notifications.start()}))()}loadActions(t){var i=this;return(0,a.A)((function*(){var n;if(!(t.contexturl||t.customdata&&t.customdata.appurl))return;let o=[];i.actionsData=t.customdata,i.contextUrl=t.contexturl||void 0,i.courseId="courseid"in t?t.courseid:void 0,null!==(n=i.actionsData)&&void 0!==n&&n.appurl&&(o=yield B.CoreContentLinksDelegate.getActionsFor(i.actionsData.appurl,i.courseId,void 0,i.actionsData)),!o.length&&i.contextUrl&&(o=yield B.CoreContentLinksDelegate.getActionsFor(i.contextUrl,i.courseId,void 0,i.actionsData)),o.length||o.push({message:"core.view",icon:"fas-eye",action:t=>i.openInBrowser(t)}),i.actions=o}))()}openInBrowser(t){var i=this;return(0,a.A)((function*(){var n;const o=(null===(n=i.actionsData)||void 0===n?void 0:n.appurl)||i.contextUrl;if(!o)return;(yield m.CoreSites.getSite(t)).openInBrowserWithAutoLogin(o)}))()}ngOnDestroy(){var t;null===(t=this.notifications)||void 0===t||t.destroy()}}return(t=AddonNotificationsNotificationPage).ɵfac=function AddonNotificationsNotificationPage_Factory(i){return new(i||t)},t.ɵcmp=C.VBU({type:t,selectors:[["page-addon-notifications-notification"]],decls:13,vars:10,consts:[["slot","start"],[3,"text"],[3,"core-swipe-navigation"],[3,"hideUntil"],["class","list-item-limited-width",4,"ngIf"],["collapsible-footer","","appearOnBottom","","slot","fixed",4,"ngIf"],[1,"list-item-limited-width"],["lines","full",1,"ion-text-wrap","core-notification-title"],["slot","start",3,"userId","profileUrl","fullname",4,"ngIf"],[4,"ngIf"],[1,"item-heading"],["contextLevel","system",3,"text","contextInstanceId","wsNotFiltered"],[1,"ion-text-wrap","core-notification-body"],["contextLevel","system",3,"text","contextInstanceId"],["slot","start",3,"userId","profileUrl","fullname"],["class","core-avatar-extra-img",4,"ngIf"],[1,"core-avatar-extra-img"],["alt","","role","presentation","core-external-content","",3,"url"],["class","core-notification-img","core-external-content","","alt","","role","presentation","slot","start",3,"url",4,"ngIf"],["class","core-notification-icon","slot","start",4,"ngIf"],["core-external-content","","alt","","role","presentation","slot","start",1,"core-notification-img",3,"url"],["slot","start",1,"core-notification-icon"],["core-external-content","","alt","","role","presentation",3,"url",4,"ngIf"],["name","fas-bell","aria-hidden","true",4,"ngIf"],["core-external-content","","alt","","role","presentation",3,"url"],["name","fas-bell","aria-hidden","true"],["collapsible-footer","","appearOnBottom","","slot","fixed"],[1,"list-item-limited-width","adaptable-buttons-row"],["expand","block",3,"click",4,"ngFor","ngForOf"],["expand","block",3,"click"],["slot","start","aria-hidden","true",3,"name"]],template:function AddonNotificationsNotificationPage_Template(t,i){1&t&&(C.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),C.nrm(3,"ion-back-button",1),C.nI1(4,"translate"),C.k0s(),C.j41(5,"ion-title")(6,"h1"),C.EFF(7),C.nI1(8,"translate"),C.k0s()()()(),C.j41(9,"ion-content",2)(10,"core-loading",3),C.DNE(11,AddonNotificationsNotificationPage_div_11_Template,12,10,"div",4)(12,AddonNotificationsNotificationPage_div_12_Template,3,1,"div",5),C.k0s()()),2&t&&(C.R7$(3),C.Y8G("text",C.bMT(4,6,"core.back")),C.R7$(4),C.JRh(C.bMT(8,8,"addon.notifications.notifications")),C.R7$(2),C.Y8G("core-swipe-navigation",i.notifications),C.R7$(),C.Y8G("hideUntil",i.loaded),C.R7$(),C.Y8G("ngIf",i.notification),C.R7$(),C.Y8G("ngIf",i.loaded&&i.actions&&i.actions.length>0))},dependencies:[A.Sq,A.bT,O.R,R.T,T.l,y.t,k.B,X.n,G.i,w.i,L.T,$.Jm,$.QW,$.W9,$.eU,$.iq,$.uz,$.he,$.BC,$.ai,$.el,W.R,j.A,F.D9],styles:["[_nghost-%COMP%]{--icon-size: 32px;--extra-icon-size: 12px}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]     core-user-avatar{--core-avatar-size: var(--icon-size)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]     core-user-avatar .core-avatar-extra-img{margin:0!important;position:absolute;right:-4px;bottom:-4px;--module-icon-padding: .2rem}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]     core-user-avatar .core-avatar-extra-img{background:var(--background-color);border-radius:var(--mdl-shape-borderRadius-sm)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]     core-user-avatar .core-avatar-extra-img img{max-width:var(--extra-icon-size);max-height:var(--extra-icon-size);width:var(--extra-icon-size);height:var(--extra-icon-size);display:block}[_nghost-%COMP%]   div.core-notification-icon[_ngcontent-%COMP%]{max-width:var(--icon-size);max-height:var(--icon-size);padding:0;background:var(--background-color);border-radius:var(--core-avatar-radius);margin-inline-start:0px;margin-inline-end:8px;margin-top:6px;margin-bottom:6px}[_nghost-%COMP%]   div.core-notification-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:var(--icon-size);height:var(--icon-size);padding:4px}[_nghost-%COMP%]   div.core-notification-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:var(--icon-size)}[_nghost-%COMP%]   .core-notification-img[_ngcontent-%COMP%]{margin-inline-start:0px;margin-inline-end:8px;margin-top:6px;margin-bottom:6px;width:var(--icon-size);height:var(--icon-size);object-fit:cover;border-radius:var(--core-avatar-radius)}","[_nghost-%COMP%]{--icon-size: 44px;--extra-icon-size: 16px}[_nghost-%COMP%]   .core-notification-title[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]{align-self:start;margin-top:16px}[_nghost-%COMP%]   .core-notification-title[_ngcontent-%COMP%]   p.item-heading[_ngcontent-%COMP%]{font:var(--mdl-typography-body-font-lg)}[_nghost-%COMP%]   .core-notification-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:var(--mdl-typography-body-font-sm)}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]{font-size:var(--text-size)}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost{border:1px solid var(--gray-200);width:100%;margin:0 0 1em}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost td{padding:10px}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost .header{background-color:var(--light)}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost .header .picture{width:48px;text-align:center;padding-inline-start:4px;padding-inline-end:0px;padding-top:8px}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost .header .picture img{width:44px!important}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost .subject{font-weight:700;margin-bottom:1rem}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     a{text-decoration:none}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .userpicture{border-radius:50%}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .mdl-right{text-align:end}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .mdl-right a{display:none}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .mdl-right font{font-size:.9em}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .commands{display:none}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     hr{margin-top:1.5rem;margin-bottom:1.5rem;background-color:var(--gray-200)}"]}),AddonNotificationsNotificationPage})();class AddonNotificationSwipeItemsManager extends Y.Z{getSelectedItemPathFromRoute(t){return l.CoreNavigator.getRouteParams(t).id}}var H=n(21182),J=n(47720),Q=n(42858),Z=n(93417),K=n(31740);function buildRoutes(t){return[{path:"list",data:{mainMenuTabRoot:K.S.PAGE_NAME},component:z,children:(0,o.VI)([{path:":id",component:q}],(()=>Z.CoreScreen.isTablet))},...(0,o.VI)([{path:"list/:id",component:q}],(()=>Z.CoreScreen.isMobile)),{path:"notification",component:q},...(0,Q.B)(t,{redirectTo:"list",pathMatch:"full"})]}let tt=(()=>{var t;class AddonNotificationsLazyModule{}return(t=AddonNotificationsLazyModule).ɵfac=function AddonNotificationsLazyModule_Factory(i){return new(i||t)},t.ɵmod=C.$C({type:t}),t.ɵinj=C.G2t({providers:[{provide:H.bw,multi:!0,deps:[C.zZn],useFactory:buildRoutes}],imports:[e.n,J.E]}),AddonNotificationsLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&C.Obh(tt,{declarations:[z,q],imports:[e.n,J.E]}))},52266:(t,i,n)=>{n.d(i,{Z:()=>CoreSwipeNavigationItemsManager});var o=n(10467),e=n(15324),a=n(95990);class CoreSwipeNavigationItemsManager extends a.u{start(){var t=this;return(0,o.A)((function*(){t.updateSelectedItem()}))()}navigateToNextItem(){var t=this;return(0,o.A)((function*(){yield t.navigateToItemBy(1,"forward")}))()}navigateToPreviousItem(){var t=this;return(0,o.A)((function*(){yield t.navigateToItemBy(-1,"back")}))()}hasNextItem(){var t=this;return(0,o.A)((function*(){return!!(yield t.getItemBy(1))}))()}hasPreviousItem(){var t=this;return(0,o.A)((function*(){return!!(yield t.getItemBy(-1))}))()}getCurrentPageRoute(){return e.CoreNavigator.getCurrentRoute()}getSelectedItemPathFromRoute(t){const i=[];for(;t&&(i.push(...e.CoreNavigator.getRouteUrl(t)),t.firstChild);)t=t.firstChild;return i.map((t=>t.path)).join("/").replace(/\/+/,"/").trim()||null}navigateToItemBy(t,i){var n=this;return(0,o.A)((function*(){const o=yield n.getItemBy(t);o&&(yield n.navigateToItem(o,{animationDirection:i,replace:!0}))}))()}getItemBy(t){var i=this;return(0,o.A)((function*(){var n;const o=i.getSource().getItems(),e=null!==(n=i.selectedItem&&(null==o?void 0:o.indexOf(i.selectedItem)))&&void 0!==n?n:-1;if(-1===e||null===o)return null;const a=t>0?1:-1;let r=e,c=0;for(;c!==t;){if(r+=a,r<0)return null;if(r>=o.length)break;i.skipItemInSwipe(o[r])||(c+=a)}return c===t?o[r]:i.getSource().isCompleted()?null:(yield i.getSource().load(),i.getItemBy(t))}))()}skipItemInSwipe(t){return!1}}}}]);