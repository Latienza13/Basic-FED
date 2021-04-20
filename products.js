const object =
{
"Products":[ 
    {
    "name": "Product 1",
    "brand": "Product Brand",
    "price": 999.99
     },
     {
    "name": "Product 2",
    "brand": "Product Brand",
    "price": 999.99
     },
     {
    "name": "Product 3",
    "brand": "Product Brand",
    "price": 999.99
     },
     {
    "name": "Product 4",
    "brand": "Product Brand",
    "price": 999.99
     },
    {
    "name": "Product 5",
    "brand": "Product Brand",
    "price": 999.99
     },
       {
    "name": "Product 6",
    "brand": "Product Brand",
    "price": 999.99
     },
       {
    "name": "Product 7",
    "brand": "Product Brand",
    "price": 999.99
     },
       {
    "name": "Product 8",
    "brand": "Product Brand",
    "price": 999.99
     },
    ]
}       
    

document.querySelector("#prodname1").innerHTML = object.Products[0].name;
document.querySelector("#prodname2").innerHTML = object.Products[1].name;
document.querySelector("#prodname3").innerHTML = object.Products[2].name;
document.querySelector("#prodname4").innerHTML = object.Products[3].name;
document.querySelector("#prodname5").innerHTML = object.Products[4].name;
document.querySelector("#prodname6").innerHTML = object.Products[5].name;
document.querySelector("#prodname7").innerHTML = object.Products[6].name;
document.querySelector("#prodname8").innerHTML = object.Products[7].name;

document.querySelector(".prodbrand1").innerHTML = object.Products[0].brand;
document.querySelector(".prodbrand2").innerHTML = object.Products[1].brand;
document.querySelector(".prodbrand3").innerHTML = object.Products[2].brand;
document.querySelector(".prodbrand4").innerHTML = object.Products[3].brand;
document.querySelector(".prodbrand5").innerHTML = object.Products[4].brand;
document.querySelector(".prodbrand6").innerHTML = object.Products[5].brand;
document.querySelector(".prodbrand7").innerHTML = object.Products[6].brand;
document.querySelector(".prodbrand8").innerHTML = object.Products[7].brand;

document.querySelector(".prodprice1").innerHTML = object.Products[0].price;
document.querySelector(".prodprice2").innerHTML = object.Products[1].price;
document.querySelector(".prodprice3").innerHTML = object.Products[2].price;
document.querySelector(".prodprice4").innerHTML = object.Products[3].price;
document.querySelector(".prodprice5").innerHTML = object.Products[4].price;
document.querySelector(".prodprice6").innerHTML = object.Products[5].price;
document.querySelector(".prodprice7").innerHTML = object.Products[6].price;
document.querySelector(".prodprice8").innerHTML = object.Products[7].price;

