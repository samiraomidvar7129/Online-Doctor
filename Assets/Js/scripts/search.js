import { fetchDoctorsList } from "./fetchDoctors.js";
export const setUpSearch = () => {
  const searchBtn = document.getElementById("search-btn");
  const searchName = document.getElementById("search-name");
  const handleSearch = async (event) => {
    event.preventDefault(); 

    const searchNameValue = searchName.value.toLocaleLowerCase().trim();
    if (!searchName) {
      swal({
        title: "خطا",
        text: " نام پزشک مورد نظر را وارد کنید",
        icon: "error",
        button: " باشه",
      });
      return;
    }
    const doctors = await fetchDoctorsList();
    const doctorsList = doctors.doctors ? doctors.doctors : [];
    const filterDoctors = doctorsList.filter((doctor) => {
      return doctor.Name.toLocaleLowerCase().includes(searchNameValue);
    });
    const doctorsContainer = document.querySelector(".swiper-wrapper");
    const result = document.querySelector("#result");
    doctorsContainer.innerHTML = "";
    if (filterDoctors.length > 0) {
      filterDoctors.forEach((doctor) => {
        result.innerHTML = `
           <div class="swiper-slide bg-light d-flex justify-content-center align-items-center text-center w-25 h-25">
        <div class=" p-3 d-flex flex-column justify-content-center align-items-center w-100 h-100 ">
          <div class="class=" d-flex justify-content-center align-items-center w-100 h-100">
              <img src=${doctor.ImageUrl} class="d-block w-100 h-100 cover  alt="doctor-img">
          </div>
          <div class="fs-4 pt-3">${doctor.Name} </div>
          <div class=" pt-3 fs-6">${doctor.Speciallity}</div>
          <div class="d-flex justify-content-between align-items-center w-100">
          <div class=" fs-6 pt-3">    ن-پ :  ${doctor.NezamCode} </div>
          <div class="fs-6 pt-3">  ${doctor.city} </div>
          </div>
          <div class=" bg-info d-flex justify-content-between align-items-center w-100 mt-4 py-2 px-2">
          <a class" d-block w-100 h-100 text-white " 
          href="details.html?group=${doctor.id}&doctorName=${doctor.Name}&speciallity=${doctor.Speciallity}"> 
          <span class="text-white">نوبت بگیرید</span>
          </a>
          <img src="Assets/imgs/icons/top-right.png" loading="lazy" width="20" height="20" alt="arrow-top">
          </div> </div>  `;
      });
    } else {
      result.innerHTML = "متاسفانه پزشک مورد نظر یافت نشد";
    }
    searchName.value = "";
  };
  searchBtn.addEventListener("click", handleSearch);
};
