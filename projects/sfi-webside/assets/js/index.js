const dropdrowen=document.querySelector('.dropdowen');
const navbar=document.querySelector('.navbar');
const links=document.querySelector('.navbar ul li');
// const hn=document.querySelector('.hn');
const notification_home=document.querySelector('.notification_home');


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
    let i = 0;
    const intervalId = setInterval(function() {
      showNotification(`Notifications Title ${i}`);
      if (i === 5) {
        clearInterval(intervalId);
        console.log("Interval stopped at i = 5");
      }
      i++;
    }, 2000);
    
  };


function showNotification (Notification_title) {
let  hn=document.createElement('div');
hn.classList.add('hn');
hn.innerHTML=`  ${Notification_title}
<svg
  fill="#000000"
  height="800px"
  width="800px"
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 330 330"
  xml:space="preserve"
>
  <path
    id="XMLID_222_"
    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
C255,161.018,253.42,157.202,250.606,154.389z"
  />
</svg>`
notification_home.appendChild(hn);
setTimeout(()=>{
    hn.remove();
  },5000);
}

