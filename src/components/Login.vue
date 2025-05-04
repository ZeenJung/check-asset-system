<template>
    <header class="navbar">
  <div class="d-flex flex-column align-items-start">
    <img src="/src/assets/ADT_MFU_Logo.png" alt="Table" width="100" />
    <div class="text-primary small">School of Applied Digital Technology</div>
  </div>

  <div class="text-white ms-3">ระบบตรวจครุภัณฑ์ ประจำปี 2568</div>

  <a href="#" class="btn text-white ms-auto" role="button">Login</a>

</header>

    <div class="container mt-4">
      <h3 class="badge text-bg-dark">รายการทรัพย์สิน</h3>
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
          <tr>
            <td><img src="/src/assets/Table0001.jpg" alt="Table" width="100" /></td>
            <td>711000702743014</td>
            <td>โต๊ะทำงาน ขนาด 160 x 80 x 75 ซม.</td>
            <td>E1</td>
            <td>306</td>
            <td><span class="badge bg-success">Normal</span></td>
          </tr>
          <tr>
            <td><img src="/src/assets/Table0001.jpg" alt="Table" width="100" /></td>
            <td>711000702741114</td>
            <td>โต๊ะทำงาน ขนาด 160 x 80 x 75 ซม.</td>
            <td>E1</td>
            <td>306</td>
            <td><span class="badge bg-success">Normal</span></td>
          </tr>
          <tr>
            <td><img src="/src/assets/Table0001.jpg" alt="Table" width="100" /></td>
            <td>711000702744414</td>
            <td>โต๊ะทำงาน ขนาด 160 x 80 x 75 ซม.</td>
            <td>E1</td>
            <td>306</td>
            <td><span class="badge bg-warning">Damaged</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <style scoped>
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
    z-index: -1; /* อยู่ใต้ navbar */
}
  
  body {
    font-family: 'Sarabun', sans-serif;
  }
  </style>
  