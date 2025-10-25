// === Branvee Tips Script ===

// Load free tips from local tips.json
fetch('https://branvee-tips-254.github.io/Branveetips/Tips.json')
  .then(response => response.json())
  .then(data => {
    const tipsContainer = document.getElementById('tips-container');
    data.free.forEach(tip => {
      const div = document.createElement('div');
      div.className = 'tip-card';
      div.innerHTML = `
        <h3>${tip.title}</h3>
        <p>${tip.description}</p>
      `;
      tipsContainer.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error loading tips:', error);
  });