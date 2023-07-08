// Fetch the feeds data from the API
fetch('https://feedsandnutrients.onrender.com/feeds')
  .then(response => response.json())
  .then(data => {
    const calculateNutrients = () => {
      // Get the feed inputs
      const feedInputs = [
        document.getElementById('feedInput1').value,
        document.getElementById('feedInput2').value,
        document.getElementById('feedInput3').value,
        document.getElementById('feedInput4').value,
        document.getElementById('feedInput5').value,
        document.getElementById('feedInput6').value
      ];

      // Calculate feed nutrients
      const feedNutrients = calculateFeedNutrients(feedInputs, data.feeds);

      // Display feed nutrients in the list
      displayFeedNutrients(feedNutrients);

      // Calculate nutrient recommendations
      const nutrientRecommendations = calculateNutrientRecommendations(feedNutrients, data.feeds);

      // Display nutrient recommendations in the list
      displayNutrientRecommendations(nutrientRecommendations);
    };

    // Add event listener to the "Calculate" button
    document.getElementById('calculateButton').addEventListener('click', calculateNutrients);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Function to calculate feed nutrients and nutrient recommendations
function calculateNutrients() {
  // Get the user input values
  const feedInput1 = document.getElementById("feedInput1").value;
  const feedInput2 = document.getElementById("feedInput2").value;
  const feedInput3 = document.getElementById("feedInput3").value;
  const feedInput4 = document.getElementById("feedInput4").value;
  const feedInput5 = document.getElementById("feedInput5").value;
  const feedInput6 = document.getElementById("feedInput6").value;

  // Perform the calculations
  const feedNutrients = {
    carbohydrates: (feedInput1 / 100) * 100,
    protein: (feedInput2 / 100) * 100,
    fiber: (feedInput3 / 100) * 100,
    vitamins: (feedInput4 / 100) * 100,
    minerals: (feedInput5 / 100) * 100,
    fats: (feedInput6 / 100) * 100,
  };

  const nutrientRecommendations = {
    // Define the nutrient recommendations based on the balanced diet
    // Replace with your actual nutrient recommendations

    carbohydrates: "Carbohydrates Recommendation",
    protein: "Protein Recommendation",
    fiber: "Fiber Recommendation",
    vitamins: "Vitamins Recommendation",
    minerals: "Minerals Recommendation",
    fats: "Fats Recommendation",
  };

  // Display the feed nutrients in the output textarea
  document.getElementById("feedOutputDisplay").value = JSON.stringify(feedNutrients);

  // Display the nutrient recommendations in the output textarea
  document.getElementById("nutrientsOutputDisplay").value = JSON.stringify(nutrientRecommendations);
}
// Function to calculate feed nutrients and nutrient recommendations
function calculateNutrients() {
  // Get the user input values
  const feedInput1 = document.getElementById("feedInput1").name;
  const feedInput2 = document.getElementById("feedInput2").value;
  const feedInput3 = document.getElementById("feedInput3").value;
  const feedInput4 = document.getElementById("feedInput4").value;
  const feedInput5 = document.getElementById("feedInput5").value;
  const feedInput6 = document.getElementById("feedInput6").value;

  // Perform the calculations
  const feedNutrients = {
    carbohydrates: Math.round(Math.random() * 1000) / 10,
    protein: Math.round(Math.random() * 1000) / 10,
    fiber: Math.round(Math.random() * 1000) / 10,
    vitamins: Math.round(Math.random() * 1000) / 10,
    minerals: Math.round(Math.random() * 1000) / 10,
    fats: Math.round(Math.random() * 1000) / 10,
  };
  

  const nutrientRecommendations = {
    // Define the nutrient recommendations based on the balanced diet
    // Replace with your actual nutrient recommendations

    carbohydrates: ["Maize", "Barley", "Oats"],
    protein: ["Soybean Meal", "Fish Meal", "Alfalfa"],
    fiber: ["Grass Hay", "Alfalfa Hay", "Beet Pulp"],
    vitamins: ["Carrots", "Spinach", "Oranges"],
    minerals: ["Calcium Carbonate", "Salt", "Dicalcium Phosphate"],
    fats: ["Soybean Oil", "Flaxseed", "Sunflower Oil"],
  };

  // Display the feed nutrients in the output textarea
  document.getElementById("feedOutputDisplay").value = JSON.stringify(feedNutrients);

  // Display the nutrient recommendations in the output textarea
  document.getElementById("nutrientsOutputDisplay").value = JSON.stringify(nutrientRecommendations);
}






// Function to add a new animal row
function addAnimalRow() {
  const animalsContainer = document.getElementById('animalsContainer');

  // Create a new row div
  const row = document.createElement('div');
  row.classList.add('animal-row');

  // Create input fields for animal type and count
  const animalTypeInput = document.createElement('input');
  animalTypeInput.type = 'text';
  animalTypeInput.placeholder = 'Animal Type';
  animalTypeInput.classList.add('animal-type-input');

  const animalCountInput = document.createElement('input');
  animalCountInput.type = 'text';
  animalCountInput.placeholder = 'conditions summary';
  animalCountInput.classList.add('animal-count-input');

  // Create a delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    animalsContainer.removeChild(row);
  });

  // Append the input fields and delete button to the row
  row.appendChild(animalTypeInput);
  row.appendChild(animalCountInput);
  row.appendChild(deleteButton);

  // Append the row to the animals container
  animalsContainer.appendChild(row);
}

// Add event listener to the "Add Animal" button
document.getElementById('addAnimalButton').addEventListener('click', addAnimalRow);
