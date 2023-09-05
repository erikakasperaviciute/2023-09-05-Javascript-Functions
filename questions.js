console.groupCollapsed("Pirmas lygis");

function firstLevel(playerAnswer11, playerAnswer12) {
  let correctAnswer11 = 1;
  let correctAnswer12 = 1;
  if (
    correctAnswer11 === playerAnswer11 &&
    correctAnswer12 === playerAnswer12
  ) {
    console.log("Patekai į kitą lygį. Abu atsakymai teisingi.");
  } else if (correctAnswer12 === playerAnswer12) {
    console.log(
      "Patekai į kitą lygį. Pirmas atsakymas buvo neteisngas, bet antras teisingas."
    );
  } else if (correctAnswer11 === playerAnswer11) {
    console.log(
      "Patekai į kitą lygį. Pirmas atsakymas buvo teisngas, bet antras neteisingas."
    );
  } else {
    console.log("Nepatekai į kitą lygį. Abu atsakymai neteisingi.");
  }
}

firstLevel(1, 0);
firstLevel(0, 0);
firstLevel(0, 1);
firstLevel(1, 1);

console.groupEnd();

console.groupCollapsed("Antras lygis");

function secondLevel(playerAnswer21, playerAnswer22) {
  let correctAnswer21 = 1;
  let correctAnswer22 = 1;
  if (
    correctAnswer21 === playerAnswer21 &&
    correctAnswer22 === playerAnswer22
  ) {
    console.log("Patekai į kitą lygį.");
  } else if (correctAnswer22 === playerAnswer22) {
    console.log(
      "Nepatekai į kitą lygį. Pirmas atsakymas buvo neteisngas, bet antras teisingas."
    );
  } else if (correctAnswer21 === playerAnswer21) {
    console.log(
      "Nepatekai į kitą lygį. Pirmas atsakymas buvo teisngas, bet antras neteisingas."
    );
  } else {
    console.log("Nepatekai į kitą lygį. Abu atsakymai neteisingi.");
  }
}
secondLevel(1, 0);
secondLevel(0, 1);
secondLevel(1, 1);
secondLevel(0, 0);

console.groupEnd();

console.groupCollapsed("Trečias lygis");

function thirdLevel(playerAnswer31, playerAnswer32, playerAnswer33) {
  let correctAnswer31 = 1;
  let correctAnswer32 = 1;
  let correctAnswer33 = 1;

  if (
    correctAnswer31 === playerAnswer31 &&
    correctAnswer32 === playerAnswer32 &&
    correctAnswer33 === playerAnswer33
  ) {
    console.log("Patekai į kitą lygį. Visi atsakymai teisingi.");
  } else if (
    correctAnswer31 === playerAnswer31 &&
    correctAnswer32 === playerAnswer32
  ) {
    console.log("Patekai į kitą lygį. Trečias atsakymas neteisingas.");
  } else if (
    correctAnswer31 === playerAnswer31 &&
    correctAnswer33 === playerAnswer33
  ) {
    console.log("Patekai į kitą lygį. Antras atsakymas buvo neteisngas.");
  } else if (
    correctAnswer32 === playerAnswer32 &&
    correctAnswer33 === playerAnswer33
  ) {
    console.log("Patekai į kitą lygį. Pirmas atsakymas buvo neteisingas.");
  } else if (correctAnswer31 === playerAnswer31) {
    console.log("Neptekai į kitą lygį. Antras ir trečias atsakymai neteisngi.");
  } else if (correctAnswer32 === playerAnswer32) {
    console.log("Neptekai į kitą lygį. Pirmas ir trečias atsakymai neteisngi.");
  } else if (correctAnswer33 === playerAnswer33) {
    console.log("Nepatekai į kitą lygį. Pirmas ir antras atsakymai neteisngi.");
  } else {
    console.log("Nepatekai į kitą lygį. Visi atsakymai neteisngi.");
  }
}

thirdLevel(1, 0, 0);
thirdLevel(1, 0, 1);
thirdLevel(1, 1, 0);
thirdLevel(1, 1, 1);
thirdLevel(0, 1, 1);
thirdLevel(0, 1, 0);
thirdLevel(0, 0, 1);
thirdLevel(0, 0, 0);
console.groupEnd();
