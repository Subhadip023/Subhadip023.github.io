const dropdrowen=document.querySelector('.dropdowen');
const navbar=document.querySelector('.navbar');
const links=document.querySelector('.navbar ul li');
dropdrowen.addEventListener('click',function(){
    navbar.style.display = navbar.style.display === "none" ? "block" : "none";
    
});

links.forEach(function(link){
link.addEventListener("click",function(){
    navbar.style.display = navbar.style.display === "none" ? "block" : "none";

});

});