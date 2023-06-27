let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/2.jpg') {
      myImage.setAttribute('src', 'img/1.jpg');
    } else {
      myImage.setAttribute('src', 'img/2.jpg');
    }
}
let myBotton = document.querySelector('botton');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字。');
    if(!myName){
      setUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent = '咕咕叽叽，' + myName;}
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '急急急，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }
 