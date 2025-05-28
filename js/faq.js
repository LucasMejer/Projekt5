document.addEventListener("DOMContentLoaded", function () {
  const faqData = [
    { 
      question: "Hvem er Kirkens Korshær?", 
      answer: "vi er…" 
    },
    { 
      question: "hvordan tjener jeg points?",   
      answer: "du kan tjene…" 
    },
    { 
      question: "chicken?",                     
      answer: "Jockey!!!" 
    }
  ];

  const faqContainer = document.getElementById("faq");
  if (!faqContainer) return; 

  faqData.forEach(item => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "faq-question";

    // wrap the text in a span
    const textSpan = document.createElement("span");
    textSpan.textContent = item.question;
    questionDiv.appendChild(textSpan);

    // now the arrow
    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.textContent = "▶";
    questionDiv.appendChild(arrow);

    const answerDiv = document.createElement("div");
    answerDiv.className = "faq-answer";
    answerDiv.textContent = item.answer;

    questionDiv.addEventListener("click", () => {
      const opening = answerDiv.style.display === "none" || answerDiv.style.display === "";
      answerDiv.style.display = opening ? "block" : "none";
      questionDiv.classList.toggle("open", opening);
    });

    faqContainer.appendChild(questionDiv);
    faqContainer.appendChild(answerDiv);
  });
});