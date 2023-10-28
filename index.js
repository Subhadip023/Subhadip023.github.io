document.addEventListener("DOMContentLoaded", function() {
  // Code here will run after the DOM is fully loaded

  // Get the element with the class "manu"
  const manuElement = document.querySelector(".manu");

  // Get all the <ul> elements inside <nav>
  const lists = document.querySelectorAll("nav ul");

  // Add a click event listener to the "manu" element
  manuElement.addEventListener("click", function() {
    // Toggle visibility of <ul> elements
    lists.forEach(function(list) {
      list.style.display = list.style.display === "none" ? "block" : "none";
    });
  });
});
