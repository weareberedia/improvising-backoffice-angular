import{a as M,b as E,c as T,d as v,e as w,f as R,g as y,h as V,i as I,j as b,k as H,l as g,m as q}from"./chunk-TVOMW6IE.js";import"./chunk-OSHCF7AP.js";import"./chunk-HPRU7IS5.js";import{a as h,b as D,e as S,f as x}from"./chunk-7HUC2BW2.js";import"./chunk-UEMK4BVH.js";import"./chunk-KAGZ6T5X.js";import{Kb as i,Mb as d,Rb as _,Sa as o,ha as C,ib as l,kb as p,rb as a,sb as n,tb as f,ub as r,vb as c}from"./chunk-DORY63QC.js";function $(t,e){t&1&&(a(0,"th",13),i(1,"Identificador"),n())}function B(t,e){if(t&1&&(a(0,"td",14),i(1),n()),t&2){let m=e.$implicit;o(),d(" ",m.id," ")}}function N(t,e){t&1&&(a(0,"th",13),i(1,"Fecha de inicio"),n())}function k(t,e){if(t&1&&(a(0,"td",14),i(1),n()),t&2){let m=e.$implicit;o(),d(" ",m.startDate," ")}}function z(t,e){t&1&&(a(0,"th",13),i(1,"Fecha de regreso"),n())}function A(t,e){if(t&1&&(a(0,"td",14),i(1),n()),t&2){let m=e.$implicit;o(),d(" ",m.endDate," ")}}function P(t,e){t&1&&(a(0,"th",13),i(1,"Estatus"),n())}function j(t,e){if(t&1&&(a(0,"td",14),i(1),n()),t&2){let m=e.$implicit;o(),d(" ",m.status," ")}}function G(t,e){t&1&&(a(0,"th",13),i(1,"Acciones"),n())}function J(t,e){t&1&&(a(0,"td",14)(1,"button",15)(2,"mat-icon",16),i(3,"close"),n()()())}function K(t,e){t&1&&f(0,"tr",17)}function L(t,e){t&1&&f(0,"tr",18)}var at=(()=>{let e=class e{get displayedColumns(){return this._displayedColumns}get dataSource(){return this._dataSource}constructor(){this._displayedColumns=["id","startDate","endDate","status","actions"],this._dataSource=[{id:1,startDate:"25/01/2024",endDate:"05/02/2024",status:"PENDIENTE"}]}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=C({type:e,selectors:[["employee-vacaciones-component"]],standalone:!0,features:[_],decls:24,vars:3,consts:[[1,"crud-container"],["mat-icon-button","","matTooltip","Realizar solicitud"],[1,"aquamarine-color"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","startDate"],["matColumnDef","endDate"],["matColumnDef","status"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Cancelar solicitud"],[1,"darkred-color"],["mat-header-row",""],["mat-row",""]],template:function(s,u){s&1&&(a(0,"div",0)(1,"h3"),i(2,"Solicitud de vacaciones"),n(),a(3,"button",1)(4,"mat-icon",2),i(5,"add"),n()(),a(6,"table",3),r(7,4),l(8,$,2,0,"th",5)(9,B,2,1,"td",6),c(),r(10,7),l(11,N,2,0,"th",5)(12,k,2,1,"td",6),c(),r(13,8),l(14,z,2,0,"th",5)(15,A,2,1,"td",6),c(),r(16,9),l(17,P,2,0,"th",5)(18,j,2,1,"td",6),c(),r(19,10),l(20,G,2,0,"th",5)(21,J,4,0,"td",6),c(),l(22,K,1,0,"tr",11)(23,L,1,0,"tr",12),n()()),s&2&&(o(6),p("dataSource",u.dataSource),o(16),p("matHeaderRowDef",u.displayedColumns),o(),p("matRowDefColumns",u.displayedColumns))},dependencies:[x,S,D,h,E,M,q,T,w,I,R,v,b,y,V,H,g],encapsulation:2});let t=e;return t})();export{at as default};