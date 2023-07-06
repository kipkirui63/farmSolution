function calculateNutrients() {
    // Get the feed input value
    const feedInput = document.getElementById('feedInput').value;
  
    // Perform nutrient calculations (simplified example)
    const nutrientComposition = calculateNutrientComposition(feedInput);
  
    // Display feed nutrients
    const feedNutrientsList = document.getElementById('feedNutrientsList');
    feedNutrientsList.innerHTML = '';
    for (const nutrient in nutrientComposition) {
      const listItem = document.createElement('li');
      listItem.textContent = `${nutrient}: ${nutrientComposition[nutrient]}`;
      feedNutrientsList.appendChild(listItem);
    }
  
    // Get soil nutrient recommendations based on feed composition (simplified example)
    const soilRecommendations = getSoilRecommendations(nutrientComposition);
  
    // Display soil nutrient recommendations
    const soilRecommendationsList = document.getElementById('soilRecommendationsList');
    soilRecommendationsList.innerHTML = '';
    for (const nutrient in soilRecommendations) {
      const listItem = document.createElement('li');
      listItem.textContent = `${nutrient}: ${soilRecommendations[nutrient]}`;
      soilRecommendationsList.appendChild(listItem);
    }
  }
  
  // Example nutrient composition calculation function (replace with your actual logic)
  function calculateNutrientComposition(feedInput) {
    // Perform nutrient calculations based on the feed input
    // Replace this with your own implementation
    const nutrientComposition = {
      nitrogen: 10,
      phosphorus: 5,
      potassium: 8,
      calcium: 3
    };
  
    return nutrientComposition;
  }
  
  // Example soil nutrient recommendations function (replace with your actual logic)
  function getSoilRecommendations(nutrientComposition) {
    // Get soil nutrient recommendations based on the feed nutrient composition
    // Replace this with your own implementation
    const soilRecommendations = {
      nitrogen: nutrientComposition.nitrogen * 1.5,
      phosphorus: nutrientComposition.phosphorus * 0.8,
      potassium: nutrientComposition.potassium * 1.2,
      calcium: nutrientComposition.calcium * 0.9
    };
  
    return soilRecommendations;
  }
  