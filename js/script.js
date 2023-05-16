// getting all required elements

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//  Start If Quiz Button

start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); // Show Info Box
};

//  Exit If Quit Button

exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); // Hide the Info Box
};

//  Continue If Continue Button

continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); // Hide the Info Box
  quiz_box.classList.add("activeQuiz"); // Show thw Quiz Box
  showQuestion(0);
  queCounter(1);
};

let que_count = 0;
let que_numb = 1;

let next_btn = quiz_box.querySelector(".next_btn");

// If Next Button Clicked
next_btn.onclick = () => {
  if (que_count > questions.length - 1) {
    console.log("Questions Completed");
  } else {
    que_count++;
    que_numb++;
    showQuestion(que_count);
    queCounter(que_numb);
  }
};

// Getting questions and options from array
function showQuestion(index) {
  const que_text = document.querySelector(".que_text");
  const option_list = document.querySelector(".option_list");
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option">' +
    questions[index].options[0] +
    "<span></span></div>" +
    '<div class="option">' +
    questions[index].options[1] +
    "<span></span></div>" +
    '<div class="option">' +
    questions[index].options[2] +
    "<span></span></div>" +
    '<div class="option">' +
    questions[index].options[3] +
    "<span></span></div>";
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option_list.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

// function optionSelected(answer) {
//   let userAns = answer.textContent();
//   console.log(userAns);
// }

function queCounter(index) {
  const bottom_ques_counter = quiz_box.querySelector(".total_que");
  let totalQuesCountTag =
    " <span><p>" +
    index +
    "</p>Of<p>" +
    questions.length +
    "</p>Questions</span>";
  bottom_ques_counter.innerHTML = totalQuesCountTag;
}
