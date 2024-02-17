
function myfunc() {
     var data=JSON.parse(this.responseText);
    
 ///////////// a.Get all the countries from the Asia continent /region using the Filter function
     function function_filter(e){

   if (e.continents) {
       return e.continents == "Asia" || e.region == "Asia"
   
   } 
     }
     let region= data.filter(function_filter)
   console.log(region);

    //////////////////b  Get all the countries with a population of less than 2 lakhs using Filter function
    let population= data.filter(e=>e.population<200000);
  console.log(population);

///////////////////////////// c.Print the following details name, capital, flag using forEach function

data.forEach(element => {
 console.log(element.name,element.capital,element.flag);
    
});


    /////////// // d. Print the total population of countries using reduce function
     let totalPopulation = data.reduce((accumulator, currentValue) => accumulator + currentValue.population, 0);
     console.log("Total population of all countries:", totalPopulation);

// e Print the country which uses US Dollars as currency.

function FindUSDollars(value) {

let split_usd=Object.keys(value.currencies || {});
  if (split_usd[0]=="USD") {
    return true 
  }

 }
let country=data.filter(FindUSDollars)
 console.log(country);
}

const json=new XMLHttpRequest();
json.addEventListener("load",myfunc)

json.open("GET","https://restcountries.com/v3.1/all")
json.send();

