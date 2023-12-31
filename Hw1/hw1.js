let minNum = 1;
let maxNum = 100;
const result = getRandomNum(minNum, maxNum);

const input = document.querySelector("input");
const text = document.querySelector(".text");

//0~9
const numBtn = document.querySelectorAll(".numBtn");
numBtn.forEach((num) => {
    num.addEventListener("click", () => {
        input.value += num.value;
    })
})

//隨機數字
function getRandomNum(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}

//刪除
const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", () => {
    input.value = '';
})
//解答
const ansBtn = document.querySelector(".answer");
ansBtn.addEventListener("click", () => {
    alert(result);
})
//重新開始
const reStartBtn = document.querySelector(".restart");
reStartBtn.addEventListener("click", () => {
    location.reload();
})
//猜
const guessBtn = document.querySelector(".guess");
guessBtn.addEventListener("click", () => {
    guessNum = parseInt(input.value);
    if (isNaN(guessNum) || guessNum <= minNum || guessNum >= maxNum) {
        alert(`ꐦ請輸入${minNum} ~ ${maxNum}之間的數字!!!!ꐦ`);
        input.value = "";
    }
    else if (guessNum > result) {
        maxNum = guessNum;
        text.textContent = `請輸入${minNum} ~ ${maxNum}之間的數字`
        input.value = "";
    }
    else if (guessNum < result) {
        minNum = guessNum;
        text.textContent = `請輸入${minNum} ~ ${maxNum}之間的數字`
        input.value = "";
    }
    else if (guessNum === result) {
        text.textContent = "恭喜，猜對了٩(ˊᗜˋ )و!" 
        text.style.color = "red";
        guessBtn.addEventListener(removeImg())
    }
})


function removeImg() {
    const ImgDiv = document.getElementById("img");
    const removeImg = document.getElementById("img1")
    if (guessNum === result ||removeImg) {
            ImgDiv.removeChild(removeImg);
    }
    const newImg = document.createElement("img");
    newImg.src = "/Hw1/photo/結束.gif";
    newImg.style.width = "100%";
    ImgDiv.appendChild(newImg);

    setTimeout(function(){
        alert("遊戲即將重新開始")
        location.reload();
    },2000)
}