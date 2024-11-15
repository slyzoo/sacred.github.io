    // Function to fetch and apply background color from the JSON file
    fetch('jsons/theme.json')
      .then(response => response.json())
      .then(config => {
        // Access the background color from the JSON file
        document.body.style.backgroundColor = config.backgroundColor;
      })
      .catch(error => console.error('Error loading configuration:', error));