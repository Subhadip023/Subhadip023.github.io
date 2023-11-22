
  const manuElement = document.querySelector(".manu");


  const lists = document.querySelectorAll("nav ul");

  manuElement.addEventListener("click", function() {
    lists.forEach(function(list) {
      list.style.display = list.style.display === "none" ? "block" : "none";
    });
  });

