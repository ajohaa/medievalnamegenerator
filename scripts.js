document.getElementById('generateBtn').addEventListener('click', generateName);
accessibleGenerateBtn.addEventListener("click", generateName);

const accessibilityToggle = document.getElementById("accessibilityToggle");

accessibilityToggle.addEventListener("change", () => {
  document.body.classList.toggle("accessible");
});
