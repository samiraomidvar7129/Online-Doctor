import { fetchDoctorsList } from "./fetchDoctors.js";
export const setUpSearch = () => {
  const searchBtn = document.getElementById("search-btn");
  const searchName = document.getElementById("search-name");
  const handleSearch = async () => {
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
           <div class="swiper-slide bg-light d-flex justify-content-center align-items-center text-center">
        <div class="mySwiper-list_item p-3 d-flex flex-column justify-content-center align-items-center w-100 h-100 ">
          <div class="class="mySwiper-list_item--imgBox d-flex justify-content-center align-items-center w-100 h-100">
              <img src=${doctor.ImageUrl} class="doctor-ImageUrl  d-block w-100 h-100 cover  alt="doctor-img">
          </div>
          <div class="doctor-name pt-3">${doctor.Name} </div>
          <div class=" doctor-Speciallity pt-3">${doctor.Speciallity}</div>
          <div class="d-flex justify-content-between align-items-center w-100">
          <div class=" doctor-NezamCode pt-3">    ن-پ :  ${doctor.NezamCode} </div>
          <div class=" doctor-city pt-3">  ${doctor.city} </div>
          </div>
          <div class=" doctor-reserve_box d-flex justify-content-center align-items-center w-100 mt-4 py-2">
          <a class"doctor-reserve_link d-block w-100 h-100 " href="details.html?group=${doctor.id}&doctorName=${doctor.Name}&speciallity=${doctor.Speciallity}
          ">نوبت بگیرید</a>
           <i class="fa fa-arrow-left doctor-reserve_icon"></i> </div>
          </div> </div>  `;
      });
    } else {
      result.innerHTML = "متاسفانه پزشک مورد نظر یافت نشد";
    }
    searchName.value = "";
  };
  searchBtn.addEventListener("click", handleSearch);
};
