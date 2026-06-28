import { api } from "./api";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginData {
  username: string;
  fullname: string;
  email: string;
  phone: string;
  token: string;
}

export async function login(payload: LoginPayload) {
  const { data } = await api.post("/login", payload);

  return data.message.data as LoginData;
}
