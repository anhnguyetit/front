import axiosClient from "./axiosClient";

const updateProduct = {
  updateProduct: (value) => {
    if (value === {}) return;

    const url = "/updateproduct/";
    return axiosClient.put(url, value);
  },
};

export default updateProduct;
