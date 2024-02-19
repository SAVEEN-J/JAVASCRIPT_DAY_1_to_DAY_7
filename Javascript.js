fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    //a Get all the countries from the Asia continent/region using the Filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Countries in Asia:', asiaCountries);
   
    //b Get all the countries with a population of less than 2 lakhs using Filter function
    const populationLessThan2Lakhs = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', populationLessThan2Lakhs);

    //c Print the following details name, capital, flag using forEach function
    console.log('Details of countries:');
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.svg);
    });

    //d Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population of countries:', totalPopulation);

    //e Print the country which uses US Dollars as currency
    const usDollarCountries=(value)=> {

      let split_usd=Object.keys(value.currencies || {});
        if (split_usd[0]=="USD") {
          return true 
        }
      
       }
      let country=data.filter(usDollarCountries)
    console.log('Countries which use US Dollars as currency:', country);

  
  })
  .catch(error => console.error('Error fetching data:', error));








