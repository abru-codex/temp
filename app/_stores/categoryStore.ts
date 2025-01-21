import axios from "axios";
import { create } from "zustand";

interface CategoryStore {
  categories: any;
  subCateGories: any;
  setSubCategories: (c: any) => void;
  childCategories: any;
  setChildCategoires: (c: any) => void;
  getCategories: () => void;
  deleteCategory: (id: any) => void;
  selectedCategory: any;
  setSelectedCategory: (c: any) => void;
  categoryList: any;
  setCategoryList: () => void;
}

const useCategoryStore = create<CategoryStore>((set, get) => ({
  categories: [],
  subCateGories: [] as any,
  childCategories: [] as any,
  getCategories: async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE}/categories`
    );
    set({ categories: res.data.data });
  },
  setSubCategories: (c: any) => {
    const selectedCategory = get().categories.filter(
      (category: any) => category.id === Number(c)
    );
    const subCategories = selectedCategory[0]?.subCategories;
    set({ subCateGories: subCategories });
  },
  setChildCategoires: (c: any) => {
    const selectedCategory = get().subCateGories.filter(
      (category: any) => category.id === Number(c)
    );
    const childCategories = selectedCategory[0].subCategories;
    set({ childCategories: childCategories });
  },

  deleteCategory: (id) => {
    const rem = get().categories.filter(
      (category: any) => category.id !== Number(id)
    );

    set({ categories: rem });
  },
  selectedCategory: {},
  setSelectedCategory: (c: any) => set({ selectedCategory: c }),
  categoryList: [],
  setCategoryList: async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE}/categories/list`
    );
    const list = res.data.data.map((category: any) => {
      return {
        label: category.name,
        value: category.id,
      };
    });
    set({ categoryList: list });
  },
}));

export default useCategoryStore;
