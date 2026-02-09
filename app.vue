<template>
  <div class="app-container">
    <nav class="navbar">
      <NuxtLink to="/" class="nav-item">Home</NuxtLink> |
      <NuxtLink to="/part-b" class="nav-item">Part B (Logic)</NuxtLink> |
      <!-- <NuxtLink to="/part-c" class="nav-item">Part C (UI)</NuxtLink> -->
    </nav>

    <hr />

    <main class="content">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.app-container { 
  font-family: 'Inter', sans-serif;
  padding: 20px;
}

.navbar { 
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
  justify-content: center;
}

.nav-item {
  text-decoration: none;
  color: #00dc82;
  font-weight: bold;
}

.nav-item:hover { color: #008f54; }
.content { padding-top: 20px; }
</style>