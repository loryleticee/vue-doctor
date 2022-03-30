import { useUserStore } from "@/stores/token";
import type { User } from "../types/userType";
const userStore = useUserStore();


export default async function fetchLogin(user: User) {
  await fetch("https://apidoctor.quidam.re/api/login_check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

export async function fetchConsults() {
  let response = await fetch("https://apidoctor.quidam.re/api/consultations", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userStore.token}`,
    },
  })
    .then((promise) => promise.json())
    .catch((e) => {
      console.warn("error", e);
    });

  if (isJwtExpiredError(response)) {
    await refreshToken().then((r) => {
      r && fetchConsults();
    });
  }
  
  return response;
}

export async function refreshToken() {
  let response = await fetch("https://apidoctor.quidam.re/api/token/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: userStore.getRefreshToken }),
  }).then((promise) => promise.json());

  if (response?.token && response?.refresh_token) {
    userStore.token = await response?.token;
    userStore.refresh_token = await response?.refresh_token;

    return true;
  }

  userStore.$reset();

  return false;
}

function isJwtExpiredError(e: any) {
  return /Expired JWT Token/.test(e.message) && e.code === 401;
}
