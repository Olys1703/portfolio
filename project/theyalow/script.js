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






let backButton = document.getElementById("back");

backButton.addEventListener('click', ()=>{
  document.location.href = "../../index.html"
})

backButton.textContent = "back";