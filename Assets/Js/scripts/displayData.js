
export const displayDoctors=doctors=>{let doctorsContainer=document.querySelector("#doctorsList .swiper-wrapper");for(let doctor in doctors)doctors[doctor].forEach(doctor=>{doctorsContainer.innerHTML+=`  
   <div class="swiper-slide p-3">
          <div class="bg-white rounded-4 shadow-lg p-3 d-flex flex-column align-items-center text-center">
            <div class="overflow-hidden rounded-circle mb-3" style="width: 120px; height: 120px;">
              <img src="${doctor.ImageUrl}" alt="doctor-img" class="w-100 h-100 object-fit-cover">
            </div>
            <h5 class="text-dark font-weight-bold mb-2" style="color: #0d47a1;">${doctor.Name}</h5>
            <p class="text-muted">${doctor.Speciallity}</p>
            <div class="d-flex justify-content-between align-items-center w-100 mt-2">
              <span class="text-muted">ن-پ: ${doctor.NezamCode}</span>
              <span class="text-muted">${doctor.city}</span>
            </div>
            <div class="w-100 mt-4">
              <a href="details.html?group=${doctor.id}&doctorName=${doctor.Name}&speciallity=${doctor.Speciallity}" 
                 class="btn btn-primary w-100 d-flex justify-content-between align-items-center py-2" 
                 style="background-color: #0d47a1; color: white; text-decoration: none; border-radius: 4px;">
                <span>نوبت بگیرید</span>
                <i class="fa fa-arrow-left"></i>
              </a>
            </div>
          </div>
        </div>
 `})};
 export const displayComments=comments=>{let commentsContainer=document.querySelector("#comments .swiper-wrapper");
  for(let comment in comments)comments[comment].forEach(item=>{commentsContainer.innerHTML+= `
           <div class="swiper-slide p-3">
          <div class="bg-white shadow-sm rounded-3 p-4 h-100 text-center d-flex flex-column align-items-center">
            <div class="rounded-circle overflow-hidden mb-3" style="width: 80px; height: 80px;">
              <img src="${item.userImg}" alt="user-img" class="w-100 h-100 object-fit-cover">
            </div>
            <h6 class="mb-1">${item.userName}</h6>
            <p class="text-muted small mt-2 mb-0 w-100" style="max-width: 300px;">"${item.userComment}"</p>
          </div>
        </div> `
})};
export const displayBlogs=blogs=>{let blogsContainer=document.querySelector("#blogs .swiper-wrapper");for(let blog in blogs)blogs[blog].forEach(blog=>{blogsContainer.innerHTML+= `
          <div class="swiper-slide p-3">
          <div class="bg-white rounded-4 shadow-sm p-3 h-100 d-flex flex-column justify-content-start align-items-center text-center">
            <div class="overflow-hidden rounded-3 mb-3" style="width: 100%; height: 180px;">
              <img src="${blog.img}" alt="blog-img" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="blog-description mt-2" style="max-width: 300px;">
              <p class="text-muted small">${blog.desc}</p>
            </div>
          </div>
        </div>`
})};

