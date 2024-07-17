import{fetchDoctorsList} from './funcs/api';





//Loading -----------------------

const loadingElement = document.querySelector(".loader");

window.addEventListener("load", () => {
  loadingElement.classList.add("hidden");
});

//  Hamburger Menu-----------------

let hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", () => {
  let hamburger_menu_list = document.querySelector(".hamburger-menu-list");
  hamburger_menu_list.classList.toggle("active");
});

//Sticky Navbar----------------------

let item_1 = document.getElementById("header-nav");
document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    item_1.classList.add("position");
  } else {
    item_1.classList.remove("position");
  }
});

//Start Dedicated Scroll ----------

let DedicatedScroll = document.getElementById("dedicatedScroll");
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windowHeight = window.innerHeight;
  let scrollPercent = scrollTop / (documentHeight - windowHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  DedicatedScroll.style.width = scrollPercentRounded + "%";
});

//END Dedicated Scroll ---------------------------------------------------------------

//OnlineConsultation Animate----------------------------------------------------------

var onlineConsultation = document.querySelector(".Online-consultation-text");

const fadeOut = () => {
  setInterval(function () {
    onlineConsultation.style.animation = "opacity 0.7s linear infinite";
    fadeOut();
  }, 100);
};

fadeOut();




// ------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded',()=>{
  loadDoctorsList();
})



const loadDoctorsList=async()=>{
  const doctors=await fetchDoctorsList();

  const doctorsContainer = document.querySelector(".swiper-wrapper");

  doctors.forEach(doctor=>{
    doctorsContainer.innerHTML+= `
    <div class="swiper-slide bg-light d-flex justify-content-center align-items-center text-center">
          <a href=${ "details.html?group=" + doctor.id } 
          class="mySwiper-list_item p-3 d-flex flex-column justify-content-center align-items-center w-100 h-100 ">
            <div class="class="mySwiper-list_item--imgBox d-flex justify-content-center align-items-center w-100 h-100">
                <img src=${doctor.ImageUrl} class="doctor-ImageUrl rounded-pill d-block w-100 h-100 cover  alt="doctor-img">
            </div>
            <div class="doctor-name pt-3">${doctor.Name} </div>
            <div class=" doctor-Speciallity pt-3">${doctor.Speciallity}</div>
            <div class="d-flex justify-content-between align-items-center w-100">
                         <div class=" doctor-NezamCode pt-3">    ن-پ :  ${doctor.NezamCode} </div>
                         <div class=" doctor-city pt-3">  ${doctor.city} </div>
 
            </div>
                 
            </a>
       </div>      
   `
  })
}































// const createMainBox = (data) => {
//   myData = data;

//   for (const item in myData.doctors) {
//      createGroupBox(
//       myData.doctors[item].id,
//       myData.doctors[item].Name,
//       myData.doctors[item].ImageUrl,
//       myData.doctors[item].NezamCode,
//       myData.doctors[item].city,
//       myData.doctors[item].Speciallity
//     );

//   }
// };

// const createGroupBox = (id, Name, ImageUrl, NezamCode,city, Speciallity) => {
//   var mainBox = document.querySelector(".swiper-wrapper");
//   mainBox.innerHTML+= `
//    <div class="swiper-slide bg-light d-flex justify-content-center align-items-center text-center">
//          <a href=${ "details.html?group=" + id } 
//          class="mySwiper-list_item p-3 d-flex flex-column justify-content-center align-items-center w-100 h-100 ">
//            <div class="class="mySwiper-list_item--imgBox d-flex justify-content-center align-items-center w-100 h-100">
//                <img src=${ImageUrl} class="doctor-ImageUrl rounded-pill d-block w-100 h-100 cover  alt="doctor-img">
//            </div>
//            <div class="doctor-name pt-3">${Name} </div>
//            <div class=" doctor-Speciallity pt-3">${Speciallity}</div>
//            <div class="d-flex justify-content-between align-items-center w-100">
//                         <div class=" doctor-NezamCode pt-3">    ن-پ :  ${NezamCode} </div>
//                         <div class=" doctor-city pt-3">  ${city} </div>

//            </div>
                
//            </a>
//       </div>      
//   `
// };
