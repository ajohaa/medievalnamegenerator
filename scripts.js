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
      return title;
  }
}

function getFirstName() {
  const firstName = document.getElementById("userName").value;
  const firstLetter = firstName.charAt(0).toUpperCase();
  return firstLetter;

  switch (firstLetter) {
    case 'A':
      firstName = gender === "male" ? "Archibald" : "Amelia";
      break;
    case 'B':
      firstName = gender === "male" ? "Bartholomew" : "Beatrice";
      break;
    case 'C':
      firstName = gender === "male" ? "Cedric" : "Cecilia";
      break;
    case 'D':
      firstName = gender === "male" ? "Dominic" : "Dorothea";
      break;
    case 'E':
      firstName = gender === "male" ? "Edmund" : "Elizabeth";
      break;
    case 'F':
      firstName = gender === "male" ? "Francis" : "Fiona";
      break;
    case 'G':
      firstName = gender === "male" ? "Godfrey" : "Genevieve";
      break;
    case 'H':
      firstName = gender === "male" ? "Henry" : "Helena";
      break;
    case 'I':
      firstName = gender === "male" ? "Isaac" : "Isabella";
      break;
    case 'J':
      firstName = gender === "male" ? "Jameson" : "Joan";
      break;
    case 'K':
      firstName = gender === "male" ? "Kieran" : "Katherine";
      break;
    case 'L':
      firstName = gender === "male" ? "Lionel" : "Lucille";
      break;
    case 'M':
      firstName = gender === "male" ? "Maurice" : "Margaret";
      break;
    case 'N':
      firstName = gender === "male" ? "Nathaniel" : "Nora";
      break;
     case 'O':
      firstName = gender === "male" ? "Oswald" : "Olivia";
      break;
    case 'P':
      firstName = gender === "male" ? "Percival" : "Penelope";
      break;
    case 'Q':
      firstName = gender === "male" ? "Quentin" : "Quinn";
      break;
    case 'R':
      firstName = gender === "male" ? "Reginald" : "Rosalind";
      break;
    case 'S':
      firstName = gender === "male" ? "Sylvester" : "Seraphina";
      break; 
    case 'T':
      firstName = gender === "male" ? "Theodore" : "Theresa";
      break;
    case 'U':
      firstName = gender === "male" ? "Ulric" : "Ursula";
      break;
    case 'V':
      firstName = gender === "male" ? "Victor" : "Vivienne";
      break;
    case 'W':
      firstName = gender === "male" ? "William" : "Winifred";
      break;
    case 'X':
      firstName = gender === "male" ? "Xavier"  : "Ximena";
      break;
    case 'Y':
      firstName = gender === "male" ? "Yvain" : "Yolanda";
      break;
    case 'Z':
      firstName = gender === "male" ? "Zachary" : "Zinnia";
      break;
      return firstName;
  }
}

function getMiddleName() {
  const color = document.getElementById("colorPicker").value;
  let middleName;

  switch (color) {
    case "red":
      middleName = "Crimson";
      break;
    case "orange":
      middleName = "Flameborn";
      break;
    case "yellow":
      middleName = "Sunward";
      break;
    case "green":
      middleName = "Verdant";
      break;
    case "blue":
      middleName = "Azure";
      break;
    case "purple":
      middleName = "Nightviolet";
      break;
    case "pink":
      middleName = "Rosethorn";
      break;
    case "brown":
      middleName = "Oakroot";
      break;
    case "black":
      middleName = "Umbra";
      break;
    case "grey":
      middleName = "Stoneveil";
      break;
    case "white":
      middleName = "Ivory";
      break;
    default:
      middleName = "Stranger";
  }

  return middleName;
}