"use strict";(self.webpackChunk_gi_demo=self.webpackChunk_gi_demo||[]).push([[288],{14288:(j,g,r)=>{r.r(g),r.d(g,{AuthSignInModule:()=>J});var m=r(63423),d=r(51095),h=r(7539),l=r(98295),p=r(76627),c=r(49983),u=r(4885),A=r(61147),Z=r(181),v=r(44466),f=r(91841),s=r(3679),I=r(45896),x=r(92340),e=r(37716),y=r(38583),T=r(41212);const w=["signInNgForm"];function C(t,i){if(1&t&&(e.TgZ(0,"fuse-alert",33),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),e.xp6(1),e.hij(" ",o.alert.message," ")}}function U(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Email address is required "),e.qZA())}function S(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function F(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1," Sign in "),e.qZA())}function b(t,i){1&t&&e._UZ(0,"mat-progress-spinner",34),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const N=[{path:"",component:(()=>{class t{constructor(o,n,a){this._httpClient=o,this._formBuilder=n,this._router=a,this.alert={type:"success",message:"Logged In"},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["",[s.kI.required,s.kI.email]],password:["password",s.kI.required],rememberMe:[""]}),window.localStorage.clear()}signIn(){if(this.url=x.N.loginUrl+"client_id=3MVG9snqYUvtJB1PKIJxVBRpflb24Qv0Keu0bAiYtWOx9MkDQN8yCHYarmKIvsipHOUaRoHDA2leKdeH9cXWe&client_secret=003675C146BAADE2C75B4FA60B81C5AD6499A36ECDADC22A64C438A452902A4F&grant_type=password&username=customerportalgiusa@giusa.com&password=Nash2305",this.signInForm.invalid)return;this.signInForm.disable(),this.showAlert=!1;const o=new f.WM({"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"append,delete,entries,foreach,get,has,keys,set,values,Authorization","Access-Control-Request-Methods":"HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS"});console.log(o),this._httpClient.post(this.url,{}).subscribe(n=>{localStorage.setItem("currentUser",JSON.stringify({access_token:n.access_token,id:n.id,instance_url:n.instance_url,issued_at:n.issued_at,signature:n.signature,token_type:n.token_type,username:this.signInForm.value.email})),console.log(JSON.parse(localStorage.getItem("currentUser"))),this._router.navigate(["/dashboards/project"]).then(()=>{window.location.reload()})},n=>{400===n.status&&(this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0),console.log(n.status)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(f.eN),e.Y36(s.qu),e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-sign-in"]],viewQuery:function(o,n){if(1&o&&e.Gf(w,5),2&o){let a;e.iGM(a=e.CRH())&&(n.signInNgForm=a.first)}},decls:48,vars:9,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],["src","assets/images/logo/logoo.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"flex","items-center","mt-8"],[1,"flex-auto","mt-px","border-t"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"img",3),e.TgZ(4,"div",4),e._uU(5,"Sign in"),e.qZA(),e.YNc(6,C,2,5,"fuse-alert",5),e.TgZ(7,"form",6,7),e.TgZ(9,"mat-form-field",8),e.TgZ(10,"mat-label"),e._uU(11,"Email address"),e.qZA(),e._UZ(12,"input",9),e.YNc(13,U,2,0,"mat-error",10),e.YNc(14,S,2,0,"mat-error",10),e.qZA(),e.TgZ(15,"button",11),e.NdJ("click",function(){return n.signIn()}),e.YNc(16,F,2,0,"span",10),e.YNc(17,b,1,2,"mat-progress-spinner",12),e.qZA(),e.TgZ(18,"div",13),e._UZ(19,"div",14),e._UZ(20,"div",14),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",15),e.O4$(),e.TgZ(22,"svg",16),e.TgZ(23,"g",17),e._UZ(24,"circle",18),e._UZ(25,"circle",19),e.qZA(),e.qZA(),e.TgZ(26,"svg",20),e.TgZ(27,"defs"),e.TgZ(28,"pattern",21),e._UZ(29,"rect",22),e.qZA(),e.qZA(),e._UZ(30,"rect",23),e.qZA(),e.kcU(),e.TgZ(31,"div",24),e.TgZ(32,"div",25),e.TgZ(33,"div"),e._uU(34,"Welcome to"),e.qZA(),e.TgZ(35,"div"),e._uU(36,"Global Imaging"),e.qZA(),e.TgZ(37,"div"),e._uU(38,"Customer Portal"),e.qZA(),e.qZA(),e._UZ(39,"div",26),e.TgZ(40,"div",13),e.TgZ(41,"div",27),e._UZ(42,"img",28),e._UZ(43,"img",29),e._UZ(44,"img",30),e._UZ(45,"img",31),e.qZA(),e.TgZ(46,"div",32),e._uU(47,"Making it easier for practices around the US"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(6),e.Q6J("ngIf",n.showAlert),e.xp6(1),e.Q6J("formGroup",n.signInForm),e.xp6(5),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",n.signInForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.signInForm.get("email").hasError("email")),e.xp6(1),e.Q6J("color","primary")("disabled",n.signInForm.disabled),e.xp6(1),e.Q6J("ngIf",!n.signInForm.disabled),e.xp6(1),e.Q6J("ngIf",n.signInForm.disabled))},directives:[y.O5,s._Y,s.JL,s.sg,l.KE,l.hX,c.Nt,s.Fj,s.JJ,s.u,d.lW,T.W,l.TO,u.Ou],encapsulation:2,data:{animation:I.L}}),t})()}];let J=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(N),d.ot,h.p9,l.lN,p.Ps,c.c,u.Cq,A.J,Z.fC,v.m]]}),t})()}}]);