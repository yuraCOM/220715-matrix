// let myCanvas = document.querySelector("canvas");
// let ctx = myCanvas.getContext("2d");

// myCanvas.height = window.innerHeight;
// myCanvas.width = window.innerWidth;

// // let mass = "0123456789+-*/=!#$%^&()_";
// let mass = "0123456789";
// // let mass = "ᚕ ᚖ ᚠ ᚡ ᚢ ᚣ ᚤ ᚥ ᚦ ᚧ ᚨ ᚩ ᚪ ᚫ ᚬ ᚭ ᚮ ᚯ ᚰ ᚱ  ᚳ ᚴ ᚵ ᚶ ᚸ ᚹ ᚺ ᚻ ᚼ ᚽ ᚾ ᚿ  ᛃ ᛄ ᛅ ᛆ ᛇ ᛈ ᛉ ᛊ ᛋ ᛏ ᛑ ᛒ ᛓ ᛔ  ᛗ ᛘ ᛚ ᛛ ᛜ ᛝ ᛞ ᛟ ᛠ ᛡ ᛢ ᛣ ᛤ ᛥ ᛦ ᛩ ᛪ ᛮ ᛯ ᛰ"

// // let mass =     "牡 マ キ グ ナ ル フ 系 路 克 瑞 大 市 立 鎰 命 科 ャ マ 能 力 人要 望 り 玉 宏 ¥ サ 丹 谷 Ѫ 灯 影 伝 鶐 〩 通 学 阪 は 妻 ス テ ィァ";

// // mass.replace(/\s+/g, " ").trim();
// mass.split("");

// let font_size = 30;

// let columns = myCanvas.width / font_size;
// let raw = myCanvas.height / font_size;

// let drop = [];

// for (let index = 0; index < columns; index++) {
//     drop[index] = 1;
// }

// function draw() {
//     ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//     ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
//     ctx.fillStyle = "#0F0";
//     ctx.font = font_size + "px arial";

//     for (let i = 0; i < drop.length; i++) {
//         let txt = mass[Math.floor(Math.random() * mass.length)];

//         ctx.fillText(txt, i * font_size, drop[i] * font_size,)

//         if (drop[i] * font_size > myCanvas?.height && Math.random() > 0.975) {
//             drop[i] = 0
//             drop[i]++
//         }

//     }

// }

// // setInterval(draw, 33)
// draw()


// console.log(drop, raw);


const C = document.querySelector("canvas"),
    $ = C.getContext("2d"),
    W = (C.width = window.innerWidth),
    H = (C.height = window.innerHeight);

// let str = "А+Б0В-Г1Д=Е2Ё Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я",
//     matrix = str.split("");

// let matrix = (
//     'abcdefghijklmnopqrstuvwxyz' +
//     'abcdefghijklmnopqrstuvwxyz'.toUpperCase() +
//     '0123456789' +
//     '!@#$%^&*-+'
// ).split('');

let matrix = (
    '0123456789' +
    '!@#$%^&*-+'
).split('');

let font = 15,
    col = W / font,
    arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

function draw() {
    $.fillStyle = "rgba(0,0,0,.05)";
    $.fillRect(0, 0, W, H);
    $.fillStyle = "#0f0";
    $.font = font + "px system-ui";
    for (let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        $.fillText(txt, i * font, arr[i] * font);
        if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
        arr[i]++;
    }
}

setInterval(draw, 55);

window.addEventListener("resize", () => location.reload());

