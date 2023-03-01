const body = document.getElementById("body");
body.style.visibility = "hidden";
const Pnameon1 = localStorage.getItem("names1");
const Pnameon2 = localStorage.getItem("names2");
const PMm = [0,1,2,3,4,5];
PMm[0] = JSON.parse(localStorage.getItem("PK1"));
PMm[1] = JSON.parse(localStorage.getItem("PK2"));
PMm[2] = JSON.parse(localStorage.getItem("PK3"));
PMm[3] = JSON.parse(localStorage.getItem("PK4"));
PMm[4] = JSON.parse(localStorage.getItem("PK5"));
PMm[5] = JSON.parse(localStorage.getItem("PK6"));
let PM = PMm.map(v => ({...v}));
let PK1;
let PK2;
let dps1;
let dps2;
let Lv1;
let Lv2;
let name1;
let name2;
let HPdp1;
let HPdp2;
let MHPdp1;
let MHPdp2;
let attack1;
let attack2;
let change1;
let change2;
let Adp1;
let Adp2;
let Cdp1;
let Cdp2;
let subPK1;
let subPK2;
let subPK3;
let subPK4;
let subPK5;
let subPK6;
let skill11;
let skill12;
let skill13;
let skill14;
let skill21;
let skill22;
let skill23;
let skill24;
let skill11dp;
let skill12dp;
let skill13dp;
let skill14dp;
let skill21dp;
let skill22dp;
let skill23dp;
let skill24dp;
let PN1;
let PKpic1;
let PKname1;
let F1;
let Fdp11;
let Fdp12;
let skiller;
let skilltype;
let bodytype1;
let bodytype2;
let bodytype11;
let bodytype12;
let bodytype21;
let bodytype22;
let PN2;
let PKpic2;
let PKname2;
let F2;
let Fdp21;
let Fdp22;
let skiller1;
let skiller2;
let healeder1;
let healeder2;
let MGdp1;
let MGdp2;
let MG1;
let MG2;
let MA1;
let MA2;
let MAXdp1;
let MAXdp2;
let MAX1;
let MAX2;
let weather;
let field;
let vitalpt = 0;
let plushit1 = 0;
let plushit2 = 0;
let dmg = 5;
let AR1 = 6;
let BR1 = 6;
let CR1 = 6;
let DR1 = 6;
let SR1 = 6;
let AR2 = 6;
let BR2 = 6;
let CR2 = 6;
let DR2 = 6;
let SR2 = 6;
let chaos = 0;
let ID1 = 10;
let ID2 = 10;
let minus = 0;
let bothchange = 0;
let firsted = 0;
let dies1 = 0;
let dies2 = 0;
let diept1 = 3;
let diept2 = 3;
let shields = 0;
let WApt = 0;
let pt1 = 0;
let pt2 = 0;
let windpt1 = 0;
let windpt2 = 0;
let healID1 = 0;
let healID2 = 0;
let windrate1 = 1;
let windrate2 = 1;
let unspeedpt = 0;
let weatherpt = 0;
let fieldpt = 0;
let MAXpt1 = 0;
let MAXpt2 = 0;
let futurehp1 = 0;
let futurehp2 = 0;
let PBpt1 = 0;
let SBpt1 = 0;
let OBpt1 = 0;
let PBpt2 = 0;
let SBpt2 = 0;
let OBpt2 = 0;
let shieldpt1 = 0;
let shieldpt2 = 0;
let attackstorage1 = false;
let attackstorage2 = false;
let changestorage1 = false;
let changestorage2 = false;
let skill1 = false;
let changer1 = false;
let skill2 = false;
let changer2 = false;
let nodmg = false;
let first = false;
let down1 = false;
let down2 = false;
let chaosdp = false;
let wince1 = false;
let wince2 = false;
let heal1 = false;
let heal2 = false;
let healdp1 = false;
let healdp2 = false;
let highhitrate = false;
let hyperhitrate = false;
let breakarmor = false;
let breakarmored1 = false;
let breakarmored2 = false;
let BA1 = false;
let BA2 = false;
let AH = false;
let afterback1 = false;
let afterback2 = false;
let heatchange = false;
let HC1 = false;
let HC2 = false;
let CR1h1 = false;
let CR1h2 = false;
let Wattack = false;
let Wattacked = false;
let clearbody = false;
let CB1 = false;
let CB2 = false;
let backwind1 = false;
let backwind2 = false;
let suicide1 = false;
let suicide2 = false;
let recoil1 = false;
let recoil2 = false;
let flying1 = false;
let flying2 = false;
let againheal1 = false;
let againheal2 = false;
let MGstart1 = false;
let MGstart2 = false;
let MGed1 = false;
let MGed2 = false;
let MAXstart1 = false;
let MAXstart2 = false;
let MAXed1 = false;
let MAXed2 = false;
let formed1 = false;
let formed2 = false;
let resist = false;
let RE1 = false;
let RE2 = false;
let transform1 = false;
let transform2 = false;
let Fdown1 = false;
let Fdown2 = false;
let startdash1 = false;
let startdash2 = false;
let unspeed = false;
let fishes1 = false;
let fishes2 = false;
let scatter = false;
let AR1five1 = false;
let AR1five2 = false;
let snowdown1 = false;
let snowdown2 = false;
let illusion1 = false;
let illusion2 = false;
let vision1 = false;
let vision2 = false;
let sturdy1 = false;
let sturdy2 = false;
let weather1 = false;
let weather2 = false;
let sunny = false;
let rainy = false;
let sandstrom = false;
let hail = false;
let field1 = false;
let field2 = false;
let phycho = false;
let elec = false;
let mist = false;
let grass = false;
let shield1 = false;
let shield2 = false;
let MAXshield1 = false;
let MAXshield2 = false;
let shielddp1 = false;
let shielddp2 = false;
let onekilloff1 = false;
let onekilloff2 = false;
let firster1 = false;
let firster2 = false;
let skyoff1 = false;
let skyoff2 = false;
let nochaos = false;
let Pbarrier1 = false;
let Pbarrier2 = false;
let Sbarrier1 = false;
let Sbarrier2 = false;
let Obarrier1 = false;
let Obarrier2 = false;
let PBed = false;
let SBed = false;
let OBed = false;
let breakPB1 = false;
let breakPB2 = false;
let breakSB1 = false;
let breakSB2 = false;
let breakOB1 = false;
let breakOB2 = false;
let PBing1 = false;
let PBing2 = false;
let SBing1 = false;
let SBing2 = false;
let OBing1 = false;
let OBing2 = false;
let reaction1 = false;
let reaction2 = false;
let outskin = false;

