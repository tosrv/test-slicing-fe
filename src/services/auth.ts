import { api } from "./api";

export interface LoginPayload {
  username: string;
  password: string;
}

export async function login(payload: LoginPayload) {
  const { data } = await api.post("/login", payload);

  return data.message.data;
}
