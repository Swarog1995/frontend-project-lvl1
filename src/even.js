import readline from 'readline-sync';
// eslint-disable-next-line import/extensions

function getRandomInt() {
  return Math.floor(Math.random() * 40);
}

const checkEven = (x) => x % 2 === 0;

const player = {};

// eslint-disable-next-line import/prefer-default-export
export const answer = () => {
  player.name = readline.question('May I have your name ? ');
  console.log(`Hi, ${player.name}!`);
};

export const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  do {
    const random = getRandomInt();
    const question = readline.question(`Question: ${random}\nYour answer: `);
    if (checkEven(random) && question === 'yes') {
      count += 1;
    }
    if (!checkEven(random) && question === 'no') {
      count += 1;
    }
  } while (count < 3);
  console.log(`Congratulations, ${player.name}!`);
};
