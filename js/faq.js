document.addEventListener("DOMContentLoaded", function () {
  const faqData = [
    { 
      question: "Har I færdiglavede gavekurve, hvis man ikke selv vil lave en?", 
      answer: "Ja! Vi har et flot udvalg af anbefalede gavekurve til forskellige lejligheder." 
    },
    { 
      question: "Hvor kommer produkterne fra?",   
      answer: "Vi har et bredt netværk af samarbejdspartnere, som er dedikerede til at producere kvalitetsvarer til deres kunder." 
    },
    { 
      question: "Kan man selv tilføje ting til gavekurven, hvis man medbringer det til butikken?",                     
      answer: "Ja! hvis du selv har ting med til butikken kan vi godt tilføje det i gavekurven" 
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