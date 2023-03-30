"use strict";(self.webpackChunkboilerplate_angular=self.webpackChunkboilerplate_angular||[]).push([[647],{8647:($,f,i)=>{i.r(f),i.d(f,{WorkoutsModule:()=>c});var p=i(6895),x=i(855),v=i(3956),Z=i(4482),h=i(5403),_=i(5032),C=i(262),W=i(9646),n=i(1571),k=i(4004),y=i(529);class r{constructor(t){this.http=t}getWorkouts(){return this.http.get("https://api.dianacoelho.com.br/api/treinos?populate=Exercicios.instrucao").pipe((0,k.U)(t=>t.data.map(m=>m.attributes.Exercicios).map(m=>m.map(a=>({id:a.id,nome:a.nome,repeticoes:a.repeticoes,descanso:a.descanso,descricao:a.descricao,url:a.instrucao.data.attributes.url})))))}}r.\u0275fac=function(t){return new(t||r)(n.LFG(y.eN))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"});var A=i(1572),O=i(4850),l=i(7485);function I(o,t){if(1&o&&(n.TgZ(0,"div",1)(1,"h2"),n._uU(2),n.qZA(),n.TgZ(3,"p"),n._uU(4),n.qZA(),n.TgZ(5,"p"),n._uU(6),n.qZA(),n.TgZ(7,"p"),n._uU(8),n.qZA(),n.TgZ(9,"video",2),n._UZ(10,"source",3),n.qZA()()),2&o){const e=n.oxw();n.xp6(2),n.Oqu(e.exercise.nome),n.xp6(2),n.Oqu(e.exercise.repeticoes),n.xp6(2),n.Oqu(e.exercise.descanso),n.xp6(2),n.Oqu(e.exercise.descricao),n.xp6(1),n.Q6J("muted",!0),n.xp6(1),n.MGl("src","https://api.dianacoelho.com.br",e.exercise.url,"",n.LSH)}}class u{}function J(o,t){if(1&o&&(n.TgZ(0,"div"),n._UZ(1,"mat-divider")(2,"app-exercise",5),n.qZA()),2&o){const e=t.$implicit;n.xp6(2),n.Q6J("exercise",e)}}function M(o,t){if(1&o&&(n.TgZ(0,"div")(1,"mat-accordion")(2,"mat-expansion-panel",4)(3,"mat-expansion-panel-header"),n._uU(4),n.qZA(),n.YNc(5,J,3,1,"div",3),n.qZA()()()),2&o){const e=t.$implicit,g=t.index;n.xp6(4),n.hij("Treino ",g+1,""),n.xp6(1),n.Q6J("ngForOf",e)}}function Q(o,t){if(1&o&&(n.TgZ(0,"div"),n.YNc(1,M,6,2,"div",3),n.qZA()),2&o){const e=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",e.training)}}function U(o,t){1&o&&(n.TgZ(0,"div")(1,"p"),n._uU(2,"Erro ao carregar os treinos."),n.qZA()())}function Y(o,t){1&o&&(n.TgZ(0,"div")(1,"p"),n._uU(2,"Sem treino."),n.qZA()())}function E(o,t){if(1&o&&(n.TgZ(0,"div"),n.YNc(1,Y,3,0,"div",0),n.qZA()),2&o){const e=n.oxw().ngIf;n.xp6(1),n.Q6J("ngIf",!e.training.length)}}function N(o,t){1&o&&(n.TgZ(0,"div",7),n._UZ(1,"mat-spinner"),n.qZA())}function F(o,t){if(1&o&&n.YNc(0,N,2,0,"div",6),2&o){const e=n.oxw().ngIf;n.Q6J("ngIf",!e.error)}}function S(o,t){if(1&o&&(n.ynx(0),n.YNc(1,Q,2,1,"div",1),n.YNc(2,U,3,0,"div",0),n.YNc(3,E,2,1,"div",0),n.YNc(4,F,1,1,"ng-template",null,2,n.W1O),n.BQk()),2&o){const e=t.ngIf,g=n.MAs(5);n.xp6(1),n.Q6J("ngIf",e.training&&!e.error)("ngIfElse",g),n.xp6(1),n.Q6J("ngIf",!e.training&&e.error),n.xp6(1),n.Q6J("ngIf",e.training)}}u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-exercise"]],inputs:{exercise:"exercise"},decls:1,vars:1,consts:[["class","exercise",4,"ngIf"],[1,"exercise"],["width","400","height","300","controls","","autoplay","",3,"muted"],["type","video/mp4",3,"src"]],template:function(t,e){1&t&&n.YNc(0,I,11,6,"div",0),2&t&&n.Q6J("ngIf",e.exercise)},dependencies:[p.O5],styles:[".exercise[_ngcontent-%COMP%]{margin:1rem 0}"]});const B=function(o,t){return{training:o,error:t}};class d{constructor(t){this.service=t,this.training$=this.service.getWorkouts(),this.error$=this.service.getWorkouts().pipe(function T(){return(0,Z.e)((o,t)=>{o.subscribe((0,h.x)(t,_.Z))})}(),(0,C.K)(e=>(0,W.of)(e)))}}d.\u0275fac=function(t){return new(t||d)(n.Y36(r))},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-workouts"]],decls:6,vars:8,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["loading",""],[4,"ngFor","ngForOf"],[1,"card"],[3,"exercise"],["class","loading",4,"ngIf"],[1,"loading"]],template:function(t,e){1&t&&(n.TgZ(0,"section")(1,"h1"),n._uU(2,"Treinos"),n.qZA(),n.YNc(3,S,6,4,"ng-container",0),n.ALo(4,"async"),n.ALo(5,"async"),n.qZA()),2&t&&(n.xp6(3),n.Q6J("ngIf",n.WLB(5,B,n.lcZ(4,1,e.training$),n.lcZ(5,3,e.error$))))},dependencies:[p.sg,p.O5,A.Ou,O.d,l.pp,l.ib,l.yz,u,p.Ov],styles:["section[_ngcontent-%COMP%]{margin:1rem}section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-bottom:1rem}section[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{width:100%;height:300px;display:flex;justify-content:center;align-items:center}"],changeDetection:0});const P=[{path:"",component:d}];class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[v.Bz.forChild(P),v.Bz]});class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[p.ez,s,x.m]})}}]);