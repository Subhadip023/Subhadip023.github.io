const search_btn=document.getElementById('search_btn');
const recipeSearchForm=document.getElementById('recipeSearchForm');
const ingredientInput=document.getElementById('ingredientInput');
const recipes=document.querySelector('.recipes');
const recipe_details=document.getElementById('recipe_details');
const closed_recipeDetails=document.getElementById('closed_recipeDetails');

const fetchRecipes=async (quary)=>{
  const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${quary}
  `);
  const response=await data.json();
  response.meals.forEach(element => {
    const recipeDiv=document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML=`
    <div class="heading">${element.strMeal}</div>
    <div class="image">
      <img src="${element.strMealThumb}" alt="" />
    </div>
    <div class="button">
    <button onclick="getDetails(${element.idMeal})">Get Recipe</button>
    </div>
    `
    recipes.appendChild(recipeDiv);
  }); 
}
search_btn.addEventListener("click",(e)=>{
  e.preventDefault();
  const search=ingredientInput.value;
  fetchRecipes(search);
});

ingredientInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const search = ingredientInput.value;
    fetchRecipes(search);
  }
});



document.addEventListener("click", function(event) {
  if (event.target && event.target.id === "closed_recipeDetails") {
      recipe_details.style.display = "none";
  }
});


const getDetails=async(id)=>{
  const data=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  let meal=await data.json();
  meal=meal.meals[0];
  var ingredientList='';
  for(let i=1;i<=20;i++){
    let ingrdient=meal[`strIngredient${i}`];
    console.log(ingrdient);
      if(ingrdient){
        let mesure =meal[`strMeasure${i}`];
        console.log(mesure);
        ingredientList+=`<li>${mesure} ${ingrdient}</li>`
      }
      else{
        break;
      }
  }
  console.log( ingredientList)
  recipe_details.style.display="flex";
  recipe_details.innerHTML=`
  <div class="details">
  <h1>${meal.strMeal}</h1>
  <img src=${meal.strMealThumb} alt="">
  <h2>Instructions: </h2>
  <p>${meal.strInstructions}</p> 
  <h2>
    Ingredients:
  </h2>  
  <ol>
  ${ingredientList}
  </ol>
  <h3>
  <a href=${meal.strYoutube}>YouTube</a> 
  </h3>
  </div>
  <svg id="closed_recipeDetails" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#FBFADA">
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
</svg>
  `;
}