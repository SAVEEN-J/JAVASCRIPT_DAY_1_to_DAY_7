           /////////// //1. json iteratefor all loops

            const json_array= new XMLHttpRequest();
            json_array.addEventListener("load",callfunction);
            json_array.open("GET","https://restcountries.com/v3.1/all")
            json_array.send()

            function callfunction() {
            let data=JSON.parse(this.responseText);
            //console.log(data);  
            //for 
            for (let i = 0; i < data.length; i++) {
            // console.log(data[i].name.common);    
            }
            //for in
            for ( i in data){ 
            //console.log(data[i].name.common,data[i].population);    
            }
            //for of
            for ( e of data){ 
            //  console.log(e.name.common,e.population);    

            }

            //foreach

            Object.keys(data).forEach(function(k){
            //console.log( data[k].name);
            });

            }


                            ////////////////////////////// 2.OWN RESUME

            var data={
            "Resume_data": [
            {
            "name": "Saveen J",
            "email": "saveenj1996@gmail.com",
            "Phone": 8220123122,
            "skills":{
            "skills":"skills",
            "skil1":"HTML-5",
            "skil2":"CSS-3",
            "skil3":"BootStrap",
            "skil4":"JavaScript",
            "skil5":"MySql",
            "skil6":"MongoDB",
            "skil7":"ReactJS",
            "skil8":"NodeJS",
            "skil9":"Data Structure & Algorithms",
            "skil10":"AWS"

            },
            "qualification":{
            "clg_degree":"Mechanical Engineering",
            "clg_name":"Muthyammal College of Engineering",
            "clg_location":"Rasipuram",
            "clg_degree_date":"May 2014 - April 2017"
            ,
                },
            "languages":{"lan1":"Tamli","lan2":"English"},

            }, 

            ]
            }    

            for (i in data) {
            console.log(data[i]);
            // console.log(data[i][0].name);
            // console.log(data[i][0].email);
            // console.log(data[i][0].Phone);
            // console.log(data[i][0].skills.skil1);
            // console.log(data[i][0].skills.skil2);
            // console.log(data[i][0].skills.skil3);
            // console.log(data[i][0].skills.skil4);
            // console.log(data[i][0].skills.skil5);
            // console.log(data[i][0].skills.skil6);
            // console.log(data[i][0].skills.skil7);
            // console.log(data[i][0].skills.skil8);
            // console.log(data[i][0].skills.skil9);
            // console.log(data[i][0].skills.skil10);
            // console.log(data[i][0].qualification.clg_degree);
            // console.log(data[i][0].qualification.clg_name);
            // console.log(data[i][0].qualification.clg_location);
            // console.log(data[i][0].qualification.clg_degree_date);
            // console.log(data[i][0].languages.lan1);
            // console.log(data[i][0].languages.lan2);

            }




            // own resume