"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[143],{8143:(H,m,a)=>{a.r(m),a.d(m,{DocModule:()=>E});var f=a(9808),l=a(2302),d=a(6087),h=a(4847),c=a(6346),t=a(5e3),g=a(2340),D=a(520);let Z=(()=>{class o{constructor(e){this.http=e}onGetDocuments(){return this.http.get(`${g.N.API_URL}/api/v1/docs`)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(D.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var v=a(6155),x=a(6727),T=a(7161),u=a(7322),C=a(7531),A=a(7423),p=a(2531),y=a(5245);function I(o,n){1&o&&(t.TgZ(0,"th",20),t._uU(1," ID "),t.qZA())}function S(o,n){1&o&&t._UZ(0,"td",21)}function N(o,n){1&o&&(t.TgZ(0,"th",20),t._uU(1," NOMBRE "),t.qZA())}function U(o,n){1&o&&t._UZ(0,"td",21)}function Y(o,n){1&o&&(t.TgZ(0,"th",20),t._uU(1," ESTATUS "),t.qZA())}function M(o,n){1&o&&t._UZ(0,"td",21)}function R(o,n){1&o&&(t.TgZ(0,"th",20),t._uU(1," OPCIONES "),t.qZA())}function Q(o,n){if(1&o&&(t.TgZ(0,"td",21),t.TgZ(1,"button",22),t._UZ(2,"mat-icon",23),t.qZA(),t._UZ(3,"mat-menu",null,24),t.qZA()),2&o){const e=t.MAs(4);t.xp6(1),t.Q6J("matMenuTriggerFor",e)}}function B(o,n){1&o&&t._UZ(0,"tr",25)}function G(o,n){1&o&&t._UZ(0,"tr",26)}function F(o,n){if(1&o&&(t.TgZ(0,"tr",27),t.TgZ(1,"td",28),t._uU(2),t.qZA(),t.qZA()),2&o){t.oxw();const e=t.MAs(11);t.xp6(2),t.hij('No se encontraron registros "',e.value,'"')}}const w=function(){return[10,25,100]},J=[{path:"",component:(()=>{class o{constructor(e,i,s,r){this.service=e,this.dialogService=i,this.store=s,this.notificationService=r,this.displayedColumns=["id","name","statusName","options"],this.docs=[]}ngOnInit(){this.onGetDocs()}ngOnDestroy(){}onGetDocs(){this.service.onGetDocuments().subscribe(e=>{this.docs=e,this.setData()})}setData(){this.dataSource=new c.by,this.dataSource.data=this.docs,this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(Z),t.Y36(v.x),t.Y36(x.yh),t.Y36(T.g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-doc-index"]],viewQuery:function(e,i){if(1&e&&(t.Gf(d.NW,5),t.Gf(h.YE,5)),2&e){let s;t.iGM(s=t.CRH())&&(i.paginator=s.first),t.iGM(s=t.CRH())&&(i.sort=s.first)}},decls:32,vars:5,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[1,"row","end-xs"],[1,"col-xs-12","col-sm-12","col-md-6","col-lg-6"],["appearance","standard"],["matInput","","placeholder","Ex. Sistemas",3,"keyup"],["input",""],[1,"table-responsive"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","statusName"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of docs",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-icon-button","",3,"matMenuTriggerFor"],["svgIcon","dots-vertical"],["menu","matMenu"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h2"),t._uU(4,"Documentos"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"div",3),t.TgZ(6,"div",4),t.TgZ(7,"mat-form-field",5),t.TgZ(8,"mat-label"),t._uU(9,"Buscar"),t.qZA(),t.TgZ(10,"input",6,7),t.NdJ("keyup",function(r){return i.applyFilter(r)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",1),t.TgZ(13,"div",2),t.TgZ(14,"div",8),t.TgZ(15,"table",9),t.ynx(16,10),t.YNc(17,I,2,0,"th",11),t.YNc(18,S,1,0,"td",12),t.BQk(),t.ynx(19,13),t.YNc(20,N,2,0,"th",11),t.YNc(21,U,1,0,"td",12),t.BQk(),t.ynx(22,14),t.YNc(23,Y,2,0,"th",11),t.YNc(24,M,1,0,"td",12),t.BQk(),t.ynx(25,15),t.YNc(26,R,2,0,"th",11),t.YNc(27,Q,5,1,"td",12),t.BQk(),t.YNc(28,B,1,0,"tr",16),t.YNc(29,G,1,0,"tr",17),t.YNc(30,F,3,1,"tr",18),t.qZA(),t._UZ(31,"mat-paginator",19),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(15),t.Q6J("dataSource",i.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(4,w)))},directives:[u.KE,u.hX,C.Nt,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,c.Ee,d.NW,c.ge,c.ev,A.lW,p.p6,y.Hw,p.VK,c.XQ,c.Gk],styles:[""]}),o})()}];let O=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(J)],l.Bz]}),o})();var z=a(9995);let E=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.ez,O,z.q]]}),o})()}}]);