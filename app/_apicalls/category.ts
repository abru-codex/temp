import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE;

const addCategory = async (data: any, h: string) => {
  if (!h)
    return {
      type: "error",
      message: "Please login to continue",
    };

  try {
    await axios.post(`${baseUrl}/categories`, data, {
      headers: {
        Authorization: `Bearer ${h}`,
      },
    });
    return {
      type: "success",
      message: "Category added successfully",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Something went wrong",
    };
  }
};

const deleteCategoryById = async (id: any, h: string) => {
  if (!h)
    return {
      type: "error",
      message: "Please login to continue",
    };

  try {
    await axios.delete(`${baseUrl}/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${h}`,
      },
    });
    return {
      type: "success",
      message: "Category deleted successfully",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Something went wrong",
    };
  }
};

const updateCategory = async (data: any, h: string) => {
  if (!h)
    return {
      type: "error",
      message: "Please login to continue",
    };

  try {
    await axios.put(`${baseUrl}/categories`, data, {
      headers: {
        Authorization: `Bearer ${h}`,
      },
    });
    return {
      type: "success",
      message: "Category updated successfully",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Something went wrong",
    };
  }
};

export { addCategory, deleteCategoryById, updateCategory };
