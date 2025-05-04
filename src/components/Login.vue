<template>
    <header class="navbar">
      <div class="d-flex flex-column align-items-start">
        <img src="/src/assets/ADT_MFU_Logo.png" alt="Logo" width="100" />
        <div class="text-primary small">School of Applied Digital Technology</div>
      </div>
  
      <div class="text-white ms-3">ระบบตรวจครุภัณฑ์ ประจำปี 2568</div>
  
      <a href="#" class="btn text-white ms-auto" role="button">Login</a>
    </header>
  
    <div class="container mt-5 pt-5">
        <nav>
  <!------ Pagination (แบ่งหน้าา) ------->
  <ul class="pagination justify-content-start"> <!-- เปลี่ยน justify-content-center เป็น justify-content-start -->
    <li
      class="page-item"
      :class="{ disabled: currentPage === 1 }"
      @click="goToPage(currentPage - 1)"
    >
      <a class="page-link" href="#"><</a>
    </li>
    <li
      v-for="page in totalPages"
      :key="page"
      class="page-item"
      :class="{ active: currentPage === page }"
      @click="goToPage(page)"
    >
      <a class="page-link" href="#">{{ page }}</a>
    </li>
    <li
      class="page-item"
      :class="{ disabled: currentPage === totalPages }"
      @click="goToPage(currentPage + 1)"
    >
      <a class="page-link" href="#">></a>
    </li>
  </ul>
</nav>

      <!----- Table ----->

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
              <span
                class="badge"
                :class="item.status === 'Normal' ? 'bg-success' : 'bg-warning'"
              >
                {{ item.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
<!----- Java Script ----->
  <script>
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
          {
            img: "/src/assets/Table0001.jpg",
            number: "711000702744414",
            desc: "โต๊ะทำงาน ขนาด 160 x 80 x 75 ซม.",
            location: "E1",
            room: "306",
            status: "Normal",
          },
        ],
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
    },
  };
  </script>

<!----- CSS ----->
  
  <style scoped>
  .table-dark th {
    background-color: #010939 !important;
  color: white !important;
}

  .navbar {
    width: 100%;
    background-color: #010939;
    padding: 16px 24px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
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
  </style>
  