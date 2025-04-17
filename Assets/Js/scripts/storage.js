export const saveAppointmentToLocalStorage = (appointment) => {
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.push(appointment),
    localStorage.setItem("appointments", JSON.stringify(appointments));
};