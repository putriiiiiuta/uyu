<template>
  <div class="login-bg">
    <img class="login-banner" src="/login-banner.png" alt="" />
    <div class="login-wrapper">
      <form action="">
        <div class="input-group">
          <label> Username</label>
          <input type="text" name="username" placeholder="" />
        </div>
        <div class="input-group">
          <label>Password</label>
          <input type="text" name="login" placeholder="" />
        </div>
        <div class="align-center action">
          <button class="button">Login</button>
          <p>Tidak memiliki akun? <router-link to="/Signup">Daftar sekarang</router-link></p>
          <p><router-link to="/ForgetPassword">Lupa Password?</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.login-bg {
  background-color: #FCEED5;
  min-height: calc(100vh - 84px);
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
}
p {
  margin-bottom: 10px;
  margin-top: 10px;
}
.login-wrapper {
  background-color: #fff;
  box-shadow: 0 5px 15px #333;
  width: 500px;
  height: fit-content;
  padding: 50px 100px;
  margin: auto;
  margin-right: 100px;
  border-radius: 10px;
}
.action,
.action a {
  color: #FCEED5;
  font-weight: 700;
  text-decoration: none;
}
.login-banner {
  width: 250px;
  height: fit-content;
  margin: auto;
}
</style>
