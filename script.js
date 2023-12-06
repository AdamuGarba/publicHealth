const facts = [
    "Vaccination has saved more lives than any other medical intervention.",
    "Public health measures like clean water and sanitation have had a profound impact on human health.",
    // ... your other facts
  ];
  
  const factContainer = document.querySelector(".fact-container");
  let currentFactIndex = 0;
  
  function showFact() {
    const fact = facts[currentFactIndex];
    factContainer.textContent = fact;
  
    currentFactIndex = (currentFactIndex + 1) % facts.length;
  
    factContainer.style.transition = "all 1s ease-in-out";
    factContainer.style.opacity = 0; // Fade out current fact
  
    setTimeout(() => {
      factContainer.style.opacity = 1; // Fade in next fact
    }, 400);
  }
  
  showFact(); // Show the first fact
  setInterval(showFact, 3000); // Change 3000 to adjust timing
  