window.onload = function() {
 setTimeout(start1,50);
};
function start1() {
 alert("さぁ始まりましたポケモンバトル");
 alert("両者負けずに頑張りましょう！");
 PK1 = document.getElementById("PK1");
 PK2 = document.getElementById("PK2");
 dps1 = document.getElementById("dp1");
 dps2 = document.getElementById("dp2");
 Lv1 = document.getElementById("Lv1");
 Lv2 = document.getElementById("Lv2");
 name1 = document.getElementById("name1");
 name2 = document.getElementById("name2");
 HPdp1 = document.getElementById("HP1");
 HPdp2 = document.getElementById("HP2");
 MHPdp1 = document.getElementById("MHP1");
 MHPdp2 = document.getElementById("MHP2");
 attack1 = document.getElementById("attack1");
 attack2 = document.getElementById("attack2");
 change1 = document.getElementById("change1");
 change2 = document.getElementById("change2");
 Adp1 = document.getElementById("Adp1");
 Adp2 = document.getElementById("Adp2");
 Cdp1 = document.getElementById("Cdp1");
 Cdp2 = document.getElementById("Cdp2");
 skill11 = document.getElementById("skill11");
 skill12 = document.getElementById("skill12");
 skill13 = document.getElementById("skill13");
 skill14 = document.getElementById("skill14");
 skill21 = document.getElementById("skill21");
 skill22 = document.getElementById("skill22");
 skill23 = document.getElementById("skill23");
 skill24 = document.getElementById("skill24");
 skill11dp = document.getElementById("skill11dp");
 skill12dp = document.getElementById("skill12dp");
 skill13dp = document.getElementById("skill13dp");
 skill14dp = document.getElementById("skill14dp");
 skill21dp = document.getElementById("skill21dp");
 skill22dp = document.getElementById("skill22dp");
 skill23dp = document.getElementById("skill23dp");
 skill24dp = document.getElementById("skill24dp");
 subPK1 = document.getElementById("subPK1");
 subPK2 = document.getElementById("subPK2");
 subPK3 = document.getElementById("subPK3");
 subPK4 = document.getElementById("subPK4");
 subPK5 = document.getElementById("subPK5");
 subPK6 = document.getElementById("subPK6");
 Fdp11 = document.getElementById("Fdp11");
 Fdp12 = document.getElementById("Fdp12");
 Fdp21 = document.getElementById("Fdp21");
 Fdp22 = document.getElementById("Fdp22");
 MGdp1 = document.getElementById("MGdp1");
 MGdp2 = document.getElementById("MGdp2");
 MG1 = document.getElementById("MG1");
 MG2 = document.getElementById("MG2");
 MA1 = document.getElementById("MA1");
 MA2 = document.getElementById("MA2");
 MAXdp1 = document.getElementById("MAXdp1");
 MAXdp2 = document.getElementById("MAXdp2");
 MAX1 = document.getElementById("MAX1");
 MAX2 = document.getElementById("MAX2");
 MGdp1.style.visibility = "hidden";
 MGdp2.style.visibility = "hidden";
 MAXdp1.style.visibility = "hidden";
 MAXdp2.style.visibility = "hidden";
 PK1.style.width = 200;
 PK1.src = PM[0].img1;
 PK2.style.width = 200;
 PK2.src = PM[3].img2;
 Lv1.innerHTML = PM[0].level;
 Lv2.innerHTML = PM[3].level;
 name1.innerHTML = PM[0].name;
 PN1 = PM[0].name;
 name2.innerHTML = PM[3].name;
 PN2 = PM[3].name;
 HPdp1.innerHTML = PM[0].HP;
 HPdp2.innerHTML = PM[3].HP;
 MHPdp1.innerHTML = PM[0].MHP;
 MHPdp2.innerHTML = PM[3].MHP;
 subPK1.style.width = 150;
 subPK2.style.width = 150;
 subPK3.style.width = 150;
 subPK4.style.width = 150;
 subPK5.style.width = 150;
 subPK6.style.width = 150;
 subPK1.src = PM[0].img;
 subPK2.src = PM[1].img;
 subPK3.src = PM[2].img;
 subPK4.src = PM[3].img;
 subPK5.src = PM[4].img;
 subPK6.src = PM[5].img;
 Fdp11.style.visibility = "hidden";
 Fdp12.style.visibility = "hidden";
 Fdp21.style.visibility = "hidden";
 Fdp22.style.visibility = "hidden";
 MA1.style.visibility = "hidden";
 MA2.style.visibility = "hidden";
 ID1 = 0;
 F1 = PM[0].F;
 Fdp11.innerHTML = PM[0].name + "の";
 Fdp12.innerHTML = PM[0].F;
 ID2 = 3;
 F2 = PM[3].F;
 Fdp21.innerHTML = PM[3].name + "の";
 Fdp22.innerHTML = PM[3].F;
 skill11dp.innerHTML = skill[PM[0].skill1].name;
 skill12dp.innerHTML = skill[PM[0].skill2].name;
 skill13dp.innerHTML = skill[PM[0].skill3].name;
 skill14dp.innerHTML = skill[PM[0].skill4].name;
 skill21dp.innerHTML = skill[PM[3].skill1].name;
 skill22dp.innerHTML = skill[PM[3].skill2].name;
 skill23dp.innerHTML = skill[PM[3].skill3].name;
 skill24dp.innerHTML = skill[PM[3].skill4].name;
 skill11.style.backgroundColor = skill[PM[0].skill1].color;
 skill12.style.backgroundColor = skill[PM[0].skill2].color;
 skill13.style.backgroundColor = skill[PM[0].skill3].color;
 skill14.style.backgroundColor = skill[PM[0].skill4].color;
 skill21.style.backgroundColor = skill[PM[3].skill1].color;
 skill22.style.backgroundColor = skill[PM[3].skill2].color;
 skill23.style.backgroundColor = skill[PM[3].skill3].color;
 skill24.style.backgroundColor = skill[PM[3].skill4].color;
 skillclose1();
 skillclose2();
 changeclose1();
 changeclose2();
 PK1.style.visibility = "hidden";
 PK2.style.visibility = "hidden";
 attack1.style.visibility = "hidden";
 change1.style.visibility = "hidden";
 attack2.style.visibility = "hidden";
 change2.style.visibility = "hidden";
 dps1.style.visibility = "hidden";
 dps2.style.visibility = "hidden";
 dps1.style.backgroundColor = "#F9F9F6";
 dps2.style.backgroundColor = "#F9F9F6";
 setTimeout(start2,100);
 attack1.onclick = function() {
  if (attackstorage1 === true) {
   attackstorage1 = false;
   Adp1.innerHTML = "たたかう";
   change1.style.visibility = "visible";
   MG1.src = "../ポケモンクエスト画像/メガシンカ1.png";
   MGstart1 = false;
   MAX1.src = "../ポケモンクエスト画像/ダイマックス1.png";
   MAXstart1 = false;
   if (PM[ID1].MAX !== true) {
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
   };
   skillclose1();
   changeclose1();
  } else {
   attackstorage1 = true;
   Adp1.innerHTML = "戻る";
   change1.style.visibility = "hidden";
   skillopen1();
  };
 };
 attack2.onclick = function() {
  if (attackstorage2 === true) {
   attackstorage2 = false;
   Adp2.innerHTML = "たたかう";
   change2.style.visibility = "visible";
   MG2.src = "../ポケモンクエスト画像/メガシンカ1.png";
   MGstart2 = false;
   MAX2.src = "../ポケモンクエスト画像/ダイマックス1.png";
   MAXstart2 = false;
   if (PM[ID2].MAX !== true) {
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
   skillclose2();
   changeclose2();
  } else {
   attackstorage2 = true;
   Adp2.innerHTML = "戻る";
   change2.style.visibility = "hidden";
   skillopen2();
  };
 };
 change1.onclick = function() {
  if (changestorage1 === true) {
   changestorage1 = false;
   Cdp1.innerHTML = "ポケモン";
   attack1.style.visibility = "visible";
   changeclose1();
  } else {
   changestorage1 = true;
   Cdp1.innerHTML = "戻る";
   attack1.style.visibility = "hidden";
   changeopen1();
  };
 };
 change2.onclick = function() {
  if (changestorage2 === true) {
   changestorage2 = false;
   Cdp2.innerHTML = "ポケモン";
   attack2.style.visibility = "visible";
   changeclose2();
  } else {
   changestorage2 = true;
   Cdp2.innerHTML = "戻る";
   attack2.style.visibility = "hidden";
   changeopen2();
  };
 };
 skill11.onclick = function() {
  if (PM[ID1].MAX === true || MAXstart1 === true) {
   skiller1 = MAXskill[PM[ID1].MAXskill1];
   skiller1.direct = skill[PM[ID1].skill1].direct;
   if (skill[PM[ID1].skill1].type === "change" && skill[PM[ID1].skill1].onekill !== true) {
    skiller1.type = "change";
   } else {
    if (skill[PM[ID1].skill1].type === "special" || skill[PM[ID1].skill1].type === "assist") {
     skiller1.type = "special";
    } else {
     skiller1.type = "physics";
    };
   };
   if (skill[PM[ID1].skill1].power <= 40) {
    skiller1.power = 90;
   } else {
    if (skill[PM[ID1].skill1].power <= 50) {
     skiller1.power = 100;
    } else {
     if (skill[PM[ID1].skill1].power <= 60) {
      skiller1.power = 110;
     } else {
      if (skill[PM[ID1].skill1].power <= 70) {
       skiller1.power = 120;
      } else {
       if (skill[PM[ID1].skill1].power <= 100) {
        skiller1.power = 130;
       } else {
        if (skill[PM[ID1].skill1].power <= 140) {
         skiller1.power = 140;
        } else {
         skiller1.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller1 = skill[PM[ID1].skill1];
  };
  if (recoil1 === true || (PM[ID1].heal === 0 && (skiller1.name === "じこさいせい" || skiller1.name === "はねやすめ"))) {
   alert("その技は使えないよ");
  } else {
   attackstorage1 = false;
   attack2.style.visibility = "visible";
   change2.style.visibility = "visible";
   Adp1.innerHTML = "たたかう";
   attack1.style.visibility = "hidden";
   change1.style.visibility = "hidden";
   skillclose1();
  };
 };
 skill12.onclick = function() {
  if (PM[ID1].MAX === true || MAXstart1 === true) {
   skiller1 = MAXskill[PM[ID1].MAXskill2];
   skiller1.direct = skill[PM[ID1].skill2].direct;
   if (skill[PM[ID1].skill2].type === "change" && skill[PM[ID1].skill2].onekill !== true) {
    skiller1.type = "change";
   } else {
    if (skill[PM[ID2].skill2].type === "special" || skill[PM[ID1].skill2].type === "assist") {
     skiller1.type = "special";
    } else {
     skiller1.type = "physics";
    };
   };
   if (skill[PM[ID1].skill2].power <= 40) {
    skiller1.power = 90;
   } else {
    if (skill[PM[ID1].skill2].power <= 50) {
     skiller1.power = 100;
    } else {
     if (skill[PM[ID1].skill2].power <= 60) {
      skiller1.power = 110;
     } else {
      if (skill[PM[ID1].skill2].power <= 70) {
       skiller1.power = 120;
      } else {
       if (skill[PM[ID1].skill2].power <= 100) {
        skiller1.power = 130;
       } else {
        if (skill[PM[ID1].skill2].power <= 140) {
         skiller1.power = 140;
        } else {
         skiller1.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller1 = skill[PM[ID1].skill2];
  };
  if (PM[ID1].heal === 0 && (skiller1.name === "じこさいせい" || skiller1.name === "はねやすめ")) {
   alert("その技は使えないよ");
  } else {
   attackstorage1 = false;
   attack2.style.visibility = "visible";
   change2.style.visibility = "visible";
   Adp1.innerHTML = "たたかう";
   attack1.style.visibility = "hidden";
   change1.style.visibility = "hidden";
   skillclose1();
  };
 };
 skill13.onclick = function() {
  if (PM[ID1].MAX === true || MAXstart1 === true) {
   skiller1 = MAXskill[PM[ID1].MAXskill3];
   skiller1.direct = skill[PM[ID1].skill3].direct;
   if (skill[PM[ID1].skill3].type === "change" && skill[PM[ID1].skill3].onekill !== true) {
    skiller1.type = "change";
   } else {
    if (skill[PM[ID1].skill3].type === "special" || skill[PM[ID1].skill3].type === "assist") {
     skiller1.type = "special";
    } else {
     skiller1.type = "physics";
    };
   };
   if (skill[PM[ID1].skill3].power <= 40) {
    skiller1.power = 90;
   } else {
    if (skill[PM[ID1].skill3].power <= 50) {
     skiller1.power = 100;
    } else {
     if (skill[PM[ID1].skill3].power <= 60) {
      skiller1.power = 110;
     } else {
      if (skill[PM[ID1].skill3].power <= 70) {
       skiller1.power = 120;
      } else {
       if (skill[PM[ID1].skill3].power <= 100) {
        skiller1.power = 130;
       } else {
        if (skill[PM[ID1].skill3].power <= 140) {
         skiller1.power = 140;
        } else {
         skiller1.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller1 = skill[PM[ID1].skill3];
  };
  if (PM[ID1].heal === 0 && (skiller1.name === "じこさいせい" || skiller1.name === "はねやすめ")) {
   alert("その技は使えないよ");
  } else {
   attackstorage1 = false;
   attack2.style.visibility = "visible";
   change2.style.visibility = "visible";
   Adp1.innerHTML = "たたかう";
   attack1.style.visibility = "hidden";
   change1.style.visibility = "hidden";
   skillclose1();
  };
 };
 skill14.onclick = function() {
  if (PM[ID1].MAX === true || MAXstart1 === true) {
   skiller1 = MAXskill[PM[ID1].MAXskill4];
   skiller1.direct = skill[PM[ID1].skill4].direct;
   if (skill[PM[ID1].skill4].type === "change" && skill[PM[ID1].skill4].onekill !== true) {
    skiller1.type = "change";
   } else {
    if (skill[PM[ID1].skill4].type === "special" || skill[PM[ID1].skill4].type === "assist") {
     skiller1.type = "special";
    } else {
     skiller1.type = "physics";
    };
   };
   if (skill[PM[ID1].skill4].power <= 40) {
    skiller1.power = 90;
   } else {
    if (skill[PM[ID1].skill4].power <= 50) {
     skiller1.power = 100;
    } else {
     if (skill[PM[ID1].skill4].power <= 60) {
      skiller1.power = 110;
     } else {
      if (skill[PM[ID1].skill4].power <= 70) {
       skiller1.power = 120;
      } else {
       if (skill[PM[ID1].skill4].power <= 100) {
        skiller1.power = 130;
       } else {
        if (skill[PM[ID1].skill4].power <= 140) {
         skiller1.power = 140;
        } else {
         skiller1.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller1 = skill[PM[ID1].skill4];
  };
  if (PM[ID1].heal === 0 && (skiller1.name === "じこさいせい" || skiller1.name === "はねやすめ") || (PM[ID1].healout === true && skiller1.name === "さいきのいのり")) {
   alert("その技は使えないよ");
  } else {
   if (skiller1.name === "さいきのいのり") {
    againheal1 = true;
    change1.style.visibility = "hidden";
    changeopen1();
    skillclose1();
   } else {
    attackstorage1 = false;
    attack2.style.visibility = "visible";
    change2.style.visibility = "visible";
    Adp1.innerHTML = "たたかう";
    attack1.style.visibility = "hidden";
    change1.style.visibility = "hidden";
    skillclose1();
   };
  };
 };
 skill21.onclick = function() {
  if (PM[ID2].MAX === true || MAXstart2 === true) {
   skiller2 = MAXskill[PM[ID2].MAXskill1];
   skiller2.direct = skill[PM[ID2].skill1].direct;
   if (skill[PM[ID2].skill1].type === "change" && skill[PM[ID2].skill1].onekill !== true) {
    skiller2.type = "change";
   } else {
    if (skill[PM[ID2].skill1].type === "special" || skill[PM[ID2].skill1].type === "assist") {
     skiller2.type = "special";
    } else {
     skiller2.type = "physics";
    };
   };
   if (skill[PM[ID2].skill1].power <= 40) {
    skiller2.power = 90;
   } else {
    if (skill[PM[ID2].skill1].power <= 50) {
     skiller2.power = 100;
    } else {
     if (skill[PM[ID2].skill1].power <= 60) {
      skiller2.power = 110;
     } else {
      if (skill[PM[ID2].skill1].power <= 70) {
       skiller2.power = 120;
      } else {
       if (skill[PM[ID2].skill1].power <= 100) {
        skiller2.power = 130;
       } else {
        if (skill[PM[ID2].skill1].power <= 140) {
         skiller2.power = 140;
        } else {
         skiller2.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller2 = skill[PM[ID2].skill1];
  };
  if (recoil2 === true || (PM[ID2].heal === 0 && (skiller2.name === "じこさいせい" || skiller2.name === "はねやすめ"))) {
   alert("その技は使えないよ");
  } else {
   attackstorage2 = false;
   Adp2.innerHTML = "たたかう";
   attack2.style.visibility = "hidden";
   change2.style.visibility = "hidden";
   skillclose2();
   setTimeout(test1,200);
  };
 };
 skill22.onclick = function() {
  if (PM[ID2].MAX === true || MAXstart2 === true) {
   skiller2 = MAXskill[PM[ID2].MAXskill2];
   skiller2.direct = skill[PM[ID2].skill2].direct;
   if (skill[PM[ID2].skill2].type === "change" && skill[PM[ID2].skill2].onekill !== true) {
    skiller2.type = "change";
   } else {
    if (skill[PM[ID2].skill2].type === "special" || skill[PM[ID2].skill2].type === "assist") {
     skiller2.type = "special";
    } else {
     skiller2.type = "physics";
    };
   };
   if (skill[PM[ID2].skill2].power <= 40) {
    skiller2.power = 90;
   } else {
    if (skill[PM[ID2].skill2].power <= 50) {
     skiller2.power = 100;
    } else {
     if (skill[PM[ID2].skill2].power <= 60) {
      skiller2.power = 110;
     } else {
      if (skill[PM[ID2].skill2].power <= 70) {
       skiller2.power = 120;
      } else {
       if (skill[PM[ID2].skill2].power <= 100) {
        skiller2.power = 130;
       } else {
        if (skill[PM[ID2].skill2].power <= 140) {
         skiller2.power = 140;
        } else {
         skiller2.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller2 = skill[PM[ID2].skill2];
  };
  if (PM[ID2].heal === 0 && (skiller2.name === "じこさいせい" || skiller2.name === "はねやすめ")) {
   alert("その技は使えないよ");
  } else {
   attackstorage2 = false;
   Adp2.innerHTML = "たたかう";
   attack2.style.visibility = "hidden";
   change2.style.visibility = "hidden";
   skillclose2();
   setTimeout(test1,200);
  };
 };
 skill23.onclick = function() {
  if (PM[ID2].MAX === true || MAXstart2 === true) {
   skiller2 = MAXskill[PM[ID2].MAXskill3];
   if (skill[PM[ID2].skill3].type === "change" && skill[PM[ID2].skill3].onekill !== true) {
    skiller2.type = "change";
   } else {
    if (skill[PM[ID2].skill3].type === "special" || skill[PM[ID2].skill3].type === "assist") {
     skiller2.type = "special";
    } else {
     skiller2.type = "physics";
    };
   };
   if (skill[PM[ID2].skill3].power <= 40) {
    skiller2.power = 90;
   } else {
    if (skill[PM[ID2].skill3].power <= 50) {
     skiller2.power = 100;
    } else {
     if (skill[PM[ID2].skill3].power <= 60) {
      skiller2.power = 110;
     } else {
      if (skill[PM[ID2].skill3].power <= 70) {
       skiller2.power = 120;
      } else {
       if (skill[PM[ID2].skill3].power <= 100) {
        skiller2.power = 130;
       } else {
        if (skill[PM[ID2].skill3].power <= 140) {
         skiller2.power = 140;
        } else {
         skiller2.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller2 = skill[PM[ID2].skill3];
  };
  if (PM[ID2].heal === 0 && (skiller2.name === "じこさいせい" || skiller2.name === "はねやすめ")) {
   alert("その技は使えないよ");
  } else {
   attackstorage2 = false;
   Adp2.innerHTML = "たたかう";
   attack2.style.visibility = "hidden";
   change2.style.visibility = "hidden";
   skillclose2();
   setTimeout(test1,200);
  };
 };
 skill24.onclick = function() {
  if (PM[ID2].MAX === true || MAXstart2 === true) {
   skiller2 = MAXskill[PM[ID2].MAXskill4];
   skiller2.direct = skill[PM[ID2].skill4].direct;
   if (skill[PM[ID2].skill4].type === "change" && skill[PM[ID2].skill4].onekill !== true) {
    skiller2.type = "change";
   } else {
    if (skill[PM[ID2].skill4].type === "special" || skill[PM[ID2].skill4].type === "assist") {
     skiller2.type = "special";
    } else {
     skiller2.type = "physics";
    };
   };
   if (skill[PM[ID2].skill4].power <= 40) {
    skiller2.power = 90;
   } else {
    if (skill[PM[ID2].skill4].power <= 50) {
     skiller2.power = 100;
    } else {
     if (skill[PM[ID2].skill4].power <= 60) {
      skiller2.power = 110;
     } else {
      if (skill[PM[ID2].skill4].power <= 70) {
       skiller2.power = 120;
      } else {
       if (skill[PM[ID2].skill4].power <= 100) {
        skiller2.power = 130;
       } else {
        if (skill[PM[ID2].skill4].power <= 140) {
         skiller2.power = 140;
        } else {
         skiller2.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller2 = skill[PM[ID2].skill4];
  };
  if (PM[ID2].heal === 0 && (skiller2.name === "じこさいせい" || skiller2.name === "はねやすめ") || (PM[ID2].healout === true && skiller2.name === "さいきのいのり")) {
   alert("その技は使えないよ");
  } else {
   if (skiller2.name === "さいきのいのり") {
    againheal2 = true;
    change2.style.visibility = "hidden";
    changeopen2();
    skillclose2();
   } else {
    attackstorage2 = false;
    Adp2.innerHTML = "たたかう";
    attack2.style.visibility = "hidden";
    change2.style.visibility = "hidden";
    skillclose2();
    setTimeout(test1,200);
   };
  };
 };
 MGdp1.onclick = function() {
  if (MGstart1 === false) {
   MG1.src = "../ポケモンクエスト画像/メガシンカ2.png";
   MGstart1 = true;
  } else {
   MG1.src = "../ポケモンクエスト画像/メガシンカ1.png";
   MGstart1 = false;
  };
 };
 MGdp2.onclick = function() {
  if (MGstart2 === false) {
   MG2.src = "../ポケモンクエスト画像/メガシンカ2.png";
   MGstart2 = true;
  } else {
   MG2.src = "../ポケモンクエスト画像/メガシンカ1.png";
   MGstart2 = false;
  };
 };
 MAXdp1.onclick = function() {
  if (MAXstart1 === false) {
   MAX1.src = "../ポケモンクエスト画像/ダイマックス2.png";
   MAXstart1 = true;
   skill11.style.borderColor = "#FF407F";
   skill12.style.borderColor = "#FF407F";
   skill13.style.borderColor = "#FF407F";
   skill14.style.borderColor = "#FF407F";
   skill11dp.innerHTML = MAXskill[PM[ID1].MAXskill1].name;
   skill12dp.innerHTML = MAXskill[PM[ID1].MAXskill2].name;
   skill13dp.innerHTML = MAXskill[PM[ID1].MAXskill3].name;
   skill14dp.innerHTML = MAXskill[PM[ID1].MAXskill4].name;
   skill11.style.backgroundColor = MAXskill[PM[ID1].MAXskill1].color;
   skill12.style.backgroundColor = MAXskill[PM[ID1].MAXskill2].color;
   skill13.style.backgroundColor = MAXskill[PM[ID1].MAXskill3].color;
   skill14.style.backgroundColor = MAXskill[PM[ID1].MAXskill4].color;
  } else {
   MAX1.src = "../ポケモンクエスト画像/ダイマックス1.png";
   MAXstart1 = false;
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
  };
 };
 MAXdp2.onclick = function() {
  if (MAXstart2 === false) {
   MAX2.src = "../ポケモンクエスト画像/ダイマックス2.png";
   MAXstart2 = true;
   skill21.style.borderColor = "#FF407F";
   skill22.style.borderColor = "#FF407F";
   skill23.style.borderColor = "#FF407F";
   skill24.style.borderColor = "#FF407F";
   skill21dp.innerHTML = MAXskill[PM[ID2].MAXskill1].name;
   skill22dp.innerHTML = MAXskill[PM[ID2].MAXskill2].name;
   skill23dp.innerHTML = MAXskill[PM[ID2].MAXskill3].name;
   skill24dp.innerHTML = MAXskill[PM[ID2].MAXskill4].name;
   skill21.style.backgroundColor = MAXskill[PM[ID2].MAXskill1].color;
   skill22.style.backgroundColor = MAXskill[PM[ID2].MAXskill2].color;
   skill23.style.backgroundColor = MAXskill[PM[ID2].MAXskill3].color;
   skill24.style.backgroundColor = MAXskill[PM[ID2].MAXskill4].color;
  } else {
   MAX2.src = "../ポケモンクエスト画像/ダイマックス1.png";
   MAXstart2 = false;
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
 };
 subPK1.onclick = function() {
  if (PM[0].HP <= 0) {
   if (againheal1 === true) {
    againheal1 = false;
    attackstorage1 = false;
    attack2.style.visibility = "visible";
    change2.style.visibility = "visible";
    Adp1.innerHTML = "たたかう";
    attack1.style.visibility = "hidden";
    healID1 = 0;
    changeclose1();
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down1 === true) {
    if (formed1 === true) {
     formed1 = false;
     PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
     PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
    };
    if (PM[ID1].mega === true) {
     PM[ID1].mega = false;
     PM[ID1].MHP = PMm.slice(ID1,(ID1 + 1))[0].MHP;
     PM[ID1].A = PMm.slice(ID1,(ID1 + 1))[0].A;
     PM[ID1].B = PMm.slice(ID1,(ID1 + 1))[0].B;
     PM[ID1].C = PMm.slice(ID1,(ID1 + 1))[0].C;
     PM[ID1].D = PMm.slice(ID1,(ID1 + 1))[0].D;
     PM[ID1].S = PMm.slice(ID1,(ID1 + 1))[0].S;
     PM[ID1].F = PMm.slice(ID1,(ID1 + 1))[0].F;
     PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
     PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
     PM[ID1].heavy = PMm.slice(ID1,(ID1 + 1))[0].heavy;
     PM[ID1].img1 = PMm.slice(ID1,(ID1 + 1))[0].img1;
    };
    ID1 = 0;
    F1 = PM[ID1].F;
    if (F1 === "イリュージョン") {
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
    changeclose1();
    changing1();
   } else {
    if (againheal1 === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let change = confirm(PM[0].name + "に入れ替えますか?");
     if (change === true) {
      if (ID1 !== 0) {
       if (formed1 === true) {
        formed1 = false;
        PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
        PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
       };
       if (PM[ID1].F === "さいせいりょく") {
        PM[ID1].HP += Math.floor(PM[ID1].MHP / 3);
        if (PM[ID1].HP > PM[ID1].MHP) {
         PM[ID1].HP = PM[ID1].MHP;
        };
       };
       if (PM[ID1].MAX === true) {
        PM[ID1].MAX = false;
        PM[ID1].MHP = PM[ID1].MHP / 2;
        PM[ID1].HP = Math.ceil(PM[ID1].HP / 2);
       };
       ID1 = 0;
       F1 = PM[ID1].F;
       changer1 = true;
       changestorage1 = false;
       skiller1 = skill[25].name;
       bothchange += 1;
       attack2.style.visibility = "visible";
       change2.style.visibility = "visible";
       Cdp1.innerHTML = "ポケモン";
       change1.style.visibility = "hidden";
       changeclose1();
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK2.onclick = function() {
  if (PM[1].HP <= 0) {
   if (againheal1 === true) {
    againheal1 = false;
    attackstorage1 = false;
    attack2.style.visibility = "visible";
    change2.style.visibility = "visible";
    Adp1.innerHTML = "たたかう";
    attack1.style.visibility = "hidden";
    healID1 = 1;
    changeclose1();
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down1 === true) {
    if (formed1 === true) {
     formed1 = false;
     PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
     PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
    };
    if (PM[ID1].mega === true) {
     PM[ID1].mega = false;
     PM[ID1].MHP = PMm.slice(ID1,(ID1 + 1))[0].MHP;
     PM[ID1].A = PMm.slice(ID1,(ID1 + 1))[0].A;
     PM[ID1].B = PMm.slice(ID1,(ID1 + 1))[0].B;
     PM[ID1].C = PMm.slice(ID1,(ID1 + 1))[0].C;
     PM[ID1].D = PMm.slice(ID1,(ID1 + 1))[0].D;
     PM[ID1].S = PMm.slice(ID1,(ID1 + 1))[0].S;
     PM[ID1].F = PMm.slice(ID1,(ID1 + 1))[0].F;
     PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
     PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
     PM[ID1].heavy = PMm.slice(ID1,(ID1 + 1))[0].heavy;
     PM[ID1].img1 = PMm.slice(ID1,(ID1 + 1))[0].img1;
    };
    ID1 = 1;
    F1 = PM[ID1].F;
    if (F1 === "イリュージョン") {
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
    changeclose1();
    changing1();
   } else {
    if (againheal1 === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let change = confirm(PM[1].name + "に入れ替えますか?");
     if (change === true) {
      if (ID1 !== 1) {
       if (formed1 === true) {
        formed1 = false;
        PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
        PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
       };
       if (PM[ID1].F === "さいせいりょく") {
        PM[ID1].HP += Math.floor(PM[ID1].MHP / 3);
        if (PM[ID1].HP > PM[ID1].MHP) {
         PM[ID1].HP = PM[ID1].MHP;
        };
       };
       if (PM[ID1].MAX === true) {
        PM[ID1].MAX = false;
        PM[ID1].MHP = PM[ID1].MHP / 2;
        PM[ID1].HP = Math.ceil(PM[ID1].HP / 2);
       };
       ID1 = 1;
       F1 = PM[ID1].F;
       changer1 = true;
       changestorage1 = false;
       skiller1 = skill[25].name;
       bothchange += 1;
       attack2.style.visibility = "visible";
       change2.style.visibility = "visible";
       Cdp1.innerHTML = "ポケモン";
       change1.style.visibility = "hidden";
       changeclose1();
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK3.onclick = function() {
  if (PM[2].HP <= 0) {
   if (againheal1 === true) {
    againheal1 = false;
    attackstorage1 = false;
    attack2.style.visibility = "visible";
    change2.style.visibility = "visible";
    Adp1.innerHTML = "たたかう";
    attack1.style.visibility = "hidden";
    healID1 = 2;
    changeclose1();
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down1 === true) {
    if (formed1 === true) {
     formed1 = false;
     PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
     PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
    };
    if (PM[ID1].mega === true) {
     PM[ID1].mega = false;
     PM[ID1].MHP = PMm.slice(ID1,(ID1 + 1))[0].MHP;
     PM[ID1].A = PMm.slice(ID1,(ID1 + 1))[0].A;
     PM[ID1].B = PMm.slice(ID1,(ID1 + 1))[0].B;
     PM[ID1].C = PMm.slice(ID1,(ID1 + 1))[0].C;
     PM[ID1].D = PMm.slice(ID1,(ID1 + 1))[0].D;
     PM[ID1].S = PMm.slice(ID1,(ID1 + 1))[0].S;
     PM[ID1].F = PMm.slice(ID1,(ID1 + 1))[0].F;
     PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
     PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
     PM[ID1].heavy = PMm.slice(ID1,(ID1 + 1))[0].heavy;
     PM[ID1].img1 = PMm.slice(ID1,(ID1 + 1))[0].img1;
    };
    ID1 = 2;
    F1 = PM[ID1].F;
    PN1 = PM[ID1].name;
    PKpic1 = PM[ID1].img1;
    changeclose1();
    changing1();
   } else {
    if (againheal1 === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
　   let change = confirm(PM[2].name + "に入れ替えますか?");
     if (change === true) {
      if (ID1 !== 2) {
       if (formed1 === true) {
        formed1 = false;
        PM[ID1].bodytype1 = PMm.slice(ID1,(ID1 + 1))[0].bodytype1;
        PM[ID1].bodytype2 = PMm.slice(ID1,(ID1 + 1))[0].bodytype2;
       };
       if (PM[ID1].F === "さいせいりょく") {
        PM[ID1].HP += Math.floor(PM[ID1].MHP / 3);
        if (PM[ID1].HP > PM[ID1].MHP) {
         PM[ID1].HP = PM[ID1].MHP;
        };
       };
       if (PM[ID1].MAX === true) {
        PM[ID1].MAX = false;
        PM[ID1].MHP = PM[ID1].MHP / 2;
        PM[ID1].HP = Math.ceil(PM[ID1].HP / 2);
       };
       ID1 = 2;
       F1 = PM[ID1].F;
       changer1 = true;
       changestorage1 = false;
       skiller1 = skill[25].name;
       bothchange += 1;
       attack2.style.visibility = "visible";
       change2.style.visibility = "visible";
       Cdp1.innerHTML = "ポケモン";
       change1.style.visibility = "hidden";
       changeclose1();
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK4.onclick = function() {
  if (PM[3].HP <= 0) {
   if (againheal2 === true) {
    againheal2 = false;
    attackstorage2 = false;
    Adp2.innerHTML = "たたかう";
    attack2.style.visibility = "hidden";
    healID2 = 3;
    changeclose2();
    setTimeout(test1,200);
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down2 === true) {
    if (formed2 === true) {
     formed2 = false;
     PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
     PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
    };
    if (PM[ID2].mega === true) {
     PM[ID2].mega = false;
     PM[ID2].MHP = PMm.slice(ID2,(ID2 + 1))[0].MHP;
     PM[ID2].A = PMm.slice(ID2,(ID2 + 1))[0].A;
     PM[ID2].B = PMm.slice(ID2,(ID2 + 1))[0].B;
     PM[ID2].C = PMm.slice(ID2,(ID2 + 1))[0].C;
     PM[ID2].D = PMm.slice(ID2,(ID2 + 1))[0].D;
     PM[ID2].S = PMm.slice(ID2,(ID2 + 1))[0].S;
     PM[ID2].F = PMm.slice(ID2,(ID2 + 1))[0].F;
     PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
     PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
     PM[ID2].heavy = PMm.slice(ID2,(ID2 + 1))[0].heavy;
     PM[ID2].img2 = PMm.slice(ID2,(ID2 + 1))[0].img2;
    };
    ID2 = 3;
    F2 = PM[ID2].F;
    if (F2 === "イリュージョン") {
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
    changeclose2();
    changing2();
   } else {
    if (againheal2 === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let change = confirm(PM[3].name + "に入れ替えますか?");
     if (change === true) {
      if (ID2 !== 3) {
       if (formed2 === true) {
        formed2 = false;
        PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
        PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
       };
       if (PM[ID2].F === "さいせいりょく") {
        PM[ID2].HP += Math.floor(PM[ID2].MHP / 3);
        if (PM[ID2].HP > PM[ID2].MHP) {
         PM[ID2].HP = PM[ID2].MHP;
        };
       };
       if (PM[ID2].MAX === true) {
        PM[ID2].MAX = false;
        PM[ID2].MHP = PM[ID2].MHP / 2;
        PM[ID2].HP = Math.ceil(PM[ID2].HP / 2);
       };
       ID2 = 3;
       F2 = PM[ID2].F;
       changer2 = true;
       changestorage2 = false;
       skiller2 = skill[25].name;
       bothchange += 1;
       Cdp2.innerHTML = "ポケモン";
       change2.style.visibility = "hidden";
       changeclose2();
       setTimeout(test1,500);
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK5.onclick = function() {
  if (PM[4].HP <= 0) {
   if (againheal2 === true) {
    againheal2 = false;
    attackstorage2 = false;
    Adp2.innerHTML = "たたかう";
    attack2.style.visibility = "hidden";
    healID2 = 4;
    changeclose2();
    setTimeout(test1,200);
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down2 === true) {
    if (formed2 === true) {
     formed2 = false;
     PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
     PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
    };
    if (PM[ID2].mega === true) {
     PM[ID2].mega = false;
     PM[ID2].MHP = PMm.slice(ID2,(ID2 + 1))[0].MHP;
     PM[ID2].A = PMm.slice(ID2,(ID2 + 1))[0].A;
     PM[ID2].B = PMm.slice(ID2,(ID2 + 1))[0].B;
     PM[ID2].C = PMm.slice(ID2,(ID2 + 1))[0].C;
     PM[ID2].D = PMm.slice(ID2,(ID2 + 1))[0].D;
     PM[ID2].S = PMm.slice(ID2,(ID2 + 1))[0].S;
     PM[ID2].F = PMm.slice(ID2,(ID2 + 1))[0].F;
     PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
     PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
     PM[ID2].heavy = PMm.slice(ID2,(ID2 + 1))[0].heavy;
     PM[ID2].img2 = PMm.slice(ID2,(ID2 + 1))[0].img2;
    };
    ID2 = 4;
    F2 = PM[ID2].F;
    if (F2 === "イリュージョン") {
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
    changeclose2();
    changing2();
   } else {
    if (againheal2 === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let change = confirm(PM[4].name + "に入れ替えますか?");
     if (change === true) {
      if (ID2 !== 4) {
       if (formed2 === true) {
        formed2 = false;
        PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
        PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
       };
       if (PM[ID2].F === "さいせいりょく") {
        PM[ID2].HP += Math.floor(PM[ID2].MHP / 3);
        if (PM[ID2].HP > PM[ID2].MHP) {
         PM[ID2].HP = PM[ID2].MHP;
        };
       };
       if (PM[ID2].MAX === true) {
        PM[ID2].MAX = false;
        PM[ID2].MHP = PM[ID2].MHP / 2;
        PM[ID2].HP = Math.ceil(PM[ID2].HP / 2);
       };
       ID2 = 4;
       F2 = PM[ID2].F;
       changer2 = true;
       changestorage2 = false;
       skiller2 = skill[25].name;
       bothchange += 1;
       Cdp2.innerHTML = "ポケモン";
       change2.style.visibility = "hidden";
       changeclose2();
       setTimeout(test1,500);
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK6.onclick = function() {
  if (PM[5].HP <= 0) {
   if (againheal2 === true) {
    againheal2 = false;
    attackstorage2 = false;
    Adp2.innerHTML = "たたかう";
    attack2.style.visibility = "hidden";
    healID2 = 5;
    changeclose2();
    setTimeout(test1,200);
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down2 === true) {
    if (formed2 === true) {
     formed2 = false;
     PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
     PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
    };
    if (PM[ID2].mega === true) {
     PM[ID2].mega = false;
     PM[ID2].MHP = PMm.slice(ID2,(ID2 + 1))[0].MHP;
     PM[ID2].A = PMm.slice(ID2,(ID2 + 1))[0].A;
     PM[ID2].B = PMm.slice(ID2,(ID2 + 1))[0].B;
     PM[ID2].C = PMm.slice(ID2,(ID2 + 1))[0].C;
     PM[ID2].D = PMm.slice(ID2,(ID2 + 1))[0].D;
     PM[ID2].S = PMm.slice(ID2,(ID2 + 1))[0].S;
     PM[ID2].F = PMm.slice(ID2,(ID2 + 1))[0].F;
     PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
     PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
     PM[ID2].heavy = PMm.slice(ID2,(ID2 + 1))[0].heavy;
     PM[ID2].img2 = PMm.slice(ID2,(ID2 + 1))[0].img2;
    };
    ID2 = 5;
    F2 = PM[ID2].F;
    PN2 = PM[ID2].name;
    PKpic2 = PM[ID2].img2;
    changeclose2();
    changing2();
   } else {
    if (againheal2 === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let change = confirm(PM[5].name + "に入れ替えますか?");
     if (change === true) {
      if (ID2 !== 5) {
       if (formed2 === true) {
        formed2 = false;
        PM[ID2].bodytype1 = PMm.slice(ID2,(ID2 + 1))[0].bodytype1;
        PM[ID2].bodytype2 = PMm.slice(ID2,(ID2 + 1))[0].bodytype2;
       };
       if (PM[ID2].F === "さいせいりょく") {
        PM[ID2].HP += Math.floor(PM[ID2].MHP / 3);
        if (PM[ID2].HP > PM[ID2].MHP) {
         PM[ID2].HP = PM[ID2].MHP;
        };
       };
       if (PM[ID2].MAX === true) {
        PM[ID2].MAX = false;
        PM[ID2].MHP = PM[ID2].MHP / 2;
        PM[ID2].HP = Math.ceil(PM[ID2].HP / 2);
       };
       ID2 = 5;
       F2 = PM[ID2].F;
       changer2 = true;
       changestorage2 = false;
       skiller2 = skill[25].name;
       bothchange += 1;
       Cdp2.innerHTML = "ポケモン";
       change2.style.visibility = "hidden";
       changeclose2();
       setTimeout(test1,500);
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 body.style.visibility = "visible";
}
function start2() {
 alert(Pnameon1 + "は" + PN1 + "を繰り出した！");
 PK1.style.visibility = "visible";
 dps1.style.visibility = "visible";
 setTimeout(start3,100);
}
function start3() {
 alert(Pnameon2 + "は" + PN2 + "を繰り出した！");
 PK2.style.visibility = "visible";
 dps2.style.visibility = "visible";
 setTimeout(start4,100);
}
function start4() {
 if (F1 === "ぎょぐん") {
  fishes1 = true;
  startdash1 = true;
  Fdp11.style.visibility = "visible";
  Fdp12.style.visibility = "visible";
  setTimeout(plus1,50);
 } else {
  if (F1 === "いかく") {
   Fdown1 = true;
   startdash1 = true;
   Fdp11.style.visibility = "visible";
   Fdp12.style.visibility = "visible";
   setTimeout(plus1,50);
  } else {
   setTimeout(start5,250);
  };
 };
}
function start5() {
 if (F2 === "ぎょぐん") {
  fishes2 = true;
  startdash2 = true;
  Fdp21.style.visibility = "visible";
  Fdp22.style.visibility = "visible";
  setTimeout(plus2,50);
 } else {
  if (F2 === "いかく") {
   Fdown2 = true;
   startdash2 = true;
   Fdp21.style.visibility = "visible";
   Fdp22.style.visibility = "visible";
   setTimeout(plus2,50);
  } else {
   setTimeout(start6,250);
  };
 };
}
function start6() {
 alert("バトルスタート！");
 startdash1 = false;
 startdash2 = false;
 attack1.style.visibility = "visible";
 change1.style.visibility = "visible";
}
