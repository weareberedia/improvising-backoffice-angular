import{a as y,b as M,c as T,d as D,e as g,f as w,g as v,h as I,i as R,j as H,k as j,l as N,m as P}from"./chunk-TVOMW6IE.js";import"./chunk-OSHCF7AP.js";import"./chunk-HPRU7IS5.js";import{a as b,b as h,e as x,f as E}from"./chunk-7HUC2BW2.js";import"./chunk-UEMK4BVH.js";import"./chunk-KAGZ6T5X.js";import{Kb as n,Mb as c,Rb as _,Sa as l,Sb as S,ha as C,ib as m,kb as s,rb as a,sb as o,tb as f,ub as r,vb as d}from"./chunk-DORY63QC.js";var A=()=>({style:"currency",currency:"USD"});function F(e,t){e&1&&(a(0,"th",15),n(1,"Identificador"),o())}function z(e,t){if(e&1&&(a(0,"td",16),n(1),o()),e&2){let i=t.$implicit;l(),c(" ",i.id," ")}}function B(e,t){e&1&&(a(0,"th",15),n(1,"Nombre"),o())}function k(e,t){if(e&1&&(a(0,"td",16),n(1),o()),e&2){let i=t.$implicit;l(),c(" ",i.name," ")}}function U(e,t){e&1&&(a(0,"th",15),n(1,"Apellidos"),o())}function q(e,t){if(e&1&&(a(0,"td",16),n(1),o()),e&2){let i=t.$implicit;l(),c(" ",i.lastName," ")}}function J(e,t){e&1&&(a(0,"th",15),n(1,"Edad"),o())}function L(e,t){if(e&1&&(a(0,"td",16),n(1),o()),e&2){let i=t.$implicit;l(),c(" ",i.age," ")}}function G(e,t){e&1&&(a(0,"th",15),n(1,"Puesto"),o())}function K(e,t){if(e&1&&(a(0,"td",16),n(1),o()),e&2){let i=t.$implicit;l(),c(" ",i.jobPosition," ")}}function O(e,t){e&1&&(a(0,"th",15),n(1,"Salario"),o())}function Q(e,t){if(e&1&&(a(0,"td",16),n(1),o()),e&2){let i=t.$implicit;l(),c(" ",i.salary.toLocaleString("en-US",S(1,A))," ")}}function V(e,t){e&1&&(a(0,"th",15),n(1,"Acciones"),o())}function W(e,t){e&1&&(a(0,"td",16)(1,"button",17)(2,"mat-icon",18),n(3,"description"),o()(),a(4,"button",19)(5,"mat-icon",20),n(6,"edit"),o()(),a(7,"button",21)(8,"mat-icon",22),n(9,"delete"),o()()())}function X(e,t){e&1&&f(0,"tr",23)}function Y(e,t){e&1&&f(0,"tr",24)}var re=(()=>{let t=class t{get displayedColumns(){return this._displayedColumns}get dataSource(){return this._dataSource}constructor(){this._displayedColumns=["id","name","lastName","age","jobPosition","salary","actions"],this._dataSource=[{id:1,name:"Abraham",lastName:"Berrelleza",age:24,jobPosition:"Software Engineer",salary:5e4},{id:2,name:"Jose Miguel",lastName:"Heredia",age:34,jobPosition:"Scrum Master",salary:5e4},{id:3,name:"Adrian",lastName:"Sanchez",age:26,jobPosition:"Software Engineer",salary:5e4}]}};t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=C({type:t,selectors:[["colaboradores-component"]],standalone:!0,features:[_],decls:30,vars:3,consts:[[1,"crud-container"],["mat-icon-button","","matTooltip","Registrar nuevo"],[1,"aquamarine-color"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","lastName"],["matColumnDef","age"],["matColumnDef","jobPosition"],["matColumnDef","salary"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","matTooltip","Digitalizar documentos"],[1,"lightblue-color"],["mat-icon-button","","matTooltip","Editar informaci\xF3n"],[1,"darkyellow-color"],["mat-icon-button","","matTooltip","Dar de baja"],[1,"darkred-color"],["mat-header-row",""],["mat-row",""]],template:function(p,u){p&1&&(a(0,"div",0)(1,"h3"),n(2,"Colaboradores"),o(),a(3,"button",1)(4,"mat-icon",2),n(5,"add"),o()(),a(6,"table",3),r(7,4),m(8,F,2,0,"th",5)(9,z,2,1,"td",6),d(),r(10,7),m(11,B,2,0,"th",5)(12,k,2,1,"td",6),d(),r(13,8),m(14,U,2,0,"th",5)(15,q,2,1,"td",6),d(),r(16,9),m(17,J,2,0,"th",5)(18,L,2,1,"td",6),d(),r(19,10),m(20,G,2,0,"th",5)(21,K,2,1,"td",6),d(),r(22,11),m(23,O,2,0,"th",5)(24,Q,2,2,"td",6),d(),r(25,12),m(26,V,2,0,"th",5)(27,W,10,0,"td",6),d(),m(28,X,1,0,"tr",13)(29,Y,1,0,"tr",14),o()()),p&2&&(l(6),s("dataSource",u.dataSource),l(22),s("matHeaderRowDef",u.displayedColumns),l(),s("matRowDefColumns",u.displayedColumns))},dependencies:[E,x,h,b,M,y,P,T,g,R,w,D,H,v,I,j,N],encapsulation:2});let e=t;return e})();export{re as default};