"use strict";(self.webpackChunk_gi_demo=self.webpackChunk_gi_demo||[]).push([[3045],{3045:(Me,z,c)=>{c.d(z,{gD:()=>ue,LD:()=>me,$L:()=>pe});var y=c(1331),v=c(16274),i=c(42741),d=c(40688),b=c(10823),L=c(2174),B=c(72882),C=c(99957),j=c(98950),p=c(15911),x=c(6006),Z=c(59765),D=c(30636),K=c(63543),H=c(32812),S=c(59917),W=c(63305),F=c(88561),Q=c(57689),m=c(27194),_=c(88638),J=c(12281),T=c(93324);const X=["trigger"],$=["panel"];function q(a,h){if(1&a&&(i.TgZ(0,"span",8),i._uU(1),i.qZA()),2&a){const e=i.oxw();i.xp6(1),i.Oqu(e.placeholder)}}function ee(a,h){if(1&a&&(i.TgZ(0,"span",12),i._uU(1),i.qZA()),2&a){const e=i.oxw(2);i.xp6(1),i.Oqu(e.triggerValue)}}function te(a,h){1&a&&i.Hsn(0,0,["*ngSwitchCase","true"])}function ie(a,h){if(1&a&&(i.TgZ(0,"span",9),i.YNc(1,ee,2,1,"span",10),i.YNc(2,te,1,0,"ng-content",11),i.qZA()),2&a){const e=i.oxw();i.Q6J("ngSwitch",!!e.customTrigger),i.xp6(2),i.Q6J("ngSwitchCase",!0)}}function ne(a,h){if(1&a){const e=i.EpF();i.TgZ(0,"div",13),i.TgZ(1,"div",14,15),i.NdJ("@transformPanel.done",function(n){return i.CHM(e),i.oxw()._panelDoneAnimatingStream.next(n.toState)})("keydown",function(n){return i.CHM(e),i.oxw()._handleKeydown(n)}),i.Hsn(3,1),i.qZA(),i.qZA()}if(2&a){const e=i.oxw();i.Q6J("@transformPanelWrap",void 0),i.xp6(1),i.Gre("mat-select-panel ",e._getPanelTheme(),""),i.Udp("transform-origin",e._transformOrigin)("font-size",e._triggerFontSize,"px"),i.Q6J("ngClass",e.panelClass)("@transformPanel",e.multiple?"showing-multiple":"showing"),i.uIk("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}const ae=[[["mat-select-trigger"]],"*"],se=["mat-select-trigger","*"],Y={transformPanelWrap:(0,_.X$)("transformPanelWrap",[(0,_.eR)("* => void",(0,_.IO)("@transformPanel",[(0,_.pV)()],{optional:!0}))]),transformPanel:(0,_.X$)("transformPanel",[(0,_.SB)("void",(0,_.oB)({transform:"scaleY(0.8)",minWidth:"100%",opacity:0})),(0,_.SB)("showing",(0,_.oB)({opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"})),(0,_.SB)("showing-multiple",(0,_.oB)({opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"})),(0,_.eR)("void => *",(0,_.jt)("120ms cubic-bezier(0, 0, 0.2, 1)")),(0,_.eR)("* => void",(0,_.jt)("100ms 25ms linear",(0,_.oB)({opacity:0})))])};let U=0;const M=256,N=new i.OlP("mat-select-scroll-strategy"),ce=new i.OlP("MAT_SELECT_CONFIG"),he={provide:N,deps:[y.aV],useFactory:function(a){return()=>a.scrollStrategies.reposition()}};class _e{constructor(h,e){this.source=h,this.value=e}}const de=(0,d.Kr)((0,d.sb)((0,d.Id)((0,d.FD)(class{constructor(a,h,e,t,n){this._elementRef=a,this._defaultErrorStateMatcher=h,this._parentForm=e,this._parentFormGroup=t,this.ngControl=n}})))),G=new i.OlP("MatSelectTrigger");let pe=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275dir=i.lG2({type:a,selectors:[["mat-select-trigger"]],features:[i._Bn([{provide:G,useExisting:a}])]}),a})(),ge=(()=>{class a extends de{constructor(e,t,n,s,l,o,r,u,I,A,fe,ye,ve,O){var P,w,R;super(l,s,r,u,A),this._viewportRuler=e,this._changeDetectorRef=t,this._ngZone=n,this._dir=o,this._parentFormField=I,this._liveAnnouncer=ve,this._defaultOptions=O,this._panelOpen=!1,this._compareWith=(g,k)=>g===k,this._uid="mat-select-"+U++,this._triggerAriaLabelledBy=null,this._destroy=new x.xQ,this._onChange=()=>{},this._onTouched=()=>{},this._valueId="mat-select-value-"+U++,this._panelDoneAnimatingStream=new x.xQ,this._overlayPanelClass=(null===(P=this._defaultOptions)||void 0===P?void 0:P.overlayPanelClass)||"",this._focused=!1,this.controlType="mat-select",this._required=!1,this._multiple=!1,this._disableOptionCentering=null!==(R=null===(w=this._defaultOptions)||void 0===w?void 0:w.disableOptionCentering)&&void 0!==R&&R,this.ariaLabel="",this.optionSelectionChanges=(0,Z.P)(()=>{const g=this.options;return g?g.changes.pipe((0,K.O)(g),(0,H.w)(()=>(0,D.T)(...g.map(k=>k.onSelectionChange)))):this._ngZone.onStable.pipe((0,S.q)(1),(0,H.w)(()=>this.optionSelectionChanges))}),this.openedChange=new i.vpe,this._openedStream=this.openedChange.pipe((0,W.h)(g=>g),(0,F.U)(()=>{})),this._closedStream=this.openedChange.pipe((0,W.h)(g=>!g),(0,F.U)(()=>{})),this.selectionChange=new i.vpe,this.valueChange=new i.vpe,this.ngControl&&(this.ngControl.valueAccessor=this),null!=(null==O?void 0:O.typeaheadDebounceInterval)&&(this._typeaheadDebounceInterval=O.typeaheadDebounceInterval),this._scrollStrategyFactory=ye,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(fe)||0,this.id=this.id}get focused(){return this._focused||this._panelOpen}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required}set required(e){this._required=(0,C.Ig)(e),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._multiple=(0,C.Ig)(e)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(e){this._disableOptionCentering=(0,C.Ig)(e)}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){(e!==this._value||this._multiple&&Array.isArray(e))&&(this.options&&this._setSelectionByValue(e),this._value=e)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(e){this._typeaheadDebounceInterval=(0,C.su)(e)}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}ngOnInit(){this._selectionModel=new j.Ov(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe((0,Q.x)(),(0,m.R)(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen))}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe((0,m.R)(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe((0,K.O)(null),(0,m.R)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const e=this._getTriggerAriaLabelledby();if(e!==this._triggerAriaLabelledBy){const t=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?t.setAttribute("aria-labelledby",e):t.removeAttribute("aria-labelledby")}this.ngControl&&this.updateErrorState()}ngOnChanges(e){e.disabled&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck())}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}writeValue(e){this.value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel.selected:this._selectionModel.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return!!this._dir&&"rtl"===this._dir.value}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){const t=e.keyCode,n=t===p.JH||t===p.LH||t===p.oh||t===p.SV,s=t===p.K5||t===p.L_,l=this._keyManager;if(!l.isTyping()&&s&&!(0,p.Vb)(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){const o=this.selected;l.onKeydown(e);const r=this.selected;r&&o!==r&&this._liveAnnouncer.announce(r.viewValue,1e4)}}_handleOpenKeydown(e){const t=this._keyManager,n=e.keyCode,s=n===p.JH||n===p.LH,l=t.isTyping();if(s&&e.altKey)e.preventDefault(),this.close();else if(l||n!==p.K5&&n!==p.L_||!t.activeItem||(0,p.Vb)(e))if(!l&&this._multiple&&n===p.A&&e.ctrlKey){e.preventDefault();const o=this.options.some(r=>!r.disabled&&!r.selected);this.options.forEach(r=>{r.disabled||(o?r.select():r.deselect())})}else{const o=t.activeItemIndex;t.onKeydown(e),this._multiple&&s&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==o&&t.activeItem._selectViaInteraction()}else e.preventDefault(),t.activeItem._selectViaInteraction()}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe((0,S.q)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this._setSelectionByValue(this.ngControl?this.ngControl.value:this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this._selectionModel.selected.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectValue(t)),this._sortValues();else{const t=this._selectValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectValue(e){const t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return null!=n.value&&this._compareWith(n.value,e)}catch(s){return!1}});return t&&this._selectionModel.select(t),t}_initKeyManager(){this._keyManager=new B.s1(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withAllowedModifierKeys(["shiftKey"]),this._keyManager.tabOut.pipe((0,m.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.pipe((0,m.R)(this._destroy)).subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const e=(0,D.T)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe((0,m.R)(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),(0,D.T)(...this.options.map(t=>t._stateChanges)).pipe((0,m.R)(e)).subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}_onSelect(e,t){const n=this._selectionModel.isSelected(e);null!=e.value||this._multiple?(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())):(e.deselect(),this._selectionModel.clear(),null!=this.value&&this._propagateChanges(e.value)),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t=null;t=this.multiple?this.selected.map(n=>n.value):this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){this._keyManager&&(this.empty?this._keyManager.setFirstItemActive():this._keyManager.setActiveItem(this._selectionModel.selected[0]))}_canOpen(){var e;return!this._panelOpen&&!this.disabled&&(null===(e=this.options)||void 0===e?void 0:e.length)>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){var e;if(this.ariaLabel)return null;const t=null===(e=this._parentFormField)||void 0===e?void 0:e.getLabelId();return this.ariaLabelledby?(t?t+" ":"")+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){var e;if(this.ariaLabel)return null;const t=null===(e=this._parentFormField)||void 0===e?void 0:e.getLabelId();let n=(t?t+" ":"")+this._valueId;return this.ariaLabelledby&&(n+=" "+this.ariaLabelledby),n}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){this._ariaDescribedby=e.join(" ")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this._panelOpen||!this.empty||this._focused&&!!this._placeholder}}return a.\u0275fac=function(e){return new(e||a)(i.Y36(L.rL),i.Y36(i.sBO),i.Y36(i.R0b),i.Y36(d.rD),i.Y36(i.SBq),i.Y36(J.Is,8),i.Y36(T.F,8),i.Y36(T.sg,8),i.Y36(b.G_,8),i.Y36(T.a5,10),i.$8M("tabindex"),i.Y36(N),i.Y36(B.Kd),i.Y36(ce,8))},a.\u0275dir=i.lG2({type:a,viewQuery:function(e,t){if(1&e&&(i.Gf(X,5),i.Gf($,5),i.Gf(y.pI,5)),2&e){let n;i.iGM(n=i.CRH())&&(t.trigger=n.first),i.iGM(n=i.CRH())&&(t.panel=n.first),i.iGM(n=i.CRH())&&(t._overlayDir=n.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],id:"id",placeholder:"placeholder",required:"required",multiple:"multiple",disableOptionCentering:"disableOptionCentering",compareWith:"compareWith",value:"value",typeaheadDebounceInterval:"typeaheadDebounceInterval",panelClass:"panelClass",ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",sortComparator:"sortComparator"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},features:[i.qOj,i.TTD]}),a})(),ue=(()=>{class a extends ge{constructor(){super(...arguments),this._scrollTop=0,this._triggerFontSize=0,this._transformOrigin="top",this._offsetY=0,this._positions=[{originX:"start",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"bottom"}]}_calculateOverlayScroll(e,t,n){const s=this._getItemHeight();return Math.min(Math.max(0,s*e-t+s/2),n)}ngOnInit(){super.ngOnInit(),this._viewportRuler.change().pipe((0,m.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._changeDetectorRef.markForCheck())})}open(){super._canOpen()&&(super.open(),this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._triggerFontSize=parseInt(getComputedStyle(this.trigger.nativeElement).fontSize||"0"),this._calculateOverlayPosition(),this._ngZone.onStable.pipe((0,S.q)(1)).subscribe(()=>{this._triggerFontSize&&this._overlayDir.overlayRef&&this._overlayDir.overlayRef.overlayElement&&(this._overlayDir.overlayRef.overlayElement.style.fontSize=`${this._triggerFontSize}px`)}))}_scrollOptionIntoView(e){const t=(0,d.CB)(e,this.options,this.optionGroups),n=this._getItemHeight();this.panel.nativeElement.scrollTop=0===e&&1===t?0:(0,d.jH)((e+t)*n,n,this.panel.nativeElement.scrollTop,M)}_positioningSettled(){this._calculateOverlayOffsetX(),this.panel.nativeElement.scrollTop=this._scrollTop}_panelDoneAnimating(e){this.panelOpen?this._scrollTop=0:(this._overlayDir.offsetX=0,this._changeDetectorRef.markForCheck()),super._panelDoneAnimating(e)}_getChangeEvent(e){return new _e(this,e)}_calculateOverlayOffsetX(){const e=this._overlayDir.overlayRef.overlayElement.getBoundingClientRect(),t=this._viewportRuler.getViewportSize(),n=this._isRtl(),s=this.multiple?56:32;let l;if(this.multiple)l=40;else if(this.disableOptionCentering)l=16;else{let u=this._selectionModel.selected[0]||this.options.first;l=u&&u.group?32:16}n||(l*=-1);const o=0-(e.left+l-(n?s:0)),r=e.right+l-t.width+(n?0:s);o>0?l+=o+8:r>0&&(l-=r+8),this._overlayDir.offsetX=Math.round(l),this._overlayDir.overlayRef.updatePosition()}_calculateOverlayOffsetY(e,t,n){const s=this._getItemHeight(),l=(s-this._triggerRect.height)/2,o=Math.floor(M/s);let r;return this.disableOptionCentering?0:(r=0===this._scrollTop?e*s:this._scrollTop===n?(e-(this._getItemCount()-o))*s+(s-(this._getItemCount()*s-M)%s):t-s/2,Math.round(-1*r-l))}_checkOverlayWithinViewport(e){const t=this._getItemHeight(),n=this._viewportRuler.getViewportSize(),s=this._triggerRect.top-8,l=n.height-this._triggerRect.bottom-8,o=Math.abs(this._offsetY),u=Math.min(this._getItemCount()*t,M)-o-this._triggerRect.height;u>l?this._adjustPanelUp(u,l):o>s?this._adjustPanelDown(o,s,e):this._transformOrigin=this._getOriginBasedOnOption()}_adjustPanelUp(e,t){const n=Math.round(e-t);this._scrollTop-=n,this._offsetY-=n,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop<=0&&(this._scrollTop=0,this._offsetY=0,this._transformOrigin="50% bottom 0px")}_adjustPanelDown(e,t,n){const s=Math.round(e-t);if(this._scrollTop+=s,this._offsetY+=s,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop>=n)return this._scrollTop=n,this._offsetY=0,void(this._transformOrigin="50% top 0px")}_calculateOverlayPosition(){const e=this._getItemHeight(),t=this._getItemCount(),n=Math.min(t*e,M),l=t*e-n;let o;o=this.empty?0:Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]),0),o+=(0,d.CB)(o,this.options,this.optionGroups);const r=n/2;this._scrollTop=this._calculateOverlayScroll(o,r,l),this._offsetY=this._calculateOverlayOffsetY(o,r,l),this._checkOverlayWithinViewport(l)}_getOriginBasedOnOption(){const e=this._getItemHeight(),t=(e-this._triggerRect.height)/2;return`50% ${Math.abs(this._offsetY)-t+e/2}px 0px`}_getItemHeight(){return 3*this._triggerFontSize}_getItemCount(){return this.options.length+this.optionGroups.length}}return a.\u0275fac=function(){let h;return function(t){return(h||(h=i.n5z(a)))(t||a)}}(),a.\u0275cmp=i.Xpm({type:a,selectors:[["mat-select"]],contentQueries:function(e,t,n){if(1&e&&(i.Suo(n,G,5),i.Suo(n,d.ey,5),i.Suo(n,d.K7,5)),2&e){let s;i.iGM(s=i.CRH())&&(t.customTrigger=s.first),i.iGM(s=i.CRH())&&(t.options=s),i.iGM(s=i.CRH())&&(t.optionGroups=s)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","true",1,"mat-select"],hostVars:20,hostBindings:function(e,t){1&e&&i.NdJ("keydown",function(s){return t._handleKeydown(s)})("focus",function(){return t._onFocus()})("blur",function(){return t._onBlur()}),2&e&&(i.uIk("id",t.id)("tabindex",t.tabIndex)("aria-controls",t.panelOpen?t.id+"-panel":null)("aria-expanded",t.panelOpen)("aria-label",t.ariaLabel||null)("aria-required",t.required.toString())("aria-disabled",t.disabled.toString())("aria-invalid",t.errorState)("aria-describedby",t._ariaDescribedby||null)("aria-activedescendant",t._getAriaActiveDescendant()),i.ekj("mat-select-disabled",t.disabled)("mat-select-invalid",t.errorState)("mat-select-required",t.required)("mat-select-empty",t.empty)("mat-select-multiple",t.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matSelect"],features:[i._Bn([{provide:b.Eo,useExisting:a},{provide:d.HF,useExisting:a}]),i.qOj],ngContentSelectors:se,decls:9,vars:12,consts:[["cdk-overlay-origin","",1,"mat-select-trigger",3,"click"],["origin","cdkOverlayOrigin","trigger",""],[1,"mat-select-value",3,"ngSwitch"],["class","mat-select-placeholder mat-select-min-line",4,"ngSwitchCase"],["class","mat-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-select-arrow-wrapper"],[1,"mat-select-arrow"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayMinWidth","cdkConnectedOverlayOffsetY","backdropClick","attach","detach"],[1,"mat-select-placeholder","mat-select-min-line"],[1,"mat-select-value-text",3,"ngSwitch"],["class","mat-select-min-line",4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-select-min-line"],[1,"mat-select-panel-wrap"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(e,t){if(1&e&&(i.F$t(ae),i.TgZ(0,"div",0,1),i.NdJ("click",function(){return t.toggle()}),i.TgZ(3,"div",2),i.YNc(4,q,2,1,"span",3),i.YNc(5,ie,3,2,"span",4),i.qZA(),i.TgZ(6,"div",5),i._UZ(7,"div",6),i.qZA(),i.qZA(),i.YNc(8,ne,4,14,"ng-template",7),i.NdJ("backdropClick",function(){return t.close()})("attach",function(){return t._onAttached()})("detach",function(){return t.close()})),2&e){const n=i.MAs(1);i.uIk("aria-owns",t.panelOpen?t.id+"-panel":null),i.xp6(3),i.Q6J("ngSwitch",t.empty),i.uIk("id",t._valueId),i.xp6(1),i.Q6J("ngSwitchCase",!0),i.xp6(1),i.Q6J("ngSwitchCase",!1),i.xp6(3),i.Q6J("cdkConnectedOverlayPanelClass",t._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",t._scrollStrategy)("cdkConnectedOverlayOrigin",n)("cdkConnectedOverlayOpen",t.panelOpen)("cdkConnectedOverlayPositions",t._positions)("cdkConnectedOverlayMinWidth",null==t._triggerRect?null:t._triggerRect.width)("cdkConnectedOverlayOffsetY",t._offsetY)}},directives:[y.xu,v.RF,v.n9,y.pI,v.ED,v.mk],styles:['.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;opacity:0}\n'],encapsulation:2,data:{animation:[Y.transformPanelWrap,Y.transformPanel]},changeDetection:0}),a})(),me=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({providers:[he],imports:[[v.ez,y.U8,d.Ng,d.BQ],L.ZD,b.lN,d.Ng,d.BQ]}),a})()}}]);