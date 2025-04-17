import { saveAppointmentToLocalStorage } from "./storage.js";
export const validatetReservationForm = async (event) => {
  event.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  const group = urlParams.get("group");
  const doctorName = urlParams.get("doctorName");
  const doctorSpeciallity = urlParams.get("speciallity");
  const reservationFullName = document.getElementById(
    "reservation-fullName"
  ).value;
  const reservationPhone = document.getElementById(
    "reservation-phoneNumber"
  ).value;
  const nationalCode = document.getElementById("national-code").value;
  const reserveDate = document.getElementById("reserve-date").value;
  const reserveTime = document.getElementById("reserve-time").value;
  if (
    !reservationFullName ||
    !reservationPhone ||
    !nationalCode ||
    !reserveDate ||
    !reserveTime
  ) {
    swal({
      title: "خطا",
      text: "کاربرگرامی ! برای ثبت نوبت لطفا اطلاعات را تکمیل کنید",
      icon: "error",
      button: "باشه",
    });
    return;
  }
  const newAppointment = {
    group: group,
    doctorName: doctorName,
    doctorSpeciallity: doctorSpeciallity,
    reservationFullName: reservationFullName,
    reservationPhone: reservationPhone,
    nationalCode: nationalCode,
    reserveDate: reserveDate,
    reserveTime: reserveTime,
  };
  saveAppointmentToLocalStorage(newAppointment);
  swal({
    title: `نوبت شما برای ${doctorName} ثبت شد`,
    text: "برای اطلاع از نوبت های خود به بخش نوبت من مراجعه کنید",
    icon: "success",
    button: "نوبت های من ",
  }).then(() => {
    window.location.href = "myReservations.html";
  });
};
