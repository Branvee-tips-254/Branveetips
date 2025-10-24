// ===== Branvee Tips App Script =====

// Fetch and show Free Tips from online JSON
function loadFreeTips() {
  fetch('https://yourgithubusername.github.io/branveetips/tips.json')
    .then(response => response.json())
    .then(data => {
      showTips(data.free, "freeTips");
    })
    .catch(err => {
      document.getElementById("freeTips").innerHTML = "<p>Unable to load tips.</p>";
    });
}

// VIP Room access with password
function openVIP() {
  let pass = prompt("Enter VIP Password:");

  // You can change this password anytime
  if (pass === "branveeVIP2025") {
    fetch('https://yourgithubusername.github.io/branveetips/tips.json')
      .then(response => response.json())
      .then(data => {
        showTips(data.vip, "vipTips");
      });
  } else {
    alert("Incorrect password. Contact admin for access.");
  }
}

// Display Tips
function showTips(tips, divId) {
  const container = document.getElementById(divId);
  container.innerHTML = "";
  tips.forEach(tip => {
    const card = document.createElement("div");
    card.className = "tip-card";
    card.innerHTML = `
      <h3>${tip.match}</h3>
      <p>${tip.prediction}</p>
    `;
    container.appendChild(card);
  });
}

// Load free tips automatically
loadFreeTips();