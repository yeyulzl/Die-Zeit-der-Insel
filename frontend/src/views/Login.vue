<template>
  <div class="login-container min-h-screen flex items-center justify-center bg-gray-50">
    <el-card class="w-96">
      <template #header>
        <h2 class="text-center">登录</h2>
      </template>
      <el-form>
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="w-full">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
// 登录页面逻辑
</script>