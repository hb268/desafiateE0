const container = document.createElement('div');

const btn1 = document.getElementById('b1');
container.appendChild(btn1);

document.body.appendChild(container);

container.style.padding = "5px"; 
container.style.backgroundColor = "green";


container.addEventListener("click", () => {
   alert("Hola! Soy el div")
});
  
