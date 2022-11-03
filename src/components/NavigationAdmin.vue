<template>
  <div class="navbar">
    <nav class="navigation">
      <router-link class="nav-item" to="/Restoran">Restoran</router-link>
      <router-link class="nav-item" to="/order">Order saya</router-link>
    </nav>
    <nav class="navigation right">
      <router-link class="nav-item" to="/Logout">Logout</router-link>
    </nav>
  </div>
</template>

<style scoped>
.navigation {
  margin-left: 0px;
}
.navigation.right {
  margin-left: auto;
}
</style>
