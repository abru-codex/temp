import axios from "axios";
import { create } from "zustand";

interface ISpareStore {
  spares: any;
  totalPage: number;
  totalDisplay: number;
  getSpares: (page?: number) => void;
  deleteById: (id: any) => void;
}

const UseSpareStore = create<ISpareStore>((set, get) => ({
  spares: [],
  totalPage: 0,
  totalDisplay: 0,
  getSpares: async (page = 1) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE}/SparePart/search?pageIndex=${page}&pageSize=10`
    );

    set({
      spares: res.data.data,
      totalPage: res.data.total,
      totalDisplay: res.data.totalDisplay,
    });
  },
  deleteById: (id) => {
    const rem = get().spares.filter((item: any) => item.id !== Number(id));
    set({ spares: rem });
  },
}));

export default UseSpareStore;
