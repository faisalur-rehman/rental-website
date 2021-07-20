import { api } from ".";

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};

export function signUp(data) {
  return api.post("/user/register", { ...data });
}

export function signIn(data) {
  return api.post("/user/login", { ...data });
}
export function userProfile() {
  return api.get("/user/profile", config);
}

// export function fetchInactiveSchedules() {
//   return api.get("/schedule/not-active");
// }

// export function fetchActiveSchdules() {
//   return api.get("/schedule/running");
// }

// export function fetchStoppedSchedules() {
//   return api.get("/schedule/stop");
// }

// export function createSchedule(scheduleFields) {
//   return api.post("/schedule/new", {
//     ...scheduleFields,
//   });
// }

// export function startSchedule(scheduleId) {
//   return api.post(`/schedule/${scheduleId}/start`, {});
// }

// export function stopSchedule(scheduleId) {
//   return api.post(`/schedule/${scheduleId}/cancel`, {});
// }

// export function deleteSchedule(scheduleId) {
//   return api.delete(`/schedule/${scheduleId}`);
// }
