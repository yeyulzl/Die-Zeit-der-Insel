<template>
  <div class="home">
    <el-container>
      <el-header class="bg-white shadow-sm">
        <div class="flex justify-between items-center h-full">
          <h1 class="text-xl font-bold">我的记录网站</h1>
          <el-button type="primary" @click="$router.push('/login')">
            登录
          </el-button>
        </div>
      </el-header>
      <el-main>
        <div class="max-w-6xl mx-auto">
          <h2 class="text-2xl mb-6">欢迎使用记录网站</h2>
          <p class="text-gray-600">开始记录你的想法、代码和创作...</p>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
// 首页逻辑
</script>