// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// function multiply(num1, num2) {
//     let res = num1 * num2;
//     return res;
// }
// multiply(4, 7);
// document.querySelector('html').addEventListener('click', () => {
//     alert('你干嘛，诶呦~');
// });

// document.querySelector('html').onclick = function(){
//     alert('你干嘛，诶呦~');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IREINA.jpg'){
        myImage.setAttribute('src', 'images/IREINA_Mirror.png');
    } else {
        myImage.setAttribute('src', 'images/IREINA.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字：');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Ireina卡哇伊斯内————' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ireina卡哇伊斯内————' + storedName;
}

myButton.onclick = function() {
    setUserName();
}