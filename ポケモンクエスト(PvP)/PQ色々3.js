function rate() {
 if (transform1 === true) {
  transform1 = false;
  alert(PN1 + "は" + skilltype + "タイプになった！");
  Fdp11.style.visibility = "hidden";
  Fdp12.style.visibility = "hidden";
 };
 if (transform2 === true) {
  transform2 = false;
  alert(PN2 + "は" + skilltype + "タイプになった！");
  Fdp21.style.visibility = "hidden";
  Fdp22.style.visibility = "hidden";
 };
 if (hyperhitrate === true) {
  vitalpt = 3;
 } else {
  if (highhitrate === true) {
   vitalpt += 1;
  };
 };
 chaos = Math.random() * 100;
 if (chaos <= vital[vitalpt].R && nochaos !== true) {
  chaosdp = true;
  minus = Math.ceil(minus / 2 * 3);
 };
 if (hyperhitrate === true) {
  hyperhitrate = false;
 } else {
  if (highhitrate === true) {
   highhitrate = false;
  };
 };
 vitalpt = 0;
 nochaos = false;
 if (PBed === true && chaosdp === true) {
  minus = minus * 2;
 };
 if (SBed === true && chaosdp === true) {
  minus = minus * 2;
 };
 if (OBed === true && chaosdp === true) {
  minus = minus * 2;
 };
 PBed = false;
 SBed = false;
 OBed = false;
 if (first === true) {
  if (firsted === 1) {
   if (PM[ID2].HP < minus) {
    minus = PM[ID2].HP;
    if (F2 === "がんじょう" && minus === PM[ID2].MHP) {
     minus -= 1;
    };
   };
   futurehp2 = PM[ID2].HP - minus;
   if (PM[ID2].done !== false) {
    PM[ID2].done += 1;
    if (PM[ID2].done === 7) {
     PM[ID2].done = 6;
    };
   };
   setTimeout(dmganimation2,200);
  } else {
   if (PM[ID1].HP < minus) {
    minus = PM[ID1].HP;
    if (F1 === "がんじょう" && minus === PM[ID1].MHP) {
     minus -= 1;
    };
   };
   futurehp1 = PM[ID1].HP - minus;
   if (PM[ID1].done !== false) {
    PM[ID1].done += 1;
    if (PM[ID1].done === 7) {
     PM[ID1].done = 6;
    };
   };
   setTimeout(dmganimation1,200);
  };
 } else {
  if (firsted === 1) {
   if (PM[ID1].HP < minus) {
    minus = PM[ID1].HP;
    if (F1 === "がんじょう" && minus === PM[ID1].MHP) {
     minus -= 1;
    };
   };
   futurehp1= PM[ID1].HP - minus;
   if (PM[ID1].done !== false) {
    PM[ID1].done += 1;
    if (PM[ID1].done === 7) {
     PM[ID1].done = 6;
    };
   };
   setTimeout(dmganimation1,200);
  } else {
   if (PM[ID2].HP < minus) {
    minus = PM[ID2].HP;
    if (F2 === "がんじょう" && minus === PM[ID2].MHP) {
     minus -= 1;
     Fdp21.style.visibility = "visible";
     Fdp22.style.visibility = "visible";
    };
   };
   futurehp2 = PM[ID2].HP - minus;
   if (PM[ID2].done !== false) {
    PM[ID2].done += 1;
    if (PM[ID2].done === 7) {
     PM[ID2].done = 6;
    };
   };
   setTimeout(dmganimation2,200);
  };
 };
}
function dmganimation1() {
 if (PM[ID1].HP > futurehp1) {
  if (F1 === "ばけのかわ" && PM[ID1].ghostskin === true) {
   PM[ID1].ghostskin = false;
   if (F2 !== "かたやぶり" && skiller2.noF !== true) {
    dmg = 5;
    chaosdp = false;
    AH = false;
    outskin = true;
    futurehp1 = Math.floor(PM[ID1].MHP / 8 * 7);
    Fdp11.style.visibility = "visible";
    Fdp12.style.visibility = "visible";
   } else {
    PM[ID1].img1 = PM[ID1].afterimg;
    PK1.src = PM[ID1].img1;
   };
  };
  PM[ID1].HP -= 1;
  HPdp1.innerHTML = PM[ID1].HP;
  setTimeout(dmganimation1,5);
 } else {
  if (reaction1 === true) {
   alert(PN1 + "は勢い余ってダメージを受けた！");
   setTimeout(testfor1,200);
  } else {
   setTimeout(dp2,200);
  };
 };
}
function dmganimation2() {
 if (PM[ID2].HP > futurehp2) {
  if (F2 === "ばけのかわ" && PM[ID2].ghostskin === true) {
   PM[ID2].ghostskin = false;
   if (F1 !== "かたやぶり" && skiller1.noF !== true) {
    dmg = 5;
    chaosdp = false;
    AH = false;
    outskin = true;
    futurehp2 = Math.floor(PM[ID2].MHP / 8 * 7);
    Fdp21.style.visibility = "visible";
    Fdp22.style.visibility = "visible";
   } else {
    PM[ID2].img2= PM[ID2].afterimg;
    PK2.src = PM[ID2].img2;
   };
  };
  PM[ID2].HP -= 1;
  HPdp2.innerHTML = PM[ID2].HP;
  setTimeout(dmganimation2,5);
 } else {
  if (reaction2 === true) {
   alert(PN2 + "は勢い余ってダメージを受けた！");
   setTimeout(testfor2,200);
  } else {
   setTimeout(dp1,200);
  };
 };
}
function dp1() {
 if (sturdy2 === true) {
  sturdy2 = false;
  alert(PN2 + "は持ちこたえた！");
  Fdp21.style.visibility = "hidden";
  Fdp22.style.visibility = "hidden";
  setTimeout(seconddp,100);
 } else {
  if (dmg === 4) {
   alert(Pnameon2 + "の" + PN2 + "には" + display[dmg].dp);
   Wattack = false;
   dmg = 5;
   Fdp11.style.visibility = "hidden";
   Fdp12.style.visibility = "hidden";
   if (skiller === "でんこうそうげき1") {
    alert(Pnameon1 + "の" + PN1 + "はでんきを使い果たした");
   };
   setTimeout(seconddp,100);
  } else {
   if (skiller1.Wattack === true) {
    if (chaosdp === true) {
     chaosdp = false;
     alert("急所に当たった！");
    };
    if (PM[ID2].HP <= 0) {
     alert(WApt +"回当たった！");
     WApt = 0;
     Wattacked = false;
     Wattack = false;
     if (dmg !== 5) {
      alert(display[dmg].dp);
      dmg = 5;
     };
     if (illusion2 === true) {
      vision2 = true;
     };
     setTimeout(seconddp,100);
    } else {
     if (Wattack === true) {
      Wattacked = true;
      dmg = 5;
      if (outskin === true) {
       outskin = false;
       alert(PN2 + "のばけのかわがはがれた！");
       Fdp21.style.visibility = "hidden";
       Fdp22.style.visibility = "hidden";
       PM[ID2].img2 = PM[ID2].afterimg;
       PK2.src = PM[ID2].img2;
      };
      setTimeout(PKCO1,500);
     } else {
      alert(WApt +"回当たった！");
      WApt = 0;
      Wattacked = false;
      if (dmg !== 5) {
       alert(display[dmg].dp);
       dmg = 5;
      };
      if (illusion2 === true) {
       vision2 = true;
      };
      setTimeout(seconddp,100);
     };
    };
   } else {
    if (dmg !== 5) {
     alert(display[dmg].dp);
     dmg = 5;
    };
    if (chaosdp === true) {
     chaosdp = false;
     alert("急所に当たった！");
    };
    if (healdp1 === true) {
     healdp1 = false;
     alert(PN1 + "の体力が回復した。");
    };
    if (AH === true) {
     PM[ID1].HP += Math.floor(minus / 2);
     if (PM[ID1].HP > PM[ID1].MHP) {
      PM[ID1].HP = PM[ID1].MHP;
     };
     HPdp1.innerHTML = PM[ID1].HP;
     setTimeout(AHdp1,50);
    };
    if (skiller === "でんこうそうげき1") {
     alert(Pnameon1 + "の" + PN1 + "はでんきを使い果たした");
    };
    if (outskin === true) {
     outskin = false;
     alert(PN2 + "のばけのかわがはがれた！");
     PM[ID2].img2 = PM[ID2].afterimg;
     PK2.src = PM[ID2].img2;
     Fdp21.style.visibility = "hidden";
     Fdp22.style.visibility = "hidden";
    };
    if (illusion2 === true) {
     vision2 = true;
    };
    if (shielddp2 === true) {
     shielddp2 = false;
     alert(PN2 + "は守り切れずダメージを受けた…。");
    };
    if (onekilloff2 === true) {
     onekilloff2 = false;
     if (F2 === "がんじょう" || (skiller1.name === "じわれ" && F2 === "ふゆう")) {
      alert(PN2 + "には効果がないようだ…。");
      Fdp21.style.visibility = "hidden";
      Fdp22.style.visibility = "hidden";
     } else {
      alert("一撃必殺！");
     };
    };
    if (skiller1.highhitrating === true) {
     plushit1 += 1;
     if (plushit1 > 3) {
      plushit1 = 3;
     } else {
      alert(PN1 + "は張り切っている！");
     };
    };
    if (breakPB2 === true) {
     breakPB2 = false;
     alert(Pnameon2 + "側のリフレクターがなくなった！");
    };
    if (breakSB2 === true) {
     breakSB2 = false;
     alert(Pnameon2 + "側のひかりのかべがなくなった！");
    };
    if (breakOB2 === true) {
     breakOB2 = false;
     alert(Pnameon2 + "側のオーロラベールがなくなった！");
    };
    if (PBing1 === true) {
     PBing1 = false;
     alert(Pnameon1 + "のポケモンはリフレクターで物理に強くなった！");
    };
    if (SBing1 === true) {
     SBing1 = false;
     alert(Pnameon1 + "のポケモンはひかりのかべで特殊に強くなった！");
    };
    if (OBing1 === true) {
     OBing1 = false;
     alert(Pnameon1 + "のポケモンはオーロラベールで物理と特殊に強くなった！");
    };
    if (F2 === "がんじょう" && PM[ID2].MHP === (minus + 1)) {
     Fdp21.style.visibility = "visible";
     Fdp22.style.visibility = "visible";
     sturdy2 = true;
     setTimeout(dp1,100);
    } else {
     setTimeout(seconddp,100);
    };
   };
  };
 };
}
function AHdp1() {
 AH = false;
 alert(PN1 + "は"+ PN2 + "から体力を吸い取った！");
}
function dp2() {
 if (sturdy1 === true) {
  sturdy1 = false;
  alert(PN1 + "は持ちこたえた！");
  Fdp11.style.visibility = "hidden";
  Fdp12.style.visibility = "hidden";
  setTimeout(seconddp,100);
 } else {
  if (dmg === 4) {
   alert(Pnameon1 + "の" + PN1 + "には" + display[dmg].dp);
   Wattack = false;
   dmg = 5;
   Fdp21.style.visibility = "hidden";
   Fdp22.style.visibility = "hidden";
   if (skiller === "でんこうそうげき2") {
    alert(Pnameon2 + "の" + PN2 + "はでんきを使い果たした");
   };
   setTimeout(seconddp,100);
  } else {
   if (skiller2.Wattack === true) {
    if (chaosdp === true) {
     chaosdp = false;
     alert("急所に当たった！");
    };
    if (PM[ID1].HP <= 0) {
     alert(WApt +"回当たった！");
     WApt = 0;
     Wattacked = false;
     Wattack = false;
     if (dmg !== 5) {
      alert(display[dmg].dp);
      dmg = 5;
     };
     if (illusion1 === true) {
      vision1 = true;
     };
     setTimeout(seconddp,100);
    } else {
     if (Wattack === true) {
      Wattacked = true;
      dmg = 5;
      if (outskin === true) {
       outskin = false;
       alert(PN1 + "のばけのかわがはがれた！");
       Fdp11.style.visibility = "hidden";
       Fdp12.style.visibility = "hidden";
       PM[ID1].img1 = PM[ID1].afterimg;
       PK1.src = PM[ID1].img1;
      };
      setTimeout(PKCO2,500);
     } else {
      alert(WApt +"回当たった！");
      WApt = 0;
      Wattacked = false;
      if (dmg !== 5) {
       alert(display[dmg].dp);
       dmg = 5;
      };
      if (illusion1 === true) {
       vision1 = true;
      };
      setTimeout(seconddp,100);
     };
    };
   } else {
    if (dmg !== 5) {
     alert(display[dmg].dp);
     dmg = 5;
    };
    if (chaosdp === true) {
     chaosdp = false;
     alert("急所に当たった！");
    };
    if (healdp2 === true) {
     healdp2 = false;
     alert(PN2 + "の体力が回復した。");
    };
    if (AH === true) {
     PM[ID2].HP += Math.floor(minus / 2);
     if (PM[ID2].HP > PM[ID2].MHP) {
      PM[ID2].HP = PM[ID2].MHP;
     };
     HPdp2.innerHTML = PM[ID2].HP;
     setTimeout(AHdp2,50);
    };
    if (skiller === "でんこうそうげき2") {
     alert(Pnameon2 + "の" + PN2 + "はでんきを使い果たした");
    };
    if (outskin === true) {
     outskin = false;
     alert(PN1 + "のばけのかわがはがれた！");
     Fdp11.style.visibility = "hidden";
     Fdp12.style.visibility = "hidden";
     PM[ID1].img1 = PM[ID1].afterimg;
     PK1.src = PM[ID1].img1;
    };
    if (illusion1 === true) {
     vision1 = true;
    };
    if (shielddp1 === true) {
     shielddp1 = false;
     alert(PN1 + "は守り切れずダメージを受けた…。");
    };
    if (onekilloff1 === true) {
     onekilloff1 = false;
     if (F1 === "がんじょう" || (skiller2.name === "じわれ" && F1 === "ふゆう")) {
      alert(PN1 + "には効果がないようだ…。");
      Fdp11.style.visibility = "hidden";
      Fdp12.style.visibility = "hidden";
     } else {
      alert("一撃必殺！");
     };
    };
    if (skiller2.highhitrating === true) {
     plushit2 += 1;
     if (plushit2 > 3) {
      plushit2 = 3;
     } else {
      alert(PN2 + "は張り切っている！");
     };
    };
    if (breakPB1 === true) {
     breakPB1 = false;
     alert(Pnameon1 + "側のリフレクターがなくなった！");
    };
    if (breakSB1 === true) {
     breakSB1 = false;
     alert(Pnameon1 + "側のひかりのかべがなくなった！");
    };
    if (breakOB1 === true) {
     breakOB1 = false;
     alert(Pnameon1 + "側のオーロラベールがなくなった！");
    };
    if (PBing2 === true) {
     PBing2 = false;
     alert(Pnameon2 + "のポケモンはリフレクターで物理に強くなった！");
    };
    if (SBing2 === true) {
     SBing2 = false;
     alert(Pnameon2 + "のポケモンはひかりのかべで特殊に強くなった！");
    };
    if (OBing2 === true) {
     OBing2 = false;
     alert(Pnameon2 + "のポケモンはオーロラベールで物理と特殊に強くなった！");
    };
    if (F1 === "がんじょう" && PM[ID1].MHP === (minus + 1)) {
     Fdp11.style.visibility = "visible";
     Fdp12.style.visibility = "visible";
     sturdy1 = true;
     setTimeout(dp2,100);
    } else {
     setTimeout(seconddp,100);
    };
   };
  };
 };
}
function AHdp2() {
 AH = false;
 alert(PN2 + "は"+ PN1 + "から体力を吸い取った！");
}
function testfor1() {
 minus = 0;
 if (sunny === true) {
  sunny = false;
  alert("日差しが強くなった！");
  weather = "sunny";
  weatherpt = 0;
 };
 if (rainy === true) {
  rainy = false;
  alert("雨が降り始めた！");
  weather = "rainy";
  weatherpt = 0;
 };
 if (hail === true) {
  hail = false;
  alert("あられが降り始めた！");
  weather = "hail";
  weatherpt = 0;
 };
 if (phycho === true) {
  phycho = false;
  alert("サイコフィールドが広がった！");
  field = "phycho";
  fieldpt = 0;
 };
 if (elec === true) {
  elec = false;
  alert("エレキフィールドが広がった！");
  field = "elec";
  fieldpt = 0;
 };
 if (mist === true) {
  mist = false;
  alert("ミストフィールドが広がった！");
  field = "mist";
  fieldpt = 0;
 };
 if (grass === true) {
  grass = false;
  alert("グラスフィールドが広がった！");
  field = "grass";
  fieldpt = 0;
 };
 if (skyoff1 === true) {
  skyoff1 = false;
  PM[ID1].bodytype2 = "ひこう";
 };
 if (vision1 === true) {
  if (illusion1 === false) {
   vision1 = false;
   alert("ゾロアークの変身が解けた！");
   Fdp11.style.visibility = "hidden";
   Fdp12.style.visibility = "hidden";
   PN1 = PM[ID1].name;
   name1.innerHTML = PN1;
   PK1.src = PM[ID1].img1;
   setTimeout(testfor1,100);
  } else {
   illusion1 = false;
   Fdp11.style.visibility = "visible";
   Fdp12.style.visibility = "visible";
   setTimeout(testfor1,100);
  };
 } else {
  if (PM[ID1].HP <= 0) {
   alert(Pnameon1 + "の" + PN1 + "は倒れた…。");
   if (PM[ID1].MAX === true) {
    PM[ID1].MAX = false;
    PK1.style.width = 200;
    PM[ID1].MHP = PM[ID1].MHP / 2;
    MHPdp1.innerHTML = PM[ID1].MHP;
    dps1.style.backgroundColor = "#F9F9F6";
   };
   changer1 = false;
   reaction1 = false;
   PK1.style.visibility = "hidden";
   MA1.style.visibility = "hidden";
   dies1 += 1;
   if (dies1 === diept1) {
    alert(Pnameon2 + "は" + Pnameon1 + "に勝った！");
    audio.stop();
   } else {
    down1 = true;
    changeopen1();
   };
  } else {
   if (reaction1 === true) {
    reaction1 = false;
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
    if (first === true) {
     if (suicide2 === true) {
      suicide2 = false;
      setTimeout(testfor2,200);
     } else {
      if (PM[ID1].MAX === true) {
       setTimeout(PKCOMAX1,200);
      } else {
       setTimeout(PKCO1,200);
      };
     };
    } else {
     last();
    };
   };
  };
 };
}
function testfor2() {
 minus = 0;
 if (sunny === true) {
  sunny = false;
  alert("日差しが強くなった！");
  weather = "sunny";
  weatherpt = 0;
 };
 if (rainy === true) {
  rainy = false;
  alert("雨が降り始めた！");
  weather = "rainy";
  weatherpt = 0;
 };
 if (hail === true) {
  hail = false;
  alert("あられが降り始めた！");
  weather = "hail";
  weatherpt = 0;
 };
 if (phycho === true) {
  phycho = false;
  alert("サイコフィールドが広がった！");
  field = "phycho";
  fieldpt = 0;
 };
 if (elec === true) {
  elec = false;
  alert("エレキフィールドが広がった！");
  field = "elec";
  fieldpt = 0;
 };
 if (mist === true) {
  mist = false;
  alert("ミストフィールドが広がった！");
  field = "mist";
  fieldpt = 0;
 };
 if (grass === true) {
  grass = false;
  alert("グラスフィールドが広がった！");
  field = "grass";
  fieldpt = 0;
 };
 if (skyoff2 === true) {
  skyoff2 = false;
  PM[ID2].bodytype2 = "ひこう";
 };
 if (vision2 === true) {
  if (illusion2 === false) {
   vision2 = false;
   alert("ゾロアークの変身が解けた！");
   Fdp21.style.visibility = "hidden";
   Fdp22.style.visibility = "hidden";
   PN2 = PM[ID2].name;
   name2.innerHTML = PN2;
   PK2.src = PM[ID2].img2;
   setTimeout(testfor2,100);
  } else {
   illusion2 = false;
   Fdp21.style.visibility = "visible";
   Fdp22.style.visibility = "visible";
   setTimeout(testfor2,100);
  };
 } else {
  if (PM[ID2].HP <= 0) {
   alert(Pnameon2 + "の" + PN2 + "は倒れた…。");
   if (PM[ID2].MAX === true) {
    PM[ID2].MAX = false;
    PK2.style.width = 200;
    PM[ID2].MHP = PM[ID2].MHP / 2;
    MHPdp2.innerHTML = PM[ID2].MHP;
    dps2.style.backgroundColor = "#F9F9F6";
   };
   changer2 = false;
   reaction2 = false;
   PK2.style.visibility = "hidden";
   MA2.style.visibility = "hidden";
   dies2 += 1;
   if (dies2 === diept2) {
    alert(Pnameon1 + "は" + Pnameon2 + "に勝った！");
    audio.stop();
   } else {
    down2 = true;
    changeopen2();
   };
  } else {
   if (reaction2 === true) {
    reaction2 = false;
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
    if (first === true) {
     first = false;
     last();
    } else {
     if (suicide1 === true) {
      suicide1 = false;
      setTimeout(testfor1,200);
     } else {
      if (PM[ID2].MAX === true) {
       setTimeout(PKCOMAX2,200);
      } else {
       setTimeout(PKCO2,200);
      };
     };
    };
   };
  };
 };
}
function last() {
 if (F1 === "ぎょぐん" && PM[ID1].HP <= 30 && PM[ID1].scatter === false) {
  if (scatter === true) {
   scatter = false;
   alert("ヨワシの群れが散り散りになった！");
   PM[ID1].A = PMm.slice(ID1,(ID1 + 1))[0].A;
   PM[ID1].B = PMm.slice(ID1,(ID1 + 1))[0].B;
   PM[ID1].C = PMm.slice(ID1,(ID1 + 1))[0].C;
   PM[ID1].D = PMm.slice(ID1,(ID1 + 1))[0].D;
   PM[ID1].heavy = PMm.slice(ID1,(ID1 + 1))[0].heavy;
   PM[ID1].img1 = PMm.slice(ID1,(ID1 + 1))[0].img1;
   PK1.src = PM[ID1].img1;
   PM[ID1].scatter = true;
   Fdp11.style.visibility = "hidden";
   Fdp12.style.visibility = "hidden";
   setTimeout(last,100);
  } else {
   scatter = true;
   Fdp11.style.visibility = "visible";
   Fdp12.style.visibility = "visible";
   setTimeout(last,100);
  };
 } else {
  if (F2 === "ぎょぐん" && PM[ID2].HP <= 30 && PM[ID2].scatter === false) {
   if (scatter === true) {
    scatter = false;
    alert("ヨワシの群れが散り散りになった！");
    PM[ID2].A = PMm.slice(ID2,(ID2 + 1))[0].A;
    PM[ID2].B = PMm.slice(ID2,(ID2 + 1))[0].B;
    PM[ID2].C = PMm.slice(ID2,(ID2 + 1))[0].C;
    PM[ID2].D = PMm.slice(ID2,(ID2 + 1))[0].D;
    PM[ID2].heavy = PMm.slice(ID2,(ID2 + 1))[0].heavy;
    PM[ID2].img2 = PMm.slice(ID2,(ID2 + 1))[0].img2;
    PK2.src = PM[ID2].img2;
    PM[ID2].scatter = true;
    Fdp21.style.visibility = "hidden";
    Fdp22.style.visibility = "hidden";
    setTimeout(last,100);
   } else {
    scatter = true;
    Fdp21.style.visibility = "visible";
    Fdp22.style.visibility = "visible";
    setTimeout(last,100);
   };
  } else {
   if (windpt1 === 4) {
    alert(Pnameon1 + "側のおいかぜが止んだ");
    backwind1 = false;
    windrate1 = 1;
    windpt1 = 0;
   };
   if (windpt2 === 4) {
    alert(Pnameon2 + "側のおいかぜが止んだ");
    backwind2 = false;
    windrate2 = 1;
    windpt2 = 0;
   };
   if (unspeedpt === 5) {
    alert("時空がもとに戻った！");
    unspeed = false;
    unspeedpt = 0;
   };
   if (PM[ID1].MAX === true) {
    MAXpt1 += 1;
   };
   if (MAXpt1 === 3 && PM[ID1].MAX === true) {
    PM[ID1].MAX = false;
    PK1.src = PM[ID1].img1;
    PK1.style.width = 200;
    PM[ID1].MHP = PM[ID1].MHP / 2;
    PM[ID1].HP = Math.ceil(PM[ID1].HP / 2);
    HPdp1.innerHTML = PM[ID1].HP;
    MHPdp1.innerHTML = PM[ID1].MHP;
    dps1.style.backgroundColor = "#F9F9F6";
    skill11.style.borderColor = "#000000";
    skill12.style.borderColor = "#000000";
    skill13.style.borderColor = "#000000";
    skill14.style.borderColor = "#000000";
    skill11dp.innerHTML = skill[PM[ID1].skill1].name;
    skill12dp.innerHTML = skill[PM[ID1].skill2].name;
    skill13dp.innerHTML = skill[PM[ID1].skill3].name;
    skill14dp.innerHTML = skill[PM[ID1].skill4].name;
    skill11.style.backgroundColor = skill[PM[ID1].skill1].color;
    skill12.style.backgroundColor = skill[PM[ID1].skill2].color;
    skill13.style.backgroundColor = skill[PM[ID1].skill3].color;
    skill14.style.backgroundColor = skill[PM[ID1].skill4].color;
    setTimeout(last,500);
   } else {
    if (PM[ID2].MAX === true) {
     MAXpt2 += 1;
    };
    if (MAXpt2 === 3 && PM[ID2].MAX === true) {
     PM[ID2].MAX = false;
     PK2.src = PM[ID2].img2;
     PK2.style.width = 200;
     PM[ID2].MHP = PM[ID2].MHP / 2;
     PM[ID2].HP = Math.ceil(PM[ID2].HP / 2);
     HPdp2.innerHTML = PM[ID2].HP;
     MHPdp2.innerHTML = PM[ID2].MHP;
     dps2.style.backgroundColor = "#F9F9F6";
     skill21.style.borderColor = "#000000";
     skill22.style.borderColor = "#000000";
     skill23.style.borderColor = "#000000";
     skill24.style.borderColor = "#000000";
     skill21dp.innerHTML = skill[PM[ID2].skill1].name;
     skill22dp.innerHTML = skill[PM[ID2].skill2].name;
     skill23dp.innerHTML = skill[PM[ID2].skill3].name;
     skill24dp.innerHTML = skill[PM[ID2].skill4].name;
     skill21.style.backgroundColor = skill[PM[ID2].skill1].color;
     skill22.style.backgroundColor = skill[PM[ID2].skill2].color;
     skill23.style.backgroundColor = skill[PM[ID2].skill3].color;
     skill24.style.backgroundColor = skill[PM[ID2].skill4].color;
    };
    if (weather === "sunny" || weather === "rainy") {
     weatherpt += 1;
     if (weatherpt === 5) {
      weather = "cansel";
      weatherpt = 0;
      alert("天候がもとに戻った！");
     };
    };
    if (field === "phycho" || field === "elec" || field === "mist" || field === "grass") {
     fieldpt += 1;
     if (fieldpt === 5) {
      field = "cansel";
      fieldpt = 0;
      alert("フィールドがもとに戻った！");
     };
    };
    if (Pbarrier1 === true) {
     PBpt1 += 1;
     if (PBpt1 === 5) {
      Pbarrier1 = false;
      alert(Pnameon1 + "側のリフレクターがなくなった…。");
     };
    };
    if (Sbarrier1 === true) {
     SBpt1 += 1;
     if (SBpt1 === 5) {
      Sbarrier1 = false;
      alert(Pnameon1 + "側のひかりのかべがなくなった…。");
     };
    };
    if (Obarrier1 === true) {
     OBpt1 += 1;
     if (OBpt1 === 5) {
      Obarrier1 = false;
      alert(Pnameon1 + "側のオーロラベールがなくなった…。");
     };
    };
    if (Pbarrier2 === true) {
     PBpt2 += 1;
     if (PBpt2 === 5) {
      Pbarrier2 = false;
      alert(Pnameon2 + "側のリフレクターがなくなった…。");
     };
    };
    if (Sbarrier2 === true) {
     SBpt2 += 1;
     if (SBpt2 === 5) {
      Sbarrier2 = false;
      alert(Pnameon2 + "側のひかりのかべがなくなった…。");
     };
    };
    if (Obarrier2 === true) {
     OBpt2 += 1;
     if (OBpt2 === 5) {
      Obarrier2 = false;
      alert(Pnameon2 + "側のオーロラベールがなくなった…。");
     };
    };
    attack1.style.visibility = "visible";
    change1.style.visibility = "visible";
    changer1 = false;
    changer2 = false;
    down1 = false;
    down2 = false;
    wince1 = false;
    wince2 = false;
    snowdown1 = false;
    snowdown2 = false;
    shield1 = false;
    shield2 = false;
    MAXshield1 = false;
    MAXshield2 = false;
    firster1 = false;
    firster2 = false;
    bothchange = 0;
    first = false; 
    firsted = 0;
    pt1 = 0;
    pt2 = 0;
    dmg = 5;
    skiller = off;
   };
  };
 };
}