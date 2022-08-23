"use strict";(self.webpackChunk_gi_demo=self.webpackChunk_gi_demo||[]).push([[7027],{17027:(U,c,t)=>{t.r(c),t.d(c,{ConfirmationDialogModule:()=>w,routes:()=>p});var f=t(63423),s=t(51095),u=t(7539),l=t(98295),g=t(83166),Z=t(67441),d=t(514),x=t(44466),o=t(37716),i=t(3679),h=t(40097),m=t(38583),v=t(76969),A=t(72458);function T(e,r){if(1&e&&(o.ynx(0),o.TgZ(1,"mat-option",34),o._uU(2),o.ALo(3,"titlecase"),o.qZA(),o.BQk()),2&e){const n=r.$implicit;o.xp6(1),o.Q6J("value",n),o.xp6(1),o.Oqu(o.lcZ(3,2,n))}}function C(e,r){if(1&e&&(o.ynx(0),o.TgZ(1,"mat-option",34),o._uU(2),o.ALo(3,"titlecase"),o.qZA(),o.BQk()),2&e){const n=r.$implicit;o.xp6(1),o.Q6J("value",n),o.xp6(1),o.Oqu(o.lcZ(3,2,n))}}const q=function(){return["primary","accent","warn","basic","info","success","warning","error"]},b=function(){return["primary","accent","warn"]},p=[{path:"",component:(()=>{class e{constructor(n,a){this._formBuilder=n,this._fuseConfirmationService=a}ngOnInit(){this.configForm=this._formBuilder.group({title:"Remove contact",message:'Are you sure you want to remove this contact permanently? <span class="font-medium">This action cannot be undone!</span>',icon:this._formBuilder.group({show:!0,name:"heroicons_outline:exclamation",color:"warn"}),actions:this._formBuilder.group({confirm:this._formBuilder.group({show:!0,label:"Remove",color:"warn"}),cancel:this._formBuilder.group({show:!0,label:"Cancel"})}),dismissible:!0})}openConfirmationDialog(){this._fuseConfirmationService.open(this.configForm.value).afterClosed().subscribe(a=>{console.log(a)})}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(i.qu),o.Y36(h.R))},e.\u0275cmp=o.Xpm({type:e,selectors:[["confirmation"]],decls:88,vars:30,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-3xl"],[1,"max-w-3xl","prose","prose-sm"],[3,"routerLink"],[1,"example-viewer"],[1,"title"],[1,"flex","flex-col","p-8","pt-0"],[1,"flex","flex-col","items-start",3,"formGroup"],[1,"fuse-mat-no-subscript","w-full"],["matInput","",3,"formControlName"],[1,"fuse-mat-no-subscript","fuse-mat-textarea","w-full","mt-6"],[1,"w-full","mt-8","mb-7","border-b"],[1,"flex","flex-col","w-full",3,"formGroupName"],[3,"color","formControlName"],[1,"flex","items-center","w-full","mt-6"],[1,"fuse-mat-no-subscript","w-1/2","pr-2"],[1,"fuse-mat-no-subscript","w-1/2","pl-2"],[3,"formControlName"],[4,"ngFor","ngForOf"],[1,"w-full",3,"formGroupName"],[1,"mt-2",3,"color","formControlName"],[1,"flex","items-center","w-full","mt-4"],[1,"flex","flex-col","w-full","mt-6",3,"formGroupName"],[1,"mt-12"],["mat-flat-button","",3,"color","click"],[1,"dark","w-full","mt-8","p-4","rounded-2xl","overflow-hidden"],["fuse-highlight","",3,"code","lang"],[3,"value"]],template:function(n,a){1&n&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"div"),o.TgZ(5,"a",4),o._uU(6,"User Interface"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(7,"div",5),o.TgZ(8,"h2",6),o._uU(9," Confirmation Dialog "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(10,"div",7),o.TgZ(11,"div",8),o.TgZ(12,"div",9),o.TgZ(13,"p"),o._uU(14," One of the repetitive and tedious jobs in Angular is to create confirmation dialogs. Since dialogs require their own components you have to either create a separate component every time you need a confirmation dialog or you have to create your own confirmation dialog system that can be configured. "),o.qZA(),o.TgZ(15,"p"),o._uU(16," In order for you to save time while developing with Fuse, we have created a simple yet powerful "),o.TgZ(17,"code"),o._uU(18,"FuseConfirmationService"),o.qZA(),o._uU(19," to create customized confirmation dialogs on-the-fly. "),o.qZA(),o.TgZ(20,"p"),o._uU(21," Below you can configure and preview the confirmation dialog. You can use the generated configuration object within your code to have the exact same dialog. "),o.qZA(),o.TgZ(22,"p"),o._uU(23," For more detailed information and API documentation, check the "),o.TgZ(24,"a",10),o._uU(25,"documentation"),o.qZA(),o._uU(26," page. "),o.qZA(),o.qZA(),o.TgZ(27,"div",11),o.TgZ(28,"div",12),o.TgZ(29,"h6"),o._uU(30,"Configure the dialog and preview it"),o.qZA(),o.qZA(),o.TgZ(31,"div",13),o.TgZ(32,"form",14),o.TgZ(33,"mat-form-field",15),o.TgZ(34,"mat-label"),o._uU(35,"Title"),o.qZA(),o._UZ(36,"input",16),o.qZA(),o.TgZ(37,"mat-form-field",17),o.TgZ(38,"mat-label"),o._uU(39,"Message"),o.qZA(),o.TgZ(40,"textarea",16),o._uU(41,"                            "),o.qZA(),o.qZA(),o._UZ(42,"div",18),o.TgZ(43,"div",19),o.TgZ(44,"mat-checkbox",20),o._uU(45," Show Icon "),o.qZA(),o.TgZ(46,"div",21),o.TgZ(47,"mat-form-field",22),o.TgZ(48,"mat-label"),o._uU(49,"Icon name"),o.qZA(),o._UZ(50,"input",16),o.qZA(),o.TgZ(51,"mat-form-field",23),o.TgZ(52,"mat-label"),o._uU(53,"Icon color"),o.qZA(),o.TgZ(54,"mat-select",24),o.YNc(55,T,4,4,"ng-container",25),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o._UZ(56,"div",18),o.TgZ(57,"div",26),o.TgZ(58,"div",19),o.TgZ(59,"mat-checkbox",27),o._uU(60," Show Confirm button "),o.qZA(),o.TgZ(61,"div",28),o.TgZ(62,"mat-form-field",22),o.TgZ(63,"mat-label"),o._uU(64,"Confirm button label"),o.qZA(),o._UZ(65,"input",16),o.qZA(),o.TgZ(66,"mat-form-field",23),o.TgZ(67,"mat-label"),o._uU(68,"Confirm button color"),o.qZA(),o.TgZ(69,"mat-select",24),o.YNc(70,C,4,4,"ng-container",25),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(71,"div",29),o.TgZ(72,"mat-checkbox",27),o._uU(73," Show Cancel button "),o.qZA(),o.TgZ(74,"div",28),o.TgZ(75,"mat-form-field",22),o.TgZ(76,"mat-label"),o._uU(77,"Cancel button label"),o.qZA(),o._UZ(78,"input",16),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o._UZ(79,"div",18),o.TgZ(80,"mat-checkbox",20),o._uU(81," Dismissible "),o.qZA(),o.qZA(),o.TgZ(82,"div",30),o.TgZ(83,"button",31),o.NdJ("click",function(){return a.openConfirmationDialog()}),o._uU(84," Open Confirmation Dialog "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(85,"div",32),o._UZ(86,"textarea",33),o.ALo(87,"json"),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&n&&(o.xp6(24),o.Q6J("routerLink","/ui/fuse-components/services/confirmation"),o.xp6(8),o.Q6J("formGroup",a.configForm),o.xp6(4),o.Q6J("formControlName","title"),o.xp6(4),o.Q6J("formControlName","message"),o.xp6(3),o.Q6J("formGroupName","icon"),o.xp6(1),o.Q6J("color","primary")("formControlName","show"),o.xp6(6),o.Q6J("formControlName","name"),o.xp6(4),o.Q6J("formControlName","color"),o.xp6(1),o.Q6J("ngForOf",o.DdM(28,q)),o.xp6(2),o.Q6J("formGroupName","actions"),o.xp6(1),o.Q6J("formGroupName","confirm"),o.xp6(1),o.Q6J("color","primary")("formControlName","show"),o.xp6(6),o.Q6J("formControlName","label"),o.xp6(4),o.Q6J("formControlName","color"),o.xp6(1),o.Q6J("ngForOf",o.DdM(29,b)),o.xp6(1),o.Q6J("formGroupName","cancel"),o.xp6(1),o.Q6J("color","primary")("formControlName","show"),o.xp6(6),o.Q6J("formControlName","label"),o.xp6(2),o.Q6J("color","primary")("formControlName","dismissible"),o.xp6(3),o.Q6J("color","primary"),o.xp6(3),o.Q6J("code",o.lcZ(87,26,a.configForm.value))("lang","json"))},directives:[f.yS,i._Y,i.JL,i.sg,l.KE,l.hX,g.Nt,i.Fj,i.JJ,i.u,i.x0,u.oG,Z.gD,m.sg,s.lW,v.L,A.ey],pipes:[m.Ts,m.rS],encapsulation:2,changeDetection:0}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[f.Bz.forChild(p),s.ot,u.p9,l.lN,g.c,Z.LD,d.$A,x.m]]}),e})()}}]);