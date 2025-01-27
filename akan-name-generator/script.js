function getAkanName(dayOfWeek, gender) {
  const akanNames = {
    male: {
      Sunday: "Kwasi",
      Monday: "Kwadwo",
      Tuesday: "Kwabena",
      Wednesday: "Kwaku",
      Thursday: "Yaw",
      Friday: "Kofi",
      Saturday: "Kwame",
    },
    female: {
      Sunday: "Akosua",
      Monday: "Adwoa",
      Tuesday: "Abenaa",
      Wednesday: "Akua",
      Thursday: "Yaa",
      Friday: "Afua",
      Saturday: "Ama",
    },
  };

  return akanNames[gender]?.[dayOfWeek] || "Invalid input. Please try again.";
}

function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

document.getElementById("akanForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;

  if (!birthdate || !gender) {
    document.getElementById("result").textContent = "Please fill out all fields.";
    return;
  }

  const dayOfWeek = getDayOfWeek(birthdate);
  const akanName = getAkanName(dayOfWeek, gender);

  document.getElementById("result").textContent = `You were born on a ${dayOfWeek}, and your Akan name is ${akanName}.`;
});
