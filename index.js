const productDetails1 = document.getElementById("details1");
const productDetails2 = document.getElementById("details2");
const productDetails3 = document.getElementById("details3");
const productDetails4 = document.getElementById("details4");
const productDetails5 = document.getElementById("details5");
const productDetails6 = document.getElementById("details6");
const productDetails7 = document.getElementById("details7");
const productDetails8 = document.getElementById("details8");

//Storing the values for each product
const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const product4 = document.getElementById("product4");
const product5 = document.getElementById("product5");
const product6 = document.getElementById("product6");
const product7 = document.getElementById("product7");
const product8 = document.getElementById("product8");

//Storing cart


// console.log(product1.value)
// console.log(product2.value)
// console.log(product3.value)
// console.log(product4.value)
// console.log(product5.value)
// console.log(product6.value)
// console.log(product7.value)
// console.log(product8.value)

function showDetails1() {
    productDetails1.style.display = "block";
    productDetails2.style.display = "none";
    productDetails3.style.display = "none";
    productDetails4.style.display = "none";
    productDetails5.style.display = "none";
    productDetails6.style.display = "none";
    productDetails7.style.display = "none";
    productDetails8.style.display = "none";
}
function showDetails2() {
    productDetails1.style.display = "none";
    productDetails2.style.display = "block";
    productDetails3.style.display = "none";
    productDetails4.style.display = "none";
    productDetails5.style.display = "none";
    productDetails6.style.display = "none";
    productDetails7.style.display = "none";
    productDetails8.style.display = "none";
}
function showDetails3() {
    productDetails1.style.display = "none";
    productDetails2.style.display = "none";
    productDetails3.style.display = "block";
    productDetails4.style.display = "none";
    productDetails5.style.display = "none";
    productDetails6.style.display = "none";
    productDetails7.style.display = "none";
    productDetails8.style.display = "none";
}
function showDetails4() {
    productDetails1.style.display = "none";
    productDetails2.style.display = "none";
    productDetails3.style.display = "none";
    productDetails4.style.display = "block";
    productDetails5.style.display = "none";
    productDetails6.style.display = "none";
    productDetails7.style.display = "none";
    productDetails8.style.display = "none";
}
function showDetails5() {
    productDetails1.style.display = "none";
    productDetails2.style.display = "none";
    productDetails3.style.display = "none";
    productDetails4.style.display = "none";
    productDetails5.style.display = "block";
    productDetails6.style.display = "none";
    productDetails7.style.display = "none";
    productDetails8.style.display = "none";
}
function showDetails6() {
    productDetails1.style.display = "none";
    productDetails2.style.display = "none";
    productDetails3.style.display = "none";
    productDetails4.style.display = "none";
    productDetails5.style.display = "none";
    productDetails6.style.display = "block";
    productDetails7.style.display = "none";
    productDetails8.style.display = "none";
}
function showDetails7() {
    productDetails1.style.display = "none";
    productDetails2.style.display = "none";
    productDetails3.style.display = "none";
    productDetails4.style.display = "none";
    productDetails5.style.display = "none";
    productDetails6.style.display = "none";
    productDetails7.style.display = "block";
    productDetails8.style.display = "none";
}
function showDetails8() {
    productDetails1.style.display = "none";
    productDetails2.style.display = "none";
    productDetails3.style.display = "none";
    productDetails4.style.display = "none";
    productDetails5.style.display = "none";
    productDetails6.style.display = "none";
    productDetails7.style.display = "none";
    productDetails8.style.display = "block";
}

function hideDetails1() {
    productDetails1.style.display = "none";
}
function hideDetails2() {
    productDetails2.style.display = "none";
}
function hideDetails3() {
    productDetails3.style.display = "none";
}
function hideDetails4() {
    productDetails4.style.display = "none";
}
function hideDetails5() {
    productDetails5.style.display = "none";
}
function hideDetails6() {
    productDetails6.style.display = "none";
}
function hideDetails7() {
    productDetails7.style.display = "none";
}
function hideDetails8() {
    productDetails8.style.display = "none";
}


let navList = document.getElementById("mob-navlist");
let drop = document.getElementById("dropdown1");
let cancel = document.getElementById("cancel");

function showDropDown(){
    navList.style.display = "block";
    drop.style.display = "none";
    cancel.style.display = "block";
}
function hideDropDown(){
    navList.style.display = "none";
    drop.style.display = "block";
    cancel.style.display = "none";
}



//For Cart
let cartBody = document.getElementById("cart-list");

const cartArray = [];

function creElement() {
    let listItem = document.createElement('li');
}
function addTie() {
    let listItem = document.createElement('li');
    const p_image = document.createElement("img");
    p_image.src = 'ties.jpg';
    listItem.appendChild(p_image);
    const tieTextNode = document.createTextNode(product1.name);
    listItem.appendChild(tieTextNode);
    cartBody.appendChild(listItem);
    let btnEle = document.createElement("button");
    const spanText = document.createTextNode("Remove");
    btnEle.appendChild(spanText);
    console.log(btnEle);
    listItem.appendChild(btnEle);
    cartArray.push(listItem);
    listItem.style.border = "1px solid black";
    productDetails1.style.display = "none";
    btnEle.addEventListener('click', clearPrdt);
    function clearPrdt() {
        listItem.style.border = "none";
        listItem.style.display = "none";
    }
}

