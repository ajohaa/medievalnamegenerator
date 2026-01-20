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