import axiosInstance from "./axiosInstance";

export function intraWalletTransfer(amount_sent, from_wallet, to_wallet) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  const data = {
    userId: authToken.userId,
    amount_sent: amount_sent,
    from_wallet: from_wallet,
    to_wallet: to_wallet,
    email: authToken.email, // since our middleware checks for email in the body
  };

  return axiosInstance.post("/api/wallets/intra-wallet", data);
}
export function fetchAllWalletsByUserId() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/wallets/user?email=${authToken.email}`);
}
export function fetchDownline() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(`/api/wallets/user?email=${authToken.email}`);
}
export function createTransaction({
  downline_id,
  package_id,
  invested_amount,
  deposit_amount,
  token_amount,
}) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  const data = {
    user_id: authToken.userId,
    downline_id,
    package_id,
    invested_amount,
    deposit_amount,
    token_amount,
    email: authToken.email, // since our middleware checks for email in the body
  };

  return axiosInstance.post("/api/investments", data);
}
export function createTransactionDownline({
  sponsor,
  package_id,
  invested_amount,
  deposit_amount,
  token_amount,
}) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  const data = {
    user_id: sponsor,
    sponsor: authToken.userId,
    package_id,
    invested_amount,
    deposit_amount,
    token_amount,
    email: authToken.email, // since our middleware checks for email in the body
  };

  return axiosInstance.post("/api/downline", data);
}
export function createWithdrawal({
  amount,
  currency,
  charges,
  merchant,
  from_wallet,
  userLocalDate,
  otp,
  security_pin,
}) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  const withdrawalData = {
    userId: authToken.userId,
    amount,
    currency,
    charges,
    merchant,
    from_wallet,
    userLocalDate,
    email: authToken.email,
    security_pin,
    otp,
  };
  return axiosInstance.post(
    "/api/withdrawal/create_withdrawal",
    withdrawalData
  );
}
export function interWalletTransfer({ amount_sent, from_wallet, to_wallet }) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  const transferData = {
    userId: authToken.userId,
    amount_sent,
    from_wallet,
    to_wallet,
    email: authToken.email,
  };
  return axiosInstance.post("/api/wallets/intra-wallet", transferData);
}
export function getWalletByUserId() {
  const userData = JSON.parse(localStorage.getItem("user_data"));

  return axiosInstance.get(`/api/wallets/user?email=${userData.email}`);
}
export function createPayment(formData) {
  return axiosInstance.post(`/api/payment/create_transaction`, formData);
}
export function updateWithdrawalWallet(formData) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  const data = {
    ...formData,

    email: authToken.email,
  };
  return axiosInstance.put(`/api/wallets/withdrawal-wallet`, data);
}
export function updateLTCWithdrawalWallet(formData) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  const data = {
    ...formData,

    email: authToken.email,
  };
  return axiosInstance.put(`/api/wallets/ltc-withdrawal-wallet`, data);
}
