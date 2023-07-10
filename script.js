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
    carbohydrates: getRandomExamples(["Maize", "Barley", "Oats", "Wheat", "Rice Bran", "Molasses"], 3),
    protein: getRandomExamples(["Soybean Meal", "Fish Meal", "Alfalfa", "Cottonseed Meal", "Peas", "Sunflower Meal"], 3),
    fiber: getRandomExamples(["Grass Hay", "Alfalfa Hay", "Beet Pulp", "Timothy Hay", "Corn Stalks", "Wheat Bran"], 3),
    vitamins: getRandomExamples(["Carrots", "Spinach", "Oranges", "Apples", "Kale", "Broccoli"], 3),
    minerals: getRandomExamples(["Calcium Carbonate", "Salt", "Dicalcium Phosphate", "Magnesium Oxide", "Copper Sulfate", "Zinc Oxide"], 3),
    fats: getRandomExamples(["Soybean Oil", "Flaxseed", "Sunflower Oil", "Coconut Oil", "Fish Oil", "Palm Oil"], 3),
  };
  
  // Function to randomly select examples from an array
  function getRandomExamples(array, count) {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  }
  

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



//*dropdown

// Add event listeners to the circles
const beefCircle = document.querySelector('.beef');
const dairyCircle = document.querySelector('.dairy');
const goatsCircle = document.querySelector('.goats');
const calfCircle = document.querySelector('.calf');

beefCircle.addEventListener('click', toggleDropDown);
dairyCircle.addEventListener('click', toggleDropDown);
goatsCircle.addEventListener('click', toggleDropDown);
calfCircle.addEventListener('click', toggleDropDown);

function toggleDropdown() {
  const dropdownContainer = this.querySelector('.dropdown-container');
  dropdownContainer.classList.toggle('show');
}

// Function to toggle the dropdown container
function toggleDropDown() {
  // Hide all dropdown containers
  const dropdownContainers = document.querySelectorAll('.dropdown-container');
  dropdownContainers.forEach((container) => {
    container.style.display = 'none';
  });

  // Show the clicked dropdown container
  const dropdownContainer = this.querySelector('.dropdown-container');
  dropdownContainer.style.display = 'block';
}


function toggleDropdown(button) {
  const dropdownContainer = button.nextElementSibling;
  dropdownContainer.classList.toggle('show');
}


function toggleDropdown(id) {
  const dropdown = document.getElementById(id + '-dropdown');
  dropdown.classList.toggle('show');
}

function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show");
}


/*PUT */
function updateFeedData(feedId, updatedData) {
  fetch(`https://feedsandnutrients.onrender.com/feeds/${feedId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Feed data updated:', data);
    // Handle the updated data accordingly
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle the error
  });
}



updateFeedData(feedId, updatedData);


/*DELETE */
function deleteFeedData(feedId) {
  fetch(`https://feedsandnutrients.onrender.com/feeds/${feedId}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      console.log('Feed data deleted');
      // Handle the deletion success
    } else {
      console.error('Error:', response.status);
      // Handle the deletion error
    }
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle the error
  });



/*POST */
function createFeedData(newData) {
  fetch('https://feedsandnutrients.onrender.com/feeds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('New feed data created:', data);
    // Handle the created data accordingly
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle the error
  });
}


