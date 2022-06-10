// Dark Theme Code.

// document.getElementById("dark").addEventListener("click",myfunction);
// function myfunction() {
//     var element=document.body;
//     element.classList.toggle("dark");
// }


const time= new Date().getHours();
  let txt;
  if (time<10) {
    txt="Good Morning, Dear !" 
   } else if(time<20) {
     txt="Good Afternoon, Dear !"
   }else{
     txt="Good Evening, Dear !"
   }
   document.getElementById('Wish').innerHTML=txt;

// Swiper Js Code.
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay:2500
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  