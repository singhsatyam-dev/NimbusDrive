import { create } from "zustand";

import {
  login as loginService,
  register as registerService,
  type User,
} from "@/services/auth.service";

interface AuthState {
  token: string | null;
  user: User | null;

  login: (email: string, password: string) => Promise<void>;

  register: (name: string, email: string, password: string) => Promise<void>;

  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),

  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,

  login: async (email, password) => {
    const response = await loginService({
      email,
      password,
    });

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));

    set({
      token: response.token,
      user: response.user,
    });
  },

  register: async (name, email, password) => {
    const response = await registerService({
      name,
      email,
      password,
    });

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));

    set({
      token: response.token,
      user: response.user,
    });
  },

  //instead of a controller simple clear the token
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    set({
      token: null,
      user: null,
    });
  },
}));
