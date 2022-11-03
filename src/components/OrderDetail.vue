<template>
  <div class="form-action">
    <p>Detail Order #XXXX</p>
    <button class="button">Simpan</button>
  </div>
  <div class="login-wrapper">
    <form action="">
      <div class="input-group">
        <label> Jumlah Order</label>
        <input type="text" readonly name="username" placeholder="" />
      </div>
      <div class="input-group">
        <label>Total Harga</label>
        <input type="text" readonly name="login" placeholder="" />
      </div>
      <div class="input-group">
        <label>Nama Restoran</label>
        <input type="text" readonly name="login" placeholder="" />
      </div>
      <div class="input-group">
        <label>Nama Menu</label>
        <input type="text" readonly name="login" placeholder="" />
      </div>
      <div class="input-group">
        <label>Nama Pembeli</label>
        <input type="text" readonly name="login" placeholder="" />
      </div>
      <div class="input-group">
        <label>Status</label>
        <input type="text" readonly name="login" placeholder="" />
      </div>
      <div class="align-center"></div>
    </form>
  </div>
</template>

<style scoped>
.button {
  background-color: #FCEED5;
  color: #fff;
}

.login-wrapper {
  background-color: #fff;
  width: 97%;
  margin-right: auto;
  box-shadow: 0 0 10px #ddd;
  margin-bottom: 30px;
}
.login-wrapper form {
  max-width: 500px;
}
.form-action {
  text-align: left;
  display: flex;
  padding: 10px 15px;
}
.form-action button {
  margin-left: auto;
}
</style>
