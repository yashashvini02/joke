document.addEventListener("DOMContentLoaded",function (){
    let butt=document.querySelector(".clk");
    let content=document.querySelector(".cards");
    async function cards(){
       let response= await fetch("https://official-joke-api.appspot.com/jokes/random");
       butt.innerHTML=`<p>Fetchingjoke..</p>`;
       butt.style.display = "flex";
    butt.style.justifyContent = "center";
    butt.style.alignItems = "center";
    butt.style.textAlign = "center";
       if(!response.ok){
        alert("Unable to fetch");
       }
       let data= await response.json();
       console.log(data);
       setTimeout(() => {
        
        butt.innerHTML=`<p>Get Random Joke</p>`
       content.innerHTML = `<p>${data.setup}</p><p><strong>${data.punchline}</strong></p>`;
       content.style.display = "block";
       content.style.color="white";}, 200);
    }
    function vsble(){
        content.style.display = "none";
    }
    butt.addEventListener("click",cards);
  
   
});