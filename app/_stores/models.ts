import axios from "axios";
import { create } from "zustand";

interface IModelStore {
  models: any;
  getModels: () => void;
  addNewModel: (data: any) => void;
  deleteModelById: (id: string) => void;
  editModelById: (id: number, data: any) => void;
}

const useModelStore = create<IModelStore>((set, get) => ({
  models: [],
  getModels: async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE}/models/search`
    );
    set({ models: res.data.data });
  },
  addNewModel: (data) => {
    const { models } = get();
    set({ models: [data, ...models] });
  },
  deleteModelById: (id) => {
    const { models } = get();
    set({ models: models.filter((model: any) => model.modelId !== id) });
  },
  editModelById: (id, data) => {
    const { models } = get();
    set({
      models: models.map((model: any) => {
        if (model.modelId === id) {
          return {
            ...model,
            ...data,
          };
        }
        return model;
      }),
    });
  },
}));

export default useModelStore;
