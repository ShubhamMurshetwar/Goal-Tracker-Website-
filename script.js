function addGoal() {
  const goalText = document.getElementById("goalInput").value.trim();
  const timeValue = document.getElementById("timeInput").value;
  const ampm = document.getElementById("ampmSelect").value;

  if (!goalText || !timeValue) {
    alert("Please fill all fields.");
    return;
  }

  const fullTime = convertTimeFormat(timeValue, ampm);
  const goalList = document.getElementById("goalList");

  const goalCard = document.createElement("div");
  goalCard.className = "goal-card";

  const goalHeader = document.createElement("div");
  goalHeader.className = "goal-header";
  goalHeader.innerHTML = `<span>${goalText}</span> <span>${fullTime}</span>`;

  goalCard.appendChild(goalHeader);
  goalList.appendChild(goalCard);

  // Clear inputs
  document.getElementById("goalInput").value = "";
  document.getElementById("timeInput").value = "";
}

function convertTimeFormat(time, ampm) {
  const [hour, minute] = time.split(":");
  return `${hour}:${minute} ${ampm}`;
}
