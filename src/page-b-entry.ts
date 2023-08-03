const {PageB} = await import("./page-b");

const ele = document.createElement("section");
ele.innerText = PageB();
document.body.append(ele);
