"use strict";(self.webpackChunk_gi_demo=self.webpackChunk_gi_demo||[]).push([[5126],{12178:(k,T,s)=>{s.d(T,{pW:()=>M,Cv:()=>D});var o=s(37716),p=s(38583),_=s(72458),q=s(39490),f=s(46237),v=s(75319),C=s(22759),y=s(45435);const U=["primaryValueBar"],P=(0,_.pj)(class{constructor(n){this._elementRef=n}},"primary"),S=new o.OlP("mat-progress-bar-location",{providedIn:"root",factory:function(){const n=(0,o.f3M)(p.K0),m=n?n.location:null;return{getPathname:()=>m?m.pathname+m.search:""}}});let x=0,M=(()=>{class n extends P{constructor(t,c,d,b){super(t),this._ngZone=c,this._animationMode=d,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new o.vpe,this._animationEndSubscription=v.w.EMPTY,this.mode="determinate",this.progressbarId="mat-progress-bar-"+x++;const h=b?b.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${h}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===d}get value(){return this._value}set value(t){this._value=A((0,q.su)(t)||0)}get bufferValue(){return this._bufferValue}set bufferValue(t){this._bufferValue=A(t||0)}_primaryTransform(){return{transform:`scale3d(${this.value/100}, 1, 1)`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scale3d(${this.bufferValue/100}, 1, 1)`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const t=this._primaryValueBar.nativeElement;this._animationEndSubscription=(0,C.R)(t,"transitionend").pipe((0,y.h)(c=>c.target===t)).subscribe(()=>{("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.SBq),o.Y36(o.R0b),o.Y36(f.Qb,8),o.Y36(S,8))},n.\u0275cmp=o.Xpm({type:n,selectors:[["mat-progress-bar"]],viewQuery:function(t,c){if(1&t&&o.Gf(U,5),2&t){let d;o.iGM(d=o.CRH())&&(c._primaryValueBar=d.first)}},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-progress-bar"],hostVars:4,hostBindings:function(t,c){2&t&&(o.uIk("aria-valuenow","indeterminate"===c.mode||"query"===c.mode?null:c.value)("mode",c.mode),o.ekj("_mat-animation-noopable",c._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[o.qOj],decls:10,vars:4,consts:[["aria-hidden","true"],["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(t,c){1&t&&(o.TgZ(0,"div",0),o.O4$(),o.TgZ(1,"svg",1),o.TgZ(2,"defs"),o.TgZ(3,"pattern",2),o._UZ(4,"circle",3),o.qZA(),o.qZA(),o._UZ(5,"rect",4),o.qZA(),o.kcU(),o._UZ(6,"div",5),o._UZ(7,"div",6,7),o._UZ(9,"div",8),o.qZA()),2&t&&(o.xp6(3),o.Q6J("id",c.progressbarId),o.xp6(2),o.uIk("fill",c._rectangleFillValue),o.xp6(1),o.Q6J("ngStyle",c._bufferTransform()),o.xp6(1),o.Q6J("ngStyle",c._primaryTransform()))},directives:[p.PC],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),n})();function A(n,m=0,t=100){return Math.max(m,Math.min(t,n))}let D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[p.ez,_.BQ],_.BQ]}),n})()},35126:(k,T,s)=>{s.r(T),s.d(T,{ProjectModule:()=>tt});var o=s(63423),p=s(51095),_=s(42542),q=s(1769),f=s(76627),v=s(33935),C=s(12178),y=s(72458),U=s(23017),P=s(11494),S=s(32789),Z=s(65939),x=s(8394),M=s(34256),A=s(44466),D=s(79765),n=s(3679);class m{}var t=s(37716),c=s(22238),d=s(91841),b=s(92340),h=s(5304),B=s(40205);let O=(()=>{class r{constructor(){}errorHandler(e){return(0,B._)(e)}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),E=(()=>{class r{constructor(e,a){this.http=e,this.errorHandler=a}saveCase(e){var a=JSON.parse(localStorage.getItem("currentUser"));this.url=b.N.baseUrl+"/sobjects/case",e.SuppliedEmail=a.username;let l=new d.WM({"Content-Type":"application/json",Authorization:`Bearer ${a.access_token}`});return this.http.post(`${this.url}`,e,{headers:l}).pipe((0,h.K)(this.errorHandler.errorHandler))}getCasesByEmail(){var e=JSON.parse(localStorage.getItem("currentUser"));return this.url=b.N.baseUrl+`/query?q=SELECT+CaseNumber,Status,Issue_type__c,Handler_in_contacts__c,Subject,Related_SKU__c,Ownerid FROM Case+WHERE+Status+=+'New'+AND+SuppliedEmail+=+'${e.username}'+LIMIT+200`,this.http.get(`${this.url}`,{headers:{Authorization:`Bearer ${e.access_token}`}}).pipe((0,h.K)(this.errorHandler.errorHandler))}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(d.eN),t.LFG(O))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var J=s(22290),I=s(98295),w=s(38583),N=s(83166);let F=(()=>{class r{constructor(e,a,l,u){this._matDialog=e,this.caseService=a,this.fb=l,this.toastr=u,this.formFieldHelpers=[""],this.cases=[],this.loading=!1;var g=JSON.parse(localStorage.getItem("currentUser"));this.formCase=this.fb.group({id:[""],Subject:["",n.kI.required],Description:["",n.kI.required],Handler_in_Contacts__c:["0035d00006goiaHAAQ"],Issue_type__c:["General inquiry"],SuppliedEmail:[g.username,n.kI.required],SuppliedPhone:[""]})}ngOnInit(){}onSubmit(e){console.log(e);var a=JSON.parse(localStorage.getItem("currentUser"));let l=new m;l.Description=e.Description,l.Handler_in_Contacts__c="0035d00006goiaHAAQ",l.Issue_type__c=e.Issue_type__c,l.Subject=e.Subject,l.SuppliedEmail=a.username,l.SuppliedPhone=e.SuppliedPhone,this.caseService.saveCase(l).subscribe(u=>{console.log("success"),console.log(u),this.formCase.reset(),this.toastr.success("Case submitted successfully!","New Case!"),this.formCase.reset(),window.location.reload()},u=>{console.log(u),this.loading=!1})}saveAndClose(){this._matDialog.closeAll()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(c.uw),t.Y36(E),t.Y36(n.qu),t.Y36(J._W))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-create-case"]],decls:21,vars:7,consts:[[1,"flex","flex-col","flex-auto","w-80","min-w-80","p-2","md:p-4"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-semibold"],["matDialogClose","","mat-icon-button","",3,"click"],[3,"svgIcon"],[1,"flex","flex-col","mt-8","p-8","pb-4","bg-card","rounded-2xl","shadow","overflow-hidden",3,"formGroup","ngSubmit"],[1,"flex","flex-col","gt-xs:flex-row"],[1,"flex-auto","gt-xs:pl-3",3,"ngClass"],["matInput","","formControlName","Subject"],["matSuffix","",1,"icon-size-5",3,"svgIcon"],["matInput","","formControlName","Description"],[1,"flex","items-center","mt-4","sm:mt-0"],["type","submit","mat-flat-button","",1,"order-first","sm:order-last",3,"color"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3,"Create Case"),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){return a.saveAndClose()}),t._UZ(5,"mat-icon",4),t.qZA(),t.qZA(),t.TgZ(6,"form",5),t.NdJ("ngSubmit",function(){return a.onSubmit(a.formCase.value)}),t.TgZ(7,"div",6),t.TgZ(8,"mat-form-field",7),t.TgZ(9,"mat-label"),t._uU(10,"Subject"),t.qZA(),t._UZ(11,"textarea",8),t._UZ(12,"mat-icon",9),t.qZA(),t.TgZ(13,"mat-form-field",7),t.TgZ(14,"mat-label"),t._uU(15,"Description"),t.qZA(),t._UZ(16,"textarea",10),t._UZ(17,"mat-icon",9),t.qZA(),t.TgZ(18,"div",11),t.TgZ(19,"button",12),t._uU(20," Submit Case "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("svgIcon","heroicons_outline:x"),t.xp6(1),t.Q6J("formGroup",a.formCase),t.xp6(2),t.Q6J("ngClass",a.formFieldHelpers),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:user-circle"),t.xp6(1),t.Q6J("ngClass",a.formFieldHelpers),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:user-circle"),t.xp6(2),t.Q6J("color","primary"))},directives:[p.lW,f.Hw,n._Y,n.JL,n.sg,I.KE,w.mk,I.hX,N.Nt,n.Fj,n.JJ,n.u,I.R9],styles:[""]}),r})(),Q=(()=>{class r{constructor(e){this._matDialog=e}ngOnInit(){}saveAndClose(){this._matDialog.closeAll()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(c.uw))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-product-details"]],inputs:{product:"product"},decls:50,vars:11,consts:[[1,"flex","flex-col","max-w-240","md:min-w-160","max-h-screen","-m-6"],[1,"flex","flex-0","items-center","justify-between","h-16","pr-3","sm:pr-5","pl-6","sm:pl-8","bg-primary","text-on-primary"],[1,"text-lg","font-medium"],["mat-icon-button","",3,"tabIndex","click"],[1,"text-current",3,"svgIcon"],[1,"flex","flex-col","flex-auto","mt-2","overflow-x-auto"],[1,"table","table-striped"],[1,"td-p"],[3,"href"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){return a.saveAndClose()}),t._UZ(5,"mat-icon",4),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"table",6),t.TgZ(8,"tbody"),t.TgZ(9,"tr"),t.TgZ(10,"td",7),t._uU(11,"Name:"),t.qZA(),t.TgZ(12,"td",7),t._uU(13),t.qZA(),t.qZA(),t.TgZ(14,"tr"),t.TgZ(15,"td",7),t._uU(16,"Date Delivered:"),t.qZA(),t.TgZ(17,"td",7),t._uU(18),t.qZA(),t.qZA(),t.TgZ(19,"tr"),t.TgZ(20,"td",7),t._uU(21,"Coordinator in contacts:"),t.qZA(),t.TgZ(22,"td",7),t._uU(23),t.qZA(),t.qZA(),t.TgZ(24,"tr"),t.TgZ(25,"td",7),t._uU(26,"Date Sold:"),t.qZA(),t.TgZ(27,"td",7),t._uU(28),t.qZA(),t.qZA(),t.TgZ(29,"tr"),t.TgZ(30,"td",7),t._uU(31,"Salesperson:"),t.qZA(),t.TgZ(32,"td",7),t._uU(33),t.qZA(),t.qZA(),t.TgZ(34,"tr"),t.TgZ(35,"td",7),t._uU(36,"Freight Carrier:"),t.qZA(),t.TgZ(37,"td",7),t._uU(38),t.qZA(),t.qZA(),t.TgZ(39,"tr"),t.TgZ(40,"td",7),t._uU(41,"Tracking Number:"),t.qZA(),t.TgZ(42,"td",7),t._uU(43),t.qZA(),t.qZA(),t.TgZ(44,"tr"),t.TgZ(45,"td",7),t._uU(46,"Product Manual:"),t.qZA(),t.TgZ(47,"td",7),t.TgZ(48,"a",8),t._uU(49,"Download Manual"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.hij("Product Details - ",a.product.Name,""),t.xp6(1),t.Q6J("tabIndex",-1),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:x"),t.xp6(8),t.Oqu(a.product.Name),t.xp6(5),t.Oqu(a.product.Install_Date__c),t.xp6(5),t.Oqu(a.product.Coordinator_in_contacts__c),t.xp6(5),t.Oqu(a.product.Date_Sold__c),t.xp6(5),t.Oqu(a.product.Salesperson__c),t.xp6(5),t.Oqu(a.product.Freight_Carrier__c),t.xp6(5),t.Oqu(a.product.Carrier_Tracking_PRO__c),t.xp6(5),t.s9C("href",a.product.Product_Info_Link__c,t.LSH))},directives:[p.lW,f.Hw],styles:["",".td-p[_ngcontent-%COMP%] {\npadding: 1rem;\nfont-weight: bolder;\n    }"]}),r})(),R=(()=>{class r{constructor(e){this._matDialog=e}ngOnInit(){}saveAndClose(){this._matDialog.closeAll()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(c.uw))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-case-detail"]],inputs:{case_:"case_"},decls:29,vars:7,consts:[[1,"flex","flex-col","max-w-240","md:min-w-160","max-h-screen","-m-6"],[1,"flex","flex-0","items-center","justify-between","h-16","pr-3","sm:pr-5","pl-6","sm:pl-8","bg-primary","text-on-primary"],[1,"text-lg","font-medium"],["mat-icon-button","",3,"tabIndex","click"],[1,"text-current",3,"svgIcon"],[1,"flex","flex-col","flex-auto","mt-2","overflow-x-auto"],[1,"table","table-striped"],[1,"td-p"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){return a.saveAndClose()}),t._UZ(5,"mat-icon",4),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"table",6),t.TgZ(8,"tbody"),t.TgZ(9,"tr"),t.TgZ(10,"td",7),t._uU(11,"Case number:"),t.qZA(),t.TgZ(12,"td",7),t._uU(13),t.qZA(),t.qZA(),t.TgZ(14,"tr"),t.TgZ(15,"td",7),t._uU(16,"Subject:"),t.qZA(),t.TgZ(17,"td",7),t._uU(18),t.qZA(),t.qZA(),t.TgZ(19,"tr"),t.TgZ(20,"td",7),t._uU(21,"Status:"),t.qZA(),t.TgZ(22,"td",7),t._uU(23),t.qZA(),t.qZA(),t.TgZ(24,"tr"),t.TgZ(25,"td",7),t._uU(26,"Issue Type:"),t.qZA(),t.TgZ(27,"td",7),t._uU(28),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.hij("Case Details - ",a.case_.CaseNumber,""),t.xp6(1),t.Q6J("tabIndex",-1),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:x"),t.xp6(8),t.Oqu(a.case_.CaseNumber),t.xp6(5),t.Oqu(a.case_.Subject),t.xp6(5),t.Oqu(a.case_.Status),t.xp6(5),t.Oqu(a.case_.Issue_type__c))},directives:[p.lW,f.Hw],styles:["",".td-p[_ngcontent-%COMP%] {\npadding: 1rem;\nfont-weight: bolder;\n    }"]}),r})();var L=s(26215),H=s(93342);let j=(()=>{class r{constructor(e){this._httpClient=e,this._data=new L.X(null)}get data$(){return this._data.asObservable()}getData(){return this._httpClient.get("api/dashboards/project").pipe((0,H.b)(e=>{this._data.next(e)}))}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(d.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),Y=(()=>{class r{constructor(e,a){this.http=e,this.errorHandler=a}getProductsByEmail(){var e=JSON.parse(localStorage.getItem("currentUser"));return this.url=b.N.baseUrl+`/query?q=SELECT+FIELDS(ALL)+FROM+Product2+WHERE+Buyer_email_from_contacts__c+=+'${e.username}'+LIMIT+200`,this.http.get(`${this.url}`,{headers:{Authorization:`Bearer ${e.access_token}`}}).pipe((0,h.K)(this.errorHandler.errorHandler))}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(d.eN),t.LFG(O))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function X(r,i){if(1&r&&(t.ynx(0),t.TgZ(1,"div",15),t._uU(2,"Logged in as:"),t.qZA(),t.TgZ(3,"div",16),t._uU(4),t.qZA(),t.BQk()),2&r){const e=t.oxw();t.xp6(4),t.Oqu(e.username)}}function z(r,i){if(1&r&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"button",42),t._UZ(5,"mat-icon",43),t.qZA(),t.qZA(),t.qZA()),2&r){const e=i.$implicit;t.xp6(2),t.Oqu(e.Name),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:eye")}}function W(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",44),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"button",45),t.NdJ("click",function(){const u=t.CHM(e).$implicit;return t.oxw(2).openProductDetailsDialog(u)}),t._UZ(5,"mat-icon",43),t.qZA(),t.qZA(),t.qZA()}if(2&r){const e=i.$implicit;t.xp6(2),t.Oqu(e.Name),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:eye")}}function K(r,i){if(1&r&&(t.TgZ(0,"div",17),t.TgZ(1,"div",18),t.TgZ(2,"div",19),t.TgZ(3,"div",20),t._uU(4,"Products"),t.qZA(),t.TgZ(5,"div",21),t.TgZ(6,"button",22),t._UZ(7,"mat-icon",23),t.qZA(),t.TgZ(8,"mat-menu",null,24),t.TgZ(10,"table",25),t.TgZ(11,"thead"),t.TgZ(12,"tr",26),t.TgZ(13,"td"),t._uU(14,"Product Name"),t.qZA(),t.TgZ(15,"td"),t._uU(16,"Details"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"tbody"),t.YNc(18,z,6,2,"tr",27),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",28),t.TgZ(20,"div",29),t._uU(21),t.qZA(),t._UZ(22,"div",30),t.qZA(),t.qZA(),t.TgZ(23,"div",18),t.TgZ(24,"div",19),t.TgZ(25,"div",20),t._uU(26,"Cases"),t.qZA(),t.TgZ(27,"div",21),t.TgZ(28,"button",22),t._UZ(29,"mat-icon",23),t.qZA(),t._UZ(30,"mat-menu",null,31),t.qZA(),t.qZA(),t.TgZ(32,"div",28),t.TgZ(33,"div",32),t._uU(34),t.qZA(),t._UZ(35,"div",33),t.qZA(),t.qZA(),t.TgZ(36,"div",18),t.TgZ(37,"div",19),t.TgZ(38,"div",20),t._uU(39,"Invoices"),t.qZA(),t.TgZ(40,"div",21),t.TgZ(41,"button",22),t._UZ(42,"mat-icon",23),t.qZA(),t._UZ(43,"mat-menu",null,34),t.qZA(),t.qZA(),t.TgZ(45,"div",28),t.TgZ(46,"div",35),t._uU(47,"0"),t.qZA(),t._UZ(48,"div",36),t.qZA(),t.qZA(),t.TgZ(49,"div",18),t.TgZ(50,"div",19),t.TgZ(51,"div",20),t._uU(52,"Resources"),t.qZA(),t.TgZ(53,"div",21),t.TgZ(54,"button",22),t._UZ(55,"mat-icon",23),t.qZA(),t._UZ(56,"mat-menu",null,37),t.qZA(),t.qZA(),t.TgZ(58,"div",28),t.TgZ(59,"div",38),t._uU(60,"0"),t.qZA(),t.TgZ(61,"div",39),t._uU(62,"Downloadable"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(63,"div",40),t.TgZ(64,"div",20),t._uU(65,"Product List"),t.qZA(),t.TgZ(66,"div",41),t.TgZ(67,"table",25),t.TgZ(68,"thead"),t.TgZ(69,"tr"),t.TgZ(70,"td"),t._uU(71,"Equipment Name"),t.qZA(),t.TgZ(72,"td"),t._uU(73,"More Details"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(74,"tbody"),t.YNc(75,W,6,2,"tr",27),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r){const e=t.MAs(9),a=t.MAs(31),l=t.MAs(44),u=t.MAs(57),g=t.oxw();t.xp6(6),t.Q6J("matMenuTriggerFor",e),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(11),t.Q6J("ngForOf",g.products),t.xp6(3),t.Oqu(g.productCount),t.xp6(7),t.Q6J("matMenuTriggerFor",a),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(5),t.Oqu(g.casesCount),t.xp6(7),t.Q6J("matMenuTriggerFor",l),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(12),t.Q6J("matMenuTriggerFor",u),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(20),t.Q6J("ngForOf",g.products)}}function $(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",44),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t.TgZ(10,"button",45),t.NdJ("click",function(){const u=t.CHM(e).$implicit;return t.oxw(2).openCaseDetailsDialog(u)}),t._UZ(11,"mat-icon",43),t.qZA(),t.qZA(),t.qZA()}if(2&r){const e=i.$implicit;t.xp6(2),t.Oqu(e.CaseNumber),t.xp6(2),t.Oqu(e.Subject),t.xp6(2),t.Oqu(e.Handler_in_Contacts__c),t.xp6(2),t.Oqu(e.Status),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:eye")}}function V(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"div",46),t.ynx(1),t.TgZ(2,"div",40),t.TgZ(3,"div",20),t._uU(4," Cases List "),t.TgZ(5,"button",47),t.NdJ("click",function(){return t.CHM(e),t.oxw().openCreateCaseDialog()}),t._UZ(6,"mat-icon",23),t.TgZ(7,"span",48),t._uU(8,"Create Case"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",41),t.TgZ(10,"table",25),t.TgZ(11,"thead"),t.TgZ(12,"tr"),t.TgZ(13,"td"),t._uU(14,"Case Number"),t.qZA(),t.TgZ(15,"td"),t._uU(16,"Subject"),t.qZA(),t.TgZ(17,"td"),t._uU(18,"Handler"),t.qZA(),t.TgZ(19,"td"),t._uU(20,"Status"),t.qZA(),t.TgZ(21,"td"),t._uU(22,"Actions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"tbody"),t.YNc(24,$,12,5,"tr",27),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk(),t.qZA()}if(2&r){const e=t.oxw();t.xp6(5),t.Q6J("color","accent"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(18),t.Q6J("ngForOf",e.cases)}}const G=[{path:"",component:(()=>{class r{constructor(e,a,l,u,g){this._projectService=e,this.productService=a,this.casesService=l,this._router=u,this._matDialog=g,this.chartGithubIssues={},this.chartTaskDistribution={},this.chartBudgetDistribution={},this.chartWeeklyExpenses={},this.chartMonthlyExpenses={},this.chartYearlyExpenses={},this.selectedProject="Global Imaging",this._unsubscribeAll=new D.xQ,this.products=[],this.cases=[]}ngOnInit(){var e=JSON.parse(localStorage.getItem("currentUser"));this.username=e.username,this.getProducts(),this.getCases()}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}getCases(){this.casesService.getCasesByEmail().subscribe(e=>{console.log(e.records),this.cases=e.records,this.casesCount=this.cases.length})}getProducts(){this.isLoading=!0,this.productService.getProductsByEmail().subscribe(e=>{this.products=e.records,this.productCount=this.products.length,this.isLoading=!1})}openProductDetailsDialog(e){console.log(e);const a=this._matDialog.open(Q);a.componentInstance.product=e,a.afterClosed().subscribe(l=>{console.log("Compose dialog was closed!")})}openCaseDetailsDialog(e){console.log(e);const a=this._matDialog.open(R);a.componentInstance.case_=e,a.afterClosed().subscribe(l=>{console.log("Compose dialog was closed!")})}openCreateCaseDialog(){this._matDialog.open(F).afterClosed().subscribe(a=>{console.log("Compose dialog was closed!")})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(j),t.Y36(Y),t.Y36(E),t.Y36(o.F0),t.Y36(c.uw))},r.\u0275cmp=t.Xpm({type:r,selectors:[["project"]],decls:16,vars:1,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex-0","w-16","h-16","rounded-full","overflow-hidden"],["src","assets/images/avatars/brian-hughes.jpg",1,"w-full","h-full","object-cover"],[1,"flex","flex-col","min-w-0","ml-4"],[4,"transloco"],[1,"flex-auto","border-t","-mt-px","pt-4","sm:pt-6"],[1,"w-full","max-w-screen-xl","mx-auto"],[1,"sm:px-2",3,"animationDuration"],["label","Dashboard"],["matTabContent",""],["label","My Cases"],[1,"text-2xl","md:text-5xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"text-2xl","md:text-3xl","font-semibold","tracking-tight","leading-7","md:leading-snug","truncate"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","gap-6","w-full","min-w-0"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","items-start","justify-between"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"ml-2","-mt-2","-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],[1,"icon-size-5",3,"svgIcon"],["summaryMenu","matMenu"],[1,"table","table-striped"],[2,"background","#194f9c !Important","color","white"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","items-center","mt-2"],[1,"text-7xl","sm:text-8xl","font-bold","tracking-tight","leading-none","text-blue-500"],[1,"text-lg","font-medium","text-amber-600","dark:text-primary-500"],["overdueMenu","matMenu"],[1,"text-7xl","sm:text-8xl","font-bold","tracking-tight","leading-none","text-red-500"],[1,"text-lg","font-medium","text-secondary-600","dark:text-secondary-500"],["issuesMenu","matMenu"],[1,"text-7xl","sm:text-8xl","font-bold","tracking-tight","leading-none","text-amber-500"],[1,"text-lg","font-medium","text-amber-600","dark:text-amber-500"],["featuresMenu","matMenu"],[1,"text-7xl","sm:text-8xl","font-bold","tracking-tight","leading-none","text-green-500"],[1,"text-lg","font-medium","text-green-600","dark:text-green-500"],[1,"sm:col-span-6","flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","flex-col","flex-auto","mt-2","overflow-x-auto"],["mat-icon-button",""],[3,"svgIcon"],[2,"font-weight","bolder"],["mat-icon-button","",3,"click"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","gap-6","w-full","min-w-0"],["mat-flat-button","",1,"fuse-mat-button-rounded","bg-accent-700",2,"width","150px !Important","float","right !important",3,"color","click"],[1,"ml-2"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7),t.YNc(8,X,5,1,"ng-container",8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",9),t.TgZ(10,"div",10),t.TgZ(11,"mat-tab-group",11),t.TgZ(12,"mat-tab",12),t.YNc(13,K,76,12,"ng-template",13),t.qZA(),t.TgZ(14,"mat-tab",14),t.YNc(15,V,25,3,"ng-template",13),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(11),t.Q6J("animationDuration","0"))},directives:[x.KI,Z.SP,Z.uX,Z.Vc,p.lW,v.p6,f.Hw,v.VK,w.sg],encapsulation:2,changeDetection:0}),r})(),resolve:{data:(()=>{class r{constructor(e){this._projectService=e}resolve(e,a){return this._projectService.getData()}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(j))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}];let tt=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[o.Bz.forChild(G),p.ot,_.vV,q.t,f.Ps,v.Tx,C.Cv,y.si,U.SJ,P.JX,S.p0,Z.Nh,M.X,x.y4,A.m,n.u5,n.UX]]}),r})()}}]);