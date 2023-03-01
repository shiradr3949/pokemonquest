function PKCOMAX1() {
 if (changer1 === true) {
  if (skyoff2 === true) {
   skyoff2 = false;
   PM[ID2].bodytype2 = "ひこう";
  };
  if (first === true) {
   last();
  } else {
   firsted = 1;
   if (PM[ID2].MAX === true) {
    PKCOMAX2();
   } else {
    PKCO2();
   };
  };
 } else {
  if (skiller1.type === "change") {
   alert(PN1 + "は" + skiller1.name + "を使った！");
  } else {
   alert(PN1 + "！ " + skiller1.name + "！");
  };
  skiller = skiller1.name + "1";
  if (skiller1.type === "change") {
   chaos = Math.random() * 100;
   if (shield2 === true || MAXshield2 === true || chaos > shieldrate[shieldpt1].rate) {
    alert("しかし、うまく決まらなかった…。");
    shieldpt1 = 0;
   } else {
    alert(Pnameon1 + "の" + PN1 + "は守りの体制に入った！");
    shieldpt1 += 1;
    MAXshield1 = true;
   };
   setTimeout(seconddp,200);
  } else {
   if (MAXshield2 === true) {
    alert(PN2 + "は攻撃から身を守った！");
    last();
   } else {
    if (skiller1.type === "physics") {
     minus = Math.floor((Math.floor(PM[ID1].level * 2 / 5 + 2)) * (Math.floor(skiller1.power * (PM[ID1].A * rank[AR1].R) / (PM[ID2].B * rank[BR2].R))) / 50 + 2);
    };
    if (skiller1.type === "special") {
     minus = Math.floor((Math.floor(PM[ID1].level * 2 / 5 + 2)) * (Math.floor(skiller1.power * (PM[ID1].C * rank[CR1].R) / (PM[ID2].D * rank[DR2].R))) / 50 + 2);
    };
    skilltype = skiller1.skilltype;
    if (skiller1.wince === true && F2 !== "せいしんりょく") {
     chaos = Math.random() * 100;
     if (chaos <= 30) {
      wince2 = true;
     };
    };
    if (skiller1.punch === true && F1 === "てつのこぶし") {
     minus = Math.floor(minus / 10 * 12);
    };
    if (F2 === "もふもふ") {
     if (skiller1.direct === true) {
      minus = Math.floor(minus / 2);
     };
     if (skilltype === "ほのお") {
      minus = minus * 2;
     };
    };
    if (F2 === "くだけるよろい") {
     if (breakarmored2 === false) {
      if (skiller1.type === "physics") {
       breakarmor = true;
      };
     };
    };
    if (F1 === "むしのしらせ") {
     if (PM[ID1].HP <= PM[ID1].MHP / 3) {
      if (skilltype === "bug") {
       minus = Math.floor(minus / 2 * 3);
      };
     };
    };
    if (F1 === "もうか") {
     if (PM[ID1].HP <= PM[ID1].MHP / 3) {
      if (skilltype === "fire") {
       minus = Math.floor(minus / 2 * 3);
      };
     };
    };
    if (afterback2 === true) {
     minus = minus * 2;
    };
    if (F2 === "ねつこうかん") {
     if (skilltype === "fire") {
      heatchange = true;
     };
    };
    if (F2 === "マルチスケイル") {
     if (F1 !== "かたやぶり") {
      if (PM[ID2].HP === PM[ID2].MHP) {
       minus = Math.floor(minus / 2);
      };
     };
    };
    if (F2 === "ふゆう" && skilltype === "earth") {
     flying2 = true;
    };
    if ((F1 === "リベロ" || F1 === "へんげんじざい") && formed1 !== true) {
     PM[ID1].bodytype1 = skilltype;
     PM[ID1].bodytype2 = null;
     formed1 = true;
     transform1 = true;
     Fdp11.style.visibility = "visible";
     Fdp12.style.visibility = "visible";
    };
    if (skiller1.direct === true || F1 === "かたいつめ") {
     minus = Math.floor(minus / 10 * 13);
    };
    if (F1 === "てきおうりょく" && (skilltype === PM[ID1].bodytype1 || skilltype === PM[ID1].bodytype2)) {
     minus = Math.floor(minus / 2 * 3);
    };
    if (weather === "sunny") {
     if (skilltype === "ほのお") {
      minus = Math.floor(minus / 2 * 3);
     };
     if (skilltype === "みず") {
      minus = Math.floor(minus / 2);
     };
    };
    if (weather === "rainy") {
     if (skilltype === "みず") {
      minus = Math.floor(minus / 2 * 3);
     };
     if (skilltype === "ほのお") {
      minus = Math.floor(minus / 2);
     };
    };
    if (field === "phycho") {
     if (skilltype === "エスパー") {
      minus = Math.floor(minus / 10 * 13);
     };
    };
    if (field === "elec") {
     if (skilltype === "でんき") {
      minus = Math.floor(minus / 10 * 13);
     };
    };
    if (field === "mist") {
     if (skilltype === "ドラゴン") {
      minus = Math.floor(minus / 2);
     };
    };
    if (skiller1.sunny === true && weather !== "sunny") {
     sunny = true;
    };
    if (skiller1.rainy === true && weather !== "rainy") {
     rainy = true;
    };
    if (skiller1.hail === true && weather !== "hail") {
     hail = true;
    };
    if (skiller1.phycho === true && field !== "phycho") {
     phycho = true;
    };
    if (skiller1.elec === true && field !== "elec") {
     elec = true;
    };
    if (skiller1.mist === true && field !== "mist") {
     mist = true;
    };
    if (skiller1.grass === true && field !== "grass") {
     grass = true;
    };
    if (shield2 === true) {
     shielddp2 = true;
     minus = Math.floor(minus / 4);
    };
    if (F2 === "シェルアーマー") {
     nochaos = true
    };
    if (skiller1.barrier === true && Obarrier1 !== true) {
     Obarrier1 = true;
     OBing1 = true;
    };
    if (Pbarrier2 === true && skiller1.type === "physics") {
     PBed = true;
     minus = Math.floor(minus / 2);
    };
    if (Sbarrier2 === true && skiller1.type === "special") {
     SBed = true;
     minus = Math.floor(minus / 2);
    };
    if (Obarrier2 === true) {
     OBed = true;
     minus = Math.floor(minus / 2);
    };
    vitalpt = plushit1;
    shieldpt1 = 0;
    bodytype1 = PM[ID2].bodytype1;
    bodytype2 = PM[ID2].bodytype2;
    type();
   };
  };
 };
}
function PKCO1() {
 if (changer1 === true) {
  if (skyoff2 === true) {
   skyoff2 = false;
   PM[ID2].bodytype2 = "ひこう";
  };
  if (first === true) {
   last();
  } else {
   firsted = 1;
   PKCO2();
  };
 } else {
  if (wince1 === true) {
   alert(PN1 + "はひるんで技が出せない！");
   last();
  } else {
   if (Wattack === false) {
    alert(PN1 + "の" + skiller1.name + "!");
   };
   skiller = skiller1.name + "1";
   Wattack = false;
   let hitrate = 0;
   chaos = Math.random() * 100;
   hitrate = skiller1.hitrate;
   if (weather === "sunny" && skiller1.name === "ぼうふう") {
    hitrate = 50;
   };
   if (chaos <= hitrate || F1 === "ノーガード" || F2 === "ノーガード" || (weather === "rainy" && (skiller1.name === "かみなり" || skiller1.name === "ぼうふう")) || (weather === "hail" && skiller1.name === "ふぶき")) {
    if (field === "phycho" && firster1 === true && PM[ID2].bodytype1 !== "ひこう" && PM[ID2].bodytype2 !== "ひこう" && F2 !== "ふゆう") {
     alert(PN2 + "はサイコフィールドで守られている！");
     nodmg = true;
     setTimeout(seconddp,200);
    } else {
    if (skiller1.type === "change") {
     if (skiller1.updown === true) {
      setTimeout(seconddp,200);
     } else {
      if (skiller1.backwind === true) {
       alert(Pnameon1 + "側に追い風が吹き始めた");
       backwind1 = true;
       windrate1 = 2;
       setTimeout(seconddp,200);
      } else {
       if (skiller1.againheal === true) {
        PM[healID1].HP = Math.floor(PM[healID1].MHP / 2);
        diept1 += 1;
        PM[ID1].healout = true;
        alert(PM[healID1].name + "は元気を取り戻した！");
        alert(PM[healID1].name + "は回復して戦える");
        setTimeout(seconddp,200);
       } else {
        if (skiller1.un === true) {
         if (unspeed === true) {
          unspeed = false;
          unspeedpt = 0;
          alert(PN1 + "はゆがめられた時空をもとに戻した！");
         } else {
          unspeed = true;
          alert(PN1 + "は時空をゆがめた！");
         };
         setTimeout(seconddp,200);
        } else {
         if (skiller1.heal === true) {
          heal1 = true;
          PM[ID1].heal -= 1;
          if (PM[ID1].MHP === PM[ID1].HP) {
           alert("しかし、" + PN1 + "は体力が満タンだ！");
           setTimeout(dp1,200);
          } else {
           futurehp1 = PM[ID1].HP + Math.floor(PM[ID1].MHP / 2);
           if (futurehp1 > PM[ID1].MHP) {
            futurehp1 = PM[ID1].MHP;
           };
           healdp1 = true;
           if (skiller1.name === "はねやすめ") {
            skyoff1 = true;
            PM[ID1].bodytype2 = "null";
           };
           setTimeout(grow1,500);
          };
         } else {
          if (skiller1.barrier === true) {
           if (skiller1.Pbarrier === true) {
            if (Pbarrier1 === true) {
             alert("しかし、うまく決まらなかった…。");
            } else {
             Pbarrier1 = true;
             PBing1 = true;
            };
           };
           if (skiller1.Sbarrier === true) {
            if (Sbarrier1 === true) {
             alert("しかし、うまく決まらなかった…。");
            } else {
             Sbarrier1 = true;
             SBing1 = true;
            };
           };
           setTimeout(dp1,200);
          } else {
           if (skiller1.shield === true) {
            chaos = Math.random() * 100;
            if (shield2 === true || MAXshield2 === true || chaos > shieldrate[shieldpt1].rate) {
             alert("しかし、うまく決まらなかった…。");
             shieldpt1 = 0;
            } else {
             alert(Pnameon1 + "の" + PN1 + "は守りの体制に入った！");
             shieldpt1 += 1;
             shield1 = true;
            };
            setTimeout(seconddp,200);
           } else {
            if (shield2 === true || MAXshield2 === true) {
             alert(PN2 + "は攻撃から身を守った！");
             last();
            } else {
             if (skiller1.putgift === true) {
              suicide1 = true;
              PM[ID1].HP = 0;
              HPdp1.innerHTML = PM[ID1].HP;
              setTimeout(seconddp,200);
             } else {
              if (skiller1.halves === true) {
               futurehp1 = Math.floor((PM[ID1].HP + PM[ID2].HP) / 2);
               futurehp2 = futurehp1;
               if (futurehp1 > PM[ID1].MHP) {
                futurehp1 = PM[ID1].MHP;
               };
               if (futurehp2 > PM[ID2].MHP) {
                futurehp2 = PM[ID2].MHP;
               };
               setTimeout(bothgrowcontract,300);
              } else {
               if (skiller1.obsessed === true) {
                let subminus;
                subminus = PM[ID2].HP - PM[ID1].HP;
                if (subminus <= 0) {
                 subminus = 0;
                };
                PM[ID2].HP -= subminus;
                HPdp2.innerHTML = PM[ID2].HP;
                setTimeout(seconddp,200);
               } else {
                if (skiller1.onekill === true) {
                 if (PM[ID2].MAX === true) {
                  alert(PN2 + "には効果がないようだ…。");
                  setTimeout(seconddp,200);
                 } else {
                  if (F2 === "がんじょう" || (skiller1.name === "じわれ" && F2 === "ふゆう")) {
                   onekilloff2 = true;
                   Fdp21.style.visibility = "visible";
                   Fdp22.style.visibility = "visible";
                   setTimeout(dp1,200);
                  } else {
                   if (skiller1.name === "じわれ" && (PM[ID2].bodytype1 === "ひこう" || PM[ID2].bodytype2 === "ひこう")) {
                    alert(PN2 + "には効果がないようだ…。");
                    setTimeout(seconddp,200);
                   } else {
                    futurehp2 = 0;
                    onekilloff2 = true;
                    setTimeout(dmganimation2,200);
                   };
                  };
                 };
                };
               };
              };
             };
            };
           };
          };
         };
        };
       };
      };
     };
    } else {
     if (PM[ID1].lightout === true && skiller === "でんこうそうげき1") {
      alert("しかし、うまく決まらなかった");
      setTimeout(seconddp,200);
     } else {
      if (shield2 === true || MAXshield2 === true) {
       alert(PN2 + "は攻撃から身を守った！");
       if (skiller1.reaction === true) {
        reaction1 = true;
        minus = Math.floor(PM[ID1].MHP / 2);
        if (PM[ID1].HP < minus) {
         minus = PM[ID1].HP;
        };
        futurehp1 = PM[ID1].HP - minus;
        setTimeout(dmganimation1,200);
       } else {
        last();
       };
      } else {
       if (skiller1.type === "heavy") {
        let heavy;
        if (PM[ID2].heavy < 10) {
         heavy = 20;
        } else {
         if (PM[ID2].heavy < 25) {
          heavy = 40;
         } else {
          if (PM[ID2].heavy < 50) {
           heavy = 60;
          } else {
           if (PM[ID2].heavy < 100) {
            heavy = 80;
           } else {
            if (PM[ID2].heavy < 200) {
             heavy = 100;
            } else {
             heavy = 120;
            };
           };
          };
         };
        };
        minus = Math.floor((Math.floor(PM[ID1].level * 2 / 5 + 2)) * (Math.floor(heavy * (PM[ID1].A * rank[AR1].R) / (PM[ID2].B * rank[BR2].R))) / 50 + 2);
       };
       if (skiller1.type === "assist") {
        let ASA = AR1 - 6;
         if (ASA <= -1) {
         ASA = 0;
        };
        let ASB = BR1 - 6;
        if (ASB <= -1) {
         ASB = 0;
        };
        let ASC = CR1 - 6;
        if (ASC <= -1) {
         ASC = 0;
        };
        let ASD = DR1 - 6;
        if (ASD <= -1) {
         ASD = 0;
        };
        let ASS = SR1 - 6;
        if (ASS <= -1) {
         ASS = 0;
        };
        minus = Math.floor((Math.floor(PM[ID1].level * 2 / 5 + 2)) * (Math.floor((skiller1.power + (20 * (ASA + ASB + ASC + ASD + ASS))) * (PM[ID1].C * rank[CR1].R) / (PM[ID2].D * rank[DR2].R))) / 50 + 2);
       };
       if (skiller1.type === "angry") {
        minus = Math.floor((Math.floor(PM[ID1].level * 2 / 5 + 2)) * (Math.floor((skiller1.power + (50 * PM[ID1].done)) * (PM[ID1].A * rank[AR1].R) / (PM[ID2].B * rank[BR2].R))) / 50 + 2);
       };
       if (skiller1.type === "surely") {
        let AR = AR1;
        if (AR <= 5) {
         AR = 6;
        };
        minus = Math.floor((Math.floor(PM[ID1].level * 2 / 5 + 2)) * (Math.floor(skiller1.power * (PM[ID1].A * rank[AR].R) / PM[ID2].B)) / 50 + 2);
       };
       if (skiller1.type === "bodypress") {
        minus = Math.floor((Math.floor(PM[ID1].level * 2 / 5 + 2)) * (Math.floor(skiller1.power * (PM[ID1].B * rank[BR1].R) / (PM[ID2].B * rank[BR2].R))) / 50 + 2);
       };
       if (skiller1.type === "physics") {
        minus = Math.floor((Math.floor(PM[ID1].level * 2 / 5 + 2)) * (Math.floor(skiller1.power * (PM[ID1].A * rank[AR1].R) / (PM[ID2].B * rank[BR2].R))) / 50 + 2);
       };
       if (skiller1.type === "special") {
        minus = Math.floor((Math.floor(PM[ID1].level * 2 / 5 + 2)) * (Math.floor(skiller1.power * (PM[ID1].C * rank[CR1].R) / (PM[ID2].D * rank[DR2].R))) / 50 + 2);
       };
       if (skiller1.wince === true && F2 !== "せいしんりょく") {
        chaos = Math.random() * 100;
        if (chaos <= 30) {
         wince2 = true;
        };
       };
       if (skiller1.wince2 === true && F2 !== "せいしんりょく") {
        chaos = Math.random() * 100;
        if (chaos <= 20) {
         wince2 = true;
        };
       };
       if (skiller1.highrate === true) {
        highhitrate = true;
       };
       if (skiller1.hyperhitrate === true) {
        hyperhitrate = true;
       };
       skilltype = skiller1.skilltype;
       if (skilltype === "ノーマル" && F1 === "フェアリースキン") {
        skilltype = "フェアリー";
        minus = Math.floor(minus / 10 * 13);
       };
       if (skiller1.punch === true && F1 === "てつのこぶし") {
        minus = Math.floor(minus / 10 * 12);
       };
       if (F2 === "もふもふ") {
        if (skiller1.direct === true) {
         minus = Math.floor(minus / 2);
        };
        if (skilltype === "ほのお") {
         minus = minus * 2;
        };
       };
       if (F2 === "くだけるよろい") {
        if (breakarmored2 === false) {
         if (skiller1.type === "physics" || skiller1.type === "angry" || skiller1.type === "heavy" || skiller1.type === "bodypress") {
          breakarmor = true;
         };
        };
       };
       if (F1 === "むしのしらせ") {
        if (PM[ID1].HP <= PM[ID1].MHP / 3) {
         if (skilltype === "bug") {
          minus = Math.floor(minus / 2 * 3);
         };
        };
       };
       if (F1 === "もうか") {
        if (PM[ID1].HP <= PM[ID1].MHP / 3) {
         if (skilltype === "fire") {
          minus = Math.floor(minus / 2 * 3);
         };
        };
       };
       if (skiller1.AH === true) {
        AH = true;
       };
       afterback1 = false;
       if (afterback2 === true) {
        minus = minus * 2;
       };
       if (skiller1.afterback === true) {
        afterback1 = true;
       };
       if (F2 === "ねつこうかん") {
        if (skilltype === "fire") {
         heatchange = true;
        };
       };
       if (skiller1.CR1h === true) {
        chaos = Math.random() * 100;
        if (chaos <= 50) {
         CR1h1 = true;
        };
       };
       if (skiller1.Wattack === true) {
        WApt += 1;
        if (Wattacked === false) {
         Wattack = true;
        };
       };
       if (F2 === "マルチスケイル") {
        if (F1 !== "かたやぶり") {
         if (PM[ID2].HP === PM[ID2].MHP) {
          minus = Math.floor(minus / 2);
         };
        };
       };
       recoil1 = false;
       if (skiller1.recoil === true) {
        recoil1 = true;
       };
       if (F2 === "ふゆう" && skilltype === "earth" && F1 !== "かたやぶり") {
        flying2 = true;
       };
       if (skiller === "でんこうそうげき1") {
        PM[ID1].lightout = true;
        PM[ID1].bodytype2 = "null";
       };
       if ((F1 === "リベロ" || F1 === "へんげんじざい") && formed1 !== true) {
        PM[ID1].bodytype1 = skilltype;
        PM[ID1].bodytype2 = null;
        formed1 = true;
        transform1 = true;
        Fdp11.style.visibility = "visible";
        Fdp12.style.visibility = "visible";
       };
       if (skiller1.direct === true || F1 === "かたいつめ") {
        minus = Math.floor(minus / 10 * 13);
       };
       if (skiller1.AR1two === true) {
        chaos = Math.random() * 100;
        if (chaos <= 20) {
         AR1five1 = true;
        };
       };
       if (snowdown1 === true) {
        snowdown1 = false;
        minus = minus * 2;
       };
       if (skiller2.snowdown === true) {
        snowdown2 = true;
       };
       if (F1 === "てきおうりょく" && (skilltype === PM[ID1].bodytype1 || skilltype === PM[ID1].bodytype2)) {
        minus = Math.floor(minus / 2 * 3);
       };
       if (weather === "sunny") {
        if (skilltype === "ほのお") {
         minus = Math.floor(minus / 2 * 3);
        };
        if (skilltype === "みず") {
         minus = Math.floor(minus / 2);
        };
       };
       if (weather === "rainy") {
        if (skilltype === "みず") {
         minus = Math.floor(minus / 2 * 3);
        };
        if (skilltype === "ほのお") {
         minus = Math.floor(minus / 2);
        };
       };
       if (field === "phycho") {
        if (skilltype === "エスパー") {
         minus = Math.floor(minus / 10 * 13);
        };
       };
       if (field === "elec") {
        if (skilltype === "でんき") {
         minus = Math.floor(minus / 10 * 13);
        };
       };
       if (field === "mist") {
        if (skilltype === "ドラゴン") {
         minus = Math.floor(minus / 2);
        };
       };
       if (F2 === "シェルアーマー") {
        nochaos = true
       };
       if (skiller1.name === "かわらわり" && (Pbarrier2 === true || Sbarrier2 === true || Obarrier2 === true)) {
        if (Pbarrier2 === true) {
         Pbarrier2 = false;
         PBpt2 = 0;
         breakPB2 = true;
        };
        if (Sbarrier2 === true) {
         Sbarrier2 = false;
         SBpt2 = 0;
         breakSB2 = true;
        };
        if (Obarrier2 === true) {
         Obarrier2 = false;
         OBpt2 = 0;
         breakOB2 = true;
        };
       } else {
        if (Pbarrier2 === true && (skiller1.type === "physics" || skiller1.type === "angry" || skiller1.type === "heavy" || skiller1.type === "bodypress")) {
         PBed = true;
         minus = Math.floor(minus / 2);
        };
        if (Sbarrier2 === true && (skiller1.type === "special" || skiller1.type === "assist")) {
         SBed = true;
         minus = Math.floor(minus / 2);
        };
        if (Obarrier2 === true) {
         OBed = true;
         minus = Math.floor(minus / 2);
        };
       };
       vitalpt = plushit1;
       shieldpt1 = 0;
       bodytype1 = PM[ID2].bodytype1;
       bodytype2 = PM[ID2].bodytype2;
       type();
      };
     };
    };
    };
   } else {
    if (Wattack === true) {
     PKCO1();
    } else {
     alert(Pnameon2 +"の" + PN2 + "には当たらなかった…。");
     if (skiller1.reaction === true) {
      reaction1 = true;
      minus = Math.floor(PM[ID1].MHP / 2);
      if (PM[ID1].HP < minus) {
       minus = PM[ID1].HP;
      };
      futurehp1 = PM[ID1].HP - minus;
      setTimeout(dmganimation1,200);
     } else {
      if (first === true) {
       last();
      } else {
       firsted = 1;
       if (PM[ID2].MAX === true) {
        PKCOMAX2(); 
       } else {
        PKCO2();
       };
      };
     };
    };
   };
  };
 };
}
function PKCOMAX2() {
 if (changer2 === true) {
  if (skyoff1 === true) {
   skyoff1 = false;
   PM[ID1].bodytype2 = "ひこう";
  };
  if (first === true) {
   firsted = 1;
   if (PM[ID1].MAX === true) {
    PKCOMAX1();
   } else {
    PKCO1();
   };
  } else {
   last();
  };
 } else {
  if (skiller2.type === "change") {
   alert(PN2 + "は" + skiller2.name + "を使った！");
  } else {
   alert(PN2 + "！ " + skiller2.name + "！");
  };
  skiller = skiller2.name + "2";
  if (skiller2.type === "change") {
   chaos = Math.random() * 100;
   if (shield1 === true || MAXshield1 === true || chaos > shieldrate[shieldpt2].rate) {
    alert("しかし、うまく決まらなかった…。");
    shieldpt2 = 0;
   } else {
    alert(Pnameon2 + "の" + PN2 + "は守りの体制に入った！");
    shieldpt2 += 1;
    MAXshield2 = true;
   };
   setTimeout(seconddp,200);
  } else {
   if (MAXshield1 === true) {
    alert(PN1 + "は攻撃から身を守った！");
    last();
   } else {
    if (skiller2.type === "physics") {
     minus = Math.floor((Math.floor(PM[ID2].level * 2 / 5 + 2)) * (Math.floor(skiller2.power * (PM[ID2].A * rank[AR2].R) / (PM[ID1].B * rank[BR1].R))) / 50 + 2);
    };
    if (skiller2.type === "special") {
     minus = Math.floor((Math.floor(PM[ID2].level * 2 / 5 + 2)) * (Math.floor(skiller2.power * (PM[ID2].C * rank[CR2].R) / (PM[ID1].D * rank[DR1].R))) / 50 + 2);
    };
    skilltype = skiller2.skilltype;
    if (skiller2.wince === true && F1 !== "せいしんりょく") {
     chaos = Math.random() * 100;
     if (chaos <= 30) {
      wince1 = true;
     };
    };
    if (skiller2.punch === true && F2 === "てつのこぶし") {
     minus = Math.floor(minus / 10 * 12);
    };
    if (F1 === "もふもふ") {
     if (skiller2.direct === true) {
      minus = Math.floor(minus / 2);
     };
     if (skilltype === "ほのお") {
      minus = minus * 2;
     };
    };
    if (F1 === "くだけるよろい") {
     if (breakarmored1 === false) {
      if (skiller2.type === "physics") {
       breakarmor = true;
      };
     };
    };
    if (F2 === "むしのしらせ") {
     if (PM[ID2].HP <= PM[ID2].MHP / 3) {
      if (skilltype === "bug") {
       minus = Math.floor(minus / 2 * 3);
      };
     };
    };
    if (F2 === "もうか") {
     if (PM[ID2].HP <= PM[ID2].MHP / 3) {
      if (skilltype === "fire") {
       minus = Math.floor(minus / 2 * 3);
      };
     };
    };
    if (afterback1 === true) {
     minus = minus * 2;
    };
    if (F1 === "ねつこうかん") {
     if (skilltype === "fire") {
      heatchange = true;
     };
    };
    if (F1 === "マルチスケイル") {
     if (F2 !== "かたやぶり") {
      if (PM[ID1].HP === PM[ID1].MHP) {
       minus = Math.floor(minus / 2);
      };
     };
    };
    if (F1 === "ふゆう" && skilltype === "earth") {
     flying1 = true;
    };
    if ((F2 === "リベロ" || F2 === "へんげんじざい") && formed2 !== true) {
     PM[ID2].bodytype1 = skilltype;
     PM[ID2].bodytype2 = null;
     formed2 = true;
     transform2 = true;
     Fdp21.style.visibility = "visible";
     Fdp22.style.visibility = "visible";
    };
    if (skiller2.direct === true || F2 === "かたいつめ") {
     minus = Math.floor(minus / 10 * 13);
    };
    if (F2 === "てきおうりょく" && (skilltype === PM[ID2].bodytype1 || skilltype === PM[ID2].bodytype2)) {
     minus = Math.floor(minus / 2 * 3);
    };
    if (weather === "sunny") {
     if (skilltype === "ほのお") {
      minus = Math.floor(minus / 2 * 3);
     };
     if (skilltype === "みず") {
      minus = Math.floor(minus / 2);
     };
    };
    if (weather === "rainy") {
     if (skilltype === "みず") {
      minus = Math.floor(minus / 2 * 3);
     };
     if (skilltype === "ほのお") {
      minus = Math.floor(minus / 2);
     };
    };
    if (skiller2.sunny === true && weather !== "sunny") {
     sunny = true;
    };
    if (skiller2.rainy === true && weather !== "rainy") {
     rainy = true;
    };
    if (skiller2.hail === true && weather !== "hail") {
     hail = true;
    };
    if (skiller2.phycho === true && field !== "phycho") {
     phycho = true;
    };
    if (skiller2.elec === true && field !== "elec") {
     elec = true;
    };
    if (skiller2.mist === true && field !== "mist") {
     mist = true;
    };
    if (skiller2.grass === true && field !== "grass") {
     grass = true;
    };
    if (field === "phycho") {
     if (skilltype === "エスパー") {
      minus = Math.floor(minus / 10 * 13);
     };
    };
    if (field === "elec") {
     if (skilltype === "でんき") {
      minus = Math.floor(minus / 10 * 13);
     };
    };
    if (field === "mist") {
     if (skilltype === "ドラゴン") {
      minus = Math.floor(minus / 2);
     };
    };
    if (shield1 === true) {
     shielddp1 = true;
     minus = Math.floor(minus / 4);
    };
    if (F1 === "シェルアーマー") {
     nochaos = true
    };
    if (skiller2.barrier === true && Obarrier2 !== true) {
     Obarrier2 = true;
     OBing2 = true;
    };
    if (Pbarrier1 === true && skiller2.type === "physics") {
     PBed = true;
     minus = Math.floor(minus / 2);
    };
    if (Sbarrier1 === true && skiller2.type === "special") {
     SBed = true;
     minus = Math.floor(minus / 2);
    };
    if (Obarrier1 === true) {
     OBed = true;
     minus = Math.floor(minus / 2);
    };
    vitalpt = plushit2;
    shieldpt2 = 0;
    bodytype1 = PM[ID1].bodytype1;
    bodytype2 = PM[ID1].bodytype2;
    type();
   };
  };
 };
}
function PKCO2() {
 if (changer2 === true) {
  if (skyoff1 === true) {
   skyoff1 = false;
   PM[ID1].bodytype2 = "ひこう";
  };
  if (first === true) {
   firsted = 1;
   PKCO1();
  } else {
   last();
  };
 } else {
  if (wince2 === true) {
   alert(PN2 + "はひるんで技が出せない！");
   last();
  } else {
   if (Wattack === false) {
    alert(PN2 + "の" + skiller2.name + "!");
   };
   skiller = skiller2.name + "2";
   Wattack = false;
   hitrate = skiller2.hitrate;
   if (weather === "sunny" && skiller2.name === "ぼうふう") {
    hitrate = 50;
   };
   chaos = Math.random() * 100;
   if (chaos <= hitrate || F1 === "ノーガード" || F2 === "ノーガード" || (weather === "rainy" && (skiller2.name === "かみなり" || skiller2.name === "ぼうふう")) || (weather === "hail" && skiller2.name === "ふぶき")) {
    if (field === "phycho" && firster2 === true && PM[ID1].bodytype1 !== "ひこう" && PM[ID1].bodytype2 !== "ひこう" && F1 !== "ふゆう") {
     alert(PN1 + "はサイコフィールドで守られている！");
     nodmg = true;
     setTimeout(seconddp,200);
    } else {
    if (skiller2.type === "change") {
     if (skiller2.updown === true) {
      setTimeout(seconddp,200);
     } else {
      if (skiller2.backwind === true) {
       alert(Pnameon2 + "側に追い風が吹き始めた");
       backwind2 = true;
       windrate2 = 2;
       setTimeout(seconddp,200);
      } else {
       if (skiller2.againheal === true) {
        PM[healID2].HP = Math.floor(PM[healID2].MHP / 2);
        diept2 += 1;
        PM[ID2].healout = true;
        alert(PM[healID2].name + "は元気を取り戻した！");
        alert(PM[healID2].name + "は回復して戦える");
        setTimeout(seconddp,200);
       } else {
        if (skiller2.un === true) {
         if (unspeed === true) {
          unspeed = false;
          unspeedpt = 0;
          alert(PN2 + "はゆがめられた時空をもとに戻した！");
         } else {
          unspeed = true;
          alert(PN2 + "は時空をゆがめた！");
         };
         setTimeout(seconddp,200);
        } else {
         if (skiller2.heal === true) {
          heal2 = true;
          PM[ID2].heal -= 1;
          if (PM[ID2].HP === PM[ID2].MHP) {
           alert("しかし、" + PN2 + "は体力が満タンだ！");
           setTimeout(dp2,200);
          } else {
           futurehp2 = PM[ID2].HP + Math.floor(PM[ID2].MHP / 2);
           if (futurehp2 > PM[ID2].MHP) {
            futurehp2 = PM[ID2].MHP;
           };
           healdp2 = true;
           if (skiller2.name === "はねやすめ") {
            skyoff2 = true;
            PM[ID2].bodytype2 = "null";
           };
           setTimeout(grow2,500);
          };
         } else {
          if (skiller2.barrier === true) {
           if (skiller2.Pbarrier === true) {
            if (Pbarrier2 === true) {
             alert("しかし、うまく決まらなかった…。");
            } else {
             Pbarrier2 = true;
             PBing2 = true;
            };
           };
           if (skiller2.Sbarrier === true) {
            if (Sbarrier2 === true) {
             alert("しかし、うまく決まらなかった…。");
            } else {
             Sbarrier2 = true;
             SBing2 = true;
            };
           };
           setTimeout(dp2,200);
          } else {
           if (skiller2.shield === true) {
            chaos = Math.random() * 100;
            if (shield1 === true || MAXshield1 === true || chaos > shieldrate[shieldpt2].rate) {
             alert("しかし、うまく決まらなかった…。");
             shieldpt2 = 0;
            } else {
             alert(Pnameon2 + "の" + PN2 + "は守りの体制に入った！");
             shieldpt2 += 1;
             shield2 = true;
            };
            setTimeout(seconddp,200);
           } else {
            if (shield1 === true || MAXshield1 === true) {
             alert(PN1 + "は攻撃から身を守った！");
             last();
            } else {
             if (skiller2.putgift === true) {
              suicide2 = true;
              PM[ID2].HP = 0;
              HPdp2.innerHTML = PM[ID2].HP;
              setTimeout(seconddp,200);
             } else {
              if (skiller2.halves === true) {
               futurehp1 = Math.floor((PM[ID1].HP + PM[ID2].HP) / 2);
               futurehp2 = futurehp1;
               if (futurehp1 > PM[ID1].MHP) {
                futurehp1 = PM[ID1].MHP;
               };
               if (futurehp2 > PM[ID2].MHP) {
                futurehp2 = PM[ID2].MHP;
               };
               setTimeout(bothgrowcontract,300);
              } else {
               if (skiller2.obsessed === true) {
                let subminus;
                subminus = PM[ID1].HP - PM[ID2].HP;
                if (subminus <= 0) {
                 subminus = 0;
                };
                PM[ID1].HP -= subminus;
                HPdp1.innerHTML = PM[ID1].HP;
                setTimeout(seconddp,200);
               } else {
                if (skiller2.onekill === true) {
                 if (PM[ID1].MAX === true) {
                  alert(PN1 + "には効果がないようだ…。");
                  setTimeout(seconddp,200);
                 } else {
                  if (F1 === "がんじょう" || (skiller2.name === "じわれ" && F1 === "ふゆう")) {
                   onekilloff1 = true;
                   Fdp11.style.visibility = "visible";
                   Fdp12.style.visibility = "visible";
                   setTimeout(dp2,200);
                  } else {
                   if (skiller2.name === "じわれ" && (PM[ID1].bodytype1 === "ひこう" || PM[ID1].bodytype2 === "ひこう")) {
                    alert(PN1 + "には効果がないようだ…。");
                    setTimeout(seconddp,200);
                   } else {
                    futurehp1 = 0;
                    onekilloff1 = true;
                    setTimeout(dmganimation1,200);
                   };
                  };
                 };
                };
               };
              };
             };
            };
           };
          };
         };
        };
       };
      };
     };
    } else {
     if (PM[ID2].lightout === true && skiller === "でんこうそうげき2") {
      alert("しかし、うまく決まらなかった");
      setTimeout(seconddp,200);
     } else {
      if (shield1 === true || MAXshield1 === true) {
       alert(PN1 + "は攻撃から身を守った！");
       if (skiller2.reaction === true) {
        reaction2 = true;
        minus = Math.floor(PM[ID2].MHP / 2);
        if (PM[ID2].HP < minus) {
         minus = PM[ID2].HP;
        };
        futurehp2 = PM[ID2].HP - minus;
        setTimeout(dmganimation2,200);
       } else {
        last();
       };
      } else {
       if (skiller2.type === "heavy") {
        let heavy;
        if (PM[ID1].heavy < 10) {
         heavy = 20;
        } else {
         if (PM[ID1].heavy < 25) {
          heavy = 40;
         } else {
          if (PM[ID1].heavy < 50) {
           heavy = 60;
          } else {
           if (PM[ID1].heavy < 100) {
            heavy = 80;
           } else {
            if (PM[ID1].heavy < 200) {
             heavy = 100;
            } else {
             heavy = 120;
            };
           };
          };
         };
        };
        minus = Math.floor((Math.floor(PM[ID2].level * 2 / 5 + 2)) * (Math.floor(heavy * (PM[ID2].A * rank[AR2].R) / (PM[ID1].B * rank[BR1].R))) / 50 + 2);
       };
       if (skiller2.type === "assist") {
        let ASA = AR2 - 6;
        if (ASA <= -1) {
         ASA = 0;
        };
        let ASB = BR2 - 6;
        if (ASB <= -1) {
         ASB = 0;
        };
        let ASC = CR2 - 6;
        if (ASC <= -1) {
         ASC = 0;
        };
        let ASD = DR2 - 6;
        if (ASD <= -1) {
         ASD = 0;
        };
        let ASS = SR2 - 6;
        if (ASS <= -1) {
         ASS = 0;
        };
        minus = Math.floor((Math.floor(PM[ID2].level * 2 / 5 + 2)) * (Math.floor((skiller2.power + (20 * (ASA + ASB + ASC + ASD + ASS))) * (PM[ID2].C * rank[CR2].R) / (PM[ID1].D * rank[DR1].R))) / 50 + 2);
       };
       if (skiller2.type === "angry") {
        minus = Math.floor((Math.floor(PM[ID2].level * 2 / 5 + 2)) * (Math.floor((skiller2.power + (50 * PM[ID2].done)) * (PM[ID2].A * rank[AR2].R) / (PM[ID1].B * rank[BR1].R))) / 50 + 2);
       };
       if (skiller2.type === "surely") {
        let AR = AR2;
        if (AR <= 5) {
         AR = 6;
        };
        minus = Math.floor((Math.floor(PM[ID2].level * 2 / 5 + 2)) * (Math.floor(skiller2.power * (PM[ID2].A * rank[AR].R) / PM[ID1].B)) / 50 + 2);
       };
       if (skiller2.type === "bodypress") {
        minus = Math.floor((Math.floor(PM[ID2].level * 2 / 5 + 2)) * (Math.floor(skiller2.power * (PM[ID2].B * rank[BR2].R) / (PM[ID1].B * rank[BR1].R))) / 50 + 2);
       };
       if (skiller2.type === "physics") {
        minus = Math.floor((Math.floor(PM[ID2].level * 2 / 5 + 2)) * (Math.floor(skiller2.power * (PM[ID2].A * rank[AR2].R) / (PM[ID1].B * rank[BR1].R))) / 50 + 2);
       }; 
       if (skiller2.type === "special") {
        minus = Math.floor((Math.floor(PM[ID2].level * 2 / 5 + 2)) * (Math.floor(skiller2.power * (PM[ID2].C * rank[CR2].R) / (PM[ID1].D * rank[DR1].R))) / 50 + 2);
       };
       if (skiller2.wince === true && F1 !== "せいしんりょく") {
        chaos = Math.random() * 100;
        if (chaos <= 30) {
         wince1 = true;
        };
       };
       if (skiller2.wince2 === true && F1 !== "せいしんりょく") {
        chaos = Math.random() * 100;
        if (chaos <= 20) {
         wince1 = true;
        };
       };
       if (skiller2.highrate === true) {
        highhitrate = true;
       };
       if (skiller2.hyperhitrate === true) {
        hyperhitrate = true;
       };
       skilltype = skiller2.skilltype;
       if (skilltype === "ノーマル" && F2 === "フェアリースキン") {
        skilltype = "フェアリー";
        minus = Math.floor(minus / 10 * 13);
       };
       if (skiller2.punch === true && F2 === "てつのこぶし") {
        minus = Math.floor(minus / 10 * 12);
       };
       if (F1 === "もふもふ") {
        if (skiller2.direct === true) {
         minus = Math.floor(minus / 2);
        };
        if (skilltype === "ほのお") {
         minus = minus * 2;
        };
       };
       if (F1 === "くだけるよろい") {
        if (breakarmored1 === false) {
         if (skiller2.type === "physics" || skiller2.type === "angry" || skiller2.type === "heavy" || skiller2.type === "bodypress") {
          breakarmor = true;
         };
        };
       };
       if (F2 === "むしのしらせ") {
        if (PM[ID2].HP <= PM[ID2].MHP / 3) {
         if (skilltype === "bug") {
          minus = Math.floor(minus / 2 * 3);
         };
        };
       };
       if (F2 === "もうか") {
        if (PM[ID2].HP <= PM[ID2].MHP / 3) {
         if (skilltype === "fire") {
          minus = Math.floor(minus / 2 * 3);
         };
        };
       };
       if (skiller2.AH === true) {
        AH = true;
       };
       if (afterback2 === true) {
        afterback2 = false;
       };
       if (afterback1 === true) {
        minus = minus * 2;
       };
       if (skiller2.afterback === true) {
        afterback2 = true;
       };
       if (F1 === "ねつこうかん") {
        if (skilltype === "fire") {
         heatchange = true;
        };
       };
       if (skiller2.CR1h === true) {
        chaos = Math.random() * 100;
        if (chaos <= 50) {
         CR1h2 = true;
        };
       };
       if (skiller2.Wattack === true) {
        WApt += 1;
        if (Wattacked === false) {
         Wattack = true;
        };
       };
       if (F1 === "マルチスケイル") {
        if (F2 !== "かたやぶり") {
         if (PM[ID1].HP === PM[ID1].MHP) {
          minus = Math.floor(minus / 2);
         };
        };
       };
       recoil2 = false;
       if (skiller2.recoil === true) {
        recoil2 = true;
       };
       if (F1 === "ふゆう" && skilltype === "earth" && F2 !== "かたやぶり") {
        flying1 = true;
       };
       if (skiller === "でんこうそうげき2") {
        PM[ID2].lightout = true;
        PM[ID2].bodytype2 = "null";
       };
       if ((F2 === "リベロ" || F2 === "へんげんじざい") && formed2 !== true) {
        PM[ID2].bodytype1 = skilltype;
        PM[ID2].bodytype2 = null;
        formed2 = true;
        transform2 = true;
        Fdp21.style.visibility = "visible";
        Fdp22.style.visibility = "visible";
       };
       if (skiller2.direct === true || F2 === "かたいつめ") {
        minus = Math.floor(minus / 10 * 13);
       };
       if (skiller2.AR1two === true) {
        chaos = Math.random() * 100;
        if (chaos <= 20) {
         AR1five2 = true;
        };
       };
       if (snowdown2 === true) {
        snowdown2 = false;
        minus = minus * 2;
       };
       if (skiller1.snowdown === true) {
        snowdown1 = true;
       };
       if (F2 === "てきおうりょく" && (skilltype === PM[ID2].bodytype1 || skilltype === PM[ID2].bodytype2)) {
        minus = Math.floor(minus / 2 * 3);
       };
       if (weather === "sunny") {
        if (skilltype === "ほのお") {
         minus = Math.floor(minus / 2 * 3);
        };
        if (skilltype === "みず") {
         minus = Math.floor(minus / 2);
        };
       };
       if (weather === "rainy") {
        if (skilltype === "みず") {
         minus = Math.floor(minus / 2 * 3);
        };
        if (skilltype === "ほのお") {
         minus = Math.floor(minus / 2);
        };
       };
       if (field === "phycho") {
        if (skilltype === "エスパー") {
         minus = Math.floor(minus / 10 * 13);
        };
       };
       if (field === "elec") {
        if (skilltype === "でんき") {
         minus = Math.floor(minus / 10 * 13);
        };
       };
       if (field === "mist") {
        if (skilltype === "ドラゴン") {
         minus = Math.floor(minus / 2);
        };
       };
       if (F1 === "シェルアーマー") {
        nochaos = true
       };
       if (skiller2.name === "かわらわり" && (Pbarrier1 === true || Sbarrier1 === true || Obarrier1 === true)) {
        if (Pbarrier1 === true) {
         breakPB1 = true;
         Pbarrier1 = false;
         PBpt1 = 0;
        };
        if (Sbarrier1 === true) {
         breakSB1 = true;
         Sbarrier1 = false;
         SBpt1 = 0;
        };
        if (Obarrier1 === true) {
         breakOB1 = true;
         Obarrier1 = false;
         OBpt1 = 0;
        };
       } else {
        if (Pbarrier1 === true && (skiller2.type === "physics" || skiller2.type === "angry" || skiller2.type === "heavy" || skiller2.type === "bodypress")) {
         PBed = true;
         minus = Math.floor(minus / 2);
        };
        if (Sbarrier1 === true && (skiller2.type === "special" || skiller2.type === "assist")) {
         SBed = true;
         minus = Math.floor(minus / 2);
        };
        if (Obarrier1 === true) {
         OBed = true;
         minus = Math.floor(minus / 2);
        };
       };
       vitalpt = plushit2;
       shieldpt2 = 0;
       bodytype1 = PM[ID1].bodytype1;
       bodytype2 = PM[ID1].bodytype2;
       type();
      };
     };
    };
    };
   } else {
    if (Wattack === true) {
     PKCO2();
    } else {
     alert(Pnameon1 +"の" + PN1 + "には当たらなかった…。");
     if (skiller2.reaction === true) {
      reaction2 = true;
      minus = Math.floor(PM[ID2].MHP / 2);
      if (PM[ID2].HP < minus) {
       minus = PM[ID2].HP;
      };
      futurehp2 = PM[ID2].HP - minus;
      setTimeout(dmganimation2,200);
     } else {
      if (first === true) {
       firsted = 1;
       if (PM[ID1].MAX === true) {
        PKCOMAX1();
       } else {
        PKCO1();
       };
      } else {
       last();
      };
     };
    };
   };
  };
 };
}