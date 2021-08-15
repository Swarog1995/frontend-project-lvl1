import readline from 'readline-sync';

const answer = () => {
  const name = readline.question('May i have your name ?');
  console.log(`Hi, ${name}!`);
};
export default answer;
