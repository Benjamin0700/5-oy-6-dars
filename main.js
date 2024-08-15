let h1 = document.querySelector(".h1");
let ism = prompt(`Ism kiriting:`)

h1.innerHTML = `<mark>${ism}</mark>`;
h1.style.fontSize = "200px";
h1.style.textAlign = "center";
h1.style.backgroundColor = "blue";
document.body.style.backgroundColor = "blue";