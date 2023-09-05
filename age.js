function classCheck(age) {
  if (isNaN(age)) {
    console.log("Netinkamai nurodytas amžius, amžius privalo būti skaičius");
  } else if (age < 0) {
    console.log("Įvestas amžius per mažas");
  } else if (age < 6) {
    console.log("Neina į mokyklą");
  } else if (age < 7) {
    console.log("Tikriausiai neina, bet gali būti pirmokas");
  } else if (age < 10) {
    console.log("Eina į pradinę klasę");
  } else if (age < 11) {
    console.log("gali būti penktokas");
  } else if (age < 14) {
    console.log("Eina į pagrindinę");
  } else if (age < 15) {
    console.log("gali būti devintokas");
  } else if (age < 18) {
    console.log("Eina į gimnaziją");
  } else if (age < 19) {
    console.log("Gali būti baigęs mokyklą");
  } else if (age < 120) {
    console.log("Mokyklą baigė");
  } else {
    console.log("Įvestas amžius per didelis");
  }
}

classCheck(4);
classCheck(6);
classCheck(10);
classCheck(15);
