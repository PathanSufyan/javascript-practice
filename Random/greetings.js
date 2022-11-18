// if time is between 6 to 12: "Good Morning"
// if time is between 12 to 18: "Good afternoon"
// Otherise: "Good evening"

let time = 5;

if (time >= 6 && time < 12) {
  console.log("Good Morning");
} else if (time >= 12 && time <= 15) {
  console.log("Good Afternoon");
} else if (time > 15 && time <= 18) {
  console.log("Good Evening");
} else if (time > 18 && time <= 21) {
  console.log("Good Night");
} else {
  console.log("Sleep Well");
}
