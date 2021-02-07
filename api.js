fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => displayMeals(data));

 const displayMeals = meals => {

        const mealsDiv  = document.getElementById('meals');
        meals.meals.forEach(meal => {

            //const mealName = meal.strMeal;
           
            const mealDiv = document.createElement('div');     
     
         mealDiv.className = 'meal';
         const mealInfo = `
               
              <h3>${meal.strMeal}</h3>
              <button onclick="displayDetail('${mealName}')">Detail</button>
         
         `  
           mealDiv.innerHTML = mealInfo;
     
           mealsDiv.appendChild(mealDiv);
        });
      

    }

    const displayDetail = strMeal => {
        const url =` https://www.themealdb.com/api/json/v1/1/search.php?/strMeal/${strMeal}`
        console.log(url);

    }

