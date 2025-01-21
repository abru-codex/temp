import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE;
//
const deleteManufactureById = async (id: number | string, h: string) => {
  if (!h)
    return {
      type: "error",
      message: "No token provided",
    };

  try {
    await axios.delete(`${baseUrl}/manufacturers/${id}`, {
      headers: {
        Authorization: `Bearer ${h}`,
      },
    });
    return {
      type: "success",
      message: "Manufacture deleted",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Error deleting manufacture",
    };
  }
};

const addManufactures = async (name: string, h: string) => {
  try {
    if (!h)
      return {
        type: "error",
        message: "No token provided",
      };
    await axios.post(
      `${baseUrl}/manufacturers`,
      {
        manufacturer: name,
      },
      {
        headers: {
          Authorization: `Bearer ${h}`,
        },
      }
    );
    return {
      type: "success",
      message: "Manufacture added",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Error adding manufacture",
    };
  }
};

const editManufactures = async (id: number, name: string, h: string) => {
  try {
    if (!h)
      return {
        type: "error",
        message: "No token provided",
      };
    await axios.put(
      `${baseUrl}/manufacturers`,
      {
        manufacturer: name,
        manufacturerId: Number(id),
      },
      {
        headers: {
          Authorization: `Bearer ${h}`,
        },
      }
    );
    return {
      type: "success",
      message: "successfully edited manufacture",
    };
  } catch (error) {
    return {
      type: "error",
      message: "Error editing manufacture",
    };
  }
};
export { addManufactures, deleteManufactureById, editManufactures };
