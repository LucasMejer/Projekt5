// FAQ
document.addEventListener("DOMContentLoaded", function () {
  // Array
  const faqData = [
    {
      question: "Hvem er Kirkens Korshær?",
      answer: "vi er en velgørenheds organisation som hjælpe folk med at finde et varmt sted at sove og en god omgang mad, samt er vi ambassadøre for genbrug."
    },
    {
      question: "hvordan tjener jeg points?",
      answer: "du kan tjene points ved at mælde dig friviligt til en af de mange opgaver på job siden."
    },
    {
      question: "chicken?",
      answer: "Jockey!!!"
    }
  ];

  const faqContainer = document.getElementById("faq");
  if (!faqContainer) return; 

  // Loop
  for (let i = 0; i < faqData.length; i++) {
    const item = faqData[i];

    const questionDiv = document.createElement("div");
    questionDiv.className = "faq-question";
    questionDiv.textContent = item.question;

    const answerDiv = document.createElement("div");
    answerDiv.className = "faq-answer";
    answerDiv.textContent = item.answer;

    questionDiv.addEventListener("click", function () {
      if (answerDiv.style.display === "none" || answerDiv.style.display === "") {
        answerDiv.style.display = "block";
      } else {
        answerDiv.style.display = "none";
      }
    });

    faqContainer.appendChild(questionDiv);
    faqContainer.appendChild(answerDiv);
  }
});
//nikolajs js slutter her