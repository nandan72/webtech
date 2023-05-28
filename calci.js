let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".oper");
let display =document.querySelectorAll(".display-box")[0]
let clear=document.getElementById("clear")
let equal=document.getElementById("equal")
clear.onclick=()=>{
display.innerHTML=" "

}
numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      console.log(number);
        display.innerHTML+=`${number.innerHTML}`
    });
});
operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        display.innerHTML+=`${operator.innerHTML}`
        // console.log(operator,operators);
    });
});
equal.onclick=()=>{
    display.innerHTML=eval(display.innerHTML)
}


