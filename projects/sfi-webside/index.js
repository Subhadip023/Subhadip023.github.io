const dropdrowen=document.querySelector('.dropdowen');
const navbar=document.querySelector('.navbar');
console.log(navbar)
dropdrowen.addEventListener('click',function(){
    navbar.style.display = navbar.style.display === "none" ? "block" : "none";

});