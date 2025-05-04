import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router';

createApp(App).mount('#app')

export default {
  data() {
    return {
      showQRModal: false,
      qrResult: "",
      qrScanner: null,
    };
  },
  methods: {
    openScanner() {
      this.showQRModal = true;

      this.$nextTick(() => {
        this.qrScanner = new Html5Qrcode("qr-reader");
        this.qrScanner.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: 250 },
          (decodedText) => {
            this.qrResult = decodedText;
            this.qrScanner.stop(); // หยุดเมื่อสแกนได้
            // คุณสามารถเปิด Modal รายการทรัพย์สินจาก decodedText ตรงนี้
          },
          (errorMessage) => {
            console.warn(errorMessage);
          }
        );
      });
    },
    closeScanner() {
      this.showQRModal = false;
      if (this.qrScanner) {
        this.qrScanner.stop().then(() => {
          this.qrScanner.clear();
        });
      }
    },
  },
};
