const dropdrowen=document.querySelector('.dropdowen');
const navbar=document.querySelector('.navbar');
const links=document.querySelector('.navbar ul li');
dropdrowen.addEventListener('click',function(){
    navbar.style.display = navbar.style.display === "none" ? "block" : "none";
    
});
window.onload = function () {
    let tom1 = new Audio("Badhte Cholo.mp3");
    tom1.play();
    document.querySelector('.banner img').style.opacity = '1';
    document.querySelector('.kalr_quote ').style.opacity = '1';
    document.querySelector('.quotes img').style.opacity = '1';
    document.querySelector('.quotes img').style.boxShadow = ' 5px 10px 28px red';
};


