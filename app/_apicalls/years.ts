import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE;

const addYear = async (data: any, h: string) => {
  if (!h)
    return {
      type: "error",
      message: "Invalid token",
    };

  try {
    await axios.post(`${baseUrl}/years`, data, {
      headers: {
        Authorization: `Bearer ${h}`,
      },
    });
    return {
      type: "success",
      message: "Year added successfully",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Something went wrong",
    };
  }
};

const deleteYear = async (id: string | number, h: string) => {
  if (!h)
    return {
      type: "error",
      message: "Invalid token",
    };

  try {
    await axios.delete(`${baseUrl}/years/${id}`, {
      headers: {
        Authorization: `Bearer ${h}`,
      },
    });
    return {
      type: "success",
      message: "Year deleted successfully",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Something went wrong",
    };
  }
};

const updateYear = async (data: any, h: string) => {
  if (!h)
    return {
      type: "error",
      message: "Invalid token",
    };

  try {
    await axios.put(`${baseUrl}/years`, data, {
      headers: {
        Authorization: `Bearer ${h}`,
      },
    });
    return {
      type: "success",
      message: "Year updated successfully",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Something went wrong",
    };
  }
};
export { addYear, deleteYear, updateYear };
