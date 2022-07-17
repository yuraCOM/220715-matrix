
let timerId

let matrixBtn = document.querySelector("#matrixBtn")
matrixBtn.addEventListener('click', close)



const C = document.querySelector("canvas"),
    $ = C.getContext("2d"),
    W = (C.width = window.innerWidth),
    H = (C.height = window.innerHeight);


// let matrix = (
//     'abcdefghijklmnopqrstuvwxyz' +
//     'abcdefghijklmnopqrstuvwxyz'.toUpperCase() +
//     '0123456789' +
//     '!@#$%^&*-+'
// ).split('');

let matrix = (
    '01'
).split('');

let matrix1 = (
    '01'
).split('');

let matrix2 = (
    '0123456789' +
    '!#$%^&*()-+='
).split('');

let matrix3 = (
    'ᚕᚖᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚳᚴᚵᚶᚸᚹᚺᚻᚼᚽᚾᚿᛃᛄᛅᛆᛇᛈᛉᛊᛋᛏᛑᛒᛓᛔᛗᛘᛚᛛᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛩᛪᛮᛯᛰ'
).split('');

let matrix4 = (
    '牡マキグナルフ系路克瑞大市立鎰命科ャマ能力人要望り玉宏¥サ丹谷Ѫ灯影伝鶐〩通学阪は妻スティァ'
).split('');


let font = 15,
    col = W / font,
    arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

let wakeUp = "***Wake up, Neo..."
let hasyou = "***The Matrix has you!!!"
let rabbit = "***Follow the white rabbit."

let timerX = 1

let timer = 100

let count = 0

function init() {
    $.fillStyle = "rgba(0,0,0,.05)";
    $.fillRect(0, 0, W, H);
    $.fillStyle = "#0f0";
    $.font = font + "px arial";
}

function startDraw(word) {
    init()
    word = Array.from(word);
    let count = 0
    for (let i = 0; i < word.length; i++) {
        count = i
        let element = word[i];
        setTimeout(() => {
            $.fillText(element, i * font, 50);
        }, timer * i)
    }
}

function startDraw2(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        setTimeout(() => {
            $.clearRect(0, 0, W, H);
            init()
            let word = Array.from(element);
            for (let i = 0; i < word.length; i++) {

                let element = word[i];

                setTimeout(() => {
                    $.fillText(element, i * font, 50);
                }, 100 * i)
            }
        }, timerX)
        timerX += 120 * element.length
    }
    init()
}


function draw() {
    init()
    count += 1

    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            let txt = matrix[Math.floor(Math.random() * matrix.length)];
            $.fillText(txt, i * font, arr[i] * font);
            if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
            arr[i]++;
        }
    }, 1000)
}

function close() {
    clearInterval(timerId);
    setTimeout(() => {
        $.clearRect(0, 0, W, H)
    }, 1000)
}


startDraw2([wakeUp, hasyou, rabbit])

setTimeout(() => {
    $.clearRect(0, 0, W, H);
    timerId = setInterval(draw, 85)
    // setInterval(draw, 65)
}, timerX)

setInterval(() => {
    if (count >= 100) {
        matrix = matrix2
    }
    if (count >= 225) {
        matrix = matrix3
    }
    if (count >= 315) {
        matrix = matrix4
    }
    if (count >= 400) {
        matrix = matrix1
        count = 0
    }

}, 80)



window.addEventListener("resize", () => location.reload());

