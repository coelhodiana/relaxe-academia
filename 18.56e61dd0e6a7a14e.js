"use strict";(self.webpackChunkboilerplate_angular=self.webpackChunkboilerplate_angular||[]).push([[18],{7018:(A,g,s)=>{s.r(g),s.d(g,{WorkoutsModule:()=>a});var p=s(6895),v=s(2826),x=s(6780),e=s(1571),h=s(4004),Z=s(529);class c{constructor(o){this.http=o}getWorkouts(){return this.http.get("https://api.dianacoelho.com.br/api/treinos?populate=Exercicios.instrucao").pipe((0,h.U)(o=>o.data.map(m=>m.attributes.Exercicios).map(m=>m.map(i=>(console.log(i),{id:i.id,nome:i.nome,repeticoes:i.repeticoes,descanso:i.descanso,descricao:i.descricao,url:i.instrucao.data.attributes.url})))))}}c.\u0275fac=function(o){return new(o||c)(e.LFG(Z.eN))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var C=s(4850),l=s(7485);function T(t,o){if(1&t&&(e.TgZ(0,"div",1)(1,"h2"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.TgZ(9,"video",2),e._UZ(10,"source",3),e.qZA()()),2&t){const n=e.oxw();e.xp6(2),e.Oqu(n.exercise.nome),e.xp6(2),e.Oqu(n.exercise.repeticoes),e.xp6(2),e.Oqu(n.exercise.descanso),e.xp6(2),e.Oqu(n.exercise.descricao),e.xp6(1),e.Q6J("muted",!0),e.xp6(1),e.MGl("src","http://34.202.235.236:1337",n.exercise.url,"",e.LSH)}}class u{}function y(t,o){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"mat-divider")(2,"app-exercise",3),e.qZA()),2&t){const n=o.$implicit;e.xp6(2),e.Q6J("exercise",n)}}function W(t,o){if(1&t&&(e.TgZ(0,"div")(1,"mat-accordion")(2,"mat-expansion-panel",2)(3,"mat-expansion-panel-header"),e._uU(4),e.qZA(),e.YNc(5,y,3,1,"div",1),e.qZA()()()),2&t){const n=o.$implicit,f=o.index;e.xp6(2),e.Q6J("hideToggle",!1),e.xp6(2),e.hij("Treino ",f+1,""),e.xp6(1),e.Q6J("ngForOf",n)}}function k(t,o){if(1&t&&(e.TgZ(0,"section"),e.YNc(1,W,6,3,"div",1),e.qZA()),2&t){const n=o.ngIf;e.xp6(1),e.Q6J("ngForOf",n)}}u.\u0275fac=function(o){return new(o||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-exercise"]],inputs:{exercise:"exercise"},decls:1,vars:1,consts:[["class","exercise",4,"ngIf"],[1,"exercise"],["width","400","height","300","controls","",3,"muted"],["type","video/mp4",3,"src"]],template:function(o,n){1&o&&e.YNc(0,T,11,6,"div",0),2&o&&e.Q6J("ngIf",n.exercise)},dependencies:[p.O5],styles:[".exercise[_ngcontent-%COMP%]{margin:1rem 0}"]});class d{constructor(o){this.service=o,this.trains$=this.service.getWorkouts()}}d.\u0275fac=function(o){return new(o||d)(e.Y36(c))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-workouts"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"card",3,"hideToggle"],[3,"exercise"]],template:function(o,n){1&o&&(e.YNc(0,k,2,1,"section",0),e.ALo(1,"async")),2&o&&e.Q6J("ngIf",e.lcZ(1,1,n.trains$))},dependencies:[p.sg,p.O5,C.d,l.pp,l.ib,l.yz,u,p.Ov],styles:["section[_ngcontent-%COMP%]{margin:1rem}section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-bottom:1rem}"],changeDetection:0});const O=[{path:"",component:d}];class r{}r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[x.Bz.forChild(O),x.Bz]});class a{}a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[p.ez,r,v.m]})}}]);