let myButton1 = document.querySelector('#alert-button1')
myButton1.addEventListener('click', ()=>{alert('클릭했습니다')})

let myButton2 = document.querySelector('#alert-button2')
myButton2.addEventListener('click', ()=>{alert('바나나를 들었습니다')})

let myButton3 = document.querySelector('#alert-button3')
myButton3.addEventListener('click', ()=>{alert('냠냠')})

let myButton4 = document.querySelector('#alert-button4')
myButton4.addEventListener('click', ()=>{alert('찰칵! 찰칵!')})

let myButton5 = document.querySelector('#alert-button5')
myButton5.addEventListener('click', ()=>{alert('그르릉')})

let myButton6 = document.querySelector('#alert-button6')
myButton6.addEventListener('click', ()=>{alert('냠')})


let myButton7 = document.querySelector('#alert-button7')
myButton7.addEventListener('click', ()=>{
    alert('냐옹');
    document.body.style.backgroundColor = "#EFB6C8";

})

//const myButton7 = document.querySelector("#alert-button7");

const colorButton = document.querySelector("#color-button");
colorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#A66E38";
});

const textbutton = document.querySelector("#changeText");
const title1 = document.querySelector("#title");
textbutton.addEventListener("click", () => {
    title1.textContent = '새로운 이름';
});

const title = document.querySelector("#title");
const titleInput = document.querySelector("#title-input");
const titleInputButton = document.querySelector("#title-input-button");

titleInputButton.addEventListener("click", () => {
    title.textContent = titleInput.value
});

const commandList = document.querySelector("#command-list ");
const commandInput = document.querySelector("#command-input");
const commandInputButton = document.querySelector("#command-input-btn");

commandInputButton.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = commandInput.value;
    commandList.append(li);
});

//alert('바나나가 생성되었습니다')