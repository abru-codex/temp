import axios from "axios";
import { create } from "zustand";

interface ManufacturesStore {
  manufactures: any;
  getManufactures: () => void;
  addNewManufacture: (name: any) => void;
  deleteManufacture: (id: number) => void;
  editManufacture: (id: number, name: string) => void;
}

const useManufacturesStore = create<ManufacturesStore>((set, get) => ({
  manufactures: [],
  getManufactures: async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE}/manufacturers/search`
    );

    set({ manufactures: res.data.data });
  },
  addNewManufacture: (name: any) => {
    const newManufacture = {
      id: "e0009",
      manufacturer: name,
    };
    set({ manufactures: [newManufacture, ...get().manufactures] });
  },
  deleteManufacture: (id: number) => {
    const newManufactures = get().manufactures.filter(
      (item: any) => item.id !== Number(id)
    );
    set({ manufactures: newManufactures });
  },
  editManufacture: (id: number, name: string) => {
    const newManufactures = get().manufactures.map((item: any) => {
      if (item.id === Number(id)) {
        return { ...item, manufacturer: name };
      }
      return item;
    });
    set({ manufactures: newManufactures });
  },
}));

export default useManufacturesStore;
