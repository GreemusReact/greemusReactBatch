const speed = 70;
const kmPenalityPoint = 5;

function speedLimit(cSpeed) {
  if (cSpeed < speed) {
    return "Good Safe Driving!";
  } else {
    let penalityPoint = Math.floor((cSpeed - speed) / kmPenalityPoint);
    if (penalityPoint < 10) {
      return "Speed Limit Crossed by Penalty Point: " + penalityPoint;
    } else {
      return "License Suspended";
    }
  }
}
let checkSpeed1 = speedLimit(65);
console.log(checkSpeed1);
let checkSpeed2 = speedLimit(96);
console.log(checkSpeed2);
let checkSpeed3 = speedLimit(124);
console.log(checkSpeed3);
