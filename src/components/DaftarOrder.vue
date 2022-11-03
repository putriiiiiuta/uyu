<script setup>
const role = "restoran";
const showAksi = ["admin", "kurir"].includes(role);
</script>
<template>
  <div class="admin-container">
    <h2>Daftar order</h2>
    <div class="toolbar-top">
      <form class="search-box">
        <img src="/search.png" alt="" />
        <input type="text" class="search" />
      </form>
      <router-link class="nav-item" to="/order-tambah" v-if="role == 'restoran'" tag="button">Order baru</router-link>
    </div>

    <table class="table is-striped">
      <thead>
        <tr>
          <th>Nama Restoran</th>
          <th><abbr title="Menu">Nama Makanan</abbr></th>
          <th><abbr title="Ouota">Jumlah Order</abbr></th>
          <th><abbr title="Alamat">Total Bayar</abbr></th>
          <th><abbr title="Area">Tanggal/Hari</abbr></th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10">
          <td>Restoran A</td>
          <td>Ayam goreng</td>
          <td>2</td>
          <td>Rp.10.000</td>
          <td>{{ i + 20 }}/10/2022</td>
          <td>Selesai</td>
          <td>
            <router-link :to="`/order/${i}`">Lihat</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
