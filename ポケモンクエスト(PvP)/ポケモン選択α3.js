let setbutton;
let P1;
let P2;
let PK;
let PKname;
let left;
let right;
let subPKL;
let subPKR;
let SL1;
let SL2;
let SL3;
let SL4;
let skill1;
let skilldp1;
let skill2;
let skilldp2;
let skill3;
let skilldp3;
let skill4;
let skilldp4;
let icon1;
let icon2;
let icon3;
let icon4;
let type;
let damage;
let rate;
let dp;
let subdp;
let HP;
let Lv;
let F;
let Fdp;
let type1;
let type2;
let attack;
let block;
let contact;
let defense;
let speed;
let firstPK1;
let secondPK1;
let thirdPK1;
let firstPK2;
let secondPK2;
let thirdPK2;
let player = false;
let PM11 = false;
let PM12 = false;
let PM13 = false;
let PM21 = false;
let PM22 = false;
let PM23 = false;
let ID = 0;

window.onload = function() {
 start();
}

function start() {
 setbutton = document.getElementById("set");
 P1 = document.getElementById("P1");
 P2 = document.getElementById("P2");
 PK = document.getElementById("PK");
 PKname = document.getElementById("PKname");
 F = document.getElementById("F");
 Fdp = document.getElementById("Fdp");
 SL1 = document.getElementById("SL1");
 SL2 = document.getElementById("SL2");
 SL3 = document.getElementById("SL3");
 SL4 = document.getElementById("SL4");
 skilldp1 = document.getElementById("skilldp1");
 skilldp2 = document.getElementById("skilldp2");
 skilldp3 = document.getElementById("skilldp3");
 skilldp4 = document.getElementById("skilldp4");
 icon1 = document.getElementById("icon1");
 icon2 = document.getElementById("icon2");
 icon3 = document.getElementById("icon3");
 icon4 = document.getElementById("icon4");
 type = document.getElementById("type");
 damage = document.getElementById("damage");
 rate = document.getElementById("rate");
 dp = document.getElementById("dp");
 subdp = document.getElementById("subdp");
 HP = document.getElementById("HP");
 Lv = document.getElementById("Lv");
 type1 = document.getElementById("type1");
 type2 = document.getElementById("type2");
 attack = document.getElementById("attack");
 block = document.getElementById("block");
 contact = document.getElementById("contact");
 defense = document.getElementById("defense");
 speed = document.getElementById("speed");
 firstPK1 = document.getElementById("PK11");
 secondPK1 = document.getElementById("PK12");
 thirdPK1 = document.getElementById("PK13");
 firstPK2 = document.getElementById("PK21");
 secondPK2 = document.getElementById("PK22");
 thirdPK2 = document.getElementById("PK23");
 left = document.getElementById("left");
 right = document.getElementById("right");
 subPKL = document.getElementById("subPKL");
 subPKR = document.getElementById("subPKR");
 setbutton.style.visibility = "hidden";
 P1.innerHTML = Pnameon1;
 P2.innerHTML = Pnameon2;
 firstPK1.style.width = 150;
 secondPK1.style.width = 150;
 thirdPK1.style.width = 150;
 firstPK2.style.width = 150;
 secondPK2.style.width = 150;
 thirdPK2.style.width = 150;
 type1.style.backgroundColor = data[0].color1;
 type2.style.backgroundColor = data[0].color2;
 subPKL.src = data[36].img;
 subPKR.src = data[ID + 1].img;
 change();
 dp.style.visibility = "hidden";
 skill1 = document.getElementById("skill1").addEventListener( "click",function() {
  SL2.style.backgroundColor = "#FFFFFF";
  SL3.style.backgroundColor = "#FFFFFF";
  SL4.style.backgroundColor = "#FFFFFF";
  SL1.style.backgroundColor = "#FFE44E";
  type.innerHTML = skill[data[ID].skill1].type;
  damage.innerHTML = skill[data[ID].skill1].power;
  rate.innerHTML = skill[data[ID].skill1].hitrate;
  subdp.innerHTML = skill[data[ID].skill1].sub;
  dp.style.visibility = "visible";
 });
 skill2 = document.getElementById("skill2").addEventListener( "click",function() {
  SL1.style.backgroundColor = "#FFFFFF";
  SL3.style.backgroundColor = "#FFFFFF";
  SL4.style.backgroundColor = "#FFFFFF";
  SL2.style.backgroundColor = "#FFE44E";
  type.innerHTML = skill[data[ID].skill2].type;
  damage.innerHTML = skill[data[ID].skill2].power;
  rate.innerHTML = skill[data[ID].skill2].hitrate;
  subdp.innerHTML = skill[data[ID].skill2].sub;
  dp.style.visibility = "visible";
 });
 skill3 = document.getElementById("skill3").addEventListener( "click",function() {
  SL1.style.backgroundColor = "#FFFFFF";
  SL2.style.backgroundColor = "#FFFFFF";
  SL4.style.backgroundColor = "#FFFFFF";
  SL3.style.backgroundColor = "#FFE44E";
  type.innerHTML = skill[data[ID].skill3].type;
  damage.innerHTML = skill[data[ID].skill3].power;
  rate.innerHTML = skill[data[ID].skill3].hitrate;
  subdp.innerHTML = skill[data[ID].skill3].sub;
  dp.style.visibility = "visible";
 });
 skill4 = document.getElementById("skill4").addEventListener( "click",function() {
  SL1.style.backgroundColor = "#FFFFFF";
  SL2.style.backgroundColor = "#FFFFFF";
  SL3.style.backgroundColor = "#FFFFFF";
  SL4.style.backgroundColor = "#FFE44E";
  type.innerHTML = skill[data[ID].skill4].type;
  damage.innerHTML = skill[data[ID].skill4].power;
  rate.innerHTML = skill[data[ID].skill4].hitrate;
  subdp.innerHTML = skill[data[ID].skill4].sub;
  dp.style.visibility = "visible";
 });
 setbutton.onclick = function() {
  if (player === true) {
   setbutton.style.visibility = "hidden";
   alert("Let's go!");
   testfor();
  } else {
   player = true;
   setbutton.style.visibility = "hidden";
   firstPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
   secondPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
   thirdPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
   ID = 0;
   subPKR.src = data[ID + 1].img;
   subPKL.src = data[36].img;
   change();
   setTimeout(hidden,200);
  };
 };
 PK.onclick = function() {
  if (player === false) {
   if (PM13 === false) {
    if (PM11 === true) {
     if (PM12 === true) {
      thirdPK1.src = data[ID].img;
      chaos = Math.floor(Math.random(chaos) * 10);
      data[ID].S = S[ID][chaos];
      localStorage.setItem("PK3",JSON.stringify(data[ID]))
      PM13 = true;
      setbutton.style.visibility = "visible";
     } else {
      secondPK1.src = data[ID].img;
      chaos = Math.floor(Math.random(chaos) * 10);
      data[ID].S = S[ID][chaos];
      localStorage.setItem("PK2",JSON.stringify(data[ID]))
      PM12 = true;
     };
    } else {
     firstPK1.src = data[ID].img;
     chaos = Math.floor(Math.random(chaos) * 10);
     data[ID].S = S[ID][chaos];
     localStorage.setItem("PK1",JSON.stringify(data[ID]))
     PM11 = true;
    };
   };
  } else {
   if (PM23 === false) {
    if (PM21 === true) {
     if (PM22 === true) {
      thirdPK2.src = data[ID].img;
      chaos = Math.floor(Math.random(chaos) * 10);
      data[ID].S = S[ID][chaos];
      localStorage.setItem("PK6",JSON.stringify(data[ID]))
      PM23 = true;
      setbutton.style.visibility = "visible";
     } else {
      secondPK2.src = data[ID].img;
      chaos = Math.floor(Math.random(chaos) * 10);
      data[ID].S = S[ID][chaos];
      localStorage.setItem("PK5",JSON.stringify(data[ID]))
      PM22 = true;
     };
    } else {
     firstPK2.src = data[ID].img;
     chaos = Math.floor(Math.random(chaos) * 10);
     data[ID].S = S[ID][chaos];
     localStorage.setItem("PK4",JSON.stringify(data[ID]))
     PM21 = true;
    };
   };
  };
 };
 left.onclick = function() {
  ID -= 1;
  if (ID === -1) {
   ID = 36;
  };
  subPKR.style.visibility = "visible";
  change();
  if (ID === 0) {
   subPKR.src = data[ID + 1].img;
   subPKL.src = data[36].img;
  } else {
   if (ID === 36) {
    subPKR.src = data[0].img;
   } else {
    subPKR.src = data[ID + 1].img;
   };
   subPKL.src = data[ID - 1].img;
  };
 };
 right.onclick = function() {
  ID += 1;
  if (ID === 37) {
   ID = 0;
  };
  subPKL.style.visibility = "visible";
  change();
  if (ID === 36) {
   subPKR.src = data[0].img;
   subPKL.src = data[ID - 1].img;
  } else {
   if (ID === 0) {
    subPKL.src = data[36].img;
   } else {
    subPKL.src = data[ID - 1].img;
   };
   subPKR.src = data[ID + 1].img;
  };
 };
 firstPK1.onclick = function() {
  if (player === false) {
   if (PM12 === false) {
    firstPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
    PM11 = false;
   };
  };
 };
 secondPK1.onclick = function() {
  if (player === false) {
   if (PM13 === false) {
    secondPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
    PM12 = false;
   };
  };
 };
 thirdPK1.onclick = function() {
  if (player === false) {
   thirdPK1.src = "../ポケモンクエスト画像/モンスターボール.png";
   PM13 = false;
   setbutton.style.visibility = "hidden";
  };
 };
 firstPK2.onclick = function() {
  if (player === true) {
   if (PM22 === false) {
    firstPK2.src = "../ポケモンクエスト画像/モンスターボール.png";
    PM21 = false;
   };
  };
 };
 secondPK2.onclick = function() {
  if (player === true) {
   if (PM23 === false) {
    secondPK2.src = "../ポケモンクエスト画像/モンスターボール.png";
    PM22 = false;
   };
  };
 };
 thirdPK2.onclick = function() {
  if (player === true) {
   thirdPK2.src = "../ポケモンクエスト画像/モンスターボール.png";
   PM23 = false;
   setbutton.style.visibility = "hidden";
  };
 };
 body.style.visibility = "visible";
}
function change() {
 PK.src = data[ID].img;
 PKname.innerHTML = data[ID].name;
 Lv.innerHTML = data[ID].level;
 F.innerHTML = data[ID].F
 Fdp.innerHTML = data[ID].Fdp;
 type1.style.backgroundColor = data[ID].color1;
 type2.style.backgroundColor = data[ID].color2;
 type1.innerHTML = data[ID].bodytype1;
 type2.innerHTML = data[ID].bodytype2;
 HP.innerHTML = data[ID].HP;
 attack.innerHTML = data[ID].A;
 block.innerHTML = data[ID].B;
 contact.innerHTML = data[ID].C;
 defense.innerHTML = data[ID].D;
 speed.innerHTML = S[ID][4];
 skilldp1.innerHTML = skill[data[ID].skill1].name;
 skilldp2.innerHTML = skill[data[ID].skill2].name;
 skilldp3.innerHTML = skill[data[ID].skill3].name;
 skilldp4.innerHTML = skill[data[ID].skill4].name;
 icon1.src = skill[data[ID].skill1].icon;
 icon2.src = skill[data[ID].skill2].icon;
 icon3.src = skill[data[ID].skill3].icon;
 icon4.src = skill[data[ID].skill4].icon;
 SL1.style.backgroundColor = "#FFFFFF";
 SL2.style.backgroundColor = "#FFFFFF";
 SL3.style.backgroundColor = "#FFFFFF";
 SL4.style.backgroundColor = "#FFFFFF";
 dp.style.visibility = "hidden";
};
function hidden() {
 alert("次は" + Pnameon2 + "さんがポケモンを選びます。" + Pnameon2 + "さんに端末を渡してください。");
 while (true) {
  let OK = confirm(Pnameon2 + "さんに端末を渡した！");
  if (OK === true) {
   alert("それでは" + Pnameon2 + "さん、ポケモンを選んでください");
  } else {
   alert("次は" + Pnameon2 + "さんがポケモンを選びます。" + Pnameon2 + "さんに端末を渡してください。");
   continue;
  };
  break;
 };
}
function testfor() {
 window.location.href = "ポケモンクエスト(PvP).html"
}