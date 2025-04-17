
document.addEventListener("DOMContentLoaded", () => {
  let appointmentsList = document.getElementById("appointments-list");
  if (appointmentsList) {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    // نمایش نوبت‌ها
    const displayAppointments = () => {
      appointmentsList.innerHTML = "";

      // هر نوبت را در یک کارت زیبا نمایش می‌دهیم
      appointments.forEach((appointment, index) => {
        appointmentsList.innerHTML += `
          <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card shadow-sm rounded">
              <div class="card-body">
                <h5 class="card-title text-center">${appointment.doctorName} - ${appointment.doctorSpeciallity}</h5>
                <p class="mb-2"><strong>نام بیمار:</strong> ${appointment.reservationFullName}</p>
                <p class="mb-2"><strong>کد ملی:</strong> ${appointment.nationalCode}</p>
                <p class="mb-2"><strong>تاریخ حضور:</strong> ${appointment.reserveDate}</p>
                <p class="mb-2"><strong>ساعت حضور:</strong> ${appointment.reserveTime}</p>
                <button data-index="${index}" class="btn btn-danger w-100">حذف نوبت</button>
              </div>
            </div>
          </div>
        `;
      });

      // Delete Reserve
      document.querySelectorAll(".btn-danger").forEach(button => {
        button.addEventListener("click", (e) => {
          let index = e.target.getAttribute("data-index");
          appointments.splice(index, 1);
          localStorage.setItem("appointments", JSON.stringify(appointments));
          displayAppointments();
          swal({
            title: "موفقیت آمیز",
            text: "نوبت شما با موفقیت حذف شد.",
            icon: "success",
            button: "سپاسگذارم",
          });
        });
      });
    };

    displayAppointments();
  }
});