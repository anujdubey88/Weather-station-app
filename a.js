

const img=document.querySelector(".search img");

img.addEventListener("click",async()=>{
    console.log("clicked");
    const city=document.querySelector(".in input");
    console.log(city.value);
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=cbfb13c1492066c10c41e44e82be9365&units=metric`;
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);
    document.querySelector(".degree").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".cityname").innerHTML=data.name;
    document.querySelector(".humidity span").innerHTML=data.main.humidity +"%";
    document.querySelector(".windspeed span").innerHTML=data.wind.speed + " Km/h";
    const img=document.querySelector(".sun img");
    const mousam=data.weather[0].main;
    console.log(mousam);
    if(data.main.temp<0){
        img.src="snow.png";
    }
    else if(mousam==="Clear"){
        img.src="sun.png";
    }
    else if(mousam==="Rain"){
        img.src="cloudy (1).png";
    }
    else {
        img.src="cloudy.png";
    }

})