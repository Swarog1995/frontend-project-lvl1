import * as readline from 'readline-sync';
console.log('Welcome to the Brain Games');

// Wait for user's response.

const answer = () => {
  console.log(`Hi ${questions()}!`);
};
 
const questions = ()=>{
   const quest = readline.question('May I have your name? ');
   return quest;
}
export default answer;
