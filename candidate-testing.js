const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question ="Who was the first American woman in space? ";
let correctAnswer= "Sally Ride";
let candidateAnswer= "";
let questions =["Who was the first American woman in space? ", "2) True or false: 5 kilometer == 5000 meters? ","3) (5 + 3)/2 * 10 = ? ","4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
     for (let i = 0; i < questions.length; i++){
    answers = input.question(questions[i]);
    candidateAnswers.push(answers);
    console.log(`Your Answer: ${candidateAnswers[i]} \nCorrect Answers: ${correctAnswers[i]}\n`);
    }
    return candidateAnswers;
}


//console.log(`Question 1 ${questions[0]} \n Your Answer: ${candidateAnswers[0]}\n Correct Answer `)

  //if (grade > 80){
  //    console.log("You are a star!");
  //  } else {
  //    console.log("Sorry that is not correct. Keeping reaching for the stars!");
  //  }


function gradeQuiz(candidateAnswers) {
  let mark = 0; 
  for (let i = 0; i < correctAnswers.length; i++){
   if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
   mark = mark+1;  
  }
 // console.log(mark)

 
//     return true;
//   } else {
//     return false;
//   //  
//  // let finalAnswers = correctAnswers === candidateAnswers;
//   console.log(finalAnswers);
} 
   

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 



  let grade;
  grade = (mark /questions.length) *100;
  console.log(`>>> Overall Grade ${grade}%(${mark} of ${questions.length} responses correct)<<<`)
if (grade >= 80){
  console.log(">>> Status: Pass <<<");
} else  {
  console.log(">>> Status: Failed <<<");
}

  return grade;
}



function runProgram() {
  askForName();
    // TODO 1.1c: Ask for candidate's name //
   console.log("Candidate Name: " + candidateName + "!");

  askQuestion();
  gradeQuiz(this.candidateAnswers);

}
  
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};