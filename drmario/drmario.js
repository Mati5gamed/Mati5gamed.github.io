(()=>{"use strict";class i{constructor(){this.wys=15,this.szer=8,this.tab=[],this.init()}init(){let t=window.document.createElement("div");t.classList.add("board");for(let s=0;s<this.wys;s++){this.tab[s]=[],i.tabnum[s]=[];for(let h=0;h<this.szer;h++){let a=window.document.createElement("div");a.style.height="17px",a.style.width="17px",a.style.border="1px",a.style.position="absolute",a.style.top=17*s+"px",a.style.left=17*h+"px";let r=s+"_"+h;a.id=r,t.appendChild(a),this.tab[s].push(a),i.tabnum[s].push(0),window.document.getElementById("conta").appendChild(t)}}}}i.tabnum=[];const t=i,s=-1608,h=-1624,a=-1640,r=-1672,d=-1688,l=-1720,e=-1736,o=-1752,n=-1784,c=-1800,p=-3445,u=-3461,g=-3477,b=-3509,m=-3525,k=class{constructor(i,t,s,h,a,r,d){this.co_to="tabletka",this.zbity=!1,this.idc1=i,this.idr1=t,this.idc2=s,this.idr2=h,this.color1=a,this.color2=r,this.plansza=d,this.rog=1,this.obr=0,this.kolorowanie()}kolorowanie(){switch(this.obr){case 0:null!=this.idr1&&null!=this.idc1&&(null!=this.idr2&&null!=this.idc2?"blue"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${a}px`):"red"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${o}px`):"yellow"==this.color1.color&&(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${g}px`):"blue"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${s}px`):"red"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${l}px`):"yellow"==this.color1.color&&(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${p}px`),t.tabnum[this.idr1][this.idc1]=this.color1.id),null!=this.idr2&&null!=this.idc2&&(null!=this.idr1&&null!=this.idc1?"blue"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${r}px`):"red"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${n}px`):"yellow"==this.color2.color&&(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${b}px`):"blue"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${s}px`):"red"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${l}px`):"yellow"==this.color2.color&&(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${p}px`),t.tabnum[this.idr2][this.idc2]=this.color2.id);break;case 1:null!=this.idr1&&null!=this.idc1&&(null!=this.idr2&&null!=this.idc2?"blue"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${d}px`):"red"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${c}px`):"yellow"==this.color1.color&&(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${m}px`):"blue"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${s}px`):"red"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${l}px`):"yellow"==this.color1.color&&(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${p}px`),t.tabnum[this.idr1][this.idc1]=this.color1.id),null!=this.idr2&&null!=this.idc2&&(null!=this.idr1&&null!=this.idc1?"blue"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${h}px`):"red"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${e}px`):"yellow"==this.color2.color&&(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${u}px`):"blue"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${s}px`):"red"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${l}px`):"yellow"==this.color2.color&&(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${p}px`),t.tabnum[this.idr2][this.idc2]=this.color2.id);break;case 2:null!=this.idr1&&null!=this.idc1&&(null!=this.idr2&&null!=this.idc2?"blue"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${r}px`):"red"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${n}px`):"yellow"==this.color1.color&&(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${b}px`):"blue"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${s}px`):"red"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${l}px`):"yellow"==this.color1.color&&(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${p}px`),t.tabnum[this.idr1][this.idc1]=this.color1.id),null!=this.idr2&&null!=this.idc2&&(null!=this.idr1&&null!=this.idc1?"blue"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${a}px`):"red"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${o}px`):"yellow"==this.color2.color&&(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${g}px`):"blue"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${s}px`):"red"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${l}px`):"yellow"==this.color2.color&&(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${p}px`),t.tabnum[this.idr2][this.idc2]=this.color2.id);break;case 3:null!=this.idr1&&null!=this.idc1&&(null!=this.idr2&&null!=this.idc2?"blue"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${h}px`):"red"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${e}px`):"yellow"==this.color1.color&&(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${u}px`):"blue"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${s}px`):"red"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${l}px`):"yellow"==this.color1.color&&(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr1][this.idc1].style.backgroundPositionX=`${p}px`),t.tabnum[this.idr1][this.idc1]=this.color1.id),null!=this.idr2&&null!=this.idc2&&(null!=this.idr1&&null!=this.idc1?"blue"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${d}px`):"red"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${c}px`):"yellow"==this.color2.color&&(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${m}px`):"blue"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${s}px`):"red"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${l}px`):"yellow"==this.color2.color&&(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.plansza[this.idr2][this.idc2].style.backgroundPositionX=`${p}px`),t.tabnum[this.idr2][this.idc2]=this.color2.id)}}spadanie(){let i=!1,s=!1;return null!=this.idr1&&null!=this.idc1&&(i=!0),null!=this.idr2&&null!=this.idc2&&(s=!0),!(!(i&&null!=this.plansza[this.idr1+1]&&s&&null!=this.plansza[this.idr2+1]||!i&&s&&null!=this.plansza[this.idr2+1]||i&&null!=this.plansza[this.idr1+1]&&!s)||!(i&&0==t.tabnum[this.idr1+1][this.idc1]&&s&&0==t.tabnum[this.idr2+1][this.idc2]||!i&&s&&0==t.tabnum[this.idr2+1][this.idc2]||i&&0==t.tabnum[this.idr1+1][this.idc1]&&!s)||(i&&(this.idr1+=1),s&&(this.idr2+=1),0))}odkolorowanie(){null!=this.idr1&&null!=this.idc1&&(this.plansza[this.idr1][this.idc1].style.background=null,t.tabnum[this.idr1][this.idc1]=0),null!=this.idr2&&null!=this.idc2&&(this.plansza[this.idr2][this.idc2].style.background=null,t.tabnum[this.idr2][this.idc2]=0)}przesuwanie_prawo(){(this.sprawdzanie(this.idr1,this.idc1)&&null!=this.plansza[this.idr1][this.idc1+1]&&this.sprawdzanie(this.idr2,this.idc2)&&null!=this.plansza[this.idr2][this.idc2+1]||!this.sprawdzanie(this.idr1,this.idc1)&&this.sprawdzanie(this.idr2,this.idc2)&&null!=this.plansza[this.idr2][this.idc2+1]||this.sprawdzanie(this.idr1,this.idc1)&&null!=this.plansza[this.idr1][this.idc1+1]&&!this.sprawdzanie(this.idr2,this.idc2))&&(this.sprawdzanie(this.idr1,this.idc1)&&(0==t.tabnum[this.idr1][this.idc1+1]||this.sprawdzanie_wpolrzednych(this.idr1,this.idc1+1))&&this.sprawdzanie(this.idr2,this.idc2)&&(0==t.tabnum[this.idr2][this.idc2+1]||this.sprawdzanie_wpolrzednych(this.idr2,this.idc2+1))||!this.sprawdzanie(this.idr1,this.idc1)&&this.sprawdzanie(this.idr2,this.idc2)&&0==t.tabnum[this.idr2][this.idc2+1]||this.sprawdzanie(this.idr1,this.idc1)&&0==t.tabnum[this.idr1][this.idc1+1]&&!this.sprawdzanie(this.idr2,this.idc2))&&(this.odkolorowanie(),this.idc1+=1,this.idc2+=1,this.kolorowanie())}przesuwanie_lewo(){(this.sprawdzanie(this.idr1,this.idc1)&&null!=this.plansza[this.idr1][this.idc1-1]&&this.sprawdzanie(this.idr2,this.idc2)&&null!=this.plansza[this.idr2][this.idc2-1]||!this.sprawdzanie(this.idr1,this.idc1)&&this.sprawdzanie(this.idr2,this.idc2)&&null!=this.plansza[this.idr2][this.idc2-1]||this.sprawdzanie(this.idr1,this.idc1)&&null!=this.plansza[this.idr1][this.idc1-1]&&!this.sprawdzanie(this.idr2,this.idc2))&&(this.sprawdzanie(this.idr1,this.idc1)&&(0==t.tabnum[this.idr1][this.idc1-1]||this.sprawdzanie_wpolrzednych(this.idr1,this.idc1-1))&&this.sprawdzanie(this.idr2,this.idc2)&&(0==t.tabnum[this.idr2][this.idc2-1]||this.sprawdzanie_wpolrzednych(this.idr2,this.idc2-1))||!this.sprawdzanie(this.idr1,this.idc1)&&this.sprawdzanie(this.idr2,this.idc2)&&0==t.tabnum[this.idr2][this.idc2-1]||this.sprawdzanie(this.idr1,this.idc1)&&0==t.tabnum[this.idr1][this.idc1-1]&&!this.sprawdzanie(this.idr2,this.idc2))&&(this.odkolorowanie(),this.idc1-=1,this.idc2-=1,this.kolorowanie())}obrot(){let i=!1;switch(this.odkolorowanie(),this.obr){case 0:1==this.rog?null==t.tabnum[this.idr2][this.idc2+1]?0==t.tabnum[this.idr1][this.idc1-1]&&0==t.tabnum[this.idr2+1][this.idc2]&&(this.idr2+=1,this.idc1-=1,this.rog=1,i=!0):0==t.tabnum[this.idr2+1][this.idc2+1]&&(this.idr2+=1,this.idc2+=1,this.rog=1,i=!0):null==t.tabnum[this.idr2][this.idc2+1]?0==t.tabnum[this.idr1+1][this.idc1]&&(this.idr1+=1,this.idc1-=1,this.rog=1,i=!0):0==t.tabnum[this.idr1+1][this.idc1]&&0==t.tabnum[this.idr2][this.idc2+1]&&(this.idr1+=1,this.idc2+=1,this.rog=1,i=!0);break;case 1:1==this.rog?null==t.tabnum[this.idr1-1]?0==t.tabnum[this.idr2+1][this.idc2-1]&&(this.idc2-=1,this.idr2+=1,this.rog=2,i=!0):0==t.tabnum[this.idr1-1][this.idc1]&&0==t.tabnum[this.idr2][this.idc2-1]&&(this.idr1-=1,this.idc2-=1,this.rog=2,i=!0):null==t.tabnum[this.idr1-1]?0==t.tabnum[this.idr1][this.idc1-1]&&0==t.tabnum[this.idr2+1][this.idc2]&&(this.idr2+=1,this.idc1-=1,this.rog=2,i=!0):0==t.tabnum[this.idr1-1][this.idc1-1]&&(this.idr1-=1,this.idc1-=1,this.rog=2,i=!0);break;case 2:1==this.rog?null==t.tabnum[this.idr1][this.idc1+1]?0==t.tabnum[this.idr2+1][this.idc2-1]&&(this.idr2+=1,this.idc2-=1,this.rog=2,i=!0):0==t.tabnum[this.idr1][this.idc1+1]&&0==t.tabnum[this.idr2+1][this.idc2]&&(this.idr2+=1,this.idc1+=1,this.rog=2,i=!0):null==t.tabnum[this.idr1][this.idc1+1]?0==t.tabnum[this.idr1+1][this.idc1]&&0==t.tabnum[this.idr2][this.idc2-1]&&(this.idc2-=1,this.idr1+=1,this.rog=2,i=!0):0==t.tabnum[this.idr1+1][this.idc1+1]&&(this.idr1+=1,this.idc1+=1,this.rog=2,i=!0);break;case 3:1==this.rog?null==t.tabnum[this.idr2-1]?0==t.tabnum[this.idr1+1][this.idc1]&&0==t.tabnum[this.idr2][this.idc2-1]&&(this.idr1+=1,this.idc2-=1,this.rog=1,i=!0):0==t.tabnum[this.idr2-1][this.idc2-1]&&(this.idr2-=1,this.idc2-=1,this.rog=1,i=!0):null==t.tabnum[this.idr2-1]?0==t.tabnum[this.idr1+1][this.idc1-1]&&(this.idr1+=1,this.idc1-=1,this.rog=1,i=!0):0==t.tabnum[this.idr1][this.idc1-1]&&0==t.tabnum[this.idr2-1][this.idc2]&&(this.idr2-=1,this.idc1-=1,this.rog=1,i=!0)}return this.kolorowanie(),i}obr_prawo(){let i=this.obr;this.obr+=1,this.obr>3&&(this.obr=0),0==this.obrot()&&(this.obr=i)}obr_lewo(){let i=this.obr;this.obr-=1,this.obr<0&&(this.obr=3),0==this.obrot()&&(this.obr=i)}sprawdzanie(i,t){return null!=t&&null!=i}sprawdzanie_wpolrzednych(i,t){return i==this.idr1&&t==this.idc1||i==this.idr2&&t==this.idc2}usuwanie(i,t){this.odkolorowanie(),i==this.idr1&&t==this.idc1&&("blue"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/bl_o.png)",this.idr1=null,this.idc1=null):"red"==this.color1.color?(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/br_o.png)",this.idr1=null,this.idc1=null):"yellow"==this.color1.color&&(this.plansza[this.idr1][this.idc1].style.backgroundImage="url(./img/yl_o.png)",this.idr1=null,this.idc1=null)),i==this.idr2&&t==this.idc2&&("blue"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/bl_o.png)",this.idc2=null):"red"==this.color2.color?(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/br_o.png)",this.idc2=null):"yellow"==this.color2.color&&(this.plansza[this.idr2][this.idc2].style.backgroundImage="url(./img/yl_o.png)",this.idr2=null,this.idc2=null)),null==this.idc1&&null==this.idc2&&null==this.idr1&&null==this.idr2&&(this.zbity=!0),this.kolorowanie()}},y=class{constructor(i,t,s,h){this.co_to="wirus",this.zbity=!1,this.idr=i,this.idc=t,this.color=s,this.plansza=h,this.init()}init(){"blue"==this.color.color?this.plansza[this.idr][this.idc].style.backgroundImage="url(./img/covid_blue.png)":"red"==this.color.color?this.plansza[this.idr][this.idc].style.backgroundImage="url(./img/covid_brown.png)":"yellow"==this.color.color&&(this.plansza[this.idr][this.idc].style.backgroundImage="url(./img/covid_yellow.png)"),t.tabnum[this.idr][this.idc]=this.color.id}sprawdzanie_wpolrzednych(i,t){return i==this.idr&&t==this.idc}usuwanie(i,s){"blue"==this.color.color?this.plansza[this.idr][this.idc].style.backgroundImage="url(./img/bl_x.png)":"red"==this.color.color?this.plansza[this.idr][this.idc].style.backgroundImage="url(./img/br_x.png)":"yellow"==this.color.color&&(this.plansza[this.idr][this.idc].style.backgroundImage="url(./img/yl_x.png)"),t.tabnum[this.idr][this.idc]=0,i==this.idr&&s==this.idc&&(this.idr=null,this.idc=null),null==this.idc&&null==this.idr&&(this.zbity=!0)}usuwanie2(){this.plansza[this.idr][this.idc].style.backgroundImage=""}},w=class{constructor(i,t,s){this.img=i,this.tickNumber=0,this.actFrame=0,this.destId=s,this.frames=t.frames,this.times=t.times,this.repeat=t.repeat}renderFrame(i){let t=document.getElementById(this.destId);t.style.width=this.frames[i].w+"px",t.style.height=this.frames[i].h+"px",t.style.backgroundPositionX=this.frames[i].x0+"px",t.style.backgroundImage="url('"+this.img+"')"}goAnim(){this.renderFrame(this.actFrame),this.tickNumber++,this.tickNumber==this.times[this.actFrame]&&(this.tickNumber=0,this.actFrame++),this.repeat&&this.actFrame==this.frames.length&&(this.actFrame=0)}},z={frames:[{x0:0,y0:0,w:96,h:72},{x0:-96,y0:0,w:96,h:72},{x0:-192,y0:0,w:96,h:72},{x0:-288,y0:0,w:96,h:72}],times:[30,30,30,30],repeat:!0},_={frames:[{x0:-768,y0:0,w:96,h:72},{x0:-864,y0:0,w:96,h:72},{x0:-960,y0:0,w:96,h:72},{x0:-1056,y0:0,w:96,h:72}],times:[30,30,30,30],repeat:!0},I={frames:[{x0:-384,y0:0,w:96,h:72},{x0:-480,y0:0,w:96,h:72},{x0:-576,y0:0,w:96,h:72},{x0:-672,y0:0,w:96,h:72}],times:[30,30,30,30],repeat:!0};new class{constructor(){this.pom=!1,this.tabpast=[],this.tabtemp=[],this.czas=60,this.tick=0,this.kat=0,this.kat2=30,this.kat3=65,this.pom1=!1,this.blokada=!1,this.ilosc_wirusow=3,this.liczba_punktow=0,this.tab_lokalna=[],this.animacje=[],this.srcgfx="./img/spritesheet.png",this.tab=[{id:1,color:"red"},{id:2,color:"yellow"},{id:3,color:"blue"}],this.spadanie=!1,this.kolko=()=>{let i=50,t=Math.sin(this.kat)*i+100,s=Math.cos(this.kat)*i+100;this.kat-=.5,this.kat2-=.5,this.kat3-=.5;let h=document.getElementById("yellow");h.style.top=`${t}px`,h.style.left=`${s}px`;let a=document.getElementById("blue"),r=Math.sin(this.kat2)*i+100,d=Math.cos(this.kat2)*i+100;a.style.top=`${r}px`,a.style.left=`${d}px`;let l=document.getElementById("red"),e=Math.sin(this.kat3)*i+100,o=Math.cos(this.kat3)*i+100;l.style.top=`${e}px`,l.style.left=`${o}px`},this.tabsy=()=>{this.wirusy();for(let i=0;i<this.animacje.length;i++)this.animacje[i].goAnim();if(1==this.reka.koniec_lot){0==this.tabtemp.length&&this.spawn();let i=0;if(this.tick>=this.czas)if(this.tick=0,1==this.spadanie){for(let t=0;t<this.tabpast.length;t++)"tabletka"==this.tabpast[t].co_to&&(this.tabpast[t].odkolorowanie(),0==this.tabpast[t].spadanie()&&(i+=1),this.tabpast[t].kolorowanie());if(i==this.tabpast.length-this.ilosc_wirusow&&1!=this.zbijanie()){if(1==this.wygrana())return 0;this.blokada=!1,this.reka.lot(),this.czas=60,this.spadanie=!1,this.reka.koniec_lot=!1,this.tabtemp.pop()}}else{this.tabs.odkolorowanie();let i=this.tabs.spadanie();if(this.tabs.kolorowanie(),0==i)if(this.koniec_gry(),1==this.zbijanie()){if(1==this.wygrana())return 0;this.czas=5,this.spadanie=!0,this.blokada=!0,this.opoznienie()}else this.reka.lot(),this.czas=60,this.blokada=!1,this.reka.koniec_lot=!1,this.tabtemp.pop()}this.tick+=1,this.tick>=15&&(this.animacja_x(),this.czas=60)}requestAnimationFrame(this.tabsy)},this.sterowanie=i=>{if(0==this.pom&&0==this.blokada)switch(this.pom=!0,console.log(i.code),i.code){case"ArrowRight":this.tabs.przesuwanie_prawo();break;case"ArrowLeft":this.tabs.przesuwanie_lewo();break;case"KeyZ":this.tabs.obr_lewo();break;case"KeyX":this.tabs.obr_prawo();break;case"ArrowDown":this.blokada=!0,this.czas=8}},this.init(),window.onkeydown=this.sterowanie,window.onkeyup=()=>{this.pom=!1}}init(){this.plansza=new t,this.reka=new class{constructor(){this.tab=[{id:1,color:"red"},{id:2,color:"yellow"},{id:3,color:"blue"}],this.wys=8,this.szer=12,this.tab1=[],this.tabkord=[],this.licznik=0,this.koniec_lot=!1,this.lot=()=>{this.start.tab_div1.push("3_10"),this.start.tab_div2.push("3_11"),this.start.tab_div1.push("3_10"),this.start.tab_div2.push("2_10"),this.start.tab_div1.push("2_10"),this.start.tab_div2.push("2_9"),this.start.tab_div1.push("1_9"),this.start.tab_div2.push("2_9"),this.start.tab_div1.push("1_8"),this.start.tab_div2.push("1_9"),this.start.tab_div1.push("1_8"),this.start.tab_div2.push("0_8"),this.start.tab_div1.push("0_8"),this.start.tab_div2.push("0_7"),this.start.tab_div1.push("0_7"),this.start.tab_div2.push("0_6"),this.start.tab_div1.push("0_6"),this.start.tab_div2.push("0_5"),this.start.tab_div1.push("0_5"),this.start.tab_div2.push("0_4"),this.start.tab_div1.push("0_4"),this.start.tab_div2.push("0_3"),this.start.tab_div1.push("0_3"),this.start.tab_div2.push("1_3"),this.start.tab_div1.push("1_2"),this.start.tab_div2.push("1_3"),this.start.tab_div1.push("1_1"),this.start.tab_div2.push("1_2"),this.start.tab_div1.push("2_1"),this.start.tab_div2.push("2_2"),this.start.tab_div1.push("3_1"),this.start.tab_div2.push("3_2"),this.start.tab_div1.push("4_1"),this.start.tab_div2.push("4_2"),this.interek=setInterval(this.leci,100)},this.leci=()=>{this.licznik<this.start.tab_div1.length-1&&this.licznik<this.start.tab_div2.length-1&&(this.licznik+=1,this.czyszczenie()),this.licznik>=16&&this.czyszczenie();let i=this.start.tab_div1[this.licznik].split("_");this.idr1=parseInt(i[0]),this.idc1=parseInt(i[1]);let t=this.start.tab_div2[this.licznik].split("_");this.idr2=parseInt(t[0]),this.idc2=parseInt(t[1]),"blue"==this.color1.color?(this.tab1[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.idr1>this.idr2&&(this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${h}px`),this.idr1<this.idr2&&(this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${d}px`),this.idc1<this.idc2&&(this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${a}px`),this.idc1>this.idc2&&(this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${r}px`)):"red"==this.color1.color?(this.tab1[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.idr1>this.idr2&&(this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${e}px`),this.idr1<this.idr2&&(this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${c}px`),this.idc1<this.idc2&&(this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${o}px`),this.idc1>this.idc2&&(this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${n}px`)):"yellow"==this.color1.color&&(this.tab1[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.idr1>this.idr2&&(this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${u}px`),this.idr1<this.idr2&&(this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${m}px`),this.idc1<this.idc2&&(this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${g}px`),this.idc1>this.idc2&&(this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${b}px`)),"blue"==this.color2.color?(this.tab1[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.idr1<this.idr2&&(this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${h}px`),this.idr1>this.idr2&&(this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${d}px`),this.idc1>this.idc2&&(this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${a}px`),this.idc1<this.idc2&&(this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${r}px`)):"red"==this.color2.color?(this.tab1[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.idr1<this.idr2&&(this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${e}px`),this.idr1>this.idr2&&(this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${c}px`),this.idc1>this.idc2&&(this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${o}px`),this.idc1<this.idc2&&(this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${n}px`)):"yellow"==this.color2.color&&(this.tab1[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.idr1<this.idr2&&(this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${u}px`),this.idr1>this.idr2&&(this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${m}px`),this.idc1>this.idc2&&(this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${g}px`),this.idc1<this.idc2&&(this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${b}px`)),this.licznik==this.start.tab_div1.length-1&&this.licznik==this.start.tab_div2.length-1&&clearInterval(this.interek),this.licznik==this.start.tab_div1.length-1&&(this.licznik=0,this.koniec_lot=!0,this.czyszczenie()),this.licznik>=0&&this.licznik<6||0==this.licznik?(this.tab1[4][11].style.backgroundImage="url(./img/up_1.png)",this.tab1[5][11].style.backgroundImage="url(./img/up_2.png)",this.tab1[6][11].style.backgroundImage="url(./img/up_3.png)"):(this.tab1[4][11].style.backgroundImage=null,this.tab1[5][11].style.backgroundImage=null,this.tab1[6][11].style.backgroundImage=null),this.licznik>=6&&this.licznik<=7?(this.tab1[5][10].style.backgroundImage="url(./img/middle11.png)",this.tab1[5][11].style.backgroundImage="url(./img/middle12.png)",this.tab1[6][10].style.backgroundImage="url(./img/middle21.png)",this.tab1[6][11].style.backgroundImage="url(./img/middle22.png)"):(this.tab1[5][10].style.backgroundImage=null,this.tab1[6][10].style.backgroundImage=null),this.licznik>7&&(this.tab1[5][11].style.backgroundImage="url(./img/down_1.png)",this.tab1[6][11].style.backgroundImage="url(./img/down_2.png)")},this.init()}random_colors(){this.color1=this.tab[Math.floor(3*Math.random())],this.color2=this.tab[Math.floor(3*Math.random())]}tworzenie_tabletki(){this.tabletka=new k(this.idc1,this.idr1,this.idc2,this.idr2,this.color1,this.color2,this.plansza)}tabela(){let i=window.document.createElement("div");i.classList.add("tabela");for(let t=0;t<this.wys;t++){this.tab1[t]=[];for(let s=0;s<this.szer;s++){let h=window.document.createElement("div");h.style.height="17px",h.style.width="17px",h.style.border=" 1px",h.style.position="absolute",h.style.top=17*t+"px",h.style.left=17*s+"px";let a=t+"_"+s;h.id=a,this.tabkord.push(h.id),i.appendChild(h),this.tab1[t].push(h),window.document.getElementById("conta").appendChild(i)}}}start_lot(){this.random_colors(),this.start={div1:"3_10",div2:"3_11",tab_div1:[],tab_div2:[]};let i=this.start.div1.split("_");this.idr1=parseInt(i[0]),this.idc1=parseInt(i[1]),"blue"==this.color1.color?(this.tab1[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${a}px`):"red"==this.color1.color?(this.tab1[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${o}px`):"yellow"==this.color1.color&&(this.tab1[this.idr1][this.idc1].style.backgroundImage="url(./img/spritesheet.png)",this.tab1[this.idr1][this.idc1].style.backgroundPositionX=`${g}px`);let t=this.start.div2.split("_");this.idr2=parseInt(t[0]),this.idc2=parseInt(t[1]),"blue"==this.color2.color?(this.tab1[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${r}px`):"red"==this.color2.color?(this.tab1[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${n}px`):"yellow"==this.color2.color&&(this.tab1[this.idr2][this.idc2].style.backgroundImage="url(./img/spritesheet.png)",this.tab1[this.idr2][this.idc2].style.backgroundPositionX=`${b}px`)}czyszczenie(){this.tab1[this.idr1][this.idc1].style.backgroundImage=null,this.tab1[this.idr2][this.idc2].style.backgroundImage=null}init(){this.tabela(),this.start_lot(),this.lot()}},this.spawn_wirus(),this.tabsy(),this.kolko1=window.setInterval(this.kolko,500),this.kolko();let i=new w(this.srcgfx,z,"blue"),s=new w(this.srcgfx,_,"yellow"),l=new w(this.srcgfx,I,"red");this.animacje.push(s),this.animacje.push(i),this.animacje.push(l);let p=window.document.createElement("img");p.src="./img/0.png",p.classList.add("img2"),window.document.getElementById("conta").appendChild(p),this.zdjecia()}opoznienie(){this.czas=360}animacja_x(){for(let i=0;i<this.tab_lokalna.length;i++)for(let t=0;t<this.tab_lokalna[0].length;t++){let s=this.tab_lokalna[i][t],h=s.col,a=s.row;this.plansza.tab[a][h].style.backgroundImage=""}}wirusy(){if(3==this.ilosc_wirusow){let i=window.document.createElement("img");i.src="./img/3.png",i.classList.add("img3"),window.document.getElementById("conta").appendChild(i)}else if(2==this.ilosc_wirusow){let i=window.document.createElement("img");i.src="./img/2.png",i.classList.add("img3"),window.document.getElementById("conta").appendChild(i)}else if(1==this.ilosc_wirusow){let i=window.document.createElement("img");i.src="./img/1.png",i.classList.add("img3"),window.document.getElementById("conta").appendChild(i)}else if(0==this.ilosc_wirusow){let i=window.document.createElement("img");i.src="./img/0.png",i.classList.add("img3"),window.document.getElementById("conta").appendChild(i)}}spawn(){this.tabs=new k(3,0,4,0,Object.assign({},this.reka.color1),Object.assign({},this.reka.color2),this.plansza.tab),this.tabpast.push(this.tabs),this.tabtemp.push(this.tabs),this.reka.start_lot()}spawn_wirus(){let i=[];for(let t=0;t<this.tab.length;t++){let s,h;do{h=Math.floor(Math.random()*(this.plansza.wys-this.plansza.wys/2)+this.plansza.wys/2),s=Math.floor(Math.random()*this.plansza.szer)}while(i.includes(h+"_"+s));i.push(h+"_"+s);let a=new y(h,s,this.tab[t],this.plansza.tab);this.tabpast.push(a)}}zbijanie(){var i;this.tab_lokalna=[];let s=[];for(let i=0;i<t.tabnum.length;i++){for(let h=0;h<t.tabnum[0].length;h++)0==t.tabnum[i][h]?s=[]:t.tabnum[i][h+1]==t.tabnum[i][h]?s.push({row:i,col:h}):(s.push({row:i,col:h}),s.length>=4&&this.tab_lokalna.push(s),s=[]);s.length>=4&&this.tab_lokalna.push(s),s=[]}for(let h=0;h<t.tabnum[0].length;h++){for(let a=0;a<t.tabnum.length;a++)0==t.tabnum[a][h]?s=[]:(null===(i=t.tabnum[a+1])||void 0===i?void 0:i[h])==t.tabnum[a][h]?s.push({row:a,col:h}):(s.push({row:a,col:h}),s.length>=4&&this.tab_lokalna.push(s),s=[]);s.length>=4&&this.tab_lokalna.push(s),s=[]}for(let i=0;i<this.tab_lokalna.length;i++)for(let t=0;t<this.tab_lokalna[0].length;t++)for(let s=0;s<this.tabpast.length;s++)if(this.tabpast[s].sprawdzanie_wpolrzednych(this.tab_lokalna[i][t].row,this.tab_lokalna[i][t].col)&&(this.tabpast[s].usuwanie(this.tab_lokalna[i][t].row,this.tab_lokalna[i][t].col),"wirus"==this.tabpast[s].co_to))if(this.ilosc_wirusow-=1,this.liczba_punktow+=100,100==this.liczba_punktow){let i=window.document.createElement("img");i.src="./img/1.png",i.classList.add("img"),window.document.getElementById("conta").appendChild(i)}else if(200==this.liczba_punktow){let i=window.document.createElement("img");i.src="./img/2.png",i.classList.add("img"),window.document.getElementById("conta").appendChild(i)}else if(300==this.liczba_punktow){let i=window.document.createElement("img");i.src="./img/3.png",i.classList.add("img"),window.document.getElementById("conta").appendChild(i)}return this.tabpast=this.tabpast.filter((i=>0==i.zbity)),0!=this.tab_lokalna.length}koniec_gry(){for(let i=0;i<this.tabpast.length;i++)if("tabletka"==this.tabpast[i].co_to&&(3==this.tabpast[i].idc1&&0==this.tabpast[i].idr1||4==this.tabpast[i].idc1&&0==this.tabpast[i].idr1||3==this.tabpast[i].idc2&&0==this.tabpast[i].idr2||4==this.tabpast[i].idc2&&0==this.tabpast[i].idr2)){window.clearInterval(this.kolko1),this.dialog();let i=window.document.createElement("img");return i.src="./img/go_dr.png",i.classList.add("go"),window.document.getElementById("conta").appendChild(i),this.storige(),!0}return!1}wygrana(){return 0==this.ilosc_wirusow&&(window.document.getElementById("dial2").showModal(),this.storige(),!0)}dialog(){window.document.getElementById("dial").showModal()}storige(){let i=localStorage.getItem("score"),t=parseInt(i);switch(this.liczba_punktow){case 100:t<100&&localStorage.setItem("score","100");break;case 200:t<200&&localStorage.setItem("score","200");break;case 300:t<300&&localStorage.setItem("score","300")}}zdjecia(){let i=localStorage.getItem("score");if("100"==i){let i=window.document.createElement("img");i.src="./img/1.png",i.classList.add("img2"),window.document.getElementById("conta").appendChild(i)}if("200"==i){let i=window.document.createElement("img");i.src="./img/2.png",i.classList.add("img2"),window.document.getElementById("conta").appendChild(i)}if("300"==i){let i=window.document.createElement("img");i.src="./img/3.png",i.classList.add("img2"),window.document.getElementById("conta").appendChild(i)}}}})();