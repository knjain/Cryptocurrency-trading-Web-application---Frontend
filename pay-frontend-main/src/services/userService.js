import axiosInstance from "./axiosInstance";

export function sendOTP() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));

  const data = {
    email: authToken.email,
  };
  return axiosInstance.post("/api/email/otp", data);
}
export function updateProfileDetails(tempProfileForm) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));

  tempProfileForm.email = authToken.email;

  return axiosInstance.put(`/api/users/edit/user`, tempProfileForm);
}
export function markStoryAsSeen() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));

  return axiosInstance.put(`/api/users/mark-story-as-seen`, {
    email: authToken.email,
  });
}

export function fetchUserData() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/users/user?email=${authToken.email}`);
}
export function fetchUserWithdrawalData(type) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(
    `/api/withdrawal/user-data/${type}?email=${authToken.email}`
  );
}
export function fetchUserDepositData() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/deposits/user-data?email=${authToken.email}`);
}
export function createTickets(formData) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  formData.email = authToken?.email;
  formData.raisedby = authToken?.userId;
  return axiosInstance.post(`/api/tickets`, formData);
}
export function updatePasswordByUserId(formData) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  formData.email = authToken?.email;
  formData.userId = authToken?.userId;
  return axiosInstance.put(`/api/users/change-password`, formData);
}
export function updatePinByUserId(formData) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  formData.email = authToken?.email;
  formData.userId = authToken?.userId;
  return axiosInstance.put(`/api/users/change-pin`, formData);
}

export function fetchWalletData() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/wallets/user?email=${authToken.email}`);
}

export function fetchBinaryTreeData() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(
    `/api/referral/binary-tree/${authToken?.userId}?email=${authToken.email}`
  );
}
export function fetchDirectRefearralsData() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/referral/referrer?email=${authToken?.email}`);
}
export function fetchTickets() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/tickets/user?email=${authToken.email}`);
}
export function getROIReport() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(
    `/api/roi-transactions/user?email=${authToken.email}`
  );
}
export function getBIReport() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(
    `/api/binary-transactions/user?email=${authToken.email}`
  );
}
export function getRIReport() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(
    `/api/referral-transactions/user?email=${authToken.email}`
  );
}
export function getTokenReport() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/tokens/user?email=${authToken.email}`);
}
export function getEIReport() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/career-rewards/user?email=${authToken.email}`);
}
export function getDIReport() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/deposits/user?email=${authToken.email}`);
}
export function getWIReport() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(
    `/api/withdrawal/getWithdrawalsByUserId?email=${authToken.email}`
  );
}
export function getReferralReport() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/referral/referrer?email=${authToken.email}`);
}
export function getInvestmentReport() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/investments/user?email=${authToken.email}`);
}
export function getDownlineReport() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/downline/user?email=${authToken.email}`);
}
export function fetchDashboardData() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(
    `/api/users/user-dashboard-data?email=${authToken.email}`
  );
}
