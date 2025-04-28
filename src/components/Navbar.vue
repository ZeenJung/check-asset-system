<template>
  <header class="navbar">
    <div class="navbar-title">ระบบตรวจครุภัณฑ์ ประจำปี 2568</div>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

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
</style>
