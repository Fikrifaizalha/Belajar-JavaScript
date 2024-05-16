let United = "Juara FA";
let City = "Juara EPL";

switch (United) {
  case "Juara UCL":
    City = "Juara UEL";
    break;
  case "Juara FA":
    City = "Bapuk";
    break;
  case "Juara EPL":
    City = "Juara EPL";
    break;
  default:
    City = "biru";
}
console.log(City);
