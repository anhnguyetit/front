import axiosClient from "./axiosClient";

const listApi = {
  getList: () => {
    const url = "/products";
    return axiosClient.get(url);
  },
};

export default listApi;
