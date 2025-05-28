// faq page
document.addEventListener("DOMContentLoaded", function () {
  // Array
  const faqData = [
    { 
      question: "Har I færdiglavede gavekurve, hvis man ikke selv vil lave en?", 
      answer: "Ja! vi har et flot udvalg af andbefalet gavekurve til forskellige lejlighedder" 
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
 // Loop
  faqData.forEach(item => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "faq-question";

    const textSpan = document.createElement("span");
    textSpan.textContent = item.question;
    questionDiv.appendChild(textSpan);

    // arrow
    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.textContent = "▶";
    questionDiv.appendChild(arrow);

    const answerDiv = document.createElement("div");
    answerDiv.className = "faq-answer";
    answerDiv.textContent = item.answer;

    questionDiv.addEventListener("click", function () {
      
      if (answerDiv.style.display === "none" || answerDiv.style.display === "") {
        answerDiv.style.display = "block";
      } else {
        answerDiv.style.display = "none";
      }

      
      questionDiv.classList.toggle("open", answerDiv.style.display === "block");
    });

    faqContainer.appendChild(questionDiv);
    faqContainer.appendChild(answerDiv);
  });
});