<template>
  <div id="userLoginPage">
    <h2 class="title">用户登录</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      :model="formState"
      name="basic"
      label-align="left"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
      @finish="handleSubmit"
    >
      <a-form-item
        label="账号"
        name="userAccount"
        :rules="[{ required: true, message: '请输入帐号' }]"
      >
        <a-input
          v-model:value="formState.userAccount"
          placeholder="请输入帐号"
        />
      </a-form-item>

      <a-form-item
        label="密码"
        name="userPassword"
        :rules="[
          { required: true, message: '请输入密码' },
          { min: 8, message: '密码不能小于八位' },
        ]"
      >
        <a-input-password
          v-model:value="formState.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { userLogin } from "@/api/user";
import { useLoginUserStore } from "@/store/useLoginUserStore";
import { message } from "ant-design-vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const loginUserStore = useLoginUserStore();
const router = useRouter();

interface FormState {
  userAccount: string;
  userPassword: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  userAccount: "",
  userPassword: "",
  remember: true,
});

const handleSubmit = async (value: any) => {
  const res = await userLogin(value);
  if (res.data.code === 0 && res.data.data) {
    await loginUserStore.fetchLoginUser();
    message.success("登录成功");
    router.push({
      path: "/",
      replace: true,
    });
  }
};
</script>

<style scoped>
#userLoginPage {
  margin: 0 auto;
  text-align: center;
  margin-bottom: 16px;
}
</style>
