import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE;

const addModel = async (data: any, h: string) => {
  if (!h)
    return {
      type: "error",
      message: "You are not authorized to perform this action",
    };

  try {
    await axios.post(`${baseUrl}/models`, data, {
      headers: {
        Authorization: `Bearer ${h}`,
      },
    });
    return {
      type: "success",
      message: "Model added successfully",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Error adding model",
    };
  }
};

const deleteModel = async (id: string, h: string) => {
  if (!h)
    return {
      type: "error",
      message: "You are not authorized to perform this action",
    };

  try {
    await axios.delete(`${baseUrl}/models/${id}`, {
      headers: {
        Authorization: `Bearer ${h}`,
      },
    });
    return {
      type: "success",
      message: "Model deleted successfully",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Error deleting model",
    };
  }
};

const editModel = async (data: any, h: string) => {
  if (!h)
    return {
      type: "error",
      message: "You are not authorized to perform this action",
    };

  try {
    await axios.put(`${baseUrl}/models`, data, {
      headers: {
        Authorization: `Bearer ${h}`,
      },
    });
    return {
      type: "success",
      message: "Model edited successfully",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Error editing model",
    };
  }
};

export { addModel, deleteModel, editModel };
