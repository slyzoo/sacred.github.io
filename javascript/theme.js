// Function to fetch and apply theme from the JSON file
fetch('jsons/theme.json')
  .then(response => response.json())
  .then(config => {
    // Set the body's background and font
    document.body.style.backgroundColor = config.bgColor;
    document.body.style.fontFamily = config.typeface;
    
    // Change background color of elements with the 'home-tab' class
    const homeTabs = document.querySelectorAll('.home-tab'); // Select all elements with class 'home-tab'
    homeTabs.forEach(tab => {
      tab.style.backgroundColor = config.homeTabBgColor; // Apply the background color from JSON config
    });

    // Change background color of elements with the 'home-tab' class
    const guildTabs = document.querySelectorAll('.guild-tab'); // Select all elements with class 'home-tab'
    guildTabs.forEach(tab => {
      tab.style.backgroundColor = config.guildTabBgColor; // Apply the background color from JSON config
    });
  })
  .catch(error => console.error('Error loading configuration:', error));