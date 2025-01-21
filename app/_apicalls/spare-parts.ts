import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE;

const addParts = async (data: any, h: string) => {
  if (!h)
    return {
      type: "error",
      message: "Please login to continue",
    };
  try {
    await axios.post(`${baseUrl}/SparePart`, data, {
      headers: {
        Authorization: `Bearer ${h}`,
      },
    });
    return {
      type: "success",
      message: "Parts added successfully",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Something went wrong",
    };
  }
};

const deletePart = async (id: string, h: string) => {
  if (!h)
    return {
      type: "error",
      message: "You are not authorized to perform this action",
    };

  try {
    await axios.delete(`${baseUrl}/SparePart/${id}`, {
      headers: {
        Authorization: `Bearer ${h}`,
      },
    });
    return {
      type: "success",
      message: "Parts deleted successfully",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Error deleting parts",
    };
  }
};
export { addParts, deletePart };
