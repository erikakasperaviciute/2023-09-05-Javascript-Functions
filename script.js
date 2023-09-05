//Functions

//funkcijos sukūrimas
// 1. inicijavimo žodelis - function
// 2. funkcijos pavadinimas
// 3. paprasti skliaustai () - funkcijos parametrams
// 4. riestiniai skliaustai {} - ką daro funkcija

//Funkcijos iškvietimas
// 1. Funkcijos pavadinimas
// 2. paprasti sklaiustai

//Be parametro
function hello() {
  console.log("hello");
}
hello();

//Su parametru
function helloWithName(personName) {
  console.log(`Hello, ${personName}`);
}
helloWithName("Steve");
helloWithName("John");

// function getPerimeter(height, width) {
//   console.log("perimetras: " + (height + width) * 2 + " cm.");
// }

// function getPerimeter(height, width) {
//   let perimeter = (height + width) * 2;
//   let output = `Perimetras: ${perimeter} cm.`;
//   console.log(output);
// }

function getPerimeter(height, width, units) {
  //arba//   let unitsText = "vnt";
  //arba
  let unitsText = units ? units : "vnt";

  if (units) {
    unitsText = units;
  }

  let perimeter = (height + width) * 2;
  let output = `Perimetras: ${perimeter} ${unitsText}.`;
  console.log(output);
}

getPerimeter(10, 10);
getPerimeter(10, 25, "cm");
getPerimeter(10, 30);
