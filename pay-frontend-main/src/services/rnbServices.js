import axiosInstance from "./axiosInstance";

export function fetchBinaryTreeData() {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(
    `/api/referral/binary-tree/${authToken.userId}?email=${authToken.email}`
  );
}
export function fetchBinaryTreeDataOfUser(userId) {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  return axiosInstance.get(
    `/api/referral/binary-tree/${userId}?email=${authToken.email}`
  );
}
