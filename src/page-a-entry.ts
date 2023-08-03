const {PageA} = await import("./page-a");

const ele = document.createElement("section");
ele.innerText = PageA();
document.body.append(ele);
