let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let para = document.querySelector("#para");
let count = 0;
function buttonAnimation(button, color) {

    button.style.backgroundColor = color;
    button.style.transform = "translateY(-5px)";

    setTimeout(() => {
        button.style.backgroundColor = "blue";
        button.style.transform = "translateY(0px)";
    }, 300);

}
btn1.addEventListener("click", () => {
  count++;
  para.innerText = count;
  buttonAnimation(btn1, "green");
});
btn2.addEventListener("click", () => {
  count--;
  para.innerText = count;
  buttonAnimation(btn2, "red");
  
});
btn3.addEventListener("click", () => {
  count = 0;
  para.innerText = count;
  buttonAnimation(btn3, "black");
});
