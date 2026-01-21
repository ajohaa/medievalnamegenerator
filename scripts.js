// remy helped with this part otherwise i would have been cooked

try {
const accessibilityToggle = document.getElementById("accessibilityToggle");

function generateName() {
  
}
document.getElementById("generateBtn").addEventListener("click", generateName);
document.getElementById("accessibleGenerateBtn").addEventListener("click", generateName);
} catch (error) {
  alert(error)
}

window.onload = function() {
  // alert("domloaded")
  // alert(accessibilityToggle);
  if (!accessibilityToggle) {
    console.error("Accessibility toggle not found");
    return;
  }

  document.querySelector("#toggleBox").addEventListener("click", () => {
    document.body.classList.toggle("accessible");
    // alert("Accessibility mode toggled");

    //input.checked true or false
  });
}

function getPrefix(weekdaySlider, gender) {
  let title;

switch (weekdaySlider) {
  case 0:
    title = gender === "male" ? "His Majesty" : "Her Majesty";
    break;
  case 1:
    title = gender === "male" ? "Prince" : "Princess";
    break;
  case 2:
    title = gender === "male" ? "Duke" : "Duchess";
    break;
  case 3:
    title = gender === "male" ? "Marquess" : "Marchioness";
    break;
  case 4:
    title = gender === "male" ? "Count" : "Countess";
    break;
  case 5:
    title = gender === "male" ? "Baron" : "Baroness";
    break;
  case 6:
    title = gender === "male" ? "Lord" : "Lady";
    break;
  default:
    title = "Knight";
    break;
    return title;
}
}