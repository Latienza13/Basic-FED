var modal = document.querySelector(".modal");
var modalbttn = document.querySelector("#modalbtn");
var closemodl = document.querySelector(".closemodal");
var prod = object.create(product);
var prag = document.createElement("p");

function add1() {
 prag.appendChild(document.createTextNode())
}
// function add1() {
// prod.name ="";
// prod.brand = "";
// prod.price = "";
// document.querySelector("#prodname").innerHTML = object.Products[0].name;
// document.querySelector("#prodbrand").innerHTML = object.Products[0].brand;
// document.querySelector("#prodprice").innerHTML = object.Products[0].price;
// }
// function duplicate(){
//   document.querySelector(".product1").append.modal;
// }
// var add = document.createElement("div");
// var modal = document.querySelector("#cartmodal");
// var product = document.querySelector("#product1");
// // var cln = product.cloneNode(true);
// var button1 = document.querySelector("#orderbtn1");

// function addCart(){
//   alert("Product 1 has been added!");
//   modal.appendChild(cln);
  
// }
// var i = 0;
// var original = document.querySelector(".product1");

// function duplicate() {
//     var clone = original.cloneNode(true); // "deep" clone
//     clone.id = "product 1" + ++i;
//     // or clone.id = ""; if the divs don't need an ID
//     original.document.querySelector("#cartmodal").appendChild(clone);
// }

// button1.addEventListener("click", alert("Product q has been added!"), modal.appendChild(cln));

function Open(){
    modal.style.display = "block";
}
function Close() {
    modal.style.display ="none";
}

modalbttn.addEventListener("click", Open);
closemodl.addEventListener("click", Close);


// function addCart() {
//   alert("Product 1 has been added!");
//   add.appendChild(document.querySelector(".product 1"));
//   modal.appendChild(div);
  
//    document.querySelector(".modalcontent").appendChild(".product 1");
// }
// document.querySelector("#orderbtn1").addEventListener("click", addCart);

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
let active = document.getElementsByClassName('active');
let i = 1;

var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 3000);
  }
  repeater();
}
repeat();

