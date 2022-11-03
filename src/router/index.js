import { createRouter, createWebHistory } from "vue-router";
import Homepage from "/src/components/Homepage.vue";
import Login from "/src/components/Login.vue";
import Signup from "/src/components/Signup.vue";
import ForgetPassword from "/src/components/ForgetPassword.vue";
import DashboardAdmin from "/src/components/DashboardAdmin.vue";
import DaftarRestoran from "/src/components/DaftarRestoran.vue";
import RestoranMenu from "/src/components/RestoranMenu.vue";
import DaftarOrder from "/src/components/DaftarOrder.vue";
import OrderTambah from "/src/components/OrderTambah.vue";
import OrderDetail from "/src/components/OrderDetail.vue";
import Pembayaran from "/src/components/Pembayaran.vue";

const routes = [
  { path: "/", component: Homepage, name: "Home" },
  { path: "/login", component: Login, name: "login" },
  { path: "/Signup", component: Signup, name: "Signup" },
  { path: "/ForgetPassword", component: ForgetPassword, name: "ForgetPassword" },
  { path: "/dashboardadmin", component: DashboardAdmin, name: "DashboardAdmin" },
  { path: "/restoran", component: DaftarRestoran, name: "Restoran" },
  { path: "/restoran/:id", component: RestoranMenu, name: "RestoranMenu" },
  { path: "/order", component: DaftarOrder, name: "order" },
  { path: "/order/:id", component: OrderDetail, name: "order detail" },
  { path: "/order-tambah", component: OrderTambah, name: "tambah" },
  { path: "/pembayaran", component: Pembayaran, name: "pembayaran" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
