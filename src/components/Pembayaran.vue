<template>
  <div class="toolbar">
    <p>Detail Order #XXXX</p>
    <div class="form-action">
      <button class="button">Kirim</button>
      <button class="button">Batal</button>
    </div>
  </div>
  <div class="login-wrapper">
    <form action="">
      <div class="input-group">
        <p>Tanggal 03/12/22</p>
        <label> Bank</label>
        <input type="text" name="username" placeholder="" />
      </div>
      <div class="input-group">
        <label>Kuota </label>
        <input type="text" name="login" placeholder="" />
      </div>
      <div class="input-group">
        <label>Nama Penerima</label>
        <input type="text" name="login" placeholder="" />
      </div>
      <div class="input-group">
        <label>No Rekening Tujuan</label>
        <input type="text" name="login" placeholder="" />
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
}
.login-wrapper form {
  max-width: 500px;
}
.toolbar {
  display: flex;
  padding: 15px;
}
.toolbar > *:first-child {
  margin-right: auto;
}
</style>
