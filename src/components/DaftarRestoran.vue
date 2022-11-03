<script setup>
const role = "kurir";
const showAksi = ["admin", "kurir"].includes(role);
</script>
<template>
  <div class="admin-container">
    <h2>Daftar restoran</h2>
    <div class="toolbar-top">
      <form class="search-box">
        <img src="/search.png" alt="" />
        <input type="text" class="search" />
      </form>
    </div>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>Nama</th>
          <th><abbr title="Alamat">Alamat</abbr></th>
          <th v-if="showAksi">Menu Restoran</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10">
          <td>Restoran A</td>
          <td>Jln Merdeka</td>
          <td>
          <router-link :to="`/restoran/${i}`">Lihat</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table.table {
  width: 100%;
}
table.table thead tr > * {
  background-color: #FCEED5;
  color: azure;
}
</style>
