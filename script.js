
const fetchcatquote=async()=>{
    const res=await fetch("https://catfact.ninja/fact?max_length=60")
    .then((response)=>response.json());
    
    document.querySelector(".cat-quote").innerHTML=res.fact;
}
fetchcatquote();

const fetchcatimage=async()=>{
    const res=await fetch("https://api.thecatapi.com/v1/images/search")
    .then((response)=>response.json());
    document.querySelector("#cat-placeholder").style.backgroundImage = `url('${res[0].url}')`;
    document.querySelector("#cat-placeholder").style.backgroundSize = 'cover'; 
    document.querySelector("#cat-placeholder").style.backgroundPosition = 'center'; 
}
fetchcatimage();


document.querySelector(".flex-row-reload").addEventListener("click", () => {
    fetchcatquote();
    fetchcatimage();
});