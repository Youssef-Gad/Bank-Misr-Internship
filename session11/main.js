let score = prompt("Enter Exam score");

// I`f Statment
if (+score < 100 && +score >= 85) console.log("You got a A");
else if (+score < 85 && +score >= 75) console.log("You got a B");
else if (+score < 75 && +score >= 65) console.log("You got a C");
else if (+score < 65 && +score >= 50) console.log("You got a D");
else if (+score < 50 && +score >= 0) console.log("You got a F");
else if (isNaN(+score)) console.log("Not a Number");
else if (+score === 100) console.log("Perfect Score");
else console.log("Invalid Score");

// Switch Statment
switch (true) {
  case +score < 100 && +score >= 85:
    console.log("You got a A");
    break;
  case +score < 85 && +score >= 75:
    console.log("You got a B");
    break;
  case +score < 75 && +score >= 65:
    console.log("You got a C");
    break;
  case +score < 65 && +score >= 50:
    console.log("You got a D");
    break;
  case +score < 50 && +score >= 0:
    console.log("You got a F");
    break;
  case isNaN(+score):
    console.log("Not a Number");
    break;
  case +score === 100:
    console.log("Perfect Score");
    break;
  default:
    console.log("Invalid Score");
}
