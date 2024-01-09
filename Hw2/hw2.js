window.onload = function () {
    restartBtn.disabled = true;
    ansBtn.disabled = true;
    guessBtn.disabled = true;
}

//隨機數字
function getRandomNum() {
    let numbers = [];
    //0~9
    for (let i = 0; i < 9; i++) {
        numbers.push(i);
    }
    //pick 4 numbers
    let fourNum = [];
    for (let y = 0; y < 4; y++) {
        let randomIndex = Math.floor(Math.random() * numbers.length);
        let selectNumber = numbers.splice(randomIndex, 1)[0];
        fourNum.push(selectNumber);
    }
    return ansNumber = fourNum.join('');
}
//開始
const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", () => {
    restartBtn.disabled = false;
    ansBtn.disabled = false;
    guessBtn.disabled = false;
    startBtn.disabled = true;
    getRandomNum();
});
//解答
const ansBtn = document.querySelector("#ans");
ansBtn.addEventListener("click", () => {
    alert(`答案是:${ansNumber}`);
})
//重新開始
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", () => {
    alert(`本局的答案是:${ansNumber}`)
    location.reload();
})

//遊戲歷程
const historyList = document.querySelector("#history_list");

function appendHistory(a = 0, b = 0, guessNum = "1234") {
    const colorClass = a === 4 ? "bg-success" : " bg-danger";
    historyList.innerHTML += `
        <li class="list-group-item">
        <span class="badge ${colorClass}">${a}A${b}B</span> ${guessNum}
        </li>`;
}

//邏輯區
const guessBtn = document.querySelector("#guess");
const inputText = document.querySelector("#input");
guessBtn.addEventListener("click", () => {
    const val = inputText.value.trim();
    if (!isValidInput(val)) {
        alert("請輸入4位不重複的數字!!")
        inputText.value = "";
        return;
    }
    let a = 0;
    let b = 0;
    for (let i = 0; i < ansNumber.length; i++) {
        if (val[i] === ansNumber[i]) {
            a++;
        } else if (ansNumber.includes(val[i])) {
            b++;
        }
    }
    if (a === 4) {
        alert("恭喜你猜對了!")
    }
    inputText.value = "";
    appendHistory(a, b, val)
    // console.log(`${a}A${b}B`);
})

//正則表達式
function isValidInput(input) {
    const regex = /^(?!.*(\d).*\1)([0-9]){4}$/;
    return regex.test(input);
}