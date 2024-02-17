
                 // day3  1.compare two json have same properties
 let obj1={name:"person",age:5} 
 let obj2={age:5,name:"person"} 
   
let keys= Object.keys(obj1)
let both_josn=true;
for (let e of keys) {
  if (obj1[e] !== obj2[e]) {
     both_josn=false
     break;
   } 
  
}
both_josn?console.log("Equal"):console.log("NOt equal");


                    // 2. rest countries API   and 3


        // display country and flags
        const req= new XMLHttpRequest();
        req.addEventListener("load",reqListener)
        req.open("GET","https://restcountries.com/v3.1/all")
        req.send();
function reqListener() {

  let data=JSON.parse(this.responseText);
//    console.log(data);
  for (let i = 0; i < data.length; i++) {
     // 2 rd ans display all flags
// console.log(data[i].flags);  

 // 3 rd ans print the all countries name.region,sub-region,and population

//   console.log(data[i].name,data[i].region,data[i].subregion,data[i].population); 
}

}
      




// const axios = require('axios');
// console.log("ssadxkg");
// // 1. Comparing two JSON objects
// let obj1 = { name: "person", age: 5 };
// let obj2 = { age: 5, name: "person" };

// let keys = Object.keys(obj1);
// let both_json = true;
// for (let e of keys) {
//   if (obj1[e] !== obj2[e]) {
//     both_json = false;
//     break;
//   }
// }
// both_json ? console.log("Equal") : console.log("Not Equal");

// // 2. Fetching data from the Rest Countries API and displaying country information
// axios.get("https://restcountries.com/v3.1/all")
//   .then(response => {
//     let data = response.data;

//     // Display all flags
//     for (let i = 0; i < data.length; i++) {
//       console.log(data[i].flags);
//     }

//     // Print all countries' name, region, sub-region, and population
//     for (let i = 0; i < data.length; i++) {
//       console.log(data[i].name, data[i].region, data[i].subregion, data[i].population);
//     }
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error);
//   });

       
