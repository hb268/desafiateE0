const container = document.createElement('div');

const btn1 = document.getElementById('b1');
container.appendChild(btn1);

document.body.appendChild(container);

container.style.padding = "5px"; 
container.style.backgroundColor = "green";

function holisBtn(event) {
    alert("Hola!");
    event.stopImmediatePropagation();
}

btn1.addEventListener("click", holisBtn);





function holis() {
     alert("Hola! Soy el div");
 }




container.addEventListener("click", holis);
