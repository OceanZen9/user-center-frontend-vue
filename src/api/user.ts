import myAxios from "@/request";

interface userRegisterRequest {
  userAccount: string;
  userPassword: string;
  checkPassword: string;
  planetCode?: string;
}

/**
 * 用户注册
 * @param params
 * @returns
 */
export const userRegister = async (params: any) => {
  const res = await myAxios.request({
    url: "/api/user/register",
    method: "post",
    data: params,
  });
  return res.data;
};

/**
 * 用户登录
 * @param param
 * @returns
 */
export const userLogin = async (param: any) => {
  const res = await myAxios.request({
    url: "/api/user/login",
    method: "post",
    data: param,
  });
  return res.data;
};

/**
 * 用户注销
 * @param param
 * @returns
 */
export const userLogout = async (param: any) => {
  const res = await myAxios.request({
    url: "/api/user/logout",
    method: "post",
    data: param,
  });
  return res.data;
};

/**
 * 获取用户列表
 * @param username
 * @returns
 */
export const searchUsers = async (username: any) => {
  const res = await myAxios.request({
    url: "/api/user/search",
    method: "get",
    params: { username },
  });
  return res.data;
};

/**
 * 删除用户
 * @param id
 * @returns
 */
export const deleteUser = async (id: string) => {
  const res = await myAxios.request({
    url: `/api/user/delete/${id}`,
    method: "post",
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

/**
 *  获取当前用户
 */
export const getCurrentUser = async () => {
  const res = await myAxios.request({
    url: "/api/user/current",
    method: "get",
  });
  return res.data;
};
