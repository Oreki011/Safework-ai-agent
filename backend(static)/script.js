// script.js for Safe Workplace AI Monitor

function analyzeText() {
  const text = document.getElementById("inputText").value.trim();
  const resultDiv = document.getElementById("result");

  if (!text) {
    resultDiv.textContent = " Please enter a message to analyze.";
    resultDiv.style.color = "#d32f2f";
    return;
  }

  // Very basic keyword-based analysis (for simulation purposes only)
  const harassmentKeywords = ["idiot", "shut up", "useless", "stupid", "dumb"];
  const genderBiasKeywords = ["women can't", "too emotional", "manpower", "she should", "he is better"];

  const lowerText = text.toLowerCase();

  let classification = " Safe Communication";

  for (const keyword of harassmentKeywords) {
    if (lowerText.includes(keyword)) {
      classification = " Harassment Detected";
      break;
    }
  }

  if (classification === " Safe Communication") {
    for (const keyword of genderBiasKeywords) {
      if (lowerText.includes(keyword)) {
        classification = " Gender Bias Detected";
        break;
      }
    }
  }

  resultDiv.textContent = classification;
  resultDiv.style.color =
    classification.includes("Harassment") ? "#c62828" :
    classification.includes("Gender Bias") ? "#ef6c00" :
    "#2e7d32";
}