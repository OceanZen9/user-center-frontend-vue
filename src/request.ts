import axios, { AxiosInstance } from "axios";

const myAxios: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "develop"
      ? "http://localhost:8080"
      : "https://codefather.cn",
  timeout: 10000,
  withCredentials: true,
});

myAxios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

myAxios.interceptors.response.use(
  function (response) {
    console.log(response);

    const { data } = response;
    if (data.code === 40100) {
      if (
        !response.request.responseURL.includes("/user/current") &&
        !window.location.pathname.includes("/user/login")
      ) {
        window.location.href = "/user/login?redirect=${window.location.href}";
      }
    }
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default myAxios;
