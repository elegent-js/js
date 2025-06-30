<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" class="bg">
      <el-menu default-active="1">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">用户管理</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>欢迎回来</el-header>
      <el-main>
        <el-card>
          <h3>系统概览</h3>
          <el-button type="primary">新增</el-button>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
// 这里暂时不用写逻辑
</script>

<style>
.bg {
  background-color: #f5f5f5;
}
</style>
