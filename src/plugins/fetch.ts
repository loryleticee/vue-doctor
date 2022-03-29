import type { User } from "../types/userType";

export default async function fetchLogin(user: User) {
  await fetch("https://apidoctor.quidam.re/api/login_check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

export async function fetchConsults(token: string) {
  return await fetch("https://apidoctor.quidam.re/api/consultations", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((promise) => promise.json())
    .catch((e) => {
      console.warn("error", e);
    });
}
