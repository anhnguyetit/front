import axiosClient from "./axiosClient";

const deleteProduct = {
  deleteProduct: (id) => {
    if (id === {}) return;

    const url = `/delete/:${JSON.stringify(id)}`;
    return axiosClient.delete(url);
  },
};

export default deleteProduct;
