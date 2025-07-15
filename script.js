
function clearChoice(questionName) {
  const options = document.getElementsByName(questionName);
  for (let option of options) {
    option.checked = false;
  }
}

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let totalQuestions = 10;
  for (let i = 1; i <= totalQuestions; i++) {
    let options = document.getElementsByName("q" + i);
    let answered = Array.from(options).some(option => option.checked);
    if (!answered) {
      alert("Please answer all questions before submitting.");
      return;
    }
  }
  alert("Form submitted successfully!");
});