function addClothe() {
    const listItem = document.createElement('li');
    const p_image = document.createElement("img");
    p_image.src = 'men clothes.jpg';
    listItem.appendChild(p_image);
    const tieTextNode = document.createTextNode(product2.name);
    listItem.appendChild(tieTextNode);
    cartBody.appendChild(listItem);
    cartArray.push(listItem);
    let btnEle = document.createElement("button");
    const spanText = document.createTextNode("Remove");
    btnEle.appendChild(spanText);
    console.log(btnEle);
    listItem.appendChild(btnEle);
    cartArray.push(listItem);
    listItem.style.border = "1px solid black";
    productDetails2.style.display = "none";
    btnEle.addEventListener('click', clearPrdt);
    function clearPrdt() {
        listItem.style.border = "none";
        listItem.style.display = "none";
    }
}
function addBag() {
    const listItem = document.createElement('li');
    const p_image = document.createElement("img");
    p_image.src = 'women bag.jpg';
    listItem.appendChild(p_image);
    const tieTextNode = document.createTextNode(product3.name);
    listItem.appendChild(tieTextNode);
    cartBody.appendChild(listItem);
    cartArray.push(listItem);
    let btnEle = document.createElement("button");
    const spanText = document.createTextNode("Remove");
    btnEle.appendChild(spanText);
    console.log(btnEle);
    listItem.appendChild(btnEle);
    cartArray.push(listItem);
    listItem.style.border = "1px solid black";
    productDetails3.style.display = "none";
    btnEle.addEventListener('click', clearPrdt);
    function clearPrdt() {
        listItem.style.border = "none";
        listItem.style.display = "none";
    }
}
function addFragrance() {
    const listItem = document.createElement('li');
    const p_image = document.createElement("img");
    p_image.src = 'fragrance.jpg';
    listItem.appendChild(p_image);
    const tieTextNode = document.createTextNode(product4.name);
    listItem.appendChild(tieTextNode);
    cartBody.appendChild(listItem);
    cartArray.push(listItem);
    let btnEle = document.createElement("button");
    const spanText = document.createTextNode("Remove");
    btnEle.appendChild(spanText);
    console.log(btnEle);
    listItem.appendChild(btnEle);
    cartArray.push(listItem);
    listItem.style.border = "1px solid black";
    productDetails4.style.display = "none";
    btnEle.addEventListener('click', clearPrdt);
    function clearPrdt() {
        listItem.style.border = "none";
        listItem.style.display = "none";
    }
}
function addBelt() {
    const listItem = document.createElement('li');
    const p_image = document.createElement("img");
    p_image.src = 'belts.jpg';
    listItem.appendChild(p_image);
    const tieTextNode = document.createTextNode(product5.name);
    listItem.appendChild(tieTextNode);
    cartBody.appendChild(listItem);
    cartArray.push(listItem);
    let btnEle = document.createElement("button");
    const spanText = document.createTextNode("Remove");
    btnEle.appendChild(spanText);
    console.log(btnEle);
    listItem.appendChild(btnEle);
    cartArray.push(listItem);
    listItem.style.border = "1px solid black";
    productDetails5.style.display = "none";
    btnEle.addEventListener('click', clearPrdt);
    function clearPrdt() {
        listItem.style.border = "none";
        listItem.style.display = "none";
    }
}
function addShoe() {
    const listItem = document.createElement('li');
    const p_image = document.createElement("img");
    p_image.src = 'shoes.jpg';
    listItem.appendChild(p_image);
    const tieTextNode = document.createTextNode(product6.name);
    listItem.appendChild(tieTextNode);
    cartBody.appendChild(listItem);
    cartArray.push(listItem);
    let btnEle = document.createElement("button");
    const spanText = document.createTextNode("Remove");
    btnEle.appendChild(spanText);
    console.log(btnEle);
    listItem.appendChild(btnEle);
    cartArray.push(listItem);
    listItem.style.border = "1px solid black";
    productDetails6.style.display = "none";
    btnEle.addEventListener('click', clearPrdt);
    function clearPrdt() {
        listItem.style.border = "none";
        listItem.style.display = "none";
    }
}
function addWatch() {
    const listItem = document.createElement('li');
    const p_image = document.createElement("img");
    p_image.src = 'wristWatch.jpg';
    listItem.appendChild(p_image);
    const tieTextNode = document.createTextNode(product7.name);
    listItem.appendChild(tieTextNode);
    cartBody.appendChild(listItem);
    cartArray.push(listItem);
    let btnEle = document.createElement("button");
    const spanText = document.createTextNode("Remove");
    btnEle.appendChild(spanText);
    console.log(btnEle);
    listItem.appendChild(btnEle);
    cartArray.push(listItem);
    listItem.style.border = "1px solid black";
    productDetails7.style.display = "none";
    btnEle.addEventListener('click', clearPrdt);
    function clearPrdt() {
        listItem.style.border = "none";
        listItem.style.display = "none";
    }
}
function addGlass() {
    const listItem = document.createElement('li');
    const p_image = document.createElement("img");
    p_image.src = 'pexels-nitin-dhumal-46710.jpg';
    listItem.appendChild(p_image);
    const tieTextNode = document.createTextNode(product8.name);
    listItem.appendChild(tieTextNode);
    cartBody.appendChild(listItem);
    cartArray.push(listItem);
    let btnEle = document.createElement("button");
    const spanText = document.createTextNode("Remove");
    btnEle.appendChild(spanText);
    console.log(btnEle);
    listItem.appendChild(btnEle);
    cartArray.push(listItem);
    listItem.style.border = "1px solid black";
    productDetails8.style.display = "none";
    btnEle.addEventListener('click', clearPrdt);
    function clearPrdt() {
        listItem.style.border = "none";
        listItem.style.display = "none";
    }
}
