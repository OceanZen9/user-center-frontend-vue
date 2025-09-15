import router from "@/router";
import { useLoginUserStore } from "./store/useLoginUserStore";
import { message } from "ant-design-vue";

router.beforeEach(async (to, form, next) => {
  const loginUserStore = useLoginUserStore();
  const loginUser = loginUserStore.loginUser();
  const toUrl = to.fullPath;
  if (toUrl.startsWith("/admin")) {
    if (!loginUser || loginUser.uerRole !== 1) {
      message.error("没有权限");
      next("/user/login?rediect=${to.fullpath");
      return;
    }
  }
  next();
});
