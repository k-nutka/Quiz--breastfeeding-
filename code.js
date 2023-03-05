window.onload = function () {
  console.log("Start");
};
let form = document.querySelector(".questions-box");
let answers = Array.from(document.querySelectorAll("input"));
let questions = Array.from(document.querySelectorAll(".question"));
let checkAnswersButton = document.getElementById("checkResult");
let showAnswersButton = document.getElementById("showAnswers");
let resulSummary = document.getElementById("resultSummary");
let h2 = document.querySelector("h2");
let modal = document.getElementById("info");
let correctAnswers = Array.from(document.querySelectorAll(".correct"));
let closeButton = document.getElementById("close");






let checkAnswers = (e) => {

  e.preventDefault();

  let choosenAnswers = answers.filter((answer) => answer.checked);
  
  console.log("Ilość pytań: " + questions.length);
  console.log("Zaznaczone odpowiedzi " + choosenAnswers.length);
  let allAnswers = choosenAnswers.length === questions.length;
  console.log("allAnswers: " + allAnswers);

  let goodAnswers = 0;
  let bedAnswers = 0;

  if (!allAnswers) {
    modal.style.display = "block";
    h2.innerHTML = "Sprawdź ponownie i udziel odpowiedzi na wszystkie pytania!";
  } else {
    for (let choosenAnswer of choosenAnswers) {
      if (choosenAnswer.value === "true") {
        goodAnswers++;
      }
      else{
        bedAnswers++;
      }
    }; 
    
    if(goodAnswers === questions.length){
      modal.style.display = "block";
      h2.innerHTML= "Gratulacje, wszystkie odpowiedzi są prawidłowe!"
    }else{
    modal.style.display = "block";
    h2.innerHTML = `Liczba prawidłowych odpowiedzi: ${goodAnswers}.`+"<br>" + `Liczba nieprawidłowych odpowiedzi: ${bedAnswers}`;
    
  }
}

window.scrollTo(0,0);

};


let showAnswers = (event) => {
   event.preventDefault();
   correctAnswers.forEach(correctAnswer => {
    correctAnswer.style.backgroundColor = "#df4fdf"
    correctAnswer.style.fontWeight = "bold"
  });
  window.scrollTo(0,0);


   
}

let clearQuiz = (e)=>{
  e.preventDefault();
  let choosenAnswers = answers.filter((answer) => answer.checked);
 
  for(let choosenAnswer of choosenAnswers){
    choosenAnswer.checked = false;
  }
  modal.style.display = "none";
  showAnswersButton.removeAttribute("disabled", "");
};



checkAnswersButton.addEventListener("click", (e) => checkAnswers(e));
showAnswersButton.addEventListener("click", (event) => showAnswers(event));
closeButton.addEventListener("click", (e) => clearQuiz(e));




