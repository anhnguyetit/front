import axiosClient from "./axiosClient";

const addProductApi = {
  postProduct: (formValue) => {
    if (formValue === {}) return;

    const url = "/product";
    return axiosClient.post(url, formValue);
  },
};

export default addProductApi;
