let sn = document.getElementById("start");
let en = document.getElementById("end");
let btn = document.getElementById("submit");
let table = document.getElementById("table");
let cancel = document.getElementById("cancel");

btn.onclick = () => {
    let startNumber = parseInt(sn.value);
    let endNumber = parseInt(en.value);

    if (endNumber < startNumber) {
        alert("Enter the correct end value.");
    } else {
        table.innerHTML = ''; 

        for (let i = startNumber; i <=endNumber; i++) {
            let cube = i * i * i;
            let div = document.createElement("div");
            div.setAttribute("class", "cubes");
            div.textContent = cube;
            table.appendChild(div); 
        }
    }
};
cancel.onclick= ()=>{
    table.innerHTML=""
    sn.value=""
    en.value=""

}
