<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "./layout/BasicLayout.vue";
import { useLoginUserStore } from "./store/useLoginUserStore";

const LoginUserStore = useLoginUserStore();
LoginUserStore.fetchLoginUser();
</script>
<style></style>
