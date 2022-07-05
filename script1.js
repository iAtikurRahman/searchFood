let searchFood=()=>{
  let searchField=document.getElementById('searchField');
  let searchText=searchField.value;
  searchField.value=" ";
  let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displaySearchResult(data.meals))
}

let displaySearchResult=(meals)=>{
 
  let searchResult=document.getElementById('searchResult');
  meals.forEach(meal => {
      console.log(meal)
    let div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML=` 
    <div class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="Food Img">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
      </div>
    </div>`;
    searchResult.appendChild(div);
  })
}
