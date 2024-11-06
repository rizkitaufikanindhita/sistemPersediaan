import { create } from "zustand";
import Cookies from "js-cookie";
import axios from "axios";

const token = Cookies.get("token");

const url = import.meta.env.VITE_URL_GETBARANG;

type SignUpState = {
  setName: (name: string) => void;
  setNip: (nip: string) => void;
  setBagian: (bagian: string) => void;
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  name: string;
  nip: string;
  bagian: string;
  password: string;
  email: string;
};

type SignInState = Pick<
  SignUpState,
  "setNip" | "setPassword" | "nip" | "password"
>;

const useSignUpStore = create<SignUpState>()((set) => ({
  name: "",
  nip: "",
  bagian: "",
  password: "",
  email: "",
  setName: (name: string) => set({ name }),
  setNip: (nip: string) => set({ nip }),
  setBagian: (bagian: string) => set({ bagian }),
  setPassword: (password: string) => set({ password }),
  setEmail: (email: string) => set({ email }),
}));

const useSignInStore = create<SignInState>()((set) => ({
  nip: "",
  password: "",
  setNip: (nip: string) => set({ nip }),
  setPassword: (password: string) => set({ password }),
}));

type resetPasswordType = {
  email: string;
  otp: string;
  newPassword: string;
  setEmail: (email: string) => void;
  setOTP: (otp: string) => void;
  setNewPassword: (newPassword: string) => void;
};

const useResetPasswordStore = create<resetPasswordType>()((set) => ({
  email: "",
  otp: "",
  newPassword: "",
  setEmail: (email: string) => set({ email }),
  setOTP: (otp: string) => set({ otp }),
  setNewPassword: (newPassword: string) => set({ newPassword }),
}));

type BarangState = {
  fetchData: () => void;
  dataManager: any[];
};

const useBarang = create<BarangState>((set) => ({
  dataManager: [],
  fetchData: async () => {
    const axiosWithToken = axios.create({
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });

    try {
      const response = await axiosWithToken.get(url);
      const data = response.data.data;
      set({ dataManager: data });
    } catch (e) {
      console.log(e);
    }
  },
}));

type AddBarangState = {
  namaBarang: string;
  satuanBarang: string;
  kategori: string;
  gambarUrl: string;
  setNamaBarang: (namaBarang: string) => void;
  setSatuanBarang: (satuanBarang: string) => void;
  setKategori: (kategori: string) => void;
  setGambarUrl: (gambarUrl: string) => void;
};

const useAddBarang = create<AddBarangState>((set) => ({
  namaBarang: "",
  satuanBarang: "",
  kategori: "",
  gambarUrl: "",
  setNamaBarang: (namaBarang: string) => set({ namaBarang }),
  setSatuanBarang: (satuanBarang: string) => set({ satuanBarang }),
  setKategori: (kategori: string) => set({ kategori }),
  setGambarUrl: (gambarUrl: string) => set({ gambarUrl }),
}));

export default {
  useSignUpStore,
  useSignInStore,
  useResetPasswordStore,
  useBarang,
  useAddBarang,
};
