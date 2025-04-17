import { saveAppointmentToLocalStorage } from "./storage.js";

export const validatetReservationForm = async (event) => {
  event.preventDefault();

  const urlParams = new URLSearchParams(window.location.search);
  const group = urlParams.get("group");
  const doctorName = urlParams.get("doctorName");
  const doctorSpeciallity = urlParams.get("speciallity");

  const reservationFullName = document.getElementById("reservation-fullName").value;
  const reservationPhone = document.getElementById("reservation-phoneNumber").value;
  const nationalCode = document.getElementById("national-code").value;
  const reserveDate = document.getElementById("reserve-date").value;
  const reserveTime = document.getElementById("reserve-time").value;

  // clean Errors
  document.querySelectorAll('.error-message').forEach(message => message.textContent = '');

  let isValid = true;

  // Validate fullName
  if (!reservationFullName.trim()) {
    document.getElementById('error-fullName').textContent = "لطفاً نام و نام خانوادگی را وارد کنید.";
    isValid = false;
  }

  // Validate Number
  const phoneRegex = /^\d{11}$/;
  if (!phoneRegex.test(reservationPhone)) {
    document.getElementById('error-phoneNumber').textContent = "شماره تلفن باید 11 رقم و فقط شامل اعداد باشد.";
    isValid = false;
    if (reservationPhone.length > 11) {
      document.getElementById("reservation-phoneNumber").disabled = true;
    } else {
      document.getElementById("reservation-phoneNumber").disabled = false;
    }
  }

  // Validate Date
  const currentDate = new Date().toISOString().split('T')[0];
  if (reserveDate < currentDate) {
    document.getElementById('error-reserveDate').textContent = "تاریخ نوبت باید از امروز به بعد باشد.";
    isValid = false;
  }

  // Validate NationalCode
  const nationalCodeRegex = /^\d{10}$/;
  if (!nationalCodeRegex.test(nationalCode)) {
    document.getElementById('error-nationalCode').textContent = "کد ملی باید 10 رقم و فقط شامل اعداد باشد.";
    isValid = false;
  }

  // Validate Time
  const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
  if (!timeRegex.test(reserveTime)) {
    document.getElementById('error-reserveTime').textContent = "فرمت ساعت نوبت صحیح نیست. لطفاً از فرمت HH:mm استفاده کنید.";
    isValid = false;
  }

  if (isValid) {
    const newAppointment = {
      group,
      doctorName,
      doctorSpeciallity,
      reservationFullName,
      reservationPhone,
      nationalCode,
      reserveDate,
      reserveTime,
    };

    saveAppointmentToLocalStorage(newAppointment);

    swal({
      title: `نوبت شما برای ${doctorName} ثبت شد`,
      text: "در حال انتقال به صفحه نوبت‌های شما...",
      icon: "success",
      buttons: false,
      timer: 3000, 
    });

    // Reset Form

    setTimeout(() => {
      document.getElementById("reservation-form_parent").reset();
      document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');
      window.location.href = "myReservations.html";
    }, 3000);
  }
};
