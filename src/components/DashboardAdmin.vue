<script setup>
const role = "restoran";
</script>
<template>
  <div class="login-bg">
    <img src="\Frame.png" alt="" class="frame" />
    <div class="login-wrapper">
      <form action="">
        <div class="align-center">
          <p class="title">Welcome to MOLA dashboard</p>
          <label> Selamat datang {{ role }}</label>
        </div>
      </form>
    </div>
    <div v-if="role == 'restoran'" class="login-wrapper info">
      <div class="info-item">
        <h4 class="info-title">kuota gas</h4>
        <div class="value">50</div>
      </div>
      <div class="info-item">
        <h4 class="info-title">Order bulan ini</h4>
        <div class="value">450</div>
      </div>
      <div class="info-item">
        <h4 class="info-title">Order Terakhir</h4>
        <div class="value">3</div>
      </div>
      <div class="info-item">
        <h4 class="info-title">Order aktif</h4>
        <div class="value">1</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  margin-left: auto;
  margin-right: auto;
}
.title {
  border-radius: 10px;
  background-color: #FCEED5;
  padding: 10px;
  color: aliceblue;
  font-size: 15px;
}
.frame {
  height: 200px;
  width: 200px;
  left: 30px;
  top: 30px;
  position: absolute;
}
.login-bg {
  position: relative;
  flex-direction: column;
}
.login-wrapper.info {
  width: 97%;
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  padding: 30px;
  margin-top: 50px;
}
.info-item {
  background-color: #FCEED5;
  padding: 20px;
  color: #ffffff;
  text-align: center;
  border-radius: 10px;
  width: 23%;
  margin-right: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
}
.info-item .value {
  font-size: 30px;
  font-size: 700;
  margin-top: auto;
  margin-bottom: auto;
}
.info-title {
  padding: 5px;
  width: 100%;
  background-color: #FCEED5;
  border-radius: 5px;
}
</style>
