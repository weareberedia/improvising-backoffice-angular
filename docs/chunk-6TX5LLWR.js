import"./chunk-JSOKWFWE.js";import{b as Bt,c as ct,d as Vt,g as mt}from"./chunk-JQNHTD2L.js";import{b as Xt,k as q,m as Kt,o as X,p as $t}from"./chunk-OSHCF7AP.js";import{c as Tt,d as _t,f as j,g as Ot,i as ut}from"./chunk-HPRU7IS5.js";import{a as gt,b as pt,f as Jt}from"./chunk-7HUC2BW2.js";import{F as Gt,G as ht,H as qt,c as Nt,h as Qt,o as Ht,q as Ut,s as Wt,t as Zt,u as Et,x as Yt,z as g}from"./chunk-UEMK4BVH.js";import{a as jt,i as st}from"./chunk-KAGZ6T5X.js";import{A as it,Ab as b,B as W,Cb as M,Db as L,Eb as T,Fb as O,Gb as dt,H as vt,Hb as C,Ib as I,J as xt,Jb as Dt,Kb as l,Qb as lt,Rb as h,Sa as p,T as et,Ta as c,U as yt,V as nt,Va as Ct,_ as u,_a as Y,a as $,aa as Z,ab as zt,ac as A,b as Ft,bb as Lt,da as at,dc as G,e as J,eb as It,ha as m,ia as w,ib as E,j as tt,ja as ot,jb as k,kb as F,l as ft,mb as P,nb as St,o as bt,ob as f,pa as v,qa as x,ra as kt,rb as o,sb as r,tb as y,va as Mt,xa as D,xb as z,ya as rt,za as Pt}from"./chunk-DORY63QC.js";var bi=["mat-menu-item",""],vi=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],xi=["mat-icon, [matMenuItemIcon]","*"];function yi(a,n){a&1&&(kt(),o(0,"svg",2),y(1,"polygon",3),r())}var ki=["*"];function Mi(a,n){if(a&1){let _=z();o(0,"div",0),b("keydown",function(i){v(_);let e=M();return x(e._handleKeydown(i))})("click",function(){v(_);let i=M();return x(i.closed.emit("click"))})("@transformMenu.start",function(i){v(_);let e=M();return x(e._onAnimationStart(i))})("@transformMenu.done",function(i){v(_);let e=M();return x(e._onAnimationDone(i))}),o(1,"div",1),T(2),r()()}if(a&2){let _=M();St(_._classList),F("id",_.panelId)("@transformMenu",_._panelAnimationState),k("aria-label",_.ariaLabel||null)("aria-labelledby",_.ariaLabelledby||null)("aria-describedby",_.ariaDescribedby||null)}}var At=new Z("MAT_MENU_PANEL"),K=(()=>{let n=class n{constructor(t,i,e,d,s){this._elementRef=t,this._document=i,this._focusMonitor=e,this._parentMenu=d,this._changeDetectorRef=s,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new tt,this._focused=new tt,this._highlighted=!1,this._triggersSubmenu=!1,d?.addItem?.(this)}focus(t,i){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),i=t.querySelectorAll("mat-icon, .material-icons");for(let e=0;e<i.length;e++)i[e].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}};n.\u0275fac=function(i){return new(i||n)(c(D),c(jt),c(Et),c(At,8),c(A))},n.\u0275cmp=m({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(i,e){i&1&&b("click",function(s){return e._checkDisabled(s)})("mouseenter",function(){return e._handleMouseEnter()}),i&2&&(k("role",e.role)("tabindex",e._getTabIndex())("aria-disabled",e.disabled)("disabled",e.disabled||null),P("mat-mdc-menu-item-highlighted",e._highlighted)("mat-mdc-menu-item-submenu-trigger",e._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",G],disableRipple:[2,"disableRipple","disableRipple",G]},exportAs:["matMenuItem"],standalone:!0,features:[It,h],attrs:bi,ngContentSelectors:xi,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(i,e){i&1&&(L(vi),T(0),o(1,"span",0),T(2,1),r(),y(3,"div",1),E(4,yi,2,0,":svg:svg",2)),i&2&&(p(3),F("matRippleDisabled",e.disableRipple||e.disabled)("matRippleTrigger",e._getHostElement()),p(),f(e._triggersSubmenu?4:-1))},dependencies:[Gt],encapsulation:2,changeDetection:0});let a=n;return a})();var Ci=new Z("MatMenuContent");var wt={transformMenu:Tt("transformMenu",[Ot("void",j({opacity:0,transform:"scale(0.8)"})),ut("void => enter",_t("120ms cubic-bezier(0, 0, 0.2, 1)",j({opacity:1,transform:"scale(1)"}))),ut("* => void",_t("100ms 25ms linear",j({opacity:0})))]),fadeInItems:Tt("fadeInItems",[Ot("showing",j({opacity:1})),ut("void => *",[j({opacity:0}),_t("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},we=wt.fadeInItems,fe=wt.transformMenu,Ii=0,Si=new Z("mat-menu-default-options",{providedIn:"root",factory:Di});function Di(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var B=(()=>{let n=class n{get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}set panelClass(t){let i=this._previousPanelClass,e=$({},this._classList);i&&i.length&&i.split(" ").forEach(d=>{e[d]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(d=>{e[d]=!0}),this._elementRef.nativeElement.className=""),this._classList=e}get classList(){return this.panelClass}set classList(t){this.panelClass=t}constructor(t,i,e,d){this._elementRef=t,this._changeDetectorRef=d,this._elevationPrefix="mat-elevation-z",this._baseElevation=8,this._directDescendantItems=new Pt,this._classList={},this._panelAnimationState="void",this._animationDone=new tt,this.closed=new rt,this.close=this.closed,this.panelId=`mat-menu-panel-${Ii++}`,this._injector=at(Mt),this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ut(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(et(this._directDescendantItems),yt(t=>it(...t.map(i=>i._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let i=this._keyManager;if(this._panelAnimationState==="enter"&&i.activeItem?._hasFocus()){let e=t.toArray(),d=Math.max(0,Math.min(e.length-1,i.activeItemIndex||0));e[d]&&!e[d].disabled?i.setActiveItem(d):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy()}_hovered(){return this._directDescendantItems.changes.pipe(et(this._directDescendantItems),yt(i=>it(...i.map(e=>e._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let i=t.keyCode,e=this._keyManager;switch(i){case 27:Qt(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(i===38||i===40)&&e.setFocusOrigin("keyboard"),e.onKeydown(t);return}t.stopPropagation()}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=zt(()=>{let i=null;if(this._directDescendantItems.length&&(i=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!i||!i.contains(document.activeElement)){let e=this._keyManager;e.setFocusOrigin(t).setFirstItemActive(),!e.activeItem&&i&&i.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){let i=Math.min(this._baseElevation+t,24),e=`${this._elevationPrefix}${i}`,d=Object.keys(this._classList).find(s=>s.startsWith(this._elevationPrefix));if(!d||d===this._previousElevation){let s=$({},this._classList);this._previousElevation&&(s[this._previousElevation]=!1),s[e]=!0,this._previousElevation=e,this._classList=s}}setPositionClasses(t=this.xPosition,i=this.yPosition){this._classList=Ft($({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":i==="above","mat-menu-below":i==="below"}),this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(t){this._animationDone.next(t),this._isAnimating=!1}_onAnimationStart(t){this._isAnimating=!0,t.toState==="enter"&&this._keyManager.activeItemIndex===0&&(t.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(et(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}};n.\u0275fac=function(i){return new(i||n)(c(D),c(Y),c(Si),c(A))},n.\u0275cmp=m({type:n,selectors:[["mat-menu"]],contentQueries:function(i,e,d){if(i&1&&(O(d,Ci,5),O(d,K,5),O(d,K,4)),i&2){let s;C(s=I())&&(e.lazyContent=s.first),C(s=I())&&(e._allItems=s),C(s=I())&&(e.items=s)}},viewQuery:function(i,e){if(i&1&&dt(Ct,5),i&2){let d;C(d=I())&&(e.templateRef=d.first)}},hostVars:3,hostBindings:function(i,e){i&2&&k("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",G],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:G(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[lt([{provide:At,useExisting:n}]),It,h],ngContentSelectors:ki,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"keydown","click","id"],[1,"mat-mdc-menu-content"]],template:function(i,e){i&1&&(L(),E(0,Mi,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:var(--mat-menu-item-trailing-spacing);padding-right:var(--mat-menu-item-leading-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]),.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon])[dir=rtl]{padding-left:var(--mat-menu-item-with-icon-trailing-spacing);padding-right:var(--mat-menu-item-with-icon-leading-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[wt.transformMenu,wt.fadeInItems]},changeDetection:0});let a=n;return a})(),ni=new Z("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let a=at(X);return()=>a.scrollStrategies.reposition()}});function Ei(a){return()=>a.scrollStrategies.reposition()}var Ti={provide:ni,deps:[X],useFactory:Ei},ti=Nt({passive:!0});var ai=(()=>{let n=class n{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){t!==this._menu&&(this._menu=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(i=>{this._destroyMenu(i),(i==="click"||i==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(t,i,e,d,s,R,V,N,Q){this._overlay=t,this._element=i,this._viewContainerRef=e,this._menuItemInstance=R,this._dir=V,this._focusMonitor=N,this._ngZone=Q,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=J.EMPTY,this._hoverSubscription=J.EMPTY,this._menuCloseSubscription=J.EMPTY,this._changeDetectorRef=at(A),this._handleTouchStart=H=>{Zt(H)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new rt,this.onMenuOpen=this.menuOpened,this.menuClosed=new rt,this.onMenuClose=this.menuClosed,this._scrollStrategy=d,this._parentMaterialMenu=s instanceof B?s:void 0,i.nativeElement.addEventListener("touchstart",this._handleTouchStart,ti)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,ti),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let t=this.menu;if(this._menuOpen||!t)return;let i=this._createOverlay(t),e=i.getConfig(),d=e.positionStrategy;this._setPosition(t,d),e.hasBackdrop=t.hasBackdrop==null?!this.triggersSubmenu():t.hasBackdrop,i.attach(this._getPortal(t)),t.lazyContent&&t.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(t),t instanceof B&&(t._startAnimation(),t._directDescendantItems.changes.pipe(nt(t.close)).subscribe(()=>{d.withLockedPosition(!1).reapplyLastPosition(),d.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(t,i){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,i):this._element.nativeElement.focus(i)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(t){if(!this._overlayRef||!this.menuOpen)return;let i=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,i instanceof B?(i._resetAnimation(),i.lazyContent?i._animationDone.pipe(W(e=>e.toState==="void"),vt(1),nt(i.lazyContent._attached)).subscribe({next:()=>i.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),i?.lazyContent?.detach())}_initMenu(t){t.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,this._setMenuElevation(t),t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(t){if(t.setElevation){let i=0,e=t.parentMenu;for(;e;)i++,e=e.parentMenu;t.setElevation(i)}}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let i=this._getOverlayConfig(t);this._subscribeToPositions(t,i.positionStrategy),this._overlayRef=this._overlay.create(i),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(t){return new Kt({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(t,i){t.setPositionClasses&&i.positionChanges.subscribe(e=>{let d=e.connectionPair.overlayX==="start"?"after":"before",s=e.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>t.setPositionClasses(d,s)):t.setPositionClasses(d,s)})}_setPosition(t,i){let[e,d]=t.xPosition==="before"?["end","start"]:["start","end"],[s,R]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[V,N]=[s,R],[Q,H]=[e,d],U=0;if(this.triggersSubmenu()){if(H=e=t.xPosition==="before"?"start":"end",d=Q=e==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Rt=this._parentMaterialMenu.items.first;this._parentInnerPadding=Rt?Rt._getHostElement().offsetTop:0}U=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(V=s==="top"?"bottom":"top",N=R==="top"?"bottom":"top");i.withPositions([{originX:e,originY:V,overlayX:Q,overlayY:s,offsetY:U},{originX:d,originY:V,overlayX:H,overlayY:s,offsetY:U},{originX:e,originY:N,overlayX:Q,overlayY:R,offsetY:-U},{originX:d,originY:N,overlayX:H,overlayY:R,offsetY:-U}])}_menuClosingActions(){let t=this._overlayRef.backdropClick(),i=this._overlayRef.detachments(),e=this._parentMaterialMenu?this._parentMaterialMenu.closed:bt(),d=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(W(s=>s!==this._menuItemInstance),W(()=>this._menuOpen)):bt();return it(t,e,d,i)}_handleMousedown(t){Wt(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let i=t.keyCode;(i===13||i===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===39&&this.dir==="ltr"||i===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(W(t=>t===this._menuItemInstance&&!t.disabled),xt(0,ft)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof B&&this.menu._isAnimating?this.menu._animationDone.pipe(vt(1),xt(0,ft),nt(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Xt(t.templateRef,this._viewContainerRef)),this._portal}};n.\u0275fac=function(i){return new(i||n)(c(X),c(D),c(Lt),c(ni),c(At,8),c(K,10),c(Yt,8),c(Et),c(Y))},n.\u0275dir=ot({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(i,e){i&1&&b("click",function(s){return e._handleClick(s)})("mousedown",function(s){return e._handleMousedown(s)})("keydown",function(s){return e._handleKeydown(s)}),i&2&&k("aria-haspopup",e.menu?"menu":null)("aria-expanded",e.menuOpen)("aria-controls",e.menuOpen?e.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0});let a=n;return a})(),oi=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=w({type:n}),n.\u0275inj=u({providers:[Ti],imports:[st,ht,g,$t,q,g]});let a=n;return a})();var di=(()=>{let n=class n{constructor(t){this._router=t}logout(){this._router.navigateByUrl("/autenticacion")}};n.\u0275fac=function(i){return new(i||n)(c(ct))},n.\u0275cmp=m({type:n,selectors:[["header-component"]],standalone:!0,features:[h],decls:10,vars:1,consts:[["menu","matMenu"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"]],template:function(i,e){if(i&1){let d=z();o(0,"div")(1,"p"),l(2,"Beredia ERP"),r(),o(3,"a",1)(4,"mat-icon"),l(5,"account_circle"),r()(),o(6,"mat-menu",null,0)(8,"button",2),b("click",function(){return v(d),x(e.logout())}),l(9,"Cerrar sesi\xF3n"),r()()()}if(i&2){let d=Dt(7);p(3),F("matMenuTriggerFor",d)}},dependencies:[oi,B,K,ai,pt,gt],styles:["div[_ngcontent-%COMP%]{width:90vw;height:8vh;background-color:#fff;display:flex;justify-content:space-between;align-items:center}div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:1rem}div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:1rem;opacity:.5;cursor:pointer}"]});let a=n;return a})();var li=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=w({type:n}),n.\u0275inj=u({imports:[g,g]});let a=n;return a})();var si=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=w({type:n}),n.\u0275inj=u({imports:[Ht,st,g,ht,qt,li]});let a=n;return a})();var ci=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=w({type:n}),n.\u0275inj=u({imports:[g,q,q,g]});let a=n;return a})();var mi=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=w({type:n}),n.\u0275inj=u({imports:[g,g]});let a=n;return a})();function Pi(a,n){a&1&&(o(0,"li")(1,"mat-icon",1),l(2,"list"),r(),o(3,"a",2),l(4,"M\xF3dulos"),r()(),o(5,"li")(6,"mat-icon",1),l(7,"account_circle"),r(),o(8,"a",3),l(9,"Perfil"),r()())}function zi(a,n){a&1&&(o(0,"li")(1,"mat-icon",1),l(2,"disabled_by_default"),r(),o(3,"a",4),l(4,"Colaboradores"),r()(),o(5,"li")(6,"mat-icon",1),l(7,"disabled_by_default"),r(),o(8,"a",5),l(9,"Vacaciones"),r()(),o(10,"li")(11,"mat-icon",1),l(12,"disabled_by_default"),r(),o(13,"a",6),l(14,"Vi\xE1ticos"),r()(),o(15,"li")(16,"mat-icon",1),l(17,"disabled_by_default"),r(),o(18,"a",7),l(19,"Prestaciones"),r()(),o(20,"li")(21,"mat-icon",1),l(22,"disabled_by_default"),r(),o(23,"a",8),l(24,"Capacitaciones"),r()())}function Li(a,n){a&1&&(o(0,"li")(1,"mat-icon",1),l(2,"disabled_by_default"),r(),o(3,"a",9),l(4,"Cuentas Empleados"),r()(),o(5,"li")(6,"mat-icon",1),l(7,"disabled_by_default"),r(),o(8,"a",10),l(9,"Transacciones"),r()(),o(10,"li")(11,"mat-icon",1),l(12,"disabled_by_default"),r(),o(13,"a",11),l(14,"N\xF3mina"),r()())}function ji(a,n){a&1&&(o(0,"li")(1,"mat-icon",1),l(2,"disabled_by_default"),r(),o(3,"a",12),l(4,"Mercancia"),r()(),o(5,"li")(6,"mat-icon",1),l(7,"disabled_by_default"),r(),o(8,"a",13),l(9,"Proveedores"),r()())}function Bi(a,n){a&1&&(o(0,"li")(1,"mat-icon",1),l(2,"disabled_by_default"),r(),o(3,"a",14),l(4,"Tickets"),r()(),o(5,"li")(6,"mat-icon",1),l(7,"disabled_by_default"),r(),o(8,"a",15),l(9,"Vacaciones"),r()(),o(10,"li")(11,"mat-icon",1),l(12,"disabled_by_default"),r(),o(13,"a",16),l(14,"Vi\xE1ticos"),r()())}var hi=(()=>{let n=class n{get router(){return this._router}constructor(t){this._router=t}navigateToHome(){this._router.navigateByUrl("/")}};n.\u0275fac=function(i){return new(i||n)(c(ct))},n.\u0275cmp=m({type:n,selectors:[["sidebar-component"]],standalone:!0,features:[h],decls:8,vars:5,consts:[["src","assets/icons/beredia.svg","width","50rem",3,"click"],[1,"icon"],["routerLink","/"],["routerLink","/inicio/perfil"],["routerLink","modulos/recursos-humanos/colaboradores"],["routerLink","modulos/recursos-humanos/vacaciones"],["routerLink","modulos/recursos-humanos/viaticos"],["routerLink","modulos/recursos-humanos/prestaciones"],["routerLink","modulos/recursos-humanos/capacitaciones"],["routerLink","modulos/finanzas/cuentas-empleados"],["routerLink","modulos/finanzas/transacciones"],["routerLink","modulos/finanzas/nomina"],["routerLink","modulos/inventario/mercancia"],["routerLink","modulos/inventario/proveedores"],["routerLink","modulos/kiosko/tickets"],["routerLink","modulos/kiosko/vacaciones"],["routerLink","modulos/kiosko/viaticos"]],template:function(i,e){i&1&&(o(0,"div")(1,"img",0),b("click",function(){return e.navigateToHome()}),r(),o(2,"ul"),E(3,Pi,10,0)(4,zi,25,0)(5,Li,15,0)(6,ji,10,0)(7,Bi,15,0),r()()),i&2&&(p(3),f(e.router.url=="/inicio/modulos"||e.router.url=="/inicio/perfil"?3:-1),p(),f(e.router.url=="/inicio/modulos/recursos-humanos"||e.router.url=="/inicio/modulos/recursos-humanos/colaboradores"||e.router.url=="/inicio/modulos/recursos-humanos/vacaciones"||e.router.url=="/inicio/modulos/recursos-humanos/viaticos"||e.router.url=="/inicio/modulos/recursos-humanos/prestaciones"||e.router.url=="/inicio/modulos/recursos-humanos/capacitaciones"?4:-1),p(),f(e.router.url=="/inicio/modulos/finanzas"||e.router.url=="/inicio/modulos/finanzas/cuentas-empleados"||e.router.url=="/inicio/modulos/finanzas/transacciones"||e.router.url=="/inicio/modulos/finanzas/nomina"?5:-1),p(),f(e.router.url=="/inicio/modulos/inventario"||e.router.url=="/inicio/modulos/inventario/mercancia"||e.router.url=="/inicio/modulos/inventario/proveedores"?6:-1),p(),f(e.router.url=="/inicio/modulos/kiosko"||e.router.url=="/inicio/modulos/kiosko/tickets"||e.router.url=="/inicio/modulos/kiosko/vacaciones"||e.router.url=="/inicio/modulos/kiosko/viaticos"?7:-1))},dependencies:[mt,Vt,mi,Jt,pt,gt,ci,si],styles:["div[_ngcontent-%COMP%]{width:10vw;height:100vh;background-color:#005cbb;display:flex;flex-direction:column;align-items:center}div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:1rem}div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;width:100%;list-style-type:none}div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{transition:.2s;color:#fff;cursor:pointer;margin-left:.4rem;margin-bottom:.2rem;display:flex}div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transition:.2s;margin-left:.3rem;font-size:.85rem;text-decoration:none;color:#fff}div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transition:.2s;color:#b1b1b1}"]});let a=n;return a})();var gi=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=m({type:n,selectors:[["footer-component"]],standalone:!0,features:[h],decls:5,vars:0,template:function(i,e){i&1&&(o(0,"div")(1,"p"),l(2,"Copyright Beredia \xA9"),r(),o(3,"p"),l(4,"v1.0"),r()())},styles:["div[_ngcontent-%COMP%]{width:90vw;height:5vh;background-color:#fff;display:flex}div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto;margin-left:1rem}"]});let a=n;return a})();var on=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=m({type:n,selectors:[["home-component"]],standalone:!0,features:[h],decls:7,vars:0,consts:[[1,"main-container"],[1,"content-container"],[1,"center-container"]],template:function(i,e){i&1&&(o(0,"div",0),y(1,"sidebar-component"),o(2,"div",1),y(3,"header-component"),o(4,"div",2),y(5,"router-outlet"),r(),y(6,"footer-component"),r()())},dependencies:[mt,Bt,di,hi,gi],styles:[".main-container[_ngcontent-%COMP%]{width:100vw;height:100vh;display:flex;background-color:#dcdcdc}.main-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{overflow:hidden}.main-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .center-container[_ngcontent-%COMP%]{overflow-y:auto;width:90vw;height:87vh}"]});let a=n;return a})();export{on as default};
