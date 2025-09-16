import { defineStore } from "pinia";
import { ref } from "vue";
import { getCurrentUser } from "@/api/user";

export const useLoginUserStore = defineStore("loginUser", () => {
  const isLoding = ref(false);

  const loginUser = ref<any>({
    userName: "未定义",
  });

  async function fetchLoginUser() {
    isLoding.value = true;
    try {
      const res = await getCurrentUser();
      if (res.code === 0 && res.data) {
        loginUser.value = res.data;
      }
    } catch (error) {
      console.error("获取用户失败", error);
      loginUser.value = { userName: "未定义" };
    } finally {
      isLoding.value = false;
    }
  }

  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser;
  }

  return { loginUser, fetchLoginUser, setLoginUser, isLoding };
});
