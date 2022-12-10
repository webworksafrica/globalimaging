"use strict";(self.webpackChunk_gi_demo=self.webpackChunk_gi_demo||[]).push([[906],{32906:(j,d,n)=>{n.r(d),n.d(d,{AuthUnlockSessionModule:()=>N});var c=n(63423),g=n(51095),l=n(98295),f=n(76627),p=n(49983),h=n(4885),Z=n(61147),v=n(181),x=n(44466),a=n(3679),y=n(45896),e=n(37716),A=n(88951),U=n(37495),k=n(38583),w=n(41212);const T=["unlockSessionNgForm"];function S(t,i){if(1&t&&(e.TgZ(0,"fuse-alert",40),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),e.xp6(1),e.hij(" ",o.alert.message," ")}}function b(t,i){1&t&&e._UZ(0,"mat-icon",41),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function C(t,i){1&t&&e._UZ(0,"mat-icon",41),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function F(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1," Unlock your session "),e.qZA())}function q(t,i){1&t&&e._UZ(0,"mat-progress-spinner",42),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const I=function(){return["/sign-out"]},J=[{path:"",component:(()=>{class t{constructor(o,s,r,u,m){this._activatedRoute=o,this._authService=s,this._formBuilder=r,this._router=u,this._userService=m,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this._userService.user$.subscribe(o=>{this.name=o.Buyer_Full_Name__c,this._email=o.email}),this.unlockSessionForm=this._formBuilder.group({name:[{value:this.name,disabled:!0}],password:["",a.kI.required]})}unlock(){var o;this.unlockSessionForm.invalid||(this.unlockSessionForm.disable(),this.showAlert=!1,this._authService.unlockSession({email:null!==(o=this._email)&&void 0!==o?o:""}).subscribe(()=>{const s=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(s)},s=>{this.unlockSessionForm.enable(),this.unlockSessionNgForm.resetForm({name:{value:this.name,disabled:!0}}),this.alert={type:"error",message:"Invalid password"},this.showAlert=!0}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.gz),e.Y36(A.e),e.Y36(a.qu),e.Y36(c.F0),e.Y36(U.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-unlock-session"]],viewQuery:function(o,s){if(1&o&&e.Gf(T,5),2&o){let r;e.iGM(r=e.CRH())&&(s.unlockSessionNgForm=r.first)}},decls:60,vars:13,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["unlockSessionNgForm","ngForm"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(o,s){if(1&o){const r=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Unlock your session"),e.qZA(),e.TgZ(7,"div",6),e._uU(8,"Your session is locked due to inactivity"),e.qZA(),e.YNc(9,S,2,5,"fuse-alert",7),e.TgZ(10,"form",8,9),e.TgZ(12,"mat-form-field",10),e.TgZ(13,"mat-label"),e._uU(14,"Full name"),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.TgZ(16,"mat-form-field",10),e.TgZ(17,"mat-label"),e._uU(18,"Password"),e.qZA(),e._UZ(19,"input",12,13),e.TgZ(21,"button",14),e.NdJ("click",function(){e.CHM(r);const m=e.MAs(20);return m.type="password"===m.type?"text":"password"}),e.YNc(22,b,1,1,"mat-icon",15),e.YNc(23,C,1,1,"mat-icon",15),e.qZA(),e.TgZ(24,"mat-error"),e._uU(25," Password is required "),e.qZA(),e.qZA(),e.TgZ(26,"button",16),e.NdJ("click",function(){return s.unlock()}),e.YNc(27,F,2,0,"span",17),e.YNc(28,q,1,2,"mat-progress-spinner",18),e.qZA(),e.TgZ(29,"div",19),e.TgZ(30,"span"),e._uU(31,"I'm not"),e.qZA(),e.TgZ(32,"a",20),e._uU(33),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"div",21),e.O4$(),e.TgZ(35,"svg",22),e.TgZ(36,"g",23),e._UZ(37,"circle",24),e._UZ(38,"circle",25),e.qZA(),e.qZA(),e.TgZ(39,"svg",26),e.TgZ(40,"defs"),e.TgZ(41,"pattern",27),e._UZ(42,"rect",28),e.qZA(),e.qZA(),e._UZ(43,"rect",29),e.qZA(),e.kcU(),e.TgZ(44,"div",30),e.TgZ(45,"div",31),e.TgZ(46,"div"),e._uU(47,"Welcome to"),e.qZA(),e.TgZ(48,"div"),e._uU(49,"our community"),e.qZA(),e.qZA(),e.TgZ(50,"div",32),e._uU(51," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(52,"div",33),e.TgZ(53,"div",34),e._UZ(54,"img",35),e._UZ(55,"img",36),e._UZ(56,"img",37),e._UZ(57,"img",38),e.qZA(),e.TgZ(58,"div",39),e._uU(59,"More than 17k people joined us, it's your turn"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const r=e.MAs(20);e.xp6(9),e.Q6J("ngIf",s.showAlert),e.xp6(1),e.Q6J("formGroup",s.unlockSessionForm),e.xp6(5),e.Q6J("formControlName","name"),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===r.type),e.xp6(1),e.Q6J("ngIf","text"===r.type),e.xp6(3),e.Q6J("color","primary")("disabled",s.unlockSessionForm.disabled),e.xp6(1),e.Q6J("ngIf",!s.unlockSessionForm.disabled),e.xp6(1),e.Q6J("ngIf",s.unlockSessionForm.disabled),e.xp6(4),e.Q6J("routerLink",e.DdM(12,I)),e.xp6(1),e.Oqu(s.name)}},directives:[k.O5,a._Y,a.JL,a.sg,l.KE,l.hX,p.Nt,a.Fj,a.JJ,a.u,g.lW,l.R9,l.TO,c.yS,w.W,f.Hw,h.Ou],encapsulation:2,data:{animation:y.L}}),t})()}];let N=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(J),g.ot,l.lN,f.Ps,p.c,h.Cq,Z.J,v.fC,x.m]]}),t})()}}]);