<template>
  <header class="navbar">
    <div class="d-flex flex-column align-items-start">
      <img src="/src/assets/ADT_MFU_Logo.png" alt="Logo" width="100" />
      <div class="text-primary small">School of Applied Digital Technology</div>
    </div>

    <div class="text-white ms-3">ระบบตรวจครุภัณฑ์ ประจำปี 2568</div>

    <div class="d-flex ms-auto gap-2">
      <button class="btn btn-outline-light" @click="openScanner">QRcode</button>
      <a href="#" class="btn btn-outline-light">Login</a>
    </div>
  </header>

  <!-- Modal สแกน QR Code -->
  <div class="modal fade" id="qrModal" tabindex="-1" aria-labelledby="qrModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">สแกน QR Code</h5>
          <button type="button" class="btn-close" @click="closeScanner"></button>
        </div>
        <div class="modal-body">
          <div id="qr-reader" style="width: 100%; min-height: 300px;"></div>
          <p class="mt-3 text-center text-success" v-if="qrResult">QR: {{ qrResult }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-5 pt-5">
    <nav>
      <ul class="pagination justify-content-start">
        <li class="page-item" :class="{ disabled: currentPage === 1 }" @click="goToPage(currentPage - 1)">
          <a class="page-link" href="#">&lt;</a>
        </li>
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }" @click="goToPage(page)">
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }" @click="goToPage(currentPage + 1)">
          <a class="page-link" href="#">&gt;</a>
        </li>
      </ul>
    </nav>

    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>Picture</th>
          <th>Inventory number</th>
          <th>Asset description</th>
          <th>Location</th>
          <th>Room</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedAssets" :key="index">
          <td><img :src="item.img" alt="Asset" width="100" /></td>
          <td>{{ item.number }}</td>
          <td>{{ item.desc }}</td>
          <td>{{ item.location }}</td>
          <td>{{ item.room }}</td>
          <td>
            <span class="badge" :class="item.status === 'Normal' ? 'bg-success' : 'bg-warning'">
              {{ item.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Html5Qrcode } from "html5-qrcode";
import { Modal } from "bootstrap";

export default {
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      assets: [
      {
            img: "/src/assets/Table0001.jpg",
            number: "711000702743014",
            desc: "โต๊ะทำงาน ขนาด 160 x 80 x 75 ซม.",
            location: "E1",
            room: "306",
            status: "Normal",
          },
          {
            img: "/src/assets/Table0001.jpg",
            number: "711000702741114",
            desc: "โต๊ะทำงาน ขนาด 160 x 80 x 75 ซม.",
            location: "E1",
            room: "306",
            status: "Normal",
          },
          {
            img: "/src/assets/chair0001.jpg",
            number: "711000702744414",
            desc: "เก้าอี้ทำงาน ขนาด 50*45*85 ซม. 148/106",
            location: "E1",
            room: "306",
            status: "Damaged",
          },
          {
            img: "/src/assets/chair0001.jpg",
            number: "711000702744414",
            desc: "เก้าอี้ทำงาน ขนาด 50*45*85 ซม. 148/106",
            location: "E1",
            room: "306",
            status: "Normal",
          },
          {
            img: "/src/assets/Table0001.jpg",
            number: "711000702744414",
            desc: "โต๊ะทำงาน ขนาด 160 x 80 x 75 ซม.",
            location: "E1",
            room: "306",
            status: "Normal",
          },
          {
            img: "/src/assets/chair0001.jpg",
            number: "711000702744414",
            desc: "เก้าอี้ทำงาน ขนาด 50*45*85 ซม. 148/106",
            location: "E1",
            room: "306",
            status: "Damaged",
          },
          {
            img: "/src/assets/chair0001.jpg",
            number: "711000702744414",
            desc: "เก้าอี้ทำงาน ขนาด 50*45*85 ซม. 148/106",
            location: "E1",
            room: "306",
            status: "Normal",
          },
          {
            img: "/src/assets/chair0001.jpg",
            number: "711000702744414",
            desc: "เก้าอี้ทำงาน ขนาด 50*45*85 ซม. 148/106",
            location: "E1",
            room: "306",
            status: "Damaged",
          },
          {
            img: "/src/assets/Table0001.jpg",
            number: "711000702744414",
            desc: "โต๊ะทำงาน ขนาด 160 x 80 x 75 ซม.",
            location: "E1",
            room: "306",
            status: "Normal",
          },
          {
            img: "/src/assets/Table0001.jpg",
            number: "711000702744414",
            desc: "โต๊ะทำงาน ขนาด 160 x 80 x 75 ซม.",
            location: "E1",
            room: "306",
            status: "Normal",
          },
          {
            img: "/src/assets/Table0001.jpg",
            number: "711000702744414",
            desc: "โต๊ะทำงาน ขนาด 160 x 80 x 75 ซม.",
            location: "E1",
            room: "306",
            status: "Normal",
          },
          {
            img: "/src/assets/Table0001.jpg",
            number: "711000702744414",
            desc: "โต๊ะทำงาน ขนาด 160 x 80 x 75 ซม.",
            location: "E1",
            room: "306",
            status: "Normal",
          },
      ],
      qrResult: "",
      qrScanner: null,
    };
  },
  computed: {
    paginatedAssets() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.assets.slice(start, start + this.perPage);
    },
    totalPages() {
      return Math.ceil(this.assets.length / this.perPage);
    },
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    openScanner() {
      const modalEl = document.getElementById("qrModal");
      const modal = new Modal(modalEl);
      modal.show();

      this.$nextTick(() => {
        this.qrScanner = new Html5Qrcode("qr-reader");
        this.qrScanner.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: 250 },
          (decodedText) => {
            this.qrResult = decodedText;
            this.qrScanner.stop();
            modal.hide();
          },
          (errorMessage) => {
            console.warn(errorMessage);
          }
        );
      });
    },
    closeScanner() {
      const modalEl = document.getElementById("qrModal");
      const modal = Modal.getInstance(modalEl);
      if (modal) modal.hide();

      if (this.qrScanner) {
        this.qrScanner.stop().then(() => {
          this.qrScanner.clear();
        });
      }
    },
  },
};
</script>

<style scoped>
.table-dark th {
  background-color: #010939 !important;
  color: white !important;
}

.navbar {
  width: 100%;
  background-color: #010939;
  padding: 16px 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
}

.navbar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
  background-color: white;
  z-index: -1;
}

.badge {
  font-size: 1rem;
}

.table img {
  border-radius: 4px;
}

body {
  font-family: 'Sarabun', sans-serif;
}

.modal-backdrop.show {
  opacity: 0.5;
}
</style>
