var date = new Date();
var day = date.getDay()

if (day == 0){
 display.innerHTML = "Sunday";
  }
else if (day == 1) {
  display.innerHTML = "Monday";
}
else if (day == 2) {
  display.innerHTML = "Tuesday";
}
else if (day == 3) {
  display.innerHTML = "Wednesday";
}
else if (day == 4) {
  display.innerHTML = "Thursday";
}
else if (day == 5) {
  display.innerHTML = "Friday";
}
else {
  display.innerHTML = "Seattle"
}