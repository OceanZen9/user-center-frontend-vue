<template>
  <div id="userRegisterPage">
    <h2 class="title">用户注册</h2>
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

      <a-form-item
        label="确认密码"
        name="checkPassword"
        :rules="[
          { required: true, message: '请输入确认密码' },
          { min: 8, message: '确认密码不能小于八位' },
        ]"
      >
        <a-input-password
          v-model:value="formState.checkPassword"
          placeholder="请输入确认密码"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary" html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { userLogin, userRegister } from "@/api/user";
import { useLoginUserStore } from "@/store/useLoginUserStore";
import { message } from "ant-design-vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const loginUserStore = useLoginUserStore();
const router = useRouter();

interface FormState {
  userAccount: string;
  userPassword: string;
  checkPassword: string;
}

const formState = reactive<FormState>({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
});
/**
 * 提交表单
 * @param value
 */
const handleSubmit = async (value: any) => {
  // 判断输入密码是否一致
  if (formState.userPassword !== formState.checkPassword) {
    message.error("两次输入密码不一致");
    return;
  }
  const res = await userRegister(value);
  if (res.data.code === 0 && res.data.data) {
    await loginUserStore.fetchLoginUser();
    message.success("注册成功");
    router.push({
      path: "/uer/login",
      replace: true,
    });
  }
};
</script>

<style scoped>
#userRegisterPage {
  margin: 0 auto;
  text-align: center;
  margin-bottom: 16px;
}
</style>
