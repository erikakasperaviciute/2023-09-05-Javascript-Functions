function checkPassword(password) {
  let passwordLenght = password.length;

  if (!password.includes("#")) {
    console.log("Slaptažodis privalo turėti grotažymes.");
  } else if (passwordLenght < 16) {
    console.log(
      "Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
    );
  } else if (passwordLenght < 21) {
    console.log(
      "Slaptažodis yra tinkamas. Tačiau rekomenduojama, jog jis būtų bent 21 simbolio ilgumo."
    );
  } else {
    console.log("Slaptažodis yra tinkamas.");
  }
}
checkPassword("fsklndddfdfddfsnkfnls");
checkPassword("fsklnddd#");
checkPassword("fskdfffssfsfsffsn#");
checkPassword("fsklndddfdfdfffssfsfsffsn#");
