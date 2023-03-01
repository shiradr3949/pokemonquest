function test1() {
 if (MGstart1 === true) {
  MGstart1 = false;
  MGed1 = true;
  PM[ID1].mega = true;
  alert(Pnameon1 + "のキーストーンと" + PN1 + "の" + PM[ID1].MGknight + "が反応した！");
  PM[ID1].MHP += PM[ID1].MHPp;
  PM[ID1].HP += PM[ID1].MHPp;
  PM[ID1].A += PM[ID1].Ap;
  PM[ID1].B += PM[ID1].Bp;
  PM[ID1].C += PM[ID1].Cp;
  PM[ID1].D += PM[ID1].Dp;
  PM[ID1].S += PM[ID1].Sp;
  PM[ID1].F = PM[ID1].Fp;
  F1 = PM[ID1].F;
  Fdp12.innerHTML = PM[ID1].F;
  MHPdp1.innerHTML = PM[ID1].MHP;
  HPdp1.innerHTML = PM[ID1].HP;
  PM[ID1].img1 = PM[ID1].megaimg1;
  PK1.src = PM[ID1].img1;
  MA1.style.visibility = "visible";
  if (PM[ID1].typechange === true) {
   PM[ID1].bodytype1 = PM[ID1].changetype1;
   PM[ID1].bodytype2 = PM[ID1].changetype2;
  };
  if (F1 === "ひでり" && sunny === false) {
   Fdp11.style.visibility = "visible";
   Fdp12.style.visibility = "visible";
   weather1 = true;
  };
 };
 if (MAXstart1 === true) {
  MAXstart1 = false;
  MAXed1 = true;
  PM[ID1].MAX = true;
  alert(PN1 + "！ キョダイマックス！");
  PM[ID1].MHP = PM[ID1].MHP * 2;
  futurehp1 = PM[ID1].HP * 2;
  MHPdp1.innerHTML = PM[ID1].MHP;
  PK1.src = PM[ID1].MAXimg1;
  PK1.style.width = 400;
  dps1.style.backgroundColor = "#FF407F";
  setTimeout(grow1,300);
 } else {
  setTimeout(test2,75);
 };
}
function test2() {
 if (MGstart2 === true) {
  MGstart2 = false;
  MGed2 = true;
  PM[ID2].mega = true;
  alert(Pnameon2 + "のキーストーンと" + PN2 + "の" + PM[ID2].MGknight + "が反応した！");
  PM[ID2].MHP += PM[ID2].MHPp;
  PM[ID2].HP += PM[ID2].MHPp;
  PM[ID2].A += PM[ID2].Ap;
  PM[ID2].B += PM[ID2].Bp;
  PM[ID2].C += PM[ID2].Cp;
  PM[ID2].D += PM[ID2].Dp;
  PM[ID2].S += PM[ID2].Sp;
  PM[ID2].F = PM[ID2].Fp;
  F2 = PM[ID2].F;
  Fdp22.innerHTML = PM[ID2].F;
  MHPdp2.innerHTML = PM[ID2].MHP;
  HPdp2.innerHTML = PM[ID2].HP;
  PM[ID2].img2 = PM[ID2].megaimg2;
  PK2.src = PM[ID2].img2;
  MA2.style.visibility = "visible";
  if (PM[ID2].typechange === true) {
   PM[ID2].bodytype1 = PM[ID2].changetype1;
   PM[ID2].bodytype2 = PM[ID2].changetype2;
  };
  if (F2 === "ひでり" && sunny === false) {
   Fdp21.style.visibility = "visible";
   Fdp22.style.visibility = "visible";
   weather2 = true;
  };
 };
 if (MAXstart2 === true) {
  MAXstart2 = false;
  MAXed2 = true;
  PM[ID2].MAX = true;
  alert(PN2 + "！ キョダイマックス！");
  PM[ID2].MHP = PM[ID2].MHP * 2;
  futurehp2 = PM[ID2].HP * 2;
  MHPdp2.innerHTML = PM[ID2].MHP;
  PK2.src = PM[ID2].MAXimg2;
  PK2.style.width = 400;
  dps2.style.backgroundColor = "#FF407F";
  setTimeout(grow2,300);
 } else {
  setTimeout(test3,75);
 };
}
function test3() {
 if (changer1 === true) {
  alert(Pnameon1 + "は" + PN1 + "を引っ込めた！");
  PK1.style.visibility = "hidden";
  MA1.style.visibility = "hidden";
  if (F1 === "イリュージョン" && ID1 !== 2) {
   illusion1 = true;
   if (PM[2].HP === 0) {
    if (PM[1].HP === 0) {
     PN1 = PM[ID1].name;
     PKpic1 = PM[ID1].img1;
    } else {
     PN1 = PM[1].name;
     PKpic1 = PM[1].img1;
    };
   } else {
    PN1 = PM[2].name;
    PKpic1 = PM[2].img1;
   };
  } else {
   PN1 = PM[ID1].name;
   PKpic1 = PM[ID1].img1;
  };
  setTimeout(changing1,50);
 } else {
  setTimeout(test4,200);
 };
}
function test4() {
 if (changer2 === true) {
  alert(Pnameon2 + "は" + PN2 + "を引っ込めた！");
  PK2.style.visibility = "hidden";
  MA2.style.visibility = "hidden";
  if (F2 === "イリュージョン" && ID2 !== 5) {
   illusion2 = true;
   if (PM[5].HP === 0) {
    if (PM[4].HP === 0) {
     PN2 = PM[ID2].name;
     PKpic2 = PM[ID2].img2;
    } else {
     PN2 = PM[4].name;
     PKpic2 = PM[4].img2;
    };
   } else {
    PN2 = PM[5].name;
    PKpic2 = PM[5].img2;
   };
  } else {
   PN2 = PM[ID2].name;
   PKpic2 = PM[ID2].img2;
  };
  setTimeout(changing2,50);
 } else {
  setTimeout(test5,200);
 };
}
function test5() {
 if (Fdown1 === true || fishes1 === true || weather1 === true) {
  setTimeout(plus1,50);
 } else {
  setTimeout(test6,200);
 };
}
function test6() {
 if (Fdown2 === true || fishes2 === true || weather2 === true) {
  setTimeout(plus2,50);
 } else {
  setTimeout(total,200);
 };
}
function total() {
 if ((F1 === "いたずらごころ" && skiller1.type === "change") || (F2 === "いたずらごころ" && skiller2.type === "change") || skiller1.snowdown === true || skiller2.snowdown === true || skiller1.name === "トリックルーム" || skiller2.name === "トリックルーム" || skiller1.shield === true || skiller2.shield === true || (PM[ID1].MAX === true && skiller1.type === "change") || (PM[ID2].MAX === true && skiller2.type === "change") || skiller1.name === "しんそく" || skiller2.name === "しんそく") {
  if (F1 === "いたずらごころ") {
   firster1 = true;
   pt1 += 1
  };
  if (F2 === "いたずらごころ") {
   firster2 = true;
   pt2 += 1
  };
  if (skiller1.name === "しんそく") {
   firster1 = true;
   pt1 += 2;
  };
  if (skiller2.name === "しんそく") {
   firster2 = true;
   pt2 += 2;
  };
  if (skiller1.snowdown === true || skiller1.name === "トリックルーム") {
   pt1 -= 4;
  };
  if (skiller2.snowdown === true || skiller2.name === "トリックルーム") {
   pt2 -= 4;
  };
  if ((PM[ID1].MAX === true && skiller1.type === "change") || skiller1.shield === true) {
   pt1 += 4;
  };
  if ((PM[ID2].MAX === true && skiller2.type === "change") || skiller2.shield === true) {
   pt2 += 4;
  };
 } else {
  if (backwind1 === true) {
   windpt1 += 1;
  };
  if (backwind2 === true) {
   windpt2 += 1;
  };
  if ((PM[ID1].S * rank[SR1].R * windrate1) < (PM[ID2].S * rank[SR2].R * windrate2)) {
   if (unspeed === true) {
    unspeedpt += 1;
    pt1 += 1;
   } else {
    pt2 += 1;
   };
  } else {
   if (unspeed === true) {
    unspeedpt += 1;
    pt2 += 1;
   } else {
    pt1 += 1;
   };
  };
 };
 setTimeout(speed,50);
}
function speed() {
 if (bothchange === 2) {
  last();
 } else {
  if (pt1 < pt2) {
   first = true;
   if (PM[ID2].MAX === true) {
    setTimeout(PKCOMAX2,400);
   } else {
    setTimeout(PKCO2,400);
   };
  } else {
   if (PM[ID1].MAX === true) {
    setTimeout(PKCOMAX1,400);
   } else {
    setTimeout(PKCO1,400);
   };
  };
 };
}
function grow1() {
 if (PM[ID1].HP < futurehp1) {
  PM[ID1].HP += 1;
  HPdp1.innerHTML = PM[ID1].HP;
  setTimeout(grow1,10);
 } else {
  if (healdp1 === true) {
   setTimeout(dp1,200);
  } else {
   setTimeout(test2,100);
  };
 };
}
function grow2() {
 if (PM[ID2].HP < futurehp2) {
  PM[ID2].HP += 1;
  HPdp2.innerHTML = PM[ID2].HP;
  setTimeout(grow2,10);
 } else {
  if (healdp2 === true) {
   setTimeout(dp2,200);
  } else {
   setTimeout(test3,100);
  };
 };
}
function bothgrowcontract() {
 if (PM[ID1].HP !== futurehp1 || PM[ID2].HP !== futurehp2) {
  if (PM[ID1].HP < futurehp1) {
   PM[ID1].HP += 1;
   HPdp1.innerHTML = PM[ID1].HP;
  } else {
   if (PM[ID1].HP > futurehp1) {
    PM[ID1].HP -= 1;
    HPdp1.innerHTML = PM[ID1].HP;
   };
  };
  if (PM[ID2].HP < futurehp2) {
   PM[ID2].HP += 1;
   HPdp2.innerHTML = PM[ID2].HP;
  } else {
   if (PM[ID2].HP > futurehp2) {
    PM[ID2].HP -= 1;
    HPdp2.innerHTML = PM[ID2].HP;
   };
  };
  setTimeout(bothgrowcontract,12);
 } else {
  setTimeout(seconddp,100);
 };
}
function changing1() {
 alert(Pnameon1 + "は" + PN1 + "を繰り出した！");
 PK1.src = PKpic1;
 PK1.style.visibility = "visible";
 Lv1.innerHTML = PM[ID1].level;
 name1.innerHTML = PN1;
 HPdp1.innerHTML = PM[ID1].HP;
 MHPdp1.innerHTML = PM[ID1].MHP;
 Fdp11.innerHTML = PM[ID1].name + "の";
 Fdp12.innerHTML = PM[ID1].F;
 AR1 = 6;
 BR1 = 6;
 CR1 = 6;
 DR1 = 6;
 SR1 = 6;
 skill11dp.innerHTML = skill[PM[ID1].skill1].name;
 skill12dp.innerHTML = skill[PM[ID1].skill2].name;
 skill13dp.innerHTML = skill[PM[ID1].skill3].name;
 skill14dp.innerHTML = skill[PM[ID1].skill4].name;
 skill11.style.backgroundColor = skill[PM[ID1].skill1].color;
 skill12.style.backgroundColor = skill[PM[ID1].skill2].color;
 skill13.style.backgroundColor = skill[PM[ID1].skill3].color;
 skill14.style.backgroundColor = skill[PM[ID1].skill4].color;
 skill11.style.borderColor = "#000000";
 skill12.style.borderColor = "#000000";
 skill13.style.borderColor = "#000000";
 skill14.style.borderColor = "#000000";
 PK1.style.width = 200;
 dps1.style.backgroundColor = "#F9F9F6";
 breakarmored1 = false;
 afterback1 = false;
 recoil1 = false;
 formed1 = false;
 plushit1 = 0;
 if (PM[ID1].mega === true) {
  MA1.style.visibility = "visible";
 };
 if (F1 === "ぎょぐん") {
  fishes1 = true
  Fdp11.style.visibility = "visible";
  Fdp12.style.visibility = "visible";
 } else {
  if (F1 === "いかく") {
   Fdown1 = true;
   Fdp11.style.visibility = "visible";
   Fdp12.style.visibility = "visible";
  } else {
   if (F1 === "ひでり" && weather !== "sunny") {
    weather1 = true;
    Fdp11.style.visibility = "visible";
    Fdp12.style.visibility = "visible";
   };
  };
 };
 if (changer1 === true) {
  setTimeout(test4,50);
 } else {
  if (down1 === true) {
   setTimeout(plus1,50);
  };
 };
}
function changing2() {
 alert(Pnameon2 + "は" + PN2 + "を繰り出した！");
 PK2.src = PKpic2;
 PK2.style.visibility = "visible";
 Lv2.innerHTML = PM[ID2].level;
 name2.innerHTML = PN2;
 HPdp2.innerHTML = PM[ID2].HP;
 MHPdp2.innerHTML = PM[ID2].MHP;
 Fdp21.innerHTML = PM[ID2].name + "の";
 Fdp22.innerHTML = PM[ID2].F;
 AR2 = 6;
 BR2 = 6;
 CR2 = 6;
 DR2 = 6;
 SR2 = 6;
 skill21dp.innerHTML = skill[PM[ID2].skill1].name;
 skill22dp.innerHTML = skill[PM[ID2].skill2].name;
 skill23dp.innerHTML = skill[PM[ID2].skill3].name;
 skill24dp.innerHTML = skill[PM[ID2].skill4].name;
 skill21.style.backgroundColor = skill[PM[ID2].skill1].color;
 skill22.style.backgroundColor = skill[PM[ID2].skill2].color;
 skill23.style.backgroundColor = skill[PM[ID2].skill3].color;
 skill24.style.backgroundColor = skill[PM[ID2].skill4].color;
 skill21.style.borderColor = "#000000";
 skill22.style.borderColor = "#000000";
 skill23.style.borderColor = "#000000";
 skill24.style.borderColor = "#000000";
 PK2.style.width = 200;
 dps2.style.backgroundColor = "#F9F9F6";
 breakarmored2 = false;
 afterback2 = false;
 recoil2 = false;
 formed2 = false;
 plushit2 = 0;
 if (PM[ID2].mega === true) {
  MA2.style.visibility = "visible";
 };
 if (F2 === "ぎょぐん") {
  fishes2 = true
  Fdp21.style.visibility = "visible";
  Fdp22.style.visibility = "visible";
 } else {
  if (F2 === "いかく") {
   Fdp21.style.visibility = "visible";
   Fdp22.style.visibility = "visible";
   Fdown2 = true;
  } else {
   if (F2 === "ひでり" && weather === "sunny") {
    weather2 = true;
    Fdp21.style.visibility = "visible";
    Fdp22.style.visibility = "visible";
   };
  };
 };
 if (changer2 === true) {
  setTimeout(test5,50);
 } else {
  if (down2 === true) {
   setTimeout(plus2,100);
  };
 };
}
function plus1() {
 if (fishes1 === true) {
  fishes1 = false;
  alert("ヨワシの群れが集まった！");
  PM[ID1].A = PM[ID1].Ap;
  PM[ID1].B = PM[ID1].Bp;
  PM[ID1].C = PM[ID1].Cp;
  PM[ID1].D = PM[ID1].Dp;
  PM[ID1].heavy = PM[ID1].heavies;
  PM[ID1].img1 = PM[ID1].imger1;
  PK1.src = PM[ID1].img1;
  Fdp11.style.visibility = "hidden";
  Fdp12.style.visibility = "hidden";
  if (startdash1 === true) {
   setTimeout(start5,100);
  } else {
   if (down1 === true) {
    setTimeout(last,200);
   } else {
    setTimeout(test6,100);
   };
  };
 } else {
  if (Fdown1 === true) {
   Fdown1 = false;
   if (F2 === "クリアボディ") {
    if (clearbody === true) {
     clearbody = false;
     Fdown1 = false;
     alert(PN2 + "の能力は下がらない！");
     Fdp11.style.visibility = "hidden";
     Fdp12.style.visibility = "hidden";
     Fdp21.style.visibility = "hidden";
     Fdp22.style.visibility = "hidden";
     if (startdash1 === true) {
      setTimeout(start5,100);
     } else {
      if (down1 === true) {
       setTimeout(last,200);
      } else {
       setTimeout(test6,100);
      };
     };
    } else {
     clearbody = true;
     Fdown1 = true;
     Fdp21.style.visibility = "visible";
     Fdp22.style.visibility = "visible";
     setTimeout(plus1,50);
    };
   } else {
    if (F1 === "いかく") {
     if (AR2 <= 0) {
      alert(PN2 + "のこうげきはもう下がらない！");
     } else {
      AR2 -= 1;
      alert(PN2 + "のこうげきが下がった。");
     };
    };
    Fdp11.style.visibility = "hidden";
    Fdp12.style.visibility = "hidden";
    if (F2 === "まけんき") {
     if (resist === true) {
      resist = false;
      alert(PN2 + "のこうげきがぐーんと上がった！");
      AR2 += 2;
      Fdp21.style.visibility = "hidden";
      Fdp22.style.visibility = "hidden";
      Fdown1 = false;
      if (startdash1 === true) {
       setTimeout(start5,100);
      } else {
       if (down1 === true) {
        setTimeout(last,200);
       } else {
        setTimeout(test6,100);
       };
      };
     } else {
      resist = true;
      Fdp21.style.visibility = "visible";
      Fdp22.style.visibility = "visible";
      F1 = "cansel";
      Fdown1 = true;
      setTimeout(plus1,50);
     };
    } else {
     if (startdash1 === true) {
      setTimeout(start5,100);
     } else {
      if (down1 === true) {
       setTimeout(last,200);
      } else {
       setTimeout(test6,100);
      };
     };
    };
   };
  } else {
   if (weather1 === true) {
    weather1 = false;
    if (F1 === "ひでり") {
     weather = "sunny";
     Fdp11.style.visibility = "hidden";
     Fdp12.style.visibility = "hidden";
     alert("日差しが強くなった！");
     if (startdash1 === true) {
      setTimeout(start5,100);
     } else {
      if (down1 === true) {
       setTimeout(last,200);
      } else {
       setTimeout(test6,100);
      };
     };
    };
   } else {
    if (down1 === true) {
     setTimeout(last,200);
    };
   };
  };
 };
}
function plus2() {
 if (fishes2 === true) {
  fishes2 = false;
  alert("ヨワシの群れが集まった！");
  PM[ID2].A = PM[ID2].Ap;
  PM[ID2].B = PM[ID2].Bp;
  PM[ID2].C = PM[ID2].Cp;
  PM[ID2].D = PM[ID2].Dp;
  PM[ID2].heavy = PM[ID2].heavies;
  PM[ID2].img2 = PM[ID2].imger2;
  PK2.src = PM[ID2].img2;
  Fdp21.style.visibility = "hidden";
  Fdp22.style.visibility = "hidden";
  if (startdash2 === true) {
   setTimeout(start6,100);
  } else {
   if (down2 === true) {
    setTimeout(last,200);
   } else {
    setTimeout(total,100);
   };
  };
 } else {
  if (Fdown2 === true) {
   Fdown2 = false;
   if (F1 === "クリアボディ") {
    if (clearbody === true) {
     clearbody = false;
     Fdown2 = false;
     alert(PN1 + "の能力は下がらない！");
     Fdp11.style.visibility = "hidden";
     Fdp12.style.visibility = "hidden";
     Fdp21.style.visibility = "hidden";
     Fdp22.style.visibility = "hidden";
     if (startdash2 === true) {
      setTimeout(start6,100);
     } else {
      if (down2 === true) {
       setTimeout(last,200);
      } else {
       setTimeout(total,100);
      };
     };
    } else {
     clearbody = true;
     Fdown2 = true;
     Fdp11.style.visibility = "visible";
     Fdp12.style.visibility = "visible";
     setTimeout(plus2,100);
    };
   } else {
    if (F2 === "いかく") {
     if (AR1 <= 0) {
      alert(PN1 + "のこうげきはもう下がらない！");
     } else {
      AR1 -= 1;
      alert(PN1 + "のこうげきが下がった。");
     };
    };
    Fdp21.style.visibility = "hidden";
    Fdp22.style.visibility = "hidden";
    if (F1 === "まけんき") {
     if (resist === true) {
      resist = false;
      alert(PN1 + "のこうげきがぐーんと上がった！");
      AR1 += 2;
      Fdp11.style.visibility = "hidden";
      Fdp12.style.visibility = "hidden";
      Fdown2 = false;
      if (startdash2 === true) {
       setTimeout(start6,100);
      } else {
       if (down2 === true) {
        setTimeout(last,200);
       } else {
        setTimeout(total,100);
       };
      };
     } else {
      resist = true;
      Fdp11.style.visibility = "visible";
      Fdp12.style.visibility = "visible";
      F2 = "cansel";
      Fdown2 = true;
      setTimeout(plus2,50);
     };
    } else {
     if (startdash2 === true) {
      setTimeout(start6,100);
     } else {
      if (down2 === true) {
       setTimeout(last,200);
      } else {
       setTimeout(total,100);
      };
     };
    };
   };
  } else {
   if (weather2 === true) {
    weather2 = false;
    if (F2 === "ひでり") {
     weather = "sunny";
     Fdp21.style.visibility = "hidden";
     Fdp22.style.visibility = "hidden";
     alert("日差しが強くなった！");
     if (startdash2 === true) {
      setTimeout(start6,100);
     } else {
      if (down2 === true) {
       setTimeout(last,200);
      } else {
       setTimeout(total,100);
      };
     };
    };
   } else {
    if (down2 === true) {
     setTimeout(last,200);
    };
   };
  };
 };
}