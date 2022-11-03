<script setup>
import { ref } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
defineProps({ components: { VueperSlides, VueperSlide }, msg: String });

const slides = [
  {
    title: "",
    image: "/banner.png",
  },
  {
    title: "Banner 1",
    image: "/banner1.png",
  },
];
const count = ref(0);
</script>

<template>
  <div class="content">
    <div class="banner">
      <vueper-slides>
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"> </vueper-slide>
      </vueper-slides>
    </div>

    <div class="greeting">
      <div class="greeting-content"><h3>Selamat Datang di BUY YUMMY, Pesan Makananmu sekarang juga!</h3></div>
    </div>
    <div class="fitur">
      <div class="fitur-item">
        <img src="/c1.png" alt="" />

        <h4>info kuota real-time</h4>
      </div>
      <div class="fitur-item">
        <img src="/c2.png" alt="" />
        <h4>Pembayaran mudah dan fleksibel</h4>
      </div>
      <div class="fitur-item">
        <img src="/images.png" alt="" />

        <h4>lihat cara BuyYummy membantu anda</h4>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style>
.navbar {
  background-color: #FCEED5;
  width: 100%;
  padding: 15px;
  display: flex;
  box-shadow: 0 4px 10px rgba(200, 200, 200, 0.4);
}
.logo {
  text-decoration: none;
  display: block;
  font-size: 25px;
  font-weight: 700;
  color: #fff;
  margin-top: auto;
  margin-bottom: auto;
}
.logo img {
  height: 50px;
}
.navigation {
  display: flex;
  margin-left: auto;
}
.nav-item {
  display: block;
  padding: 7px 10px;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  background-color: #FCEED5;
  border-radius: 10px;
  margin-right: 10px;
  height: fit-content;
}
.greeting {
  background-color: #FCEED5;
  padding: 30px;
  color: #fff;
}
.greeting-content {
  max-width: 500px;
  margin: auto;
}

.banner img {
  width: 100%;
}
.fitur {
  display: flex;
}
.fitur-item {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.fitur-item img {
  width: 200px;
}
.footer {
  height: 50px;
  width: 100%;
  background-color: #FCEED5;
}
</style>
