function callAPI(){
       

    const inputsearch=document.getElementById("input_search");
    valer=inputsearch.value;
    
    const span=document.getElementById("meteospan");
    
    const para=document.getElementById("display");
    para.style.display="block";
   
    // the first API..................................................................................................

    let lienmeteo=`https://api.openweathermap.org/data/2.5/weather?q=${valer}&units=metric&appid=f3f4d962b5eb831efcbccf782e14216e`;
    
    fetch(lienmeteo)
    .then(reponse=>reponse.json())
    .then(data=>span.innerHTML=data.main.temp);
   
// the second API...................................................................................................
    const drap=document.getElementById("drapo");
    let lien=`https://restcountries.com/v3.1/name/${valer}?fullText=true`;
    fetch(lien)
    .then(res=>res.json())
    .then(data=>drap.src=data[0].flags.svg);
    
    const county=document.getElementById("nameofcountry");
    county.innerHTML=valer;  
    
}
 
// on click to enter
window.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
callAPI();
    }
    
})
// on click to the search icon
const icon=document.getElementById("icon");
icon.addEventListener("click",()=>{
    callAPI();
})