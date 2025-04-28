// Async function to fetch the word definition
async function getDefinition() {
    const word = document.getElementById('wordInput').value.trim();
    
    if (word === "") {
      alert("Please enter a word to search.");
      return;
    }
  
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.title === "No Definitions Found") {
        document.getElementById('definition').innerHTML = `<p class="error">No definition found for "<strong>${word}</strong>".</p>`;
      } else {
        const definition = data[0].meanings[0].definitions[0].definition;
        document.getElementById('definition').innerHTML = `<h3>Definition of "${word}":</h3><p>${definition}</p>`;
      }
    } catch (error) {
      console.error('Error fetching the definition:', error);
      document.getElementById('definition').innerHTML = `<p class="error">Sorry, we couldn't fetch the definition. Please try again later.</p>`;
    }
  }
  
  document.getElementById("wordInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); 
      getDefinition();        
    }
  });
  
  