alert("ようこそ！");
let skilltype1;
let bodytype21;
let bodytype22;
let typecolor;
let color;
let type1;
let type2;
let type3;
let dmg = 0;
let minusF = 50;
let nodmg = false;
let fromtest1 = false;
let fromtest2 = false;

function typetestfor() {
 skilltype1 = document.getElementById("skilltype").value;
 bodytype21 = document.getElementById("bodytype1").value;
 bodytype22 = document.getElementById("bodytype2").value;
 if (bodytype21 !== bodytype22) {
  type();
 } else {
  alert("同じタイプを二つ持っているポケモンはいないよ。");
 };
}
function type() {
 if (skilltype1 === "ノーマル") {
  if (bodytype21 === "いわ" || bodytype22 === "いわ") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ゴースト" || bodytype22 === "ゴースト") {
   nodmg = true;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg - 1;
  };
 };
 if (skilltype1 === "かくとう") {
  if (bodytype21 === "ノーマル" || bodytype22 === "ノーマル") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "どく" || bodytype22 === "どく") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ひこう" || bodytype22 === "ひこう") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "むし" || bodytype22 === "むし") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "いわ" || bodytype22 === "いわ") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "ゴースト" || bodytype22 === "ゴースト") {
   nodmg = true;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "こおり" || bodytype22 === "こおり") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "エスパー" || bodytype22 === "エスパー") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "あく" || bodytype22 === "あく") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "フェアリー" || bodytype22 === "フェアリー") {
   dmg = dmg - 1;
  };
 };
 if (skilltype1 === "どく") {
  if (bodytype21 === "どく" || bodytype22 === "どく") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "じめん" || bodytype22 === "じめん") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "いわ" || bodytype22 === "いわ") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ゴースト" || bodytype22 === "ゴースト") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   nodmg = true;
  };
  if (bodytype21 === "くさ" || bodytype22 === "くさ") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "フェアリー" || bodytype22 === "フェアリー") {
   dmg = dmg + 1;
  };
 };
 if (skilltype1 === "じめん") {
  if (bodytype21 === "どく" || bodytype22 === "どく") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "ひこう" || bodytype22 === "ひこう") {
   nodmg = true;
  };
  if (bodytype21 === "むし" || bodytype22 === "むし") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "いわ" || bodytype22 === "いわ") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "ほのお" || bodytype22 === "ほのお") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "でんき" || bodytype22 === "でんき") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "くさ" || bodytype22 === "くさ") {
   dmg = dmg - 1;
  };
 };
 if (skilltype1 === "ひこう") {
  if (bodytype21 === "かくとう" || bodytype22 === "かくとう") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "じめん" || bodytype22 === "じめん") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "むし" || bodytype22 === "むし") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "いわ" || bodytype22 === "いわ") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "でんき" || bodytype22 === "でんき") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "くさ" || bodytype22 === "くさ") {
   dmg = dmg + 1;
  };
 };
 if (skilltype1 === "むし") {
  if (bodytype21 === "かくとう" || bodytype22 === "かくとう") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "どく" || bodytype22 === "どく") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ひこう" || bodytype22 === "ひこう") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ゴースト" || bodytype22 === "ゴースト") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ほのお" || bodytype22 === "ほのお") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "くさ" || bodytype22 === "くさ") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "エスパー" || bodytype22 === "エスパー") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "あく" || bodytype22 === "あく") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "フェアリー" || bodytype22 === "フェアリー") {
   dmg = dmg - 1;
  };
 };
 if (skilltype1 === "いわ") {
  if (bodytype21 === "かくとう" || bodytype22 === "かくとう") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "じめん" || bodytype22 === "じめん") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ひこう" || bodytype22 === "ひこう") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "むし" || bodytype22 === "むし") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ほのお" || bodytype22 === "ほのお") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "こおり" || bodytype22 === "こおり") {
   dmg = dmg + 1;
  };
 };
 if (skilltype1 === "ゴースト") {
  if (bodytype21 === "ノーマル" || bodytype22 === "ノーマル") {
   nodmg = true;
  };
  if (bodytype21 === "ゴースト" || bodytype22 === "ゴースト") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "エスパー" || bodytype22 === "エスパー") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "あく" || bodytype22 === "あく") {
   dmg = dmg - 1;
  };
 };
 if (skilltype1 === "はがね") {
  if (bodytype21 === "いわ" || bodytype22 === "いわ") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ほのお" || bodytype22 === "ほのお") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "みず" || bodytype22 === "みず") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "くさ" || bodytype22 === "くさ") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "でんき" || bodytype22 === "でんき") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "こおり" || bodytype22 === "こおり") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "フェアリー" || bodytype22 === "フェアリー") {
   dmg = dmg + 1;
  };
 };
 if (skilltype1 === "ほのお") {
  if (bodytype21 === "むし" || bodytype22 === "むし") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "いわ" || bodytype22 === "いわ") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "ほのお" || bodytype22 === "ほのお") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "みず" || bodytype22 === "みず") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "くさ" || bodytype22 === "くさ") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "こおり" || bodytype22 === "こおり") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "ドラゴン" || bodytype22 === "ドラゴン") {
   dmg = dmg - 1;
  };
 };
 if (skilltype1 === "みず") {
  if (bodytype21 === "じめん" || bodytype22 === "じめん") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "いわ" || bodytype22 === "いわ") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "ほのお" || bodytype22 === "ほのお") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "みず" || bodytype22 === "みず") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "くさ" || bodytype22 === "くさ") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ドラゴン" || bodytype22 === "ドラゴン") {
   dmg = dmg - 1;
  };
 };
 if (skilltype1 === "でんき") {
  if (bodytype21 === "じめん" || bodytype22 === "じめん") {
   nodmg = true;
  };
  if (bodytype21 === "ひこう" || bodytype22 === "ひこう") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "みず" || bodytype22 === "みず") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "でんき" || bodytype22 === "でんき") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "くさ" || bodytype22 === "くさ") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ドラゴン" || bodytype22 === "ドラゴン") {
   dmg = dmg - 1;
  };
 };
 if (skilltype1 === "くさ") {
  if (bodytype21 === "どく" || bodytype22 === "どく") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "じめん" || bodytype22 === "じめん") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "ひこう" || bodytype22 === "ひこう") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "むし" || bodytype22 === "むし") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "いわ" || bodytype22 === "いわ") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ほのお" || bodytype22 === "ほのお") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "みず" || bodytype22 === "みず") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "くさ" || bodytype22 === "くさ") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ドラゴン" || bodytype22 === "ドラゴン") {
   dmg = dmg - 1;
  };
 };
 if (skilltype1 === "こおり") {
  if (bodytype21 === "じめん" || bodytype22 === "じめん") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "ひこう" || bodytype22 === "ひこう") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ほのお" || bodytype22 === "ほのお") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "みず" || bodytype22 === "みず") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "くさ" || bodytype22 === "くさ") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "こおり" || bodytype22 === "こおり") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ドラゴン" || bodytype22 === "ドラゴン") {
   dmg = dmg + 1;
  };
 };
 if (skilltype1 === "エスパー") {
  if (bodytype21 === "かくとう" || bodytype22 === "かくとう") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "どく" || bodytype22 === "どく") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "エスパー" || bodytype22 === "エスパー") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "あく" || bodytype22 === "あく") {
   nodmg = true;
  };
 };
 if (skilltype1 === "ドラゴン") {
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ドラゴン" || bodytype22 === "ドラゴン") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "フェアリー" || bodytype22 === "フェアリー") {
   nodmg = true;
  };
 };
 if (skilltype1 === "あく") {
  if (bodytype21 === "かくとう" || bodytype22 === "かくとう") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ゴースト" || bodytype22 === "ゴースト") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "エスパー" || bodytype22 === "エスパー") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "あく" || bodytype22 === "あく") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "フェアリー" || bodytype22 === "フェアリー") {
   dmg = dmg - 1;
  };
 };
 if (skilltype1 === "フェアリー") {
  if (bodytype21 === "かくとう" || bodytype22 === "かくとう") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "どく" || bodytype22 === "どく") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "はがね" || bodytype22 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ほのお" || bodytype22 === "ほのお") {
   dmg = dmg - 1;
  };
  if (bodytype21 === "ドラゴン" || bodytype22 === "ドラゴン") {
   dmg = dmg + 1;
  };
  if (bodytype21 === "あく" || bodytype22 === "あく") {
   dmg = dmg + 1;
  };
 };
 if (nodmg === true) {
  minusF = 0;
  nodmg = false;
  alert("効果はないようだ…。");
  dmg = 0;
 } else {
  if (dmg === 2) {
   minusF = minusF / 100 * 256;
   minusF = Math.floor(minusF);
   alert("効果はばつぐんだ！！");
   dmg = 0;
  };
  if (dmg === 1) {
   minusF = minusF / 10 * 16;
   minusF = Math.floor(minusF);
   alert("効果はばつぐんだ！");
   dmg = 0;
  };
  if (dmg === -1) {
   minusF = minusF / 100 * 63;
   minusF = Math.floor(minusF);
   alert("効果はいまひとつのようだ。");
   dmg = 0;
  };
  if (dmg === -2) {
   minusF = minusF / 1000 * 244;
   minusF = Math.floor(minusF);
   alert("効果はいまひとつのようだ…。");
   dmg = 0;
  };
 };
}
function test1() {
 typecolor = document.getElementById("skilltype").value;
 type1 = document.getElementById("skilltype");
 fromtest1 = true;
 coloring();
}
function test2() {
 typecolor = document.getElementById("bodytype1").value;
 type2 = document.getElementById("bodytype1");
 fromtest2 = true;
 coloring();
}
function test3() {
 typecolor = document.getElementById("bodytype2").value;
 type3 = document.getElementById("bodytype2");
 coloring();
}
function coloring() {
 if (typecolor === "ノーマル") {
  color = "#CCCCCC";
 };
 if (typecolor === "かくとう") {
  color = "#FF9900";
 };
 if (typecolor === "どく") {
  color = "#A600FF";
 };
 if (typecolor === "じめん") {
  color = "#CF9E4E";
 };
 if (typecolor === "ひこう") {
  color = "#ABBFF3";
 };
 if (typecolor === "むし") {
  color = "#81EC16";
 };
 if (typecolor === "いわ") {
  color = "#9A6100";
 };
 if (typecolor === "ゴースト") {
  color = "#300770";
 };
 if (typecolor === "はがね") {
  color = "#999999";
 };
 if (typecolor === "ほのお") {
  color = "#FF421C";
 };
 if (typecolor === "みず") {
  color = "#028DFF";
 };
 if (typecolor === "でんき") {
  color = "#FFE000";
 };
 if (typecolor === "くさ") {
  color = "#55D600";
 };
 if (typecolor === "こおり") {
  color = "#44D3FF";
 };
 if (typecolor === "エスパー") {
  color = "#FF8DE8";
 };
 if (typecolor === "ドラゴン") {
  color = "#4954A9";
 };
 if (typecolor === "あく") {
  color = "#452222";
 };
 if (typecolor === "フェアリー") {
  color = "#FF58B9";
 };
 if (fromtest1 === true) {
  fromtest1 = false;
  type1.style.color = color;
 } else {
  if (fromtest2 === true) {
   fromtest2 = false;
   type2.style.color = color;
  } else {
   type3.style.color = color;
  };
 };
};