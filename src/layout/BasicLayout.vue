<script setup lang="ts">
import { getCurrentUser } from "@/api/user";
import GlobalHeader from "@/components/GlobalHeader.vue";

getCurrentUser().then((res) => {
  console.log("当前用户信息", res);
});
</script>

<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://codefather.cn" target="_blank"> 编程导航 </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout .footer {
  background-color: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}

#basicLayout .content {
  margin: 24px 16px 0;
  padding-bottom: 60px; /* 留出底部空间，避免内容被遮挡 */
  background: linear-gradient(to right, #efefef, #ffffff);
}

#basicLayout .header {
  background: #ffffff;
  padding-inline: 20px;
  margin-bottom: 16ox;
  color: unset;
}
</style>
