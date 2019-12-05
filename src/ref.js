//let items = document.querySelectorAll('.carousel .item');
/*let currentItem = 0;
console.log('items')
document.getElementById('first-item').addEventListener('mouseup', ()=>{
  console.log('go')
  document.location.href = "../project/theyalow/index.html"
})
document.getElementById('second-item').addEventListener('mouseup', ()=>{
  console.log('go')
  document.location.href = "../project/repair-design-project/index.html"
})
document.getElementById('third-item').addEventListener('mouseup', ()=>{
  console.log('go')
  document.location.href = "../project/canvas/index.html"
})
*/
console.log(document.body.clientWidth)

let buttonSize = document.getElementById('mob-or-desk');
let desk = true;
buttonSize.textContent = "mobile";

/*if (document.body.clientWidth > 640) {
  buttonSize.textContent = "mobile"
  desk = true;
}
else {
  buttonSize.textContent = "desktop"
  desk = false;
}*/

let content = document.getElementById('content');



/*
document.body.onresize = function (){
  console.log('booom')
  if (document.body.clientWidth > 640) {
    buttonSize.textContent = "mobile"
    desk = true;
  }
  else {
    buttonSize.textContent = "desktop"
    desk = false;
  }
};*/

buttonSize.addEventListener('click', ()=>{
  
  changeSize();
})





function changeSize () {
  if (desk) {
    console.log("resize button")
    content.style.width = '375px'
    buttonSize.textContent = "desktop"
    desk = false;
  }
  else {
    console.log("resize button")
    content.style.width = '1200px'
    buttonSize.textContent = "mobile";
    desk = true;
  }
}

//---media
/*
content.onresize = function () {
  if (content.width < 700) {
    document.getElementById("description1").style.flexDirection = "column";
    document.getElementById("description1").style.alignItems = "center";
    document.getElementById("description1").style.justifyContent = "space-around";
    document.getElementById("description1").style.height = "300px";
    document.getElementById("description2").style.flexDirection = "column";
    document.getElementById("description2").style.alignItems = "center";
    document.getElementById("description2").style.justifyContent = "space-around";
    document.getElementById("description2").style.height = "300px";
    document.getElementById("description3").style.flexDirection = "column";
    document.getElementById("description3").style.alignItems = "center";
    document.getElementById("description3").style.justifyContent = "space-around";
    document.getElementById("description3").style.height = "300px";
    document.getElementById("arrow1").style.display = "none";
    document.getElementById("arrow2").style.display = "none";
  }
  else {
    document.getElementById("description1").style.flexDirection = "row";
    document.getElementById("description1").style.alignItems = "center";
    document.getElementById("description1").style.justifyContent = "space-around";
    document.getElementById("description1").style.height = "500px";
    document.getElementById("description2").style.flexDirection = "column";
    document.getElementById("description2").style.alignItems = "center";
    document.getElementById("description2").style.justifyContent = "space-around";
    document.getElementById("description2").style.height = "500px";
    document.getElementById("description3").style.flexDirection = "column";
    document.getElementById("description3").style.alignItems = "center";
    document.getElementById("description3").style.justifyContent = "space-around";
    document.getElementById("description3").style.height = "500px";
    document.getElementById("arrow1").style.display = "inline-block";
    document.getElementById("arrow2").style.display = "inline-block";
  }
}*/



let backButton = document.getElementById("back");

backButton.addEventListener('click', ()=>{
  document.location.href = ".../src/index.html"
})