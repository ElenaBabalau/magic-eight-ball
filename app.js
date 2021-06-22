let userName = ``; // If the user wants, he can enter his name in between the quotation marks.

if (`Jane`) {
  console.log(`Hello, Jane!`)
} else {
  console.log(`Hello!`);
}

let userQuestion = `Will I go on vacation this year?`;
console.log(`Will I go on vacation this year?`)

const randomNumber = Math.floor(Math.random() * 8);

let eightBall= ``;
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    break;
  case 1:
    eightBall = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    break;
  case 3:
    eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it'
    break;
  case 5:
    eightBall = 'My sources say no'
    break;
  case 6:
    eightBall = 'Outlook not so good'
    break;
  case 7:
    eightBall = 'Signs point to yes'
    break;
}

console.log(`The eight ball answered:
  ${eightBall}`);
