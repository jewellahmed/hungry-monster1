













fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(res => res.json())
.then(data => displayMeals(data));

    

 const displayMeals = meals => {

        const mealsDiv  = document.getElementById('meals');
        meals.meals.forEach( meal => {
            const inputMeal = document.getElementById('input');
            const mealName = inputMeal.placeholder;
            console.log(mealName);
            if(mealName === meal.strMeal){
            
           
            const mealDiv = document.createElement('div');     
     
         mealDiv.className = 'meal';
         const mealInfo = `
               
               <img src="${meal.strMealThumb}">

              <h3>${meal.strMeal}</h3>
              <button onclick="displayDetail('${meal.strMeal}')">Detail</button>

         
         `
           mealDiv.innerHTML = mealInfo;
     
           mealsDiv.appendChild(mealDiv);
        }
        else{
            console.log('error');
        }
    });


    }
   
    const displayDetail = strMeal => {
        
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`
        
        fetch(url)
        console.log(url)
        .then(res => res.json()) 
        .then(data => renderMealInfo(data));
       // console.log(data);
       

    }
    
        
    const renderMealInfo = meal => {
       //console.log(meal);
      // console.log(strMeal);
      //console.log(strMeal);

        const mealDiv = document.getElementById('mealDetail');
        //console.log(strMeal);


        //console.log(mealDetail)
        mealDiv.innerHTML = `
        
           <h3>${meal.strMeal}</h3>
           <img src="${meal.strMealThumb}">
        
        `

    }

