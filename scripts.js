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

window.onload = function () {
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
  }
  return title;
}

function getFirstName(gender) {
  const inputName = document.getElementById("userName").value || "";
  const firstLetter = inputName.charAt(0).toUpperCase();
  let chosenName = inputName || "Nameless";

  switch (firstLetter) {
    case 'A':
      chosenName = gender === "male" ? "Archibald" : "Amelia";
      break;
    case 'B':
      chosenName = gender === "male" ? "Bartholomew" : "Beatrice";
      break;
    case 'C':
      chosenName = gender === "male" ? "Cedric" : "Cecilia";
      break;
    case 'D':
      chosenName = gender === "male" ? "Dominic" : "Dorothea";
      break;
    case 'E':
      chosenName = gender === "male" ? "Edmund" : "Elizabeth";
      break;
    case 'F':
      chosenName = gender === "male" ? "Francis" : "Fiona";
      break;
    case 'G':
      chosenName = gender === "male" ? "Godfrey" : "Genevieve";
      break;
    case 'H':
      chosenName = gender === "male" ? "Henry" : "Helena";
      break;
    case 'I':
      chosenName = gender === "male" ? "Isaac" : "Isabella";
      break;
    case 'J':
      chosenName = gender === "male" ? "Jameson" : "Joan";
      break;
    case 'K':
      chosenName = gender === "male" ? "Kieran" : "Katherine";
      break;
    case 'L':
      chosenName = gender === "male" ? "Lionel" : "Lucille";
      break;
    case 'M':
      chosenName = gender === "male" ? "Maurice" : "Margaret";
      break;
    case 'N':
      chosenName = gender === "male" ? "Nathaniel" : "Nora";
      break;
    case 'O':
      chosenName = gender === "male" ? "Oswald" : "Olivia";
      break;
    case 'P':
      chosenName = gender === "male" ? "Percival" : "Penelope";
      break;
    case 'Q':
      chosenName = gender === "male" ? "Quentin" : "Quinn";
      break;
    case 'R':
      chosenName = gender === "male" ? "Reginald" : "Rosalind";
      break;
    case 'S':
      chosenName = gender === "male" ? "Sylvester" : "Seraphina";
      break;
    case 'T':
      chosenName = gender === "male" ? "Theodore" : "Theresa";
      break;
    case 'U':
      chosenName = gender === "male" ? "Ulric" : "Ursula";
      break;
    case 'V':
      chosenName = gender === "male" ? "Victor" : "Vivienne";
      break;
    case 'W':
      chosenName = gender === "male" ? "William" : "Winifred";
      break;
    case 'X':
      chosenName = gender === "male" ? "Xavier" : "Ximena";
      break;
    case 'Y':
      chosenName = gender === "male" ? "Yvain" : "Yolanda";
      break;
    case 'Z':
      chosenName = gender === "male" ? "Zachary" : "Zinnia";
      break;
    default:
      break;
  }

  return chosenName;
}

function getMiddleName() {
  const hex = document.getElementById("colorPicker").value;
  let middleName;

  function hexToRgb(h) {
    const hexVal = h.replace('#', '');
    const bigint = parseInt(hexVal, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return { h: h * 360, s, l };
  }

  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);

  let colorName;
  if (l < 0.1) {
    colorName = 'black';
  } else if (l > 0.9) {
    colorName = 'white';
  } else if (s < 0.15) {
    colorName = 'grey';
  } else if (h >= 15 && h < 45 && l < 0.55) {
    colorName = 'brown';
  } else if ((h >= 345 && h <= 360) || (h >= 0 && h < 15)) {
    colorName = 'red';
  } else if (h >= 15 && h < 45) {
    colorName = 'orange';
  } else if (h >= 45 && h < 75) {
    colorName = 'yellow';
  } else if (h >= 75 && h < 165) {
    colorName = 'green';
  } else if (h >= 165 && h < 260) {
    colorName = 'blue';
  } else if (h >= 260 && h < 290) {
    colorName = 'purple';
  } else if (h >= 290 && h < 330) {
    colorName = 'pink';
  } else {
    colorName = 'Stranger';
  }

  switch (colorName) {
    case 'red':
      middleName = 'Crimson';
      break;
    case 'orange':
      middleName = 'Flameborn';
      break;
    case 'yellow':
      middleName = 'Sunward';
      break;
    case 'green':
      middleName = 'Verdant';
      break;
    case 'blue':
      middleName = 'Azure';
      break;
    case 'purple':
      middleName = 'Nightviolet';
      break;
    case 'pink':
      middleName = 'Rosethorn';
      break;
    case 'brown':
      middleName = 'Oakroot';
      break;
    case 'black':
      middleName = 'Umbra';
      break;
    case 'grey':
      middleName = 'Stoneveil';
      break;
    case 'white':
      middleName = 'Ivory';
      break;
    default:
      middleName = 'Stranger';
  }

  return middleName;
}