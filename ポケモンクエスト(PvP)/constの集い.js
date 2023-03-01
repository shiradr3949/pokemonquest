const skill = [
 {"id": 0, "skilltype": "ほのお", "color": "#FF421C", "name": "かえんほうしゃ", "power": 90,"hitrate": 100, "type": "special", "direct": false},
 {"id": 1, "skilltype": "ひこう", "color": "#ABBFF3", "name": "エアスラッシュ", "power": 75,"hitrate": 95, "type": "special", "direct": false, "wince": true},
 {"id": 2, "skilltype": "いわ", "color": "#9A6100", "name": "ストーンエッジ", "power": 100,"hitrate": 80, "type": "physics", "direct": false, "highrate": true},
 {"id": 3, "skilltype": "はがね", "color": "#999999", "name": "アイアンテール", "power": 100,"hitrate": 70, "type": "physics", "direct": true},
 {"id": 4, "skilltype": "みず", "color": "#028DFF", "name": "ねっとう", "power": 80,"hitrate": 100, "type": "special", "direct": false},
 {"id": 5, "skilltype": "どく", "color": "#A600FF", "name": "ヘドロウェーブ", "power": 95,"hitrate": 100, "type": "special", "direct": false},
 {"id": 6, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "じこさいせい", "power": 0,"hitrate": 100, "type": "change", "direct": false, "heal": true},
 {"id": 7, "skilltype": "どく", "color": "#A600FF", "name": "どくづき", "power": 80,"hitrate": 100, "type": "physics", "direct": true},
 {"id": 8, "skilltype": "むし", "color": "#81EC16", "name": "むしのていこう", "power": 50,"hitrate": 100, "type": "special", "direct": false, "outCR0": true},
 {"id": 9, "skilltype": "むし", "color": "#81EC16", "name": "ちょうのまい", "power": 0,"hitrate": 100, "type": "change", "direct": false, "updown": true, "CR1": true, "DR1": true, "SR1": true},
 {"id": 10, "skilltype": "ほのお", "color": "#FF421C", "name": "ほのおのまい", "power": 80,"hitrate": 100, "type": "special", "direct": false, "CR1h": true},
 {"id": 11, "skilltype": "じめん", "color": "#CF9E4E", "name": "じしん", "power": 100,"hitrate": 100, "type": "physics", "direct": false},
 {"id": 12, "skilltype": "あく", "color": "#452222", "name": "かみくだく", "power": 80,"hitrate": 100, "type": "physics", "direct": true},
 {"id": 13, "skilltype": "ひこう", "color": "#ABBFF3", "name": "つばめがえし", "power": 60,"hitrate": 100, "type": "surely", "direct": false},
 {"id": 14, "skilltype": "フェアリー", "color": "#FF58B9", "name": "マジカルシャイン", "power": 80,"hitrate": 100, "type": "special", "direct": false},
 {"id": 15, "skilltype": "エスパー", "color": "#FF8DE8", "name": "サイコキネシス", "power": 90,"hitrate": 100, "type": "special", "direct": false},
 {"id": 16, "skilltype": "エスパー", "color": "#FF8DE8", "name": "トリックルーム", "power": 0,"hitrate": 100, "type": "change", "direct": false, "un": true},
 {"id": 17, "skilltype": "ゴースト", "color": "#300770", "name": "シャドーボール", "power": 80,"hitrate": 100, "type": "special", "direct": false},
 {"id": 18, "skilltype": "でんき", "color": "#FFE000", "name": "かみなりパンチ", "power": 75,"hitrate": 100, "type": "physics", "direct": true, "punch": true},
 {"id": 19, "skilltype": "かくとう", "color": "#FF9900", "name": "ばかぢから", "power": 120,"hitrate": 100, "type": "physics", "direct": true, "AR0": true,"BR0": true},
 {"id": 20, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "いたみわけ", "power": 0,"hitrate": 100, "type": "change", "direct": false, "halves": true},
 {"id": 21, "skilltype": "ゴースト", "color": "#300770", "name": "シャドークロー", "power": 70 ,"hitrate": 100, "type": "physics", "direct": true, "highrate": true},
 {"id": 22, "skilltype": "ほのお", "color": "#FF421C", "name": "むねんのつるぎ", "power": 90,"hitrate": 100, "type": "physics", "direct": true, "AH": true},
 {"id": 23, "skilltype": "かくとう", "color": "#FF9900", "name": "インファイト", "power": 120,"hitrate": 100, "type": "physics", "direct": true, "BR0": true, "DR0": true},
 {"id": 24, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "つるぎのまい", "power": 0,"hitrate": 100, "type": "change", "direct": false, "updown": true, "AR2": true},
 {"id": 25, "skilltype": "no", "name": "noname"},
 {"id": 26, "skilltype": "ドラゴン", "color": "#4954A9", "name": "きょけんとつげき", "power": 120,"hitrate": 100, "type": "physics", "direct": true, "afterback": true},
 {"id": 27, "skilltype": "こおり", "color": "#44D3FF", "name": "つららおとし", "power": 85,"hitrate": 90, "type": "physics", "direct": false, "wince": true},
 {"id": 28, "skilltype": "ドラゴン", "color": "#4954A9", "name": "りゅうのまい", "power": 0,"hitrate": 100, "type": "change", "direct": false, "updown": true, "AR1": true, "SR1": true},
 {"id": 29, "skilltype": "くさ", "color": "#55D600", "name": "ギガドレイン", "power": 75,"hitrate": 100, "type": "special", "direct": false, "AH": true},
 {"id": 30, "skilltype": "ドラゴン", "color": "#4954A9", "name": "ドラゴンアロー", "power": 50,"hitrate": 100, "type": "physics", "direct": false, "Wattack": true},
 {"id": 31, "skilltype": "ほのお", "color": "#FF421C", "name": "だいもんじ", "power": 120,"hitrate": 85, "type": "special", "direct": false},
 {"id": 32, "skilltype": "でんき", "color": "#FFE000", "name": "10まんボルト", "power": 90,"hitrate": 100, "type": "special", "direct": false},
 {"id": 33, "skilltype": "ドラゴン", "color": "#4954A9", "name": "りゅうせいぐん", "power": 130,"hitrate": 90, "type": "special", "direct": false, "CR00": true},
 {"id": 34, "skilltype": "ひこう", "color": "#ABBFF3", "name": "ぼうふう", "power": 110,"hitrate": 70, "type": "special", "direct": false},
 {"id": 35, "skilltype": "ひこう", "color": "#ABBFF3", "name": "はねやすめ", "power": 0,"hitrate": 100, "type": "change", "direct": false, "heal": true},
 {"id": 36, "skilltype": "はがね", "color": "#999999", "name": "デカハンマー", "power": 160,"hitrate": 100, "type": "physics", "direct": false, "recoil": true},
 {"id": 37, "skilltype": "フェアリー", "color": "#FF58B9", "name": "じゃれつく", "power": 90,"hitrate": 90, "type": "physics", "direct": true},
 {"id": 38, "skilltype": "じめん", "color": "#CF9E4E", "name": "じならし", "power": 60,"hitrate": 100, "type": "physics", "direct": false, "outSR0": true},
 {"id": 39, "skilltype": "かくとう", "color": "#FF9900", "name": "ドレインパンチ", "power": 75,"hitrate": 100, "type": "physics", "direct": true, "AH": true, "punch": true},
 {"id": 40, "skilltype": "フェアリー", "color": "#FF58B9", "name": "ムーンフォース", "power": 95,"hitrate": 100, "type": "special", "direct": false},
 {"id": 41, "skilltype": "くさ", "color": "#55D600", "name": "エナジーボール", "power": 90,"hitrate": 100, "type": "special", "direct": false},
 {"id": 42, "skilltype": "ひこう", "color": "#ABBFF3", "name": "おいかぜ", "power": 0,"hitrate": 100, "type": "change", "direct": false, "backwind": true},
 {"id": 43, "skilltype": "あく", "color": "#452222", "name": "おきみやげ", "power": 0,"hitrate": 100, "type": "change", "direct": false, "putgift": true, "outAR00": true, "outCR00": true},
 {"id": 44, "skilltype": "どく", "color": "#A600FF", "name": "とける", "power": 0,"hitrate": 100, "type": "change", "direct": false, "updown": true, "BR2": true},
 {"id": 45, "skilltype": "エスパー", "color": "#FF8DE8", "name": "アシストパワー", "power": 20,"hitrate": 100, "type": "assist", "direct": false, "assist": true},
 {"id": 46, "skilltype": "エスパー", "color": "#FF8DE8", "name": "めいそう", "power": 0,"hitrate": 100, "type": "change", "direct": false, "updown": true, "CR1": true, "DR1": true},
 {"id": 47, "skilltype": "でんき", "color": "#FFE000", "name": "でんこうそうげき", "power": 120,"hitrate": 100, "type": "physics", "direct": true},
 {"id": 48, "skilltype": "こおり", "color": "#44D3FF", "name": "れいとうパンチ", "power": 75,"hitrate": 100, "type": "physics", "direct": true, "punch": true},
 {"id": 49, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "さいきのいのり", "power": 0,"hitrate": 100, "type": "change", "direct": false, "againheal": true},
 {"id": 50, "skilltype": "あく", "color": "#452222", "name": "あくのはどう", "power": 80,"hitrate": 100, "type": "special", "direct": false, "wince2": true},
 {"id": 51, "skilltype": "はがね", "color": "#999999", "name": "ラスターカノン", "power": 80,"hitrate": 100, "type": "special", "direct": false},
 {"id": 52, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "ハイパーボイス", "power": 90,"hitrate": 100, "type": "special", "direct": false},
 {"id": 53, "skilltype": "ほのお", "color": "#FF421C", "name": "マジカルフレイム", "power": 75,"hitrate": 100, "type": "special", "direct": false, "outCR0": true},
 {"id": 54, "skilltype": "ほのお", "color": "#FF421C", "name": "ニトロチャージ", "power": 50,"hitrate": 100, "type": "physics", "direct": true, "SR1": true},
 {"id": 55, "skilltype": "ドラゴン", "color": "#4954A9", "name": "りゅうのはどう", "power": 85,"hitrate": 100, "type": "special", "direct": false},
 {"id": 56, "skilltype": "ドラゴン", "color": "#4954A9", "name": "ドラゴンクロー", "power": 80,"hitrate": 100, "type": "physics", "direct": true},
 {"id": 57, "skilltype": "はがね", "color": "#999999", "name": "アイアンヘッド", "power": 80,"hitrate": 100, "type": "physics", "direct": true, "wince": true},
 {"id": 58, "skilltype": "くさ", "color": "#55D600", "name": "トリックフラワー", "power": 70,"hitrate": 10000, "type": "surely", "direct": false, "hyperhitrate": true},
 {"id": 59, "skilltype": "あく", "color": "#452222", "name": "はたきおとす", "power": 65,"hitrate": 100, "type": "physics", "direct": false},
 {"id": 60, "skilltype": "かくとう", "color": "#FF9900", "name": "けたぐり", "power": 0,"hitrate": 100, "type": "heavy", "direct": true},
 {"id": 61, "skilltype": "ひこう", "color": "#ABBFF3", "name": "ダブルウィング", "power": 40,"hitrate": 90, "type": "physics", "direct": true, "Wattack": true},
 {"id": 62, "skilltype": "ゴースト", "color": "#300770", "name": "ふんどのこぶし", "power": 50,"hitrate": 100, "type": "angry", "direct": true, "punch": true},
 {"id": 63, "skilltype": "かくとう", "color": "#FF9900", "name": "ビルドアップ", "power": 0,"hitrate": 100, "type": "change", "direct": false, "updown": true, "AR1": true, "BR1": true},
 {"id": 64, "skilltype": "いわ", "color": "#9A6100", "name": "がんせきふうじ", "power": 50,"hitrate": 100, "type": "physics", "direct": false, "outSR0": true},
 {"id": 65, "skilltype": "はがね", "color": "#999999", "name": "コメットパンチ", "power": 90,"hitrate": 90, "type": "physics", "direct": true, "AR1two": true, "punch": true},
 {"id": 66, "skilltype": "エスパー", "color": "#FF8DE8", "name": "しねんのずつき", "power": 80,"hitrate": 90, "type": "physics", "direct": true, "wince2": true},
 {"id": 67, "skilltype": "こおり", "color": "#44D3FF", "name": "こごえるかぜ", "power": 55,"hitrate": 100, "type": "special", "direct": false, "outSR0": true},
 {"id": 68, "skilltype": "こおり", "color": "#44D3FF", "name": "れいとうビーム", "power": 90,"hitrate": 100, "type": "special", "direct": false},
 {"id": 69, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "がむしゃら", "power": 0,"hitrate": 100, "type": "change", "direct": true, "obsessed": true},
 {"id": 70, "skilltype": "こおり", "color": "#44D3FF", "name": "ゆきなだれ", "power": 60,"hitrate": 100, "type": "physics", "direct": false, "snowdown": true},
 {"id": 71, "skilltype": "はがね", "color": "#999999", "name": "てっぺき", "power": 0,"hitrate": 100, "type": "change", "direct": false, "updown": true, "BR2": true},
 {"id": 72, "skilltype": "かくとう", "color": "#FF9900", "name": "ボディプレス", "power": 80,"hitrate": 100, "type": "bodypress", "direct": true},
 {"id": 73, "skilltype": "じめん", "color": "#CF9E4E", "name": "ぶちかまし", "power": 120,"hitrate": 100, "type": "physics", "direct": true, "BR0": true, "DR0": true},
 {"id": 74, "skilltype": "ほのお", "color": "#FF421C", "name": "ほのおのパンチ", "power": 75,"hitrate": 100, "type": "physics", "direct": true, "punch": true},
 {"id": 75, "skilltype": "ゴースト", "color": "#300770", "name": "うらみつらみ", "power": 75,"hitrate": 100, "type": "special", "direct": false, "outAR0": true},
 {"id": 76, "skilltype": "あく", "color": "#452222", "name": "バークアウト", "power": 55,"hitrate": 100, "type": "special", "direct": false, "outCR0": true},
 {"id": 77, "skilltype": "かくとう", "color": "#FF9900", "name": "きあいだま", "power": 120,"hitrate": 70, "type": "special", "direct": false},
 {"id": 78, "skilltype": "じめん", "color": "#CF9E4E", "name": "だいちのちから", "power": 90,"hitrate": 100, "type": "special", "direct": false},
 {"id": 79, "skilltype": "ひこう", "color": "#ABBFF3", "name": "ドリルくちばし", "power": 80,"hitrate": 100, "type": "physics", "direct": true},
 {"id": 80, "skilltype": "フェアリー", "color": "#FF58B9", "name": "ソウルクラッシュ", "power": 75,"hitrate": 100, "type": "physics", "direct": true, "outCR0": true},
 {"id": 81, "skilltype": "かくとう", "color": "#FF9900", "name": "かわらわり", "power": 75,"hitrate": 100, "type": "physics", "direct": true},
 {"id": 82, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "まもる", "power": 0,"hitrate": 100, "type": "change", "direct": false, "shield": true},
 {"id": 83, "skilltype": "かくとう", "color": "#FF9900", "name": "クロスチョップ", "power": 75,"hitrate": 100, "type": "physics", "direct": true},
 {"id": 84, "skilltype": "じめん", "color": "#CF9E4E", "name": "じわれ", "power": 60,"hitrate": 100, "type": "change", "direct": false, "onekill": true},
 {"id": 85, "skilltype": "みず", "color": "#028DFF", "name": "うたかたのアリア", "power": 90,"hitrate": 100, "type": "special", "direct": false},
 {"id": 86, "skilltype": "こおり", "color": "#44D3FF", "name": "フリーズドライ", "power": 70,"hitrate": 100, "type": "special", "direct": false, "icewater": true},
 {"id": 87, "skilltype": "でんき", "color": "#FFE000", "name": "かみなり", "power": 110,"hitrate": 70, "type": "special", "direct": false},
 {"id": 88, "skilltype": "エスパー", "color": "#FF8DE8", "name": "リフレクター", "power": 0,"hitrate": 100, "type": "change", "direct": false, "barrier": true, "Pbarrier": true},
 {"id": 89, "skilltype": "ほのお", "color": "#FF421C", "name": "かえんボール", "power": 120,"hitrate": 90, "type": "physics", "direct": false},
 {"id": 90, "skilltype": "かくとう", "color": "#FF9900", "name": "とびひざげり", "power": 130,"hitrate": 90, "type": "physics", "direct": true, "reaction": true},
 {"id": 91, "skilltype": "みず", "color": "#028DFF", "name": "たきのぼり", "power": 80,"hitrate": 100, "type": "physics", "direct": false},
 {"id": 92, "skilltype": "こおり", "color": "#44D3FF", "name": "こおりのきば", "power": 75,"hitrate": 100, "type": "physics", "direct": true},
 {"id": 93, "skilltype": "いわ", "color": "#9A6100", "name": "いわなだれ", "power": 75,"hitrate": 90, "type": "physics", "direct": false, "wince": true},
 {"id": 94, "skilltype": "みず", "color": "#028DFF", "name": "ハイドロポンプ", "power": 110,"hitrate": 80, "type": "special", "direct": false},
 {"id": 95, "skilltype": "ひこう", "color": "#ABBFF3", "name": "アクロバット", "power": 110,"hitrate": 100, "type": "physics", "direct": true},
 {"id": 96, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "しんそく", "power": 80,"hitrate": 100, "type": "physics", "direct": true},
];
let MAXskill = [
 {"id": 0, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "ダイウォール", "power": 0, "hitrate": 100, "type": "unknown", "direct": "unknown"},
 {"id": 1, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "ダイアタック", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "outSR0": true},
 {"id": 2, "skilltype": "かくとう", "color": "#FF9900", "name": "ダイナックル", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "AR1": true},
 {"id": 3, "skilltype": "どく", "color": "#A600FF", "name": "ダイアシッド", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "CR1": true},
 {"id": 4, "skilltype": "じめん", "color": "#CF9E4E", "name": "ダイアース", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "DR1": true},
 {"id": 5, "skilltype": "ひこう", "color": "#ABBFF3", "name": "ダイジェット", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "SR1": true},
 {"id": 6, "skilltype": "むし", "color": "#81EC16", "name": "ダイワーム", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "outCR0": true},
 {"id": 7, "skilltype": "いわ", "color": "#9A6100", "name": "ダイロック", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "sandstrom": true},
 {"id": 8, "skilltype": "ゴースト", "color": "#300770", "name": "ダイホロウ", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "outBR0": true},
 {"id": 9, "skilltype": "はがね", "color": "#999999", "name": "ダイスチル", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "BR1": true},
 {"id": 10, "skilltype": "ほのお", "color": "#FF421C", "name": "ダイバーン", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "sunny": true},
 {"id": 11, "skilltype": "みず", "color": "#028DFF", "name": "ダイストリーム", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "rainy": true},
 {"id": 12, "skilltype": "でんき", "color": "#FFE000", "name": "ダイサンダー", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "elec": true},
 {"id": 13, "skilltype": "くさ", "color": "#55D600", "name": "ダイソウゲン", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "grass": true},
 {"id": 14, "skilltype": "こおり", "color": "#44D3FF", "name": "ダイアイス", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "hail": true},
 {"id": 15, "skilltype": "エスパー", "color": "#FF8DE8", "name": "ダイサイコ", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "phycho": true},
 {"id": 16, "skilltype": "ドラゴン", "color": "#4954A9", "name": "ダイドラグーン", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "outAR0": true},
 {"id": 17, "skilltype": "あく", "color": "#452222", "name": "ダイアーク", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "outDR0": true},
 {"id": 18, "skilltype": "フェアリー", "color": "#FF58B9", "name": "ダイフェアリー", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": "unknown", "mist": true},
 {"id": 19, "skilltype": "unknown", "name": "unknown", "power": "unknown"},
 {"id": 20, "skilltype": "かくとう", "color": "#FF9900", "name": "キョダイシンゲキ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: "unknown", "highhitrating": true},
 {"id": 21, "skilltype": "こおり", "color": "#44D3FF", "name": "キョダイセンリツ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: "unknown", "barrier": true},
 {"id": 22, "skilltype": "ほのお", "color": "#FF421C", "name": "キョダイカキュウ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: "unknown", "noF": true},
];
const display = [
 {"id": 0, "dp": "効果はばつぐんだ！！"},
 {"id": 1, "dp": "効果はばつぐんだ！"},
 {"id": 2, "dp": "効果はいまひとつのようだ。"},
 {"id": 3, "dp": "効果はいまひとつのようだ…。"},
 {"id": 4, "dp": "効果がないようだ…。"},
];
const rank = [
 {"R": 2/8},
 {"R": 2/7},
 {"R": 2/6},
 {"R": 2/5},
 {"R": 2/4},
 {"R": 2/3},
 {"R": 2/2},
 {"R": 3/2},
 {"R": 4/2},
 {"R": 5/2},
 {"R": 6/2},
 {"R": 7/2},
 {"R": 8/2},
];
const vital = [
 {"R": 417/10000},
 {"R": 30},
 {"R": 50},
 {"R": 100},
 {"R": 100},
 {"R": 100},
 {"R": 100},
];
const shieldrate = [
 {"rate": 100},
 {"rate": 50},
 {"rate": 25},
 {"rate": 125/100},
 {"rate": 675/1000},
 {"rate": 3125/10000},
];