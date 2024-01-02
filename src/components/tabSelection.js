  function tabSelection() {
    // Using setTimeout to ensure the DOM is fully loaded before executing the script
    setTimeout(() => {
      // Selecting the dropdown text element and all tab elements
      const dropButtonText = document.querySelector(".dropdown-text");
      const tabsCollection = [...document.querySelectorAll(".w-tab-menu [role='tab']")];
  
      function handleTabSelection(event) {
        // Destructuring the currentTarget property from the event object
        const { currentTarget } = event;
  
        // Extracting the text content of the selected tab
        const tabValue = currentTarget.innerText;
  
        // Updating the dropdown button text with the selected tab value
        dropButtonText.innerText = tabValue;
      }
  
      // Adding click event listeners to all tab elements
      tabsCollection.forEach(tab => tab.addEventListener('click', handleTabSelection, true));
    }, 1000); // Delaying execution by 1000 milliseconds (1 second)
  }
  

export default tabSelection;