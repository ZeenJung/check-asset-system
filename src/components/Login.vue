<template>
    <header class="navbar">
      <div class="navbar-title">ระบบตรวจครุภัณฑ์ ประจำปี 2568</div>
    </header>
    <div class="container mt-4">
      <h3 class="mb-3">รายการทรัพย์สิน</h3>
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
            <td><span class="badge bg-success">Normal</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <style scoped>
  .navbar {
    width: 100%; /* ยาวเต็มจอ */
    background-color: #03126A;
    padding: 16px 24px; /* padding บนล่าง 16px, ซ้ายขวา 24px */
    box-sizing: border-box; /* กัน padding ดันความกว้างเกิน 100% */
    position: fixed; /* ติดอยู่ด้านบน */
    top: 0;
    left: 0;
    z-index: 1000; /* อยู่บนสุด */
  }
  
  .navbar-title {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: left; /* ชิดซ้าย */
  }
  
  body {
    font-family: 'Sarabun', sans-serif;
  }
  </style>
  