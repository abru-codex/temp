import axios from "axios";
import { create } from "zustand";

interface IYearsStore {
  years: any;
  getYears: (id: string | number) => void;
  addNewYear: (data: any) => void;
  deleteYearById: (id: string | number) => void;
  updateYearById: (id: number | string, data: any) => void;
}

const UseYearsStore = create<IYearsStore>((set, get) => ({
  years: [],
  getYears: async (id: string | number) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE}/years/search?modelId=${id}`
    );
    set({ years: res.data.data });
  },
  addNewYear: (data: any) => {
    set((state) => ({ years: [data, ...state.years] }));
  },
  deleteYearById: (id: string | number) => {
    set((state) => ({
      years: state.years.filter((year: any) => year.id !== id),
    }));
  },
  updateYearById: (id: number | string, data: any) => {
    set((state) => ({
      years: state.years.map((year: any) => {
        if (year.id === id) {
          return { ...year, ...data };
        }
        return year;
      }),
    }));
  },
}));

export default UseYearsStore;
