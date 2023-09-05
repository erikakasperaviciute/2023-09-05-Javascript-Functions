function greetingCheck(isLoggedIn, userName, time, isBirthday) {
  let greetingText = "";
  let nameText = isLoggedIn && userName ? `, ${userName}` : "";
  let birthdayText =
    isLoggedIn && isBirthday ? " and have a great birthday!" : ".";

  if (time >= 5 && time < 13) {
    greetingText = "Good Morning";
  } else if (time >= 13 && time < 19) {
    greetingText = "Good Afternoon";
  } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
    greetingText = "Good Evening";
  } else {
    greetingText = "Hello";
  }

  let greetingOutput = greetingText + nameText + birthdayText;

  console.log(greetingOutput);
}

greetingCheck(true, "Ben", 12, true);
greetingCheck(true, "Mike", 19, false);
greetingCheck(true, "", 19, false);
greetingCheck(false, "", 25, false);
greetingCheck(false, "Ben", 3, false);
